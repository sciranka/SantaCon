interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps): React.JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  )
}
