/**
 * FIFA 2026 Stadium Core - Jest Testing Assurance Matrix
 * Verifies core engine state transitions, ticket ledger mathematics, and translations.
 */

const { FifaStadiumEngine, stadiumsDatabase, translations } = require("./app");
const SecurityManager = require("./security");

describe("FIFA 2026 Stadium Core - Enterprise Testing Matrix", () => {
  let engine;

  beforeEach(() => {
    // Reset engine state before each test run
    engine = new FifaStadiumEngine();
  });

  // TEST 1: Translation dictionary parameter validation
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

  // TEST 2: Ticket purchase counter and ledger validations
  test("Integrity of the ticket checkout counter integer arithmetic upon buying a match ticket", () => {
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

  // TEST 3: Stadium switching coordinate and route node validation
  test("Dynamic coordinate array updating when shifting stadium profiles in the selector navbar", () => {
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

  // TEST 4: Security input validation and sanitization filters
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
