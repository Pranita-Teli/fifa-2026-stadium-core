/**
 * FIFA 2026 Stadium Core - High-Performance Modular Core Engine
 * Isolates states inside the FifaStadiumEngine class to prevent global contamination.
 */

// Synthetic multi-stadium registry database
const stadiumsDatabase = {
  metlife: {
    name: "MetLife Stadium (NY/NJ)",
    coords: { lat: 40.8135, lng: -74.0743 },
    seat: { section: "SEC 120", row: "ROW K", seat: "SEAT 12" },
    liveMatch: {
      id: 14,
      teamA: "USA",
      teamB: "GER",
      flagA: "🇺🇸",
      flagB: "🇩🇪",
      scoreA: 2,
      scoreB: 1,
      timeMin: 78,
      timeSec: 0,
      gate: "Gate C"
    },
    matches: [
      { id: 14, teamA: "USA", teamB: "GERMANY", flagA: "🇺🇸", flagB: "🇩🇪", date: "June 18, 2026", time: "20:00 EST", price: 150, gate: "Gate C" },
      { id: 28, teamA: "ARGENTINA", teamB: "SPAIN", flagA: "🇦🇷", flagB: "🇪🇸", date: "June 26, 2026", time: "21:00 EST", price: 280, gate: "Gate B" },
      { id: 31, teamA: "ITALY", teamB: "JAPAN", flagA: "🇮🇹", flagB: "🇯🇵", date: "June 30, 2026", time: "18:30 EST", price: 160, gate: "Gate A" }
    ],
    hotels: [
      { id: "ml-h1", name: "Hampton Inn Meadowlands", price: 160, distance: 1.2, vacancies: 12, maxVacancies: 15, icon: "🏨", desc: "Walking distance to MetLife gate entrances" },
      { id: "ml-h2", name: "Meadowlands Plaza Hotel", price: 210, distance: 2.0, vacancies: 0, maxVacancies: 10, icon: "🏢", desc: "Rooftop lounge overlooking stadium plaza" }
    ],
    queues: [
      { name: "Gate A (East Gate Entry)", waitTime: 28 },
      { name: "Gate B (West Gate Entry)", waitTime: 14 },
      { name: "Gate C (North Gate Entry)", waitTime: 4 },
      { name: "Main Concourse Food Court", waitTime: 18 },
      { name: "Section 120 Restrooms", waitTime: 8 }
    ]
  },
  sofi: {
    name: "SoFi Stadium (Los Angeles)",
    coords: { lat: 33.9534, lng: -118.3392 },
    seat: { section: "SEC 102", row: "ROW B", seat: "SEAT 4" },
    liveMatch: {
      id: 3,
      teamA: "MEX",
      teamB: "ITA",
      flagA: "🇲🇽",
      flagB: "🇮🇹",
      scoreA: 0,
      scoreB: 0,
      timeMin: 23,
      timeSec: 0,
      gate: "Gate A"
    },
    matches: [
      { id: 3, teamA: "MEXICO", teamB: "ITALY", flagA: "🇲🇽", flagB: "🇮🇹", date: "June 14, 2026", time: "17:00 PST", price: 190, gate: "Gate A" },
      { id: 42, teamA: "BRAZIL", teamB: "JAPAN", flagA: "🇧🇷", flagB: "🇯🇵", date: "July 01, 2026", time: "19:30 PST", price: 310, gate: "Gate D" },
      { id: 48, teamA: "USA", teamB: "ENGLAND", flagA: "🇺🇸", flagB: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", date: "July 04, 2026", time: "20:00 PST", price: 420, gate: "Gate C" }
    ],
    hotels: [
      { id: "sf-h1", name: "Sofi Luxury Suites", price: 240, distance: 0.8, vacancies: 8, maxVacancies: 10, icon: "🏨", desc: "Pre-game terrace party with direct ticket link" },
      { id: "sf-h2", name: "Hollywood Motel Hub", price: 95, distance: 3.1, vacancies: 0, maxVacancies: 8, icon: "🏘️", desc: "Affordable shared shuttle lines to the gates" }
    ],
    queues: [
      { name: "Gate A (South Entry)", waitTime: 6 },
      { name: "Gate B (VIP Main Entry)", waitTime: 22 },
      { name: "Gate C (North Entry)", waitTime: 12 },
      { name: "Gridiron Grills Plaza", waitTime: 25 },
      { name: "Lower Concourse Restrooms", waitTime: 10 }
    ]
  },
  azteca: {
    name: "Estadio Azteca (Mexico City)",
    coords: { lat: 19.3030, lng: -99.1505 },
    seat: { section: "SEC 302", row: "ROW H", seat: "SEAT 18" },
    liveMatch: {
      id: 1,
      teamA: "MEX",
      teamB: "CAN",
      flagA: "🇲🇽",
      flagB: "🇨🇦",
      scoreA: 1,
      scoreB: 0,
      timeMin: 48,
      timeSec: 0,
      gate: "Gate 1"
    },
    matches: [
      { id: 1, teamA: "MEXICO", teamB: "CANADA", flagA: "🇲🇽", flagB: "🇨🇦", date: "June 11, 2026", time: "16:00 CST", price: 90, gate: "Gate 1" },
      { id: 19, teamA: "FRANCE", teamB: "MOROCCO", flagA: "🇫🇷", flagB: "🇲🇦", date: "June 20, 2026", time: "19:00 CST", price: 220, gate: "Gate 3" },
      { id: 25, teamA: "SPAIN", teamB: "URUGUAY", flagA: "🇪🇸", flagB: "🇺🇾", date: "June 24, 2026", time: "20:30 CST", price: 150, gate: "Gate 2" }
    ],
    hotels: [
      { id: "az-h1", name: "Gran Hotel Azteca", price: 110, distance: 0.5, vacancies: 15, maxVacancies: 20, icon: "🏨", desc: "Authentic Mexican buffet dinner, adjacent to portals" },
      { id: "az-h2", name: "Cozy Coyoacán Inn", price: 50, distance: 2.4, vacancies: 4, maxVacancies: 6, icon: "🏡", desc: "Charming traditional suites in Coyoacán district" }
    ],
    queues: [
      { name: "Gate 1 (Avenida Entry)", waitTime: 32 },
      { name: "Gate 2 (Metro Rail Entry)", waitTime: 18 },
      { name: "Gate 3 (VIP West)", waitTime: 5 },
      { name: "Cantina Azteca Plaza", waitTime: 11 },
      { name: "Portal 300 Restrooms", waitTime: 7 }
    ]
  }
};

// Multilingual dictionary configuration mapping
const translations = {
  en: {
    hello_label: "Welcome",
    gateway_title: "FIFA 2026 STADIUM CORE",
    gateway_subtitle: "Access stadium telemetry, maps, tickets, and safety tools.",
    sign_in: "Sign In as Fan",
    current_match_ticket: "🎟️ Current Match Ticket",
    gate: "GATE",
    section: "SECTION",
    row: "ROW",
    seat: "SEAT",
    stadium_entry_time: "STADIUM ENTRY TIME",
    active_ledger: "My Active Ledger",
    no_tickets_yet: "No tickets purchased yet. Book tickets below!",
    upcoming_matches: "Book Upcoming Matches",
    wayfinding_queues: "🏟️ Live Wayfinding & Queues",
    seat_section_finder: "Seat Section Finder",
    seat_section_desc: "Instantly generate the fastest gate route to avoid heavy lines.",
    find_route: "Find Route",
    live_queue_status: "Live Queue Status",
    sensor_feeds: "Real-Time Sensor Feeds",
    fastest_entry: "Fastest Entry Recommended",
    stadium_guide: "🍔 Hostels, Dining & Suites",
    open_gmaps: "Open Google Maps Route",
    back_to_dashboard: "← Back to Dashboard",
    emergency_sos: "⚠️ EMERGENCY SOS DIRECT LINE",
    emergency_desc: "Press the button below only if you require immediate medical, security, or safety personnel assistance. Your location telemetry will broadcast automatically.",
    sos_panic: "SOS PANIC",
    press_now: "PRESS NOW",
    broadcast_coordinates: "Current Broadcast coordinates",
    booking_confirmed: "Booking Confirmed!",
    booking_confirmed_desc: "Your seat reservation details have been successfully synchronized to your FIFA App Account.",
    match_resv: "MATCH RESV",
    date_gate: "DATE & GATE",
    paid_total: "PAID TOTAL",
    got_it: "Got it, view Pass",
    sos_signal_activated: "EMERGENCY SOS SIGNAL ACTIVATED",
    sos_dispatch_desc: "Security and medical coordinators are en route to your exact location coordinate:",
    user_seat_metrics: "USER SEAT METRICS",
    do_not_move: "Do not move. Staff has dispatched to your beacon.",
    cancel_alarm: "❌ CANCEL ALARM (ACCIDENT)",
    security_dispatch_log: "Security dispatch logs ID: WC26-4493-STAD",
    utility_grid_title: "STADIUM CONTROLS",
    ticket_hub_title: "Match Tickets",
    stadium_routes_title: "Stadium Routes",
    stays_food_title: "Stays & Food",
    assistant_title: "AI Concierge",
    emergency_shortcut_desc: "Tap to broadcast safety coordinates",
    chat_send: "Send",
    chat_welcome: "🏟️ <strong>FIFA Assistant:</strong> Hello! Welcome to the Stadium Core. Ask me anything about stadium bag policies, Wi-Fi networks, transport routes, or ticket scanning!"
  },
  es: {
    hello_label: "Bienvenido",
    gateway_title: "NÚCLEO DEL ESTADIO FIFA 2026",
    gateway_subtitle: "Acceda a telemetría del estadio, mapas, boletos y herramientas de seguridad.",
    sign_in: "Iniciar sesión como Fan",
    current_match_ticket: "🎟️ Boleto de Partido Actual",
    gate: "PUERTA",
    section: "SECCIÓN",
    row: "FILA",
    seat: "ASIENTO",
    stadium_entry_time: "HORA DE ENTRADA AL ESTADIO",
    active_ledger: "Mi Registro Activo",
    no_tickets_yet: "Aún no hay boletos comprados. ¡Reserve abajo!",
    upcoming_matches: "Reservar Próximos Partidos",
    wayfinding_queues: "🏟️ Orientación y Colas en Vivo",
    seat_section_finder: "Buscador de Sección de Asientos",
    seat_section_desc: "Genere instantáneamente la ruta más rápida para evitar colas pesadas.",
    find_route: "Buscar Ruta",
    live_queue_status: "Estado de Colas en Vivo",
    sensor_feeds: "Transmisiones de Sensores en Tiempo Real",
    fastest_entry: "Entrada Más Rápida Recomendada",
    stadium_guide: "🍔 Hostales, Cenas y Suites",
    open_gmaps: "Abrir Ruta en Google Maps",
    back_to_dashboard: "← Volver al Tablero",
    emergency_sos: "⚠️ LÍNEA DIRECTA DE EMERGENCIA SOS",
    emergency_desc: "Presione el botón de abajo solo si necesita asistencia médica, de seguridad o de personal de seguridad inmediata. Su telemetría se transmitirá automáticamente.",
    sos_panic: "SOS PÁNICO",
    press_now: "PRESIONAR AHORA",
    broadcast_coordinates: "Coordenadas de transmisión actuales",
    booking_confirmed: "¡Reserva Confirmada!",
    booking_confirmed_desc: "Los detalles de su reserva de asiento se han sincronizado correctamente con su cuenta de la aplicación FIFA.",
    match_resv: "RESV DE PARTIDO",
    date_gate: "FECHA Y PUERTA",
    paid_total: "TOTAL PAGADO",
    got_it: "Entendido, ver Pase",
    sos_signal_activated: "SEÑAL DE EMERGENCIA SOS ACTIVADA",
    sos_dispatch_desc: "Los coordinadores médicos y de seguridad están en camino a sus coordenadas exactas:",
    user_seat_metrics: "MÉTRICAS DE ASIENTO DE USUARIO",
    do_not_move: "No se mueva. El personal ha sido enviado a su baliza.",
    cancel_alarm: "❌ CANCELAR ALARMA (ACCIDENTE)",
    security_dispatch_log: "ID de registro de envío de seguridad: WC26-4493-STAD",
    utility_grid_title: "CONTROLES DEL ESTADIO",
    ticket_hub_title: "Boletos de Partido",
    stadium_routes_title: "Rutas del Estadio",
    stays_food_title: "Hospedaje y Comida",
    assistant_title: "Conserje IA",
    emergency_shortcut_desc: "Toque para transmitir coordenadas de seguridad",
    chat_send: "Enviar",
    chat_welcome: "🏟️ <strong>Asistente FIFA:</strong> ¡Hola! Bienvenido al Núcleo del Estadio. ¡Pregúnteme cualquier cosa sobre políticas de bolsos, redes Wi-Fi, rutas de transporte o escaneo de boletos!"
  },
  fr: {
    hello_label: "Bienvenue",
    gateway_title: "NOYAU DU STADE FIFA 2026",
    gateway_subtitle: "Accédez à la télémétrie du stade, aux cartes, aux billets et aux outils de sécurité.",
    sign_in: "Se connecter en tant que Fan",
    current_match_ticket: "🎟️ Billet du Match Actuel",
    gate: "PORTE",
    section: "SECTION",
    row: "RANGÉE",
    seat: "SIÈGE",
    stadium_entry_time: "HEURE D'ENTRÉE AU STADE",
    active_ledger: "Mon Registre Actif",
    no_tickets_yet: "Aucun billet acheté. Réservez ci-dessous !",
    upcoming_matches: "Réserver les Prochains Matchs",
    wayfinding_queues: "🏟️ Guidage et Files d'attente en Direct",
    seat_section_finder: "Recherche de Section de Siège",
    seat_section_desc: "Générez instantanément l'itinéraire le plus rapide pour éviter les files d'attente.",
    find_route: "Calculer l'itinéraire",
    live_queue_status: "Statut des Files en Direct",
    sensor_feeds: "Flux de Capteurs en Temps Réel",
    fastest_entry: "Entrée la Plus Rapide Recommandée",
    stadium_guide: "🍔 Auberges, Repas & Suites",
    open_gmaps: "Ouvrir l'itinéraire Google Maps",
    back_to_dashboard: "← Retour au Tableau de bord",
    emergency_sos: "⚠️ LIGNE DIRECTE D'URGENCE SOS",
    emergency_desc: "Appuyez sur ce bouton uniquement en cas de besoin immédiat d'assistance médicale ou de sécurité. Votre position sera diffusée automatiquement.",
    sos_panic: "SOS PANIQUE",
    press_now: "APPUYER ICI",
    broadcast_coordinates: "Coordonnées de diffusion actuelles",
    booking_confirmed: "Réservation Confirmée !",
    booking_confirmed_desc: "Les détails de votre réservation de siège ont été synchronisés avec votre compte FIFA.",
    match_resv: "RÉSERVATION MATCH",
    date_gate: "DATE & PORTE",
    paid_total: "TOTAL PAYÉ",
    got_it: "Compris, voir le billet",
    sos_signal_activated: "SIGNAL D'URGENCE SOS ACTIVÉ",
    sos_dispatch_desc: "Les coordinateurs de sécurité et médicaux sont en route vers vos coordonnées exactes :",
    user_seat_metrics: "DONNÉES DU SIÈGE UTILISATEUR",
    do_not_move: "Ne bougez pas. Une équipe a été dépêchée vers votre balise.",
    cancel_alarm: "❌ ANNULER L'ALARME (ERREUR)",
    security_dispatch_log: "ID de répartition de sécurité : WC26-4493-STAD",
    utility_grid_title: "CONTROLES DU STADE",
    ticket_hub_title: "Billets de Match",
    stadium_routes_title: "Ressources Stade",
    stays_food_title: "Hôtel & Repas",
    assistant_title: "Concierge IA",
    emergency_shortcut_desc: "Appuyez pour diffuser les coordonnées de sécurité",
    chat_send: "Envoyer",
    chat_welcome: "🏟️ <strong>Concierge FIFA:</strong> Bonjour ! Bienvenue au Noyau du Stade. Posez-moi vos questions sur la politique des sacs, les réseaux Wi-Fi, les transports ou le scan des billets !"
  }
};

class FifaStadiumEngine {
  constructor() {
    this.currentLanguage = "en";
    this.currentUserName = "Alex Johnson";
    this.activeStadiumKey = "metlife";
    this.purchasedTicketsCount = 0;
    this.boughtLedger = [];
    this.stadiums = JSON.parse(JSON.stringify(stadiumsDatabase)); // Deep copy database state
  }

  /**
   * Initializes bindings, event triggers, session verifications
   */
  init() {
    // Check if session is verified on load
    if (typeof window !== "undefined" && window.SecurityManager) {
      if (window.SecurityManager.verifySession()) {
        const storedUser = sessionStorage.getItem("active_username");
        if (storedUser) {
          this.currentUserName = storedUser;
        }
        document.getElementById("gateway-overlay").classList.add("hidden");
        document.getElementById("dashboard-fan-name").textContent = this.currentUserName;
        this.updateStadiumUI(this.activeStadiumKey);
        this.initAIConciergeWelcome();
      }
    }
  }

  /**
   * Selection of language definitions
   */
  selectGatewayLanguage(lang) {
    this.currentLanguage = lang;
    
    const languages = ["en", "es", "fr"];
    languages.forEach(l => {
      const btn = document.getElementById(`btn-lang-${l}`);
      if (btn) {
        if (l === lang) {
          btn.className = "bg-amber-500 text-slate-950 border border-amber-500 font-extrabold py-3.5 rounded-2xl text-xs transition-colors duration-200";
        } else {
          btn.className = "bg-slate-950 text-slate-400 border border-white/5 hover:border-white/10 font-bold py-3.5 rounded-2xl text-xs transition-colors duration-200";
        }
      }
    });

    // Update labels in gateway
    const titleEl = document.getElementById("gateway-title");
    const subtitleEl = document.getElementById("gateway-subtitle");
    const signinEl = document.getElementById("btn-sign-in");
    const inputEl = document.getElementById("fan-name-input");

    if (titleEl) {
      titleEl.textContent = translations[lang].gateway_title;
    }
    if (subtitleEl) {
      subtitleEl.textContent = translations[lang].gateway_subtitle;
    }
    if (signinEl) {
      signinEl.textContent = translations[lang].sign_in;
    }
    if (inputEl) {
      inputEl.placeholder = lang === "en" ? "Enter Fan Username..." : lang === "es" ? "Ingrese nombre de usuario..." : "Entrez le nom d'utilisateur...";
    }
  }

  /**
   * Submit authorization credentials
   */
  submitFanAuth() {
    const inputEl = document.getElementById("fan-name-input");
    const rawName = inputEl ? inputEl.value : "";
    
    let sanitizedName = rawName;
    if (typeof window !== "undefined" && window.SecurityManager) {
      sanitizedName = window.SecurityManager.sanitizeInput(rawName);
    }

    if (!sanitizedName) {
      const alertMsg = this.currentLanguage === "en" ? "Please input your Username." : this.currentLanguage === "es" ? "Por favor ingrese su usuario." : "Veuillez entrer votre nom d'utilisateur.";
      alert(alertMsg);
      return;
    }

    this.currentUserName = sanitizedName;

    // Start secure session management
    if (typeof window !== "undefined" && window.SecurityManager) {
      window.SecurityManager.startSession(this.currentUserName);
    }

    // Update state variables in HTML
    const overlay = document.getElementById("gateway-overlay");
    if (overlay) {
      overlay.classList.add("hidden");
    }

    const nameDisplay = document.getElementById("dashboard-fan-name");
    if (nameDisplay) {
      nameDisplay.textContent = this.currentUserName;
    }

    this.translateStaticDOM();
    this.updateStadiumUI(this.activeStadiumKey);
    this.initAIConciergeWelcome();
  }

  /**
   * Multi-language UI translations replacement
   */
  translateStaticDOM() {
    const translateElements = document.querySelectorAll("[data-translate]");
    translateElements.forEach(el => {
      const key = el.getAttribute("data-translate");
      if (translations[this.currentLanguage][key]) {
        el.innerHTML = translations[this.currentLanguage][key];
      }
    });

    const searchInput = document.getElementById("seat-section-input");
    if (searchInput) {
      searchInput.placeholder = translations[this.currentLanguage].seat_placeholder || "Type your section (e.g. 105)";
    }
    
    const chatInput = document.getElementById("chat-user-input");
    if (chatInput) {
      chatInput.placeholder = translations[this.currentLanguage].chat_placeholder || "Type a question (e.g. bag policy)...";
    }
  }

  /**
   * Stadium switches
   */
  changeActiveStadium(stadiumKey) {
    this.activeStadiumKey = stadiumKey;
    this.updateStadiumUI(stadiumKey);
  }

  /**
   * Update active stadium visual views
   */
  updateStadiumUI(stadiumKey) {
    const data = this.stadiums[stadiumKey];
    if (!data) {
      return;
    }

    const descEl = document.getElementById("dashboard-stadium-desc");
    if (descEl) {
      descEl.textContent = `${data.name} • Coordinates: ${data.coords.lat}, ${data.coords.lng}`;
    }

    // Digital Ticket Updates
    const ticketMatchId = document.getElementById("ticket-match-id");
    const ticketTeams = document.getElementById("ticket-match-teams");
    const ticketGate = document.getElementById("ticket-gate");
    const ticketSec = document.getElementById("ticket-section");
    const ticketRow = document.getElementById("ticket-row");
    const ticketSeat = document.getElementById("ticket-seat");

    if (ticketMatchId) {
      ticketMatchId.textContent = `MATCH ${data.liveMatch.id}`;
    }
    if (ticketTeams) {
      ticketTeams.textContent = `${data.liveMatch.flagA} ${data.liveMatch.teamA} vs ${data.liveMatch.flagB} ${data.liveMatch.teamB}`;
    }
    if (ticketGate) {
      ticketGate.textContent = data.liveMatch.gate;
    }
    if (ticketSec) {
      ticketSec.textContent = data.seat.section;
    }
    if (ticketRow) {
      ticketRow.textContent = data.seat.row;
    }
    if (ticketSeat) {
      ticketSeat.textContent = data.seat.seat;
    }

    // Emergency overlay parameters mapping
    const sosBadge = document.getElementById("sos-coord-badge");
    const sosOverlaySeat = document.getElementById("sos-overlay-seat");
    const sosOverlayStad = document.getElementById("sos-overlay-stadium");

    if (sosBadge) {
      sosBadge.textContent = `${data.seat.section}, ${data.seat.row} (${data.name})`;
    }
    if (sosOverlaySeat) {
      sosOverlaySeat.textContent = `${data.seat.section}, ${data.seat.row}, ${data.seat.seat}`;
    }
    if (sosOverlayStad) {
      sosOverlayStad.textContent = `${data.name.toUpperCase()} • ${data.liveMatch.gate.toUpperCase()}`;
    }

    // Outbound GPS Maps anchor mapping
    const gpsEl = document.getElementById("stadium-gps-badge");
    const mapsLink = document.getElementById("outbound-gmaps-link");

    if (gpsEl) {
      gpsEl.textContent = `${data.name} (Lat: ${data.coords.lat}, Lng: ${data.coords.lng})`;
    }
    if (mapsLink) {
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${data.coords.lat},${data.coords.lng}`;
      mapsLink.setAttribute("href", mapsUrl);
    }

    // Sub-lists renders
    this.renderMatchesList(data.matches);
    this.renderQueueCheckers();
    this.filterVenues("all");
  }

  /**
   * Swapping display panels dynamically
   */
  togglePanel(panelId) {
    const dashboard = document.getElementById("panel-dashboard");
    if (dashboard) {
      dashboard.classList.remove("active");
    }

    const panels = ["tickets", "stadium", "food-stay", "help", "sos"];
    panels.forEach(p => {
      const el = document.getElementById(`panel-${p}`);
      if (el) {
        el.classList.remove("active");
      }
    });

    const target = document.getElementById(`panel-${panelId}`);
    if (target) {
      target.classList.add("active");
    }
  }

  showDashboardHome() {
    const panels = ["tickets", "stadium", "food-stay", "help", "sos"];
    panels.forEach(p => {
      const el = document.getElementById(`panel-${p}`);
      if (el) {
        el.classList.remove("active");
      }
    });
    
    const dashboard = document.getElementById("panel-dashboard");
    if (dashboard) {
      dashboard.classList.add("active");
    }
  }

  /**
   * Matches booking layout renders
   */
  renderMatchesList(matches) {
    const container = document.getElementById("matches-list-container");
    if (!container) {
      return;
    }
    container.innerHTML = "";

    const activeMatchId = this.stadiums[this.activeStadiumKey].liveMatch.id;
    const bookables = matches.filter(m => m.id !== activeMatchId);

    bookables.forEach(match => {
      const row = document.createElement("article");
      row.className = "bg-slate-900/40 border border-white/5 hover:border-white/10 rounded-2xl p-4 flex justify-between items-center transition-all duration-200";
      row.innerHTML = `
        <div class="space-y-1">
          <p class="text-[10px] text-slate-500 tracking-wider font-extrabold uppercase">MATCH ${match.id} • GROUP STAGE</p>
          <div class="flex items-center gap-1.5">
            <span class="text-sm">${match.flagA}</span>
            <span class="text-xs font-black text-white">${match.teamA}</span>
            <span class="text-[10px] text-slate-500 font-bold">vs</span>
            <span class="text-sm">${match.flagB}</span>
            <span class="text-xs font-black text-white">${match.teamB}</span>
          </div>
          <p class="text-[10px] text-slate-400 font-semibold">${match.date} • ${match.time}</p>
        </div>
        <button onclick="stadiumEngine.requestMatchBooking(${match.id})" aria-label="Book ticket for Match ${match.id} price $${match.price}"
                class="bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-slate-950 border border-amber-500/30 hover:border-transparent font-extrabold px-4 py-2.5 rounded-xl text-xs transition-all duration-200 active:scale-95">
          $${match.price}
        </button>
      `;
      container.appendChild(row);
    });
  }

  /**
   * Booking request operations
   */
  requestMatchBooking(matchId) {
    const currentData = this.stadiums[this.activeStadiumKey];
    const match = currentData.matches.find(m => m.id === matchId);
    if (!match) {
      return;
    }

    this.purchasedTicketsCount++;
    
    // Update ticket label counter
    const countDisplay = document.getElementById("dashboard-tickets-count");
    if (countDisplay) {
      countDisplay.textContent = this.purchasedTicketsCount === 1 
        ? "1 Ticket purchased" 
        : `${this.purchasedTicketsCount} Tickets purchased`;
    }

    const badgeDisplay = document.getElementById("ledger-count-badge");
    if (badgeDisplay) {
      badgeDisplay.textContent = `Purchased: ${this.purchasedTicketsCount}`;
    }

    // Add to ledger stack
    this.boughtLedger.push(match);
    this.renderLedger();

    // Confirm booking model popup updates
    const modalId = document.getElementById("modal-match-id");
    const modalTeams = document.getElementById("modal-match-teams");
    const modalDate = document.getElementById("modal-match-date");
    const modalPrice = document.getElementById("modal-match-price");

    if (modalId) {
      modalId.textContent = `MATCH ${match.id}`;
    }
    if (modalTeams) {
      modalTeams.textContent = `${match.flagA} ${match.teamA} vs ${match.flagB} ${match.teamB}`;
    }
    if (modalDate) {
      modalDate.textContent = `${match.date} • Entry: ${match.gate}`;
    }
    if (modalPrice) {
      modalPrice.textContent = `$${match.price}.00`;
    }

    const modal = document.getElementById("booking-modal");
    if (modal) {
      modal.classList.remove("hidden");
    }
  }

  renderLedger() {
    const container = document.getElementById("ledger-rows-container");
    if (!container) {
      return;
    }
    container.innerHTML = "";

    if (this.boughtLedger.length === 0) {
      const emptyText = document.createElement("p");
      emptyText.className = "text-center py-4";
      emptyText.id = "ledger-empty-text";
      emptyText.setAttribute("data-translate", "no_tickets_yet");
      emptyText.textContent = translations[this.currentLanguage].no_tickets_yet;
      container.appendChild(emptyText);
      return;
    }

    this.boughtLedger.forEach(ticket => {
      const item = document.createElement("div");
      item.className = "bg-slate-950/60 border border-white/5 rounded-xl p-3 flex justify-between items-center text-xs";
      item.innerHTML = `
        <div>
          <p class="font-extrabold text-white">MATCH ${ticket.id} (${ticket.teamA} vs ${ticket.teamB})</p>
          <p class="text-[10px] text-slate-500">${ticket.date} • ${ticket.gate} • Verified Entry pass</p>
        </div>
        <span class="text-emerald-400 font-extrabold">Paid $${ticket.price}</span>
      `;
      container.appendChild(item);
    });
  }

  closeBookingModal() {
    const modal = document.getElementById("booking-modal");
    if (modal) {
      modal.classList.add("hidden");
    }
  }

  /**
   * Render sensor live wait progress bars
   */
  renderQueueCheckers() {
    const data = this.stadiums[this.activeStadiumKey];
    const container = document.getElementById("queue-bars-container");
    if (!container) {
      return;
    }
    container.innerHTML = "";

    data.queues.forEach(zone => {
      let barColor = "bg-emerald-500";
      let textColor = "text-emerald-400";
      let tagEmoji = "🟢";
      let statusText = this.currentLanguage === "en" ? "Clear (Fast)" : this.currentLanguage === "es" ? "Despejado (Rápido)" : "Fluide (Rapide)";

      if (zone.waitTime > 15) {
        barColor = "bg-rose-500";
        textColor = "text-rose-400";
        tagEmoji = "🔴";
        statusText = this.currentLanguage === "en" ? "Very Busy" : this.currentLanguage === "es" ? "Muy Concurrido" : "Très Chargé";
      } else if (zone.waitTime >= 5) {
        barColor = "bg-amber-500";
        textColor = "text-amber-400";
        tagEmoji = "🟡";
        statusText = this.currentLanguage === "en" ? "Moderate" : this.currentLanguage === "es" ? "Moderado" : "Modéré";
      }

      const percent = Math.min(100, Math.max(12, (zone.waitTime / 35) * 100));

      const barRow = document.createElement("div");
      barRow.className = "bg-slate-900/40 border border-white/5 rounded-2xl p-4 space-y-2.5";
      barRow.innerHTML = `
        <div class="flex justify-between items-center text-xs">
          <span class="font-bold text-slate-200">${zone.name}</span>
          <span class="font-black ${textColor} flex items-center gap-1">
            <span>${tagEmoji}</span> ${zone.waitTime} mins
          </span>
        </div>
        <div class="w-full bg-slate-950 h-3.5 rounded-full overflow-hidden border border-white/5">
          <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${percent}%"></div>
        </div>
        <div class="flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase">
          <span>Status: ${statusText}</span>
          <span>Est. Wait</span>
        </div>
      `;
      container.appendChild(barRow);
    });

    const gates = data.queues.filter(q => q.name.includes("Gate"));
    const sortedGates = [...gates].sort((a, b) => a.waitTime - b.waitTime);
    const bestGate = sortedGates[0];

    const alertEl = document.getElementById("smart-alert-text");
    if (alertEl) {
      alertEl.innerHTML = 
        this.currentLanguage === "en"
        ? `Enter via <strong>${bestGate.name}</strong>. Current wait is only <strong>${bestGate.waitTime} minutes</strong>.`
        : this.currentLanguage === "es"
        ? `Ingrese por <strong>${bestGate.name}</strong>. La espera actual es de solo <strong>${bestGate.waitTime} minutos</strong>.`
        : `Entrez via <strong>${bestGate.name}</strong>. L'attente actuelle est de seulement <strong>${bestGate.waitTime} minutes</strong>.`;
    }

    const dashboardGate = document.getElementById("dashboard-fastest-gate");
    if (dashboardGate) {
      const nameParts = bestGate.name.split(" ");
      const gateLabel = `${nameParts[0]} ${nameParts[1]}`;
      dashboardGate.textContent = 
        this.currentLanguage === "en" ? `Fastest: ${gateLabel} (${bestGate.waitTime}m)` :
        this.currentLanguage === "es" ? `Rápido: ${gateLabel} (${bestGate.waitTime}m)` :
        `Rapide: ${gateLabel} (${bestGate.waitTime}m)`;
    }
  }

  /**
   * Wayfinder seat routes calculator
   */
  calculateRoute() {
    const inputEl = document.getElementById("seat-section-input");
    const rawVal = inputEl ? inputEl.value.trim() : "";

    let input = rawVal;
    if (typeof window !== "undefined" && window.SecurityManager) {
      input = window.SecurityManager.sanitizeInput(rawVal);
    }

    const container = document.getElementById("route-output-container");
    const stepsDiv = document.getElementById("route-steps");

    if (!input) {
      const alertMsg = this.currentLanguage === "en" ? "Please enter your seat section." : this.currentLanguage === "es" ? "Por favor ingrese su sección." : "Veuillez entrer votre section.";
      alert(alertMsg);
      return;
    }

    const data = this.stadiums[this.activeStadiumKey];
    const gates = data.queues.filter(q => q.name.includes("Gate"));
    const sorted = [...gates].sort((a, b) => a.waitTime - b.waitTime);
    const optimalGate = sorted[0];
    const congestedGate = [...gates].sort((a, b) => b.waitTime - a.waitTime)[0];

    if (container) {
      container.classList.remove("hidden");
    }

    if (!stepsDiv) {
      return;
    }

    if (this.currentLanguage === "en") {
      stepsDiv.innerHTML = `
        <div class="flex gap-3">
          <div class="flex flex-col items-center">
            <span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black flex items-center justify-center">1</span>
            <span class="w-0.5 h-6 bg-white/10 my-1"></span>
          </div>
          <div>
            <p class="font-extrabold text-white text-xs">GO TO SECURITY ZONE</p>
            <p class="text-[11px] text-slate-400 mt-0.5">Use <span class="text-emerald-400 font-extrabold">${optimalGate.name}</span>. It has the shortest delay (${optimalGate.waitTime}m). <br><span class="text-rose-400">⚠️ Avoid ${congestedGate.name} (${congestedGate.waitTime}m wait).</span></p>
          </div>
        </div>
        <div class="flex gap-3">
          <div class="flex flex-col items-center">
            <span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black flex items-center justify-center">2</span>
            <span class="w-0.5 h-6 bg-white/10 my-1"></span>
          </div>
          <div>
            <p class="font-extrabold text-white text-xs">GATE ENTRY & NFC PASS</p>
            <p class="text-[11px] text-slate-400 mt-0.5">Scan your digital ticket barcode at the turnstiles. Follow the color-coded arrows on Level 1.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <div class="flex flex-col items-center">
            <span class="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black flex items-center justify-center">3</span>
          </div>
          <div>
            <p class="font-extrabold text-emerald-400 text-xs">REACH SECTION ${input.toUpperCase()}</p>
            <p class="text-[11px] text-slate-400 mt-0.5">Follow portal directories on the concourse level. Your section ${input.toUpperCase()} is directly ahead.</p>
          </div>
        </div>
      `;
    } else if (this.currentLanguage === "es") {
      stepsDiv.innerHTML = `
        <div class="flex gap-3">
          <div class="flex flex-col items-center">
            <span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black flex items-center justify-center">1</span>
            <span class="w-0.5 h-6 bg-white/10 my-1"></span>
          </div>
          <div>
            <p class="font-extrabold text-white text-xs">IR A LA ZONA DE SEGURIDAD</p>
            <p class="text-[11px] text-slate-400 mt-0.5">Use <span class="text-emerald-400 font-extrabold">${optimalGate.name}</span>. Tiene la espera más corta (${optimalGate.waitTime}m). <br><span class="text-rose-400">⚠️ Evite ${congestedGate.name} (${congestedGate.waitTime}m de espera).</span></p>
          </div>
        </div>
        <div class="flex gap-3">
          <div class="flex flex-col items-center">
            <span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black flex items-center justify-center">2</span>
            <span class="w-0.5 h-6 bg-white/10 my-1"></span>
          </div>
          <div>
            <p class="font-extrabold text-white text-xs">ACCESO Y ESCANEO DE BOLETOS</p>
            <p class="text-[11px] text-slate-400 mt-0.5">Escanee su boleto digital en los torniquetes. Siga las flechas codificadas por colores en el Nivel 1.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <div class="flex flex-col items-center">
            <span class="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black flex items-center justify-center">3</span>
          </div>
          <div>
            <p class="font-extrabold text-emerald-400 text-xs">LLEGAR A LA SECCIÓN ${input.toUpperCase()}</p>
            <p class="text-[11px] text-slate-400 mt-0.5">Siga los directorios en el pasillo principal. Su sección ${input.toUpperCase()} está justo adelante.</p>
          </div>
        </div>
      `;
    } else {
      stepsDiv.innerHTML = `
        <div class="flex gap-3">
          <div class="flex flex-col items-center">
            <span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black flex items-center justify-center">1</span>
            <span class="w-0.5 h-6 bg-white/10 my-1"></span>
          </div>
          <div>
            <p class="font-extrabold text-white text-xs">REJOINDRE LA ZONE DE SÉCURITÉ</p>
            <p class="text-[11px] text-slate-400 mt-0.5">Utilisez <span class="text-emerald-400 font-extrabold">${optimalGate.name}</span>. L'attente y est minimale (${optimalGate.waitTime}m). <br><span class="text-rose-400">⚠️ Évitez ${congestedGate.name} (${congestedGate.waitTime}m d'attente).</span></p>
          </div>
        </div>
        <div class="flex gap-3">
          <div class="flex flex-col items-center">
            <span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black flex items-center justify-center">2</span>
            <span class="w-0.5 h-6 bg-white/10 my-1"></span>
          </div>
          <div>
            <p class="font-extrabold text-white text-xs">ENTRÉE ET VALIDATION DU TICKET</p>
            <p class="text-[11px] text-slate-400 mt-0.5">Scannez votre billet numérique aux portillons. Suivez les flèches directionnelles au Niveau 1.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <div class="flex flex-col items-center">
            <span class="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black flex items-center justify-center">3</span>
          </div>
          <div>
            <p class="font-extrabold text-emerald-400 text-xs">ATTEINDRE LA SECTION ${input.toUpperCase()}</p>
            <p class="text-[11px] text-slate-400 mt-0.5">Suivez la signalisation dans le hall d'entrée. Votre section ${input.toUpperCase()} se trouve droit devant.</p>
          </div>
        </div>
      `;
    }

    setTimeout(() => {
      container.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  }

  /**
   * Hotel vacancy filter toggles
   */
  filterVenues(filterType) {
    const filters = ["all", "budget", "luxury"];
    filters.forEach(type => {
      const btn = document.getElementById(`btn-filter-${type}`);
      if (btn) {
        if (type === filterType) {
          btn.className = "flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all duration-200 bg-amber-500 text-slate-950";
        } else {
          btn.className = "flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all duration-200 text-slate-400 hover:text-slate-100";
        }
      }
    });

    this.renderVenues(filterType);
  }

  renderVenues(filterType) {
    const container = document.getElementById("venues-list");
    if (!container) {
      return;
    }
    container.innerHTML = "";

    const currentData = this.stadiums[this.activeStadiumKey];
    let filtered = currentData.hotels;

    if (filterType === "budget") {
      filtered = currentData.hotels.filter(v => v.price < 170);
    } else if (filterType === "luxury") {
      filtered = currentData.hotels.filter(v => v.price > 220);
    }

    filtered.forEach(venue => {
      const hasVacancy = venue.vacancies > 0;
      
      let badgeColor = "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      let badgeText = this.currentLanguage === "en" ? `🟢 Vacancies Available (${venue.vacancies} rooms)` : this.currentLanguage === "es" ? `🟢 Vacantes Disponibles (${venue.vacancies} habs)` : `🟢 Places Disponibles (${venue.vacancies} ch)`;
      
      if (!hasVacancy) {
        badgeColor = "text-rose-400 bg-rose-500/10 border-rose-500/20";
        badgeText = translations[this.currentLanguage].full_occupancy;
      }

      const card = document.createElement("article");
      card.className = "bg-slate-900/40 border border-white/5 hover:border-white/10 rounded-2xl p-4 flex gap-4 transition-all duration-200";
      card.innerHTML = `
        <div class="w-12 h-12 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center text-2xl shrink-0 self-center">
          ${venue.icon}
        </div>
        <div class="flex-1 space-y-1.5 min-w-0">
          <div class="flex items-center justify-between">
            <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${badgeColor}">
              ${badgeText}
            </span>
            <span class="text-[10px] text-slate-400 font-medium">${venue.distance} mi away</span>
          </div>
          <h4 class="text-sm font-black text-white truncate">${venue.name}</h4>
          <p class="text-[10px] text-slate-400 truncate leading-none">${venue.desc}</p>
          <div class="flex justify-between items-center pt-1 border-t border-white/5">
            <span class="text-xs font-black text-emerald-400">$${venue.price} / day</span>
            <button onclick="stadiumEngine.bookHotelStay('${venue.id}')" ${!hasVacancy ? "disabled" : ""} aria-label="Book stay at ${venue.name}"
                    class="px-4 py-2 rounded-xl text-[10px] font-extrabold transition-all duration-200 active:scale-95 ${hasVacancy ? "bg-amber-500 text-slate-950 hover:bg-amber-600" : "bg-slate-800 text-slate-500 cursor-not-allowed"}">
              ${translations[this.currentLanguage].book_stay}
            </button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    const dealsEl = document.getElementById("dashboard-deals-count");
    if (dealsEl) {
      dealsEl.textContent = `${currentData.hotels.length} hotels near stadium`;
    }
  }

  bookHotelStay(hotelId) {
    const currentData = this.stadiums[this.activeStadiumKey];
    const hotel = currentData.hotels.find(h => h.id === hotelId);

    if (hotel && hotel.vacancies > 0) {
      hotel.vacancies--;
      
      const successMsg = this.currentLanguage === "en" ? `Stay booked successfully at ${hotel.name}!` : this.currentLanguage === "es" ? `¡Estancia reservada con éxito en ${hotel.name}!` : `Réservation réussie à ${hotel.name}!`;
      alert(successMsg);
      this.filterVenues("all");
    }
  }

  /**
   * AI Multilingual Concierge Chat
   */
  initAIConciergeWelcome() {
    const container = document.getElementById("chat-messages-container");
    if (!container) {
      return;
    }
    container.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "flex justify-start mb-1 animate-fade-in-up";

    const bubble = document.createElement("div");
    bubble.className = "bg-slate-800/80 text-slate-100 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[85%] text-xs shadow-md border border-slate-700/20 leading-relaxed";
    bubble.innerHTML = translations[this.currentLanguage].chat_welcome;

    wrapper.appendChild(bubble);
    container.appendChild(wrapper);
  }

  handleChatKeyDown(event) {
    if (event.key === "Enter") {
      this.sendChatMessage();
    }
  }

  sendChatMessage() {
    const inputEl = document.getElementById("chat-user-input");
    const rawVal = inputEl ? inputEl.value.trim() : "";
    if (!rawVal) {
      return;
    }

    let text = rawVal;
    if (typeof window !== "undefined" && window.SecurityManager) {
      text = window.SecurityManager.sanitizeInput(rawVal);
    }

    if (inputEl) {
      inputEl.value = "";
    }

    const chatContainer = document.getElementById("chat-messages-container");
    if (!chatContainer) {
      return;
    }

    // Secure message ingestion using native text-node elements to eliminate XSS
    const userWrapper = document.createElement("div");
    userWrapper.className = "flex justify-end mb-1 animate-fade-in-up";

    const userBubble = document.createElement("div");
    userBubble.className = "bg-amber-500 text-slate-950 rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[85%] text-xs font-bold shadow-md";
    userBubble.appendChild(document.createTextNode(text)); // Safe Text Node Injection

    userWrapper.appendChild(userBubble);
    chatContainer.appendChild(userWrapper);
    this.scrollToLatestMessage();

    // Typing Loader indicator setup
    const typingWrapper = document.createElement("div");
    typingWrapper.id = "chat-typing-indicator";
    typingWrapper.className = "flex justify-start mb-1";
    
    const typingBubble = document.createElement("div");
    typingBubble.className = "bg-slate-800/80 text-slate-300 rounded-2xl rounded-tl-none px-4 py-3 text-xs shadow-md border border-slate-700/20 flex items-center gap-1";
    typingBubble.innerHTML = `
      <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0s"></span>
      <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.15s"></span>
      <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.3s"></span>
    `;
    typingWrapper.appendChild(typingBubble);
    chatContainer.appendChild(typingWrapper);
    this.scrollToLatestMessage();

    // Execute exact 1000ms latency timer response
    setTimeout(() => {
      const indicator = document.getElementById("chat-typing-indicator");
      if (indicator) {
        indicator.remove();
      }

      const responseText = this.calculateAIResponse(text);

      const aiWrapper = document.createElement("div");
      aiWrapper.className = "flex justify-start mb-1 animate-fade-in-up";

      const aiBubble = document.createElement("div");
      aiBubble.className = "bg-slate-800/80 text-slate-100 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[85%] text-xs shadow-md border border-slate-700/20 leading-relaxed";
      aiBubble.innerHTML = responseText; // Static responses contain safe vector markup

      aiWrapper.appendChild(aiBubble);
      chatContainer.appendChild(aiWrapper);
      this.scrollToLatestMessage();

    }, 1000);
  }

  scrollToLatestMessage() {
    const chatContainer = document.getElementById("chat-messages-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  calculateAIResponse(userText) {
    const lower = userText.toLowerCase();
    
    const responses = {
      en: {
        bag: "👜 <strong>FIFA Bag Policy:</strong> Only clear plastic, vinyl, or PVC bags smaller than 12x6x12 inches are allowed inside the stadium gates. Small clutch purses under 4.5x6.5 inches are also permitted without being clear.",
        food: "🍔 <strong>Food & Drinks:</strong> Outside food/beverages are strictly banned inside security. However, you are allowed to carry one empty, clear plastic bottle (20oz or smaller) to fill at stadium drinking fountains. Check out the <strong>Stays & Food</strong> screen for local recommendations!",
        ticket: "🎟️ <strong>Digital Tickets:</strong> Keep your mobile digital pass ready for scan upon reaching the turnstile line. The ticket renders a live-updating bar/QR. You can view yours inside the <strong>Tickets</strong> screen.",
        wifi: "📶 <strong>Stadium Fan Wi-Fi:</strong> Connect for free by selecting the SSID <strong>FIFA2026_FREE_FAN_WIFI</strong> from your device's settings network list. Accept the login terms popup to enjoy high-speed browsing.",
        route: "🏟️ <strong>Gate Routing:</strong> Head over to the <strong>Stadium Routes</strong> panel on the dashboard home, input your seat section number, and hit 'Find Route'. The tool determines the shortest live gate entry queue lines to save you waiting.",
        transport: "🚌 <strong>Getting to Stadium:</strong> Heavy traffic is expected. We advise using train transport lines directly to the Stadium Station, or booking official park-and-ride buses. Rideshare pickups operate from Lot E.",
        default: "⚽ <strong>FIFA Concierge:</strong> I am here to ensure you have a safe and simple tournament experience. Ask me about stadium bag policies, ticket entry guides, parking zones, free Fan Wi-Fi, or line checks!"
      },
      es: {
        bag: "👜 <strong>Política de Bolsos de la FIFA:</strong> Solo se permiten bolsos de plástico transparente, vinilo o PVC de menos de 12x6x12 pulgadas. También se permiten bolsos de mano pequeños de menos de 4.5x6.5 pulgadas sin ser transparentes.",
        food: "🍔 <strong>Comida y Bebidas:</strong> Los alimentos/bebidas externos están estrictamente prohibidos. Sin embargo, se le permite llevar una botella plástica vacía y transparente (20 oz o menos) para llenar en los bebederos del estadio. ¡Visite la pantalla de <strong>Hospedaje y Comida</strong> para ver recomendaciones!",
        ticket: "🎟️ <strong>Boletos Digitales:</strong> Mantenga listo su pase digital en su móvil al llegar a la línea de torniquetes. El boleto muestra un código QR dinámico. Puede verlo en la pantalla de <strong>Boletos</strong>.",
        wifi: "📶 <strong>Wi-Fi de Fans:</strong> Conéctese gratis seleccionando la red <strong>FIFA2026_FREE_FAN_WIFI</strong>. Acepte los términos en la ventana emergente para comenzar a navegar.",
        route: "🏟️ <strong>Direcciones de Puerta:</strong> Vaya al panel de <strong>Rutas del Estadio</strong> en el inicio, ingrese su sección de asientos y haga clic en 'Buscar Ruta'. El sistema calculará la puerta más rápida.",
        transport: "🚌 <strong>Transporte al Estadio:</strong> Se esperan demoras de tráfico. Recomendamos tomar líneas de tren directas a la estación del estadio o los autobuses exprés oficiales. Los servicios de Uber/Lyft operan en el Estacionamiento E.",
        default: "⚽ <strong>Conserje FIFA:</strong> Estoy aquí para ayudarle a tener una experiencia cómoda y segura. ¡Consúlteme sobre políticas de bolsos, Wi-Fi, boletos o transporte!"
      },
      fr: {
        bag: "👜 <strong>Politique des sacs de la FIFA:</strong> Seuls les sacs en plastique transparent, vinyle ou PVC inférieurs à 12x6x12 pouces sont autorisés aux entrées. Les petites pochettes de moins de 4.5x6.5 pouces sont également tolérées sans être transparentes.",
        food: "🍔 <strong>Nourriture & Boissons:</strong> La nourriture extérieure est interdite. Vous pouvez cependant apporter une bouteille en plastique vide (20oz ou moins) pour la remplir aux fontaines du stade. Consultez l'onglet <strong>Hôtel & Repas</strong> pour nos adresses !",
        ticket: "🎟️ <strong>Billets Numériques:</strong> Préparez votre ticket mobile à l'approche des portillons. Le code QR se met à jour en temps réel. Vous pouvez y accéder via l'écran <strong>Billets</strong>.",
        wifi: "📶 <strong>Wi-Fi Fan Gratuit:</strong> Connectez-vous en sélectionnant le réseau <strong>FIFA2026_FREE_FAN_WIFI</strong>. Acceptez les conditions dans la page pop-up pour naviguer librement.",
        route: "🏟️ <strong>Guidage des Accès:</strong> Allez sur le panel <strong>Ressources Stade</strong>, saisissez votre numéro de section et cliquez sur 'Calculer l'itinéraire' pour obtenir le chemin d'accès le plus rapide.",
        transport: "🚌 <strong>Venir au Stade:</strong> D'importants embouteillages sont prévus. Privilégiez les lignes de train directes vers la gare du stade ou les navettes officielles. Les déposes Uber/navettes se font sur le Parking E.",
        default: "⚽ <strong>Concierge FIFA:</strong> Je suis là pour rendre votre expérience fluide et agréable. Posez-moi des questions sur les sacs, le Wi-Fi gratuit, vos accès ou les transports !"
      }
    };

    const set = responses[this.currentLanguage];

    if (lower.includes("bag") || lower.includes("backpack") || lower.includes("purse") || lower.includes("bolso") || lower.includes("mochila") || lower.includes("sac")) {
      return set.bag;
    }
    if (lower.includes("food") || lower.includes("drink") || lower.includes("water") || lower.includes("eat") || lower.includes("comida") || lower.includes("agua") || lower.includes("nourriture") || lower.includes("eau")) {
      return set.food;
    }
    if (lower.includes("ticket") || lower.includes("barcode") || lower.includes("qr") || lower.includes("pass") || lower.includes("boleto") || lower.includes("billet")) {
      return set.ticket;
    }
    if (lower.includes("wifi") || lower.includes("internet") || lower.includes("connection") || lower.includes("réseau")) {
      return set.wifi;
    }
    if (lower.includes("route") || lower.includes("find") || lower.includes("gate") || lower.includes("section") || lower.includes("puerta") || lower.includes("porte") || lower.includes("chemin")) {
      return set.route;
    }
    if (lower.includes("transport") || lower.includes("uber") || lower.includes("bus") || lower.includes("train") || lower.includes("parking") || lower.includes("autobus") || lower.includes("gare")) {
      return set.transport;
    }

    return set.default;
  }

  /**
   * Starts background interval task shifts
   */
  startTelemetryLoop() {
    setInterval(() => {
      // 1. Wait times shifting
      for (let key in this.stadiums) {
        const data = this.stadiums[key];
        data.queues.forEach(zone => {
          const delta = Math.floor(Math.random() * 5) - 2;
          zone.waitTime = Math.max(2, Math.min(45, zone.waitTime + delta));
        });
      }

      // 2. Occupancy flags toggles
      for (let key in this.stadiums) {
        const data = this.stadiums[key];
        data.hotels.forEach(hotel => {
          if (Math.random() < 0.15) {
            if (hotel.vacancies === 0) {
              hotel.vacancies = Math.floor(Math.random() * 4) + 1;
            } else {
              const delta = Math.floor(Math.random() * 3) - 1;
              hotel.vacancies = Math.max(0, Math.min(hotel.maxVacancies, hotel.vacancies + delta));
            }
          }
        });
      }

      // 3. Re-render UI indicators if active
      this.renderQueueCheckers();
      this.filterVenues("all");

      console.log(`[Telemetry Module] Live sync updated for Active Stadium: ${this.activeStadiumKey}`);

    }, 15000);
  }

  /**
   * Starts 1-second clock loop telemetry updates
   */
  startClockLoop() {
    setInterval(() => {
      for (let key in this.stadiums) {
        const match = this.stadiums[key].liveMatch;
        match.timeSec++;
        if (match.timeSec >= 60) {
          match.timeSec = 0;
          match.timeMin++;
        }
        if (Math.random() < 0.005) {
          if (Math.random() < 0.5) {
            match.scoreA++;
          } else {
            match.scoreB++;
          }
        }
      }

      const activeMatch = this.stadiums[this.activeStadiumKey].liveMatch;
      const minStr = String(activeMatch.timeMin).padStart(2, "0");
      const secStr = String(activeMatch.timeSec).padStart(2, "0");

      const timeEl = document.getElementById("ticket-live-time");
      if (timeEl) {
        timeEl.textContent = `${minStr}:${secStr}`;
      }

      const scoreEl = document.getElementById("ticket-live-score");
      if (scoreEl) {
        scoreEl.textContent = `${activeMatch.teamA} ${activeMatch.scoreA} - ${activeMatch.scoreB} ${activeMatch.teamB}`;
      }

    }, 1000);
  }
}

// ----------------------------------------------------
// 14. APPLICATION MAIN ENTRY RUNTIME INITIALIZATION
// ----------------------------------------------------
let stadiumEngine;
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    stadiumEngine = new FifaStadiumEngine();
    window.stadiumEngine = stadiumEngine;
    stadiumEngine.init();
    stadiumEngine.startTelemetryLoop();
    stadiumEngine.startClockLoop();
  });
}

// Export references for node context Jest testing runs
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { FifaStadiumEngine, stadiumsDatabase, translations };
}
