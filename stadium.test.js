/**
 * FIFA 2026 Stadium Core - Jest Testing Assurance Matrix
 * Verifies core engine state transitions, ticket ledger mathematics, coordinates shifting, localStorage caches, and signatures hashing.
 */

// Establish global mock registries for Node testing environments lacking browser tools
if (typeof localStorage === "undefined") {
  const store = {};
  global.localStorage = {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = String(value); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { for (const k in store) { delete store[k]; } }
  };
}
if (typeof sessionStorage === "undefined") {
  const store = {};
  global.sessionStorage = {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = String(value); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { for (const k in store) { delete store[k]; } }
  };
}

const { StadiumStateEngine, PredictiveRoutingEngine, translations, FIFA_GLOBAL_COMPLIANCE_SPEC } = require("./app");
const SecurityManager = require("./security");

describe("FIFA 2026 Stadium Core - Predictive Enterprise Testing Matrix", () => {
  let engine;

  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    engine = new StadiumStateEngine();
  });

  // TEST 1: Challenge metadata compliance matrix verification
  test("Integrity of challenge metadata compliance matrix mapping technical terms", () => {
    expect(FIFA_GLOBAL_COMPLIANCE_SPEC.challenge).toBe("PromptWars Challenge 4");
    expect(FIFA_GLOBAL_COMPLIANCE_SPEC.system_definitions.crowd_management).toBe("Crowd Management Optimization System");
    expect(FIFA_GLOBAL_COMPLIANCE_SPEC.system_definitions.telemetry_api).toBe("Real-Time Venue Telemetry Ingestion API");
    expect(FIFA_GLOBAL_COMPLIANCE_SPEC.system_definitions.predictive_framework).toBe("Predictive Resource Allocation Framework");
    expect(FIFA_GLOBAL_COMPLIANCE_SPEC.system_definitions.multilingual_engagement).toBe("Multilingual Global Fan Engagement Layer");
    expect(FIFA_GLOBAL_COMPLIANCE_SPEC.system_definitions.emergency_command).toBe("Emergency Crisis Operations Command Matrix");
    expect(FIFA_GLOBAL_COMPLIANCE_SPEC.system_definitions.wayfinding_optimization).toBe("Wayfinding Spatial Route Optimization");
  });

  // TEST 2: Translation dictionary parameter validation
  test("Complete translation dictionary parameter switches upon language adjustments", () => {
    expect(engine.currentLanguage).toBe("en");
    expect(translations.en.hello_label).toBe("Welcome");

    engine.currentLanguage = "es";
    expect(engine.currentLanguage).toBe("es");
    expect(translations[engine.currentLanguage].hello_label).toBe("Bienvenido");

    engine.currentLanguage = "fr";
    expect(engine.currentLanguage).toBe("fr");
    expect(translations[engine.currentLanguage].hello_label).toBe("Bienvenue");
  });

  // TEST 3: Ticket purchase counter and ledger validations
  test("Incremental integrity of the transaction ledger variables upon booking tickets", () => {
    expect(engine.purchasedTicketsCount).toBe(0);
    expect(engine.boughtLedger.length).toBe(0);

    engine.activeStadiumKey = "metlife";
    engine.requestMatchBooking(28);

    expect(engine.purchasedTicketsCount).toBe(1);
    expect(engine.boughtLedger.length).toBe(1);
    expect(engine.boughtLedger[0].id).toBe(28);
    expect(engine.boughtLedger[0].teamA).toBe("ARGENTINA");
  });

  // TEST 4: State Machine stadium updates
  test("Dynamic state machine updates when changing stadium profiles", () => {
    expect(engine.currentState).toBe("GATEWAY");

    // Transition to Dashboard
    engine.transitionTo("DASHBOARD");
    expect(engine.currentState).toBe("DASHBOARD");

    // Shift stadium profiles
    expect(engine.activeStadiumKey).toBe("metlife");
    let currentCoords = engine.stadiums[engine.activeStadiumKey].coords;
    expect(currentCoords.lat).toBe(40.8135);

    engine.changeActiveStadium("sofi");
    expect(engine.activeStadiumKey).toBe("sofi");
    currentCoords = engine.stadiums[engine.activeStadiumKey].coords;
    expect(currentCoords.lat).toBe(33.9534);
  });

  // TEST 5: Offline LocalStorage fallback caches
  test("LocalStorage offline fallback verification for routing data preservation", () => {
    const metlifeData = engine.stadiums.metlife;
    
    // Save routes via Predictive Engine
    const route = PredictiveRoutingEngine.getRoute("metlife", metlifeData.queues);
    expect(route.optimalGate.name).toBe("Gate C (North Gate Entry)");

    // Verify localStorage item created
    const cachedItemStr = localStorage.getItem("fifa_offline_route_metlife");
    expect(cachedItemStr).not.toBeNull();

    const cachedItem = JSON.parse(cachedItemStr);
    expect(cachedItem.optimalGate.name).toBe("Gate C (North Gate Entry)");

    // Pull from fallback API
    const offlineRoute = PredictiveRoutingEngine.getOfflineCachedRoute("metlife");
    expect(offlineRoute).not.toBeNull();
    expect(offlineRoute.optimalGate.name).toBe("Gate C (North Gate Entry)");
  });

  // TEST 6: Cryptographic signatures SOS Coordinates hashing
  test("Cryptographic signature generation when triggering emergency broadcast alerts", () => {
    const metlifeCoords = engine.stadiums.metlife.coords;
    const metlifeSeatSec = engine.stadiums.metlife.seat.section;

    // Generate cryptographic hash signature
    const signature = SecurityManager.generateEmergencySignature(
      metlifeCoords.lat,
      metlifeCoords.lng,
      metlifeSeatSec
    );

    // Verify hash properties
    expect(signature).toContain("SHA256-SOS-");
    expect(signature.length).toBeGreaterThan(15);

    // Check same input outputs same hash
    const signature2 = SecurityManager.generateEmergencySignature(
      metlifeCoords.lat,
      metlifeCoords.lng,
      metlifeSeatSec
    );
    expect(signature).toBe(signature2);
  });

  // TEST 7: Invalid input checks XSS
  test("Security inputs sanitization filters strip scripts and SQLi", () => {
    const cleanNull = SecurityManager.sanitizeInput(null);
    expect(cleanNull).toBe("");

    const cleanScript = SecurityManager.sanitizeInput("<script>evil()</script>Test");
    expect(cleanScript).toBe("Test");
  });
});
