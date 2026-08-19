# Interactive Club Performance Experience — Design Directions

## Three possible directions

### 1. The Matchday Decision Room
**Very Brief Intro:** A calm, cinematic decision simulator that places a club leader inside three familiar pressure moments and reveals the coaching approach through their choices. It feels like a concise technical briefing rather than a sales page.

**Probability:** 0.07

### 2. The Performance Control Loop
**Very Brief Intro:** A clean, systems-led explainer where a club can turn a single performance issue into an animated map of observation, intervention, rehearsal, and review. It conveys methodological rigour and operational clarity.

**Probability:** 0.04

### 3. The Sideline Debrief
**Very Brief Intro:** A documentary-style scroll narrative in which short video-like sequences, coach notes, and player choices reveal how performance habits are built over a competitive week. It privileges atmosphere and human immediacy.

**Probability:** 0.09

## Chosen Direction: The Matchday Decision Room

### Design Movement
Contemporary sports-performance editorial design, borrowing from premium match-analysis interfaces, film title cards, and high-end coaching briefings rather than conventional wellness or consultancy websites.

### Core Principles
1. **Experience before explanation:** The visitor should encounter a recognisable pressure decision before seeing any descriptive copy.
2. **One choice at a time:** Use progressive disclosure and short, deliberate screens instead of pages of reading.
3. **Operational credibility:** Every revealed insight connects an observed moment to a trainable behaviour and a practical intervention.
4. **Calm authority:** The interface should feel measured and precise, never hyped, clinical, or motivational.

### Color Philosophy
A deep ink-black field represents the contained intensity of competition; warm bone panels make the insights easy to absorb and encourage completion. A single acid-lime signal colour is reserved for the visitor's active decision path and moments of clarity, creating an ownable high-performance signature without defaulting to sports-brand red or blue.

### Layout Paradigm
A full-screen sequential **decision chamber** rather than a long landing page. The left edge contains a vertical, numbered session rail; the centre carries a single scenario and choice; the right edge gradually accumulates the visitor's personalised Performance Snapshot. The final result is a scrollable one-page briefing that can be shared by link.

### Signature Elements
1. **Pressure clock:** A small timeline whose seconds advance as a decision scenario unfolds.
2. **Signal line:** A hand-drawn-looking lime trace that connects trigger, attention, decision, action, and reset.
3. **Performance Snapshot:** A restrained, printable panel that gradually assembles as choices are made.

### Interaction Philosophy
Interaction is intentional, low-friction, and keyboard accessible. A selection should instantly reveal a useful insight, then invite the next step. There are no gamified scores, no data collection gates, and no artificial personality assessment; the visitor is guided toward a concrete view of the method.

### Animation
Use a 180–260 ms precise ease-out for cards, selections, and the session rail. The pressure clock has a gentle progressing stroke during a scenario. The signal line draws only after a choice, translating the abstract performance method into a visible sequence. Respect reduced-motion preferences and never animate text in a way that delays reading.

### Typography System
Use **Barlow Condensed** at substantial scale for editorial, sporting headlines and **DM Sans** for compact, highly legible interface copy. Headlines use uppercase sparingly for section labels; sentences remain mixed-case and calm. Data labels use monospaced **IBM Plex Mono** for technical clarity.

### Brand Essence
**A decision-led performance coaching experience for clubs that want their players to execute with clarity when consequence is highest.**

Personality: **composed, exacting, field-ready.**

### Brand Voice
Headlines are direct, observant, and rooted in real sporting moments. CTAs are invitations to explore an operational method, not generic sales prompts. Microcopy avoids psychology jargon and sports clichés.

Example lines:

> "The moment after the mistake is the moment that matters."

> "See how your pressure point becomes a trainable routine."

### Wordmark & Logo
An abstract split-second mark: a white circle interrupted by a single lime diagonal signal line, suggesting the gap between reaction and choice. The wordmark uses tightly tracked Barlow Condensed uppercase lettering with an offset signal-line accent beneath the final word.

### Signature Brand Color
**Signal Lime — `#C7F23A`**

## Style Decisions

- The first build is a **three-minute, client-side experience**, designed to be linked in an outreach email rather than attached as a slide deck.
- The prototype should demonstrate the format using three generic club pressure moments. It must not imply knowledge of a specific club or collect sensitive athlete data.
- The end-state share link should show a tailored but non-identifying Performance Snapshot; a future full-stack version may add a request form and CRM handoff if desired.
- The visitor enters **Pressure Moment 01 immediately**; there is no marketing-hero preface before the first decision.
- The Performance Snapshot is visible from the first frame as a warm-bone, printable briefing artifact that accumulates trigger, behaviour, intervention, and reset language.
- Every visible headline and call to action uses concrete match-pressure or operational coaching language rather than generic marketing claims.
