/**
 * Matchday Decision Room design reminder:
 * An editorial, sequential decision chamber with calm authority. Dark ink, bone panels,
 * Signal Lime for only active decisions, and a visible link from pressure moment to method.
 */
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Download,
  RotateCcw,
  Share2,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

type Choice = {
  id: string;
  label: string;
  response: string;
  signal: string;
  intervention: string;
  labelShort: string;
};

type Scenario = {
  kicker: string;
  title: string;
  time: string;
  prompt: string;
  image: string;
  challenge: string;
  choices: Choice[];
};

const scenarios: Scenario[] = [
  {
    kicker: "Pressure moment 01",
    title: "One error. Seven minutes left.",
    time: "83:00",
    prompt:
      "Your side concedes after controlling the match. What tends to happen in the next two actions?",
    image: "/manus-storage/pressure-moment-error_ef442057.jpg",
    challenge: "Recommitment after error",
    choices: [
      {
        id: "rush",
        label: "The next action is forced. Players try to repair the error immediately.",
        response: "The team is being pulled from the next action into the previous one.",
        signal: "A shared reset cue that stops emotional acceleration before the next decision.",
        intervention: "10-second reset routine",
        labelShort: "Recommitment speed",
      },
      {
        id: "drift",
        label: "Communication drops. Frustration is visible, but no one recentres the group.",
        response: "The pressure point is not effort. It is the absence of a collective response.",
        signal: "A simple leader-led call that restores the team’s attention to the next phase.",
        intervention: "Team reset language",
        labelShort: "Collective reset",
      },
      {
        id: "rebuild",
        label: "The team pauses, speaks simply, and creates the next high-quality action.",
        response: "That is the target behaviour: visible composure that preserves decision quality.",
        signal: "A rehearsal plan to make this response reliable across changing match states.",
        intervention: "Pressure-rehearsal protocol",
        labelShort: "Decision stability",
      },
    ],
  },
  {
    kicker: "Pressure moment 02",
    title: "The message is not landing.",
    time: "61:40",
    prompt:
      "The coaching staff adjust the plan during a difficult spell. On the field, how does the team tend to communicate?",
    image: "/manus-storage/pressure-moment-communication_1ad40719.jpg",
    challenge: "Communication under load",
    choices: [
      {
        id: "noise",
        label: "There is more shouting, but less useful information reaches the right player.",
        response: "Volume is replacing clarity. Under load, the team needs fewer, sharper messages.",
        signal: "A concise set of agreed communication calls that survive pressure and noise.",
        intervention: "On-field communication code",
        labelShort: "Signal clarity",
      },
      {
        id: "silence",
        label: "Players become quiet and wait for someone else to take control.",
        response: "Role certainty has dropped precisely when the group needs distributed leadership.",
        signal: "Explicit ownership cues for the players closest to the next decision.",
        intervention: "Role-ownership rehearsal",
        labelShort: "Distributed leadership",
      },
      {
        id: "simple",
        label: "The group uses a few shared words and the adjustment becomes visible quickly.",
        response: "The team has a usable language for pressure—not just a tactical instruction.",
        signal: "A match-to-training bridge that keeps the language live all week.",
        intervention: "Shared pressure language",
        labelShort: "Transferable clarity",
      },
    ],
  },
  {
    kicker: "Pressure moment 03",
    title: "A talented player is waiting.",
    time: "Monday / Selection",
    prompt:
      "A key player is uncertain of their role for the weekend. Where does their energy usually go during the week?",
    image: "/manus-storage/pressure-moment-selection_64040117.jpg",
    challenge: "Preparation amid uncertainty",
    choices: [
      {
        id: "rumination",
        label: "Into selection speculation, comparison, and trying to read every signal.",
        response: "Attention is being spent on an uncontrollable outcome rather than present preparation.",
        signal: "A role-based plan that gives the player visible evidence of useful preparation.",
        intervention: "Controllable-action plan",
        labelShort: "Attention control",
      },
      {
        id: "caution",
        label: "The player trains cautiously to avoid an error that could influence the decision.",
        response: "The player is protecting selection rather than expressing their performance behaviours.",
        signal: "A graduated challenge that rewards commitment to the right actions in training.",
        intervention: "Evidence-based exposure",
        labelShort: "Committed preparation",
      },
      {
        id: "focus",
        label: "The player doubles down on role habits and reviews what they can control.",
        response: "This is the performance habit to make repeatable: prepare for the role, not the verdict.",
        signal: "A weekly preparation review that turns controllables into performance evidence.",
        intervention: "Role-readiness routine",
        labelShort: "Role readiness",
      },
    ],
  },
];

