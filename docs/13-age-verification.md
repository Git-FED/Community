# Age Verification

The website uses client-side self-attestation for age gating.

## Flow
1. Visitor lands on the website gate.
2. Visitor selects country of residence.
3. Visitor confirms they are 18+.
4. Approval is stored in `localStorage` only.
5. No server storage, document upload, or ID collection occurs at the gate.
6. Payment or Matrix invitation links remain behind the gate.

## Related files
See `legal/AGE-VERIFICATION.md`, `legal/AGE-GATE-NOTICE.md`, `legal/AGE-ATTESTATION.md`, `legal/MINOR-REMOVAL-POLICY.md`, `legal/AGE-DATA-RETENTION.md`, and `legal/JURISDICTION-NOTICE.md`.

> Not legal advice. Consult a qualified attorney.
