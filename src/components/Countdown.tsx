"use client"

import { useEffect, useState } from "react"

interface CountdownProps {
  targetDate: Date
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface TimeUnitProps {
  value: number
  label: string
}

const TimeUnit = ({ value, label }: TimeUnitProps): React.JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl 
                    w-[80px] h-[100px] sm:w-[100px] sm:h-[120px] lg:w-[120px] lg:h-[140px] xl:w-[140px] xl:h-[160px]"
    >
      <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs sm:text-sm lg:text-base xl:text-lg text-white/70 uppercase tracking-wide mt-1">
        {label}
      </span>
    </div>
  )
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = Date.now()
  const distance = targetDate.getTime() - now

  if (distance > 0) {
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    }
  } else {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
}

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Calculate initial value immediately on mount
    setTimeLeft(calculateTimeLeft(targetDate))
    setIsMounted(true)

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return { timeLeft, isMounted }
}

export const Countdown = ({
  targetDate,
}: CountdownProps): React.JSX.Element => {
  const { timeLeft, isMounted } = useCountdown(targetDate)

  return (
    <div className={`mt-8 sm:mt-12 mb-6 sm:mb-8`}>
      <div
        className={`flex justify-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8 transition-opacity duration-300 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  )
}
