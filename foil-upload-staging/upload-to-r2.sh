#!/usr/bin/env bash
#
# Uploads the three NEW appeal-response documents to the R2 bucket that serves
# media.protectliverpoolny.org, under the foil/ prefix, with the exact filenames
# the FOIL evidence catalog now links to.
#
# Run on your Mac (where `wrangler` is already authenticated), from this folder:
#   cd "/Users/daniellewis/Desktop/DnDL Creative LLC/protectliverpoolny/foil-upload-staging"
#   bash upload-to-r2.sh
#
# The AT&T Site Lease (us-ny-2029-att-sla-fe-02182025.pdf) is already on R2 from
# the original production, so it is intentionally NOT re-uploaded here.
set -euo pipefail

# 1) Confirm your bucket name. If you're not sure, list them:
#       npx wrangler r2 bucket list
#    Then set it here (this is the bucket bound to media.protectliverpoolny.org):
BUCKET="protectliverpoolny"   # <-- EDIT if your bucket is named differently

FILES=(
  "us-ny-2029-verizon-sla-fe-07232025.pdf"
  "nysta-foil-89-3a-certification-20260522.pdf"
  "nysta-foil-appeal-determination-r000082-032026.pdf"
)

for f in "${FILES[@]}"; do
  echo "Uploading foil/$f ..."
  npx wrangler r2 object put "$BUCKET/foil/$f" --file "$f" --remote --content-type "application/pdf"
done

echo
echo "Done. Verify they resolve:"
for f in "${FILES[@]}"; do
  echo "  https://media.protectliverpoolny.org/foil/$f"
done
