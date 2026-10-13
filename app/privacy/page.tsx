import { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  Shield,
  Mic,
  Video,
  HardDrive,
  CreditCard,
  Users,
  FileEdit,
  Scale,
  Mail,
  Globe,
  Server,
  Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | 100% Offline Dictation for Mac",
  description:
    "Whisperer privacy policy. All transcription happens on-device. No accounts, no audio uploads, no telemetry, no analytics. Your voice data never leaves your Mac.",
  alternates: { canonical: "https://whispererapp.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(233_91%_66%/0.08),transparent_50%)]" />
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
              Last Updated: October 13, 2026
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Overview */}
          <section>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whisperer is a voice-to-text productivity app for macOS. All speech processing happens on your Mac. This page explains what data the app collects (none) and how it handles the data you create.
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
            <h2 className="text-2xl font-semibold mb-6">Audio and Transcripts</h2>
            <div className="space-y-4">
              {[
                { text: "All audio recording and transcription happens 100% on your Mac", highlight: "100% on your Mac" },
                { text: "Audio is never uploaded to any server or cloud service", highlight: "never uploaded" },
                { text: "Transcripts are stored locally and belong to you", highlight: "stored locally" },
                { text: "There are no accounts and no sign-in, so nothing is tied to an identity" },
                { text: "You can delete any recording or transcript at any time" },
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
          </section>

          {/* Audio Retention */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Audio Retention</h2>
                <p className="text-muted-foreground">You choose how long audio stays on disk</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Whisperer lets you set an audio retention period. The app deletes audio files automatically once they pass the period you pick. The available settings are:
            </p>
            <div className="flex flex-wrap gap-3">
              {["Never keep audio", "7 days", "30 days", "90 days", "365 days"].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Network Usage */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Network Usage</h2>
            <p className="text-muted-foreground mb-4">The app uses the network for one purpose only:</p>
            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold mb-2">Model Downloads</h3>
                <p className="text-muted-foreground text-sm">
                  Whisperer downloads AI model weights from Hugging Face. The speech model is about 2.5 GB. The language model is about 3.2 GB. These files are data files, not executable code. The download sends no personal information.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold mb-2">No Telemetry</h3>
                <p className="text-muted-foreground text-sm">
                  The app sends no analytics, no tracking events, and no crash reports. There are no ads and no ad networks.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mt-6">
              After the models are downloaded, <span className="text-foreground font-medium">the app works completely offline</span>. No internet connection is required for transcription.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Third-Party Services</h2>
            <div className="space-y-3">
              {[
                { label: "Hugging Face", desc: "Used solely to download open-source AI model weights. No personal data is transmitted." },
                { label: "Apple App Store", desc: "Handles the Pro Pack purchase. Apple processes all payment information under its own privacy policy." },
                { label: "No Analytics", desc: "The app does not use Google Analytics, Mixpanel, Segment, or any other analytics platform." },
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
              Whisperer asks for the following macOS permissions:
            </p>
            <div className="grid gap-4">
              {[
                {
                  icon: Mic,
                  title: "Microphone",
                  purpose: "Record your voice for transcription",
                  desc: "The microphone permission lets the app capture audio while you hold the recording shortcut. The app processes that audio on your device and never transmits it over the network."
                },
                {
                  icon: Video,
                  title: "Camera (optional, off by default)",
                  purpose: "Tell a video call apart from an audio-only app",
                  desc: "This permission is opt-in. If you turn it on, Whisperer only checks whether the camera is currently in use by another app. It never captures, records, or views camera video. You can leave this permission off and the app works normally."
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

          {/* Meeting Notes */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Meeting Notes</h2>
                <p className="text-muted-foreground">Your microphone only, stored on your Mac</p>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              {[
                { text: "Meeting Notes records your microphone only", highlight: "your microphone only" },
                { text: "The app never records system audio and never records other participants' audio streams", highlight: "never records system audio" },
                { text: "Recordings and notes stay on your Mac and are never uploaded" },
                { text: "Whisperer shows a consent screen before your first meeting recording" },
                { text: "Your audio retention setting also applies to meeting audio" },
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
            <div className="p-4 bg-muted/50 rounded-xl mb-6">
              <code className="text-sm text-muted-foreground break-all">
                ~/Library/Application Support/Whisperer/Sessions/
              </code>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Your responsibility for consent</h3>
              <p className="text-muted-foreground text-sm">
                Recording law differs by country and by state. You are responsible for obtaining consent from the other participants where local law requires it. Whisperer cannot determine which law applies to your meeting.
              </p>
            </div>
          </section>

          {/* MCP Server */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">MCP Server</h2>
                <p className="text-muted-foreground">Off by default, loopback-only, token protected</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Whisperer includes a local HTTP server that can expose your own transcript history to AI tools you already use, such as Claude, Cursor, and ChatGPT. The server is designed to stay closed unless you open it:
            </p>
            <div className="space-y-3">
              {[
                { text: "The server is off by default", highlight: "off by default" },
                { text: "When enabled, it listens on the loopback interface only, so only your Mac can reach it", highlight: "loopback interface only" },
                { text: "Every request requires a bearer token", highlight: "bearer token" },
                { text: "Access from your local network is a separate, explicit opt-in" },
                { text: "The server sends nothing to us and nothing to the internet; your AI tool reads the data you allow" },
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
          </section>

          {/* Open at Login */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Open at Login</h2>
            <p className="text-muted-foreground">
              Whisperer can start when you log in. It uses the system <code className="text-sm text-foreground bg-muted px-2 py-1 rounded">SMAppService</code> API and installs no helper app. You can turn it on or off inside Whisperer, or in System Settings under Login Items.
            </p>
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
                    { label: "AI Models", path: "~/Library/Application Support/Whisperer/", note: "~2.5 GB speech, ~3.2 GB language" },
                    { label: "Meeting Sessions", path: "~/Library/Application Support/Whisperer/Sessions/", note: "audio honours your retention setting" },
                    { label: "Transcript History", path: "~/Library/Application Support/Whisperer/", note: "local database" },
                    { label: "Settings", path: "macOS UserDefaults", note: "local storage" },
                    { label: "Logs", path: "~/Library/Logs/Whisperer/", note: "for troubleshooting" },
                  ].map((item, i) => (
                    <tr key={i}>
                      <td className="px-5 py-4 font-medium align-top">{item.label}</td>
                      <td className="px-5 py-4 align-top">
                        <code className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded break-all">
                          {item.path}
                        </code>
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground align-top">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4 font-medium">
              No data is stored in iCloud or any other cloud service.
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
            <p className="text-muted-foreground mb-4">If you buy the Pro Pack:</p>
            <div className="space-y-3">
              {[
                "The Pro Pack is a one-time purchase, not a subscription",
                "Apple's App Store processes the purchase",
                "Apple handles all payment information under its own privacy policy",
                "We receive only a confirmation that the purchase completed",
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
              Whisperer does not knowingly collect any information from children under 13. The app collects no personal information from users of any age.
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
              We may update this privacy policy from time to time. We post any change at this URL with a new "Last Updated" date. If you continue to use the app after a change, you accept the updated policy.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">We do not collect or store any personal data. As a result:</p>
            <div className="space-y-3">
              {[
                "There is no personal data held by us to access, correct, or delete",
                "All app data stays on your device and remains under your control",
                "You can delete your transcripts and recordings inside the app at any time",
                "You can remove all app data by deleting the folders listed above and uninstalling the app",
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
                href="mailto:support@whispererapp.com"
                className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">support@whispererapp.com</span>
              </a>
              <a
                href="https://whispererapp.com"
                className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
              >
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-foreground">whispererapp.com</span>
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
                "California Consumer Privacy Act (CCPA) — not applicable, as we collect no personal data",
                "General Data Protection Regulation (GDPR) — not applicable, as we collect no personal data",
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
              Everything happens on your Mac. Nothing goes to the cloud. We collect no personal information.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
