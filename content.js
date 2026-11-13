/* AiTOM content. Edit this file to change chapters, questions, cases and terms.
   Question rule: for type "mcq" the FIRST option is the correct one (the app shuffles them).
   "cb" on a question marks it as a callback to an earlier chapter. */

const CASES = {
  novo: {
    name: "Novo Nordisk", sector: "Pharma R&D", tag: "Cycle time into revenue",
    did: ["Built NovoScribe to draft clinical study reports and device protocols", "An 11-person team built it, non-technical members included"],
    result: "A reviewable first draft in about 10 minutes, down from 10+ weeks. Report writing time cut by about 90%.",
    lesson: "The win is not cheaper writing. It is medicines reaching market sooner.",
    use: "When a document blocks a launch, measure the agent in days to market, not hours saved."
  },
  allianz: {
    name: "Allianz", sector: "Insurance claims", tag: "Humans keep the payout",
    did: ["Project Nemo: seven agents from planner to audit", "Used on food-spoilage claims after storm power outages"],
    result: "Processing and settlement time cut by about 80%.",
    lesson: "Agents prepare and recommend. A claims professional still decides the payout.",
    use: "Let agents do the legwork at high autonomy and keep the money decision at a low level."
  },
  klarna: {
    name: "Klarna", sector: "Fintech service", tag: "The cautionary tale",
    did: ["Went AI-first on customer service", "The bot handled about two-thirds of chats in its first month"],
    result: "Quality fell. The CEO later said cost had been weighted too heavily, and humans were rehired.",
    lesson: "A cost-only business case erodes quality and trust.",
    use: "Put a quality metric next to every cost metric before you scale."
  },
  bny: {
    name: "BNY", sector: "Custody and asset servicing", tag: "Agents as a workforce",
    did: ["Runs about 140 digital employees, each with a login and a human manager", "About 20,000 staff build agents on its central Eliza platform", "A formal process decides when an agent is used instead of a new hire"],
    result: "Legal review time cut by about 75%.",
    lesson: "Agents are managed like staff: identity, access, a manager and an audit trail.",
    use: "Before scaling, ask: does every agent have a named human manager?"
  },
  goldman: {
    name: "Goldman Sachs", sector: "Investment banking operations", tag: "Rule-heavy work first",
    did: ["Embedded Anthropic engineers to co-build agents", "Targets trade accounting, client vetting and onboarding", "Started with coding agents before moving into operations"],
    result: "Faster onboarding and reconciliation expected. The CIO called job-loss conclusions premature.",
    lesson: "Start where work is rule-heavy and document-heavy.",
    use: "Shortlist processes with thick rulebooks and lots of documents."
  },
  jpm: {
    name: "JPMorgan", sector: "Banking and wealth", tag: "Revenue through advisors",
    did: ["Gave 12,000+ wealth users a coach with 25 specialised agents", "Agents prepare advisors rather than replace them"],
    result: "Private bank gross sales up about 20%. The CFO said AI's productivity impact doubled, from about 3% to 6%.",
    lesson: "Revenue shows up when agents make sellers better, not when they replace them.",
    use: "For revenue cases, target the seller's prep time and measure sales per advisor."
  },
  lumen: {
    name: "Lumen", sector: "Telecom sales", tag: "Selling time back",
    did: ["Automated account research, meeting summaries and CRM updates for sellers"],
    result: "About 4 hours a week saved per seller, valued at roughly $50M a year.",
    lesson: "This is selling time, not yet revenue. It counts only when conversion is measured.",
    use: "Track what sellers do with the hours they get back."
  },
  servicenow: {
    name: "ServiceNow", sector: "Software", tag: "Client zero",
    did: ["Ran AI agents on its own IT, HR and support operations first"],
    result: "About $500M of annualised internal value in 2025, including about $100M of operating cost saved.",
    lesson: "Proving it on your own operations makes the offer credible before you sell it.",
    use: "If you sell AI services, become your own first reference case."
  },
  askhr: {
    name: "IBM AskHR", sector: "HR service", tag: "HR at scale",
    did: ["An HR agent answers employee questions and completes manager transactions"],
    result: "About 94% of inquiries resolved instantly. Over 800,000 manager transactions automated in its first year.",
    lesson: "Internal service desks are ideal first ground: high volume, clear rules, measured already.",
    use: "Start HR with queries and manager transactions, not with judgement calls."
  },
  pactum: {
    name: "Walmart and Pactum", sector: "Procurement", tag: "The negotiating agent",
    did: ["An AI agent negotiates with tail-spend suppliers", "It can negotiate with about 2,000 suppliers at once"],
    result: "Deals closed with about 68% of suppliers engaged. Average saving of about 3%.",
    lesson: "Agents reach the long tail of small suppliers that buyers never have time for.",
    use: "Look for work that is valuable but never done because people lack the hours."
  },
  walmart: {
    name: "Walmart", sector: "Retail", tag: "Revenue lags",
    did: ["Consolidated dozens of AI tools into four super agents", "One each for customers, suppliers, associates and developers", "About 4M developer hours saved with AI coding tools"],
    result: "Real productivity gains. Yet in 2025 the CEO said AI was not yet lifting top-line sales.",
    lesson: "Cost and productivity gains arrive first. Revenue follows later.",
    use: "Promise cost value early and stage revenue targets for later gates."
  }
};

