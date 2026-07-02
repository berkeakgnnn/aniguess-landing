import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AniMyst",
  description: "Privacy Policy for AniMyst — Anime Character Guessing Game",
};

const LAST_UPDATED = "March 31, 2026";
const CONTACT_EMAIL = "vexloftstudio@gmail.com";

// Shared prose block for policy sections
function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <section className="flex flex-col gap-4">
      <h2
        className="text-2xl font-bold"
        style={{ color: "#a78bfa" }}
      >
        {title}
      </h2>
      <div
        className="flex flex-col gap-3 text-base leading-relaxed"
        style={{ color: "#94a3b8" }}
      >
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage(): React.ReactElement {
  return (
    <div className="min-h-screen" style={{ background: "#0d0820" }}>
      {/* Header */}
      <header
        className="border-b px-6 py-5"
        style={{ borderColor: "#1e1b2e", background: "#0a0618" }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <a
            href="/"
            className="text-xl font-black tracking-tight transition-colors hover:text-[#a78bfa]"
            style={{ color: "#f1f5f9" }}
          >
            AniMyst
          </a>
          <a
            href="/"
            className="text-sm font-medium transition-colors hover:text-[#a78bfa]"
            style={{ color: "#64748b" }}
          >
            &larr; Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <h1
            className="mb-3 text-4xl font-black md:text-5xl"
            style={{ color: "#f1f5f9" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "#64748b" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <PolicySection title="Introduction">
            <p>
              AniMyst (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is
              committed to protecting your privacy. This Privacy Policy explains how we
              handle information when you use the AniMyst mobile application
              (&ldquo;App&rdquo;) available on iOS.
            </p>
            <p>
              By downloading or using AniMyst, you agree to the practices described in
              this policy. If you do not agree, please do not use the App.
            </p>
          </PolicySection>

          <PolicySection title="Information We Collect">
            <p>
              <strong style={{ color: "#f1f5f9" }}>
                AniMyst does not collect any personally identifiable information (PII).
              </strong>{" "}
              There is no account system, no login, and no registration required. You can
              play AniMyst completely anonymously.
            </p>
            <p>We do not collect:</p>
            <ul className="list-disc pl-6">
              <li>Names, email addresses, or phone numbers</li>
              <li>Location data</li>
              <li>Photos, contacts, or any device content</li>
              <li>Social media profiles or linked accounts</li>
            </ul>
          </PolicySection>

          <PolicySection title="Automatically Collected Data">
            <p>
              The App may collect limited, anonymized technical data necessary for
              operation and crash reporting, such as:
            </p>
            <ul className="list-disc pl-6">
              <li>Device type and operating system version (anonymous)</li>
              <li>App version and session frequency (aggregate only)</li>
              <li>Crash reports and diagnostic information</li>
            </ul>
            <p>
              This data cannot be used to identify you personally and is used solely to
              improve app stability and performance.
            </p>
          </PolicySection>

          <PolicySection title="Game Progress & Local Storage">
            <p>
              All game progress — including your collected cards, rune balance, energy
              shards, XP, rank, and Daily Challenge streaks — is stored{" "}
              <strong style={{ color: "#f1f5f9" }}>locally on your device</strong> using
              Apple&apos;s on-device storage (AsyncStorage / NSUserDefaults). This data
              never leaves your device and is never transmitted to our servers.
            </p>
            <p>
              If you delete the App, this locally stored data will be permanently erased.
              We do not have the ability to recover it.
            </p>
          </PolicySection>

          <PolicySection title="Advertising (Google AdMob)">
            <p>
              AniMyst uses Google AdMob to display advertisements. AdMob may collect
              and use certain information about your device and ad interactions to serve
              relevant ads. This may include:
            </p>
            <ul className="list-disc pl-6">
              <li>Advertising identifiers (IDFA on iOS)</li>
              <li>IP address (used to infer general region)</li>
              <li>Ad interaction events (impressions, clicks)</li>
            </ul>
            <p>
              AdMob&apos;s data collection is governed by the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-[#a78bfa]"
                style={{ color: "#7c3aed" }}
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="App Tracking Transparency (iOS)">
            <p>
              In compliance with Apple&apos;s App Tracking Transparency (ATT) framework,
              the App will request your permission before accessing your device&apos;s
              advertising identifier (IDFA) for personalised advertising purposes.
            </p>
            <p>
              If you decline tracking permission, AniMyst will still function fully. You
              will simply receive non-personalised advertisements. You can change your
              tracking preference at any time via{" "}
              <strong style={{ color: "#f1f5f9" }}>
                Settings &rarr; Privacy &amp; Security &rarr; Tracking
              </strong>
              .
            </p>
          </PolicySection>

          <PolicySection title="GDPR (European Users)">
            <p>
              Because AniMyst does not collect personal data, the majority of GDPR
              obligations do not apply. However, we respect the principles of data
              minimisation and transparency. If you are located in the European Economic
              Area (EEA), you have the right to:
            </p>
            <ul className="list-disc pl-6">
              <li>Know what data is collected about you</li>
              <li>Request deletion of any data we may hold</li>
              <li>Object to data processing for advertising purposes</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline transition-colors hover:text-[#a78bfa]"
                style={{ color: "#7c3aed" }}
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="KVKK (Turkish Users)">
            <p>
              AniMyst, Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel
              veri işlememektedir. Uygulama içinde hiçbir hesap sistemi veya kayıt
              gerektiren işlem bulunmamaktadır. Reklam gösterimi amacıyla Google AdMob
              tarafından cihaz tanımlayıcı bilgileri kullanılabilir; bu işlem KVKK
              açısından veri sorumlusu sıfatıyla Google tarafından gerçekleştirilmektedir.
            </p>
            <p>
              KVKK kapsamındaki haklarınızı kullanmak için{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline transition-colors hover:text-[#a78bfa]"
                style={{ color: "#7c3aed" }}
              >
                {CONTACT_EMAIL}
              </a>{" "}
              adresine e-posta gönderebilirsiniz.
            </p>
          </PolicySection>

          <PolicySection title="Children's Privacy">
            <p>
              AniMyst is intended for users of all ages, including children under 13.
              We do not knowingly collect personal information from children. Because the
              App does not collect any PII from any user, it is compliant with the
              Children&apos;s Online Privacy Protection Act (COPPA).
            </p>
            <p>
              Advertising shown to younger audiences is limited to non-personalised ads
              in compliance with Google AdMob&apos;s children and family policies.
            </p>
          </PolicySection>

          <PolicySection title="Third-Party Links">
            <p>
              The App may contain links to third-party services (e.g., the App Store).
              We are not responsible for the privacy practices of these external sites.
              We encourage you to review their privacy policies.
            </p>
          </PolicySection>

          <PolicySection title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes by updating the &ldquo;Last updated&rdquo; date at the
              top of this page. Continued use of the App after any changes constitutes
              your acceptance of the updated policy.
            </p>
          </PolicySection>

          <PolicySection title="Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy
              Policy, please contact us at:
            </p>
            <p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-bold underline transition-colors hover:text-[#a78bfa]"
                style={{ color: "#7c3aed" }}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </PolicySection>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="mt-16 border-t px-6 py-8"
        style={{ borderColor: "#1e1b2e", background: "#0a0618" }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <nav className="flex gap-6">
            <a
              href="/privacy"
              className="text-sm transition-colors hover:text-[#a78bfa]"
              style={{ color: "#a78bfa" }}
            >
              Privacy Policy
            </a>
            <a
              href="/support"
              className="text-sm transition-colors hover:text-[#a78bfa]"
              style={{ color: "#64748b" }}
            >
              Support
            </a>
          </nav>
          <p className="text-xs" style={{ color: "#64748b" }}>
            &copy; 2026 AniMyst. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
