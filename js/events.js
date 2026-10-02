/**
 * COMPUTER ASSOCIATION 25 YEARS SILVER JUBILEE × BITFEST ARCHIVE
 * Flagship Event Registry, Schedule Matrix & Dynamic Modal System
 * Source: Official BITFEST 2026 Event Catalog & Schedule (Pillai University)
 */

const BITFEST_EVENTS = [
  // --- DAY 1 : 09TH SEPTEMBER 2026 ---
  {
    id: "POW-01",
    slug: "prisoners-of-war",
    title: "Prisoners of War",
    day: "Day 1 (09th September 2026)",
    dayTag: "day1",
    time: "11:00 AM – 6:00 PM",
    place: "Location will be informed",
    category: "non-tech",
    categoryLabel: "Campus Adventure & Mystery",
    teamSize: "4 GRP (4 Members Group)",
    teamFormatShort: "4 GRP",
    entryFee: "₹200 / Group",
    prize: "1st Place: ₹1,000",
    prizeDetails: "1st Place: ₹1,000 + Physical Certificate<br>All others: E-Certificate",
    certificatesSummary: "1st Place: Physical Certificate • All others: E-Certificate",
    icon: '<i class="fas fa-compass"></i>',
    badge: "STAGE 01",
    shortDesc: "A campus-wide tactical challenge where teams must navigate locations and solve sequential clues under strict time pressure.",
    explanation: "In this event, teams must complete a series of tasks placed at different locations across the college campus. At the beginning of the event, 2–3 teams will start simultaneously from the starting point. Each team will receive a clue that leads them to the first task location. At every location, teams must complete a challenge or task to receive the next clue. Each team will need to complete 3–4 tasks across the campus. If a team successfully completes the task, they will receive the clue to proceed to the next location. However, if a team fails a task, they must return to the starting point and restart the challenge from the beginning.",
    rules: [
      "Event Timing: 11:00 AM – 6:00 PM on 09th September 2026.",
      "Venue: Location will be informed prior to start.",
      "Teams must consist of exactly 4 members (4 GRP).",
      "Teams will start the event only when instructed by the coordinators.",
      "All team members must stay together during the game.",
      "Tasks must be completed in the correct sequence.",
      "If a team fails a task at any level, they must return to the starting point and restart the event.",
      "Clues must not be shared with other teams.",
      "Any form of cheating or rule violation will lead to disqualification.",
      "The decision of the event coordinators will be final."
    ],
    winningCriteria: "The team that completes all the tasks and reaches the final checkpoint in the shortest time will be declared the winner.",
    registrationLink: "https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing"
  },
  {
    id: "LUDO-02",
    slug: "live-ludo-live-tetris",
    title: "Live Ludo × Live Tetris",
    day: "Day 1 (09th September 2026)",
    dayTag: "day1",
    time: "11:00 AM – 6:00 PM",
    place: "QUAD",
    category: "gaming",
    categoryLabel: "Real-Life Arcade & Strategy",
    teamSize: "4 GRP (4 Members Group)",
    teamFormatShort: "4 GRP",
    entryFee: "₹200 / Group",
    prize: "1st Place: ₹1,000",
    prizeDetails: "1st Place: ₹1,000 + Physical Certificate<br>All others: E-Certificate",
    certificatesSummary: "1st Place: Physical Certificate • All others: E-Certificate",
    icon: '<i class="fas fa-dice"></i>',
    badge: "STAGE 02",
    shortDesc: "A two-round fusion event featuring giant human Ludo board dares followed by high-speed real-life Tetris block placement.",
    explanation: "This event will be conducted in two intense rounds:\n\n• Round 1 – Live Ludo: Participants will play a real-life version of Ludo on a large board marked on the ground at QUAD. Players move pieces according to the dice roll. When landing on special task spots, players must complete a task/dare given by coordinators. Successfully completing the dare unlocks the path to move home. The first participant to reach home qualifies for Round 2.\n\n• Round 2 – Live Tetris: Qualifiers move to the Live Tetris challenge where players must place large physical Tetris-shaped blocks inside a marked square boundary without gaps or overlaps.",
    rules: [
      "Event Timing: 11:00 AM – 6:00 PM on 09th September 2026.",
      "Venue: QUAD, Pillai University.",
      "Team Format: 4 Members per Group (4 GRP).",
      "Participants must follow the instructions given by the event coordinators.",
      "In Live Ludo, players must move strictly according to the dice roll.",
      "If a player lands on a task spot, they must complete the assigned dare/challenge.",
      "Failure to complete the task may result in losing a turn or facing a time penalty.",
      "In Live Tetris, blocks must be placed perfectly within the marked boundary.",
      "Blocks placed outside the boundary will not be counted."
    ],
    winningCriteria: "In Live Ludo, the first participant to reach home qualifies for Round 2. In Live Tetris, the participant who correctly arranges all blocks in the marked area in the fastest time will be declared the winner.",
    registrationLink: "https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing"
  },
  {
    id: "BUG-03",
    slug: "bug-buster",
    title: "Bug Buster",
    day: "Day 1 (09th September 2026)",
    dayTag: "day1",
    time: "02:00 PM – 03:30 PM",
    place: "L2 & L3",
    category: "technical",
    categoryLabel: "Competitive Debugging Sprint",
    teamSize: "Individual (INDI)",
    teamFormatShort: "INDI",
    entryFee: "₹80 / Individual",
    prize: "1st Place: ₹500",
    prizeDetails: "1st Place: ₹500 + Physical Certificate<br>All Participants: E-Certificate",
    certificatesSummary: "1st Place: Physical Certificate • All Participants: E-Certificate",
    icon: '<i class="fas fa-bug"></i>',
    badge: "LEVEL 01",
    shortDesc: "Race against the clock to detect, analyze, and exterminate syntax, logic, and runtime errors in complex codebases.",
    explanation: "Bug Buster is a high-speed debugging challenge where participants must identify and fix errors in given code snippets in computer labs L2 & L3. Participants will be provided with code containing multiple hidden bugs (syntax mistakes, logical errors, edge case crashes, or incorrect outputs). Participants must analyze the code, fix all flaws, and ensure the program executes flawlessly within the 90-minute time window.",
    rules: [
      "Event Timing: 02:00 PM – 03:30 PM on 09th September 2026.",
      "Venue: Labs L2 & L3, Pillai University.",
      "Participation: Individual (INDI).",
      "Each participant will be provided with the exact same buggy codebase.",
      "Participants must identify and fix the errors in the code directly.",
      "The code must compile and pass all hidden test assertions.",
      "Participants must complete the challenge within the given time limit.",
      "Internet access or external AI assistance will be restricted during the event.",
      "Any form of cheating or plagiarism will result in immediate disqualification.",
      "The decision of the judges will be final."
    ],
    winningCriteria: "Participants are evaluated based on the number of bugs correctly fixed. If multiple participants fix all bugs, fastest verified submission time decides the 1st Place champion (₹500 + Physical Certificate). All participants receive verified E-Certificates.",
    registrationLink: "https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing"
  },
  {
    id: "AI-04",
    slug: "prompt-a-game",
    title: "Prompt-A-Game",
    day: "Day 1 (09th September 2026)",
    dayTag: "day1",
    time: "03:30 PM – 05:00 PM",
    place: "L2 & L3",
    category: "technical",
    categoryLabel: "Generative AI Game Design",
    teamSize: "Individual (INDI)",
    teamFormatShort: "INDI",
    entryFee: "₹80 / Individual",
    prize: "1st Place: ₹500",
    prizeDetails: "1st Place: ₹500 + Physical Certificate<br>All Participants: E-Certificate",
    certificatesSummary: "1st Place: Physical Certificate • All Participants: E-Certificate",
    icon: '<i class="fas fa-robot"></i>',
    badge: "AI LAB",
    shortDesc: "Harness generative AI prompts to architect, build, and deploy an original playable video game within a timed challenge.",
    explanation: "Prompt-A-Game is a cutting-edge generative AI challenge held in computer labs L2 & L3 where participants craft a playable game using AI prompt engineering. Participants will be given a theme/concept at 03:30 PM. Using AI tools, they must write structured prompts to generate code, game logic, mechanics, and interactive UI. At the end of the round, participants present their live game to judges.",
    rules: [
      "Event Timing: 03:30 PM – 05:00 PM on 09th September 2026.",
      "Venue: Labs L2 & L3, Pillai University.",
      "Participation: Individual (INDI).",
      "Participants must create the game using AI prompts during the allocated time.",
      "The game must strictly align with the surprise theme announced at start.",
      "Participants must complete the game within the given time limit.",
      "Pre-built external projects are strictly prohibited.",
      "Participants must present and justify the exact prompt chain utilized.",
      "The decision of the judges will be final."
    ],
    winningCriteria: "Judged on: Creativity of Game Idea, Quality of Prompt Engineering, Gameplay & Mechanics Functionality, and Live Presentation. Top scorer receives 1st Place (₹500 + Physical Certificate). All participants receive verified E-Certificates.",
    registrationLink: "https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing"
  },
  {
    id: "WS-02",
    slug: "cyber-security-workshop",
    title: "Workshop: Cybersecurity",
    day: "Day 1 (09th September 2026)",
    dayTag: "day1",
    time: "11:00 AM – 12:30 PM",
    place: "Conclave 1",
    category: "workshops",
    categoryLabel: "Certified Hands-On Masterclass",
    teamSize: "Individual",
    teamFormatShort: "INDI",
    entryFee: "₹80 / Seat",
    prize: "Verified E-Certificate",
    prizeDetails: "All Participants: E-Certificate",
    certificatesSummary: "All Participants: E-Certificate",
    icon: '<i class="fas fa-shield-halved"></i>',
    badge: "WORKSHOP",
    shortDesc: "Dive into offensive and defensive cybersecurity, network penetration, threat analysis, and digital defense strategies.",
    explanation: "Explore modern threat landscapes with seasoned security practitioners at Conclave 1. Understand vulnerability auditing, defensive hardening, network packet analysis, and ethical security methodologies in an interactive demonstration environment.",
    rules: [
      "Workshop Timing: 11:00 AM – 12:30 PM on 09th September 2026.",
      "Venue: Conclave 1, Pillai University.",
      "Capacity: Strictly limited seats on first-come-first-served basis.",
      "Official Verified E-Certificate awarded to all registered attendees.",
      "Participants are advised to bring their laptops for interactive exercises."
    ],
    winningCriteria: "Full attendance and verified participation earns the official E-Certificate.",
    registrationLink: "https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing"
  },
  {
    id: "WS-01",
    slug: "cloud-computing-workshop",
    title: "Workshop: Cloud Computing",
    day: "Day 1 (09th September 2026)",
    dayTag: "day1",
    time: "12:30 PM – 2:00 PM",
    place: "Conclave 1",
    category: "workshops",
    categoryLabel: "Certified Hands-On Masterclass",
    teamSize: "Individual",
    teamFormatShort: "INDI",
    entryFee: "₹80 / Seat",
    prize: "Verified E-Certificate",
    prizeDetails: "All Participants: E-Certificate",
    certificatesSummary: "All Participants: E-Certificate",
    icon: '<i class="fas fa-cloud"></i>',
    badge: "WORKSHOP",
    shortDesc: "Master cloud architectures, deployment pipelines, virtualization, and real-world infrastructure scaling with industry experts.",
    explanation: "An intensive masterclass in Conclave 1 designed to take students from core cloud foundations to scalable deployment architecture. Learn how global cloud systems manage multi-tenant deployments, serverless functions, database clustering, and cost optimization.",
    rules: [
      "Workshop Timing: 12:30 PM – 2:00 PM on 09th September 2026.",
      "Venue: Conclave 1, Pillai University.",
      "Capacity: Strictly limited seats.",
      "Official Verified E-Certificate awarded to all registered attendees upon session completion.",
      "Interactive architecture walk-throughs and live demos."
    ],
    winningCriteria: "Full attendance grants the verified Computer Association E-Certificate.",
    registrationLink: "https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing"
  },

  // --- DAY 2 : 10TH SEPTEMBER 2026 ---
  {
    id: "CTF-05",
    slug: "capture-the-flag-fastest-finger",
    title: "Capture The Flag × Fastest Finger First",
    day: "Day 2 (10th September 2026)",
    dayTag: "day2",
    time: "8:00 AM – 6:00 PM",
    place: "QUAD",
    category: "non-tech",
    categoryLabel: "Tactical Defense & Rapid Trivia",
    teamSize: "4 GRP (4 Members Group)",
    teamFormatShort: "4 GRP",
    entryFee: "₹200 / Group",
    prize: "1st Place: ₹1,000",
    prizeDetails: "1st Place: ₹1,000 + Physical Certificate<br>All others: E-Certificate",
    certificatesSummary: "1st Place: Physical Certificate • All others: E-Certificate",
    icon: '<i class="fas fa-flag"></i>',
    badge: "STAGE 03",
    shortDesc: "An exhilarating physical & tactical Capture The Flag arena followed by an electrifying high-speed Fastest Finger trivia faceoff.",
    explanation: "Conducted at the QUAD in two thrilling phases:\n\n• Round 1 – Capture The Flag: All registered teams participate in an arena challenge where they must infiltrate enemy territory, capture all opponent flags, and safely return them to home base. If tagged in enemy territory, players freeze until an uncaptured teammate frees them. Qualifying teams advance to Round 2.\n\n• Round 2 – Fastest Finger First: High-velocity quiz and buzzer task gauntlet where speed and precision determine points.",
    rules: [
      "Event Timing: 8:00 AM – 6:00 PM on 10th September 2026.",
      "Venue: QUAD, Pillai University.",
      "Team Format: 4 Members per Group (4 GRP).",
      "Each team must strictly follow arena boundaries and coordinator signals.",
      "Only registered team members may enter the arena floor.",
      "Teams must qualify through Round 1 to enter the buzzer finals.",
      "Use of unfair means or physical misconduct leads to instant disqualification.",
      "The decision of the organizers and judges will be final."
    ],
    winningCriteria: "Teams successfully completing CTF qualify for Round 2. In Fastest Finger First, the highest cumulative speed and accuracy score wins the championship.",
    registrationLink: "https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing"
  },
  {
    id: "HACK-06",
    slug: "mini-hackathon",
    title: "Mini Hackathon (4 GRP)",
    day: "Day 2 (10th September 2026)",
    dayTag: "day2",
    time: "8:00 AM – 6:00 PM",
    place: "Conclave 2",
    category: "hackathon",
    categoryLabel: "Flagship 8-Hour Development Sprint",
    teamSize: "4 GRP (Group / 2 to 4 Members)",
    teamFormatShort: "4 GRP",
    entryFee: "₹400 / Group",
    prize: "1st: ₹3,000 | 2nd: ₹2,000 | 3rd: ₹1,000",
    prizeDetails: "1st: ₹3,000 + Physical Certificate<br>2nd: ₹2,000 + Physical Certificate<br>3rd: ₹1,000 + Physical Certificate<br>4th & 5th: Physical Certificate<br>Rest: E-Certificate",
    certificatesSummary: "1st to 5th Place: Physical Certificate • Rest: E-Certificate",
    icon: '<i class="fas fa-laptop-code"></i>',
    badge: "FLAGSHIP",
    shortDesc: "The ultimate 8-hour rapid development challenge. Build a transformative tech prototype from scratch and pitch to industry judges.",
    explanation: "Mini Hackathon is an intense, fast-paced development challenge held in Conclave 2 where teams work to design, architect, and build an innovative tech prototype within a strict 8:00 AM – 6:00 PM timeframe. At launch, teams receive thematic problem statements. Teams choose their preferred tech stack (Web, AI, Mobile, Cloud, IoT, Web3) to engineer a functional solution and present live demos to an esteemed panel of judges.",
    rules: [
      "Hackathon Timing: 8:00 AM – 6:00 PM on 10th September 2026.",
      "Venue: Conclave 2, Pillai University.",
      "Eligibility: Open to all students under Pillai University across all departments.",
      "Each team must consist of 2 to 4 participants (4 GRP format).",
      "Teams must build their project entirely within the given time frame.",
      "The project must address the official themes released at opening.",
      "Open-source libraries/frameworks permitted; pre-built codebases strictly prohibited.",
      "Participants must bring their own laptops and development hardware.",
      "Certificates: 1st, 2nd, 3rd, 4th & 5th place teams receive Physical Hard-Copy Certificates; all other participants receive verified E-Certificates.",
      "For comprehensive event guidelines, themes, and judging rubrics, refer to the official Hackathon Document.",
      "The decision of the jury panel is final."
    ],
    winningCriteria: "Judged on: Innovation & Creativity, Technical Execution & Functionality, Practical Problem Solving, UX/UI Design, and Pitch Clarity.",
    registrationLink: "https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing",
    docLink: "https://docs.google.com/document/d/1TfgVo4CgwzKKg92M3_e2NkzZSzL2bOXd/edit?usp=sharing&ouid=103869356156690991088&rtpof=true&sd=true"
  },
  {
    id: "WS-03",
    slug: "efficient-use-ai-tools-workshop",
    title: "Workshop: AI Tools",
    day: "Day 2 (10th September 2026)",
    dayTag: "day2",
    time: "9:00 AM – 11:00 AM",
    place: "Conclave 1",
    category: "workshops",
    categoryLabel: "Certified Hands-On Masterclass",
    teamSize: "Individual",
    teamFormatShort: "INDI",
    entryFee: "₹50 / Seat",
    prize: "Verified E-Certificate",
    prizeDetails: "All Participants: E-Certificate",
    certificatesSummary: "All Participants: E-Certificate",
    icon: '<i class="fas fa-brain"></i>',
    badge: "WORKSHOP",
    shortDesc: "Supercharge your productivity, coding velocity, workflow automation, and research with cutting-edge AI toolchains.",
    explanation: "Discover advanced prompt patterns, agentic workflows, multi-modal AI copilots, code generation frameworks, and autonomous tools in Conclave 1 to multiply engineering throughput and research efficiency.",
    rules: [
      "Workshop Timing: 9:00 AM – 11:00 AM on 10th September 2026.",
      "Venue: Conclave 1, Pillai University.",
      "Participation: Individual.",
      "Official Verified E-Certificate provided to all registered attendees.",
      "Interactive live prompt engineering demonstrations."
    ],
    winningCriteria: "Complete session attendance grants verified E-Certificate.",
    registrationLink: "https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing"
  },
  {
    id: "WS-04",
    slug: "stocks-trading-workshop",
    title: "Workshop: Stocks and Trading",
    day: "Day 2 (10th September 2026)",
    dayTag: "day2",
    time: "11:00 AM – 1:00 PM",
    place: "Conclave 1",
    category: "workshops",
    categoryLabel: "Certified Hands-On Masterclass",
    teamSize: "Individual",
    teamFormatShort: "INDI",
    entryFee: "₹50 / Seat",
    prize: "Verified E-Certificate",
    prizeDetails: "All Participants: E-Certificate",
    certificatesSummary: "All Participants: E-Certificate",
    icon: '<i class="fas fa-chart-line"></i>',
    badge: "WORKSHOP",
    shortDesc: "Understand market mechanics, technical analysis, algorithmic modeling, risk management, and smart investing strategies.",
    explanation: "Master financial literacy tailored for engineers and tech innovators in Conclave 1. Learn how algorithmic models, market indicators, sentiment data, and risk mitigation strategies function in modern equities and trading ecosystems.",
    rules: [
      "Workshop Timing: 11:00 AM – 1:00 PM on 10th September 2026.",
      "Venue: Conclave 1, Pillai University.",
      "Participation: Individual.",
      "Official Verified E-Certificate awarded to all participants.",
      "Practical case study analysis of market trends."
    ],
    winningCriteria: "Verified E-Certificate awarded upon full completion.",
    registrationLink: "https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing"
  }
];