const CHAPTERS = [
/* ------------------------------------------------------------------ 1 */
{
  id: "c1", title: "The Shift", sub: "From helping with tasks to owning outcomes", mins: 6,
  cards: [
    { t: "concept", kick: "Start here", title: "A copilot helps. An agent finishes.",
      body: ["A copilot drafts and suggests. You still do the work.",
             "An agent takes a goal, plans the steps, uses tools and completes the job. It asks a human only when it gets stuck."],
      vis: { type: "pairs", head: ["Copilot", "Agent"], rows: [["Answers a prompt", "Pursues a goal"], ["You act on it", "It acts in systems"], ["Saves you time", "Owns an outcome"]] },
      room: "We are not buying a tool. We are redesigning who does the work." },
    { t: "concept", kick: "The map", title: "The maturity ladder has four rungs",
      body: ["Tap each rung. Notice what changes: who decides, who executes, and how value is measured."],
      vis: { type: "tabs", tabs: [
        { l: "Rules", rows: [["Decides", "Human"], ["Executes", "Scripted bot"], ["Human role", "Maintains the rules"], ["Value metric", "FTE saved"], ["Typical tech", "RPA, workflow"], ["Risk", "Low, but brittle when things change"]] },
        { l: "Assisted", rows: [["Decides", "Human"], ["Executes", "Human with a copilot"], ["Human role", "Does the work, AI drafts"], ["Value metric", "Time saved per task"], ["Typical tech", "Copilots, chat"], ["Risk", "Low, quality varies"]] },
        { l: "Agentic", hot: true, rows: [["Decides", "Agent, within guardrails"], ["Executes", "Agent, human on exceptions"], ["Human role", "Supervises exceptions"], ["Value metric", "Cost per outcome, cycle time"], ["Typical tech", "Tool-using agents, orchestration"], ["Risk", "Medium: the agent can act"]] },
        { l: "Autonomous", rows: [["Decides", "Agent, human audits"], ["Executes", "Multi-agent network"], ["Human role", "Designs, audits, owns the outcome"], ["Value metric", "Margin and revenue per process"], ["Typical tech", "Multi-agent systems, live controls"], ["Risk", "High: needs live governance"]] }
      ] },
      note: "Agentic, supervised is the practical target for most enterprises today." },
    { t: "example", kick: "Example", title: "One invoice, four rungs",
      body: ["An invoice does not match its purchase order. What happens next?"],
      vis: { type: "steps", items: [
        { h: "Rules", t: "The bot rejects it. A clerk sorts it out." },
        { h: "Assisted", t: "The clerk asks a copilot to explain the mismatch, then fixes it." },
        { h: "Agentic", t: "The agent investigates, emails the supplier, posts the fix and escalates odd cases.", hot: true },
        { h: "Autonomous", t: "An agent network runs payables. Humans audit a sample." }
      ] },
      note: "Illustrative example." },
    { t: "check", q: { id: "c1-k1", type: "mcq", q: "A claims handler reads and approves every draft the AI writes. Which rung is this?", opts: ["AI-assisted", "Agentic, supervised", "Autonomous, bounded", "Rules automation"], why: "The human still decides and does the work. The AI only drafts." } },
    { t: "concept", kick: "Key idea", title: "The metric changes with the rung",
      body: ["Lower rungs count time. Higher rungs count outcomes.",
             "This matters because time saved is not money until someone converts it."],
      vis: { type: "steps", items: [
        { h: "FTE saved", t: "Rules automation" },
        { h: "Time saved per task", t: "AI-assisted" },
        { h: "Cost per outcome, cycle time", t: "Agentic", hot: true },
        { h: "Margin and revenue per process", t: "Autonomous" }
      ] },
      room: "Let's measure cost per resolved case, not hours saved." },
    { t: "concept", kick: "Under the hood", title: "Anatomy of an agent",
      body: ["Every enterprise agent has the same seven parts. If one is missing, it is a demo, not a worker."],
      vis: { type: "rows", rows: [
        ["Goal", "The outcome it owns"], ["Reasoning model", "Plans the next step"], ["Tools", "System access to read and act"],
        ["Memory", "Case context and history"], ["Guardrails", "Policies, limits, permissions"], ["Escalation", "A named human for exceptions"], ["Telemetry", "Every step logged for audit"]
      ] } },
    { t: "case", case: "novo" },
    { t: "concept", kick: "Design rule", title: "Set the rung per process, never company-wide",
      body: ["A firm is never on one rung. Payables may be agentic while pricing stays assisted.",
             "Gartner expects 15% of day-to-day work decisions to be made autonomously by 2028, up from almost none in 2024."],
      vis: { type: "stat", big: "15%", text: "of daily work decisions made autonomously by 2028 (Gartner)" },
      room: "Which rung is right for this process? Not: are we an AI company?" }
  ],
  quiz: [
    { id: "c1-q1", type: "mcq", q: "What is the real difference between a copilot and an agent?", opts: ["An agent pursues a goal and acts in systems", "An agent uses a bigger model", "A copilot cannot write text", "An agent never needs a human"], why: "The shift is from answering prompts to owning an outcome, with humans on exceptions." },
    { id: "c1-q2", type: "order", q: "Put the value metrics in order, from the lowest rung to the highest.", items: ["FTE saved", "Time saved per task", "Cost per outcome", "Margin and revenue per process"], why: "As autonomy rises, the metric moves from time to outcomes to P&L." },
    { id: "c1-q3", type: "mcq", q: "On the agentic, supervised rung, what does the human do?", opts: ["Supervises exceptions", "Approves every output", "Maintains the bot's rules", "Nothing at all"], why: "The agent executes. Humans step in when a case falls outside the guardrails." },
    { id: "c1-q4", type: "mcq", q: "An 'agent' has a goal, a model and tools, but no escalation path and no logs. What is it?", opts: ["A demo, not an enterprise worker", "A fully autonomous agent", "A rules bot", "A copilot"], why: "Guardrails, escalation and telemetry are what make an agent safe to put to work." },
    { id: "c1-q5", type: "mcq", q: "Novo Nordisk cut first drafts from 10+ weeks to about 10 minutes. What is the best way to value that?", opts: ["Days gained on time to market", "Writer hours saved", "Number of documents produced", "Tokens consumed"], why: "The document sat on the launch path. The value is earlier revenue, not cheaper writing." }
  ]
},
/* ------------------------------------------------------------------ 2 */
{
  id: "c2", title: "The Autonomy Dial", sub: "How much freedom each step should get", mins: 6,
  cards: [
    { t: "concept", kick: "Key idea", title: "Autonomy is a dial, not a switch",
      body: ["You do not make a whole process autonomous. You set a level for each step.",
             "One workflow can hold three different settings."],
      room: "Which steps can run alone, and which need a human signature?" },
    { t: "concept", kick: "The scale", title: "Five levels, A0 to A4",
      body: ["A practitioner framework. Each level says who acts and what humans check."],
      vis: { type: "stairs", items: [
        { l: "A0", n: "Suggest", t: "The human acts on the suggestion" },
        { l: "A1", n: "Draft", t: "Every output is approved" },
        { l: "A2", n: "Sample", t: "A sample of outputs is reviewed" },
        { l: "A3", n: "Exceptions", t: "Only exceptions go to humans" },
        { l: "A4", n: "Audit", t: "It acts, outcomes are audited later" }
      ] } },
    { t: "concept", kick: "The test", title: "Score each step on five things",
      body: ["Rate each from 1 to 5. A higher total suggests a higher starting level."],
      vis: { type: "rows", rows: [
        ["Reversibility", "Can a mistake be undone?"], ["Rule clarity", "Are the rules written down?"], ["Volume", "Does it repeat often?"],
        ["Data quality", "Can the agent get clean data?"], ["Exposure", "Regulatory, money or reputation risk. Scored in reverse."]
      ] } },
    { t: "concept", kick: "The override", title: "The cap rule",
      body: ["If exposure is high, autonomy is capped at A1. It does not matter how well the step scores elsewhere.",
             "High volume and clear rules do not make a risky decision safe."],
      vis: { type: "stat", big: "A1", text: "the ceiling for any high-exposure step, whatever the total score" },
      room: "It scores well, but exposure caps it. A human signs." },
    { t: "example", kick: "Example", title: "One claim, three settings",
      body: ["A single insurance claim passes through steps with different levels."],
      vis: { type: "steps", items: [
        { h: "Triage: A3", t: "The agent sorts claims. Odd ones go to a person." },
        { h: "Coverage check: A2", t: "The agent checks the policy. A sample is reviewed." },
        { h: "Payout decision: A1", t: "The agent recommends. A human approves every one.", hot: true }
      ] },
      note: "Illustrative example." },
    { t: "case", case: "allianz" },
    { t: "check", q: { id: "c2-k1", type: "mcq", q: "A step is high volume, has clear rules and clean data. But a mistake would breach a regulation. What level?", opts: ["A1: every output approved", "A3: exceptions only", "A4: act and audit", "A2: sample review"], why: "The cap rule. High exposure limits the step to A1, whatever the other scores say." } },
    { t: "concept", kick: "Over time", title: "Raise the dial on evidence",
      body: ["Start in shadow mode: the agent runs beside the human and its answers are compared.",
             "Then supervised mode. Then raise the level only after the evidence holds.",
             "Review autonomy levels every quarter."],
      vis: { type: "steps", items: [{ h: "Shadow", t: "Runs in parallel, takes no action" }, { h: "Supervised", t: "Acts, humans check" }, { h: "Raised", t: "Level goes up on proof", hot: true }] } }
  ],
  quiz: [
    { id: "c2-q1", type: "order", q: "Put the autonomy levels in order, from least to most freedom.", items: ["Suggest", "Draft", "Sample", "Exceptions", "Audit"], why: "A0 Suggest, A1 Draft, A2 Sample, A3 Exceptions, A4 Audit." },
    { id: "c2-q2", type: "mcq", q: "Which criterion is scored in reverse?", opts: ["Exposure", "Volume", "Rule clarity", "Reversibility"], why: "More regulatory, financial or reputational exposure means less autonomy." },
    { id: "c2-q3", type: "mcq", q: "In Allianz's Project Nemo, who makes the payout decision?", opts: ["A claims professional", "The payout agent", "The audit agent", "The planner agent"], why: "Seven agents prepare the claim. Payouts are never automated." },
    { id: "c2-q4", type: "mcq", cb: "c1", q: "Callback: which rung is the practical target for most enterprises today?", opts: ["Agentic, supervised", "Autonomous, bounded", "Rules automation", "AI-assisted"], why: "Agents act within guardrails and humans handle exceptions." },
    { id: "c2-q5", type: "mcq", cb: "c1", q: "Callback: which part of an agent makes its work auditable?", opts: ["Telemetry", "Memory", "Goal", "Reasoning model"], why: "Telemetry logs every step, which is what audit and control rely on." }
  ]
},
/* ------------------------------------------------------------------ 3 */
{
  id: "c3", title: "Why Pilots Stall", sub: "The gap between a pilot and the P&L", mins: 6,
  cards: [
    { t: "concept", kick: "The evidence", title: "Most pilots never reach the P&L",
      body: ["The numbers are consistent across studies."],
      vis: { type: "stats", items: [
        { b: "95%", t: "of GenAI pilots show no measurable P&L impact (MIT NANDA)" },
        { b: "27%", t: "of India GCCs report meaningful business impact (Infosys)" },
        { b: "~70%", t: "of India GCCs are stuck at pilot stage (Dell-Zinnov)" },
        { b: "40%+", t: "of agentic projects to be cancelled by end of 2027 (Gartner)" }
      ] },
      note: "MIT's test is narrow: measurable P&L impact within about six months." },
    { t: "concept", kick: "Key idea", title: "It is the operating model, not the model",
      body: ["The technology mostly works. What fails is everything around it: brittle workflows, weak integration, no measurement.",
             "GCCs that redesign the process around AI are about 30% more likely to see significant gains (Infosys)."],
      vis: { type: "stat", big: "30%", text: "more likely to see significant gains when the process is redesigned" },
      room: "Our risk is not the model. It is that we bolt it onto the old process." },
    { t: "concept", kick: "Diagnosis", title: "Six root causes and their counter-moves",
      body: ["Each cause has a structural fix."],
      vis: { type: "pairs", head: ["Root cause", "Counter-move"], rows: [
        ["AI layered on the old process", "Redesign the process AI-first"],
        ["No baseline or exit criteria", "Finance signs baselines and gates"],
        ["Token and control cost ignored", "Model unit cost at pilot"],
        ["Fragmented data, legacy systems", "Decide architecture early"],
        ["Roles left unchanged", "Redesign roles before scale"],
        ["Agent washing by vendors", "Test autonomy in shadow mode"]
      ] } },
    { t: "concept", kick: "Watch out", title: "Agent washing",
      body: ["Many products are relabelled chatbots or RPA. Gartner estimates only about 130 vendors offer genuine agentic capability.",
             "The test: can it complete the work on live volume, in shadow mode, against a human baseline?"],
      vis: { type: "stat", big: "~130", text: "genuine agentic vendors, by Gartner's estimate" } },
    { t: "concept", kick: "The math", title: "Agents eat tokens",
      body: ["A chat uses 1,000 to 2,000 tokens. An agentic workflow can use 10,000 to 500,000.",
             "So the cost of each outcome must be modelled from the pilot onward. Otherwise the bill arrives at scale."],
      vis: { type: "bars", items: [{ l: "Chat", v: "1K to 2K", w: 3 }, { l: "Agentic workflow", v: "10K to 500K", w: 100, hot: true }] },
      room: "What does one resolved case cost us in tokens?" },
    { t: "check", q: { id: "c3-k1", type: "mcq", q: "A vendor says its product is 'fully agentic'. What is the best test?", opts: ["Run it in shadow mode on live volume", "Ask for a longer demo", "Check how big the model is", "Read the brochure again"], why: "Shadow mode shows what it can really complete, compared with the human baseline." } },
    { t: "concept", kick: "GCC lens", title: "India's GCCs are at the centre of this",
      body: ["GCCs hold the high-volume, rule-bound work that agents target first. That makes them exposed and well placed at once."],
      vis: { type: "stats", items: [
        { b: "2,100+", t: "GCCs in India, about $98.4B FY26 revenue" },
        { b: "58%", t: "are investing in agentic AI" },
        { b: "55%", t: "of routine work is exposed to automation" },
        { b: "60%", t: "of the workforce needs reskilling by 2030" }
      ] },
      note: "From 2025 to 2026 GCC studies by Dell-Zinnov, EY and Infosys." },
    { t: "case", case: "klarna" }
  ],
  quiz: [
    { id: "c3-q1", type: "mcq", q: "Why do most AI pilots fail to reach the P&L?", opts: ["Integration, measurement and controls are under-designed", "The models are not accurate enough", "Employees refuse to use them", "Tokens are too expensive to pilot"], why: "The failure sits in the operating model around the technology." },
    { id: "c3-q2", type: "mcq", q: "What makes a GCC about 30% more likely to see significant gains?", opts: ["Redesigning the process around AI", "Buying more licences", "Running more pilots", "Hiring more data scientists"], why: "Layering AI on an old process optimises tasks, not outcomes." },
    { id: "c3-q3", type: "mcq", q: "What went wrong at Klarna?", opts: ["Cost was weighted too heavily and quality fell", "The bot could not handle volume", "Regulators shut it down", "Tokens cost more than agents"], why: "A cost-only case eroded quality. Humans were rehired." },
    { id: "c3-q4", type: "mcq", cb: "c2", q: "Callback: what does the cap rule say?", opts: ["High exposure limits autonomy to A1", "Autonomy rises one level per quarter", "Every agent needs five tools at most", "Pilots are capped at 90 days"], why: "High regulatory, financial or reputational exposure keeps a human approving every output." },
    { id: "c3-q5", type: "mcq", cb: "c1", q: "Callback: which metric fits the agentic rung?", opts: ["Cost per outcome and cycle time", "FTE saved", "Time saved per task", "Number of prompts"], why: "Outcome metrics are what make an agentic business case bankable." }
  ]
},
/* ------------------------------------------------------------------ 4 */
{
  id: "c4", title: "The Operating Model", sub: "Five layers, new roles and a control plane", mins: 8,
  cards: [
    { t: "concept", kick: "The blueprint", title: "Five layers make the model",
      body: ["Tap each layer. Each has one owner, artefacts that prove it exists, and KPIs that show it works."],
      vis: { type: "tabs", tabs: [
        { l: "L1 Value", rows: [["What", "Intake, sizing, prioritisation, benefits tracking"], ["Owner", "Business P&L lead"], ["Artefacts", "Use case register, business cases"], ["KPIs", "Net value, payback"]] },
        { l: "L2 Work", rows: [["What", "AI-first process maps, decision rights, autonomy levels"], ["Owner", "Process owner"], ["Artefacts", "To-be process, decision rights matrix"], ["KPIs", "Cycle time, straight-through rate"]] },
        { l: "L3 Agents", rows: [["What", "Identity, access, named manager, lifecycle"], ["Owner", "Agent product owner"], ["Artefacts", "Agent cards, access profiles"], ["KPIs", "Outcomes per agent, exception rate"]] },
        { l: "L4 Platform", rows: [["What", "Registry, tool catalogue, model routing, FinOps"], ["Owner", "AI platform lead"], ["Artefacts", "Reference architecture, registry"], ["KPIs", "Reuse rate, cost per outcome"]] },
        { l: "L5 Control", hot: true, rows: [["What", "Monitoring, audit trail, evals, kill switch"], ["Owner", "AI risk lead"], ["Artefacts", "Control library, eval suites"], ["KPIs", "Incidents, control pass rate"]] }
      ] } },
    { t: "concept", kick: "Key idea", title: "Business owns the top. Control spans everything.",
      body: ["L1 and L2 belong to the business. If technology teams own them, pilots optimise tasks instead of outcomes.",
             "L3 and L4 are run by the platform team.",
             "L5 is a control plane across all layers. It is not a phase at the end."],
      room: "Who in the business owns the value case? If it is IT, we have a problem." },
    { t: "concept", kick: "Organisation", title: "Hub and spoke",
      body: ["The hub builds things once. The spokes own the work."],
      vis: { type: "pairs", head: ["Hub: AI CoE or GCC", "Spokes: functions"], rows: [
        ["Platform and standards", "Use case ownership"], ["Evals and FinOps", "Agent supervisors"], ["Reusable agents", "Benefits delivery"]
      ] },
      note: "At BNY about 20,000 staff build agents on one central platform." },
    { t: "concept", kick: "People", title: "Six roles appear",
      body: ["The supervisor role is the one most often missed in workforce plans."],
      vis: { type: "rows", rows: [
        ["Agent product owner", "Backlog and outcome KPIs"], ["Workflow architect", "AI-first process and decision rights"], ["Agent supervisor", "Exceptions, quality, feedback"],
        ["AI controls lead", "Risk, evals, audit evidence"], ["AgentOps engineer", "Deployment, monitoring, cost"], ["Value lead", "Baselines and benefits tracking"]
      ] } },
    { t: "concept", kick: "People", title: "The human role shifts",
      body: ["People move from doing the work to designing it."],
      vis: { type: "steps", items: [{ h: "Doer", t: "Does the task" }, { h: "Reviewer", t: "Checks the agent's output" }, { h: "Supervisor", t: "Handles exceptions, coaches agents" }, { h: "Designer", t: "Designs the work and owns the outcome", hot: true }] } },
    { t: "concept", kick: "Lifecycle", title: "An agent's life has five stages",
      body: ["Each stage has someone responsible (R) and someone accountable (A)."],
      vis: { type: "steps", items: [
        { h: "1 Propose", t: "R: business team. A: value lead" },
        { h: "2 Build", t: "R: AgentOps. A: agent product owner" },
        { h: "3 Approve to run", t: "R: controls lead. A: process owner", hot: true },
        { h: "4 Run", t: "R: agent supervisor. A: agent product owner" },
        { h: "5 Retire", t: "R: AgentOps. A: agent product owner" }
      ] } },
    { t: "case", case: "bny" },
    { t: "concept", kick: "Governance", title: "Six risks, six controls",
      body: ["Once an agent can act, the risk moves from a wrong answer to a wrong action. So controls mirror those for an employee with system access."],
      vis: { type: "pairs", head: ["Risk", "Control"], rows: [
        ["Wrong output", "Grounding, evals, review thresholds"],
        ["Unauthorised action", "Least-privilege access, action limits"],
        ["Data leakage", "Data boundaries, sandbox"],
        ["Drift", "Continuous monitoring, regression evals"],
        ["Cost overrun", "Per-agent budgets, FinOps alerts"],
        ["Accountability gap", "Named human manager per agent"]
      ] },
      room: "Would we give a new joiner this access with no manager? Then not an agent either." },
    { t: "concept", kick: "Governance", title: "Control runs on a rhythm",
      body: ["Governance is a cadence, not a one-time sign-off."],
      vis: { type: "rows", rows: [["Live", "Monitoring, alerts, kill switch"], ["Weekly", "Exception and incident review"], ["Monthly", "Eval regression, drift checks"], ["Quarterly", "Audit and autonomy review"]] } },
    { t: "check", q: { id: "c4-k1", type: "mcq", q: "An agent made a payment beyond its mandate. Which control was missing?", opts: ["Least-privilege access and action limits", "Regression evals", "Model routing", "A reuse library"], why: "Unauthorised action is prevented by tight permissions and limits on what the agent may do." } },
    { t: "case", case: "goldman" }
  ],
  quiz: [
    { id: "c4-q1", type: "sort", q: "Hub or spoke? Sort each item.", buckets: ["Hub", "Spoke"], items: [{ t: "Platform and standards", b: 0 }, { t: "Use case ownership", b: 1 }, { t: "Evals and FinOps", b: 0 }, { t: "Agent supervisors", b: 1 }, { t: "Benefits delivery", b: 1 }], why: "The hub builds once and sets standards. The spokes own the work and the benefits." },
    { id: "c4-q2", type: "mcq", q: "Who should own L1, the value portfolio?", opts: ["The business P&L lead", "The AI platform lead", "The AI risk lead", "The vendor"], why: "If the business does not own value, pilots optimise tasks instead of outcomes." },
    { id: "c4-q3", type: "order", q: "Put the agent lifecycle in order.", items: ["Propose", "Build", "Approve to run", "Run", "Retire"], why: "Propose, build, approve to run, run, retire. Controls sign off before an agent goes live." },
    { id: "c4-q4", type: "mcq", q: "What does BNY give each digital employee?", opts: ["A login and a human manager", "A budget and a bonus", "Full system access", "A separate network"], why: "Agents are managed like a workforce, with identity, access and accountability." },
    { id: "c4-q5", type: "mcq", cb: "c3", q: "Callback: why must token cost be modelled at the pilot?", opts: ["An agentic workflow can use up to 500K tokens", "Tokens are free until production", "Vendors bill tokens yearly", "Pilots use more tokens than production"], why: "Chats use 1K to 2K tokens. Agentic workflows use 10K to 500K, so unit cost matters early." },
    { id: "c4-q6", type: "mcq", cb: "c2", q: "Callback: in shadow mode, what does the agent do?", opts: ["Runs in parallel and takes no action", "Acts while humans sample outputs", "Handles only exceptions", "Trains the model"], why: "Shadow mode compares the agent's answers with the human's before it is allowed to act." }
  ]
},
/* ------------------------------------------------------------------ 5 */
{
  id: "c5", title: "The Two Ledgers", sub: "Where cost and revenue value come from", mins: 8,
  cards: [
    { t: "concept", kick: "Key idea", title: "Value sits on two ledgers",
      body: ["The cost ledger: doing today's work for less.", "The revenue ledger: launching sooner, selling better, deciding sharper.",
             "Cost value arrives first. Revenue value is bigger at scale, but slower to prove."],
      room: "Show me both ledgers. A cost-only case is a Klarna waiting to happen." },
    { t: "concept", kick: "Cost ledger", title: "Six cost levers, with proof",
      body: ["Cost value comes from redesigning a whole flow for straight-through processing. Speeding up one task is not enough."],
      vis: { type: "rows", rows: [
        ["Back-office processing", "Goldman: agents on trade accounting and onboarding"],
        ["Document production", "Novo Nordisk: report writing time down about 90%"],
        ["Engineering throughput", "Walmart: about 4M developer hours saved"],
        ["IT and employee service", "ServiceNow: about $100M operating cost saved (2025)"],
        ["Legal review", "BNY: review time down about 75%"],
        ["Operations capacity", "JPMorgan: productivity impact doubled, about 3% to 6%"]
      ] } },
    { t: "concept", kick: "Revenue ledger", title: "Six revenue levers, with proof",
      body: ["Revenue comes through speed, better-equipped sellers and sharper decisions."],
      vis: { type: "rows", rows: [
        ["Speed to market", "Novo Nordisk: about $15M per day sooner (vendor estimate)"],
        ["Seller productivity", "Lumen: about 4 hours a week back per seller"],
        ["Advisor augmentation", "JPMorgan private bank: gross sales up about 20%"],
        ["Merchandising decisions", "Walmart: agent traces stockout root causes"],
        ["Faster onboarding", "Goldman: onboarding agents shorten time to first revenue"],
        ["Outcome-priced offers", "Services sold per outcome become new revenue lines"]
      ] } },
    { t: "concept", kick: "Staging rule", title: "Revenue lags cost",
      body: ["Productivity shows up first. In 2025 Walmart's CEO said AI was not yet lifting top-line sales, despite large gains elsewhere.",
             "So promise cost value early, and set revenue targets only once the workflow is running at scale."],
      room: "Cost in year one. Revenue targets once we are at scale." },
    { t: "concept", kick: "The trap", title: "Hours saved are not money",
      body: ["Saved hours reach the P&L only through one of four routes."],
      vis: { type: "rows", rows: [["Hiring avoided", "Growth absorbed without new heads"], ["Capacity redeployed", "People moved to revenue work"], ["Cycle time cashed", "Faster close, faster cash, earlier launch"], ["Price or margin changed", "Work sold or priced differently"]] },
      room: "Which of the four routes turns these hours into P&L?" },
    { t: "concept", kick: "The formula", title: "Net value",
      body: ["Supervision is the line most often left out. It is the exception rate multiplied by the cost of human handling."],
      vis: { type: "eq", items: [{ s: "", l: "Gross benefit", t: "Hours converted to P&L", pos: true }, { s: "−", l: "Run cost", t: "Tokens, platform, integration" }, { s: "−", l: "Supervision", t: "Exception rate x handling cost" }, { s: "−", l: "Controls", t: "Evals, monitoring, audit" }, { s: "=", l: "Net value", t: "Booked, not projected", total: true }] } },
    { t: "example", kick: "Worked example", title: "The economics of one case",
      body: ["Made-up numbers to show the method. A human handles a case for $6.00."],
      vis: { type: "eq", items: [{ s: "", l: "$6.00", t: "Human cost per case", pos: true }, { s: "−", l: "$0.40", t: "Agent run cost" }, { s: "−", l: "$0.90", t: "Supervision: 15% exceptions x $6.00" }, { s: "−", l: "$0.20", t: "Controls" }, { s: "=", l: "$4.50", t: "Net saving per case", total: true }] },
      note: "Illustrative numbers. Fill in your own from pilot data." },
    { t: "check", q: { id: "c5-k1", type: "mcq", q: "Human cost is $5.00 a case. Agent run cost is $0.50. Exceptions are 20% and cost $5.00 each to handle. Controls cost $0.25. Net saving per case?", opts: ["$3.25", "$4.25", "$4.50", "$2.25"], why: "$5.00 minus $0.50 run, minus $1.00 supervision (20% x $5.00), minus $0.25 controls = $3.25." } },
    { t: "case", case: "jpm" },
    { t: "concept", kick: "Commercials", title: "Three ways agents are priced",
      body: ["Outcome pricing is much discussed and still rare. It needs verified baselines, which most buyers do not have."],
      vis: { type: "rows", rows: [["Per seat", "A licence per user"], ["Per usage", "Per call or per token"], ["Per outcome", "Per resolved case, transaction or share of savings"]] },
      note: "In Orb's 2026 sample only about 4% of billing models were outcome-based. Everest sees it scaling in business-process services." },
    { t: "case", case: "lumen" },
    { t: "case", case: "servicenow" }
  ],
  quiz: [
    { id: "c5-q1", type: "sort", q: "Cost ledger or revenue ledger? Sort each lever.", buckets: ["Cost", "Revenue"], items: [{ t: "Legal review time", b: 0 }, { t: "Speed to market", b: 1 }, { t: "Back-office processing", b: 0 }, { t: "Advisor augmentation", b: 1 }, { t: "IT ticket resolution", b: 0 }], why: "Cost levers make today's work cheaper. Revenue levers bring money in sooner or in greater amounts." },
    { id: "c5-q2", type: "mcq", q: "A pilot saves 10,000 hours. When does that count as value?", opts: ["When it is converted, for example into hiring avoided", "Immediately, at the average hourly rate", "When the vendor confirms it", "When employees report feeling faster"], why: "Hours must pass through a conversion route to reach the P&L." },
    { id: "c5-q3", type: "mcq", q: "Which cost line is most often left out of the business case?", opts: ["Supervision of exceptions", "Software licences", "Cloud hosting", "Project management"], why: "Exception rate multiplied by handling cost can be a large share of the saving." },
    { id: "c5-q4", type: "mcq", q: "What does the Walmart example teach about revenue?", opts: ["It lags productivity, so stage the targets", "Agents cannot create revenue", "Revenue comes before cost savings", "Retail is a poor fit for agents"], why: "Productivity was real, but the top line had not yet moved in 2025." },
    { id: "c5-q5", type: "mcq", cb: "c4", q: "Callback: which layer of the model is a control plane across all others?", opts: ["L5 Trust and control", "L1 Value portfolio", "L3 Agent workforce", "L4 Orchestration"], why: "L5 spans every layer. It is not a final phase." },
    { id: "c5-q6", type: "mcq", cb: "c3", q: "Callback: what is agent washing?", opts: ["Relabelling chatbots or RPA as agents", "Cleaning an agent's training data", "Retiring unused agents", "Auditing agent logs"], why: "Gartner estimates only about 130 vendors offer genuine agentic capability." }
  ]
},
/* ------------------------------------------------------------------ 6 */
{
  id: "c6", title: "The Use Case Atlas", sub: "Where agents pay, by journey and by function", mins: 8,
  cards: [
    { t: "concept", kick: "Key idea", title: "Look for the queue",
      body: ["Agents create the most value at hand-offs: places where work waits for a document, a check or a decision.",
             "Do not ask 'where can we use AI?' Ask 'where does work sit waiting?'"],
      room: "Where does work queue up in this journey?" },
    { t: "usecase", kick: "Customer side", title: "Six journeys, six kinds of agent work",
      body: ["Tap through the product and service lifecycle. The same six journeys apply in banking, insurance, retail, pharma and telecom."],
      vis: { type: "tabs", tabs: [
        { l: "Create", rows: [["Agent work", "Research synthesis, regulatory documents, test generation"], ["KPI", "Time to market"], ["Proof", "Novo Nordisk: first draft in about 10 minutes"]] },
        { l: "Acquire", rows: [["Agent work", "Prospect research, lead qualification, proposal drafts"], ["KPI", "Selling time, conversion"], ["Proof", "Lumen: about 4 hours a week per seller"]] },
        { l: "Onboard", rows: [["Agent work", "Document collection, KYC screening, risk scoring"], ["KPI", "Time to onboard"], ["Proof", "Goldman: onboarding agents"]] },
        { l: "Fulfil", rows: [["Agent work", "Order exceptions, stockout root cause, replanning"], ["KPI", "In-stock rate, on time in full"], ["Proof", "Walmart: merchant agent"]] },
        { l: "Service", rows: [["Agent work", "Triage, coverage and fraud checks, payout recommendation"], ["KPI", "Claim cycle time"], ["Proof", "Allianz: seven agents, about 80% faster"]] },
        { l: "Grow", rows: [["Agent work", "Churn signals, next-best offer, advisor prep"], ["KPI", "Retention, wallet share"], ["Proof", "JPMorgan: gross sales up about 20%"]] }
      ] } },
    { t: "usecase", kick: "Inside the firm", title: "Seven internal functions",
      body: ["Tap each function for its agent work, KPI and proof."],
      vis: { type: "tabs", tabs: [
        { l: "HR", rows: [["Agent work", "Employee queries, manager transactions, onboarding"], ["KPI", "Resolution rate"], ["Proof", "IBM AskHR: about 94% resolved instantly"]] },
        { l: "F&A close", rows: [["Agent work", "Journal validation, reconciliations, intercompany, close monitoring"], ["KPI", "Days to close"], ["Proof", "Goldman, and Genpact's record-to-report agents"]] },
        { l: "F&A pay/collect", rows: [["Agent work", "Invoice exceptions, cash application, collections priority"], ["KPI", "Cost per invoice, days sales outstanding"], ["Proof", "Genpact accounts payable agents"]] },
        { l: "Procurement", rows: [["Agent work", "Tail-spend negotiation, supplier onboarding, contract compliance"], ["KPI", "Savings, cycle time"], ["Proof", "Walmart and Pactum: about 68% of deals closed"]] },
        { l: "IT", rows: [["Agent work", "Ticket triage, automated fixes, code remediation"], ["KPI", "Cost per ticket, time to resolve"], ["Proof", "ServiceNow: about $500M annualised value"]] },
        { l: "Legal", rows: [["Agent work", "Contract review, policy checks, regulatory monitoring"], ["KPI", "Review time"], ["Proof", "BNY: review time down about 75%"]] },
        { l: "Supply chain", rows: [["Agent work", "Disruption simulation, replenishment, demand sensing"], ["KPI", "Forecast accuracy"], ["Proof", "Walmart: digital twins and agents"]] }
      ] } },
    { t: "concept", kick: "Why", title: "Internal functions prove fastest",
      body: ["Their work is high-volume and rule-bound. Most of all, it is already measured: tickets, invoices, close days, review times.",
             "A baseline that already exists makes the business case easy to prove."],
      room: "Start where we already count the work." },
    { t: "case", case: "askhr" },
    { t: "case", case: "pactum" },
    { t: "example", kick: "Method", title: "Picking your first three",
      body: ["A simple filter for a long list of ideas. Keep the ones that pass all four."],
      vis: { type: "rows", rows: [["High volume", "Enough cases to matter"], ["Clear rules", "A written policy or playbook exists"], ["Measured today", "A baseline is already tracked"], ["Reversible", "A mistake can be undone"]] },
      note: "A practitioner heuristic, linked to the suitability score in Chapter 2." },
    { t: "check", q: { id: "c6-k1", type: "mcq", q: "Which is the best first use case?", opts: ["Invoice exception handling in accounts payable", "Final approval of large claims payouts", "Brand campaign ideation", "Setting next year's strategy"], why: "High volume, clear rules, measured today and reversible. The others fail on exposure or measurability." } },
    { t: "concept", kick: "GCC lens", title: "The GCC as agent factory",
      body: ["HR, finance, procurement and IT anchor most GCC portfolios. These are exactly the functions where agents prove fastest.",
             "That makes the GCC a natural home for the hub: the agent factory and control tower for the parent firm.",
             "The mandate shifts from delivering to a service level to owning outcomes."],
      room: "The GCC should not wait to be automated. It should run the agent factory." }
  ],
  quiz: [
    { id: "c6-q1", type: "mcq", q: "Where do agents create the most value in a journey?", opts: ["At hand-offs where work waits", "At the most creative step", "Wherever the newest tool fits", "Only in customer service"], why: "Value sits where work queues for a document, a check or a decision." },
    { id: "c6-q2", type: "mcq", q: "Why do internal functions prove returns fastest?", opts: ["Their work is already measured", "They have the biggest budgets", "They have no regulation", "They need no integration"], why: "Existing baselines for tickets, invoices and close days make value easy to prove." },
    { id: "c6-q3", type: "mcq", q: "What did Walmart's negotiation agent make possible?", opts: ["Negotiating with the long tail of small suppliers", "Replacing all category buyers", "Removing supplier contracts", "Setting shelf prices"], why: "It reaches about 2,000 suppliers at once, work buyers never had time for." },
    { id: "c6-q4", type: "sort", q: "Customer journey or internal function? Sort each use case.", buckets: ["Journey", "Function"], items: [{ t: "KYC screening at onboarding", b: 0 }, { t: "Journal entry validation", b: 1 }, { t: "Claims triage", b: 0 }, { t: "IT ticket fixes", b: 1 }, { t: "Next-best offer", b: 0 }], why: "Journeys follow the customer lifecycle. Functions are the firm's internal engines." },
    { id: "c6-q5", type: "mcq", cb: "c5", q: "Callback: name a route that turns saved hours into P&L.", opts: ["Hiring avoided", "Higher employee satisfaction", "More pilots launched", "A bigger AI budget"], why: "The four routes: hiring avoided, capacity redeployed, cycle time cashed, price or margin changed." },
    { id: "c6-q6", type: "mcq", cb: "c4", q: "Callback: in hub and spoke, who owns use cases and benefits?", opts: ["The spokes, meaning the business functions", "The hub", "The vendor", "The AI risk lead"], why: "The hub builds the platform once. The spokes own the work." }
  ]
},
/* ------------------------------------------------------------------ 7 */
{
  id: "c7", title: "The Tollgates", sub: "Releasing money only against proof", mins: 7,
  cards: [
    { t: "concept", kick: "Key idea", title: "Funding follows proof",
      body: ["A tollgate is a checkpoint. The next stage is funded only when this stage proves its point.",
             "Four gates take an idea from diagnosis to an industrial scale."],
      room: "What evidence releases the next tranche?" },
    { t: "concept", kick: "The path", title: "Four tollgates",
      body: ["Tap each gate. Durations and thresholds are practitioner heuristics. Adjust them for each client."],
      vis: { type: "tabs", tabs: [
        { l: "TG0 Diagnose", rows: [["Time", "4 to 6 weeks"], ["Objective", "Find where agents pay"], ["Activities", "Process mining, value sizing, autonomy scoring, data readiness"], ["Deliverables", "Use case register, baselines, ranked list of 10 to 15"], ["Gate", "Finance signs the baselines. Top three clear 3x value to cost."]] },
        { l: "TG1 Pilot", rows: [["Time", "8 to 12 weeks"], ["Objective", "Prove accuracy and unit cost"], ["Activities", "AI-first redesign, decision rights, shadow then supervised"], ["Deliverables", "To-be process, agent card, eval suite, cost model"], ["Gate", "Accuracy at human parity. Exceptions within threshold. Unit cost known."]] },
        { l: "TG2 Scale", rows: [["Time", "3 to 6 months"], ["Objective", "Prove net value at volume"], ["Activities", "Integration, role redesign, FinOps, controls audit"], ["Deliverables", "Production runbook, role maps, benefits tracker"], ["Gate", "Net value positive after all costs. Controls audited."]] },
        { l: "TG3 Industrialise", rows: [["Time", "6 to 12 months"], ["Objective", "Make delivery repeatable"], ["Activities", "Agent factory, reusable components, outcome contracts"], ["Deliverables", "Agent registry, reuse library, P&L reporting"], ["Gate", "Benefits in budgets. Reuse tracked. Kill switch tested."]] }
      ] } },
    { t: "concept", kick: "The pack", title: "One evidence pack, rising proof",
      body: ["The same six metrics are checked at every gate. Only the required level of proof goes up."],
      vis: { type: "tabs", tabs: [
        { l: "TG1", rows: [["Accuracy vs human", "Parity in shadow mode"], ["Exception rate", "Within threshold"], ["Unit cost", "Modelled"], ["Supervisor adoption", "Pilot team"], ["Net value", "Projected"], ["Control incidents", "None critical"]] },
        { l: "TG2", rows: [["Accuracy vs human", "Sustained at volume"], ["Exception rate", "Trending down"], ["Unit cost", "Measured"], ["Supervisor adoption", "Target users live"], ["Net value", "Positive"], ["Control incidents", "Audited"]] },
        { l: "TG3", rows: [["Accuracy vs human", "Monitored live"], ["Exception rate", "Stable"], ["Unit cost", "Benchmarked"], ["Supervisor adoption", "Business as usual"], ["Net value", "Booked in P&L"], ["Control incidents", "Quarterly review"]] }
      ] } },
    { t: "concept", kick: "Diagnosis", title: "Five ways a gate is failed",
      body: ["Each has a structural fix, not a heroic one."],
      vis: { type: "pairs", head: ["Failure mode", "Mitigation"], rows: [
        ["Drifting pilot", "Decide or stop at 90 days"], ["Agent washing", "Test autonomy in shadow mode"], ["Token bill shock", "Per-agent budgets and alerts"],
        ["Supervisors overwhelmed", "Tune exception thresholds"], ["Benefits never booked", "Finance owns the tracker"]
      ] } },
    { t: "concept", kick: "Benchmark", title: "Speed separates winners",
      body: ["Mid-market firms go from pilot to full implementation in about 90 days. Large enterprises often take nine months or more (MIT NANDA).",
             "Fixed gates and fixed evidence are how a large firm gets its speed back."],
      vis: { type: "bars", items: [{ l: "Mid-market", v: "about 90 days", w: 33, hot: true }, { l: "Large enterprise", v: "9 months or more", w: 100 }] } },
    { t: "check", q: { id: "c7-k1", type: "mcq", q: "A pilot is at week 14 with no accuracy parity. The team asks for three more months. Best call?", opts: ["Decide or stop: the evidence is not there", "Extend it, the sunk cost is high", "Scale it anyway to learn faster", "Switch vendors and restart quietly"], why: "A drifting pilot is stopped or re-scoped at about 90 days, and funding moves to proven workflows." } },
    { t: "case", case: "walmart" },
    { t: "concept", kick: "Patterns", title: "Five patterns across every case",
      body: ["Look back at the case files you collected. The same five things repeat."],
      vis: { type: "rows", rows: [["1", "Rule-heavy work goes first"], ["2", "Agents get identity and managers"], ["3", "Platform before proliferation"], ["4", "Revenue lags cost"], ["5", "Humans keep the final say"]] },
      room: "Five patterns from the leaders. Which ones are we missing?" }
  ],
  quiz: [
    { id: "c7-q1", type: "order", q: "Put the tollgates in order.", items: ["Diagnose", "Pilot", "Scale", "Industrialise"], why: "TG0 Diagnose, TG1 Pilot, TG2 Scale, TG3 Industrialise." },
    { id: "c7-q2", type: "mcq", q: "What must be true to pass TG0?", opts: ["Finance has signed the baselines", "The agent is live in production", "Benefits are in the budget", "The kill switch is tested"], why: "Without a signed baseline, no later benefit can be proven." },
    { id: "c7-q3", type: "mcq", q: "At TG2, what should 'net value' look like?", opts: ["Positive, after all costs, at volume", "Projected in a model", "Booked in the P&L", "Not yet measured"], why: "TG1 projects it, TG2 proves it positive, TG3 books it." },
    { id: "c7-q4", type: "mcq", q: "Who should own the benefits tracker?", opts: ["Finance", "The vendor", "The pilot team", "The AI platform lead"], why: "Benefits that Finance does not own are rarely booked." },
    { id: "c7-q5", type: "mcq", cb: "c6", q: "Callback: why is the GCC a natural agent factory?", opts: ["It already runs the functions where agents prove fastest", "It has the largest marketing budget", "It is exempt from governance", "It owns customer pricing"], why: "HR, finance, procurement and IT are high-volume, rule-bound and measured." },
    { id: "c7-q6", type: "mcq", cb: "c5", q: "Callback: supervision cost equals what?", opts: ["Exception rate x handling cost", "Token cost x volume", "Licence cost per seat", "Gross benefit minus controls"], why: "It is the cost of humans handling what the agent cannot." }
  ]
},
/* ------------------------------------------------------------------ 8 */
{
  id: "c8", boss: true, title: "Boss Level: Meridian", sub: "Run a full programme, one decision at a time", mins: 8,
  cards: [
    { t: "concept", kick: "Your brief", title: "You are the transformation lead",
      body: ["Meridian Group is a made-up mid-size insurer with a 3,000-person GCC in Pune.",
             "The CEO has seen the headlines and wants results. You have ten decisions to make.",
             "Everything you need is in the seven chapters behind you. Score 70% or more to pass."],
      vis: { type: "stats", items: [{ b: "10", t: "decisions to make" }, { b: "70%", t: "needed to pass" }] },
      note: "Meridian is fictional. Any resemblance to a real company is accidental." }
  ],
  quiz: [
    { id: "c8-q1", type: "mcq", cb: "c7", ctx: "Day 1. The CEO says: 'I want agents everywhere in six months.'", q: "What is your first move?", opts: ["Run a diagnosis: baselines and a ranked list signed by Finance", "Buy an enterprise agent platform", "Launch 20 pilots at once", "Announce a headcount target"], why: "TG0 first. Without signed baselines and a ranked portfolio, nothing later can be proven." },
    { id: "c8-q2", type: "mcq", cb: "c6", ctx: "Three ideas are on the table.", q: "Which goes first?", opts: ["Invoice exceptions in accounts payable", "Final approval of motor claim payouts", "Brand campaign ideation", "All three in parallel"], why: "High volume, clear rules, measured today and reversible. Payout approval is high exposure. Ideation is hard to measure." },
    { id: "c8-q3", type: "mcq", cb: "c2", ctx: "The claims payout step scores high on volume and rule clarity. Regulatory exposure is also high.", q: "What autonomy level do you set?", opts: ["A1: a human approves every payout", "A3: exceptions only", "A4: act and audit", "A2: sample review"], why: "The cap rule. High exposure limits the step to A1." },
    { id: "c8-q4", type: "mcq", cb: "c3", ctx: "A vendor demo shows a 'fully autonomous' claims agent.", q: "How do you test the claim?", opts: ["Shadow mode on live volume against the human baseline", "A second, longer demo", "A reference call with their best customer", "Sign and find out"], why: "Shadow mode is the cure for agent washing." },
    { id: "c8-q5", type: "sort", cb: "c4", ctx: "You are setting up the organisation.", q: "Hub or spoke? Assign each responsibility.", buckets: ["Hub", "Spoke"], items: [{ t: "Agent platform and registry", b: 0 }, { t: "Supervising claims agents", b: 1 }, { t: "Eval standards", b: 0 }, { t: "Delivering the AP savings", b: 1 }], why: "The Pune GCC runs the hub. The business functions own supervision and benefits." },
    { id: "c8-q6", type: "mcq", cb: "c5", ctx: "Pilot data: human cost $4.00 a case. Agent run cost $0.30. Exceptions 25% at $4.00 each. Controls $0.20.", q: "What is the net saving per case?", opts: ["$2.50", "$3.50", "$3.70", "$1.50"], why: "$4.00 minus $0.30, minus $1.00 supervision (25% x $4.00), minus $0.20 = $2.50." },
    { id: "c8-q7", type: "mcq", cb: "c5", ctx: "The pilot saves 40% of hours in accounts payable. The CFO asks: 'Where is the money?'", q: "What is the honest answer?", opts: ["It appears when hours are converted, such as hiring avoided", "It is already in the P&L", "Multiply hours by the average rate", "Savings cannot be measured for AI"], why: "Hours need a conversion route, and run, supervision and control costs are netted off." },
    { id: "c8-q8", type: "mcq", cb: "c4", ctx: "An agent posts a wrong payment.", q: "Who is accountable?", opts: ["The agent's named human manager", "The agent itself", "The model vendor", "Nobody, it was an AI error"], why: "Every agent has a named manager. Humans keep final accountability." },
    { id: "c8-q9", type: "mcq", cb: "c7", ctx: "A second pilot is at week 14. It has not reached accuracy parity. The team wants three more months.", q: "What do you do?", opts: ["Stop or re-scope, and move the funding", "Extend, since so much is already spent", "Scale it to gather more data", "Lower the accuracy bar"], why: "Decide or stop at about 90 days. Funding moves to proven workflows." },
    { id: "c8-q10", type: "mcq", cb: "c5", ctx: "The board asks for a revenue target from agents in year one.", q: "How do you respond?", opts: ["Commit cost value now and stage revenue targets for scale", "Promise 10% revenue growth", "Say agents cannot drive revenue", "Move the whole budget to sales agents"], why: "Revenue lags cost. Targets are set once workflows run at scale." }
  ]
}
];

