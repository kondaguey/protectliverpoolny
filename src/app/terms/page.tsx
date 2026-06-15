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
          Last updated: April 2026
        </p>

        <div className="space-y-8 text-dark-300 leading-relaxed text-sm">
          <div>
            <h2 className="text-lg font-bold text-white mb-2">About This Site</h2>
            <p>
              ProtectLiverpoolNY.org is a <strong className="text-white">not-for-profit grassroots community initiative</strong>{" "}dedicated to informing residents about the construction of a 184-foot commercial cell tower in Liverpool, NY. This site does not generate revenue and is operated entirely by community volunteers.
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
            <h2 className="text-lg font-bold text-white mb-2">Limitation of Liability</h2>
            <p className="mb-3">
              ProtectLiverpoolNY.org, its volunteers, contributors, and organizers shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on any information presented herein. This site is provided <strong className="text-white">&quot;as is&quot;</strong>{" "}and <strong className="text-white">&quot;as available&quot;</strong>{" "}without warranties of any kind, express or implied.
            </p>
            <p>
              We are a volunteer-run community initiative operating with limited resources. While we strive for accuracy and thoroughness, we cannot guarantee that all information is complete, current, or error-free at all times.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Individual Conduct &amp; Statements</h2>
            <p className="mb-3">
              ProtectLiverpoolNY.org does not endorse, adopt, or assume liability for statements, actions, or conduct of any individual supporter, petition signer, or community member outside of the content explicitly published on this website.
            </p>
            <p>
              Signing the petition indicates agreement with the demands as written. It does not constitute appointment as a spokesperson for this movement, nor does it create any agency relationship between the signer and ProtectLiverpoolNY.org. Individuals are solely responsible for their own words and actions. See our <a href="/code-of-conduct" className="text-danger-400 hover:text-danger-300 underline underline-offset-2">Code of Conduct</a> for community standards.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Modifications to Terms</h2>
            <p>
              We reserve the right to update or modify these terms at any time. Changes will be reflected by updating the &quot;Last updated&quot; date at the top of this page. Continued use of the site following any modifications constitutes acceptance of the revised terms. Significant changes will be documented on our <a href="/changelog" className="text-danger-400 hover:text-danger-300 underline underline-offset-2">Change Log</a>.
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