/**
 * Schedule Dataset by Day
 */
const BITFEST_SCHEDULE = {
  1: {
    date: "09th September 2026",
    label: "DAY 01 (09 SEP 2026)",
    events: [
      {
        time: "11:00 AM – 6:00 PM",
        title: "Prisoners of War (4 GRP)",
        eventId: "POW-01",
        format: "4 GRP",
        place: "Location will be informed",
        prizesHtml: "<strong>1st Place:</strong> ₹1,000 + Physical Certificate<br><span class='cert-badge-e'>All others: E-Certificate</span>",
        category: "non-tech",
        icon: '<i class="fas fa-compass"></i>'
      },
      {
        time: "11:00 AM – 6:00 PM",
        title: "Live Ludo × Live Tetris (4 GRP)",
        eventId: "LUDO-02",
        format: "4 GRP",
        place: "QUAD",
        prizesHtml: "<strong>1st Place:</strong> ₹1,000 + Physical Certificate<br><span class='cert-badge-e'>All others: E-Certificate</span>",
        category: "gaming",
        icon: '<i class="fas fa-dice"></i>'
      },
      {
        time: "11:00 AM – 12:30 PM",
        title: "Workshop: Cybersecurity",
        eventId: "WS-02",
        format: "Individual",
        place: "Conclave 1",
        prizesHtml: "<span class='cert-badge-e'>All Participants: E-Certificate</span>",
        category: "workshops",
        icon: '<i class="fas fa-shield-halved"></i>'
      },
      {
        time: "12:30 PM – 2:00 PM",
        title: "Workshop: Cloud Computing",
        eventId: "WS-01",
        format: "Individual",
        place: "Conclave 1",
        prizesHtml: "<span class='cert-badge-e'>All Participants: E-Certificate</span>",
        category: "workshops",
        icon: '<i class="fas fa-cloud"></i>'
      },
      {
        time: "02:00 PM – 03:30 PM",
        title: "Bug Buster (INDI)",
        eventId: "BUG-03",
        format: "INDI",
        place: "L2 & L3",
        prizesHtml: "<strong>1st Place:</strong> ₹500 + Physical Certificate<br><span class='cert-badge-e'>All others: E-Certificate</span>",
        category: "technical",
        icon: '<i class="fas fa-bug"></i>'
      },
      {
        time: "03:30 PM – 05:00 PM",
        title: "Prompt-A-Game (INDI)",
        eventId: "AI-04",
        format: "INDI",
        place: "L2 & L3",
        prizesHtml: "<strong>1st Place:</strong> ₹500 + Physical Certificate<br><span class='cert-badge-e'>All others: E-Certificate</span>",
        category: "technical",
        icon: '<i class="fas fa-robot"></i>'
      }
    ]
  },
  2: {
    date: "10th September 2026",
    label: "DAY 02 (10 SEP 2026)",
    events: [
      {
        time: "8:00 AM – 6:00 PM",
        title: "Capture The Flag × Fastest Finger First (4 GRP)",
        eventId: "CTF-05",
        format: "4 GRP",
        place: "QUAD",
        prizesHtml: "<strong>1st Place:</strong> ₹1,000 + Physical Certificate<br><span class='cert-badge-e'>All others: E-Certificate</span>",
        category: "non-tech",
        icon: '<i class="fas fa-flag"></i>'
      },
      {
        time: "8:00 AM – 6:00 PM",
        title: "Mini Hackathon (4 GRP)",
        eventId: "HACK-06",
        format: "4 GRP",
        place: "Conclave 2",
        prizesHtml: "<strong>1st:</strong> ₹3,000 + Physical Certificate<br><strong>2nd:</strong> ₹2,000 + Physical Certificate<br><strong>3rd:</strong> ₹1,000 + Physical Certificate<br><strong>4th & 5th:</strong> Physical Certificate<br><span class='cert-badge-e'>Rest: E-Certificate</span>",
        category: "hackathon",
        icon: '<i class="fas fa-laptop-code"></i>'
      },
      {
        time: "9:00 AM – 11:00 AM",
        title: "Workshop: AI Tools",
        eventId: "WS-03",
        format: "Individual",
        place: "Conclave 1",
        prizesHtml: "<span class='cert-badge-e'>All Participants: E-Certificate</span>",
        category: "workshops",
        icon: '<i class="fas fa-brain"></i>'
      },
      {
        time: "11:00 AM – 1:00 PM",
        title: "Workshop: Stocks and Trading",
        eventId: "WS-04",
        format: "Individual",
        place: "Conclave 1",
        prizesHtml: "<span class='cert-badge-e'>All Participants: E-Certificate</span>",
        category: "workshops",
        icon: '<i class="fas fa-chart-line"></i>'
      }
    ]
  }
};

