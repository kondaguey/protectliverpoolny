#!/usr/bin/env node
/**
 * Export Petition — Pulls signatures from Supabase and generates
 * a single PDF with the demand letter + all signatures.
 *
 * Usage:  node scripts/export-petition.mjs
 * Output: petition_export_YYYY-MM-DD.pdf on Desktop
 */

import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── Supabase ──
const supabase = createClient(
  "https://dcvvjsyjatotcgwgiqzz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdnZqc3lqYXRvdGNnd2dpcXp6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjE4ODUyOSwiZXhwIjoyMDgxNzY0NTI5fQ.2_T3vTo_rPU8dO1H5NPpEfigZxzFmtCKCF8zLDwCvHE"
);

// ── Demand Letter ──
const DEMAND_LETTER = `
OFFICIAL PETITION DEMAND FOR ABATEMENT
Petition Last Updated: April 1, 2026

TO: The New York State Thruway Authority (NYSTA); Phoenix Tower International (Attn: Mitchell Henry); Town of Salina Supervisor Raul Huerta; Onondaga County Legislator Jeremiah Thompson (District 4); New York State Senator Christopher Ryan (SD-50); New York State Assemblymembers Pamela Hunter (AD-128), Al Stirpe (AD-127), and William Magnarelli (AD-129, Chair — NYS Assembly Transportation Committee); U.S. Senator Charles Schumer; U.S. Senator Kirsten Gillibrand; U.S. Representative John Mannion (NY-22); the FAA; the FCC; the U.S. Fish and Wildlife Service (USFWS); and the New York State Department of Environmental Conservation (NYS DEC).

WE, THE UNDERSIGNED residents, taxpayers, local workforce, and allied US citizens, issue this formal demand for the immediate halt of construction, revocation of all lease agreements, and total physical abatement of the unauthorized commercial infrastructure tower currently being erected at the NYS Thruway (I-90) Exit 37 / 474 Electronics Pkwy site.

Subject Infrastructure Details:
  FCC ASR: 1329974 (FRN: 0025555459)
  Coordinates: 43° 06' 06.9" N, 076° 11' 06.3" W
  Structure: MTOWER (Monopole) / 184 ft (56.1 m) AGL

WHEREAS, NYSTA and Phoenix Tower International have weaponized state land exemptions to deliberately bypass the Town of Salina's zoning laws, evading public hearings, environmental impact transparency, and all forms of democratic community consent;

WHEREAS, if NYSTA and Phoenix Tower International assert immunity from the Town of Salina's zoning jurisdiction under the Matter of County of Monroe balancing test, we stand as follows: the private commercial interests of Phoenix Tower do not automatically inherit absolute state immunity, and the severe detrimental impacts on local land use, wildlife (BGEPA), and residential property values demonstrably outweigh the marginal public benefit of a redundant telecommunications facility — especially when less intrusive alternative sites exist. This assertion is fundamentally flawed and legally challengeable;

WHEREAS, this unlit 184-foot (56.1-meter) structure — engineered precisely 16 feet (4.8 meters) below the FAA lighting threshold — sits just 0.25 miles from the Syracuse Hancock International Airport (SYR) Runway 10 descent corridor. Despite a remote, desk-reviewed "No Hazard" determination by the FAA, erecting a massive, unlit steel pole in immediate proximity to a low-altitude flight path remains a profound safety and planning concern for the community below;

WHEREAS, this 184-foot (56.1-meter) structure acts as a "hazardous wildlife attractant" for raptors, situated 1.25 miles from New York State's largest urban bald eagle roost and in an area with a heavy, well-documented concentration of federally protected turkey vultures that actively soar, roost, and forage in the immediate vicinity of this tower site. By providing an artificial nesting and perching platform adjacent to a flight corridor, this tower actively undermines SYR's Wildlife Hazard Management protocols. Proceeding without producing explicit, localized consultation with the U.S. Fish and Wildlife Service (USFWS) and the NYS DEC, or a transparent NEPA/SEQRA assessment, threatens federally and state-protected wildlife and risks violating the Bald and Golden Eagle Protection Act (BGEPA), the Migratory Bird Treaty Act (MBTA), and New York State endangered species regulations;

WHEREAS, this 184-foot (56.1-meter) commercial structure will irreparably degrade the visual character of our residential neighborhoods, negatively impact local property values, and force the installation of high-capacity data infrastructure that alters the nature of our community without our consent;

WHEREAS, the stated justification that this tower is intended to "improve coverage for emergency service providers" has been independently investigated and found to be without merit as a primary justification: the Onondaga County Sheriff's Office has confirmed in writing that there are no known communication dead zones in the Salina area; the equipment currently being installed consists of commercial 5G panel antennas used for consumer wireless broadband, indicating this tower is not being built exclusively — or even primarily — for emergency service use; the NYS Department of Environmental Conservation has confirmed it has zero records of any environmental review for this site (FOIL #W162712-032526, April 1, 2026); and the developer waited over sixteen months after receiving FAA clearance before breaking ground — a timeline wholly inconsistent with any claim of urgency or emergency need. If emergency service equipment is later added, that does not retroactively justify bypassing zoning, environmental review, and public process for what is, at its core, a commercial telecommunications facility;

WHEREAS, while active construction proceeds rapidly, the New York State Thruway Authority is deliberately obstructing public transparency by invoking a 20-business-day extension to delay the release of basic Master Lease Agreements, fall zone engineering reports, and SEQRA documents (FOIL Reference #R000082-032026). Withholding vital public safety and environmental records regarding an active construction site while allowing the developer to mount commercial 5G antennas constitutes a bad-faith evasion of accountability and a direct violation of the public trust;

THEREFORE, WE DEMAND:

1. IMMEDIATE CESSATION: NYSTA and Phoenix Tower International must immediately halt all construction. In the event of construction completion, we demand the complete removal and dismantling of the structure.

2. MUNICIPAL & STATE LEGAL ACTION: We formally demand that Supervisor Huerta, Legislator Thompson, Senator Ryan, Assemblymember Hunter, Assemblymember Stirpe, and Assemblymember Magnarelli (in his capacity as Chair of the NYS Assembly Transportation Committee, which has direct oversight of the Thruway Authority) exhaust all municipal and state legal resources — including demanding an administrative Stop Work Order or filing an emergency Article 78 proceeding against NYSTA challenging their assumed immunity under the Monroe balancing test — to halt this state-sanctioned overreach until full environmental transparency is achieved. Furthermore, we demand the NYS DEC launch an immediate investigation into NYSTA's SEQRA compliance and environmental impact evasion regarding this site.

3. CONGRESSIONAL & FEDERAL INTERVENTION: We demand that Representative Mannion, Senator Schumer, and Senator Gillibrand launch immediate congressional inquiries into the FAA, FCC, and USFWS regarding the siting, environmental impact evasion, and potential BGEPA/MBTA risks of ASR #1329974.

By affixing our signatures below, we declare that our community and our airspace are not for sale, we do not consent to this infrastructure, and we will pursue every democratic and legal remedy available until this tower is removed.

ProtectLiverpoolNY.org
`;

