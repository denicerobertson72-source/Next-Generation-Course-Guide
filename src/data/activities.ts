import type { Activity } from "@/src/types/course";

// Migrated from the Active Learning Activity Builder v2.3 activity library.
// Data is preserved as a typed static library so recommendation behavior can be regression-tested.

export const activities: Activity[] = [
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "low-grading",
      "inclusive",
      "evidence",
      "online-easy"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes",
      "slides",
      "video"
    ],
    "techNeeds": [],
    "limitations": "Responses can stay superficial without a focused prompt.",
    "accessibilityNotes": "",
    "aiConsiderations": "Low AI vulnerability when collected in class; online, keep it ungraded so AI use has no payoff.",
    "adaptations": {
      "largeClass": "Collect digitally or sample one section of the room; report patterns back to everyone.",
      "asyncOnline": "Use an ungraded LMS survey or exit-ticket quiz question at the end of each module.",
      "extendedVersion": "Add a third prompt asking students to connect today’s idea to a prior week."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#one-minute-papers"
      }
    ],
    "templateData": {
      "studentSteps": [
        "In the final minutes, write your answer to: “What was the most important thing you learned about {topic} today?”",
        "Then answer: “What question about {topic} remains uppermost in your mind?”",
        "Submit your responses before leaving."
      ],
      "debrief": [
        "Open the next session by summarizing the most common takeaways and answering the most frequent lingering question.",
        "Name one misconception that appeared and explain how you will revisit it."
      ],
      "product": "Two short written responses"
    },
    "id": "one-minute-paper",
    "name": "One-Minute Paper",
    "family": "Quick Understanding Checks",
    "shortDescription": "Students write brief responses to one or two prompts (e.g., most important point, muddiest point).",
    "purposes": [
      "check-understanding",
      "reflect",
      "engagement"
    ],
    "intellectualActions": [
      "summarize",
      "reflect",
      "retrieve"
    ],
    "learningStages": [
      "during-lecture",
      "after-reading",
      "end-of-unit"
    ],
    "evidenceProduced": "Short written responses revealing key takeaways and remaining confusions",
    "bestFor": "Rapid learning feedback"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "low-grading",
      "inclusive",
      "support-struggling",
      "online-easy"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes",
      "slides",
      "video"
    ],
    "techNeeds": [],
    "limitations": "Tells you where students are stuck, not why.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "largeClass": "Use a poll or word cloud; address only the top two muddy points.",
      "asyncOnline": "Add a “muddiest point” question to each module’s exit survey."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Write one or two sentences: “The muddiest (most confusing) point for me about {topic} is…”",
        "If nothing was confusing, write the idea you think classmates most likely misunderstood and why.",
        "Submit anonymously."
      ],
      "debrief": [
        "Tally the muddy points and reteach the top one or two using a new example.",
        "Tell students how their responses changed your plan — it raises future response quality."
      ],
      "product": "One or two sentences naming a point of confusion"
    },
    "id": "muddiest-point",
    "name": "Muddiest Point",
    "family": "Quick Understanding Checks",
    "shortDescription": "Students identify the single most confusing idea from a class, reading, or video.",
    "purposes": [
      "check-understanding",
      "prior-knowledge",
      "engagement"
    ],
    "intellectualActions": [
      "reflect",
      "retrieve"
    ],
    "learningStages": [
      "during-lecture",
      "after-reading",
      "end-of-unit",
      "before-exam"
    ],
    "evidenceProduced": "A ranked picture of where the class is most confused",
    "bestFor": "Finding confusion fast, especially before an exam"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5",
      "t15"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "low-grading",
      "online-easy",
      "inclusive"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes",
      "slides",
      "video"
    ],
    "techNeeds": [],
    "limitations": "Can become routine if used every session without variation.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Post as a discussion-board thread; ask students to answer one classmate’s “1 question.”",
      "extendedVersion": "Pairs compare lists and agree on the single most important idea before submitting."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/3-2-1/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Write 3 things you learned about {topic}.",
        "Write 2 things you found interesting or surprising.",
        "Write 1 question you still have.",
        "Submit your 3-2-1 before the end of class (or by the module deadline)."
      ],
      "debrief": [
        "Group the “1 questions” into themes and answer the top theme at the start of the next class.",
        "Share two or three interesting observations students made to reinforce engagement."
      ],
      "product": "A six-item 3-2-1 list"
    },
    "id": "three-two-one",
    "name": "3-2-1",
    "family": "Quick Understanding Checks",
    "shortDescription": "Students write 3 things they learned, 2 things they found interesting, and 1 question they still have.",
    "purposes": [
      "check-understanding",
      "reflect",
      "engagement"
    ],
    "intellectualActions": [
      "retrieve",
      "summarize",
      "reflect"
    ],
    "learningStages": [
      "during-lecture",
      "after-reading",
      "end-of-unit"
    ],
    "evidenceProduced": "Structured snapshot of takeaways, interests, and open questions",
    "bestFor": "Weekly check-ins or module summaries"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "low-grading",
      "evidence"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes"
    ],
    "techNeeds": [],
    "limitations": "Best used at the start or end of a topic.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "largeClass": "Collect a sample of lists, or have students compare lists in pairs and report only missing items.",
      "asyncOnline": "Run as a timed, ungraded LMS quiz question."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#focused-listing"
      }
    ],
    "templateData": {
      "studentSteps": [
        "In two minutes, list 5–7 words or short phrases you most associate with {concept}.",
        "Star the item you believe is most important.",
        "Submit your list."
      ],
      "debrief": [
        "Show the class’s most frequent items next to your own expert list and discuss gaps.",
        "Address any frequent items that reflect misconceptions."
      ],
      "product": "A focused list of 5–7 items with the most important starred"
    },
    "id": "focused-listing",
    "name": "Focused Listing",
    "family": "Quick Understanding Checks",
    "shortDescription": "Students generate a quick list of key terms or ideas in response to a focused prompt to reveal how they organize core content.",
    "purposes": [
      "check-understanding",
      "prior-knowledge"
    ],
    "intellectualActions": [
      "retrieve",
      "classify"
    ],
    "learningStages": [
      "before-instruction",
      "during-lecture",
      "end-of-unit"
    ],
    "evidenceProduced": "Lists showing which core terms and ideas students associate with a concept",
    "bestFor": "Quick diagnostics of recall and organization"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5",
      "t15"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-grading",
      "evidence",
      "support-struggling",
      "online-easy"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes"
    ],
    "techNeeds": [],
    "limitations": "Use to identify misconceptions early; requires writing good probe questions in advance.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Deliver as an ungraded LMS survey at the start of the module; useful early in modules to tailor instruction.",
      "shortVersion": "Use two questions: one recall item and one “explain in your own words” item."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/background-knowledge-probe/"
      },
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#background-knowledge-probe"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Answer the short questionnaire about {topic} honestly — it is ungraded and helps shape upcoming classes.",
        "For each question, choose the answer that best matches your current understanding, or write “not sure yet.”",
        "Add one thing you already know (or think you know) about {topic}."
      ],
      "debrief": [
        "Report the class profile: what most students already know and where the class will start.",
        "Flag one common misconception the course will directly test later."
      ],
      "product": "Completed short questionnaire"
    },
    "id": "background-knowledge-probe",
    "name": "Background Knowledge Probe",
    "family": "Quick Understanding Checks",
    "shortDescription": "A short, focused questionnaire completed before new instruction to reveal prior knowledge and misconceptions.",
    "purposes": [
      "prior-knowledge",
      "check-understanding"
    ],
    "intellectualActions": [
      "retrieve",
      "explain"
    ],
    "learningStages": [
      "before-instruction"
    ],
    "evidenceProduced": "Baseline picture of what students already know and believe",
    "bestFor": "Baseline diagnostics"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5",
      "t15"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "none",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-grading",
      "evidence",
      "online-easy",
      "accountability"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes",
      "problem-set"
    ],
    "techNeeds": [],
    "limitations": "Use to surface misconceptions before instruction moves on.",
    "accessibilityNotes": "",
    "aiConsiderations": "Online, keep it low-stakes and open-note so AI shortcuts have little value; in class, no AI exposure.",
    "adaptations": {
      "asyncOnline": "Use auto-graded LMS quizzes with immediate feedback and unlimited attempts.",
      "extendedVersion": "Follow with a team retake for the two-stage quiz format."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Complete the short quiz on {topic} without notes — it is low-stakes and meant to show you what you know.",
        "Mark any question where you guessed.",
        "After submitting, note which concept you most need to review."
      ],
      "debrief": [
        "Review the most-missed item and ask students to explain the wrong answer’s appeal before revealing the right one.",
        "Point students to targeted review resources for the weakest concept."
      ],
      "product": "Completed low-stakes quiz plus a self-identified review target"
    },
    "id": "formative-quiz",
    "name": "Formative Quiz (IRAT)",
    "family": "Quick Understanding Checks",
    "shortDescription": "Students complete a short, low-stakes quiz to check understanding and recall.",
    "purposes": [
      "check-understanding",
      "prior-knowledge"
    ],
    "intellectualActions": [
      "retrieve",
      "apply-concept"
    ],
    "learningStages": [
      "before-instruction",
      "after-reading",
      "before-exam",
      "end-of-unit"
    ],
    "evidenceProduced": "Item-level data on which concepts students have and have not mastered",
    "bestFor": "Quick formative checks"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "participation",
      "inclusive",
      "support-struggling"
    ],
    "sourceTypeCompatibility": [
      "lecture-notes",
      "slides"
    ],
    "techNeeds": [],
    "limitations": "Use predictable pause points; not suited to asynchronous formats without restructuring.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asynchronousOnline": "Embed pause-and-summarize prompts at timestamps in recorded lectures.",
      "largeClass": "Pair students at each pause to compare summaries before a show of hands."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#punctuated-lectures"
      }
    ],
    "templateData": {
      "studentSteps": [
        "When the lecture pauses, write a one-sentence summary of the segment you just heard about {topic}.",
        "Compare your notes with the summary — fill any gap you notice.",
        "Write one question the segment raised; hold it for the next pause or submit it."
      ],
      "debrief": [
        "Answer two or three submitted questions before resuming.",
        "Ask students what they noticed about their own attention across the pauses."
      ],
      "product": "Pause-point summaries and one question per segment"
    },
    "id": "punctuated-lecture",
    "name": "Punctuated Lecture",
    "family": "Quick Understanding Checks",
    "shortDescription": "Planned lecture pauses in which students summarize, review notes, and generate questions.",
    "purposes": [
      "check-understanding",
      "engagement",
      "understand"
    ],
    "intellectualActions": [
      "summarize",
      "retrieve",
      "reflect"
    ],
    "learningStages": [
      "during-lecture"
    ],
    "evidenceProduced": "Brief pause-point summaries and questions showing attention and comprehension",
    "bestFor": "Attention and comprehension checks"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "low-grading",
      "inclusive",
      "online-easy"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes",
      "slides",
      "video",
      "image"
    ],
    "techNeeds": [],
    "limitations": "Easy to implement in online discussions or quizzes.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Use a journal or ungraded discussion post per module."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/quick-write/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Write continuously for three minutes in response to: “{prompt}” — don’t worry about polish.",
        "Underline the one sentence that best captures your thinking.",
        "Submit or keep for the discussion that follows."
      ],
      "debrief": [
        "Invite two or three volunteers to read their underlined sentence aloud.",
        "Connect the range of responses to where the course goes next."
      ],
      "product": "A three-minute free-write with one key sentence underlined"
    },
    "id": "quick-write",
    "name": "Quick Write",
    "family": "Quick Understanding Checks",
    "shortDescription": "Learners respond to an open-ended prompt as a quick learning assessment.",
    "purposes": [
      "check-understanding",
      "reflect",
      "engagement"
    ],
    "intellectualActions": [
      "explain",
      "reflect",
      "connect"
    ],
    "learningStages": [
      "before-instruction",
      "during-lecture",
      "after-reading"
    ],
    "evidenceProduced": "Short free-writes revealing current thinking",
    "bestFor": "Frequent formative checks"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5",
      "t15"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "low-grading",
      "support-struggling",
      "evidence",
      "ai-resistant"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes",
      "problem-set"
    ],
    "techNeeds": [],
    "limitations": "Students may resist because retrieval feels harder than rereading; explain why it works.",
    "accessibilityNotes": "",
    "aiConsiderations": "Highly AI-resistant when done closed-note in class.",
    "adaptations": {
      "largeClass": "Whole-class brain dump followed by pair comparison scales to any size.",
      "asyncOnline": "Use repeatable, ungraded LMS practice quizzes with immediate feedback."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Without notes, write down everything you can remember about {topic} for three minutes (a “brain dump”).",
        "Open your notes and mark what you missed and what you got wrong in a different color.",
        "Write the single item you most need to restudy."
      ],
      "debrief": [
        "Ask what surprised students about the gap between what they recognized and what they could recall.",
        "Explain the testing effect: retrieval feels harder than rereading precisely because it strengthens memory."
      ],
      "product": "A marked-up brain dump showing recalled, missed, and corrected material"
    },
    "id": "retrieval-practice",
    "name": "Retrieval Practice",
    "family": "Quick Understanding Checks",
    "shortDescription": "Students recall key material from memory — brain dumps, closed-note questions, or flashcard rounds — to strengthen long-term learning.",
    "purposes": [
      "check-understanding",
      "understand",
      "prior-knowledge"
    ],
    "intellectualActions": [
      "retrieve",
      "explain"
    ],
    "learningStages": [
      "before-instruction",
      "during-lecture",
      "before-exam",
      "throughout"
    ],
    "evidenceProduced": "Recall attempts showing what has actually been retained",
    "bestFor": "Durable learning; one of the best-evidenced techniques in cognitive science"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written",
      "verbal"
    ],
    "facultyPriorities": [
      "low-prep",
      "participation",
      "inclusive",
      "online-easy"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "video",
      "lecture-notes"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Post stems in a discussion thread before the module opens."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Complete the stem: “Based on what I know about {topic}, I predict…”",
        "Add one reason for your prediction.",
        "Revisit your prediction after the lesson and note whether it held."
      ],
      "debrief": [
        "Sample a few predictions before revealing the material, then return to them afterward.",
        "Highlight how good predictions used prior course concepts."
      ],
      "product": "A written prediction with a reason, revisited after instruction"
    },
    "id": "sentence-stem-predictions",
    "name": "Sentence Stem Predictions",
    "family": "Quick Understanding Checks",
    "shortDescription": "Students complete instructor-provided sentence stems to predict what comes next in a lesson, reading, or process.",
    "purposes": [
      "prior-knowledge",
      "engagement",
      "check-understanding"
    ],
    "intellectualActions": [
      "retrieve",
      "connect"
    ],
    "learningStages": [
      "before-instruction",
      "during-lecture"
    ],
    "evidenceProduced": "Predictions revealing expectations and prior knowledge",
    "bestFor": "Activating curiosity before new material"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "evidence",
      "authentic",
      "ai-resistant"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes"
    ],
    "techNeeds": [],
    "limitations": "Great for translation of complex ideas; grading many paraphrases takes time.",
    "accessibilityNotes": "",
    "aiConsiderations": "Specify an unusual audience (e.g., a specific client, a 10-year-old cousin) to make generic AI output obvious.",
    "adaptations": {
      "largeClass": "Collect a sample, or have pairs swap and check each other’s paraphrase against two criteria.",
      "shortVersion": "Limit to two sentences for a defined audience."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#directed-paraphrasing"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Explain {concept} in your own words for this audience: {audience}.",
        "Keep it to 3–4 sentences; avoid technical vocabulary the audience wouldn’t know.",
        "Swap with a partner: does their paraphrase stay accurate while fitting the audience?"
      ],
      "debrief": [
        "Share one strong paraphrase and unpack what makes it both accurate and audience-appropriate.",
        "Name the most common accuracy slip you observed."
      ],
      "product": "A 3–4 sentence audience-specific paraphrase, peer-checked"
    },
    "id": "directed-paraphrasing",
    "name": "Directed Paraphrasing",
    "family": "Quick Understanding Checks",
    "shortDescription": "Students explain a concept in their own words for a specified audience.",
    "purposes": [
      "check-understanding",
      "understand",
      "apply"
    ],
    "intellectualActions": [
      "explain",
      "summarize"
    ],
    "learningStages": [
      "after-reading",
      "during-lecture",
      "end-of-unit"
    ],
    "evidenceProduced": "Paraphrases revealing depth of understanding and ability to translate ideas",
    "bestFor": "Checking depth of understanding"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "hybrid"
    ],
    "classSizes": [
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15"
    ],
    "groupingOptions": [
      "whole-class"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "low-grading",
      "participation"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Keep prompts narrow and actionable; in-person by design.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "synchronousOnline": "Use a shared document where each student adds one line.",
      "asynchronousOnline": "Use a single discussion thread where each student must build on the previous post."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#chain-notes"
      }
    ],
    "templateData": {
      "studentSteps": [
        "When the envelope (or shared doc) reaches you, read the prompt about {topic}.",
        "Add one honest sentence — what you were thinking or doing at that moment in class.",
        "Pass it on."
      ],
      "debrief": [
        "Summarize patterns in the chain at the next class and name one change you’ll make."
      ],
      "product": "One-sentence contribution to the class chain"
    },
    "id": "chain-notes",
    "name": "Chain Notes",
    "family": "Quick Understanding Checks",
    "shortDescription": "Students pass around a prompt and add brief responses, creating a running snapshot of class thinking.",
    "purposes": [
      "engagement",
      "check-understanding"
    ],
    "intellectualActions": [
      "reflect",
      "retrieve"
    ],
    "learningStages": [
      "during-lecture"
    ],
    "evidenceProduced": "A chained set of in-the-moment responses",
    "bestFor": "Quick feedback snapshots"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15"
    ],
    "groupingOptions": [
      "individual",
      "pairs"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "evidence",
      "participation",
      "ai-resistant"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes",
      "video"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "largeClass": "Collect via poll or form; use the best submissions in the actual review session.",
      "asyncOnline": "Each student posts one question and answers a classmate’s."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Write one exam-worthy question about {topic} that requires more than memorization to answer.",
        "Write the answer you would accept for full credit.",
        "Trade with a partner and try each other’s questions."
      ],
      "debrief": [
        "Sort a sample of questions by cognitive level and discuss what makes a question demanding.",
        "Commit to using at least one student question (edited) on the real exam."
      ],
      "product": "One exam-worthy question with a model answer"
    },
    "id": "student-generated-questions",
    "name": "Student-Generated Questions",
    "family": "Quick Understanding Checks",
    "shortDescription": "Students write potential exam or discussion questions about the material, revealing what they see as important.",
    "purposes": [
      "check-understanding",
      "prepare-assignment",
      "engagement"
    ],
    "intellectualActions": [
      "retrieve",
      "evaluate",
      "create"
    ],
    "learningStages": [
      "after-reading",
      "end-of-unit",
      "before-exam"
    ],
    "evidenceProduced": "Student-authored questions showing perceived importance and depth",
    "bestFor": "Exam preparation and revealing what students think matters"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs",
      "small-groups"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "graphic-organizer"
    ],
    "facultyPriorities": [
      "evidence",
      "support-struggling",
      "ai-resistant"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes"
    ],
    "techNeeds": [],
    "limitations": "Score relationships, not artistry.",
    "accessibilityNotes": "Offer a linked-list or outline alternative for students who do not work well with spatial diagrams.",
    "aiConsiderations": "",
    "adaptations": {
      "largeClass": "Provide a skeleton map with some nodes filled; students add links in pairs.",
      "asynchronousOnline": "Use a collaborative whiteboard, or accept photographed hand-drawn maps.",
      "shortVersion": "Give the concepts; students only draw and label the links."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#concept-maps"
      }
    ],
    "templateData": {
      "studentSteps": [
        "List the 8–10 most important concepts related to {topic}.",
        "Arrange them and draw lines between related concepts.",
        "Label every line with a linking phrase (“causes,” “is an example of,” “depends on”).",
        "Circle the one link you are least sure about."
      ],
      "debrief": [
        "Show two contrasting maps and discuss why experts’ maps are densely cross-linked.",
        "Address the links students marked as least sure."
      ],
      "product": "A concept map with labeled links and one flagged uncertainty"
    },
    "id": "concept-map",
    "name": "Concept Map",
    "family": "Organizing and Connecting Ideas",
    "shortDescription": "Students diagram relationships among concepts with labeled links.",
    "purposes": [
      "synthesize",
      "understand",
      "check-understanding"
    ],
    "intellectualActions": [
      "connect",
      "classify",
      "patterns"
    ],
    "learningStages": [
      "after-reading",
      "end-of-unit",
      "before-exam"
    ],
    "evidenceProduced": "Maps revealing students’ mental models and missing links",
    "bestFor": "Revealing mental models"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "graphic-organizer"
    ],
    "facultyPriorities": [
      "low-grading",
      "evidence"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes"
    ],
    "techNeeds": [],
    "limitations": "Helps reveal systematic confusions; requires designing the matrix in advance.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Distribute as a fillable table in the LMS; auto-check with a matching quiz.",
      "shortVersion": "Pre-fill half the cells and have students complete the rest."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#memory-matrix"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Fill in the empty cells of the matrix comparing {concept} across the given categories.",
        "Work from memory first; then check any cell you’re unsure of against the reading.",
        "Mark cells you had to look up."
      ],
      "debrief": [
        "Reveal the completed matrix; discuss the cells most often wrong or looked up.",
        "Ask what pattern the rows/columns expose."
      ],
      "product": "A completed comparison matrix with looked-up cells marked"
    },
    "id": "memory-matrix",
    "name": "Memory Matrix",
    "family": "Organizing and Connecting Ideas",
    "shortDescription": "Students complete a partially filled matrix to demonstrate relationships among concepts.",
    "purposes": [
      "understand",
      "check-understanding"
    ],
    "intellectualActions": [
      "classify",
      "retrieve",
      "patterns",
      "compare"
    ],
    "learningStages": [
      "after-reading",
      "during-lecture",
      "end-of-unit"
    ],
    "evidenceProduced": "Completed matrices revealing systematic confusions",
    "bestFor": "Assessing structured understanding"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "graphic-organizer"
    ],
    "facultyPriorities": [
      "low-grading",
      "evidence",
      "support-struggling"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes"
    ],
    "techNeeds": [],
    "limitations": "Good for borderline cases.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Deliver as an auto-scored matching or true/false grid in the LMS.",
      "extendedVersion": "Students add one borderline case of their own and defend its classification."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#defining-feature-matrix"
      }
    ],
    "templateData": {
      "studentSteps": [
        "For each feature in the left column, mark (+/−) whether it applies to each of the concepts being compared.",
        "Identify the one feature that best distinguishes the concepts.",
        "Write one borderline example and state which category it belongs to and why."
      ],
      "debrief": [
        "Review the rows with the most disagreement.",
        "Discuss the borderline examples students proposed — they show the real edges of the concept."
      ],
      "product": "A completed defining-feature matrix plus one defended borderline case"
    },
    "id": "defining-feature-matrix",
    "name": "Defining-Feature Matrix",
    "family": "Organizing and Connecting Ideas",
    "shortDescription": "Students distinguish among easily confused categories by marking which defining features apply.",
    "purposes": [
      "understand",
      "analyze",
      "check-understanding"
    ],
    "intellectualActions": [
      "compare",
      "classify"
    ],
    "learningStages": [
      "after-reading",
      "during-lecture",
      "before-exam"
    ],
    "evidenceProduced": "Feature matrices exposing which distinctions students can and cannot make",
    "bestFor": "Classification and comparison"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "graphic-organizer",
      "collab-doc"
    ],
    "facultyPriorities": [
      "collaborative",
      "participation",
      "evidence"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes",
      "dataset"
    ],
    "techNeeds": [],
    "limitations": "Works well with shared documents or collaborative boards.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asynchronousOnline": "Assign grids in a shared document with each member responsible for a set of items (color-coded for accountability).",
      "largeClass": "Project the grid; groups of neighbors sort a subset of items each."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/group-grid/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "With your group, sort the provided items into the grid’s categories for {topic}.",
        "For any contested item, write a one-line justification for where you placed it.",
        "Initial the items you personally placed (individual accountability)."
      ],
      "debrief": [
        "Compare grids across groups and adjudicate the contested items.",
        "Ask groups what rule they used for the hardest sort."
      ],
      "product": "A completed group grid with justifications for contested placements"
    },
    "id": "group-grid",
    "name": "Group Grid",
    "family": "Organizing and Connecting Ideas",
    "shortDescription": "Group members place pieces of information into blank cells of a grid according to category rubrics to clarify conceptual categories and develop sorting skills.",
    "purposes": [
      "understand",
      "collaborate",
      "check-understanding"
    ],
    "intellectualActions": [
      "classify",
      "compare"
    ],
    "learningStages": [
      "after-reading",
      "guided-practice",
      "during-lecture"
    ],
    "evidenceProduced": "Group-sorted grids showing category understanding",
    "bestFor": "Conceptual organization and sorting"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15"
    ],
    "groupingOptions": [
      "individual",
      "pairs",
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "graphic-organizer"
    ],
    "facultyPriorities": [
      "low-grading",
      "support-struggling",
      "evidence"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes",
      "problem-set",
      "video"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Use an LMS ordering question or numbered list submission.",
      "extendedVersion": "Include one plausible but incorrect step students must detect and remove."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Arrange the scrambled steps of {topic} into the correct order.",
        "Write one sentence explaining why the two steps you found hardest to place go where they do.",
        "Flag any step that seems out of place or unnecessary."
      ],
      "debrief": [
        "Reveal the correct sequence; focus discussion on the most commonly swapped pair.",
        "Ask what cue signals the correct position of the hardest step."
      ],
      "product": "A correctly ordered sequence with justifications"
    },
    "id": "sequence-reconstruction",
    "name": "Sequence Reconstruction",
    "family": "Organizing and Connecting Ideas",
    "shortDescription": "Students place scrambled steps, events, or stages of a process into the correct order and justify the ordering.",
    "purposes": [
      "understand",
      "check-understanding",
      "skill"
    ],
    "intellectualActions": [
      "classify",
      "patterns",
      "explain"
    ],
    "learningStages": [
      "after-reading",
      "guided-practice",
      "before-exam"
    ],
    "evidenceProduced": "Ordered sequences with justifications showing process understanding",
    "bestFor": "Procedures, historical chronologies, biological processes, algorithms"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "graphic-organizer",
      "brief-written"
    ],
    "facultyPriorities": [
      "evidence",
      "authentic",
      "ai-resistant",
      "support-struggling"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "primary-source",
      "dataset",
      "case",
      "chapter"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "Require evidence quoted from the specific course material with page/line references to limit generic AI output.",
    "adaptations": {
      "largeClass": "Provide the claim; students supply only evidence and reasoning, polled for the strongest pieces.",
      "shortVersion": "One claim, one piece of evidence, two-sentence reasoning."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Write a one-sentence claim answering: {prompt}",
        "List 2–3 pieces of specific evidence from {materialTitle} (quote or cite precisely).",
        "Write 2–3 sentences of reasoning explaining how the evidence supports the claim.",
        "Note one piece of evidence that could challenge your claim."
      ],
      "debrief": [
        "Contrast a strong and weak reasoning section: the weak one usually restates evidence instead of connecting it.",
        "Discuss the counter-evidence students found."
      ],
      "product": "A completed claim-evidence-reasoning organizer"
    },
    "id": "claim-evidence-reasoning",
    "name": "Claim-Evidence-Reasoning Organizer",
    "family": "Organizing and Connecting Ideas",
    "shortDescription": "Students state a claim, list supporting evidence, and write the reasoning that connects them using a structured organizer.",
    "purposes": [
      "analyze",
      "synthesize",
      "prepare-assignment"
    ],
    "intellectualActions": [
      "interpret-evidence",
      "analyze-argument",
      "connect"
    ],
    "learningStages": [
      "after-reading",
      "before-assignment",
      "guided-practice"
    ],
    "evidenceProduced": "CER organizers showing whether students can link evidence to claims",
    "bestFor": "Building argumentation skills across disciplines"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30",
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "graphic-organizer",
      "extended-written"
    ],
    "facultyPriorities": [
      "evidence",
      "authentic"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "primary-source"
    ],
    "techNeeds": [],
    "limitations": "Helps surface questions for discussion.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Submit as recurring journal entries; sample rather than grade every entry."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#focused-dialectical-notes"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Divide a page in two columns: “What the text says” and “What I think/ask.”",
        "For {materialTitle}, record 4–5 key passages on the left.",
        "Opposite each, write your reaction, objection, or question.",
        "Star the entry you most want discussed."
      ],
      "debrief": [
        "Build the class discussion agenda from the starred entries."
      ],
      "product": "Two-column dialectical notes with a starred discussion item"
    },
    "id": "focused-dialectical-notes",
    "name": "Focused Dialectical Notes",
    "family": "Organizing and Connecting Ideas",
    "shortDescription": "Students keep structured notes separating key ideas from reactions or questions.",
    "purposes": [
      "analyze",
      "understand",
      "reflect"
    ],
    "intellectualActions": [
      "interpret-evidence",
      "connect",
      "reflect"
    ],
    "learningStages": [
      "after-reading",
      "throughout"
    ],
    "evidenceProduced": "Two-column notes revealing critical engagement with texts",
    "bestFor": "Critical engagement and interpretation"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs",
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "evidence",
      "authentic"
    ],
    "sourceTypeCompatibility": [
      "case",
      "reading",
      "dataset",
      "problem-set"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Crowd-source factors on a discussion board, then have each student submit a prioritized top five.",
      "shortVersion": "List five factors and star the two most decisive."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "List every factor you can think of that affects {topic} — aim for at least ten.",
        "Group your factors into 3–4 categories and name each category.",
        "Rank the top three factors and justify your #1 in two sentences."
      ],
      "debrief": [
        "Assemble a class master list; note factors nearly everyone missed.",
        "Compare rankings and surface the criteria behind different priorities."
      ],
      "product": "A categorized, prioritized factors list with justification"
    },
    "id": "comprehensive-factors-list",
    "name": "Comprehensive Factors List",
    "family": "Organizing and Connecting Ideas",
    "shortDescription": "Students brainstorm and organize all factors relevant to a complex problem or decision, then group and prioritize them.",
    "purposes": [
      "synthesize",
      "analyze",
      "prepare-assignment"
    ],
    "intellectualActions": [
      "connect",
      "classify",
      "evaluate"
    ],
    "learningStages": [
      "before-assignment",
      "after-reading",
      "guided-practice"
    ],
    "evidenceProduced": "Organized factor lists showing breadth and prioritization of thinking",
    "bestFor": "Preparing for complex analysis or applied projects"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30",
      "t50",
      "t50plus",
      "multi"
    ],
    "groupingOptions": [
      "individual",
      "small-groups"
    ],
    "preparationLevel": "significant",
    "reviewBurden": "brief",
    "responseFormats": [
      "extended-written",
      "verbal"
    ],
    "facultyPriorities": [
      "authentic",
      "evidence",
      "collaborative",
      "challenge-advanced"
    ],
    "sourceTypeCompatibility": [
      "case",
      "reading",
      "dataset",
      "primary-source"
    ],
    "techNeeds": [],
    "limitations": "A full case normally needs more than 15 minutes and careful case selection.",
    "accessibilityNotes": "",
    "aiConsiderations": "Use local, recent, or instructor-written cases so AI cannot supply a canned analysis.",
    "adaptations": {
      "shortVersion": "Case Study Sprint: one decision point and a two-sentence justification.",
      "asynchronousOnline": "Run in discussion groups across a week: analysis posts midweek, peer responses by the deadline.",
      "largeClass": "Same case for all groups; collect one decision + justification per group via a form.",
      "lowGrading": "Grade a one-paragraph decision memo instead of a full analysis."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/case-studies/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Read the case and identify the central problem facing the decision-maker in {topic}.",
        "List the 2–3 course concepts from {concept} that apply, and note the relevant case facts for each.",
        "Decide what the decision-maker should do and justify the decision using both concepts and case facts.",
        "Note the strongest argument against your recommendation."
      ],
      "debrief": [
        "Poll decisions, then have groups defend minority positions before revealing what actually happened (if known).",
        "Ask which course concept did the most work in students’ reasoning."
      ],
      "product": "A written decision with concept-based justification and one counterargument"
    },
    "id": "case-study",
    "name": "Case Study",
    "family": "Application and Problem-Solving",
    "shortDescription": "Students analyze a real-world scenario and apply concepts to propose or evaluate solutions.",
    "purposes": [
      "apply",
      "analyze",
      "synthesize"
    ],
    "intellectualActions": [
      "apply-concept",
      "decide",
      "interpret-evidence",
      "recommend"
    ],
    "learningStages": [
      "guided-practice",
      "end-of-unit",
      "before-assignment"
    ],
    "evidenceProduced": "Case analyses showing whether students can apply concepts to messy situations",
    "bestFor": "Applied learning modules"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30",
      "t50"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "detailed",
    "responseFormats": [
      "extended-written"
    ],
    "facultyPriorities": [
      "evidence",
      "support-struggling",
      "ai-resistant"
    ],
    "sourceTypeCompatibility": [
      "problem-set"
    ],
    "techNeeds": [],
    "limitations": "Reveals where reasoning breaks down; reviewing full write-ups is time-intensive.",
    "accessibilityNotes": "",
    "aiConsiderations": "The “explain why you did each step” requirement makes pasted AI solutions easy to spot; consider in-class completion.",
    "adaptations": {
      "lowGrading": "Review only the step where each student first went wrong; give whole-class feedback on patterns.",
      "largeClass": "Students annotate one provided solution instead of writing their own.",
      "shortVersion": "Document only the two steps students consider hardest."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#documented-problem-set-solutions"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Solve the problem about {topic}, writing every step.",
        "Next to each step, write why you did it — the rule, concept, or strategy.",
        "After finishing, write how you checked (or would check) your answer."
      ],
      "debrief": [
        "Display an anonymous solution and walk the class through the reasoning column.",
        "Highlight the most common “silent step” students skip."
      ],
      "product": "A fully documented solution with reasoning for each step"
    },
    "id": "documented-problem-solution",
    "name": "Documented Problem Solution",
    "family": "Application and Problem-Solving",
    "shortDescription": "Students document each step in solving a problem, including reasoning and checks.",
    "purposes": [
      "apply",
      "skill",
      "check-understanding"
    ],
    "intellectualActions": [
      "solve",
      "explain",
      "practice-procedure"
    ],
    "learningStages": [
      "guided-practice",
      "during-assignment",
      "before-exam"
    ],
    "evidenceProduced": "Step-by-step solutions revealing exactly where reasoning breaks down",
    "bestFor": "Making problem-solving visible"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs",
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "authentic",
      "participation",
      "evidence",
      "ai-resistant"
    ],
    "sourceTypeCompatibility": [
      "case",
      "reading",
      "dataset"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "largeClass": "Poll the decision, then cold-call justifications from each camp.",
      "asyncOnline": "Post the scenario with a poll; students justify their vote in a reply.",
      "shortVersion": "One decision point, two options, two-sentence justification."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Read the scenario. Identify what must be decided and what’s at stake.",
        "Choose one of the options (or propose a better one).",
        "Justify your choice in 3–4 sentences using at least one concept from {concept}.",
        "Name the biggest risk of your choice."
      ],
      "debrief": [
        "Show the vote split; have each side give its best argument before you weigh in.",
        "Connect the strongest justifications to the underlying course concept."
      ],
      "product": "A committed decision with concept-based justification and a risk statement"
    },
    "id": "decision-making-case",
    "name": "Decision-Making Case (Scenario Challenge)",
    "family": "Application and Problem-Solving",
    "shortDescription": "Students face a short scenario with a genuine decision point, choose a course of action, and justify it with course concepts.",
    "purposes": [
      "apply",
      "analyze",
      "engagement"
    ],
    "intellectualActions": [
      "decide",
      "apply-concept",
      "evaluate",
      "recommend"
    ],
    "learningStages": [
      "during-lecture",
      "guided-practice",
      "end-of-unit"
    ],
    "evidenceProduced": "Decisions with justifications showing applied reasoning",
    "bestFor": "Making lectures decision-driven without full case-method overhead"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "support-struggling",
      "evidence",
      "low-grading"
    ],
    "sourceTypeCompatibility": [
      "problem-set",
      "reading"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "largeClass": "Project both examples; pairs discuss, then poll which is stronger and why.",
      "extendedVersion": "After comparing, students solve a parallel problem using the stronger approach."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Study Solutions A and B to the same {topic} problem.",
        "List two ways they differ in approach.",
        "Decide which is stronger (or where one goes wrong) and explain the principle behind the difference.",
        "Write one rule you will follow in your own solutions."
      ],
      "debrief": [
        "Reveal the intended contrast and name the principle it illustrates.",
        "Collect the “rules” students wrote and compile the best into a class checklist."
      ],
      "product": "A written comparison identifying the key difference and a personal takeaway rule"
    },
    "id": "worked-example-comparison",
    "name": "Worked-Example Comparison",
    "family": "Application and Problem-Solving",
    "shortDescription": "Students study two worked solutions — often one strong and one flawed or two contrasting approaches — and analyze the differences.",
    "purposes": [
      "understand",
      "apply",
      "skill"
    ],
    "intellectualActions": [
      "compare",
      "solve",
      "evaluate",
      "patterns"
    ],
    "learningStages": [
      "guided-practice",
      "during-lecture",
      "before-assignment"
    ],
    "evidenceProduced": "Comparative analyses showing which solution features students notice",
    "bestFor": "Novices in problem-heavy courses; strongly supported by cognitive load research"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15"
    ],
    "groupingOptions": [
      "individual",
      "pairs",
      "whole-class"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "participation",
      "support-struggling",
      "evidence",
      "low-grading"
    ],
    "sourceTypeCompatibility": [
      "video",
      "dataset",
      "image",
      "problem-set"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Pause a demonstration video after the setup; students post predictions before watching the rest.",
      "largeClass": "Collect predictions by poll; sample explanations after the reveal."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Before the demonstration/result is revealed: write your prediction about {topic} and one sentence of reasoning.",
        "Observe what actually happens and record it.",
        "Explain any difference between your prediction and the outcome. What idea needs revising?"
      ],
      "debrief": [
        "Share the prediction distribution and let students explain the correct outcome before you do.",
        "Name the misconception the surprising result exposes."
      ],
      "product": "A written prediction, observation, and reconciling explanation"
    },
    "id": "predict-observe-explain",
    "name": "Predict-Observe-Explain",
    "family": "Application and Problem-Solving",
    "shortDescription": "Students predict the outcome of a demonstration, problem, or scenario, observe what happens, then explain any gap between prediction and result.",
    "purposes": [
      "understand",
      "prior-knowledge",
      "engagement"
    ],
    "intellectualActions": [
      "apply-concept",
      "explain",
      "interpret-evidence"
    ],
    "learningStages": [
      "during-lecture",
      "before-instruction",
      "guided-practice"
    ],
    "evidenceProduced": "Prediction-explanation pairs exposing misconceptions directly",
    "bestFor": "Confronting misconceptions in sciences, statistics, economics — anywhere outcomes surprise"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t50plus",
      "multi"
    ],
    "groupingOptions": [
      "small-groups"
    ],
    "preparationLevel": "significant",
    "reviewBurden": "detailed",
    "responseFormats": [
      "submitted",
      "presentation"
    ],
    "facultyPriorities": [
      "authentic",
      "collaborative",
      "challenge-advanced",
      "product"
    ],
    "sourceTypeCompatibility": [
      "case",
      "dataset",
      "primary-source"
    ],
    "techNeeds": [],
    "limitations": "High design and facilitation cost; needs milestones and individual accountability to work.",
    "accessibilityNotes": "",
    "aiConsiderations": "Authentic local problems and required process documentation reduce AI shortcuts; alternatively assign AI a documented role in research.",
    "adaptations": {
      "shortVersion": "A single-session “mini-PBL”: define the problem, list learning issues, and outline an approach.",
      "lowGrading": "Grade milestone check-ins with a checklist; grade the final product once.",
      "asynchronousOnline": "Structure with weekly deliverables in shared documents and a discussion thread per team."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "With your team, read the problem about {topic} and write a problem statement in your own words.",
        "List what you already know and what you need to find out (learning issues); assign each learning issue to a member.",
        "Research your issue and report back; integrate findings into a proposed solution.",
        "Submit the team solution plus your individual learning-issue report."
      ],
      "debrief": [
        "Compare teams’ problem statements — differences show how framing drives solutions.",
        "Ask each team what they would investigate next with more time."
      ],
      "product": "A team solution document plus individual learning-issue reports"
    },
    "id": "problem-based-learning",
    "name": "Problem-Based Learning",
    "family": "Application and Problem-Solving",
    "shortDescription": "Teams work on a complex, authentic, loosely structured problem over an extended period, identifying what they need to learn along the way.",
    "purposes": [
      "apply",
      "synthesize",
      "collaborate",
      "skill"
    ],
    "intellectualActions": [
      "solve",
      "plan",
      "connect",
      "recommend",
      "create"
    ],
    "learningStages": [
      "during-assignment",
      "end-of-unit",
      "throughout"
    ],
    "evidenceProduced": "Team solutions, learning-issue logs, and individual contributions",
    "bestFor": "Capstone-style application over multiple sessions"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30",
      "t50"
    ],
    "groupingOptions": [
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "none",
    "responseFormats": [
      "verbal",
      "brief-written"
    ],
    "facultyPriorities": [
      "collaborative",
      "participation",
      "authentic",
      "accountability"
    ],
    "sourceTypeCompatibility": [
      "case",
      "dataset",
      "reading"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asynchronousOnline": "Teams post their choice + rationale to a hidden-until-posted discussion; reveal all at the deadline.",
      "largeClass": "Simultaneous report via colored cards or poll; sample rationales."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "With your team, work the problem about {topic} and agree on ONE specific choice from the options.",
        "Prepare a 60-second defense using course concepts.",
        "On signal, all teams reveal choices simultaneously.",
        "Defend your choice when called on; you may change your position if persuaded — say what changed your mind."
      ],
      "debrief": [
        "Have disagreeing teams argue it out before giving your read.",
        "Emphasize the concept-based reasoning that separated stronger and weaker defenses."
      ],
      "product": "A committed team choice with a concept-based defense"
    },
    "id": "team-based-application",
    "name": "Team-Based Application Exercise",
    "family": "Application and Problem-Solving",
    "shortDescription": "Teams apply course concepts to make a specific, simultaneous, defensible choice — the “4 S” structure: significant problem, same problem, specific choice, simultaneous report.",
    "purposes": [
      "apply",
      "collaborate",
      "engagement"
    ],
    "intellectualActions": [
      "apply-concept",
      "decide",
      "evaluate"
    ],
    "learningStages": [
      "guided-practice",
      "end-of-unit"
    ],
    "evidenceProduced": "Team choices with rationales, compared across teams",
    "bestFor": "High-energy application in team-based courses"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30",
      "t50",
      "t50plus"
    ],
    "groupingOptions": [
      "small-groups",
      "whole-class"
    ],
    "preparationLevel": "significant",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "verbal",
      "brief-written"
    ],
    "facultyPriorities": [
      "authentic",
      "participation",
      "collaborative",
      "ai-resistant",
      "challenge-advanced"
    ],
    "sourceTypeCompatibility": [
      "case",
      "primary-source",
      "reading"
    ],
    "techNeeds": [],
    "limitations": "Needs clear role sheets and psychological safety; debrief is essential.",
    "accessibilityNotes": "Offer non-performing roles (observer, recorder, analyst) so students who cannot or prefer not to perform can participate fully.",
    "aiConsiderations": "",
    "adaptations": {
      "synchronousOnline": "Run in breakout rooms with role sheets distributed in advance; observers keep a shared-doc log.",
      "shortVersion": "A ten-minute “hot seat”: one volunteer takes a role, class questions them.",
      "lowPrep": "Use a two-role paired negotiation with half-page role sheets."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/role-play/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Read your role sheet for the {topic} scenario. Note your character’s goals and constraints.",
        "In your group, play out the scenario — stay in role and pursue your character’s interests.",
        "Observers: record the key arguments and turning points.",
        "Out of role, write a short reflection: what did your role see that others could not?"
      ],
      "debrief": [
        "De-role explicitly, then compare what each role could and couldn’t see.",
        "Connect the scenario’s dynamics to the course framework it illustrates."
      ],
      "product": "In-role participation plus an out-of-role written reflection"
    },
    "id": "role-play-simulation",
    "name": "Role Play or Simulation",
    "family": "Application and Problem-Solving",
    "shortDescription": "Students take on roles within a scenario — stakeholders, historical figures, professionals — and act out decisions or negotiations.",
    "purposes": [
      "apply",
      "collaborate",
      "engagement",
      "synthesize"
    ],
    "intellectualActions": [
      "apply-concept",
      "decide",
      "evaluate",
      "connect"
    ],
    "learningStages": [
      "end-of-unit",
      "guided-practice"
    ],
    "evidenceProduced": "In-role decisions plus out-of-role written reflections",
    "bestFor": "Perspective-taking, negotiation, ethics, professional judgment"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "hybrid"
    ],
    "classSizes": [
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30",
      "t50"
    ],
    "groupingOptions": [
      "small-groups",
      "whole-class"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "none",
    "responseFormats": [
      "verbal"
    ],
    "facultyPriorities": [
      "participation",
      "collaborative",
      "low-grading"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Works well via LMS quiz tools or live games.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asynchronousOnline": "Convert the grid to a self-paced LMS quiz bank organized by category and difficulty."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/team-jeopardy/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "In teams, take turns selecting a category and point value on {topic}.",
        "Confer briefly (30 seconds) before your team answers.",
        "Every member must answer at least once before anyone answers twice."
      ],
      "debrief": [
        "Revisit the two most-missed questions and explain the underlying concept.",
        "Tell students which categories to prioritize in their studying."
      ],
      "product": "Team scores plus a class-level map of weak categories"
    },
    "id": "team-jeopardy",
    "name": "Team Jeopardy",
    "family": "Application and Problem-Solving",
    "shortDescription": "A review game in which student teams select questions from a category/difficulty grid to earn points.",
    "purposes": [
      "check-understanding",
      "engagement",
      "collaborate"
    ],
    "intellectualActions": [
      "retrieve",
      "apply-concept"
    ],
    "learningStages": [
      "before-exam",
      "end-of-unit"
    ],
    "evidenceProduced": "Live picture of which categories the class has and hasn’t mastered",
    "bestFor": "Engagement and review sessions"
  },
  {
    "origin": "original",
    "modalities": [
      "async-online",
      "hybrid",
      "in-person",
      "sync-online"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30",
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "online-easy",
      "authentic"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "dataset"
    ],
    "techNeeds": [
      "devices"
    ],
    "limitations": "Fits asynchronous exploration tasks.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "shortVersion": "Find one credible source and one questionable source on {topic}; justify the difference."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/online-resource-scavenger-hunt/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Using the specified databases/sites, locate the listed items related to {topic}.",
        "For each item, record where you found it and one sentence on its credibility.",
        "Flag the hardest item and describe the search strategy that finally worked."
      ],
      "debrief": [
        "Compare search strategies for the hardest item.",
        "Discuss what distinguished credible from questionable sources students found."
      ],
      "product": "A completed source list with credibility notes"
    },
    "id": "online-resource-scavenger-hunt",
    "name": "Online Resource Scavenger Hunt",
    "family": "Application and Problem-Solving",
    "shortDescription": "Students use the Internet to engage in fact-finding and information processing using instructor-specified library and Internet sources.",
    "purposes": [
      "apply",
      "skill"
    ],
    "intellectualActions": [
      "retrieve",
      "evaluate",
      "interpret-evidence"
    ],
    "learningStages": [
      "before-assignment",
      "guided-practice"
    ],
    "evidenceProduced": "Located sources with evaluations of quality and relevance",
    "bestFor": "Research skill development"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "graphic-organizer",
      "brief-written"
    ],
    "facultyPriorities": [
      "authentic",
      "evidence"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "primary-source",
      "chapter"
    ],
    "techNeeds": [],
    "limitations": "Use short excerpts for clarity.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "largeClass": "Assign each section of the text to a different zone of the room; assemble the full analysis on screen.",
      "asyncOnline": "Annotate a shared copy of the text, one paragraph per student."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#do-and-say-analysis"
      }
    ],
    "templateData": {
      "studentSteps": [
        "For each paragraph of the excerpt from {materialTitle}, write one “says” sentence (its content).",
        "Write one “does” sentence (its function: defines, concedes, rebuts, illustrates…).",
        "Mark where the argument turns — the paragraph doing the most work."
      ],
      "debrief": [
        "Compare where students located the turning point and why.",
        "Build a class map of the text’s architecture from the “does” column."
      ],
      "product": "A says/does analysis of the excerpt with the turning point identified"
    },
    "id": "do-and-say-analysis",
    "name": "Do & Say Analysis",
    "family": "Analysis and Evaluation",
    "shortDescription": "Students analyze what an author or speaker is doing rhetorically (function) and what they are saying (content).",
    "purposes": [
      "analyze",
      "understand"
    ],
    "intellectualActions": [
      "analyze-argument",
      "interpret-evidence",
      "patterns"
    ],
    "learningStages": [
      "after-reading",
      "guided-practice"
    ],
    "evidenceProduced": "Function/content analyses showing rhetorical awareness",
    "bestFor": "Rhetorical and structural analysis"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small"
    ],
    "timeOptions": [
      "t50",
      "t50plus",
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "detailed",
    "responseFormats": [
      "extended-written"
    ],
    "facultyPriorities": [
      "authentic",
      "product",
      "evidence",
      "challenge-advanced"
    ],
    "sourceTypeCompatibility": [
      "dataset",
      "case",
      "reading",
      "primary-source"
    ],
    "techNeeds": [],
    "limitations": "Use focused prompts to avoid summaries; detailed review takes time.",
    "accessibilityNotes": "",
    "aiConsiderations": "Anchor the memo to course-specific data or a local audience; require one in-class paragraph as a writing sample.",
    "adaptations": {
      "lowGrading": "Grade with a 4-item checklist; give whole-class feedback on the strongest and weakest patterns.",
      "shortVersion": "A one-paragraph “micro-memo” with a single recommendation."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#analytic-memos"
      }
    ],
    "templateData": {
      "studentSteps": [
        "You are writing to {audience}. In one page, analyze {topic} using the assigned material.",
        "Open with your conclusion, then support it with 2–3 concept-driven points citing specific evidence.",
        "Close with one recommendation and one limitation of your analysis."
      ],
      "debrief": [
        "Show a strong opening paragraph and discuss why leading with the conclusion works in professional writing.",
        "Name the most common gap between evidence and claim."
      ],
      "product": "A one-page analytic memo for a specified audience"
    },
    "id": "analytic-memo",
    "name": "Analytic Memo",
    "family": "Analysis and Evaluation",
    "shortDescription": "Students write brief memos analyzing a problem, text, dataset, or case using course concepts.",
    "purposes": [
      "analyze",
      "apply",
      "prepare-assignment"
    ],
    "intellectualActions": [
      "analyze-argument",
      "interpret-evidence",
      "recommend"
    ],
    "learningStages": [
      "before-assignment",
      "end-of-unit",
      "during-assignment"
    ],
    "evidenceProduced": "Concise analytical writing in a professional genre",
    "bestFor": "Concise argumentation"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30",
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "graphic-organizer",
      "brief-written"
    ],
    "facultyPriorities": [
      "support-struggling",
      "evidence",
      "online-easy"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "primary-source"
    ],
    "techNeeds": [],
    "limitations": "Works well via document assignments.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "shortVersion": "Three questions: main claim, key evidence, one objection.",
      "largeClass": "Auto-collect via LMS; review a sample and give whole-class feedback."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/active-reading-documents/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Before reading {materialTitle}: predict what the author will argue.",
        "While reading: complete the guide — main claim, two key pieces of evidence, one passage that confused you.",
        "After reading: write a two-sentence assessment — does the evidence carry the claim?"
      ],
      "debrief": [
        "Compare predicted vs. actual arguments.",
        "Address the most commonly flagged confusing passage."
      ],
      "product": "A completed active reading guide"
    },
    "id": "active-reading-documents",
    "name": "Active Reading Documents",
    "family": "Analysis and Evaluation",
    "shortDescription": "Carefully prepared forms that guide students through the process of critical and careful reading.",
    "purposes": [
      "analyze",
      "understand"
    ],
    "intellectualActions": [
      "interpret-evidence",
      "summarize",
      "analyze-argument"
    ],
    "learningStages": [
      "after-reading",
      "before-instruction"
    ],
    "evidenceProduced": "Guided reading responses showing comprehension and analysis of the text",
    "bestFor": "Text comprehension tasks"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "evidence",
      "support-struggling",
      "low-grading",
      "ai-productive"
    ],
    "sourceTypeCompatibility": [
      "problem-set",
      "reading",
      "dataset"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "Pairs naturally with AI: have AI generate a flawed solution and students hunt the errors.",
    "adaptations": {
      "largeClass": "Project the flawed work; students vote on where the first error occurs, then discuss.",
      "asyncOnline": "Post the flawed artifact; students submit diagnosis + correction via assignment."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Examine the flawed {topic} solution/draft. Find at least two errors.",
        "For each error: name it, explain WHY it’s wrong (the violated concept or rule), and correct it.",
        "Rank the errors by seriousness."
      ],
      "debrief": [
        "Reveal all planted errors; discuss any that most students missed.",
        "Ask which error a real practitioner would consider most costly and why."
      ],
      "product": "An error log with diagnoses, corrections, and severity ranking"
    },
    "id": "error-analysis",
    "name": "Error Analysis",
    "family": "Analysis and Evaluation",
    "shortDescription": "Students find, diagnose, and correct errors in a flawed solution, draft, or argument.",
    "purposes": [
      "analyze",
      "skill",
      "check-understanding"
    ],
    "intellectualActions": [
      "evaluate",
      "solve",
      "explain"
    ],
    "learningStages": [
      "guided-practice",
      "after-feedback",
      "before-exam"
    ],
    "evidenceProduced": "Diagnoses showing whether students understand not just how, but why",
    "bestFor": "Deepening understanding of common mistakes before they appear on exams"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs",
      "small-groups"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "participation",
      "low-prep",
      "evidence",
      "collaborative"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "case",
      "dataset",
      "primary-source"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "largeClass": "Poll individual rankings first, then re-poll after pair discussion to show movement.",
      "asyncOnline": "Students post rankings with justifications, then must respond to one classmate with a different #1."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Individually rank the items related to {topic} from most to least important (or effective, defensible…).",
        "Write the criterion driving your top choice.",
        "Compare with a partner or group; produce a consensus ranking, noting any unresolved disagreement."
      ],
      "debrief": [
        "Display the range of rankings; interview holders of divergent orderings about their criteria.",
        "Make the implicit point explicit: the criteria matter more than the ranking."
      ],
      "product": "An individual and consensus ranking with stated criteria"
    },
    "id": "ranking-task",
    "name": "Ranking Task with Justification",
    "family": "Analysis and Evaluation",
    "shortDescription": "Students rank items — causes, solutions, sources, priorities — and defend the criteria behind their ordering.",
    "purposes": [
      "analyze",
      "engagement",
      "synthesize"
    ],
    "intellectualActions": [
      "evaluate",
      "compare",
      "decide"
    ],
    "learningStages": [
      "after-reading",
      "during-lecture",
      "end-of-unit"
    ],
    "evidenceProduced": "Rankings plus criteria revealing evaluative reasoning",
    "bestFor": "Sparking discussion — disagreement about rankings is the engine"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "graphic-organizer"
    ],
    "facultyPriorities": [
      "evidence",
      "authentic",
      "ai-resistant",
      "challenge-advanced"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "primary-source",
      "chapter"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "Accept an indented-outline version as an equivalent to the spatial diagram.",
    "aiConsiderations": "",
    "adaptations": {
      "shortVersion": "Map only the main claim and its two strongest premises.",
      "asynchronousOnline": "Build on a collaborative whiteboard or submit as an outline."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Identify the main claim of {materialTitle} and put it at the top of your map.",
        "Add the premises supporting it; connect each with an arrow labeled “because.”",
        "Add at least one objection and any rebuttal the author offers.",
        "Mark the weakest link in the argument."
      ],
      "debrief": [
        "Compare maps: did students agree on the main claim? On the weakest link?",
        "Discuss how mapping changes their assessment of the argument’s strength."
      ],
      "product": "An argument map with the weakest link identified"
    },
    "id": "argument-map",
    "name": "Argument Map",
    "family": "Analysis and Evaluation",
    "shortDescription": "Students diagram an argument — claim, premises, evidence, objections, rebuttals — to expose its logical structure.",
    "purposes": [
      "analyze",
      "understand"
    ],
    "intellectualActions": [
      "analyze-argument",
      "interpret-evidence",
      "connect"
    ],
    "learningStages": [
      "after-reading",
      "before-assignment",
      "guided-practice"
    ],
    "evidenceProduced": "Maps showing whether students can separate claims, support, and objections",
    "bestFor": "Courses where evaluating arguments is a core outcome"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30",
      "t50"
    ],
    "groupingOptions": [
      "individual",
      "pairs",
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "graphic-organizer",
      "extended-written"
    ],
    "facultyPriorities": [
      "authentic",
      "evidence",
      "challenge-advanced"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "primary-source",
      "dataset",
      "case"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "shortVersion": "Compare on exactly two dimensions the instructor names.",
      "largeClass": "Jigsaw the sources: each group masters one, then mixed groups compare."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Read/examine both sources on {topic}.",
        "Complete the comparison grid: What does each claim? What evidence does each use? What does each ignore?",
        "Write 3–4 sentences explaining WHY the sources differ (method, era, purpose, audience, values)."
      ],
      "debrief": [
        "Collect explanations for the difference — push past “they disagree” to why.",
        "Ask which source the discipline would weight more heavily and what that reveals about disciplinary standards."
      ],
      "product": "A comparison grid plus an explanation of the sources’ divergence"
    },
    "id": "source-comparison",
    "name": "Source Comparison",
    "family": "Analysis and Evaluation",
    "shortDescription": "Students compare two or more sources — perspectives, methods, genres, or eras — on the same question and account for the differences.",
    "purposes": [
      "analyze",
      "synthesize"
    ],
    "intellectualActions": [
      "compare",
      "interpret-evidence",
      "evaluate"
    ],
    "learningStages": [
      "after-reading",
      "before-assignment"
    ],
    "evidenceProduced": "Comparative analyses revealing whether students see beyond surface agreement/disagreement",
    "bestFor": "Perspective-taking in history, literature, sciences, and policy courses"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs",
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "ai-productive",
      "authentic",
      "evidence",
      "participation"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "problem-set",
      "case",
      "dataset"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "Generate the AI output yourself in advance so all students critique the same artifact and no student needs an AI account.",
    "adaptations": {
      "asyncOnline": "Post the AI output; students annotate or submit structured critiques.",
      "extendedVersion": "After critiquing, students write the improved version the AI should have produced."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Read the AI-generated response about {topic}.",
        "Mark: factual errors, unsupported claims, missing course concepts, and generic filler.",
        "Grade it against our rubric and justify the grade in 3–4 sentences.",
        "Write the two most important improvements it needs."
      ],
      "debrief": [
        "Compare grades assigned and the evidence behind them.",
        "Draw out the pattern: what does AI systematically miss in this discipline?"
      ],
      "product": "An annotated critique with a justified grade"
    },
    "id": "ai-output-critique",
    "name": "AI Output Critique",
    "family": "Analysis and Evaluation",
    "shortDescription": "Students evaluate an AI-generated response — essay, solution, summary, or analysis — against disciplinary standards, identifying errors, omissions, and generic reasoning.",
    "purposes": [
      "analyze",
      "skill",
      "engagement"
    ],
    "intellectualActions": [
      "evaluate",
      "analyze-argument",
      "interpret-evidence"
    ],
    "learningStages": [
      "guided-practice",
      "after-reading",
      "before-assignment"
    ],
    "evidenceProduced": "Critiques showing command of disciplinary standards",
    "bestFor": "Building critical AI literacy while reinforcing course standards"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "ai-productive",
      "authentic",
      "evidence"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "problem-set",
      "case"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "Frame explicitly: the point is to identify what expert judgment adds, not to disparage or promote AI.",
    "adaptations": {
      "shortVersion": "Compare on two instructor-chosen dimensions only.",
      "asyncOnline": "Post both versions side by side; students submit the comparison table."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Complete the short task on {topic} yourself first.",
        "Then examine the AI version of the same task.",
        "Complete the comparison: Where is the AI stronger? Where are you stronger? What does it miss that you caught?",
        "Write one sentence: what does this comparison tell you about expertise in this field?"
      ],
      "debrief": [
        "Collect the “what expertise adds” sentences and synthesize them into a class statement.",
        "Discuss when using AI on such tasks would and wouldn’t be appropriate professionally."
      ],
      "product": "A completed human/AI comparison with a takeaway about disciplinary expertise"
    },
    "id": "human-vs-ai-comparison",
    "name": "Human-versus-AI Comparison",
    "family": "Analysis and Evaluation",
    "shortDescription": "Students compare their own (or an expert’s) work with an AI-generated version of the same task and analyze the differences.",
    "purposes": [
      "analyze",
      "reflect",
      "skill"
    ],
    "intellectualActions": [
      "compare",
      "evaluate",
      "reflect"
    ],
    "learningStages": [
      "after-feedback",
      "during-assignment",
      "guided-practice"
    ],
    "evidenceProduced": "Comparative analyses articulating what human disciplinary work adds",
    "bestFor": "Making the value of disciplinary expertise visible and discussable"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5",
      "t15"
    ],
    "groupingOptions": [
      "pairs",
      "whole-class"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "none",
    "responseFormats": [
      "verbal",
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "low-grading",
      "participation",
      "inclusive",
      "collaborative"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "lecture-notes",
      "slides",
      "image",
      "problem-set"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "The individual “think/write” phase gives processing time that benefits multilingual students and students with processing differences.",
    "aiConsiderations": "",
    "adaptations": {
      "largeClass": "Works at any size — sample a few pairs rather than hearing all.",
      "synchronousOnline": "Think in chat privately, pair in breakout rooms of 2, share on return.",
      "asynchronousOnline": "Think-Post-Reply: initial post by Wednesday, substantive reply by Friday.",
      "extendedVersion": "Think-Pair-Square-Share: pairs join into fours before whole-class sharing."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/think-pair-share/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "THINK: On your own, write a brief answer to: “{prompt}” (1–2 minutes).",
        "PAIR: Compare answers with a partner. Where do you agree and disagree? Improve your joint answer.",
        "SHARE: Be ready to report your pair’s best answer — and what changed your mind, if anything did."
      ],
      "debrief": [
        "Sample 2–3 pairs, deliberately including different positions.",
        "Name what improved between individual and pair answers — that improvement is the learning."
      ],
      "product": "An individual written answer refined through pair discussion"
    },
    "id": "think-pair-share",
    "name": "Think-Pair-Share",
    "family": "Discussion and Collaboration",
    "shortDescription": "Students think or write individually about a question, discuss with a partner, then share with the larger group.",
    "purposes": [
      "engagement",
      "understand",
      "collaborate",
      "check-understanding"
    ],
    "intellectualActions": [
      "explain",
      "compare",
      "apply-concept"
    ],
    "learningStages": [
      "during-lecture",
      "after-reading",
      "guided-practice"
    ],
    "evidenceProduced": "Sampled pair conclusions plus optional written commitments",
    "bestFor": "The most versatile low-cost engagement structure in higher education"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5",
      "t15"
    ],
    "groupingOptions": [
      "pairs",
      "whole-class"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "none",
    "responseFormats": [
      "verbal"
    ],
    "facultyPriorities": [
      "participation",
      "evidence",
      "inclusive",
      "support-struggling"
    ],
    "sourceTypeCompatibility": [
      "lecture-notes",
      "slides",
      "problem-set"
    ],
    "techNeeds": [
      "polling"
    ],
    "limitations": "Needs well-designed concept questions with plausible distractors; weak questions produce empty discussion.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "lowPrep": "Use raised fingers or colored cards instead of a polling tool.",
      "asynchronousOnline": "Two-round quiz: answer, read peer explanations for each option, answer again."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Answer the concept question about {concept} individually — commit before discussing.",
        "Find someone who answered differently. Each of you: explain your reasoning and try to persuade.",
        "Re-vote. If you changed, note what argument moved you."
      ],
      "debrief": [
        "Show both distributions; have a student who changed correctly explain the winning reasoning before you confirm.",
        "Address the strongest wrong answer directly — its plausibility is the teaching point."
      ],
      "product": "Two votes plus articulated reasoning"
    },
    "id": "peer-instruction",
    "name": "Peer Instruction",
    "family": "Discussion and Collaboration",
    "shortDescription": "Students answer a conceptual question individually (often by poll), persuade a neighbor who answered differently, then re-vote.",
    "purposes": [
      "understand",
      "check-understanding",
      "engagement"
    ],
    "intellectualActions": [
      "explain",
      "apply-concept",
      "evaluate"
    ],
    "learningStages": [
      "during-lecture"
    ],
    "evidenceProduced": "Before/after vote distributions showing conceptual movement",
    "bestFor": "Conceptual sticking points in large lecture courses; extensively validated in physics education research"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30",
      "t50"
    ],
    "groupingOptions": [
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "verbal",
      "graphic-organizer"
    ],
    "facultyPriorities": [
      "collaborative",
      "participation",
      "accountability",
      "inclusive"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "primary-source",
      "case"
    ],
    "techNeeds": [],
    "limitations": "Logistics take practice; a weak expert leaves a hole in every home group — add a synthesis check to catch gaps.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "largeClass": "Run parallel jigsaws by section of the room.",
      "synchronousOnline": "Two rounds of breakout rooms: expert rooms, then home rooms.",
      "asynchronousOnline": "Expert groups build a shared summary doc in week one; home groups integrate in week two.",
      "shortVersion": "Mini-jigsaw: two segments, pairs swap and teach."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/jigsaw/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "In your EXPERT group, master your assigned segment of {topic}: agree on the 3 points every classmate must know.",
        "Move to your HOME group. Teach your segment in ~3 minutes; answer questions.",
        "As a home group, complete the synthesis task that requires all segments.",
        "Individually, answer one question about a segment you did NOT teach."
      ],
      "debrief": [
        "Review the individual questions — they show whether teaching actually transferred.",
        "Ask which segment was hardest to teach and why."
      ],
      "product": "A home-group synthesis plus an individual cross-segment answer"
    },
    "id": "jigsaw",
    "name": "Jigsaw",
    "family": "Discussion and Collaboration",
    "shortDescription": "Each student masters one piece of the material in an expert group, then teaches it to a home group containing one expert per piece.",
    "purposes": [
      "understand",
      "collaborate",
      "synthesize"
    ],
    "intellectualActions": [
      "explain",
      "summarize",
      "connect"
    ],
    "learningStages": [
      "after-reading",
      "guided-practice",
      "end-of-unit"
    ],
    "evidenceProduced": "Home-group synthesis products showing whether teaching transferred",
    "bestFor": "Covering multiple related readings or facets of a topic in one session"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "small-groups",
      "whole-class"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "verbal",
      "graphic-organizer"
    ],
    "facultyPriorities": [
      "participation",
      "collaborative",
      "inclusive"
    ],
    "sourceTypeCompatibility": [
      "image",
      "dataset",
      "problem-set",
      "case"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "Ensure physical circulation paths are wide; offer a seated review option with photos or the digital board.",
    "aiConsiderations": "",
    "adaptations": {
      "asynchronousOnline": "Post work on a collaborative whiteboard or padlet-style board; students comment over a set window.",
      "largeClass": "Split into two galleries running in parallel.",
      "shortVersion": "Groups visit only two stations with a focused comment task at each."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "With your group, create your response to the {topic} task and post it at your station.",
        "Circulate: at each station, read carefully, then add one specific strength and one question on a sticky note.",
        "Return to your own station; read your feedback and choose the one comment you’d act on."
      ],
      "debrief": [
        "Ask groups what pattern they saw across stations.",
        "Have each group report the comment they’d act on and why."
      ],
      "product": "Posted group work plus written peer comments"
    },
    "id": "gallery-walk",
    "name": "Gallery Walk",
    "family": "Discussion and Collaboration",
    "shortDescription": "Student groups post work or responses around the room (or a shared board); everyone circulates, reviews, and adds comments before a debrief.",
    "purposes": [
      "collaborate",
      "engagement",
      "analyze"
    ],
    "intellectualActions": [
      "evaluate",
      "compare",
      "peer-feedback"
    ],
    "learningStages": [
      "guided-practice",
      "end-of-unit",
      "during-assignment"
    ],
    "evidenceProduced": "Posted work plus peer comments showing evaluative engagement",
    "bestFor": "Getting every group’s work seen without serial presentations"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30",
      "t50"
    ],
    "groupingOptions": [
      "whole-class"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "verbal",
      "brief-written"
    ],
    "facultyPriorities": [
      "participation",
      "inclusive",
      "authentic"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "case",
      "primary-source"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "The observer role provides structured participation for students who find open discussion difficult; rotate so no one is stuck in one role.",
    "aiConsiderations": "",
    "adaptations": {
      "synchronousOnline": "Inner circle on camera/mic; outer circle observes and comments in chat; swap.",
      "shortVersion": "One 10-minute round with a single rotation."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/fishbowl/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Inner circle: discuss the question about {topic}, building on and citing each other’s points.",
        "Outer circle: track your assigned element (evidence use, who builds on whom, unexamined assumptions).",
        "On rotation, new inner circle must open by addressing something the first circle left unresolved.",
        "Everyone: write one insight about the topic and one about how the discussion worked."
      ],
      "debrief": [
        "Hear observer reports before content synthesis — the process feedback is the distinctive value.",
        "Ask what the second circle did differently after watching the first."
      ],
      "product": "Discussion participation plus a two-part written insight"
    },
    "id": "fishbowl",
    "name": "Fishbowl Discussion",
    "family": "Discussion and Collaboration",
    "shortDescription": "An inner circle discusses while an outer circle observes with a listening task; roles then rotate.",
    "purposes": [
      "analyze",
      "collaborate",
      "engagement"
    ],
    "intellectualActions": [
      "analyze-argument",
      "evaluate",
      "reflect"
    ],
    "learningStages": [
      "after-reading",
      "end-of-unit"
    ],
    "evidenceProduced": "Discussion quality plus observer analyses of the discussion itself",
    "bestFor": "Teaching discussion skills explicitly while discussing content"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t50",
      "t50plus"
    ],
    "groupingOptions": [
      "small-groups"
    ],
    "preparationLevel": "significant",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "verbal",
      "brief-written"
    ],
    "facultyPriorities": [
      "authentic",
      "collaborative",
      "evidence",
      "challenge-advanced",
      "ai-resistant"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "primary-source",
      "case"
    ],
    "techNeeds": [],
    "limitations": "Choose controversies with real evidence on both sides; set civility norms before starting.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "synchronousOnline": "Run rounds in four-person breakout rooms with timed phases posted in chat.",
      "asynchronousOnline": "Structured forum: position posts, assigned rebuttals from the opposite side, then a consensus reply.",
      "shortVersion": "Single switch: argue your side (4 min), switch (4 min), free discussion (4 min)."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "With your partner, build the best case for your ASSIGNED position on {topic} using the sources provided.",
        "Present to the opposing pair; listen to theirs and take notes on their strongest evidence.",
        "SWITCH SIDES: now argue the opposite position, adding at least one point the other pair missed.",
        "Drop all roles. As a four, write a consensus statement (or a precise statement of where and why you still disagree)."
      ],
      "debrief": [
        "Ask what changed when students argued the side they disagreed with.",
        "Compare consensus statements; highlight those that integrated rather than split the difference."
      ],
      "product": "A four-person consensus (or principled-disagreement) statement"
    },
    "id": "structured-academic-controversy",
    "name": "Structured Academic Controversy",
    "family": "Discussion and Collaboration",
    "shortDescription": "Pairs prepare and present assigned sides of a controversy, switch sides and argue the reverse, then drop roles to seek consensus.",
    "purposes": [
      "analyze",
      "collaborate",
      "synthesize"
    ],
    "intellectualActions": [
      "analyze-argument",
      "evaluate",
      "interpret-evidence",
      "decide"
    ],
    "learningStages": [
      "after-reading",
      "end-of-unit"
    ],
    "evidenceProduced": "Consensus statements showing engagement with both sides’ strongest evidence",
    "bestFor": "Genuinely contested questions where students tend to arrive with fixed views"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15"
    ],
    "groupingOptions": [
      "whole-class",
      "small-groups"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "none",
    "responseFormats": [
      "verbal"
    ],
    "facultyPriorities": [
      "participation",
      "low-prep",
      "inclusive"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "case"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "Allow position cards or a poll as an alternative to physical movement.",
    "aiConsiderations": "",
    "adaptations": {
      "synchronousOnline": "Use a four-option poll, then breakout rooms by answer.",
      "asynchronousOnline": "Poll plus position-labeled discussion threads."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Read the prompt about {topic}: Strongly Agree / Agree / Disagree / Strongly Disagree.",
        "Move to your corner. With your corner-mates, agree on your two best reasons.",
        "Listen to each corner’s case. You may switch corners if persuaded — be ready to say what moved you."
      ],
      "debrief": [
        "Interview the students who switched — their reasons model openness to evidence.",
        "Preview how the coming material bears on the strongest arguments heard."
      ],
      "product": "A public position with reasons, possibly revised"
    },
    "id": "four-corners",
    "name": "Four Corners",
    "family": "Discussion and Collaboration",
    "shortDescription": "Students physically move to a corner representing their position on a prompt, discuss with like-minded peers, then hear from each corner.",
    "purposes": [
      "engagement",
      "prior-knowledge",
      "analyze"
    ],
    "intellectualActions": [
      "decide",
      "explain",
      "evaluate"
    ],
    "learningStages": [
      "before-instruction",
      "during-lecture",
      "end-of-unit"
    ],
    "evidenceProduced": "Visible distribution of positions plus articulated reasons",
    "bestFor": "Energizing a class and surfacing the spread of views before instruction"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t50",
      "t50plus",
      "multi"
    ],
    "groupingOptions": [
      "small-groups",
      "whole-class"
    ],
    "preparationLevel": "significant",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "verbal",
      "brief-written"
    ],
    "facultyPriorities": [
      "authentic",
      "evidence",
      "collaborative",
      "challenge-advanced",
      "ai-resistant"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "primary-source",
      "dataset",
      "case"
    ],
    "techNeeds": [],
    "limitations": "Assign positions (don’t let students pick) and judge evidence quality, not rhetoric.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asynchronousOnline": "Structured forum debate with posted rounds and citation requirements.",
      "shortVersion": "Two-round micro-debate: opening claims (2 min/side) and one rebuttal each."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "With your team, prepare your assigned position on {topic}: every claim needs a cited source.",
        "Opening statements; then rebuttals that must address the other side’s cited evidence directly.",
        "Audience: score each side on evidence quality using the rubric — not on delivery.",
        "All students: write which single piece of evidence was most decisive and why."
      ],
      "debrief": [
        "Reveal audience scoring; discuss what made the decisive evidence strong.",
        "Ask debaters what they now think, freed from their assigned position."
      ],
      "product": "Cited team arguments plus individual evidence assessments"
    },
    "id": "evidence-based-debate",
    "name": "Evidence-Based Debate",
    "family": "Discussion and Collaboration",
    "shortDescription": "Teams argue assigned positions under rules that require every claim to be tied to cited evidence.",
    "purposes": [
      "analyze",
      "collaborate",
      "skill"
    ],
    "intellectualActions": [
      "analyze-argument",
      "interpret-evidence",
      "evaluate"
    ],
    "learningStages": [
      "end-of-unit",
      "after-reading"
    ],
    "evidenceProduced": "Cited arguments and rebuttals; audience adjudication with reasons",
    "bestFor": "High-stakes engagement with contested empirical or policy questions"
  },
  {
    "origin": "new",
    "modalities": [
      "async-online",
      "hybrid",
      "in-person",
      "sync-online"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30",
      "multi"
    ],
    "groupingOptions": [
      "whole-class",
      "small-groups"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "collab-doc"
    ],
    "facultyPriorities": [
      "online-easy",
      "participation",
      "inclusive",
      "evidence"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "primary-source"
    ],
    "techNeeds": [
      "shared-doc"
    ],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "Anchored, conversational annotations are hard to outsource; require replies to specific classmates.",
    "adaptations": {
      "inPerson": "Print the text poster-sized on tables; groups annotate with markers and rotate.",
      "lowGrading": "Grade by simple completion count (e.g., 3 annotations + 2 replies).",
      "shortVersion": "Each student annotates one assigned paragraph and replies once."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "In the shared copy of {materialTitle}, add at least 3 annotations: a question, a connection to course concepts, and a challenge or extension.",
        "Reply substantively to at least 2 classmates’ annotations.",
        "Before class, revisit the most-discussed passage and be ready to say why it drew attention."
      ],
      "debrief": [
        "Open class at the passage with the densest annotation — the class has already told you where the energy is.",
        "Feature one strong student question as the day’s discussion anchor."
      ],
      "product": "Threaded annotations on the shared text"
    },
    "id": "collaborative-annotation",
    "name": "Collaborative Annotation",
    "family": "Discussion and Collaboration",
    "shortDescription": "Students annotate a shared text collectively — highlighting, questioning, and responding to each other in the margins.",
    "purposes": [
      "understand",
      "analyze",
      "collaborate",
      "engagement"
    ],
    "intellectualActions": [
      "interpret-evidence",
      "connect",
      "peer-feedback"
    ],
    "learningStages": [
      "after-reading",
      "before-instruction",
      "throughout"
    ],
    "evidenceProduced": "Threaded margin conversations showing where and how students engage the text",
    "bestFor": "Turning solitary reading into social reading, especially online"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "verbal",
      "brief-written"
    ],
    "facultyPriorities": [
      "collaborative",
      "accountability",
      "participation"
    ],
    "sourceTypeCompatibility": [
      "video",
      "lecture-notes",
      "reading"
    ],
    "techNeeds": [],
    "limitations": "Roles help maintain focus and accountability.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "synchronousOnline": "Assign roles before the session; teams synthesize in breakout rooms.",
      "asynchronousOnline": "Roles applied to a recorded lecture; team synthesis in a shared document."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/analytic-teams/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Take your team role for the {topic} presentation: Summarizer, Questioner, Example-Giver, or Devil’s Advocate.",
        "During the presentation, gather material for your role.",
        "Afterward, each member reports; the team assembles a one-page combined analysis."
      ],
      "debrief": [
        "Sample one contribution per role across teams.",
        "Ask which role changed how its holder listened."
      ],
      "product": "A combined team analysis with identifiable role contributions"
    },
    "id": "analytic-teams",
    "name": "Analytic Teams",
    "family": "Discussion and Collaboration",
    "shortDescription": "Each team member assumes a different role with specific responsibilities to perform while listening to a lecture or watching a video.",
    "purposes": [
      "analyze",
      "collaborate",
      "understand"
    ],
    "intellectualActions": [
      "analyze-argument",
      "interpret-evidence",
      "summarize"
    ],
    "learningStages": [
      "during-lecture",
      "after-reading"
    ],
    "evidenceProduced": "Role-based analyses assembled into a team synthesis",
    "bestFor": "Collaborative analysis and processing"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t50",
      "t50plus",
      "multi"
    ],
    "groupingOptions": [
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "verbal",
      "brief-written"
    ],
    "facultyPriorities": [
      "collaborative",
      "authentic",
      "product"
    ],
    "sourceTypeCompatibility": [
      "reading"
    ],
    "techNeeds": [],
    "limitations": "Can be implemented in forums or synchronous discussion.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asynchronousOnline": "Author posts the draft plus two questions; assigned discussants respond before an open thread.",
      "shortVersion": "Speed seminar: 8 minutes per paper — 2 author setup, 4 discussion, 2 author response."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/paper-seminar/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Author: circulate your draft on {topic} in advance with two questions you want discussed.",
        "Discussants: read and prepare — one strength with evidence, one issue with a suggestion.",
        "Seminar: the author listens silently for the first half, then responds and asks follow-ups.",
        "Author: close by stating the two changes you will make."
      ],
      "debrief": [
        "Collect the “two changes” statements — they show whether discussion produced direction.",
        "Note discussion moves that helped (citing passages, offering alternatives) for next time."
      ],
      "product": "Discussed drafts plus author revision commitments"
    },
    "id": "paper-seminar",
    "name": "Paper Seminar",
    "family": "Discussion and Collaboration",
    "shortDescription": "Provides a framework for meaningful discussion centered on student work.",
    "purposes": [
      "improve-draft",
      "collaborate",
      "analyze"
    ],
    "intellectualActions": [
      "peer-feedback",
      "analyze-argument",
      "evaluate"
    ],
    "learningStages": [
      "during-assignment",
      "after-feedback"
    ],
    "evidenceProduced": "Structured peer discussion of drafts with actionable takeaways",
    "bestFor": "Peer interaction and dialogue"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written",
      "collab-doc"
    ],
    "facultyPriorities": [
      "participation",
      "inclusive",
      "collaborative",
      "ai-resistant"
    ],
    "sourceTypeCompatibility": [
      "image",
      "reading",
      "primary-source",
      "case",
      "dataset"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Run the produce/improve/prioritize phases as a three-step discussion assignment.",
      "shortVersion": "Produce for 3 minutes, star the best question, share."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "PRODUCE: In your group, generate as many questions as possible about the focus prompt on {topic}. Rules: don’t discuss, judge, or answer; record everything; turn statements into questions.",
        "IMPROVE: Mark each question open- or closed-ended; convert two from one type to the other.",
        "PRIORITIZE: Choose your three most important questions and justify the choice.",
        "PLAN: Note how you could begin answering your #1 question."
      ],
      "debrief": [
        "Collect top questions and map them onto the unit ahead — show students their questions drive the plan.",
        "Ask what changed when closed questions became open ones."
      ],
      "product": "A prioritized set of three group questions with a first-step plan"
    },
    "id": "question-formulation-technique",
    "name": "Question Formulation Technique",
    "family": "Discussion and Collaboration",
    "shortDescription": "Using a structured protocol, groups produce, improve, and prioritize their own questions about a focus prompt.",
    "purposes": [
      "engagement",
      "prior-knowledge",
      "prepare-assignment"
    ],
    "intellectualActions": [
      "create",
      "classify",
      "evaluate",
      "plan"
    ],
    "learningStages": [
      "before-instruction",
      "before-assignment"
    ],
    "evidenceProduced": "Prioritized question lists revealing curiosity and framing ability",
    "bestFor": "Launching units and research projects from student-owned questions"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t50"
    ],
    "groupingOptions": [
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "brief-written",
      "verbal"
    ],
    "facultyPriorities": [
      "inclusive",
      "participation"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Require concrete recommendations.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {},
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#quality-circles"
      }
    ],
    "templateData": {
      "studentSteps": [
        "In your circle, review the focus aspect of the course using the structured roles (facilitator, recorder, reporter).",
        "Identify what is working, what is not, and why.",
        "Produce 2–3 specific, feasible recommendations."
      ],
      "debrief": [
        "Respond publicly to each recommendation: adopt, adapt, or explain why not."
      ],
      "product": "A short set of concrete course recommendations"
    },
    "id": "quality-circles",
    "name": "Classroom Assessment Quality Circles",
    "family": "Discussion and Collaboration",
    "shortDescription": "Small groups analyze course processes and recommend improvements using structured roles.",
    "purposes": [
      "engagement",
      "reflect",
      "collaborate"
    ],
    "intellectualActions": [
      "evaluate",
      "recommend",
      "plan"
    ],
    "learningStages": [
      "throughout",
      "end-of-unit"
    ],
    "evidenceProduced": "Concrete, prioritized course-improvement recommendations",
    "bestFor": "Actionable course improvement"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5",
      "t15"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "low-grading",
      "evidence"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "lecture-notes",
      "video"
    ],
    "techNeeds": [],
    "limitations": "Forces prioritization and clarity.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "largeClass": "Pairs merge their sentences into one improved version; collect a sample.",
      "asyncOnline": "Submit via LMS; feature the best three in your module announcement."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#one-sentence-summaries"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Answer in notes form: Who? Does what? To whom? When? Where? How? Why? — for {topic}.",
        "Combine your answers into ONE grammatical sentence.",
        "Underline the part you found hardest to compress."
      ],
      "debrief": [
        "Show 2–3 sentences and compare what each kept and cut — the cuts reveal judgment.",
        "Offer your own one-sentence version last, not first."
      ],
      "product": "A single WDWWWWH summary sentence"
    },
    "id": "one-sentence-summary",
    "name": "One-Sentence Summary",
    "family": "Creation and Synthesis",
    "shortDescription": "Students condense material into a single sentence using the “Who does what to whom, when, where, how, and why?” frame.",
    "purposes": [
      "synthesize",
      "check-understanding",
      "understand"
    ],
    "intellectualActions": [
      "summarize",
      "connect",
      "create"
    ],
    "learningStages": [
      "after-reading",
      "during-lecture",
      "end-of-unit"
    ],
    "evidenceProduced": "Single sentences revealing prioritization and integration",
    "bestFor": "Synthesis and precision"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t50plus",
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "significant",
    "reviewBurden": "detailed",
    "responseFormats": [
      "extended-written",
      "submitted"
    ],
    "facultyPriorities": [
      "authentic",
      "product",
      "evidence",
      "challenge-advanced"
    ],
    "sourceTypeCompatibility": [
      "case",
      "dataset",
      "reading",
      "primary-source"
    ],
    "techNeeds": [],
    "limitations": "Works best as an extended assignment.",
    "accessibilityNotes": "",
    "aiConsiderations": "Specify a local decision-maker and current course data as the audience/evidence base; require an in-class outline first.",
    "adaptations": {
      "shortVersion": "A one-paragraph “bottom-line-up-front” brief with two supporting bullets.",
      "lowGrading": "Grade with a five-item professional-standards checklist."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/briefing-paper/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "You are briefing {audience} on {topic}. State your recommendation in the first two lines.",
        "Support it with 2–3 evidence-based points from the course materials, cited specifically.",
        "Add a “risks and alternatives” section: the best competing option and why you rejected it.",
        "Keep the whole brief under one page."
      ],
      "debrief": [
        "Compare two briefs with opposite recommendations built on the same evidence.",
        "Discuss what the genre demands: brevity, decisiveness, and honest treatment of alternatives."
      ],
      "product": "A one-page decision brief"
    },
    "id": "briefing-paper",
    "name": "Briefing Paper",
    "family": "Creation and Synthesis",
    "shortDescription": "Students produce a concise, evidence-based brief recommending a course of action.",
    "purposes": [
      "apply",
      "synthesize",
      "prepare-assignment"
    ],
    "intellectualActions": [
      "recommend",
      "interpret-evidence",
      "create",
      "decide"
    ],
    "learningStages": [
      "end-of-unit",
      "during-assignment"
    ],
    "evidenceProduced": "A professional-genre brief showing synthesis and applied judgment",
    "bestFor": "Applied synthesis and decision-making"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "extended-written"
    ],
    "facultyPriorities": [
      "evidence",
      "authentic",
      "challenge-advanced"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "primary-source",
      "chapter"
    ],
    "techNeeds": [],
    "limitations": "Assess accuracy before creativity.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "shortVersion": "Six exchanges maximum, one point of genuine disagreement.",
      "asyncOnline": "Pairs co-write in a shared doc, each “owning” one voice."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#invented-dialogues"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Write a dialogue between {concept} advocates (or the two assigned thinkers) about {topic}.",
        "Each voice must make its strongest case — no strawmen — and respond directly to the other.",
        "End with each voice conceding one point."
      ],
      "debrief": [
        "Read one dialogue aloud with two volunteers; ask the class to fact-check both voices.",
        "Discuss which concessions were the most intellectually honest."
      ],
      "product": "A written dialogue with genuine engagement between positions"
    },
    "id": "invented-dialogue",
    "name": "Invented Dialogue",
    "family": "Creation and Synthesis",
    "shortDescription": "Students write a dialogue between contrasting perspectives to explore and integrate ideas.",
    "purposes": [
      "synthesize",
      "analyze",
      "engagement"
    ],
    "intellectualActions": [
      "create",
      "compare",
      "connect"
    ],
    "learningStages": [
      "after-reading",
      "end-of-unit"
    ],
    "evidenceProduced": "Dialogues showing accurate command of multiple positions",
    "bestFor": "Synthesis across viewpoints"
  },
  {
    "origin": "original",
    "modalities": [
      "async-online",
      "hybrid",
      "in-person",
      "sync-online"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "brief",
    "responseFormats": [
      "multimedia",
      "submitted"
    ],
    "facultyPriorities": [
      "product",
      "authentic",
      "challenge-advanced"
    ],
    "sourceTypeCompatibility": [
      "image",
      "video",
      "primary-source"
    ],
    "techNeeds": [
      "recording",
      "devices"
    ],
    "limitations": "Suitable for asynchronous submission and development of communication skills.",
    "accessibilityNotes": "Require captions/transcripts; accept an illustrated essay as an equivalent format.",
    "aiConsiderations": "",
    "adaptations": {
      "shortVersion": "A 90-second narrated slideshow of 5 images.",
      "lowGrading": "Grade story structure and concept accuracy with a short rubric; ignore production values."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/digital-story/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Draft a 200-word script connecting {topic} to a concrete story (personal, historical, or case-based).",
        "Storyboard 5–8 visuals that carry the narrative.",
        "Record and assemble your 2–3 minute story; include captions.",
        "Submit with a paragraph naming the course concepts your story embodies."
      ],
      "debrief": [
        "Screen two or three stories; ask the class to identify the embodied concepts before the author confirms."
      ],
      "product": "A 2–3 minute captioned digital story plus concept statement"
    },
    "id": "digital-story",
    "name": "Digital Story",
    "family": "Creation and Synthesis",
    "shortDescription": "Students use computer-based tools (video, audio, graphics, web publishing) to tell personal or academic stories relevant to course themes.",
    "purposes": [
      "synthesize",
      "apply",
      "reflect"
    ],
    "intellectualActions": [
      "create",
      "connect",
      "reflect"
    ],
    "learningStages": [
      "end-of-unit",
      "during-assignment"
    ],
    "evidenceProduced": "Multimedia narratives integrating course concepts",
    "bestFor": "Multimedia synthesis assignments"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "presentation",
      "multimedia"
    ],
    "facultyPriorities": [
      "authentic",
      "participation",
      "product"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "dataset",
      "case"
    ],
    "techNeeds": [],
    "limitations": "Effective with short video or audio submissions.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asynchronousOnline": "Submit as a recorded 3-minute video or audio message.",
      "largeClass": "Deliver in trios; each trio nominates one message for the whole class."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/three-minute-message/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Prepare a three-minute spoken message making one clear argument about {topic}.",
        "Structure: hook, claim, two supports with examples, implication. One visual allowed.",
        "Deliver within time; listeners note the claim and strongest support."
      ],
      "debrief": [
        "Ask listeners to replay each message’s claim — did it land as intended?",
        "Discuss what the three-minute limit forced presenters to cut, and whether the cut was right."
      ],
      "product": "A delivered (or recorded) three-minute argument"
    },
    "id": "three-minute-message",
    "name": "Three-Minute Message",
    "family": "Creation and Synthesis",
    "shortDescription": "Modeled on the Three-Minute Thesis format; students have three minutes to present a compelling argument with supporting details and examples.",
    "purposes": [
      "synthesize",
      "skill",
      "engagement"
    ],
    "intellectualActions": [
      "summarize",
      "explain",
      "create"
    ],
    "learningStages": [
      "end-of-unit",
      "before-assignment"
    ],
    "evidenceProduced": "Compressed oral arguments showing prioritization and command",
    "bestFor": "Short explanations or presentations"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t50",
      "t50plus",
      "multi"
    ],
    "groupingOptions": [
      "small-groups",
      "pairs"
    ],
    "preparationLevel": "significant",
    "reviewBurden": "brief",
    "responseFormats": [
      "presentation",
      "submitted",
      "multimedia"
    ],
    "facultyPriorities": [
      "authentic",
      "product",
      "collaborative",
      "challenge-advanced",
      "ai-resistant"
    ],
    "sourceTypeCompatibility": [
      "case",
      "dataset",
      "problem-set"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "shortVersion": "A 20-minute paper-prototype sprint with a 60-second pitch.",
      "asynchronousOnline": "Week-long challenge with midpoint peer feedback on shared design docs.",
      "lowGrading": "Grade the design justification, not the polish of the artifact."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "With your team, read the design brief for {topic}: the user/need, the constraints, and the deliverable.",
        "Generate at least three candidate approaches before choosing one.",
        "Build your prototype/design and prepare a justification: which course concepts drove which decisions?",
        "Pitch it; log one piece of feedback you would act on next."
      ],
      "debrief": [
        "Compare how different teams handled the same constraint.",
        "Ask teams which course concept most shaped their design — and which they ignored at their peril."
      ],
      "product": "A prototype or design document with concept-based justification"
    },
    "id": "design-challenge",
    "name": "Design Challenge",
    "family": "Creation and Synthesis",
    "shortDescription": "Teams design a solution, artifact, or prototype under constraints, then justify design decisions with course concepts.",
    "purposes": [
      "apply",
      "synthesize",
      "collaborate",
      "skill"
    ],
    "intellectualActions": [
      "create",
      "solve",
      "evaluate",
      "decide"
    ],
    "learningStages": [
      "end-of-unit",
      "during-assignment",
      "guided-practice"
    ],
    "evidenceProduced": "Designs plus justifications linking decisions to concepts and constraints",
    "bestFor": "Culminating application where creation demonstrates understanding"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t50",
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "brief",
    "responseFormats": [
      "extended-written",
      "submitted"
    ],
    "facultyPriorities": [
      "product",
      "evidence",
      "support-struggling"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Gives early feedback to improve final work.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "shortVersion": "A five-line prospectus: question, why it matters, sources, method, worry.",
      "lowGrading": "Respond with one green light, one yellow flag, one suggestion — three lines per student."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#paper-project-prospectus"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Draft your prospectus for the {topic} assignment: working title, central question, why it matters, planned sources/methods, timeline.",
        "Name the biggest risk to finishing well and your plan for it.",
        "Exchange with a partner for a feasibility check before submitting."
      ],
      "debrief": [
        "Share anonymized examples of well-scoped vs. over-scoped questions.",
        "Return prospectuses fast — speed matters more than depth here."
      ],
      "product": "A structured project prospectus with a risk assessment"
    },
    "id": "project-prospectus",
    "name": "Paper or Project Prospectus",
    "family": "Creation and Synthesis",
    "shortDescription": "Students submit a structured proposal before completing a major assignment.",
    "purposes": [
      "prepare-assignment",
      "plan",
      "improve-draft"
    ],
    "intellectualActions": [
      "plan",
      "create",
      "evaluate"
    ],
    "learningStages": [
      "before-assignment"
    ],
    "evidenceProduced": "Proposals revealing feasibility problems while they are still fixable",
    "bestFor": "Planning and feasibility checks"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small"
    ],
    "timeOptions": [
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "detailed",
    "responseFormats": [
      "submitted",
      "extended-written"
    ],
    "facultyPriorities": [
      "product",
      "evidence"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Highlights growth and evidence of learning.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "lowGrading": "Grade only the annotations against three criteria; the artifacts are already graded work.",
      "shortVersion": "Two artifacts, one paragraph each: why chosen, what it shows, what changed."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#annotated-portfolios"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Select 3 pieces of your work from this course that best show your growth in {topic}.",
        "For each, write an annotation: why you chose it, what it demonstrates, and what you would do differently now.",
        "Write a closing synthesis: the through-line connecting the three pieces."
      ],
      "debrief": [
        "Feature (with permission) annotations that honestly analyze early weaknesses — model that growth is the point."
      ],
      "product": "A three-artifact portfolio with reflective annotations and synthesis"
    },
    "id": "annotated-portfolio",
    "name": "Annotated Portfolio",
    "family": "Creation and Synthesis",
    "shortDescription": "Students compile selected work samples with reflective annotations.",
    "purposes": [
      "reflect",
      "synthesize",
      "improve-draft"
    ],
    "intellectualActions": [
      "reflect",
      "connect",
      "evaluate"
    ],
    "learningStages": [
      "end-of-unit",
      "throughout"
    ],
    "evidenceProduced": "Curated work with annotations showing growth and self-assessment",
    "bestFor": "Integration over time"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30",
      "t50",
      "multi"
    ],
    "groupingOptions": [
      "pairs",
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written",
      "collab-doc"
    ],
    "facultyPriorities": [
      "low-grading",
      "collaborative",
      "authentic",
      "product",
      "accountability"
    ],
    "sourceTypeCompatibility": [
      "reading"
    ],
    "techNeeds": [],
    "limitations": "Quality depends on training reviewers — calibrate on a sample first.",
    "accessibilityNotes": "",
    "aiConsiderations": "Reviewing peers’ authentic drafts is inherently AI-resistant; optionally let students compare their feedback with AI feedback afterward.",
    "adaptations": {
      "asynchronousOnline": "Use LMS peer-review workflows with rubric-anchored comment prompts and deadlines.",
      "shortVersion": "One criterion only: review the thesis (or hypothesis, or opening) against two questions.",
      "largeClass": "Automated distribution via LMS; each student reviews two, receives two."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Read your partner’s draft on {topic} once through without marking anything.",
        "Using the criteria sheet, write: the strongest element (with the passage that shows it), the highest-priority improvement (with a concrete suggestion), and one question for the author.",
        "Authors: read your feedback and write a two-line revision plan."
      ],
      "debrief": [
        "Ask what students noticed in others’ work that they now see in their own — that transfer is the goal.",
        "Share examples of feedback that was specific enough to act on."
      ],
      "product": "Structured written feedback plus an author revision plan"
    },
    "id": "peer-review",
    "name": "Peer Review",
    "family": "Practice and Feedback",
    "shortDescription": "Students give structured feedback on classmates’ drafts or work using criteria, improving both the reviewed work and the reviewer’s judgment.",
    "purposes": [
      "improve-draft",
      "collaborate",
      "skill"
    ],
    "intellectualActions": [
      "peer-feedback",
      "evaluate",
      "analyze-argument"
    ],
    "learningStages": [
      "during-assignment",
      "after-feedback"
    ],
    "evidenceProduced": "Written feedback showing command of the criteria; revision plans from authors",
    "bestFor": "Any course with drafted work; reviewers often learn more than reviewees"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual",
      "pairs",
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "whole-class",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "support-struggling",
      "low-prep",
      "evidence",
      "inclusive"
    ],
    "sourceTypeCompatibility": [
      "reading"
    ],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Post exemplars with a guided-analysis form; compile derived criteria in an announcement.",
      "shortVersion": "One exemplar, one question: what makes the opening paragraph work?"
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Examine the example(s) of the {topic} assignment.",
        "List 3–4 specific features that make the strong example effective (point to exact places).",
        "If given a weaker example: identify the two most important differences.",
        "Draft the criteria you think the rubric contains; then compare against the real rubric."
      ],
      "debrief": [
        "Compare student-derived criteria with your rubric — mismatches show what standards need explaining.",
        "Warn against imitating surface features; the goal is the underlying quality."
      ],
      "product": "A student-derived criteria list checked against the rubric"
    },
    "id": "exemplar-analysis",
    "name": "Exemplar Analysis",
    "family": "Practice and Feedback",
    "shortDescription": "Students examine strong (and sometimes weak) examples of a target work before attempting it themselves, deriving the criteria of quality.",
    "purposes": [
      "prepare-assignment",
      "understand",
      "skill"
    ],
    "intellectualActions": [
      "evaluate",
      "compare",
      "patterns"
    ],
    "learningStages": [
      "before-assignment",
      "guided-practice"
    ],
    "evidenceProduced": "Student-derived quality criteria compared against the actual rubric",
    "bestFor": "Making implicit standards explicit before students attempt major work"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t30",
      "t50"
    ],
    "groupingOptions": [
      "individual",
      "small-groups"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "none",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "collaborative",
      "accountability",
      "evidence",
      "support-struggling"
    ],
    "sourceTypeCompatibility": [
      "reading",
      "chapter",
      "problem-set",
      "lecture-notes"
    ],
    "techNeeds": [],
    "limitations": "Weight the individual stage more heavily (e.g., 75/25) to preserve accountability.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "synchronousOnline": "Individual LMS quiz, then team retake in breakout rooms via one shared submission.",
      "shortVersion": "Five questions per stage."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "STAGE 1: Complete the quiz on {topic} individually and submit.",
        "STAGE 2: In your team, answer the same questions — you must reach consensus; persuade with reasons, not votes.",
        "Note any question where the team changed your answer, and why."
      ],
      "debrief": [
        "Show the individual→team score lift and explain why: argumentation is the treatment.",
        "Review any question teams still missed — those need reteaching, not discussion."
      ],
      "product": "Individual and team quiz submissions"
    },
    "id": "two-stage-quiz",
    "name": "Two-Stage Quiz",
    "family": "Practice and Feedback",
    "shortDescription": "Students take a quiz individually, then immediately retake the same (or similar) quiz in teams, arguing to consensus on each answer.",
    "purposes": [
      "check-understanding",
      "collaborate",
      "understand"
    ],
    "intellectualActions": [
      "retrieve",
      "explain",
      "evaluate"
    ],
    "learningStages": [
      "before-exam",
      "end-of-unit",
      "guided-practice"
    ],
    "evidenceProduced": "Individual and team scores; the gap shows what discussion resolves",
    "bestFor": "Turning assessment itself into a learning event; team stage provides immediate feedback"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t50",
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "brief",
    "responseFormats": [
      "extended-written",
      "submitted"
    ],
    "facultyPriorities": [
      "product",
      "evidence",
      "ai-resistant",
      "accountability"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "The memo ties revision to the specific feedback received — hard to outsource meaningfully; also documents any permitted AI assistance.",
    "adaptations": {
      "shortVersion": "Three lines: biggest change, feedback that prompted it, one thing deliberately kept.",
      "lowGrading": "Completion credit for the memo; it also speeds your grading of the revision itself."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Revise your {topic} draft in response to the feedback you received.",
        "Write a memo: the 2–3 most significant changes and the feedback each responds to.",
        "Note one suggestion you chose NOT to take, and defend that choice.",
        "Submit the revision and memo together."
      ],
      "debrief": [
        "Share examples of substantive vs. cosmetic revision.",
        "Praise well-defended refusals — independent judgment about feedback is the advanced skill."
      ],
      "product": "A revised draft plus a revision memo"
    },
    "id": "revision-memo",
    "name": "Revision Memo (Draft-Feedback-Revision Cycle)",
    "family": "Practice and Feedback",
    "shortDescription": "After receiving feedback, students revise and submit a memo documenting what they changed, what they kept, and why.",
    "purposes": [
      "improve-draft",
      "reflect",
      "skill"
    ],
    "intellectualActions": [
      "revise",
      "reflect",
      "evaluate",
      "plan"
    ],
    "learningStages": [
      "after-feedback",
      "during-assignment"
    ],
    "evidenceProduced": "Memos revealing whether students can act on feedback deliberately",
    "bestFor": "Making revision a visible intellectual act instead of silent compliance"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "moderate",
    "reviewBurden": "brief",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "support-struggling",
      "evidence"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Require evidence for ratings.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Self-rate in a form before receiving rubric scores; the LMS shows both side by side."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#dual-viewpoint-skills-portraits"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Rate your own work on {topic} against each rubric criterion, citing evidence for each rating.",
        "Compare with the second viewpoint (peer, rubric score, or instructor rating).",
        "For the largest gap: explain the difference and write one action to close it."
      ],
      "debrief": [
        "Discuss (without names) whether the class over- or under-rates itself, and on which criteria.",
        "Explain why calibration predicts self-directed learning."
      ],
      "product": "A dual-viewpoint comparison with a gap analysis and action step"
    },
    "id": "dual-viewpoint-skills-portraits",
    "name": "Calibration Exercise (Dual-Viewpoint Skills Portrait)",
    "family": "Practice and Feedback",
    "shortDescription": "Students compare self-assessments with another viewpoint (peer, instructor, or rubric) to calibrate their judgment of their own skills.",
    "purposes": [
      "reflect",
      "improve-draft",
      "skill"
    ],
    "intellectualActions": [
      "evaluate",
      "reflect",
      "compare",
      "plan"
    ],
    "learningStages": [
      "after-feedback",
      "throughout",
      "after-exam"
    ],
    "evidenceProduced": "Self-vs-other rating gaps revealing calibration accuracy",
    "bestFor": "Calibration and growth planning"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "support-struggling",
      "inclusive",
      "online-easy"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Good early-term diagnostic.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Deliver as an LMS survey in week one; repeat at midterm to show growth."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#interest-skills-checklists"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Rate your current confidence (1–5) on each listed skill for {topic}.",
        "Rate your interest (1–5) in each course topic.",
        "Name the one skill you most want to strengthen this term."
      ],
      "debrief": [
        "Report the class profile and where you will provide extra support.",
        "Revisit at midterm so students can see their own movement."
      ],
      "product": "A completed interest and skills self-assessment"
    },
    "id": "interest-skills-checklists",
    "name": "Course-Related Interest & Skills Checklist",
    "family": "Practice and Feedback",
    "shortDescription": "Students self-report interest and skill/confidence across course topics or skills.",
    "purposes": [
      "prior-knowledge",
      "reflect"
    ],
    "intellectualActions": [
      "reflect",
      "evaluate",
      "plan"
    ],
    "learningStages": [
      "before-instruction",
      "throughout"
    ],
    "evidenceProduced": "Self-reported interest and confidence profiles for support targeting",
    "bestFor": "Readiness and support targeting"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "support-struggling",
      "evidence",
      "low-grading"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Separate design feedback from emotions; collect wrappers and return them before the next exam.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Attach as a short LMS survey to the grade release.",
      "shortVersion": "Three questions: How did you prepare? What error type dominated? What will you change?"
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#exam-evaluations"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Before looking at your grade in detail: how did you prepare, and how many hours?",
        "Categorize each lost point: didn’t know the material / knew it but misapplied it / misread the question / ran out of time.",
        "Write your top preparation change for the next exam.",
        "Optional: note any question you found unclear or unaligned with what was taught."
      ],
      "debrief": [
        "Share the class-level error-type distribution and match study strategies to each type.",
        "Return wrappers a week before the next exam with a “remember your plan” note."
      ],
      "product": "An error analysis with a concrete preparation plan"
    },
    "id": "exam-wrapper",
    "name": "Exam Wrapper / Exam Evaluation",
    "family": "Reflection and Metacognition",
    "shortDescription": "After an exam is returned, students analyze their preparation, errors, and plans — and evaluate the exam’s clarity and alignment.",
    "purposes": [
      "reflect",
      "check-understanding"
    ],
    "intellectualActions": [
      "reflect",
      "patterns",
      "plan",
      "evaluate"
    ],
    "learningStages": [
      "after-exam"
    ],
    "evidenceProduced": "Error-pattern analyses and study plans; feedback on the exam itself",
    "bestFor": "Improving study strategies after the first exam, when motivation to change is highest"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "support-struggling",
      "evidence"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Focus on specific steps and decisions.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Attach as a short reflection to any major submission."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#process-self-analysis"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Reconstruct, step by step, how you actually completed the {topic} task — including when and where.",
        "Mark the step that worked best and the step where you lost the most time or quality.",
        "Write one process change for next time."
      ],
      "debrief": [
        "Compare processes of stronger and weaker outcomes (anonymized) — the differences are teachable."
      ],
      "product": "A step-by-step process account with one planned change"
    },
    "id": "process-self-analysis",
    "name": "Process Self-Analysis",
    "family": "Reflection and Metacognition",
    "shortDescription": "Students describe and evaluate the process they used to complete a task.",
    "purposes": [
      "reflect",
      "skill",
      "improve-draft"
    ],
    "intellectualActions": [
      "reflect",
      "patterns",
      "plan"
    ],
    "learningStages": [
      "after-feedback",
      "during-assignment",
      "end-of-unit"
    ],
    "evidenceProduced": "Process descriptions revealing strategy use and gaps",
    "bestFor": "Metacognitive reflection"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "support-struggling"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Stable prompts help reveal patterns.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Use the LMS journal tool; sample entries rather than reading all.",
      "lowGrading": "Completion credit with an end-of-term synthesis entry that you do read."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#self-diagnostic-learning-logs"
      }
    ],
    "templateData": {
      "studentSteps": [
        "After each week/unit, answer the same three prompts: What did I learn about {topic}? What am I still unsure of? What study move will I make?",
        "Every fourth entry, reread your log and note one pattern."
      ],
      "debrief": [
        "At midterm, ask students to share one pattern they discovered in their own log."
      ],
      "product": "A recurring learning log with periodic pattern checks"
    },
    "id": "learning-log",
    "name": "Learning Log (Self-Diagnostic)",
    "family": "Reflection and Metacognition",
    "shortDescription": "Students keep periodic logs to diagnose learning strengths and weaknesses and plan improvements.",
    "purposes": [
      "reflect",
      "check-understanding"
    ],
    "intellectualActions": [
      "reflect",
      "patterns",
      "plan"
    ],
    "learningStages": [
      "throughout"
    ],
    "evidenceProduced": "Recurring reflective entries showing patterns over time",
    "bestFor": "Ongoing reflection"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written",
      "extended-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "inclusive",
      "evidence"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Run as a journal series; useful across a whole term.",
      "shortVersion": "One sentence per question."
    },
    "sourceLinks": [
      {
        "label": "K. Patricia Cross Academy activity page",
        "url": "https://kpcrossacademy.ua.edu/techniques/what-so-what-now-what-journals/"
      }
    ],
    "templateData": {
      "studentSteps": [
        "WHAT? Describe what happened in the {topic} experience — facts only.",
        "SO WHAT? Interpret it: why does it matter, and what course concepts does it connect to?",
        "NOW WHAT? What will you do differently or investigate next?"
      ],
      "debrief": [
        "Sample a few “So what?” responses — the interpretive middle is where depth shows.",
        "Follow up later on “Now what?” commitments."
      ],
      "product": "A three-part structured reflection"
    },
    "id": "what-so-what-now-what",
    "name": "What? So What? Now What?",
    "family": "Reflection and Metacognition",
    "shortDescription": "A three-part reflective structure: describe what happened, interpret its significance, and plan what to do next.",
    "purposes": [
      "reflect",
      "synthesize"
    ],
    "intellectualActions": [
      "reflect",
      "connect",
      "plan"
    ],
    "learningStages": [
      "end-of-unit",
      "after-feedback",
      "throughout"
    ],
    "evidenceProduced": "Structured reflections linking experience to meaning to action",
    "bestFor": "Reflection after experiences: labs, service learning, clinicals, projects, difficult discussions"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "t30"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "evidence"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Use questions to plan follow-up.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "shortVersion": "RSQ only: recall, summarize, one question.",
      "asyncOnline": "End-of-module LMS assignment."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#rsqc2"
      }
    ],
    "templateData": {
      "studentSteps": [
        "RECALL: List the most important points from the {topic} unit.",
        "SUMMARIZE: Compress them into one sentence.",
        "QUESTION: Write your biggest unanswered question.",
        "COMMENT: How did this unit feel — where were you most/least engaged?",
        "CONNECT: Link one point to a course goal or earlier unit."
      ],
      "debrief": [
        "Answer the top questions next session; note engagement patterns from the comments."
      ],
      "product": "A five-part RSQC2 response"
    },
    "id": "rsqc2",
    "name": "RSQC2",
    "family": "Reflection and Metacognition",
    "shortDescription": "Students Recall, Summarize, Question, Comment, and Connect key ideas from a class or unit.",
    "purposes": [
      "reflect",
      "check-understanding",
      "synthesize"
    ],
    "intellectualActions": [
      "retrieve",
      "summarize",
      "connect",
      "reflect"
    ],
    "learningStages": [
      "end-of-unit",
      "during-lecture"
    ],
    "evidenceProduced": "Five-part responses spanning recall through connection",
    "bestFor": "Structured reflection"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "support-struggling",
      "low-prep"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Emphasize experimentation, not judgment.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "shortVersion": "One-week log with a single change experiment."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#self-studies-engaged-learning-time"
      }
    ],
    "templateData": {
      "studentSteps": [
        "For one week, log every study session for this course: when, how long, what you actually did.",
        "Label each session: active (retrieval, problems, explaining) or passive (rereading, highlighting).",
        "Design one experiment: swap one passive session for an active strategy and predict the effect."
      ],
      "debrief": [
        "Share the class active/passive ratio and the evidence on why active practice wins.",
        "Check in on the experiments two weeks later."
      ],
      "product": "A week-long study log with an improvement experiment"
    },
    "id": "study-strategy-audit",
    "name": "Study Strategy Audit (Engaged Learning Time)",
    "family": "Reflection and Metacognition",
    "shortDescription": "Students track and analyze how they actually spend study time, compare against effective strategies, and redesign their approach.",
    "purposes": [
      "reflect",
      "skill"
    ],
    "intellectualActions": [
      "reflect",
      "patterns",
      "plan",
      "evaluate"
    ],
    "learningStages": [
      "throughout",
      "after-exam"
    ],
    "evidenceProduced": "Time logs and strategy analyses revealing study habits",
    "bestFor": "Improving study strategies"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5",
      "t15"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "low-grading",
      "inclusive",
      "online-easy"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Use to explain course design choices. Works well in LMS polls or forms.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Run as an LMS poll or form in week one."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#student-goals-ranking"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Rank the listed course goals for {topic} from most to least important to you.",
        "Rate your confidence (1–5) that you can reach your top-ranked goal.",
        "Add one personal goal not on the list."
      ],
      "debrief": [
        "Show the class ranking next to your own priorities and explain the course design in those terms."
      ],
      "product": "A personal ranking of course goals with confidence ratings"
    },
    "id": "student-goals-ranking",
    "name": "Student Goals Ranking",
    "family": "Reflection and Metacognition",
    "shortDescription": "Students rank course goals by importance (optionally with confidence ratings).",
    "purposes": [
      "reflect",
      "engagement",
      "prior-knowledge"
    ],
    "intellectualActions": [
      "evaluate",
      "reflect",
      "plan"
    ],
    "learningStages": [
      "before-instruction",
      "end-of-unit"
    ],
    "evidenceProduced": "Goal rankings revealing student expectations and alignment with course design",
    "bestFor": "Aligning expectations"
  },
  {
    "origin": "new",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "support-struggling",
      "low-prep",
      "accountability"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {
      "asyncOnline": "Submit via LMS; the system can release it back to students at the check date."
    },
    "sourceLinks": [],
    "templateData": {
      "studentSteps": [
        "Write one specific goal for {topic} in the next two weeks (not “do better” — something observable).",
        "List the 2–3 concrete actions that will get you there, with days and times.",
        "Define your evidence: how will you know it worked?",
        "Set a check date and calendar it."
      ],
      "debrief": [
        "At the check date, have students grade their own follow-through and revise the plan."
      ],
      "product": "A written goal with scheduled actions and a check date"
    },
    "id": "goal-action-plan",
    "name": "Goal and Action Plan",
    "family": "Reflection and Metacognition",
    "shortDescription": "Students set a specific learning goal, define observable success, and commit to concrete next actions with a check date.",
    "purposes": [
      "reflect",
      "prepare-assignment"
    ],
    "intellectualActions": [
      "plan",
      "reflect",
      "decide"
    ],
    "learningStages": [
      "after-exam",
      "after-feedback",
      "before-assignment"
    ],
    "evidenceProduced": "Written commitments that can be revisited and checked",
    "bestFor": "Converting reflection into behavior, especially after setbacks"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "brief",
    "responseFormats": [
      "extended-written"
    ],
    "facultyPriorities": [
      "inclusive",
      "support-struggling"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Offer an opt-out prompt.",
    "accessibilityNotes": "Always offer an alternative, less personal prompt; never require disclosure.",
    "aiConsiderations": "",
    "adaptations": {
      "shortVersion": "One paragraph: your best and worst experience learning something like {topic}."
    },
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#autobiographical-sketches"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Write a short narrative (about a page) on a past experience relevant to learning {topic} — or use the alternative prompt.",
        "End with what you hope will be different (or the same) in this course."
      ],
      "debrief": [
        "Acknowledge themes from the sketches in how you frame the course’s support structures."
      ],
      "product": "A brief focused autobiographical narrative"
    },
    "id": "autobiographical-sketches",
    "name": "Focused Autobiographical Sketch",
    "family": "Reflection and Metacognition",
    "shortDescription": "Students write a brief narrative about experiences relevant to learning the course.",
    "purposes": [
      "prior-knowledge",
      "reflect",
      "engagement"
    ],
    "intellectualActions": [
      "reflect",
      "connect"
    ],
    "learningStages": [
      "before-instruction"
    ],
    "evidenceProduced": "Narratives revealing learning histories and starting points",
    "bestFor": "Understanding learning histories"
  },
  {
    "origin": "original",
    "modalities": [
      "async-online",
      "hybrid",
      "in-person",
      "sync-online"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t15",
      "multi"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "inclusive",
      "low-prep",
      "online-easy"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Respond at the class level to manage volume.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {},
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#student-teacher-email"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Each cycle, send a short structured message: one question about {topic}, one thing helping you learn, one obstacle."
      ],
      "debrief": [
        "Respond to patterns at the class level; reply individually only where needed."
      ],
      "product": "Recurring structured feedback messages"
    },
    "id": "student-teacher-email",
    "name": "Student-Teacher Electronic Mail",
    "family": "Reflection and Metacognition",
    "shortDescription": "Structured, recurring messages for questions and feedback between students and instructor.",
    "purposes": [
      "engagement",
      "reflect",
      "check-understanding"
    ],
    "intellectualActions": [
      "reflect",
      "plan"
    ],
    "learningStages": [
      "throughout"
    ],
    "evidenceProduced": "A running channel of questions and course feedback",
    "bestFor": "Timely course feedback"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium",
      "large"
    ],
    "timeOptions": [
      "t5"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "brief-written"
    ],
    "facultyPriorities": [
      "low-prep",
      "low-grading",
      "online-easy",
      "inclusive"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Ask about elements you can change soon.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {},
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#teacher-designed-mini-forms"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Complete the three-question form about the targeted course element (anonymous)."
      ],
      "debrief": [
        "Report results and the one change you will make — closing the loop drives future response quality."
      ],
      "product": "Completed anonymous mini-form"
    },
    "id": "teacher-designed-mini-forms",
    "name": "Teacher-Designed Evaluation Mini-Form",
    "family": "Reflection and Metacognition",
    "shortDescription": "Short, customized feedback forms targeting a specific aspect of teaching or learning.",
    "purposes": [
      "engagement",
      "reflect"
    ],
    "intellectualActions": [
      "evaluate",
      "reflect"
    ],
    "learningStages": [
      "throughout",
      "end-of-unit"
    ],
    "evidenceProduced": "Targeted feedback on a changeable element of the course",
    "bestFor": "Actionable feedback"
  },
  {
    "origin": "original",
    "modalities": [
      "in-person",
      "sync-online",
      "async-online",
      "hybrid"
    ],
    "classSizes": [
      "small",
      "medium"
    ],
    "timeOptions": [
      "t30"
    ],
    "groupingOptions": [
      "individual"
    ],
    "preparationLevel": "minimal",
    "reviewBurden": "scan",
    "responseFormats": [
      "verbal",
      "brief-written"
    ],
    "facultyPriorities": [
      "inclusive"
    ],
    "sourceTypeCompatibility": [],
    "techNeeds": [],
    "limitations": "Focus on behaviors, not traits.",
    "accessibilityNotes": "",
    "aiConsiderations": "",
    "adaptations": {},
    "sourceLinks": [
      {
        "label": "CAT guide details",
        "url": "https://denicerobertson72-source.github.io/CAT-Techniques/#profiles-of-admirable-teachers"
      }
    ],
    "templateData": {
      "studentSteps": [
        "Describe (no names) two specific practices of a teacher who helped you learn deeply.",
        "For each, explain what it did for your learning."
      ],
      "debrief": [
        "Compile the practice list; note which ones this course already uses and which you might adopt."
      ],
      "product": "A short profile of effective teaching practices"
    },
    "id": "profiles-of-admirable-teachers",
    "name": "Profiles of Admirable Teachers",
    "family": "Reflection and Metacognition",
    "shortDescription": "Students describe practices of effective teachers (without naming individuals).",
    "purposes": [
      "engagement",
      "reflect"
    ],
    "intellectualActions": [
      "reflect",
      "patterns"
    ],
    "learningStages": [
      "before-instruction",
      "throughout"
    ],
    "evidenceProduced": "Descriptions revealing student expectations of effective teaching",
    "bestFor": "Understanding student expectations"
  }
] as Activity[];

export const ACTIVITY_FAMILIES = Array.from(new Set(activities.map((activity) => activity.family)));
export const activityById = Object.fromEntries(activities.map((activity) => [activity.id, activity]));
export function getActivity(id: string) {
  return activityById[id] ?? null;
}
