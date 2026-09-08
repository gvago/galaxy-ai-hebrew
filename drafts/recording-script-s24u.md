# Device recording script: Galaxy S24 Ultra

Plan §10. One take per item, uncut, kept in `media/raw/` (gitignored). The 60-90 s public cut is made from these later. Not for this week, but do the **Members menu check** (item 0) now; it unblocks the feedback guide (ledger U2).

## Before recording
- [ ] Settings → About phone → Software information: note **One UI version**, Android version, build. Also Galaxy AI app versions if visible (Settings → Galaxy AI).
- [ ] Region check: Settings → General management → Language and region.
- [ ] Do Not Disturb on. Hide notifications. Use a fresh, empty Samsung Notes note and a scripted voice memo; no real contacts, calls, or notes on screen.
- [ ] Screen recorder with touch indicators on. Date visible in status bar.

## Items (each = one uncut clip, say the item number aloud at the start)

**0. Samsung Members menu (screenshots, not video).** Members → Support tab. Capture every option shown (Feedback / Ask / Suggestion / Error report / whatever appears in Israel). Fill ledger U2 and the guide's `[VERIFY]` blocks from this.

**1. Control: a supported language works.** Interpreter → select English ↔ Spanish (or Arabic). Speak one scripted sentence. Show it translating.

**2. Interpreter: Hebrew absent.** Open the language picker. Scroll the entire list slowly. Hebrew not present. Also open "Language packs / download languages" and scroll. Hebrew not present.

**3. Live Translate: Hebrew absent.** Settings → Galaxy AI → Call Assist → Live Translate → language settings. Scroll the "Me" and "Other person" language lists fully. Then the download-languages list.

**4. Writing Assist: Hebrew present (the contrast).** Samsung Keyboard → type a scripted Hebrew sentence → Writing Assist → change tone / spelling. Show it working.

**5. Transcript Assist: actual Hebrew behaviour.** Voice Recorder → record the scripted Hebrew paragraph (below) → Transcribe. Whatever happens (language picker without Hebrew, wrong-language transcript, garbage, refusal), record it as-is. This is ledger U5.

**6. Note Assist: actual Hebrew behaviour.** Paste the scripted Hebrew paragraph into Samsung Notes → Note Assist → Summarize / Auto format. Record the result as-is.

**7. Optional stress.** Repeat 5 with the code-switched paragraph.

## Scripted content (non-sensitive, public-domain-style)

Hebrew paragraph (~30 s read):
> שלום, זו הקלטת בדיקה. היום יום שלישי, השמונה בספטמבר. אנחנו בודקים אם המכשיר יודע לתמלל עברית. הפגישה תתחיל בשעה עשר וחצי, ונדון בשלושה נושאים: תקציב, לוח זמנים, ואחריות. נא להביא את המסמכים. תודה.

Code-switched paragraph:
> אוקיי, אז ה-deadline של ה-release הוא ביום חמישי. צריך לסיים את ה-QA על הפיצ'ר של ה-notifications ולעדכן את ה-README. מי לוקח את ה-follow-up עם הצוות ב-Herzliya?

Control sentence (English → Spanish): "The meeting starts at ten thirty; please bring the documents."

## After
- Copy clips to `media/raw/2026-MM-DD-s24u/` with the One UI version in the folder name.
- Log in `evidence/SOURCE_REGISTER.md` as a primary source (device, region, One UI, date).
- Second model later if one turns up; plan says "more than one if possible", not required.
