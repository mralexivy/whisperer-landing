import appIcon from "@/assets/app-icon.png";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#product" },
      { label: "Pro Pack", href: "#pro-pack" },
      { label: "How it works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "mailto:support@whisperer.app" },
      { label: "Troubleshooting", href: "#" },
      { label: "Feature Requests", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer id="support" className="py-16 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={appIcon} alt="Whisperer" className="w-10 h-10 rounded-xl" />
              <span className="text-xl font-semibold text-foreground">Whisperer</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Offline dictation for Mac. Hold Fn, speak, release. Text inserts anywhere.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Powered by whisper.cpp</p>
              <p>Whisper is an OpenAI model</p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Whisperer. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="mailto:support@whisperer.app" className="hover:text-foreground transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
