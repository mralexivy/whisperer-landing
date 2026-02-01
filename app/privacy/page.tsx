import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  Shield,
  Mic,
  Accessibility,
  Keyboard,
  HardDrive,
  CreditCard,
  Users,
  FileEdit,
  Scale,
  Mail,
  Globe
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_50%/0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Privacy First</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last Updated: February 1, 2026
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Overview */}
          <section>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whisperer is a voice-to-text transcription app for macOS that processes audio entirely on your device. We are committed to protecting your privacy.
            </p>
          </section>

          {/* Data Collection Highlight */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
                <p className="text-xl text-primary font-medium">
                  We do not collect any personal data.
                </p>
              </div>
            </div>
          </section>

          {/* Audio Data */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Audio Data</h2>
            <div className="space-y-4">
              {[
                { text: "All audio recording and transcription happens 100% locally on your Mac", highlight: "100% locally" },
                { text: "Audio is never uploaded to any server or cloud service", highlight: "never uploaded" },
                { text: "Audio recordings are optionally saved to your local disk only", highlight: "optionally saved" },
                { text: "You have full control over saved recordings and can delete them at any time" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="text-muted-foreground">
                    {item.highlight ? (
                      <>
                        {item.text.split(item.highlight)[0]}
                        <span className="text-foreground font-medium">{item.highlight}</span>
                        {item.text.split(item.highlight)[1]}
                      </>
                    ) : item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-xl">
              <code className="text-sm text-muted-foreground">
                ~/Library/Application Support/Whisperer/Recordings/
              </code>
            </div>
          </section>

          {/* Network Usage */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Network Usage</h2>
            <p className="text-muted-foreground mb-4">The app uses network connectivity only for:</p>
            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold mb-2">Model Downloads</h3>
                <p className="text-muted-foreground text-sm">
                  On first launch, the app downloads AI models from Hugging Face. These downloads are one-time and contain no personal information.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold mb-2">No Telemetry</h3>
                <p className="text-muted-foreground text-sm">
                  We do not use analytics, tracking, or crash reporting services that transmit data.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mt-6">
              After the initial model download, <span className="text-foreground font-medium">the app works completely offline</span>. No internet connection is required for transcription.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Third-Party Services</h2>
            <div className="space-y-3">
              {[
                { label: "Hugging Face", desc: "Used solely to download open-source whisper.cpp AI models. No personal data is transmitted." },
                { label: "No Analytics", desc: "We do not use Google Analytics, Mixpanel, Segment, or any other analytics platform." },
                { label: "No Ads", desc: "The app contains no advertising or ad networks." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">{item.label}:</span> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Permissions */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Permissions Explained</h2>
            <p className="text-muted-foreground mb-6">
              Whisperer requires the following macOS permissions to function:
            </p>
            <div className="grid gap-4">
              {[
                {
                  icon: Mic,
                  title: "Microphone Access",
                  purpose: "Record your voice for transcription",
                  desc: "The microphone permission allows the app to capture audio when you hold the recording shortcut. This audio is processed entirely on your device and is never transmitted over the network."
                },
                {
                  icon: Accessibility,
                  title: "Accessibility Permission",
                  purpose: "Insert transcribed text into applications",
                  desc: "The Accessibility permission allows Whisperer to automatically paste the transcribed text into any text field you're focused on. This is a macOS system permission required for cross-application text insertion."
                },
                {
                  icon: Keyboard,
                  title: "Input Monitoring Permission",
                  purpose: "Detect keyboard shortcuts globally",
                  desc: "Input Monitoring allows the app to detect when you press and release your recording shortcut (e.g., the Fn key) while using other applications."
                },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-primary mb-2">{item.purpose}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data Storage */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <HardDrive className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Data Storage</h2>
                <p className="text-muted-foreground">All data remains on your device</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody className="divide-y divide-border">
                  {[
                    { label: "AI Models", path: "~/Library/Application Support/Whisperer/", note: "~500MB to 3GB" },
                    { label: "Optional Recordings", path: "~/Library/Application Support/Whisperer/Recordings/", note: "if enabled" },
                    { label: "Settings", path: "macOS UserDefaults", note: "local storage" },
                    { label: "Logs", path: "~/Library/Logs/Whisperer/", note: "for troubleshooting" },
                  ].map((item, i) => (
                    <tr key={i}>
                      <td className="px-5 py-4 font-medium">{item.label}</td>
                      <td className="px-5 py-4">
                        <code className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                          {item.path}
                        </code>
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4 font-medium">
              No data is stored in iCloud or any cloud service.
            </p>
          </section>

          {/* In-App Purchases */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">In-App Purchases</h2>
            </div>
            <p className="text-muted-foreground mb-4">If you purchase the Pro Pack upgrade:</p>
            <div className="space-y-3">
              {[
                "The purchase is processed through Apple's App Store",
                "Apple handles all payment information according to their privacy policy",
                "We receive only a notification that the purchase was completed",
                "No payment information is accessible to us",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Children's Privacy</h2>
            </div>
            <p className="text-muted-foreground">
              Whisperer does not knowingly collect any information from children under 13. The app does not collect any personal information from users of any age.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <FileEdit className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
            </div>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. Any changes will be posted at this URL with an updated "Last Updated" date. Continued use of the app after changes indicates acceptance of the updated policy.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">Since we don't collect or store any personal data:</p>
            <div className="space-y-3">
              {[
                "There is no personal data to access, modify, or delete",
                "All app data is stored locally on your device",
                "You can delete all app data by uninstalling the app or manually deleting the folders listed above",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <p className="text-muted-foreground mb-6">For privacy questions or concerns:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:support@whisperer.app"
                className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">support@whisperer.app</span>
              </a>
              <a
                href="https://whisperer.app"
                className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
              >
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-foreground">whisperer.app</span>
              </a>
            </div>
          </section>

          {/* Compliance */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Compliance</h2>
            </div>
            <p className="text-muted-foreground mb-4">Whisperer complies with:</p>
            <div className="space-y-3">
              {[
                "Apple's App Store Review Guidelines",
                "California Consumer Privacy Act (CCPA) — N/A as we collect no personal data",
                "General Data Protection Regulation (GDPR) — N/A as we collect no personal data",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-lg font-medium">
              Whisperer is a privacy-first app. Everything happens on your device, nothing is sent to the cloud, and we don't collect any personal information.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
