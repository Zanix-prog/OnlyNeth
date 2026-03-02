const Footer = () => {
  const socialLinks = [
    { name: "Discord", icon: "💬", href: "https://discord.gg/CkdfumcRz8" },
  ];

  return (
    <footer className="relative py-20 px-6 bg-background border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Logo and identity */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-40" />
              <h3 className="relative text-4xl font-black font-[Orbitron] text-glow">
                ONLYNETH
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Precision in Crystal PvP.  
              Authority in SMP warfare.  
              Mineheart and Minesteal under constant pressure.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-[Orbitron] font-bold tracking-wider">
                ACTIVE OPERATIONS
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold font-[Orbitron] text-secondary mb-6">
              Navigate
            </h4>

            <nav className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Roster", href: "#roster" },
                { label: "Projects", href: "#projects" },
                { label: "Join OnlyNeth", href: "#join" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors font-[Orbitron]"
                >
                  ▸ {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold font-[Orbitron] text-secondary mb-6">
              Connect
            </h4>

            <div className="space-y-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{social.icon}</span>
                  </div>
                  <span className="font-[Orbitron] text-muted-foreground group-hover:text-foreground transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-12" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Emblem */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-40 animate-pulse-glow" />
              
              <div className="relative w-full h-full rounded-full border-2 metallic-border flex items-center justify-center bg-card/60 backdrop-blur">
                <span className="text-2xl font-black font-[Orbitron] text-primary">
                  N
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm font-[Orbitron] text-foreground font-bold tracking-wide">
                ONLYNETH
              </p>
              <p className="text-xs text-muted-foreground">
                SMP • Crystal PvP • Competitive Division
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} OnlyNeth. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground font-[Orbitron] tracking-widest">
              STRATEGY • CONTROL • EXECUTION
            </p>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-12 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary opacity-40 rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;