async function main() {
  console.log("Fetching petition signatures from Supabase...");

  const { data: signatures, error } = await supabase
    .from("plny_signatures")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase error:", error.message);
    process.exit(1);
  }

  console.log(`Found ${signatures.length} signatures.`);

  const today = new Date().toISOString().split("T")[0];

  // ── Generate plain text document (demand letter + names only) ──
  let output = "";
  output += "═".repeat(70) + "\n";
  output += DEMAND_LETTER.trim() + "\n\n";
  output += "═".repeat(70) + "\n\n";
  output += `SIGNATURES (${signatures.length} total as of ${today})\n`;
  output += "─".repeat(70) + "\n\n";
  output += "  #    NAME                                    ZIP       DATE SIGNED\n";
  output += "─".repeat(70) + "\n";

  signatures.forEach((sig, i) => {
    const num = String(i + 1).padStart(3, " ");
    const name = `${sig.first_name} ${sig.last_name}`.padEnd(40);
    const zip = (sig.zip_code || "N/A").padEnd(10);
    const date = sig.created_at
      ? new Date(sig.created_at).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "N/A";
    output += `  ${num}  ${name}${zip}${date}\n`;
  });

  output += "\n" + "─".repeat(70) + "\n";
  output += `Total Signatures: ${signatures.length}\n`;
  output += `Exported: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}\n`;
  output += `Source: ProtectLiverpoolNY.org — Verified petition database\n`;

  // ── Generate CSV with ALL fields ──
  const allKeys = signatures.length > 0 ? Object.keys(signatures[0]) : [];
  const csvHeader = allKeys.join(",");
  let csv = csvHeader + "\n";
  signatures.forEach((sig) => {
    const row = allKeys.map((key) => {
      const val = sig[key];
      if (val === null || val === undefined || val === "") return "NULL";
      const str = String(val);
      // Escape quotes and wrap in quotes
      return `"${str.replace(/"/g, '""')}"`;
    });
    csv += row.join(",") + "\n";
  });

  // ── Save files ──
  const downloadsPath = path.join(process.env.HOME, "Downloads");
  const txtFile = path.join(downloadsPath, `Petition_Demand_${today}.txt`);
  const csvFile = path.join(downloadsPath, `Petition_Signatures_${today}.csv`);

  fs.writeFileSync(txtFile, output);
  fs.writeFileSync(csvFile, csv);

  console.log(`\nFiles saved to Desktop:`);
  console.log(`  📄 ${txtFile}`);
  console.log(`  📊 ${csvFile}`);
  console.log(`\nThe .txt file has the demand letter + all ${signatures.length} signatures in one document.`);
  console.log(`Attach both files to your email to politicians.`);
}

main().catch(console.error);
