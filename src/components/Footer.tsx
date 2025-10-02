export const Footer = (): React.JSX.Element => {
  return (
    <footer className="mt-auto bg-white/3 backdrop-blur-sm ">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Event Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white/80 mb-4">
              Event Details
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>📅 Date: December 5th, 2025</li>
              <li>🕐 Time: 7:00 PM Start</li>
              <li>📍 Location: Bratislava, Funus</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white/80 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="https://www.instagram.com/santaconba"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📷 Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/santaconba"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📱 X (Twitter)
                </a>
              </li>
            </ul>
          </div>

          {/* Important Info */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold text-white/80 mb-4">
              Important
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>🎅 Costume Required</li>
              <li>🍺 Drink Irresponsibly</li>
              <li>❤️ Respect Others</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © 2025 SantaCon Bratislava. Made with ❤️ for the holiday spirit.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Please celebrate responsibly and spread joy to everyone around you.
          </p>
        </div>
      </div>
    </footer>
  )
}
