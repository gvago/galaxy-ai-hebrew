# Claims Ledger: HE-GALAXY-AI-2026

Rule: nothing goes public unless it is in **Confirmed** with a primary source and a review date, and two people signed off. Review date = the day someone re-fetched the source and re-read it. Snapshots live in `evidence/snapshots/<date>/` (raw HTML + stripped text + `_fetch-log.json`).

Status values: Confirmed / Uncertain / Do Not Use.

## Confirmed

| ID | Claim (exact wording allowed in public) | Primary source | Snapshot | Reviewed | Reviewer(s) |
|---|---|---|---|---|---|
| C1 | Samsung Israel's Galaxy AI page states that as of **July 2026** ("החל מחודש יולי 2026"), Photo Assist, Creative Studio and Writing Assist support 41 languages **including Hebrew**. | https://www.samsung.com/il/galaxy-ai/ (FAQ "אילו שפות נתמכות ב-Galaxy AI?") | `2026-09-08/samsung-il-galaxy-ai.txt` | 2026-09-08 | Hermes (needs 2nd) |
| C2 | The same page lists **22 languages** for Call Assist (e.g. Live Translate), Note Assist, Interpreter and Transcript Assist. **Hebrew is not among them.** The 22: Korean, English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, Polish, Hindi, Thai, Vietnamese, Arabic, Indonesian, Russian, Turkish, Dutch, Swedish, Romanian, Filipino, Gujarati. | same | same | 2026-09-08 | Hermes (needs 2nd) |
| C3 | Hebrew is also absent from Now Nudge (16 languages), Now Brief (13) and Call Assist call-screening (13). | same | same | 2026-09-08 | Hermes (needs 2nd) |
| C4 | Samsung Israel's repair service terms name the contracting entity as **SAMSUNG ELECTRONICS ISRAEL LTD** ("סמסונג"). | https://www.samsung.com/il/support/service-terms-and-conditions/ | `samsung-il-service-terms.txt` | 2026-09-08 | Hermes (needs 2nd) |
| C5 | Samsung Electronics' Korean IR disclosure lists **Samsung Electronics Israel Ltd. (SEIL)** as a subsidiary (guarantee schedule, Citibank, 2025-12-17 ~ 2026-12-16). | https://www.samsung.com/sec/ir/reports-disclosures/public-disclosure/3740/ | `samsung-ir-3740.txt` | 2026-09-08 | Hermes (needs 2nd) |
| C6 | Samsung Israel's contact hub offers: online chat, WhatsApp, sign-language support, email, phone **\*6963** (Sun-Thu 09:00-18:00), Samsung Members community, and a **"פניה למנכ"ל"** (CEO-office) route. | https://www.samsung.com/il/support/contact/ | `samsung-il-contact.txt` | 2026-09-08 | Hermes (needs 2nd) |
| C7 | Samsung Israel's Members guide (last updated **12 May 2024**) documents: feedback/questions to experts, error reports with system logs, and a submission history view ("בדוק את המשוב ששלחת") showing engineering-team answers. It warns screens/menus vary by model and software version. | https://www.samsung.com/il/support/mobile-devices/how-to-use-the-samsung-members-app/ | `samsung-il-members-guide.txt` | 2026-09-08 | Hermes (needs 2nd) |
| C8 | Samsung R&D Institute Israel (SRIL) is located in **Herzliya**, runs an **open innovation team** to evaluate Israeli technologies for integration into Samsung products, and participates in investments via Samsung vehicles. The page lists a careers address and one named-person address under "Work with us" (kept in the private contacts file, not here). | https://research.samsung.com/sril | `sril.txt` | 2026-09-08 | Hermes (needs 2nd) |
| C9 | Samsung Newsroom (30 Jul 2024) states Live Translate performs three core processes: **ASR, NMT, TTS**; each requires distinct training data; Samsung worked with local institutions/partners to obtain and review region-specific data (jargon, dialects). At that time on-device LLM features supported 16 languages. | https://news.samsung.com/global/recap-the-learning-curve-how-samsungs-rd-institutes-around-the-world-worked-on-galaxy-ai | `samsung-newsroom-galaxy-ai-rd.txt` | 2026-09-08 | Hermes (needs 2nd) |
| C10 | ivrit.ai **code** repositories (`ivrit.ai`, `asr-training`, `faster-whisper`, `crowd-recital`, etc.) are **MIT**. | `gh api repos/ivrit-ai/*` | fetch log | 2026-09-08 | Hermes (needs 2nd) |
| C11 | ivrit.ai **models** `whisper-large-v3` and `whisper-large-v3-turbo` are **Apache-2.0** (HF model card). | https://huggingface.co/ivrit-ai/whisper-large-v3 | HF API | 2026-09-08 | Hermes (needs 2nd) |
| C12 | ivrit.ai **datasets** use a custom license: **CC BY 4.0 with restrictions**: use only for (a) training AI models or (b) academic research (v2, 1 Oct 2024; v1 training-only, 30 Jun 2023); no deep-fakes; export-control clause. Commercial training is explicitly allowed. | https://www.ivrit.ai/en/the-license/ | `ivrit-license.txt` | 2026-09-08 | Hermes (needs 2nd) |
| C13 | **DictaLM 3.0** open-weight models on HF are **Apache-2.0** for the 1.7B and 24B families (Base/Instruct/Thinking + quantized). The **Nemotron-12B** variants are `license: other` (inherit NVIDIA terms). | https://huggingface.co/dicta-il (API) | HF API | 2026-09-08 | Hermes (needs 2nd) |
| C14 | Microsoft Azure Speech supports **he-IL Hebrew (Israel)**: speech-to-text (audio + human-labeled transcript customization), and neural TTS voices **he-IL-HilaNeural** (F) and **he-IL-AvriNeural** (M). Commercial cloud service. | https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support | `ms-speech-langs.txt` | 2026-09-08 | Hermes (needs 2nd) |
| C15 | Samsung Israel's email form (Sprinklr webform, requires phone number) returns an automatic acknowledgment naming **Samsung Electronics Israel customer service**, promising email contact **within the next business day**, and offering WhatsApp **058-4006963**. No case/reference number is issued at receipt. | Guy's own submission, 2026-09-09 (case #1) | private/ | 2026-09-09 | Guy |
| C16 | On a Galaxy S24 Ultra (SM-S928B, Israel/ILO, One UI 8.5, Android 16, 2026-09-09) the on-device **Language packs** store (Settings, shared by Interpreter and Live Translate) offers exactly these 29 packs and **no Hebrew**: Arabic, Chinese (China mainland / Hong Kong / Taiwan), Dutch, English (Australia / India / UK / US), Filipino, French (Canada / France), German, Gujarati, Hindi, Indonesian, Italian, Japanese, Korean, Polish, Portuguese (Brazil / Portugal), Romanian, Russian, Spanish (Mexico / Spain / US), Swedish, Thai, Turkish, Vietnamese. That is the 22 languages of C2 with regional variants. | Device capture | `media/raw/2026-09-09-s24u/22-*.png` | 2026-09-09 | Guy (device owner) |
| C17 | Same device: **Live Translate** language picker (Settings > Galaxy AI > Call assist > Live translate > Me) lists the same 29 entries, no Hebrew. Live Translate was off on the device and returned to off after capture. | Device capture | `media/raw/2026-09-09-s24u/35-*.png` | 2026-09-09 | Guy (device owner) |
| C18 | Same device: Samsung Members app (com.samsung.android.voc) Support tab has **no suggestion or question path**. "Send feedback" leads to a category list (Slow device, Lock-up/restarting, Overheating, Short battery life, Application, Settings/System, Bluetooth, Camera, Call/Message, Accessory, Sensor/Touch, Networking/Wi-Fi, Display, Sounds/Vibrations, Charging, Others) and one error-report form: Frequency (Once/Often/Sometimes), description, "Send system log data" toggle (default on). After sending, History shows status "Received", date, category; **no reference number** in list or detail. Detail screen is titled "Error reports". Feedback auto-deletes after a year. | Device capture | `media/raw/2026-09-09-s24u/04-18-*.png` | 2026-09-09 | Guy (device owner) |

## Uncertain (do not publish until resolved)

| ID | Claim | What is missing | Owner | Due |
|---|---|---|---|---|
| U1 | Suny Cellular Communication is Samsung's official mobile importer/distributor in Israel and does not control Galaxy AI software. | samsungmobile.co.il returned **HTTP 403** to automated fetch (both /about and /contact). Needs a manual browser visit + screenshot/PDF save, or a secondary official source (Samsung IL site naming Suny; Suny's public filings). | | Wk 1 |
| U3 | Which Galaxy devices/One UI versions are "otherwise eligible" for the four target features. | Not extracted from the IL page yet; need the footnote list or per-device support pages. | | Wk 2 |
| U4 | The named-person address on the SRIL page is the correct **open-innovation/partnership** contact (vs. HR). | Page lists it under "Work with us" next to the careers address; role not stated. Confirm via LinkedIn/press before use. | | Wk 1 |
| U5 | Hebrew behaviour inside Transcript Assist / Note Assist on a current device (does it refuse, fall back to English, or partially work?). | Requires the §10 recording (items 5-6). Interpreter and Live Translate are done (C16, C17). | | Wk 3 |
| U6 | DICTA's own project page for DictaLM 3.0 (dicta.org.il/dicta-lm-3): content is JS-rendered; fetch returned 7 chars. License claim C13 relies on HF metadata only. | Manual visit + save, or cite HF cards as primary. | | Wk 2 |

