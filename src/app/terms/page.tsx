import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of use for ProtectLiverpoolNY.org, a community advocacy website fighting the unauthorized 184-foot cell tower in Liverpool, NY.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black mb-2">Terms of Service</h1>
        <p className="text-dark-500 text-sm mb-8">
          Last updated: March 2026
        </p>

        <div className="space-y-8 text-dark-300 leading-relaxed text-sm">
          <div>
            <h2 className="text-lg font-bold text-white mb-2">About This Site</h2>
            <p>
              ProtectLiverpoolNY.org is a <strong className="text-white">not-for-profit grassroots community initiative</strong> dedicated to informing residents about the construction of a 184-foot commercial cell tower in Liverpool, NY. This site does not generate revenue and is operated entirely by community volunteers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these terms. If you do not agree to these terms, please do not use this site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Use of Content</h2>
            <p>
              The content on this site is provided for informational and educational purposes. You are free to share, reference, and distribute information from this site for non-commercial, community advocacy purposes. We encourage sharing to help inform your neighbors.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Petition Signatures</h2>
            <p>
              By signing our petition, you acknowledge that your name may be included in petitions submitted to local government officials, town boards, and relevant regulatory bodies as a demonstration of community opposition. Your email address will never be shared publicly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Accuracy of Information</h2>
            <p>
              We strive to present accurate, fact-based information sourced from public records, government filings, regulatory documents, and peer-reviewed research. All sources are cited where possible. If you believe any information is inaccurate, please contact us so we can review and correct it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">No Legal Advice</h2>
            <p>
              Nothing on this site constitutes legal advice. Information about regulations (FCC, FAA, Telecom Act, etc.) is presented for educational purposes. Consult a licensed attorney for legal guidance.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a
                href="mailto:takeaction@protectliverpoolny.org"
                className="text-danger-400 hover:text-danger-300 underline underline-offset-2"
              >
                takeaction@protectliverpoolny.org
              </a>{" "}
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
