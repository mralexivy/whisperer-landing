import { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  FileText,
  Download,
  CreditCard,
  Mic,
  Server,
  Package,
  AlertTriangle,
  ShieldAlert,
  Scale,
  FileEdit,
  Ban,
  Mail,
  Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Whisperer for Mac",
  description:
    "Whisperer Terms of Use. License, Pro Pack one-time purchase, acceptable use, meeting recording responsibility, warranty disclaimer, and limitation of liability.",
  alternates: { canonical: "https://whispererapp.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(233_91%_66%/0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Terms of Use
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
              These terms govern your use of Whisperer, a voice-to-text productivity app for macOS. If you download, install, or use the app, you accept these terms. If you do not accept them, do not use the app.
            </p>
          </section>

          {/* License */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Your License</h2>
                <p className="text-muted-foreground">
                  We grant you a personal, non-exclusive, non-transferable license to use Whisperer on the Apple devices you own or control. Apple's Licensed Application End User License Agreement also applies to your copy of the app. We own the app and all rights in it. This license does not transfer ownership to you.
                </p>
              </div>
            </div>
          </section>

          {/* Acceptable Use */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Ban className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Acceptable Use</h2>
                <p className="text-muted-foreground">What you agree not to do</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Do not use the app for any unlawful purpose",
                "Do not reverse engineer, decompile, or disassemble the app, except where local law grants you that right",
                "Do not resell, sublicense, rent, or redistribute the app",
                "Do not remove or alter any copyright, trademark, or license notice",
                "Do not record any person where the recording would break the law that applies to you",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pro Pack */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Pro Pack and Payment</h2>
                <p className="text-muted-foreground">One-time purchase, not a subscription</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { text: "The Pro Pack is a one-time, non-consumable in-app purchase", highlight: "one-time, non-consumable" },
                { text: "There is no subscription and no recurring charge", highlight: "no subscription" },
                { text: "Apple's App Store processes the purchase and holds all payment information" },
                { text: "Apple handles all refunds under its own refund policy; request a refund through Apple, not through us", highlight: "Apple handles all refunds" },
                { text: "You can restore the purchase on your other Macs through the same Apple Account" },
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

          {/* Model Downloads */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Download className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Model Downloads</h2>
                <p className="text-muted-foreground">Large data files from Hugging Face</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Whisperer downloads AI model weights from Hugging Face before it can transcribe. The speech model is about 2.5 GB. The language model is about 3.2 GB. These files are data files, not executable code.
            </p>
            <p className="text-muted-foreground">
              You need an internet connection and enough free disk space for the download. Your data plan may charge you for the transfer. After the download finishes, the app transcribes offline.
            </p>
          </section>

          {/* Meeting Recording */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mic className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Meeting Recording and Consent</h2>
                <p className="text-muted-foreground">You are responsible for consent</p>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              {[
                { text: "Meeting Notes records your microphone only", highlight: "your microphone only" },
                { text: "The app never records system audio and never records other participants' audio streams" },
                { text: "Whisperer shows a consent screen before your first meeting recording" },
                { text: "Recordings and notes stay on your Mac" },
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
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Recording law is your responsibility</h3>
              <p className="text-muted-foreground text-sm">
                Recording law differs by country and by state. Some places require every party to consent. You are responsible for obtaining consent from the other participants where the law that applies to you requires it. We are not liable for any recording you make.
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
                <p className="text-muted-foreground">Optional local access for your AI tools</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Whisperer can run a local HTTP server that exposes your own transcript history to AI tools you already use. The server is off by default. It listens on the loopback interface by default and requires a bearer token. Access from your local network is a separate, explicit opt-in.
            </p>
            <p className="text-muted-foreground">
              If you enable the server, you control which tools you connect and what they do with your transcripts. Keep your bearer token private. We are not responsible for how a third-party tool handles data you choose to share with it.
            </p>
          </section>

          {/* Third-Party Models */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Third-Party Models and Components</h2>
                <p className="text-muted-foreground">Open source, permissively licensed</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Whisperer uses open-source AI models and components released under Apache 2.0, MIT, and similar permissive licenses. Those licenses govern the components themselves. The app includes an Acknowledgements screen that lists each component and its license.
            </p>
          </section>

          {/* Accuracy */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Accuracy of Output</h2>
            </div>
            <p className="text-muted-foreground">
              Speech recognition and AI text generation make mistakes. Transcripts, summaries, and meeting notes can contain errors. Review the output before you rely on it. Do not use the output as the sole basis for a legal, medical, financial, or safety decision.
            </p>
          </section>

          {/* Warranty */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">No Warranty</h2>
            </div>
            <p className="text-muted-foreground">
              The app is provided "as is" and "as available", without warranty of any kind. To the maximum extent the law allows, we disclaim all warranties, express or implied. This includes the implied warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement. We do not warrant that the app will be uninterrupted, error free, or free of defects.
            </p>
          </section>

          {/* Liability */}
          <section>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              To the maximum extent the law allows, we are not liable for any indirect, incidental, special, consequential, or punitive damages. This includes lost profits, lost data, lost recordings, and business interruption, even if we were advised that such damage was possible.
            </p>
            <p className="text-muted-foreground">
              Our total liability for any claim related to the app is limited to the amount you paid for the app and any in-app purchase. Some jurisdictions do not allow these limits. In that case, the limits apply only as far as the law allows.
            </p>
          </section>

          {/* Your Data */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Data and Backups</h2>
            <p className="text-muted-foreground">
              All transcripts, recordings, and settings stay on your Mac. You own that data. You are responsible for backing it up. If you delete the app, change your retention setting, or lose your Mac, we cannot recover your data because we never hold a copy. See the <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for details on what the app stores and where.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-muted-foreground">
              This license ends if you break these terms. You can end it at any time by deleting the app from your Mac. The sections on warranty, liability, and governing law survive termination.
            </p>
          </section>

          {/* Changes */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <FileEdit className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Changes to These Terms</h2>
            </div>
            <p className="text-muted-foreground">
              We may update these terms from time to time. We post any change at this URL with a new "Last Updated" date. If you continue to use the app after a change, you accept the updated terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Governing Law</h2>
            </div>
            <p className="text-muted-foreground">
              Whisperer is sold worldwide through the Mac App Store, so these terms do not impose a single jurisdiction on everyone. The laws of your country of residence govern these terms, and you may bring a claim in the courts of that country.
            </p>
            <p className="text-muted-foreground mt-4">
              Nothing in these terms removes any consumer protection that the mandatory law of your country of residence gives you. Where local law grants you a right that these terms appear to limit, the local law applies. If a court finds any provision unenforceable in your jurisdiction, the rest of these terms stay in effect.
            </p>
          </section>

          {/* Apple */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Apple as a Third-Party Beneficiary</h2>
            <p className="text-muted-foreground">
              Apple is not a party to these terms and is not responsible for the app or its content. Apple has no obligation to provide support for the app. Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <p className="text-muted-foreground mb-6">For questions about these terms, or for support:</p>
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

          {/* Summary */}
          <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-lg font-medium">
              Pay once, own it, run it offline. Your data stays on your Mac, and so does the responsibility for how you use it.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
