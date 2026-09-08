# Source Register

Every primary source we rely on, with a dated snapshot. Re-fetch before any public release (plan §7 Week 10: "recheck the live Samsung feature matrix").

Snapshot dir: `evidence/snapshots/2026-09-08/` holding `<key>.html` (raw), `<key>.txt` (stripped), `_fetch-log.json`.

| Key | URL | Fetched | HTTP | SHA-256 (16) | Notes |
|---|---|---|---|---|---|
| samsung-il-galaxy-ai | https://www.samsung.com/il/galaxy-ai/ | 2026-09-08 | 200 | 448d1b5bc6e02a5e | Language matrix in FAQ; dated "יולי 2026" in-page |
| samsung-il-contact | https://www.samsung.com/il/support/contact/ | 2026-09-08 | 200 | 217115f77e1f3588 | Chat/WhatsApp/email/*6963/CEO-office |
| samsung-il-service-terms | https://www.samsung.com/il/support/service-terms-and-conditions/ | 2026-09-08 | 200 | d0ea3a9708997614 | Names SAMSUNG ELECTRONICS ISRAEL LTD |
| samsung-il-members-guide | https://www.samsung.com/il/support/mobile-devices/how-to-use-the-samsung-members-app/ | 2026-09-08 | 200 | 6c34cea6b8da3479 | Page last updated 12 May 2024 |
| suny-about | https://www.samsungmobile.co.il/about | 2026-09-08 | **403** | ad5c69896d03e237 | Bot-blocked; needs manual save |
| suny-contact | https://www.samsungmobile.co.il/contact | 2026-09-08 | **403** | e1c1fa054fb6f81f | Bot-blocked; needs manual save |
| sril | https://research.samsung.com/sril | 2026-09-08 | 200 | 362cc32028399727 | Herzliya; open innovation team |
| samsung-newsroom-galaxy-ai-rd | https://news.samsung.com/global/recap-the-learning-curve-how-samsungs-rd-institutes-around-the-world-worked-on-galaxy-ai | 2026-09-08 | 200 | 27a310eb72094d89 | Article dated 30 Jul 2024 |
| ivrit-license | https://www.ivrit.ai/en/the-license/ | 2026-09-08 | 200 | 5d1f3fef6ca74083 | v1 (2023-06-30) and v2 (2024-10-01) full text |
| dicta-lm-3 | https://dicta.org.il/dicta-lm-3 | 2026-09-08 | 200 | 5d897e22ad1ac7a8 | **JS-rendered, 7 chars of text**, unusable snapshot |
| ms-speech-langs | https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support | 2026-09-08 | 200 | 725868bb2a6ffa9e | he-IL STT + HilaNeural/AvriNeural |
| samsung-ir-3740 | https://www.samsung.com/sec/ir/reports-disclosures/public-disclosure/3740/ | 2026-09-08 | 200 | 32bf265c04bbe60f | SEIL in subsidiary guarantee table |

## API-sourced (no HTML snapshot)

| Key | Query | Fetched | Result |
|---|---|---|---|
| gh-ivrit-repos | `gh api orgs/ivrit-ai/repos` | 2026-09-08 | ivrit.ai, runpod-serverless, crowd-recital, asr-training, hebrew-academy, transcribe-service, faster-whisper, eliezer, stable-ts, FieldCut = MIT; crowd-transcribe, explore, ivrit-py, ivrit-handwriting-collection, transcriptor(-worker) = no license field |
| hf-ivrit-whisper | `GET /api/models/ivrit-ai/whisper-large-v3{,-turbo}` | 2026-09-08 | apache-2.0, lastModified 2025-05-22 |
| hf-dicta-3 | `GET /api/models?author=dicta-il&search=3.0` | 2026-09-08 | 1.7B/24B families apache-2.0; Nemotron-12B family `other` |

## Not yet fetched (plan cites, no snapshot)

- https://github.com/ivrit-ai/ivrit.ai (covered by gh api)
- Partner sites (§11): ivrit.ai home, HUJI SLP lab, IAHLT, ITA, Hebrew Academy, Access Israel, Bekol. Fetch in Week 2 when drafting partner one-pager.