/**
 * Initialize Event Registry & Schedule Matrix
 */
document.addEventListener('DOMContentLoaded', () => {
  const eventsContainer = document.getElementById('eventsGridContainer');
  if (eventsContainer) {
    renderEvents(BITFEST_EVENTS);
    initEventFilters();
    initEventSearch();
  }

  const scheduleContainer = document.getElementById('scheduleContainer');
  if (scheduleContainer) {
    renderScheduleMatrix(1);
  }

  initEventModal();
});

/**
 * Render Event Cards
 */
function renderEvents(eventsList) {
  const container = document.getElementById('eventsGridContainer');
  if (!container) return;

  if (eventsList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <h3 style="color: var(--neon-magenta); font-family: var(--font-mono); margin-bottom: 0.5rem;">NO QUESTS FOUND</h3>
        <p>Try adjusting your search query or category filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = eventsList.map(ev => `
    <article class="event-card tilt-card" data-category="${ev.category}" data-day="${ev.dayTag}">
      <div class="event-card-top">
        <div class="event-card-header">
          <span class="event-id-badge">${ev.id}</span>
          <span class="event-day-pill">${ev.day}</span>
        </div>
        <div class="event-icon-circle">${ev.icon}</div>
        <h3 class="event-title">${ev.title}</h3>
        <p class="event-desc">${ev.shortDesc}</p>
      </div>

      <div class="event-card-bottom">
        <!-- Logistics Bar: Time & Venue Chips -->
        <div class="event-logistics-grid">
          <div class="event-logistic-chip">
            <span class="chip-label"><i class="fas fa-clock"></i> TIMING</span>
            <span class="chip-val time-val">${ev.time}</span>
          </div>
          <div class="event-logistic-chip">
            <span class="chip-label"><i class="fas fa-location-dot"></i> VENUE / PLACE</span>
            <span class="chip-val venue-val">${ev.place}</span>
          </div>
        </div>

        <!-- Format & Entry Fee Specs -->
        <div class="event-specs-grid">
          <div class="spec-item">
            <span class="spec-label"><i class="fas fa-users"></i> TEAM FORMAT:</span>
            <span class="spec-val">${ev.teamFormatShort ? `${ev.teamFormatShort} (${ev.teamSize.includes('Individual') ? 'Solo' : 'Team'})` : ev.teamSize}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label"><i class="fas fa-ticket"></i> ENTRY FEE:</span>
            <span class="spec-val fee-val">${ev.entryFee}</span>
          </div>
        </div>

        <!-- Dedicated Reward & Certificate Box -->
        <div class="event-reward-block">
          <div class="reward-row">
            <span class="reward-label"><i class="fas fa-trophy"></i> REWARD:</span>
            <span class="reward-val prize-val">${ev.prize}</span>
          </div>
          <div class="reward-cert-row">
            <span class="cert-icon"><i class="fas fa-certificate"></i></span>
            <span class="cert-text">${ev.certificatesSummary}</span>
          </div>
        </div>

        <div class="event-card-actions">
          <button class="btn btn-secondary btn-sm" onclick="openEventDetails('${ev.id}')">
            <i class="fas fa-info-circle"></i> DETAILS
          </button>
          <a href="https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-shimmer" title="Bitfest 2026 Participants Certificates">
            <i class="fas fa-certificate"></i> CERTIFICATES
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Filter Pills Handling
 */
function initEventFilters() {
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');
      const searchInput = document.getElementById('eventSearchInput');
      const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

      applyFiltersAndSearch(filterValue, query);
    });
  });
}

/**
 * Search Input Handling
 */
function initEventSearch() {
  const searchInput = document.getElementById('eventSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const activePill = document.querySelector('.filter-pill.active');
    const filterValue = activePill ? activePill.getAttribute('data-filter') : 'all';
    applyFiltersAndSearch(filterValue, e.target.value.toLowerCase().trim());
  });
}

function applyFiltersAndSearch(filter, query) {
  let filtered = BITFEST_EVENTS;

  if (filter === 'day1') {
    filtered = filtered.filter(e => e.dayTag === 'day1');
  } else if (filter === 'day2') {
    filtered = filtered.filter(e => e.dayTag === 'day2');
  } else if (filter !== 'all') {
    filtered = filtered.filter(e => e.category === filter);
  }

  if (query) {
    filtered = filtered.filter(e => 
      e.title.toLowerCase().includes(query) ||
      e.shortDesc.toLowerCase().includes(query) ||
      e.categoryLabel.toLowerCase().includes(query) ||
      e.place.toLowerCase().includes(query) ||
      e.time.toLowerCase().includes(query) ||
      e.id.toLowerCase().includes(query)
    );
  }

  renderEvents(filtered);
}

/**
 * Interactive Chronological Schedule Matrix Renderer
 */
function renderScheduleMatrix(dayNumber) {
  const container = document.getElementById('scheduleContainer');
  if (!container) return;

  const dayData = BITFEST_SCHEDULE[dayNumber];
  if (!dayData) return;

  const tableRowsHtml = dayData.events.map(ev => {
    const rawEvent = BITFEST_EVENTS.find(e => e.id === ev.eventId) || {};
    return `
      <tr class="schedule-table-row">
        <td class="schedule-time-cell">
          <div class="schedule-time-badge">
            <i class="fas fa-clock"></i> ${ev.time}
          </div>
        </td>
        <td class="schedule-event-cell">
          <div class="schedule-event-info">
            <span class="schedule-event-icon">${ev.icon}</span>
            <div>
              <div class="schedule-event-title">${ev.title}</div>
              <div class="schedule-event-meta-tags">
                <span class="schedule-format-tag">${ev.format}</span>
                <span class="schedule-cat-tag ${ev.category}">${ev.category.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </td>
        <td class="schedule-place-cell">
          <div class="schedule-venue-badge">
            <i class="fas fa-location-dot"></i> ${ev.place}
          </div>
        </td>
        <td class="schedule-prizes-cell">
          <div class="schedule-prizes-content">
            ${ev.prizesHtml}
          </div>
        </td>
        <td class="schedule-action-cell">
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <button class="btn btn-secondary btn-sm" onclick="openEventDetails('${ev.eventId}')" title="View Event Recap &amp; Rules" style="white-space: nowrap;">
              <i class="fas fa-eye"></i> Details
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  container.innerHTML = `
    <div class="schedule-day-banner">
      <div class="schedule-day-header">
        <span class="section-tag gold" style="margin: 0;"><i class="fas fa-calendar-day"></i> ${dayData.label}</span>
        <h3 class="schedule-day-heading" style="margin-top: 6px;">${dayData.date}</h3>
      </div>
      <div class="schedule-day-stats">
        <span><i class="fas fa-circle-check" style="color: var(--gold-bright);"></i> ${dayData.events.length} Completed Events</span>
      </div>
    </div>

    <!-- Responsive Schedule Table (Desktop & Tablets) -->
    <div class="schedule-table-wrap">
      <table class="schedule-table">
        <thead>
          <tr>
            <th style="width: 20%;"><i class="fas fa-clock"></i> Time</th>
            <th style="width: 32%;"><i class="fas fa-trophy"></i> Event Name</th>
            <th style="width: 18%;"><i class="fas fa-map-pin"></i> Venue</th>
            <th style="width: 20%;"><i class="fas fa-award"></i> Awards &amp; Certificates</th>
            <th style="width: 10%; text-align: right;"><i class="fas fa-circle-info"></i> Info</th>
          </tr>
        </thead>
        <tbody>
          ${tableRowsHtml}
        </tbody>
      </table>
    </div>

    <!-- Responsive Cards View for Small Mobile Screens -->
    <div class="schedule-mobile-cards-list">
      ${dayData.events.map(ev => {
        return `
          <div class="schedule-mobile-card">
            <div class="schedule-mobile-header">
              <span class="schedule-time-badge"><i class="fas fa-clock"></i> ${ev.time}</span>
              <span class="schedule-format-tag">${ev.format}</span>
            </div>
            <div class="schedule-mobile-title">
              <span style="font-size: 1.4rem;">${ev.icon}</span>
              <h4>${ev.title}</h4>
            </div>
            <div class="schedule-mobile-meta">
              <div class="schedule-mobile-row">
                <span class="label"><i class="fas fa-location-dot"></i> Venue:</span>
                <span class="val">${ev.place}</span>
              </div>
              <div class="schedule-mobile-row prizes-row">
                <span class="label"><i class="fas fa-award"></i> Awards:</span>
                <div class="val">${ev.prizesHtml}</div>
              </div>
            </div>
            <div class="schedule-mobile-actions">
              <button class="btn btn-secondary btn-sm" onclick="openEventDetails('${ev.eventId}')" style="width: 100%; justify-content: center;">
                <i class="fas fa-eye"></i> View Event Details &amp; Rules
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/**
 * Schedule Tab Switcher Function (Exposed Globally)
 */
window.switchScheduleDay = function(dayNumber) {
  const day1Btn = document.getElementById('day1ScheduleBtn');
  const day2Btn = document.getElementById('day2ScheduleBtn');

  if (dayNumber === 1) {
    day1Btn?.classList.add('active');
    day2Btn?.classList.remove('active');
  } else {
    day2Btn?.classList.add('active');
    day1Btn?.classList.remove('active');
  }

  renderScheduleMatrix(dayNumber);
};

/**
 * Event Modal Details Logic
 */
function initEventModal() {
  let modalOverlay = document.getElementById('eventDetailModal');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'eventDetailModal';
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `
      <div class="modal-dialog">
        <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close Modal">&times;</button>
        <div id="modalContentContainer"></div>
      </div>
    `;
    document.body.appendChild(modalOverlay);

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeEventModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeEventModal();
      }
    });

    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeEventModal);
  }
}

