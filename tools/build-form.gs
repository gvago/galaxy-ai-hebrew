// FROZEN 2026-09-08 (DECISIONS D10): the live form was edited by hand and is canonical. Do NOT re-run; buildForm() deletes every item.
// Builds the HE-GALAXY-AI-2026 supporter form from drafts/supporter-survey.md.
// Run once in Apps Script (script.google.com) under the campaign Google account.
// Creates the form + a linked responses spreadsheet, closed to responses until the pilot.
// ponytail: one bilingual form, ONE response sheet to dedupe. English goes FIRST on every label on purpose:
// Forms picks a block\u2069's direction from its first strong character, so Hebrew-first titles right-align the text
// while the checkbox stays on the left. English-first keeps every card LTR and consistent. Every Hebrew segment is
// wrapped in \u2067...\u2069 (RLI/PDI bidi isolates) so mixed Hebrew+Latin phrases keep their word order inside LTR blocks.

var FORM_ID = '1HUner9aL28jrC36-kTU-wDyiIoXqGR9G7Wbys0pnpCU'; // set after first run; '' creates a new form

function buildForm() {
  var T = 'Hebrew for Galaxy AI: supporter survey (HE-GALAXY-AI-2026)\n\u2067סקר תומכים: עברית ל-Galaxy AI\u2069';
  var form = FORM_ID ? FormApp.openById(FORM_ID) : FormApp.create(T);
  form.getItems().forEach(function (it) { form.deleteItem(it); }); // idempotent rebuild
  form.setTitle(T);
  form.setDescription(
    'Samsung\'s Galaxy AI already supports Hebrew in Writing Assist, Photo Assist and Creative Studio, but not in Live Translate, Interpreter, Note Assist or Transcript Assist. ' +
    'This 3-minute survey documents real demand from Hebrew-speaking Galaxy owners. We publish aggregate numbers only. Read the privacy notice before answering: [PRIVACY_URL]\n\n' +
    '\u2067ב-Galaxy AI של סמסונג יש כבר עברית ב-Writing Assist, ב-Photo Assist וב-Creative Studio, אבל לא ב-Live Translate, ב-Interpreter, ב-Note Assist וב-Transcript Assist. הסקר הזה (3 דקות) מתעד ביקוש אמיתי של בעלי מכשירי Galaxy דוברי עברית. אנחנו מפרסמים נתונים מצרפיים בלבד. לפני שעונים, קראו את הודעת הפרטיות: [PRIVACY_URL]\u2069'
  );
  form.setConfirmationMessage(
    'Thank you. Next step (optional, but the most useful thing you can do): send Samsung your own feature request. Guide: [FEEDBACK_GUIDE_URL]\n\n' +
    '\u2067תודה. הצעד הבא (לא חובה, אבל המועיל ביותר): שלחו לסמסונג בקשת תכונה משלכם. מדריך: [FEEDBACK_GUIDE_URL]\u2069'
  );
  // Email is collected by the built-in field (typed by the respondent, no Google sign-in required).
  form.setEmailCollectionType(FormApp.EmailCollectionType.RESPONDER_INPUT);
  form.setLimitOneResponsePerUser(false);
  form.setShowLinkToRespondAgain(false);
  form.setAcceptingResponses(false); // draft until the Week 4 pilot

  function mc(title, opts, req, other) {
    var it = form.addMultipleChoiceItem().setTitle(title).setChoiceValues(opts).setRequired(!!req);
    if (other) it.showOtherOption(true);
    return it;
  }
  function cb(title, opts, req, other) {
    var it = form.addCheckboxItem().setTitle(title).setChoiceValues(opts).setRequired(!!req);
    if (other) it.showOtherOption(true);
    return it;
  }
  function txt(title, req, help) {
    var it = form.addTextItem().setTitle(title).setRequired(!!req);
    if (help) it.setHelpText(help);
    return it;
  }
  function para(title, req) { return form.addParagraphTextItem().setTitle(title).setRequired(!!req); }

  cb('I confirm I am 18 or older\n\u2067אני מאשר/ת שאני בן/בת 18 ומעלה\u2069', ['Yes · \u2067כן\u2069'], true);

  mc('Which Galaxy device do you currently use?\n\u2067באיזה מכשיר Galaxy אתם משתמשים כיום?\u2069',
     ['Galaxy S series · \u2067סדרת Galaxy S\u2069', 'Galaxy Z Fold / Flip', 'Galaxy A series · \u2067סדרת Galaxy A\u2069', 'Galaxy Tab', 'I don\'t currently own a Galaxy device · \u2067אין לי כיום מכשיר Galaxy\u2069'], true);
  txt('Exact model (e.g. S24 Ultra)\n\u2067דגם מדויק (למשל S24 Ultra)\u2069', false);
  txt('One UI version, if you know it\n\u2067גרסת One UI, אם ידועה\u2069', false,
      'Settings → About phone → Software information · \u2067הגדרות ← אודות הטלפון ← פרטי תוכנה\u2069');
  txt('Country / region you mostly use the phone in\n\u2067מדינה / אזור שבו אתם משתמשים בטלפון בעיקר\u2069', true);

  cb('Languages you speak daily\n\u2067שפות שאתם מדברים ביום-יום\u2069',
     ['Hebrew · \u2067עברית\u2069', 'English · \u2067אנגלית\u2069', 'Arabic · \u2067ערבית\u2069', 'Russian · \u2067רוסית\u2069', 'French · \u2067צרפתית\u2069', 'Amharic · \u2067אמהרית\u2069'], true, true);

  cb('Which of these would you actually use in Hebrew?\n\u2067באילו מהתכונות האלה הייתם משתמשים באמת בעברית?\u2069',
     ['Live Translate (\u2067תרגום שיחות טלפון בזמן אמת\u2069 · real-time call translation)',
      'Interpreter (\u2067תרגום שיחה פנים אל פנים\u2069 · face-to-face translation)',
      'Note Assist (\u2067סיכום ועיצוב ב-Samsung Notes\u2069 · summaries / formatting)',
      'Transcript Assist (\u2067תמלול וסיכום הקלטות\u2069 · transcribe and summarize recordings)',
      'I would not use any of these · \u2067לא הייתי משתמש/ת באף אחת\u2069'], true);

  mc('Which language pair matters most to you?\n\u2067איזה צמד שפות הכי חשוב לכם?\u2069',
     ['Hebrew ↔ English · \u2067עברית ↔ אנגלית\u2069', 'Hebrew ↔ Arabic · \u2067עברית ↔ ערבית\u2069', 'Hebrew ↔ Russian · \u2067עברית ↔ רוסית\u2069', 'Hebrew only · \u2067עברית בלבד (Notes / Transcript)\u2069'], false, true);

  mc('How often would you use it?\n\u2067באיזו תדירות הייתם משתמשים בזה?\u2069',
     ['Daily · \u2067כל יום\u2069', 'A few times a week · \u2067כמה פעמים בשבוע\u2069', 'A few times a month · \u2067כמה פעמים בחודש\u2069', 'Rarely · \u2067לעיתים רחוקות\u2069', 'Never · \u2067אף פעם\u2069'], true);

  para('Describe one real situation where it would have helped you (2-3 sentences, your own words)\n\u2067תארו מצב אמיתי אחד שבו זה היה עוזר לכם (2-3 משפטים, במילים שלכם)\u2069', true);
  para('What do you do instead today, and what does it cost you (time, money, missed information)?\n\u2067מה אתם עושים במקום זה היום, ומה זה עולה לכם (זמן, כסף, מידע שאבד)?\u2069', false);

  mc('Did the missing Hebrew support affect a decision to buy, upgrade or keep a Galaxy device?\n\u2067האם היעדר התמיכה בעברית השפיע על החלטה לקנות, לשדרג או להישאר עם Galaxy?\u2069',
     ['No · \u2067לא\u2069', 'I considered another brand · \u2067שקלתי מותג אחר\u2069', 'I bought or kept another brand · \u2067קניתי / נשארתי עם מותג אחר\u2069', 'I delayed an upgrade · \u2067דחיתי שדרוג\u2069'], false, true);

  para('Optional: do you have an accessibility need these features would serve (hearing, speech, vision, motor)?\n\u2067אופציונלי: יש לכם צורך נגישות שהתכונות האלה היו משרתות (שמיעה, דיבור, ראייה, מוטוריקה)?\u2069', false);

  cb('Separate consent: beta\n\u2067הסכמה נפרדת: בטא\u2069',
     ['Contact me about an official Samsung opt-in Hebrew beta, if one opens · \u2067אני רוצה שיפנו אליי בנוגע לבטא רשמית של סמסונג לעברית (opt-in), אם תיפתח\u2069'], false);
  cb('Separate consent: quoting\n\u2067הסכמה נפרדת: ציטוט\u2069',
     ['You may quote my story publicly without my name · \u2067מותר לצטט את הסיפור שלי בפומבי בלי השם שלי\u2069',
      'You may quote my story publicly with my first name and city · \u2067מותר לצטט את הסיפור שלי בפומבי עם השם הפרטי והעיר שלי\u2069'], false);
  cb('Privacy\n\u2067פרטיות\u2069',
     ['I have read the privacy notice and agree to the processing described in it · \u2067קראתי את הודעת הפרטיות ואני מסכים/ה לעיבוד המתואר בה\u2069'], true);

  if (!FORM_ID) {
    var ss = SpreadsheetApp.create('HE-GALAXY-AI-2026 responses (PRIVATE)');
    form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
    Logger.log('SHEET_URL=' + ss.getUrl());
  }

  Logger.log('EDIT_URL=' + form.getEditUrl());
  Logger.log('PUBLIC_URL=' + form.getPublishedUrl());
  Logger.log('ITEMS=' + form.getItems().length);
}