## Do Not Use

Copied from plan §17; each line has a reason so nobody relitigates it.

| Phrase | Why |
|---|---|
| "Galaxy AI has no Hebrew" | False; see C1. |
| "There is no technical barrier" / "Samsung can simply switch Hebrew on" | Contradicted by C9 (separate ASR/NMT/TTS + data + validation). |
| "All Hebrew models and data are MIT licensed" | False; C10-C13 are mixed (MIT / Apache / custom CC-BY-restricted / other). |
| "ivrit.ai already solves Live Translate" | ivrit.ai is ASR + data; no NMT/TTS; not Samsung's on-device stack. |
| "Microsoft or Gemini proves Samsung's offline stack is ready" | Different stack, cloud vs. on-device. C14 is feasibility evidence only. |
| "Arabic support proves Hebrew is easy" | Different language, different data, different team (SRJO per C9). |
| "Samsung is deliberately withholding Hebrew" | No evidence; intent claims are unsourceable. |
| Any accuracy superlative without a named benchmark | Unfalsifiable. |
| Israeli Samsung market share / premium mix figures | No verified source yet. |
| National demand projections from our sample | Self-selected sample. |
| "[Partner] supports the campaign" before written permission | Plan §11. |

## Corrections log

| Date | What changed | Why |
|---|---|---|
| 2026-09-08 | Plan §2.5 said ivrit.ai datasets use "a modified/custom data license, not MIT". Refined: it is **CC BY 4.0 with a purpose restriction** (AI training / academic research). | Read the actual license text. |
| 2026-09-09 | U2 resolved as C18. Plan §5 assumed Members offers "Feedback, Ask a Question, or Suggestion"; in Israel it offers only the error-report form. The KPI "unique Samsung case references" cannot be a case number from either route (email: none at receipt, C15; Members: none, C18). Redefined: a documented submission = a screenshot of the Members History entry showing "Received" and the HE-GALAXY-AI-2026 subject, or the Samsung email acknowledgment. | Device capture. |
| 2026-09-08 | Plan §2.5 said "DictaLM 3.0: Apache 2.0". Refined: Apache-2.0 for 1.7B/24B families; **Nemotron-12B variants are `other`**. | HF API metadata. |
