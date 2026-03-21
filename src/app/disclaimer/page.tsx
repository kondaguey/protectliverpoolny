export default function Disclaimer() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black mb-2">Disclaimer</h1>
        <p className="text-dark-500 text-sm mb-8">
          Last updated: March 2026
        </p>

        <div className="space-y-8 text-dark-300 leading-relaxed text-sm">
          <div>
            <h2 className="text-lg font-bold text-white mb-2">Community Initiative</h2>
            <p>
              ProtectLiverpoolNY.org is a <strong className="text-white">not-for-profit grassroots community initiative</strong>. We are not a law firm, government agency, lobbying group, or political organization. We are residents who believe our community deserves transparency, accountability, and the right to be heard.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Information Accuracy</h2>
            <p>
              All information presented on this site is sourced from publicly available documents, government records, regulatory filings, and peer-reviewed research. While we make every effort to ensure accuracy, we make no warranties or guarantees about the completeness, reliability, or accuracy of any information on this site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Not Legal or Medical Advice</h2>
            <p>
              Nothing on this site constitutes legal advice, medical advice, or professional consultation. References to health studies, FCC regulations, FAA rules, the Telecommunications Act of 1996, and other regulatory matters are provided for informational and educational purposes only. Consult qualified professionals for advice specific to your situation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">External Links</h2>
            <p>
              This site contains links to external websites, government documents, news articles, and research papers. We do not control the content of these external sites and are not responsible for their accuracy, privacy policies, or practices. Links are provided for reference and do not imply endorsement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">AI-Generated Imagery</h2>
            <p>
              Some conceptual renderings and visual comparisons on this site may include AI-generated or digitally created imagery to illustrate what the completed tower may look like. These images are clearly labeled as conceptual renderings and are not photographs of the completed structure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">No Financial Interest</h2>
            <p>
              This site generates <strong className="text-white">zero revenue</strong>. We do not accept advertising, sponsorships, or donations through this website. We do not sell products or services. This is a purely community-driven effort with no financial interest.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Contact</h2>
            <p>
              If you have questions about this disclaimer or believe any information on this site is inaccurate, contact us at{" "}
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
