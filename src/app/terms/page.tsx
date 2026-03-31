import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — AniGuess",
  description: "Terms of Service for AniGuess — Anime Character Guessing Game",
};

const EFFECTIVE_DATE = "March 31, 2026";
const CONTACT_EMAIL = "support@aniguess.app";

// Shared prose block for terms sections
function TermsSection({
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

export default function TermsPage(): React.ReactElement {
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
            AniGuess
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
            Terms of Service
          </h1>
          <p className="text-sm" style={{ color: "#64748b" }}>
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <TermsSection title="Acceptance of Terms">
            <p>
              By downloading, installing, or using AniGuess (&ldquo;App&rdquo;), you agree
              to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not
              agree to these Terms, do not use the App.
            </p>
            <p>
              These Terms apply to all users of AniGuess, including users who make
              in-app purchases. We may update these Terms at any time; continued use of
              the App after changes are posted constitutes your acceptance of the
              updated Terms.
            </p>
          </TermsSection>

          <TermsSection title="App Usage">
            <p>
              AniGuess is a mobile game in which players identify anime characters from
              progressively unblurred images, collect character cards, and participate in
              daily challenges. The App is available on iOS and is free to download.
            </p>
            <p>You agree to use the App only for its intended purpose and not to:</p>
            <ul className="list-disc pl-6">
              <li>Reverse-engineer, decompile, or disassemble the App</li>
              <li>Attempt to gain unauthorised access to any part of the App or its systems</li>
              <li>Use automation, bots, or scripts to interact with the App</li>
              <li>Exploit bugs or glitches to gain an unfair advantage</li>
              <li>Use the App in any manner that violates applicable laws or regulations</li>
            </ul>
          </TermsSection>

          <TermsSection title="In-App Purchases">
            <p>
              AniGuess offers the following optional in-app purchases through the Apple
              App Store:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong style={{ color: "#f1f5f9" }}>AniGuess Premium</strong> — Auto-renewing
                monthly subscription at $2.99/month. Provides premium benefits including
                enhanced gameplay features.
              </li>
              <li>
                <strong style={{ color: "#f1f5f9" }}>Rune Bundle — 30 Runes</strong> — One-time
                purchase at $1.99.
              </li>
              <li>
                <strong style={{ color: "#f1f5f9" }}>Rune Bundle — 100 Runes</strong> — One-time
                purchase at $4.99.
              </li>
              <li>
                <strong style={{ color: "#f1f5f9" }}>Starter Pack</strong> — One-time purchase
                at $0.99.
              </li>
              <li>
                <strong style={{ color: "#f1f5f9" }}>Remove Ads</strong> — One-time purchase at
                $2.99. Permanently removes advertisements from the App.
              </li>
              <li>
                <strong style={{ color: "#f1f5f9" }}>Unlock Mode</strong> — One-time purchase
                that unlocks additional game modes.
              </li>
            </ul>
            <p>
              All prices are in USD and are subject to change. Apple may apply local taxes
              or convert prices to your regional currency.
            </p>
          </TermsSection>

          <TermsSection title="Subscription Terms">
            {/* Required Apple auto-renewing subscription disclosures */}
            <p>
              The AniGuess Premium subscription is an auto-renewing subscription. The
              following terms apply:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Payment will be charged to your Apple ID account at confirmation of
                purchase.
              </li>
              <li>
                Subscription automatically renews unless auto-renew is turned off at least
                24 hours before the end of the current period.
              </li>
              <li>
                Account will be charged for renewal within 24 hours prior to the end of
                the current period.
              </li>
              <li>
                Subscriptions may be managed and auto-renewal turned off in Account
                Settings after purchase.
              </li>
              <li>
                Any unused portion of a free trial period will be forfeited when
                purchasing a subscription.
              </li>
            </ul>
            <p>
              To manage or cancel your subscription, go to{" "}
              <strong style={{ color: "#f1f5f9" }}>
                Settings &rarr; [Your Name] &rarr; Subscriptions
              </strong>{" "}
              on your iOS device.
            </p>
          </TermsSection>

          <TermsSection title="Virtual Currency (Runes)">
            <p>
              Runes are a virtual in-game currency used to open card packs within AniGuess.
              By purchasing Rune bundles or earning Runes through gameplay, you acknowledge
              that:
            </p>
            <ul className="list-disc pl-6">
              <li>Runes have no real-world monetary value.</li>
              <li>
                Runes cannot be exchanged for real money, goods, or services outside of
                the App.
              </li>
              <li>
                Runes are non-refundable, except as required by applicable law or Apple
                App Store policies.
              </li>
              <li>
                We reserve the right to modify, suspend, or discontinue Runes at any time
                without liability to you.
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="Card Collection">
            <p>
              Character cards collected within AniGuess are virtual items that exist solely
              within the App. You acknowledge that:
            </p>
            <ul className="list-disc pl-6">
              <li>Cards have no real-world value and cannot be sold, traded, or transferred.</li>
              <li>
                Card collection data is stored locally on your device. If you delete the
                App or lose your device data, your collection cannot be recovered.
              </li>
              <li>
                We do not guarantee that any specific card will be available at any time.
                Card availability and pack contents may change.
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="User Conduct">
            <p>
              You are solely responsible for your use of the App. You agree not to engage
              in conduct that:
            </p>
            <ul className="list-disc pl-6">
              <li>Violates any applicable local, national, or international law</li>
              <li>Infringes the rights of any third party</li>
              <li>Is harmful, fraudulent, deceptive, or offensive</li>
              <li>Interferes with the proper operation of the App</li>
            </ul>
          </TermsSection>

          <TermsSection title="Intellectual Property">
            <p>
              AniGuess and its original content, features, and functionality are the
              property of the App&apos;s developer and are protected by applicable copyright
              and intellectual property laws.
            </p>
            <p>
              Anime characters, names, images, and related intellectual property featured
              in AniGuess belong to their respective copyright holders (including but not
              limited to their original creators, studios, and publishers). AniGuess makes
              no claim of ownership over these characters or their associated intellectual
              property.
            </p>
            <p>
              Character and anime data used in the App is sourced from the{" "}
              <a
                href="https://anilist.co"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-[#a78bfa]"
                style={{ color: "#7c3aed" }}
              >
                AniList API
              </a>
              , subject to AniList&apos;s own terms of use.
            </p>
          </TermsSection>

          <TermsSection title="Disclaimer of Warranties">
            <p>
              The App is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              basis without warranties of any kind, either express or implied, including
              but not limited to implied warranties of merchantability, fitness for a
              particular purpose, or non-infringement.
            </p>
            <p>
              We do not warrant that the App will be uninterrupted, error-free, or free
              of viruses or other harmful components.
            </p>
          </TermsSection>

          <TermsSection title="Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, we shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages
              arising out of or related to your use of the App, including but not limited
              to loss of data, loss of revenue, or loss of goodwill.
            </p>
            <p>
              Our total liability to you for any claim arising from or related to these
              Terms or the App shall not exceed the amount you paid to us in the twelve
              months preceding the claim.
            </p>
          </TermsSection>

          <TermsSection title="Termination">
            <p>
              We reserve the right to terminate or suspend your access to the App at any
              time, without notice and at our sole discretion, for conduct that we believe
              violates these Terms or is harmful to other users, us, third parties, or for
              any other reason.
            </p>
            <p>
              Upon termination, all rights granted to you under these Terms will
              immediately cease. Provisions of these Terms that by their nature should
              survive termination shall survive, including ownership provisions, warranty
              disclaimers, indemnity, and limitations of liability.
            </p>
          </TermsSection>

          <TermsSection title="Governing Law">
            <p>
              These Terms are governed by and construed in accordance with applicable law.
              Any disputes arising from these Terms or the App shall be resolved in
              accordance with applicable jurisdiction.
            </p>
          </TermsSection>

          <TermsSection title="Contact Us">
            <p>
              If you have any questions or concerns about these Terms of Service, please
              contact us at:
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
          </TermsSection>
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
              style={{ color: "#64748b" }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm transition-colors hover:text-[#a78bfa]"
              style={{ color: "#a78bfa" }}
            >
              Terms of Service
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
            &copy; 2026 AniGuess. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