function openEventDetails(eventId) {
  const eventData = BITFEST_EVENTS.find(e => e.id === eventId);
  if (!eventData) return;

  const container = document.getElementById('modalContentContainer');
  const modal = document.getElementById('eventDetailModal');
  if (!container || !modal) return;

  container.innerHTML = `
    <div class="modal-header-meta">
      <span class="event-id-badge">${eventData.id}</span>
      <span class="event-day-pill">${eventData.day}</span>
      <span class="section-tag gold" style="margin: 0;">${eventData.categoryLabel}</span>
    </div>
    <h2 class="modal-title">${eventData.icon} ${eventData.title}</h2>

    <!-- Quick Schedule & Venue Bar -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 1.5rem; background: rgba(0, 240, 255, 0.05); border: 1px solid rgba(0, 240, 255, 0.2); padding: 1rem; border-radius: var(--radius-sm);">
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);"><i class="fas fa-clock" style="color: var(--neon-cyan);"></i> TIME</div>
        <div style="font-family: var(--font-mono); font-weight: 700; color: var(--neon-cyan); font-size: 0.95rem;">${eventData.time}</div>
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);"><i class="fas fa-map-pin" style="color: var(--neon-magenta);"></i> VENUE / PLACE</div>
        <div style="font-family: var(--font-mono); font-weight: 700; color: #fff; font-size: 0.95rem;">${eventData.place}</div>
      </div>
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);"><i class="fas fa-users" style="color: var(--arcade-gold);"></i> TEAM FORMAT</div>
        <div style="font-family: var(--font-mono); font-weight: 700; color: var(--arcade-gold); font-size: 0.95rem;">${eventData.teamSize}</div>
      </div>
    </div>

    <div class="modal-prize-box">
      <div class="modal-prize-title"><i class="fas fa-trophy"></i> Prizes &amp; Certificates Breakdown</div>
      <div style="color: #fff; font-family: var(--font-mono); font-size: 1.05rem; font-weight: 700; line-height: 1.6;">
        ${eventData.prizeDetails}
      </div>
    </div>

    <div class="modal-section-block">
      <h3 class="modal-subhead">1. Game / Challenge Explanation</h3>
      <p style="white-space: pre-line; line-height: 1.8;">${eventData.explanation}</p>
    </div>

    <div class="modal-section-block">
      <h3 class="modal-subhead">2. Official Rules & Guidelines</h3>
      <ul class="modal-list">
        ${eventData.rules.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section-block">
      <h3 class="modal-subhead">3. Winning Criteria &amp; Certificates Policy</h3>
      <p style="margin-bottom: 0.8rem;">${eventData.winningCriteria}</p>
      <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--arcade-gold); background: rgba(255, 215, 0, 0.08); border: 1px solid rgba(255, 215, 0, 0.25); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
        <i class="fas fa-certificate"></i> <strong>CERTIFICATE POLICY:</strong> <strong>${eventData.certificatesSummary}</strong>
      </div>
    </div>

    ${eventData.docLink ? `
    <div class="modal-section-block" style="background: rgba(0, 240, 255, 0.06); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: var(--radius-sm); padding: 1.2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <div>
        <div style="font-weight: 800; color: #fff; font-size: 1rem;"><i class="fas fa-file-lines" style="color: var(--arcade-gold);"></i> Official Hackathon Guidelines Document</div>
        <div style="font-size: 0.85rem; color: var(--text-secondary);">Review complete rules, domain tracks, and scoring matrix on Google Docs.</div>
      </div>
      <a href="${eventData.docLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        <i class="fas fa-external-link-alt"></i> OPEN GOOGLE DOC
      </a>
    </div>
    ` : ''}

    <div class="modal-section-block" style="border-top: 1px solid var(--border-subtle); padding: 1.4rem; background: var(--cream-surface); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <div>
        <span style="font-family: var(--font-heading); font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">EVENT STATUS:</span>
        <div style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 800; color: var(--maroon-royal);">OFFICIALLY CONCLUDED • CERTIFICATES RELEASED</div>
      </div>
      <a href="https://drive.google.com/drive/folders/1dmcq9ghw45XZvn7oZKkK8Ay9rswQZatS?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-royal-cert btn-shimmer">
        <i class="fas fa-certificate"></i> GET PARTICIPANT CERTIFICATES →
      </a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeEventModal() {
  const modal = document.getElementById('eventDetailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function trackEventRegistration(eventName) {
  console.log(`[BITFEST 2026] User registered interest for: ${eventName}`);
}
