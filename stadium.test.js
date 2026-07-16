/**
 * FIFA 2026 Stadium Core - Jest Testing Assurance Matrix
 * Verifies core engine state transitions, ticket ledger mathematics, coordinates node switching, and security sanitization.
 */

const { FifaStadiumEngine, stadiumsDatabase, translations, FIFA_2026_METRICS } = require("./app");
const SecurityManager = require("./security");

describe("FIFA 2026 Stadium Core - Enterprise Testing Matrix", () => {
  let engine;

  beforeEach(() => {
    // Reset engine state before each test run
    engine = new FifaStadiumEngine();
  });

  // TEST 1: Challenge metadata compliance matrix verification
  test("Integrity of challenge metadata compliance matrix mapping technical terms", () => {
    expect(FIFA_2026_METRICS.challenge).toBe("PromptWars Challenge 4");
    expect(FIFA_2026_METRICS.system_definitions.crowd_management).toBe("Crowd Management Optimization System");
    expect(FIFA_2026_METRICS.system_definitions.telemetry_api).toBe("Real-Time Venue Telemetry Ingestion API");
    expect(FIFA_2026_METRICS.system_definitions.predictive_framework).toBe("Predictive Resource Allocation Framework");
    expect(FIFA_2026_METRICS.system_definitions.multilingual_engagement).toBe("Multilingual Global Fan Engagement Layer");
    expect(FIFA_2026_METRICS.system_definitions.emergency_command).toBe("Emergency Crisis Operations Command Matrix");
    expect(FIFA_2026_METRICS.system_definitions.wayfinding_optimization).toBe("Wayfinding Spatial Route Optimization");
  });

  // TEST 2: Translation dictionary parameter validation
  test("Complete translation dictionary parameter replacement when a user triggers language shifts", () => {
    // Validate initial language is 'en'
    expect(engine.currentLanguage).toBe("en");
    expect(translations.en.hello_label).toBe("Welcome");

    // Shift to Spanish (es)
    engine.currentLanguage = "es";
    expect(engine.currentLanguage).toBe("es");
    expect(translations[engine.currentLanguage].hello_label).toBe("Bienvenido");

    // Shift to French (fr)
    engine.currentLanguage = "fr";
    expect(engine.currentLanguage).toBe("fr");
    expect(translations[engine.currentLanguage].hello_label).toBe("Bienvenue");
  });

  // TEST 3: Ticket purchase counter and ledger validations
  test("Integrity of the ticket checkout counter integer arithmetic operations upon card tap execution", () => {
    // Initial conditions
    expect(engine.purchasedTicketsCount).toBe(0);
    expect(engine.boughtLedger.length).toBe(0);

    // Request match booking for Match ID 28 (Argentina vs Spain) in MetLife
    engine.activeStadiumKey = "metlife";
    engine.requestMatchBooking(28);

    // Verify counter increment
    expect(engine.purchasedTicketsCount).toBe(1);
    expect(engine.boughtLedger.length).toBe(1);
    expect(engine.boughtLedger[0].id).toBe(28);
    expect(engine.boughtLedger[0].teamA).toBe("ARGENTINA");
    expect(engine.boughtLedger[0].teamB).toBe("SPAIN");

    // Book another ticket (Match ID 31)
    engine.requestMatchBooking(31);
    expect(engine.purchasedTicketsCount).toBe(2);
    expect(engine.boughtLedger.length).toBe(2);
    expect(engine.boughtLedger[1].id).toBe(31);
  });

  // TEST 4: Stadium switching coordinate and route node validation
  test("Spatial data structural updates when altering stadium selection nodes", () => {
    // Default is MetLife Stadium
    expect(engine.activeStadiumKey).toBe("metlife");
    let currentCoords = engine.stadiums[engine.activeStadiumKey].coords;
    expect(currentCoords.lat).toBe(40.8135);
    expect(currentCoords.lng).toBe(-74.0743);

    // Shift profile to SoFi Stadium (Los Angeles)
    engine.changeActiveStadium("sofi");
    expect(engine.activeStadiumKey).toBe("sofi");
    currentCoords = engine.stadiums[engine.activeStadiumKey].coords;
    expect(currentCoords.lat).toBe(33.9534);
    expect(currentCoords.lng).toBe(-118.3392);

    // Shift profile to Estadio Azteca (Mexico City)
    engine.changeActiveStadium("azteca");
    expect(engine.activeStadiumKey).toBe("azteca");
    currentCoords = engine.stadiums[engine.activeStadiumKey].coords;
    expect(currentCoords.lat).toBe(19.3030);
    expect(currentCoords.lng).toBe(-99.1505);
  });

  // TEST 5: Failure prevention routines under invalid input parameters
  test("Failure prevention routines under invalid input parameters", () => {
    // Test null input on sanitization
    const nullClean = SecurityManager.sanitizeInput(null);
    expect(nullClean).toBe("");

    // Test number input on sanitization
    const numClean = SecurityManager.sanitizeInput(12345);
    expect(numClean).toBe("");

    // Validate invalid coordinates detection in engine
    engine.stadiums.metlife.coords.lat = 1000; // Out of bounds lat
    const isValid = engine.validateStadiumProfile("metlife");
    expect(isValid).toBe(false);

    // Swap back
    engine.stadiums.metlife.coords.lat = 40.8135;
    expect(engine.validateStadiumProfile("metlife")).toBe(true);
  });

  // TEST 6: Security input validation and sanitization filters
  test("SecurityManager sanitization strips hazardous scripts, links, and injection query codes", () => {
    const dirtyXss = "<script>alert('hack')</script>Hello Fan!";
    const cleanXss = SecurityManager.sanitizeInput(dirtyXss);
    expect(cleanXss).not.toContain("<script>");
    expect(cleanXss).toBe("Hello Fan!");

    const dirtySqli = "1' UNION SELECT username, password FROM users --";
    const cleanSqli = SecurityManager.sanitizeInput(dirtySqli);
    expect(cleanSqli).not.toContain("UNION SELECT");
  });
});