const flowLabels = ["Trigger", "Attention", "Decision", "Action", "Reset"];

export default function Home() {
  const [screen, setScreen] = useState<"scenario" | "result">("scenario");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Choice[]>([]);
  const [revealed, setRevealed] = useState(false);

  const scenario = scenarios[step];
  const completion = screen === "result" ? 100 : Math.round(((step + (revealed ? 1 : 0)) / scenarios.length) * 100);
  const snapshotTitle = useMemo(() => {
    if (!answers.length) return "Your performance snapshot will form here.";
    return "Your pressure-performance opportunity";
  }, [answers.length]);

  function choose(choice: Choice) {
    if (revealed) return;
    setAnswers((current) => [...current, choice]);
    setRevealed(true);
  }

  function continueFlow() {
    if (step === scenarios.length - 1) {
      setScreen("result");
      return;
    }
    setStep((current) => current + 1);
    setRevealed(false);
  }

  function restart() {
    setScreen("scenario");
    setStep(0);
    setAnswers([]);
    setRevealed(false);
  }

  async function shareSnapshot() {
    const shareText = "A short performance-coaching experience for the moments when pressure changes the next decision.";
    try {
      if (navigator.share) {
        await navigator.share({ title: "Matchday Decision Room", text: shareText, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Experience link copied.");
      }
    } catch {
      toast.message("Share cancelled.");
    }
  }

  return (
    <main className="decision-room min-h-screen overflow-hidden bg-[#101110] text-[#f4f2ea]">
      <div className="ambient-noise" aria-hidden="true" />
      <header className="room-header">
        <a href="#top" className="brand" aria-label="Matchday Decision Room home">
          <img src="/manus-storage/signal-mark_c6372f8d.png" alt="" className="brand-mark" />
          <span className="brand-name">Matchday<br />Decision Room</span>
        </a>
        <div className="header-status" aria-live="polite">
          <span className="status-dot" />
          <span>{screen === "scenario" ? `${scenario.time} · live pressure point` : "Brief complete"}</span>
        </div>
      </header>

      <div id="top" className="room-shell">
        <nav className="session-rail" aria-label="Experience progress">
          <span className="rail-title">Session</span>
          {["Moment 01", "Moment 02", "Moment 03", "Brief"].map((label, index) => {
            const activeIndex = screen === "result" ? 3 : step;
            const isActive = index === activeIndex;
            const isComplete = index < activeIndex;
            return (
              <div className={`rail-item ${isActive ? "active" : ""} ${isComplete ? "complete" : ""}`} key={label}>
                <span className="rail-number">0{index + 1}</span>
                <span className="rail-label">{label}</span>
              </div>
            );
          })}
        </nav>

        <section className="experience-stage">
          <AnimatePresence mode="wait">
            {screen === "scenario" && (
              <motion.div
                key={`scenario-${step}`}
                initial={{ opacity: 0, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="scenario-stage"
              >
                <div className="scenario-image" style={{ backgroundImage: `url('${scenario.image}')` }} />
                <div className="scenario-shade" />
                <div className="scenario-topline">
                  <span className="eyebrow">{scenario.kicker}</span>
                  <span className="pressure-clock"><i /> {scenario.time}</span>
                </div>
                <div className={`decision-trace ${revealed ? "answered" : ""}`} aria-hidden="true">
                  <span /><span /><span /><span /><span />
                </div>
                <div className="scenario-body">
                  <p className="scenario-context">{scenario.challenge}</p>
                  <h2>{scenario.title}</h2>
                  <p className="scenario-prompt">{scenario.prompt}</p>
                  <div className="choice-list" aria-label="Choose the closest performance pattern">
                    {scenario.choices.map((choice, index) => {
                      const selected = answers[step]?.id === choice.id;
                      return (
                        <button
                          type="button"
                          key={choice.id}
                          onClick={() => choose(choice)}
                          disabled={revealed && !selected}
                          className={`choice-card ${selected ? "selected" : ""} ${revealed && !selected ? "muted" : ""}`}
                        >
                          <span className="choice-letter">{String.fromCharCode(65 + index)}</span>
                          <span>{choice.label}</span>
                          {selected && <Check size={17} className="choice-check" />}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {revealed && answers[step] && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                        className="reveal-panel"
                      >
                        <div className="reveal-label"><span /> What this reveals</div>
                        <p>{answers[step].response}</p>
                        <div className="reveal-signal">
                          <span>Coaching signal</span>
                          <strong>{answers[step].signal}</strong>
                        </div>
                        <button type="button" className="next-button" onClick={continueFlow}>
                          {step === scenarios.length - 1 ? "Build the snapshot" : "Continue"} <ChevronRight size={17} />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {screen === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
                className="result-stage"
              >
                <div className="result-kicker"><ClipboardCheck size={17} /> Performance Snapshot</div>
                <h2>This is how the work becomes visible.</h2>
                <p className="result-intro">
                  This is not an assessment and it does not label your club. It is a short illustration of how a familiar pressure point becomes a shared training focus.
                </p>
                <section className="snapshot-card" aria-label="Your performance snapshot">
                  <div className="snapshot-head">
                    <div>
                      <span className="micro-label">A club-facing coaching brief</span>
                      <h3>{snapshotTitle}</h3>
                    </div>
                    <img src="/manus-storage/signal-mark_c6372f8d.png" alt="" />
                  </div>
                  <div className="snapshot-lines">
                    {answers.map((answer, index) => (
                      <div className="snapshot-line" key={answer.id}>
                        <span>0{index + 1}</span>
                        <div>
                          <small>{scenarios[index].challenge}</small>
                          <strong>{answer.labelShort}</strong>
                        </div>
                        <em>{answer.intervention}</em>
                      </div>
                    ))}
                  </div>
                  <div className="method-strip">
                    <span className="micro-label">The method in one line</span>
                    <p>Notice the trigger. Direct attention. Simplify the decision. Rehearse the action. Review the reset.</p>
                    <div className="flow-line" aria-label="Trigger to reset performance flow">
                      {flowLabels.map((label, index) => <span key={label}>{label}{index < flowLabels.length - 1 && <i />}</span>)}
                    </div>
                  </div>
                </section>
                <div className="result-actions">
                  <button type="button" className="signal-button" onClick={shareSnapshot}><Share2 size={17} /> Share this experience</button>
                  <button type="button" className="quiet-button" onClick={() => window.print()}><Download size={16} /> Print the Snapshot</button>
                  <button type="button" className="quiet-button" onClick={restart}><RotateCcw size={16} /> Run again</button>
                </div>
                <aside className="next-conversation">
                  <CircleHelp size={17} />
                  <span><strong>The real conversation starts here.</strong> In a live club briefing, this snapshot becomes a focused discussion about your environment, game model, and high-consequence moments.</span>
                </aside>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <aside className="snapshot-rail" aria-label="Performance Snapshot progress">
          <div className="snapshot-rail-head">
            <span>Live brief</span>
            <span>{answers.length}/3</span>
          </div>
          <div className="mini-snapshot">
            {answers.length ? answers.map((answer, index) => (
              <div className="mini-row" key={answer.id}>
                <span>0{index + 1}</span>
                <div><small>{scenarios[index].challenge}</small><strong>{answer.labelShort}</strong></div>
              </div>
            )) : <div className="folio-placeholder">
              <span className="folio-rule" />
              <small>Brief structure</small>
              <strong>Trigger</strong>
              <strong>Behaviour</strong>
              <strong>Intervention</strong>
              <strong>Reset</strong>
              <p>Choose the first pressure moment to begin the coaching brief.</p>
            </div>}
          </div>
          <div className="rail-footer"><span /> Evidence before explanation</div>
        </aside>
      </div>
      <footer className="room-footer"><span>Performance coaching for execution under pressure</span><span>Built to be experienced in minutes</span></footer>
    </main>
  );
}
