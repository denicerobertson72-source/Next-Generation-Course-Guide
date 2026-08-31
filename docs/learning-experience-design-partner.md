# Learning Experience Design Partner milestone

Learning Experience Design Partner completes the core backward-design sequence: Outcome → Assessment Evidence → Practice → Alignment. It uses deterministic context and a curated practice library, not a teaching-technique catalog.

`practiceLibrary.ts` separates **practice needs** (the cognitive work students need), **activity approaches** (the broad instructional structure), and **activity templates** (the specific implementation). `learningExperience.ts` transparently ranks a small curated repertoire by practice-need match, level of thinking, modality, and assessment preparation.

Faculty see the practice rationale first, then 3–5 approaches, a complete editable Quick Build, and compact customization for time, grouping, and feedback. Approval creates both a linked `ActivitySelection` and a `learningExperienceDesignDecision`; existing Activity Builder tools remain available for deeper exploration.

The system does not infer relationships from prose. Links arise from faculty context/handoff or faculty approval. Discipline-specific cases and source materials remain suitable for optional Prompt Handoff rather than automatic generation.
