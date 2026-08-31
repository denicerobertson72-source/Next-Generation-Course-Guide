# Data model

`CourseRecord` stores course metadata, design intent, aspirational goals, and arrays of `SLO`, `Assessment`, `ActivitySelection`, `Assignment`, `AIUseDecision`, `Reflection`, and `SourceRecord` objects. Relationships are explicit IDs rather than inferred from text:

```text
SLO.id ← Assessment.linkedSloIds
SLO.id ← ActivitySelection.linkedSloIds
Assessment.id ← ActivitySelection.linkedAssessmentIds
```

This supports many-to-many course design: each assessment has its own stable ID and can link to many outcomes; each selected activity can link independently to many outcomes and assessments. `Assessment` additionally supports optional description, weight, and faculty-selected/inferred cognitive demand. `ActivitySelection` captures the chosen Activity Builder record, its deterministic recommendation result, rationale, and optional faculty customization notes.

The runtime validator verifies required arrays and rejects assessment links to missing outcomes. Normalization adds new optional defaults and removes stale links from older browser records without discarding intact faculty content. Production persistence should retain these relationships as relational foreign keys rather than burying them in a chat transcript.

`FacultyMaterial` retains extracted text, filename, MIME type, scope, and extraction status for the local prototype. `Assessment.learningRole` preserves the faculty-facing choice (including `both` and `unsure`) while the existing internal formative/summative field remains available to deterministic alignment checks.

`Assignment` is a first-class course object. It preserves original and working text, optional source-material and activity links, TiLT fields, deterministic review findings, timestamps, and faculty decisions. Earlier assignment records are normalized with safe defaults.
