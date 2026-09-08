# Decision Log: HE-GALAXY-AI-2026

Append-only. Dated. Rejected options stay in.

## 2026-09-08

- **D1** Campaign reference `HE-GALAXY-AI-2026` and the formal request text in plan §1 are adopted as drafted. *Status: pending Guy's explicit approval (plan §18 item 2).*
- **D2** Evidence work started before recruitment: the §2 claims were re-verified against live sources and snapshotted (see `evidence/`). Rationale: everything public depends on the matrix claim; it was cheap to lock down first.
- **D3** Plan §2.5 license summary refined after reading the actual texts (see `evidence/CLAIMS_LEDGER.md` corrections log). Plan file itself left unchanged; ledger is canonical for wording.
- **D4** Suny pages are bot-blocked (403). Decision: do **not** treat Suny claims as Confirmed until a human saves the page. Rejected alternative: citing third-party news about Suny, which is weaker than the primary page.

## Open decisions (need Guy)

- ~~Team~~ → **D5** (2026-09-08) Solo until public broadcast; recruit from the supporter base after launch. Plan §4 role table stays as the target shape.
- ~~Device~~ → **D6** (2026-09-08) Recording device: Galaxy S24 Ultra (Guy's). Second device optional.
- ~~Repo~~ → **D7** (2026-09-08) Public OSS repo under `github.com/gvago`. Raw snapshots, PII, uncut media gitignored. Rejected: private repo; the campaign's credibility rests on auditable claims.
- Repo name: `galaxy-ai-hebrew`? (pending)
- ~~Survey tool~~ → **D8** (2026-09-08) Google Forms under vago@vago.co.il, built by `tools/build-form.gs` (Apps Script, idempotent rebuild). Single opt-in; the KPI is reported as "unique emails", not "confirmed". Form stays closed to responses until the Week 4 pilot. Rejected: Tally/Formbricks for double opt-in, not worth a second tool at Lean tier.
- **D9** (2026-09-08) Form labels are English-first with Hebrew second and every Hebrew segment wrapped in RLI/PDI bidi isolates. Reason: Google Forms has no per-form RTL; Hebrew-first titles right-align the text while leaving the checkbox on the left. Verified in the live respondent view.
