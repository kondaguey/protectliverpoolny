export default function PrivacyPolicy() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-dark-500 text-sm mb-8">
          Last updated: March 2026
        </p>

        <div className="space-y-8 text-dark-300 leading-relaxed text-sm">
          <div>
            <h2 className="text-lg font-bold text-white mb-2">Who We Are</h2>
            <p>
              ProtectLiverpoolNY.org is a <strong className="text-white">not-for-profit grassroots community initiative</strong>. We are not affiliated with any political party, corporation, or government body. We exist solely to inform and empower the residents of Liverpool, NY and surrounding communities.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">What We Collect</h2>
            <p className="mb-3">When you sign our petition, we collect:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Your name (as you provide it)</li>
              <li>Your email address (optional)</li>
              <li>Your ZIP code (optional)</li>
            </ul>
            <p className="mt-3">
              This information is used <strong className="text-white">exclusively</strong> to demonstrate community opposition to the cell tower and to contact you with updates if you opt in.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">What We Do NOT Do</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>We do <strong className="text-white">not</strong> sell, share, or trade your personal information</li>
              <li>We do <strong className="text-white">not</strong> use advertising cookies or third-party trackers</li>
              <li>We do <strong className="text-white">not</strong> monetize your data in any way</li>
              <li>We do <strong className="text-white">not</strong> use analytics platforms that track personal information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Cookies</h2>
            <p>
              This site uses only <strong className="text-white">essential cookies</strong> to remember your cookie consent preference and petition signature status. No tracking, advertising, or third-party cookies are used.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Third-Party Services</h2>
            <p>
              We use Supabase (a privacy-focused, open-source database) to securely store petition signatures. We use Vercel for hosting. Neither service has access to sell or monetize your data through our account.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Your Rights</h2>
            <p>
              You may request deletion of your petition signature at any time by emailing{" "}
              <a
                href="mailto:takeaction@protectliverpoolny.org"
                className="text-danger-400 hover:text-danger-300 underline underline-offset-2"
              >
                takeaction@protectliverpoolny.org
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <a
                href="mailto:takeaction@protectliverpoolny.org"
                className="text-danger-400 hover:text-danger-300 underline underline-offset-2"
              >
                takeaction@protectliverpoolny.org
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
