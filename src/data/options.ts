type Option = { value: string; label: string };

export const OPTIONS: Record<string, Option[]> = {
  PURPOSES: [
    { value: "understand", label: "Understand difficult course content" },
    { value: "apply", label: "Apply what they have learned" },
    { value: "analyze", label: "Analyze or evaluate information" },
    { value: "synthesize", label: "Connect or synthesize ideas" },
    { value: "skill", label: "Practice a disciplinary skill" },
    { value: "collaborate", label: "Collaborate with others" },
    { value: "prepare-assignment", label: "Prepare for a major assignment" },
    { value: "improve-draft", label: "Improve an existing draft or product" },
    { value: "check-understanding", label: "Check their understanding" },
    { value: "reflect", label: "Reflect on their learning" },
    { value: "engagement", label: "Increase participation or engagement" },
    { value: "prior-knowledge", label: "Reveal prior knowledge or misconceptions" }
  ],
  ACTIONS: [
    { value: "retrieve", label: "Retrieve or recall" },
    { value: "explain", label: "Explain" },
    { value: "summarize", label: "Summarize" },
    { value: "patterns", label: "Identify patterns" },
    { value: "compare", label: "Compare or distinguish" },
    { value: "classify", label: "Classify or organize" },
    { value: "apply-concept", label: "Apply a concept" },
    { value: "solve", label: "Solve a problem" },
    { value: "interpret-evidence", label: "Interpret evidence" },
    { value: "analyze-argument", label: "Analyze an argument" },
    { value: "evaluate", label: "Evaluate alternatives" },
    { value: "decide", label: "Make a decision" },
    { value: "recommend", label: "Develop a recommendation" },
    { value: "connect", label: "Connect ideas" },
    { value: "create", label: "Create or design" },
    { value: "practice-procedure", label: "Practice a procedure" },
    { value: "peer-feedback", label: "Give peer feedback" },
    { value: "revise", label: "Revise their work" },
    { value: "reflect", label: "Reflect on their learning" },
    { value: "plan", label: "Plan their next steps" }
  ],
  STAGES: [
    { value: "before-instruction", label: "Before instruction" },
    { value: "during-lecture", label: "During a lecture or presentation" },
    { value: "after-reading", label: "After a reading or video" },
    { value: "guided-practice", label: "During guided practice" },
    { value: "before-assignment", label: "Before a major assignment" },
    { value: "during-assignment", label: "While completing an assignment" },
    { value: "after-feedback", label: "After receiving feedback" },
    { value: "end-of-unit", label: "At the end of a unit" },
    { value: "before-exam", label: "Before an exam" },
    { value: "after-exam", label: "After an exam" },
    { value: "throughout", label: "Throughout the semester" }
  ],
  MODALITIES: [
    { value: "in-person", label: "In-person" },
    { value: "sync-online", label: "Synchronous online" },
    { value: "async-online", label: "Asynchronous online" },
    { value: "hybrid", label: "Blended or hybrid" }
  ],
  CLASS_SIZES: [
    { value: "small", label: "Small: 30 or fewer" },
    { value: "medium", label: "Medium: 31–75" },
    { value: "large", label: "Large: 76 or more" }
  ],
  TIMES: [
    { value: "t5", label: "5 minutes or less" },
    { value: "t15", label: "6–15 minutes" },
    { value: "t30", label: "16–30 minutes" },
    { value: "t50", label: "31–50 minutes" },
    { value: "t50plus", label: "More than 50 minutes" },
    { value: "multi", label: "Multi-day or extended assignment" }
  ],
  GROUPINGS: [
    { value: "individual", label: "Individual" },
    { value: "pairs", label: "Pairs" },
    { value: "small-groups", label: "Small groups" },
    { value: "whole-class", label: "Whole class" },
    { value: "flexible", label: "Flexible or no preference" }
  ],
  PRIORITIES: [
    { value: "low-prep", label: "Minimal preparation" },
    { value: "low-grading", label: "Minimal grading" },
    { value: "participation", label: "High student participation" },
    { value: "inclusive", label: "Inclusive participation" },
    { value: "evidence", label: "Strong evidence of learning" },
    { value: "authentic", label: "Authentic disciplinary practice" },
    { value: "online-easy", label: "Easy online implementation" },
    { value: "product", label: "A useful student product" },
    { value: "support-struggling", label: "Support for struggling students" },
    { value: "challenge-advanced", label: "Challenge for advanced students" },
    { value: "collaborative", label: "Collaborative learning" },
    { value: "accountability", label: "Individual accountability" },
    { value: "ai-resistant", label: "Reduced opportunity for superficial AI-generated work" },
    { value: "ai-productive", label: "Productive use of generative AI" }
  ],
  REVIEW: [
    { value: "none", label: "No individual review" },
    { value: "scan", label: "Quick scan for patterns" },
    { value: "whole-class", label: "Whole-class feedback" },
    { value: "brief", label: "Brief individual feedback" },
    { value: "detailed", label: "Detailed individual feedback" }
  ],
  TECH: [
    { value: "none", label: "No technology required" },
    { value: "lms", label: "Learning management system" },
    { value: "polling", label: "Polling tool" },
    { value: "shared-doc", label: "Shared document" },
    { value: "discussion-board", label: "Discussion board" },
    { value: "recording", label: "Video or audio recording" },
    { value: "whiteboard", label: "Collaborative whiteboard" },
    { value: "devices", label: "Student devices" },
    { value: "other", label: "Other" }
  ],
  SOURCE_TYPES: [
    { value: "reading", label: "Reading" }, { value: "chapter", label: "Chapter" },
    { value: "lecture-notes", label: "Lecture notes" }, { value: "slides", label: "Slides" },
    { value: "video", label: "Video" }, { value: "image", label: "Image" },
    { value: "problem-set", label: "Problem set" }, { value: "dataset", label: "Dataset" },
    { value: "primary-source", label: "Primary source" }, { value: "case", label: "Case" }
  ],
  REDESIGN_MOVES: []
};

export function label(group: string, value: string): string {
  return OPTIONS[group]?.find((o) => o.value === value)?.label ?? value.replaceAll("-", " ");
}