const GLOSSARY = [
  ["Agent", "Software that takes a goal, plans steps, uses tools and completes work, with a human on exceptions."],
  ["Agent washing", "Relabelling a chatbot or RPA tool as an agent."],
  ["Shadow mode", "The agent runs beside the human and takes no action. Its answers are compared."],
  ["Straight-through processing", "A case completed end to end with no human touch. Often shortened to STP."],
  ["Exception rate", "The share of cases the agent hands to a human."],
  ["Unit cost per outcome", "The full cost of one completed case: tokens, platform, supervision and controls."],
  ["Eval", "A repeatable test of an agent's quality, run before release and on a schedule."],
  ["Kill switch", "A tested way to stop an agent at once."],
  ["FinOps", "Tracking and controlling AI spend, including per-agent token budgets."],
  ["Hub and spoke", "The centre builds the platform once. Business teams build and run agents near the work."],
  ["Tollgate", "A checkpoint where funding is released only against agreed evidence."],
  ["Cap rule", "High exposure limits a step to autonomy level A1, whatever its other scores."],
  ["Outcome pricing", "Paying per resolved case, transaction or share of savings instead of per seat."],
  ["GCC", "Global capability centre: a firm's own offshore hub for technology and operations."],
  ["Agent card", "A one-page record of an agent's goal, tools, autonomy level, manager and limits."],
  ["Drift", "An agent's accuracy decaying over time, often after a process change."],
  ["R2R, P2P, O2C", "Record to report, procure to pay, order to cash: the three core finance flows."],
  ["KYC", "Know your customer: identity and risk checks at onboarding."]
];

