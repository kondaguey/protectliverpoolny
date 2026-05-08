import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About This Movement & Disclaimer",
  description:
    "ProtectLiverpoolNY.org is a grassroots community initiative built by 1-3 volunteers with day jobs. This page outlines our good-faith commitment to accuracy, our limited resources, and our correction policy.",
  alternates: { canonical: "/disclaimer" },
};

export default function Disclaimer() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black mb-2">
          About This Movement &amp; Disclaimer
        </h1>
        <p className="text-dark-500 text-sm mb-8">
          Last updated: April 2, 2026
        </p>

        <div className="space-y-8 text-dark-300 leading-relaxed text-sm">

          {/* ── About This Movement ── */}
          <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-black text-white mb-4">
              About This Movement
            </h2>
            <p className="mb-3">
              ProtectLiverpoolNY.org was created by a small group of residents — currently <strong className="text-white">1 to 3 people</strong> — who discovered that a 184-foot commercial cell tower was being erected in their neighborhood without any public notification, community input, or local zoning review.
            </p>
            <p className="mb-3">
              We are not attorneys. We are not lobbyists. We are not a political organization, a nonprofit, or a PAC. We are neighbors with day jobs, families, and mortgages who are doing this on our own time, at our own expense, because we believe our community deserves to know what is happening and to have a voice in it.
            </p>
            <p className="mb-3">
              Every page on this site was built between work shifts, on weekends, and late at night. We receive <strong className="text-white">zero funding</strong>, generate <strong className="text-white">zero revenue</strong>, and have <strong className="text-white">no financial interest</strong>{" "}in the outcome beyond protecting our homes and our community.
            </p>
            <p>
              The only personal benefit derived from this project is that the site&apos;s creator and copywriter may reference this work as a portfolio piece to demonstrate their professional capabilities, and the movement organizer may reference this experience to demonstrate leadership qualities for potential future employment. No compensation of any kind has been or will be received for building or maintaining this site.
            </p>
          </div>

          {/* ── Good Faith & Best Efforts ── */}
          <div>
            <h2 className="text-lg font-bold text-white mb-2">
              Good Faith &amp; Best Efforts
            </h2>
            <p className="mb-3">
              All content on this website is published in <strong className="text-white">100% good faith</strong>{" "}and represents our best efforts to accurately present publicly available information, government records, regulatory filings, court decisions, and peer-reviewed research.
            </p>
            <p className="mb-3">
              We are not trained journalists, legal researchers, or policy analysts. We are citizens who are learning the law, the regulatory framework, and the political landscape in real time — while simultaneously working full-time jobs and raising families. We acknowledge that this process is imperfect.
            </p>
            <p>
              Where we have formed opinions or drawn conclusions, we have attempted to clearly distinguish them from established facts. Where we reference legal standards (such as the Monroe Balancing Test, the Telecom Act of 1996, or BGEPA), we cite the source material and encourage readers to verify independently.
            </p>
          </div>

          {/* ── Limited Resources ── */}
          <div>
            <h2 className="text-lg font-bold text-white mb-2">
              Limited Resources
            </h2>
            <p className="mb-3">
              This initiative operates with <strong className="text-white">extremely limited resources</strong>. We have no staff, no office, no legal team on retainer, and no public relations firm. The entirety of this website — including research, writing, design, development, hosting, and community coordination — is handled by a skeleton crew of volunteers.
            </p>
            <p className="mb-3">
              As a direct consequence of these constraints, errors may occur. Information may be temporarily outdated. Officials&apos; titles or positions may change between the time we publish and the time you read. We are doing the best we can with what we have, and we are moving as fast as humanly possible because construction on this tower is ongoing.
            </p>
            <p>
              We ask for your patience, your understanding, and — when we get something wrong — your help in correcting it.
            </p>
          </div>

          {/* ── Correction Policy ── */}
          <div>
            <h2 className="text-lg font-bold text-white mb-2">
              Correction Policy
            </h2>
            <p className="mb-3">
              When an error is identified — whether by a community member, an elected official, or through our own review — we commit to correcting it as quickly as possible and noting the correction publicly on the affected page. We do not silently edit content. Major corrections are announced via our mailing list and documented with a visible notice on the page.
            </p>
            <p>
              On March 24, 2026, a community member identified outdated information about a local official and pointed out that our framing of the Town of Salina was inaccurate. We corrected the record, posted a Major Update notice on the homepage, and sent an email to every petition signer explaining exactly what changed and why.
            </p>
          </div>

          {/* ── Original sections ── */}

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Information Accuracy</h2>
            <p>
              All information presented on this site is sourced from publicly available documents, government records, regulatory filings, and peer-reviewed research. While we make every effort to ensure accuracy, we make no warranties or guarantees about the completeness, reliability, or accuracy of any information on this site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Not Legal or Medical Advice</h2>
            <p className="mb-3">
              Nothing on this site constitutes legal advice, medical advice, or professional consultation. References to health studies, FCC regulations, FAA rules, the Telecommunications Act of 1996, and other regulatory matters are provided for informational and educational purposes only. Consult qualified professionals for advice specific to your situation.
            </p>
            <p>
              While we believe the dangers we present on this site are real, and while many in our community echo our concerns, <strong className="text-white">our opinions are our own</strong>. We are not medical professionals, scientists, or attorneys. You should always consult your own doctor, your own attorney, and do your own research to determine what is best for you and your family.
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
            <h2 className="text-lg font-bold text-white mb-2">Individual Liability</h2>
            <p className="mb-3">
              ProtectLiverpoolNY.org does not endorse, adopt, or assume liability for statements, actions, or conduct of any individual supporter, petition signer, or community member outside of the content explicitly published on this website.
            </p>
            <p className="mb-3">
              Signing the petition indicates agreement with the demands as written. It does not constitute appointment as a spokesperson for this movement, nor does it create any agency relationship between the signer and ProtectLiverpoolNY.org. Individuals are solely responsible for their own words and actions.
            </p>
            <p>
              We encourage every supporter to speak publicly about this issue — but to speak for themselves, speak in facts, and take personal responsibility for what they say. Our <a href="/code-of-conduct" className="text-danger-400 hover:text-danger-300 underline underline-offset-2">Code of Conduct</a> outlines the standards we expect from everyone involved in this movement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Contact</h2>
            <p>
              If you have questions about this disclaimer, believe any information on this site is inaccurate, or want to get involved, contact us at{" "}
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
