# Galaxy AI בעברית: HE-GALAXY-AI-2026

Campaign to add Hebrew to the Galaxy AI communication and productivity features (Call Assist / Live Translate, Interpreter, Note Assist, Transcript Assist). Plan: `Galaxy-AI-Hebrew-12-Week-Action-Plan.md`.

## Layout

```
Galaxy-AI-Hebrew-12-Week-Action-Plan.md   the plan (v1.0, 2026-09-08)
IDEA.md                                    one-liner
DECISIONS.md                               append-only decision log
evidence/
  CLAIMS_LEDGER.md                         Confirmed / Uncertain / Do Not Use + corrections
  SOURCE_REGISTER.md                       every source, fetch date, hash
  snapshots/<date>/                        raw HTML + stripped text per source
trackers/                                  (private) cases, partners, contacts; templates only in git
drafts/                                    survey, privacy notice, feedback guide, one-pager, recording script
tools/build-form.gs                        Apps Script that builds the Google Form from the survey draft
media/raw/                                 (gitignored) uncut device recordings
public/                                    landing page, FAQ, feedback guide (when built)
```

## Status

Solo campaign (Guy Vago) until public launch. Week 1 of 12 (started 2026-09-08). Contributions welcome once the repo is public. Start with `evidence/CLAIMS_LEDGER.md`: every Confirmed row still needs a second reviewer.

## Rules that live here

- Nothing public without a `Confirmed` ledger row and two reviewers.
- No supporter PII in this repo, ever. Trackers in git are empty templates.
- Re-fetch `samsung-il-galaxy-ai` before any release.