const SOURCES = [
  ["MIT NANDA, The GenAI Divide (via CloudZero)", "https://www.cloudzero.com/blog/generative-ai-roi"],
  ["Infosys, AI-First GCC Index 2026", "https://www.infosys.com/newsroom/features/2026/ai-first-gcc-index2026.html"],
  ["Dell-Zinnov, India GCCs (AIM)", "https://analyticsindiamag.com/ai-news/indias-gccs-face-ai-shift-as-nearly-70-remain-stuck-at-pilot-stage-report"],
  ["EY India GCC Pulse Survey 2025", "https://letsdatascience.com/news/india-gccs-adopt-agentic-ai-at-scale-f46e84e0"],
  ["Gartner, agentic AI cancellations", "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"],
  ["Gartner, autonomous decisions by 2028 (CRN)", "https://www.crn.in/?p=72052"],
  ["McKinsey, The agentic organization", "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-agentic-organization-contours-of-the-next-paradigm-for-the-ai-era"],
  ["Orb, AI agent pricing trends", "https://www.withorb.com/blog/ai-agent-pricing-trends"],
  ["Everest via CIO.com, outcome pricing", "https://www.cio.com/article/4196348/your-service-vendors-are-being-rebuilt-around-ai.html"],
  ["Genpact, agentic record to report", "https://www.genpact.com/insight/agentic-ai-for-record-to-report-building-a-connected-financial-close"],
  ["Goldman Sachs and Anthropic agents", "https://www.storyboard18.com/amp/brand-makers/goldman-sachs-teams-up-with-anthropic-to-build-ai-co-workers-aims-to-automate-complex-roles-89131.htm"],
  ["BNY digital employees (Microsoft WorkLab)", "https://www.microsoft.com/en-us/worklab/the-making-of-a-frontier-firm-how-ai-is-redesigning-work-at-bny"],
  ["BNY Eliza (OpenAI)", "https://openai.com/index/bny/"],
  ["JPMorgan agents and sales lift", "https://www.briefs.co/news/jpmorgan-ai-agents-work-for-hours/"],
  ["JPMorgan productivity impact (Nasdaq)", "https://www.nasdaq.com/articles/how-ai-impacting-productivity-jpm-bac-c-others"],
  ["Novo Nordisk NovoScribe (Anthropic)", "https://claude.com/resources/guides/claude-science-product-guide/building-an-ai-first-life-sciences-organization"],
  ["Walmart super agents (Constellation)", "https://www.constellationr.com/blog-news/insights/walmart-expects-ai-efforts-drive-sales-growth"],
  ["Walmart and Pactum (PYMNTS)", "https://www.pymnts.com/?p=1494127"],
  ["IBM AskHR (IBM iX)", "https://ibmix.de/en/gen-ai-lab/askhr-agentic-ai/"],
  ["Allianz Project Nemo", "https://www.allianz.com/en/mediacenter/news/articles/251103-when-the-storm-clears-so-should-the-claim-queue.html"],
  ["ServiceNow internal AI value (BERI)", "https://www.beri.net/article/servicenow-500m-ai-roi-doubles-savings-2026"],
  ["Lumen and Copilot (Microsoft)", "https://news.microsoft.com/source/features/digital-transformation/the-only-way-how-copilot-is-helping-propel-an-evolution-at-lumen-technologies/"],
  ["Klarna reversal (Mind the Product)", "https://mindtheproduct.com/klarna-goes-on-recruitment-drive-after-ditching-ai-first-policy"]
];
