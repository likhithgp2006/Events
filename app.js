/* ==========================================================================
   KURUKSHETRA 2026 - Complete 14 Events Catalog & Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. STORED EVENT DATA ENGINE (All 14 User Events)
  // ==========================================
  const STORED_EVENTS = [
    {
      id: 'it-quiz',
      title: 'IT QUIZ',
      sanskrit: 'पशुपतास्त्र • PASHUPATASTRA QUIZ',
      category: 'tech',
      image: 'assets/dhanush.jpg',
      prize: '₹25,000',
      teamSize: 'Team of 2',
      format: 'Each team must consist of 2 members.',
      shortDesc: 'Test your technological prowess, computing history, current IT trends, and general awareness.',
      rules: [
        'Each team must consist of 2 members.',
        'The quiz will be conducted according to the format announced by the organizers on the event day.',
        'Questions may cover IT, technology, computing, current technological trends, and general awareness.',
        'Participants must follow all instructions given by the quizmaster.',
        'Use of unauthorized devices, external assistance, or unfair means is strictly prohibited.',
        'Answers must be submitted within the allotted time.',
        'The decision of the quizmaster and organizers will be final.'
      ]
    },
    {
      id: 'it-manager',
      title: 'IT MANAGER',
      sanskrit: 'चाणक्य नीति • CHANAKYA NEETI',
      category: 'management',
      image: 'assets/chakravyuh.jpg',
      prize: '₹30,000',
      teamSize: 'Individual',
      format: 'Format: Individual',
      shortDesc: 'Analyze workplace crisis situations and present practical leadership solutions under stress.',
      rules: [
        'Format: Individual',
        'Participants will be presented with IT-related workplace and crisis situations.',
        'Participants must analyze the situation and propose practical solutions.',
        'The event will assess leadership, decision-making, communication, and problem-solving skills.',
        'Participants must complete the given task within the allotted time.',
        'Professional conduct is expected throughout the event.',
        'The judges\' decision will be final.'
      ]
    },
    {
      id: 'debate',
      title: 'DEBATE',
      sanskrit: 'शास्त्रार्थ • SHASTRAARTHA',
      category: 'strategy',
      image: 'assets/nrutya.jpg',
      prize: '₹20,000',
      teamSize: 'Team of 3',
      format: 'Each team must consist of 3 members.',
      shortDesc: 'Engage in structured parliamentary discourse with logical reasoning and eloquent argumentation.',
      rules: [
        'Each team must consist of 3 members.',
        'The topic and format will be announced by the organizers.',
        'Participants must present relevant and well-reasoned arguments.',
        'Participants must adhere to the allotted speaking time.',
        'Personal remarks, offensive language, and disrespectful behaviour are strictly prohibited.',
        'Teams will be evaluated on content, reasoning, communication, confidence, and teamwork.',
        'The judges\' decision will be final.'
      ]
    },
    {
      id: 'startup-pitch',
      title: 'STARTUP PITCH',
      sanskrit: 'राजसूय • RAJASUYA PITCH',
      category: 'management',
      image: 'assets/hero.jpg',
      prize: '₹50,000',
      teamSize: 'Team of 4',
      format: 'Each team must consist of 4 members.',
      shortDesc: 'Present original entrepreneurial ideas with market analysis, feasibility, and business potential.',
      rules: [
        'Each team must consist of 4 members.',
        'Teams must present an original startup idea.',
        'The pitch should clearly communicate the problem, proposed solution, target audience, and potential of the idea.',
        'The presentation must be completed within the time allotted by the organizers.',
        'Originality and practical feasibility are expected.',
        'Judging will consider innovation, feasibility, market potential, presentation, and clarity.',
        'The judges\' decision will be final.'
      ]
    },
    {
      id: 'photography',
      title: 'PHOTOGRAPHY',
      sanskrit: 'दृष्टि • DRISHTI PHOTOGRAPHY',
      category: 'creative',
      image: 'assets/nrutya.jpg',
      prize: '₹15,000',
      teamSize: 'Individual',
      format: 'Format: Individual',
      shortDesc: 'Capture evocative images based on the theme announced on the event day.',
      rules: [
        'Photography is an individual event.',
        'The theme will be announced on the event day.',
        'Participants must capture their photograph based on the announced theme.',
        'A designated Google Drive link will be provided on the event day for submission.',
        'Only photographs captured during the event will be accepted.',
        'Entries must be submitted within the specified time.',
        'Editing must follow the guidelines provided by the organizers.',
        'The judges\' decision will be final.'
      ]
    },
    {
      id: 'graphical-designing',
      title: 'GRAPHICAL DESIGNING',
      sanskrit: 'चित्रकला • CHITRAKALA DESIGN',
      category: 'creative',
      image: 'assets/chakravyuh.jpg',
      prize: '₹20,000',
      teamSize: 'Individual',
      format: 'Format: Individual',
      shortDesc: 'Craft stunning modern visual designs and posters based on assigned themes.',
      rules: [
        'Participants must create a design based on the theme or task provided by the organizers.',
        'The design must be completed within the allotted time.',
        'Participants may use permitted design software.',
        'All submitted work must be original.',
        'The final work must be submitted in the prescribed format within the given deadline.',
        'Judging will consider creativity, relevance, originality, visual appeal, and execution.',
        'The judges\' decision will be final.'
      ]
    },
    {
      id: 'coding-debugging',
      title: 'CODING & DEBUGGING',
      sanskrit: 'धनुर्विद्या • DHANURVIDYA CODING',
      category: 'tech',
      image: 'assets/dhanush.jpg',
      prize: '₹40,000',
      teamSize: 'Team of 2',
      format: 'Each team must consist of 2 members.',
      shortDesc: 'Solve complex algorithms and fix tricky code bugs under time pressure.',
      rules: [
        'Each team must consist of 2 members.',
        'Participants will be given coding and/or debugging tasks.',
        'Teams must complete the assigned tasks within the allotted time.',
        'Only the programming languages and tools permitted by the organizers may be used.',
        'Unauthorized external assistance is strictly prohibited.',
        'Submissions must be made within the specified deadline.',
        'Judging will consider correctness, efficiency, and time taken.',
        'The judges\' decision will be final.'
      ]
    },
    {
      id: 'ipl-auction',
      title: 'IPL AUCTION',
      sanskrit: 'हस्तिनापुर नीलामी • HASTINAPUR AUCTION',
      category: 'strategy',
      image: 'assets/hero.jpg',
      prize: '₹30,000',
      teamSize: 'Team of 2',
      format: 'Each team must consist of 2 members.',
      shortDesc: 'Build a balanced cricket squad using strategic bidding and budget allocation.',
      rules: [
        'Each team must consist of 2 members.',
        'The auction format, rules, and budget will be announced by the organizers.',
        'Participants must follow the bidding process and instructions provided during the event.',
        'Teams must make strategic decisions within the given requirements.',
        'Once a bid is confirmed, it cannot be withdrawn.',
        'Teams will be evaluated based on strategy, player selection, team balance, and decision-making.',
        'The organizers\' decision will be final.'
      ]
    },
    {
      id: 'logo-designing',
      title: 'LOGO DESIGNING',
      sanskrit: 'मुद्रिका • MUDRIKA LOGO DESIGN',
      category: 'creative',
      image: 'assets/chakravyuh.jpg',
      prize: '₹15,000',
      teamSize: 'Individual',
      format: 'Format: Individual',
      shortDesc: 'Design clean, iconic logos communicating brand identity and values.',
      rules: [
        'Participants must design a logo based on the theme or brief provided by the organizers.',
        'The design must be created within the allotted time.',
        'The logo must be original, creative, and relevant to the given concept.',
        'Participants may use permitted design software.',
        'Previously created or copied designs will not be accepted.',
        'The final submission must follow the prescribed format and deadline.',
        'Judging will consider creativity, simplicity, relevance, originality, and visual impact.',
        'The judges\' decision will be final.'
      ]
    },
    {
      id: 'treasure-hunt',
      title: 'TREASURE HUNT',
      sanskrit: 'चक्रव्यूह खोज • CHAKRAVYUH HUNT',
      category: 'strategy',
      image: 'assets/chakravyuh.jpg',
      prize: '₹35,000',
      teamSize: 'Team of 4',
      format: 'Each team must consist of 4 members.',
      shortDesc: 'Solve cryptic clues across campus grounds to uncover hidden artifacts.',
      rules: [
        'Each team must consist of 4 members.',
        'Teams must solve clues and follow the instructions provided by the organizers.',
        'Participants must remain within the designated event area.',
        'Clues and event materials must not be damaged, removed, or interfered with.',
        'Sharing clues or deliberately obstructing another team is prohibited.',
        'Teams must follow all safety and event instructions.',
        'The organizers\' decision will be final.'
      ]
    },
    {
      id: 'decode-evidence',
      title: 'DECODE THE EVIDENCE',
      sanskrit: 'व्यास रहस्य • MYSTERY CASE STUDY',
      category: 'strategy',
      image: 'assets/chakravyuh.jpg',
      prize: '₹25,000',
      teamSize: 'Team of 2',
      format: 'Each team must consist of 2 members.',
      shortDesc: 'Analyze complex crime and corporate forensic evidence to solve the mystery case.',
      rules: [
        'Each team must consist of 2 members.',
        'Teams will be provided with a mystery case and relevant evidence.',
        'Participants must analyze the information and arrive at a logical conclusion.',
        'Conclusions should be supported by the evidence provided.',
        'Teams must complete the assigned task within the allotted time.',
        'External assistance or unauthorized devices are prohibited.',
        'Judging will consider observation, logical reasoning, evidence analysis, accuracy, and decision-making.',
        'The judges\' decision will be final.'
      ]
    },
    {
      id: 'bgmi',
      title: 'BGMI SQUAD BATTLE',
      sanskrit: 'मल्लयुद्ध • BGMI SQUAD LEAGUE',
      category: 'gaming',
      image: 'assets/hero.jpg',
      prize: '₹35,000',
      teamSize: 'Squad of 4',
      format: 'Each squad must consist of 4 registered players.',
      shortDesc: 'High-octane Battlegrounds Mobile India tournament with live shoutcasting.',
      rules: [
        'Each squad must consist of 4 registered players.',
        'The match format and gameplay rules will be announced by the organizers.',
        'Players must use their registered accounts.',
        'Hacking, cheating, unauthorized software, exploits, or unfair assistance are strictly prohibited.',
        'Teaming with opposing squads is not permitted.',
        'Players must report at the designated time.',
        'All players must follow the instructions of the match officials.',
        'Any violation may result in disqualification.',
        'The organizers\' decision will be final.'
      ]
    },
    {
      id: 'free-fire',
      title: 'FREE FIRE SQUAD BATTLE',
      sanskrit: 'आग्नेयास्त्र • FREE FIRE LEAGUE',
      category: 'gaming',
      image: 'assets/dhanush.jpg',
      prize: '₹30,000',
      teamSize: 'Squad of 4',
      format: 'Each squad must consist of 4 registered players.',
      shortDesc: 'Fast-paced Free Fire survival battle for the ultimate championship crown.',
      rules: [
        'Each squad must consist of 4 registered players.',
        'The match format and gameplay rules will be announced by the organizers.',
        'Players must use their registered accounts.',
        'Hacking, cheating, unauthorized software, exploits, or unfair assistance are strictly prohibited.',
        'Teaming with opposing squads is not permitted.',
        'Players must report at the designated time.',
        'All players must follow the instructions of the match officials.',
        'Any violation may result in disqualification.',
        'The organizers\' decision will be final.'
      ]
    },
    {
      id: 'typing-marathon',
      title: 'TYPING MARATHON',
      sanskrit: 'लिखित • TYPING MARATHON',
      category: 'tech',
      image: 'assets/dhanush.jpg',
      prize: '₹15,000',
      teamSize: 'Individual',
      format: 'Format: Individual',
      shortDesc: 'Test typing speed and accuracy in a high-speed keyboard endurance sprint.',
      rules: [
        'Typing Marathon is an individual event.',
        'Participants will be provided with a passage or typing task by the organizers.',
        'The task must be completed within the allotted time.',
        'Participants must use only the system and software provided by the organizers.',
        'External assistance or unauthorized software is prohibited.',
        'Typing speed and accuracy will be considered for evaluation.',
        'Participants must follow all instructions provided by the event coordinators.',
        'The organizers\' decision will be final.'
      ]
    }
  ];

  // Schedule Timeline Data
  const TIMELINE_DATA = {
    day1: [
      { time: '09:00 AM', title: 'Grand Aagaman & Inauguration', desc: 'Vedic chantings, torch lighting ceremony, and address by Royal Convenors.' },
      { time: '10:30 AM', title: 'Pashupatastra IT Quiz Round 1', desc: 'Preliminary written & digital screening.' },
      { time: '11:30 AM', title: 'Coding & Debugging Sprint', desc: 'Algorithm and bug-fixing challenge in Takshashila Lab.' },
      { time: '02:00 PM', title: 'Shastraartha Debate Preliminary', desc: 'Structured parliamentary debate rounds.' },
      { time: '06:00 PM', title: 'Star Cultural Night & Sangeet Evening', desc: 'Guest celebrity performances & musical bands.' }
    ],
    day2: [
      { time: '09:30 AM', title: 'Chanakya Neeti (IT Manager) Crisis Round', desc: 'Workplace scenario problem solving.' },
      { time: '11:00 AM', title: 'Rajasuya Startup Pitch Presentations', desc: 'Teams pitch innovative business models to investor jury.' },
      { time: '01:30 PM', title: 'Hastinapur IPL Auction Simulation', desc: 'Live auction bidding war in Main Auditorium.' },
      { time: '03:30 PM', title: 'BGMI & Free Fire Squad Knockouts', desc: 'Esports LAN matches in Gaming Amphitheatre.' }
    ],
    day3: [
      { time: '09:30 AM', title: 'Chakravyuh Treasure Hunt', desc: 'Campus-wide clue solving hunt.' },
      { time: '11:30 AM', title: 'Vyasa Mystery Case Study Decoding', desc: 'Forensic evidence analysis and report submission.' },
      { time: '02:00 PM', title: 'Typing Marathon & Design Exhibition', desc: 'Final typing speed sprint & Chitrakala gallery review.' },
      { time: '05:00 PM', title: 'Vijaya Valedictory & Award Ceremony', desc: 'Distribution of prizes, trophies, and grand celebration.' }
    ]
  };

  // ==========================================
  // 2. DOM ELEMENTS & INITIALIZATION
  // ==========================================
  const eventsContainer = document.getElementById('events-container');
  const eventsSearchInput = document.getElementById('events-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const eventSelect = document.getElementById('event-select');
  
  // Modal Elements
  const modal = document.getElementById('event-modal');
  const modalClose = document.getElementById('modal-close');
  const modalCancel = document.getElementById('modal-cancel');
  const modalImg = document.getElementById('modal-img');
  const modalSanskrit = document.getElementById('modal-sanskrit');
  const modalTitle = document.getElementById('modal-title');
  const modalPrize = document.getElementById('modal-prize');
  const modalTeam = document.getElementById('modal-team');
  const modalDate = document.getElementById('modal-date');
  const modalDesc = document.getElementById('modal-desc');
  const modalRules = document.getElementById('modal-rules');
  const modalRegisterBtn = document.getElementById('modal-register-btn');
  let currentActiveEventId = null;

  // Timeline Elements
  const timelineDisplay = document.getElementById('timeline-display');
  const timelineTabBtns = document.querySelectorAll('.tab-btn');

  // Registration Elements
  const regForm = document.getElementById('reg-form');
  const passTierSelect = document.getElementById('pass-tier');
  const couponInput = document.getElementById('coupon-code');
  const applyCouponBtn = document.getElementById('apply-coupon-btn');
  const couponStatus = document.getElementById('coupon-status');
  
  const summaryBasePrice = document.getElementById('summary-base-price');
  const summaryTax = document.getElementById('summary-tax');
  const summaryDiscount = document.getElementById('summary-discount');
  const summaryTotal = document.getElementById('summary-total');

  const ticketPreview = document.getElementById('ticket-preview');
  const tktId = document.getElementById('tkt-id');
  const tktTierBadge = document.getElementById('tkt-tier-badge');
  const tktName = document.getElementById('tkt-name');
  const tktCollege = document.getElementById('tkt-college');
  const tktEvent = document.getElementById('tkt-event');
  const qrCanvas = document.getElementById('qr-canvas');
  const printTicketBtn = document.getElementById('print-ticket-btn');

  // Chausar Dice Elements
  const dice1 = document.getElementById('dice1');
  const dice2 = document.getElementById('dice2');
  const rollDiceBtn = document.getElementById('roll-dice-btn');
  const diceResult = document.getElementById('dice-result');

  // Audio Toggle
  const audioToggleBtn = document.getElementById('audio-toggle');
  const audioIcon = document.getElementById('audio-icon');
  let isAudioPlaying = false;
  let audioContext = null;
  let oscillator = null;

  // Pricing State
  let appliedDiscountPercent = 0;

  // ==========================================
  // 3. RENDER EVENTS CATALOG WITH CARDS & ANIMATION
  // ==========================================
  function renderEvents(filter = 'all', searchQuery = '') {
    if (!eventsContainer) return;
    eventsContainer.innerHTML = '';

    const filteredEvents = STORED_EVENTS.filter(evt => {
      const matchesCategory = (filter === 'all') || (evt.category === filter);
      const matchesSearch = evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            evt.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            evt.sanskrit.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filteredEvents.length === 0) {
      eventsContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <i class="fa-solid fa-shield-cat" style="font-size: 3rem; color: var(--gold-primary); margin-bottom: 1rem;"></i>
          <h3>No events found matching your query.</h3>
          <p>Try clearing filters or search terms.</p>
        </div>
      `;
      return;
    }

    filteredEvents.forEach((evt, idx) => {
      const card = document.createElement('div');
      card.className = 'event-card animated-card';
      card.style.animationDelay = `${idx * 0.06}s`;

      card.innerHTML = `
        <div class="event-card-img-wrap">
          <img src="${evt.image}" alt="${evt.title}" class="event-card-img">
          <span class="event-category-tag">${evt.teamSize}</span>
        </div>
        <div class="event-card-body">
          <span class="event-sanskrit-name">${evt.sanskrit}</span>
          <h3 class="event-title">${evt.title}</h3>
          <p class="event-desc">${evt.shortDesc}</p>

          <div class="event-format-badge">
            <i class="fa-solid fa-users-gear"></i> ${evt.format}
          </div>

          <div class="event-meta-grid">
            <div class="event-meta-item">
              <i class="fa-solid fa-trophy"></i> Pool: ${evt.prize}
            </div>
            <div class="event-meta-item">
              <i class="fa-solid fa-user-group"></i> ${evt.teamSize}
            </div>
          </div>

          <div class="event-card-actions">
            <button class="btn btn-outline view-details-btn" data-id="${evt.id}" style="flex: 1; padding: 0.6rem; font-size: 0.85rem;">
              <i class="fa-solid fa-file-lines"></i> View Rules
            </button>
            <button class="btn btn-gold direct-register-btn" data-id="${evt.id}" style="flex: 1; padding: 0.6rem; font-size: 0.85rem;">
              <i class="fa-solid fa-ticket"></i> Register
            </button>
          </div>
        </div>
      `;
      eventsContainer.appendChild(card);
    });

    populateEventSelect();
  }

  function populateEventSelect() {
    if (!eventSelect) return;
    eventSelect.innerHTML = '<option value="">-- Choose an Event --</option>';
    STORED_EVENTS.forEach(evt => {
      const opt = document.createElement('option');
      opt.value = evt.id;
      opt.textContent = `${evt.title} (${evt.teamSize})`;
      eventSelect.appendChild(opt);
    });
  }

  // Filter Buttons Event Listeners
  if (filterBtns) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderEvents(btn.dataset.filter, eventsSearchInput ? eventsSearchInput.value : '');
      });
    });
  }

  // Search Input Event Listener
  if (eventsSearchInput) {
    eventsSearchInput.addEventListener('input', (e) => {
      const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
      renderEvents(activeFilter, e.target.value);
    });
  }

  // Event Delegation for Event Cards
  if (eventsContainer) {
    eventsContainer.addEventListener('click', (e) => {
      const detailBtn = e.target.closest('.view-details-btn');
      const registerBtn = e.target.closest('.direct-register-btn');

      if (detailBtn) {
        openEventModal(detailBtn.dataset.id);
      } else if (registerBtn && eventSelect) {
        const evtId = registerBtn.dataset.id;
        eventSelect.value = evtId;
        const regSec = document.getElementById('registration');
        if (regSec) regSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ==========================================
  // 4. EVENT DETAILS MODAL
  // ==========================================
  function openEventModal(eventId) {
    if (!modal) return;
    const evt = STORED_EVENTS.find(e => e.id === eventId);
    if (!evt) return;

    currentActiveEventId = eventId;
    if (modalImg) modalImg.src = evt.image;
    if (modalSanskrit) modalSanskrit.textContent = evt.sanskrit;
    if (modalTitle) modalTitle.textContent = evt.title;
    if (modalPrize) modalPrize.textContent = evt.prize;
    if (modalTeam) modalTeam.textContent = evt.teamSize;
    if (modalDate) modalDate.textContent = 'Oct 15-17, 2026';
    if (modalDesc) modalDesc.textContent = evt.shortDesc;

    if (modalRules) {
      modalRules.innerHTML = '';
      evt.rules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        modalRules.appendChild(li);
      });
    }

    modal.classList.add('active');
  }

  function closeModal() {
    if (modal) modal.classList.remove('active');
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCancel) modalCancel.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (modalRegisterBtn) {
    modalRegisterBtn.addEventListener('click', () => {
      if (currentActiveEventId && eventSelect) {
        eventSelect.value = currentActiveEventId;
      }
      closeModal();
      const regSec = document.getElementById('registration');
      if (regSec) regSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ==========================================
  // 5. TIMELINE SCHEDULE ENGINE
  // ==========================================
  function renderTimeline(dayKey = 'day1') {
    if (!timelineDisplay) return;
    const schedule = TIMELINE_DATA[dayKey] || [];
    timelineDisplay.innerHTML = `
      <div class="timeline-list">
        ${schedule.map(item => `
          <div class="timeline-item">
            <div class="timeline-time"><i class="fa-solid fa-clock" style="margin-right: 0.4rem;"></i> ${item.time}</div>
            <div class="timeline-detail">
              <h4>${item.title}</h4>
              <p>${item.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (timelineTabBtns) {
    timelineTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        timelineTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTimeline(btn.dataset.day);
      });
    });
  }

  // ==========================================
  // 6. REGISTRATION & TICKET GENERATOR
  // ==========================================
  function updatePricing() {
    if (!passTierSelect) return;
    const tier = passTierSelect.value;
    let basePrice = 299;

    if (tier === 'all-access') basePrice = 599;
    if (tier === 'vip-squad') basePrice = 1499;

    const discountAmount = Math.round(basePrice * (appliedDiscountPercent / 100));
    const priceAfterDiscount = basePrice - discountAmount;
    const taxAmount = Math.round(priceAfterDiscount * 0.18);
    const totalPrice = priceAfterDiscount + taxAmount;

    if (summaryBasePrice) summaryBasePrice.textContent = `₹${basePrice}`;
    if (summaryDiscount) summaryDiscount.textContent = `- ₹${discountAmount}`;
    if (summaryTax) summaryTax.textContent = `₹${taxAmount}`;
    if (summaryTotal) summaryTotal.textContent = `₹${totalPrice}`;
  }

  if (passTierSelect) passTierSelect.addEventListener('change', updatePricing);

  if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', () => {
      const code = couponInput ? couponInput.value.trim().toUpperCase() : '';
      if (code === 'SHAKUNI20' || code === 'INSPIRE20') {
        appliedDiscountPercent = 20;
        if (couponStatus) {
          couponStatus.textContent = '✓ 20% Discount Applied!';
          couponStatus.style.color = '#4ade80';
        }
      } else if (code === 'WARRIOR10') {
        appliedDiscountPercent = 10;
        if (couponStatus) {
          couponStatus.textContent = '✓ 10% Discount Applied!';
          couponStatus.style.color = '#4ade80';
        }
      } else {
        appliedDiscountPercent = 0;
        if (couponStatus) {
          couponStatus.textContent = '✗ Invalid Coupon Code.';
          couponStatus.style.color = '#f87171';
        }
      }
      updatePricing();
    });
  }

  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('full-name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const college = document.getElementById('college').value;
      const selectedEventId = eventSelect ? eventSelect.value : '';
      const tier = passTierSelect ? passTierSelect.value : 'single';

      const evtObj = STORED_EVENTS.find(e => e.id === selectedEventId);
      const eventName = evtObj ? evtObj.title : 'General Fest Entry';

      const ticketNumber = 'KRK-' + Math.floor(1000 + Math.random() * 9000);

      // Save to LocalStorage
      const registrationRecord = {
        ticketNumber,
        name,
        email,
        phone,
        college,
        eventName,
        tier,
        date: new Date().toLocaleDateString()
      };

      let savedRegs = JSON.parse(localStorage.getItem('kurukshetra_registrations') || '[]');
      savedRegs.push(registrationRecord);
      localStorage.setItem('kurukshetra_registrations', JSON.stringify(savedRegs));

      // Display Ticket Pass
      if (tktId) tktId.textContent = `PASS #${ticketNumber}`;
      if (tktTierBadge) tktTierBadge.textContent = tier.toUpperCase();
      if (tktName) tktName.textContent = name;
      if (tktCollege) tktCollege.textContent = college;
      if (tktEvent) tktEvent.textContent = eventName;

      if (qrCanvas) drawQRCodeCanvas(qrCanvas, ticketNumber);

      if (ticketPreview) {
        ticketPreview.classList.add('active');
        ticketPreview.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  function drawQRCodeCanvas(canvas, dataStr) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#07070a';
    const size = 8;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if ((r + c) % 2 === 0 || (r === 0 || c === 0 || r === size-1 || c === size-1)) {
          ctx.fillRect(c * 10, r * 10, 8, 8);
        }
      }
    }
    ctx.fillStyle = '#e5b338';
    ctx.fillRect(5, 5, 20, 20);
    ctx.fillRect(55, 5, 20, 20);
    ctx.fillRect(5, 55, 20, 20);
  }

  if (printTicketBtn) {
    printTicketBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // ==========================================
  // 7. CHAUSAR DICE MINIGAME
  // ==========================================
  if (rollDiceBtn) {
    rollDiceBtn.addEventListener('click', () => {
      rollDiceBtn.disabled = true;
      if (dice1) dice1.classList.add('rolling');
      if (dice2) dice2.classList.add('rolling');
      if (diceResult) diceResult.textContent = 'Chausar dice spinning...';

      setTimeout(() => {
        const r1 = Math.floor(Math.random() * 6) + 1;
        const r2 = Math.floor(Math.random() * 6) + 1;

        if (dice1) {
          dice1.textContent = r1;
          dice1.classList.remove('rolling');
        }
        if (dice2) {
          dice2.textContent = r2;
          dice2.classList.remove('rolling');
        }
        rollDiceBtn.disabled = false;

        if (r1 === 6 || r2 === 6) {
          if (diceResult) diceResult.innerHTML = `🎉 <strong style="color: #4ade80;">VICTORY!</strong> You rolled a 6! Use code <strong style="color: var(--gold-light);">SHAKUNI20</strong> for 20% OFF!`;
          if (couponInput) couponInput.value = 'SHAKUNI20';
        } else {
          if (diceResult) diceResult.textContent = `Rolled ${r1} & ${r2}. Try again for a 6!`;
        }
      }, 600);
    });
  }

  // ==========================================
  // 8. HERO CANVAS PARTICLE EMBERS
  // ==========================================
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ember {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 50;
        this.size = Math.random() * 2.5 + 1;
        this.speedY = Math.random() * 1.2 + 0.4;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.7 + 0.2;
        this.color = Math.random() > 0.3 ? '#e5b338' : '#d62839';
      }
      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.opacity -= 0.0025;
        if (this.y < 0 || this.opacity <= 0) {
          this.reset();
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 40; i++) {
      particles.push(new Ember());
    }

    function animateCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateCanvas);
    }
    animateCanvas();
  }

  // ==========================================
  // 9. WEB AUDIO API AMBIENCE HUM
  // ==========================================
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      if (!isAudioPlaying) {
        try {
          audioContext = new (window.AudioContext || window.webkitAudioContext)();
          oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(146.83, audioContext.currentTime);
          gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          oscillator.start();

          isAudioPlaying = true;
          if (audioIcon) audioIcon.className = 'fa-solid fa-volume-high';
          audioToggleBtn.style.borderColor = '#4ade80';
        } catch (err) {
          console.log('Audio Context Error:', err);
        }
      } else {
        if (oscillator) {
          oscillator.stop();
          oscillator.disconnect();
        }
        isAudioPlaying = false;
        if (audioIcon) audioIcon.className = 'fa-solid fa-volume-xmark';
        audioToggleBtn.style.borderColor = 'var(--glass-border)';
      }
    });
  }

  // ==========================================
  // 10. CONTACT FORM SUBMISSION & FAQ ACCORDION
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const contactStatus = document.getElementById('c-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('c-name')?.value || 'Guest';
      
      if (contactStatus) {
        contactStatus.innerHTML = `✓ Thank you, <strong>${name}</strong>! Your message has been sent to our Royal Council.`;
        contactStatus.style.color = '#4ade80';
      }

      contactForm.reset();

      setTimeout(() => {
        if (contactStatus) contactStatus.textContent = '';
      }, 5000);
    });
  }

  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems) {
    faqItems.forEach(item => {
      const q = item.querySelector('.faq-question');
      if (q) {
        q.addEventListener('click', () => {
          item.classList.toggle('active');
        });
      }
    });
  }

  const hamburger = document.getElementById('nav-hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Sticky Navbar Scroll Listener
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Active Nav Link Observer
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        const sectionTop = sec.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = sec.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  // Initial Runs
  if (eventsContainer) renderEvents();
  if (timelineDisplay) renderTimeline('day1');
  if (passTierSelect) updatePricing();
});
