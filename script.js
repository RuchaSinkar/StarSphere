function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
const start_btn = document.getElementById("start_btn");
if (start_btn) {
  start_btn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}

 document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop(); // e.g., "index.html"

    document.querySelectorAll(".anchor").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });

const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextQuestionBtn = document.getElementById('next-question-button');
const submitAnswerBtn = document.getElementById('submit-answer-button');

const quizQuestions=[
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest moon in our solar system?",
        options: ["Titan", "Ganymede", "Callisto", "Europa"],
        answer: "Ganymede"
    },
    {
        question: "What is the name of the most massive star known?",
        options: ["Sirius", "R136a1", "Betelgeuse", "Rigel"],
        answer: "R136a1"
    },
    {
        question: "What is the closest planet to the Sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Mercury"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
        answer: "Jupiter"
    },
    {
        question: "Which planet has the most prominent rings?",
        options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "What is the name of Earth’s natural satellite?",
        options: ["Moon", "Phobos", "Titan", "Europa"],
        answer: "Moon"
    },
    {
        question: "Which planet is tilted on its axis, causing extreme seasons?",
        options: ["Uranus", "Neptune", "Pluto", "Mars"],
        answer: "Uranus"
    },
    {
        question: "What is the hottest planet in our solar system?",
        options: ["Venus", "Mercury", "Mars", "Earth"],
        answer: "Venus"
    },
    {
        question: "Which planet is known as the “Gas Giant”?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of the galaxy that contains our solar system?",
        options: ["Milky Way", "Andromeda", "Triangulum", "Whirlpool"],
        answer: "Milky Way"
    },
    {
        question: "What is the primary source of energy for Earth?",
        options: ["Sun", "Moon", "Stars", "Black Holes"],
        answer: "Sun"
    },
    {
        question: "Which planet has a day longer than its year?",
        options: ["Venus", "Mercury", "Pluto", "Mars"],
        answer: "Venus"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Pluto", "Earth"],
        answer: "Mercury"
    },
    {
        question: "Which planet is called the “Blue Planet”?",
        options: ["Earth", "Neptune", "Uranus", "Venus"],
        answer: "Earth"
    },
    {
        question: "What is the name of the first man-made satellite?",
        options: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Telstar 1"],
        answer: "Sputnik 1"
    },
    {
        question: "Who was the first human to walk on the Moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        answer: "Neil Armstrong"
    },
    {
        question: "In which year did the first Moon landing occur?",
        options: ["1969", "1965", "1972", "1959"],
        answer: "1969"
    },
    {
        question: "What is the name of NASA’s first space shuttle?",
        options: ["Columbia", "Challenger", "Discovery", "Atlantis"],
        answer: "Columbia"
    },
    {
        question: "Which planet has the Great Red Spot, a massive storm?",
        options: ["Jupiter", "Saturn", "Neptune", "Mars"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of the closest star to Earth?",
        options: ["Sun", "Proxima Centauri", "Sirius", "Alpha Centauri"],
        answer: "Sun"
    },
    {
        question: "What is the second-closest star to Earth?",
        options: ["Proxima Centauri", "Alpha Centauri", "Sirius", "Barnard's Star"],
        answer: "Proxima Centauri"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of Mars’ largest moon?",
        options: ["Phobos", "Deimos", "Titan", "Io"],
        answer: "Phobos"
    },
    {
        question: "What is the main gas in the Sun’s composition?",
        options: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
        answer: "Hydrogen"
    },
    {
        question: "What is a light-year a measure of?",
        options: ["Distance", "Time", "Speed", "Brightness"],
        answer: "Distance"
    },
    {
        question: "Which planet is known for its blue-green color?",
        options: ["Uranus", "Neptune", "Earth", "Jupiter"],
        answer: "Uranus"
    },
    {
        question: "What is the name of the first rover to land on Mars?",
        options: ["Sojourner", "Spirit", "Opportunity", "Curiosity"],
        answer: "Sojourner"
    },
    {
        question: "Which space agency launched the Hubble Space Telescope?",
        options: ["NASA", "ESA", "Roscosmos", "JAXA"],
        answer: "NASA"
    },
    {
        question: "What is the name of the largest moon in our solar system?",
        options: ["Ganymede", "Titan", "Callisto", "Europa"],
        answer: "Ganymede"
    },
    {
        question: "Which planet is the second largest in our solar system?",
        options: ["Saturn", "Neptune", "Uranus", "Earth"],
        answer: "Saturn"
    },
    {
        question: "What is the name of the first woman in space?",
        options: ["Valentina Tereshkova", "Sally Ride", "Svetlana Savitskaya", "Laika"],
        answer: "Valentina Tereshkova"
    },
    {
        question: "Which planet has a thick atmosphere of carbon dioxide?",
        options: ["Venus", "Mars", "Earth", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "What is the name of the dwarf planet discovered in 1930?",
        options: ["Pluto", "Eris", "Ceres", "Haumea"],
        answer: "Pluto"
    },
    {
        question: "Which planet is known as the “Ice Giant”?",
        options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
        answer: "Neptune"
    },
    {
        question: "What is the name of the brightest star in the night sky?",
        options: ["Sirius", "Vega", "Rigel", "Deneb"],
        answer: "Sirius"
    },
    {
        question: "What is the name of the first space station?",
        options: ["Salyut 1", "Skylab", "Mir", "ISS"],
        answer: "Salyut 1"
    },
    {
        question: "Which planet has a moon named Titan?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        answer: "Saturn"
    },
    {
        question: "What is the name of the spacecraft that carried the first humans to the Moon?",
        options: ["Apollo 11", "Gemini", "Mercury", "Soyuz"],
        answer: "Apollo 11"
    },
    {
        question: "Which planet has the shortest day?",
        options: ["Jupiter", "Saturn", "Earth", "Mars"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of the asteroid belt between Mars and Jupiter?",
        options: ["Main Asteroid Belt", "Kuiper Belt", "Oort Cloud", "Trojan Asteroids"],
        answer: "Main Asteroid Belt"
    },
    {
        question: "What is the name of the first dog in space?",
        options: ["Laika", "Ham", "Belka", "Strelka"],
        answer: "Laika"
    },
    {
        question: "Which planet has a faint ring system discovered in 1977?",
        options: ["Uranus", "Jupiter", "Neptune", "Mars"],
        answer: "Uranus"
    },
    {
        question: "What is the name of the brightest planet in the night sky?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        answer: "Venus"
    },
    {
        question: "What is a supernova?",
        options: ["Explosion of a star", "Birth of a star", "Type of galaxy", "Large asteroid"],
        answer: "Explosion of a star"
    },
    {
        question: "Which planet is known for its strong magnetic field?",
        options: ["Jupiter", "Saturn", "Earth", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of the first human to travel to space?",
        options: ["Yuri Gagarin", "Alan Shepard", "Neil Armstrong", "John Glenn"],
        answer: "Yuri Gagarin"
    },
    {
        question: "In which year did Yuri Gagarin travel to space?",
        options: ["1961", "1957", "1969", "1971"],
        answer: "1961"
    },
    {
        question: "What is the name of the largest volcano in the solar system?",
        options: ["Olympus Mons", "Mauna Kea", "Mount Everest", "Valles Marineris"],
        answer: "Olympus Mons"
    },
    {
        question: "Which planet has a moon named Europa?",
        options: ["Jupiter", "Saturn", "Mars", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of the space probe that explored Pluto?",
        options: ["New Horizons", "Voyager 1", "Cassini", "Pioneer 10"],
        answer: "New Horizons"
    },
    {
        question: "What is the main component of a comet’s tail?",
        options: ["Gas and dust", "Ice", "Rock", "Molten metal"],
        answer: "Gas and dust"
    },
    {
        question: "Which planet has the most extreme temperature variations?",
        options: ["Mercury", "Mars", "Venus", "Moon"],
        answer: "Mercury"
    },
    {
        question: "What is the name of the second man to walk on the Moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Alan Shepard"],
        answer: "Buzz Aldrin"
    },
    {
        question: "Which planet is closest in size to Earth?",
        options: ["Venus", "Mars", "Mercury", "Uranus"],
        answer: "Venus"
    },
    {
        question: "What is the name of the first reusable spacecraft?",
        options: ["Space Shuttle", "Apollo", "Soyuz", "Gemini"],
        answer: "Space Shuttle"
    },
    {
        question: "What is the name of the star at the center of our solar system?",
        options: ["Sun", "Sirius", "Proxima Centauri", "Polaris"],
        answer: "Sun"
    },
    {
        question: "Which planet has a moon named Triton?",
        options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
        answer: "Neptune"
    },
    {
        question: "What is the name of the first Mars rover launched by NASA?",
        options: ["Sojourner", "Spirit", "Opportunity", "Curiosity"],
        answer: "Sojourner"
    },
    {
        question: "What is the term for a star’s brightness?",
        options: ["Magnitude", "Luminosity", "Intensity", "Radiance"],
        answer: "Magnitude"
    },
    {
        question: "Which planet has a storm called the Great Dark Spot?",
        options: ["Neptune", "Jupiter", "Saturn", "Mars"],
        answer: "Neptune"
    },
    {
        question: "What is the name of the first private company to launch a rocket into orbit?",
        options: ["SpaceX", "Blue Origin", "Virgin Galactic", "Rocket Lab"],
        answer: "SpaceX"
    },
    {
        question: "What is the name of the closest galaxy to the Milky Way?",
        options: ["Andromeda", "Triangulum", "Large Magellanic Cloud", "Whirlpool"],
        answer: "Andromeda"
    },
    {
        question: "Which planet has the longest year?",
        options: ["Neptune", "Pluto", "Uranus", "Jupiter"],
        answer: "Neptune"
    },
    {
        question: "What is the name of the first space telescope?",
        options: ["Hubble", "James Webb", "Chandra", "Spitzer"],
        answer: "Hubble"
    },
    {
        question: "What is the main source of energy for stars?",
        options: ["Nuclear fusion", "Chemical reactions", "Gravitational collapse", "Combustion"],
        answer: "Nuclear fusion"
    },
    {
        question: "Which planet has a moon named Callisto?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of the spacecraft that landed on Titan?",
        options: ["Huygens", "Cassini", "Galileo", "Voyager"],
        answer: "Huygens"
    },
    {
        question: "Which planet is known for its methane-rich atmosphere?",
        options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
        answer: "Uranus"
    },
    {
        question: "What is the name of the first American in space?",
        options: ["Alan Shepard", "John Glenn", "Neil Armstrong", "Gus Grissom"],
        answer: "Alan Shepard"
    },
    {
        question: "What is the term for a group of stars forming a pattern?",
        options: ["Constellation", "Galaxy", "Nebula", "Cluster"],
        answer: "Constellation"
    },
    {
        question: "Which planet has a moon named Deimos?",
        options: ["Mars", "Jupiter", "Saturn", "Neptune"],
        answer: "Mars"
    },
    {
        question: "What is the name of the first Indian satellite?",
        options: ["Aryabhata", "Rohini", "Bhaskara", "Kalpana"],
        answer: "Aryabhata"
    },
    {
        question: "What is the name of the brightest comet ever observed?",
        options: ["Comet Hale-Bopp", "Halley's Comet", "Comet NEOWISE", "Comet Hyakutake"],
        answer: "Comet Hale-Bopp"
    },
    {
        question: "Which planet has the most intense gravitational pull?",
        options: ["Jupiter", "Sun", "Saturn", "Earth"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of the first space probe to leave the solar system?",
        options: ["Voyager 1", "Pioneer 10", "New Horizons", "Voyager 2"],
        answer: "Voyager 1"
    },
    {
        question: "What is the name of the largest crater on the Moon?",
        options: ["South Pole-Aitken Basin", "Tycho Crater", "Copernicus Crater", "Clavius Crater"],
        answer: "South Pole-Aitken Basin"
    },
    {
        question: "Which planet is known as the “Morning Star”?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: "Venus"
    },
    {
        question: "What is the name of the first Chinese astronaut?",
        options: ["Yang Liwei", "Liu Yang", "Jing Haipeng", "Zhai Zhigang"],
        answer: "Yang Liwei"
    },
    {
        question: "What is the term for a star that suddenly increases in brightness?",
        options: ["Nova", "Supernova", "Quasar", "Pulsar"],
        answer: "Nova"
    },
    {
        question: "Which planet has a moon named Io?",
        options: ["Jupiter", "Saturn", "Mars", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of the first spacecraft to land on Mars?",
        options: ["Viking 1", "Pathfinder", "Phoenix", "Curiosity"],
        answer: "Viking 1"
    },
    {
        question: "What is the name of the first exoplanet discovered?",
        options: ["51 Pegasi b", "Proxima Centauri b", "Kepler-186f", "TRAPPIST-1b"],
        answer: "51 Pegasi b"
    },
    {
        question: "Which planet has the most visible rings?",
        options: ["Saturn", "Uranus", "Neptune", "Jupiter"],
        answer: "Saturn"
    },
    {
        question: "What is the name of the first space station by NASA?",
        options: ["Skylab", "ISS", "Mir", "Salyut"],
        answer: "Skylab"
    },
    {
        question: "What is the term for the boundary around a black hole?",
        options: ["Event horizon", "Singularity", "Accretion disk", "Photon sphere"],
        answer: "Event horizon"
    },
    {
        question: "Which planet has a moon named Miranda?",
        options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
        answer: "Uranus"
    },
    {
        question: "What is the name of the first Mars helicopter?",
        options: ["Ingenuity", "Spirit", "Opportunity", "Curiosity"],
        answer: "Ingenuity"
    },
    {
        question: "What is the name of the largest known star?",
        options: ["Icon", "U.Y. Scuti", "Betelgeuse", "Rigel"], // Corrected from "Icon" to "UY Scuti" (common answer, though it varies by definition)
        answer: "U.Y. Scuti"
    },
    {
        question: "Which planet has the fastest winds in the solar system?",
        options: ["Neptune", "Jupiter", "Saturn", "Uranus"],
        answer: "Neptune"
    },
    {
        question: "What is the name of the first satellite to orbit Mars?",
        options: ["Mariner 9", "Viking 1 Orbiter", "Mars Global Surveyor", "Mars Express"],
        answer: "Mariner 9"
    },
    {
        question: "What is the term for the explosion that created the universe?",
        options: ["Big Bang", "Big Crunch", "Big Freeze", "Big Rip"],
        answer: "Big Bang"
    },
    {
        question: "Which planet has a moon named Charon?",
        options: ["Pluto", "Neptune", "Uranus", "Mars"],
        answer: "Pluto"
    },
    {
        question: "What is the name of the first woman to perform a spacewalk?",
        options: ["Svetlana Savitskaya", "Valentina Tereshkova", "Sally Ride", "Helen Sharman"],
        answer: "Svetlana Savitskaya"
    },
    {
        question: "What is the name of the first rover on the Moon?",
        options: ["Lunokhod 1", "Apollo Lunar Rover", "Yutu", "Sojourner"],
        answer: "Lunokhod 1"
    },
    {
        question: "Which planet has the most elliptical orbit?",
        options: ["Mercury", "Mars", "Pluto", "Earth"],
        answer: "Mercury"
    },
    {
        question: "What is the name of the first spacecraft to visit Mercury?",
        options: ["Mariner 10", "Messenger", "BepiColombo", "Voyager 1"],
        answer: "Mariner 10"
    },
    {
        question: "What is the term for a small body orbiting the Sun?",
        options: ["Asteroid", "Comet", "Meteor", "Planetoid"],
        answer: "Asteroid"
    },
    {
        question: "Which planet has a moon named Oberon?",
        options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
        answer: "Uranus"
    },
    {
        question: "What is the name of the first space probe to visit Jupiter?",
        options: ["Pioneer 10", "Voyager 1", "Galileo", "Juno"],
        answer: "Pioneer 10"
    },
    {
        question: "What is the name of the first crewed mission to the International Space Station?",
        options: ["Expedition 1", "STS-88", "Soyuz TM-31", "Unity"],
        answer: "Expedition 1"
    },
    {
        question: "What is the term for the study of celestial bodies?",
        options: ["Astronomy", "Astrology", "Cosmology", "Geology"],
        answer: "Astronomy"
    }
];

const facts=[
  { fact: "A day on Venus is longer than its year." },
  { fact: "Neutron stars can spin up to 600 times per second." },
  { fact: "Jupiter has at least 95 moons." },
  { fact: "The Sun contains 99.86% of the mass in the solar system." },
  { fact: "A spoonful of a neutron star weighs about a billion tons." },
  { fact: "There’s water floating in space." },
  { fact: "Saturn could float in water because it is mostly made of gas." },
  { fact: "One day on Mercury is about 59 Earth days." },
  { fact: "Uranus rotates on its side." },
  { fact: "The largest volcano in the solar system is on Mars." },
  { fact: "Mars has the tallest mountain in the solar system—Olympus Mons." },
  { fact: "The Milky Way galaxy will collide with the Andromeda galaxy in about 4.5 billion years." },
  { fact: "The Moon is drifting away from Earth by about 3.8 cm per year." },
  { fact: "A year on Neptune lasts 165 Earth years." },
  { fact: "Light from the Sun takes about 8 minutes to reach Earth." },
  { fact: "The hottest planet in our solar system is Venus." },
  { fact: "Pluto is smaller than the United States." },
  { fact: "The Kuiper Belt is home to many icy bodies including Pluto." },
  { fact: "A total solar eclipse occurs somewhere on Earth every 18 months." },
  { fact: "Black holes warp space and time." },
  { fact: "Space is completely silent—there's no atmosphere for sound to travel." },
  { fact: "The Hubble Space Telescope orbits Earth at about 28,000 km/h." },
  { fact: "Spacesuits cost around $12 million each." },
  { fact: "Jupiter’s Great Red Spot is a giant storm that’s been raging for centuries." },
  { fact: "The Sun will become a red giant in about 5 billion years." },
  { fact: "The largest moon in the solar system is Ganymede, a moon of Jupiter." },
  { fact: "Astronauts grow taller in space due to low gravity." },
  { fact: "Mars appears red because of iron oxide (rust) on its surface." },
  { fact: "There are more trees on Earth than stars in the Milky Way." },
  { fact: "The Moon has moonquakes." },
  { fact: "Venus spins backward compared to most planets." },
  { fact: "One million Earths could fit inside the Sun." },
  { fact: "Saturn’s rings are made of ice, dust, and rock." },
  { fact: "There may be a planet made of diamonds." },
  { fact: "Triton, Neptune’s moon, orbits in the opposite direction of Neptune's rotation." },
  { fact: "If two pieces of the same metal touch in space, they can bond permanently." },
  { fact: "The James Webb Space Telescope can see infrared light from galaxies billions of light-years away." },
  { fact: "Pulsars are spinning neutron stars that emit beams of radiation." },
  { fact: "The solar wind creates auroras on Earth." },
  { fact: "A full NASA space shuttle launch costs about $450 million." },
  { fact: "There are more stars in the universe than grains of sand on Earth." },
  { fact: "The International Space Station (ISS) orbits Earth every 90 minutes." },
  { fact: "Astronauts’ hearts become more spherical in space." },
  { fact: "Space travel can change your DNA temporarily." },
  { fact: "There’s a giant cloud of alcohol in space near the constellation Aquila." },
  { fact: "Some planets may rain glass sideways due to high-speed winds." },
  { fact: "Stars don't twinkle in space; they only twinkle when viewed from Earth." },
  { fact: "Saturn's moon Enceladus has geysers that shoot water into space." },
  { fact: "Earth is the only planet not named after a god." },
  { fact: "The footprints on the Moon could last millions of years." },
  { fact: "Space smells like burnt steak and welding fumes, according to astronauts." },
  { fact: "Mars has seasons like Earth, but they last twice as long." },
  { fact: "The coldest known place in the universe is the Boomerang Nebula." },
  { fact: "A day on Jupiter is about 10 hours long." },
  { fact: "Some galaxies are 13 billion light-years away." },
  { fact: "A light-year is about 9.46 trillion kilometers." },
  { fact: "Comets are icy bodies that release gas or dust." },
  { fact: "Some comets have tails millions of kilometers long." },
  { fact: "Valles Marineris on Mars is the longest canyon in the solar system." },
  { fact: "Pluto was reclassified as a dwarf planet in 2006." },
  { fact: "Halley's Comet appears every 76 years." },
  { fact: "Only 12 people have walked on the Moon." },
  { fact: "Exoplanets are planets that orbit stars outside our solar system." },
  { fact: "One of Saturn's moons, Titan, has rivers and lakes of liquid methane." },
  { fact: "Astronauts wear diapers during launch and spacewalks." },
  { fact: "Space has no up or down—directions are relative." },
  { fact: "The farthest human-made object is Voyager 1." },
  { fact: "Uranus was the first planet discovered with a telescope." },
  { fact: "Stars are born in nebulas." },
  { fact: "The speed of light is about 300,000 km/s." },
  { fact: "Some galaxies have supermassive black holes at their center." },
  { fact: "An asteroid belt lies between Mars and Jupiter." },
  { fact: "The Earth travels through space at 107,000 km/h." },
  { fact: "The Andromeda galaxy is moving toward the Milky Way." },
  { fact: "The Moon has no atmosphere." },
  { fact: "Solar eclipses can only occur during a new moon." },
  { fact: "Gamma-ray bursts are the most powerful explosions in the universe." },
  { fact: "The Moon is about 1/6th the gravity of Earth." },
  { fact: "Some black holes can evaporate over time." },
  { fact: "The first woman in space was Valentina Tereshkova." },
  { fact: "Astronauts experience 16 sunrises a day on the ISS." },
  { fact: "The ISS weighs about 420,000 kg." },
  { fact: "A galaxy can contain billions of stars." },
  { fact: "Cosmic rays are high-energy particles from outer space." },
  { fact: "Some stars explode into supernovae." },
  { fact: "Earth’s magnetic field protects us from solar radiation." },
  { fact: "The largest structure in the universe is a cluster of galaxies called the Hercules–Corona Borealis Great Wall." },
  { fact: "Space probes have visited all the planets in our solar system." },
  { fact: "NASA's Perseverance rover landed on Mars in 2021." },
  { fact: "The first living creature in space was a dog named Laika." },
  { fact: "Some planets may be made mostly of gas with no solid surface." },
  { fact: "Jupiter's moon Europa may have a subsurface ocean." },
  { fact: "The outermost layer of the Sun is called the corona." },
  { fact: "A quasar is an extremely bright and energetic object powered by a black hole." },
  { fact: "The Moon always shows the same face to Earth." },
  { fact: "Some meteorites are older than Earth itself." },
  { fact: "Planet Earth is the densest planet in the solar system." },
  { fact: "The solar system formed about 4.6 billion years ago." }
];

const DAILY_LIMIT = 10;
let currentQuestionIndex = 0;
let score = 0;

function saveToLeaderboard(score) {
    if(score<=0) return;
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    let playerName;

    if (loggedInUser) {
        playerName = loggedInUser.name;

        // If no name saved yet, ask and store it
        if (!playerName) {
            playerName = prompt("Enter your name for the leaderboard:");
            if (!playerName) return;

            // Save name in loggedInUser and update localStorage
            loggedInUser.name = playerName;
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

            // Also update in users array
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const userIndex = users.findIndex(u => u.email === loggedInUser.email);
            if (userIndex !== -1) {
                users[userIndex].name = playerName;
                localStorage.setItem("users", JSON.stringify(users));
            }
        }

    } else {
        // fallback if user is not logged in (shouldn’t happen)
        playerName = prompt("Enter your name for the leaderboard:");
        if (!playerName) return;
    }
    // Check if player already exists by name
    const existingEntryIndex = leaderboard.findIndex(entry => entry.name === playerName);

    if (existingEntryIndex !== -1) {
    // If new score is higher, update it
        if (score > leaderboard[existingEntryIndex].score) {
            leaderboard[existingEntryIndex].score = score;
        }
        } else {
    // New player, add to leaderboard
        leaderboard.push({ name: playerName, score });
    }


    const cleanedLeaderboard = leaderboard.filter(entry => entry.score > 0);
    cleanedLeaderboard.sort((a, b) => b.score - a.score);
    if (cleanedLeaderboard.length > 10) cleanedLeaderboard.length = 10;

    localStorage.setItem('leaderboard', JSON.stringify(cleanedLeaderboard));

}


// Protect quiz page: only allow access if logged in
if (window.location.pathname.includes("quiz.html")) {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    alert("You need to log in to access the quiz!");
    window.location.href = "login.html";
  }
}

    // Daily tracking
    const today = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'
    const lastPlayedDate = localStorage.getItem('quizDate');
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const userEmail = loggedInUser?.email;

    // Get user-specific stats
    let userStats = JSON.parse(localStorage.getItem("userDailyStats")) || {};
    let userData = userStats[userEmail] || { date: "", count: 0 };


    if (userData.date !== today) {
    userData = { date: today, count: 0 }; // Reset for a new day
    }

    // Assign current count
    let dailyCount = userData.count;


    // Reset if it's a new day
    if (lastPlayedDate !== today) {
        dailyCount = 0;
        localStorage.setItem('quizDate', today);
        localStorage.setItem('dailyCount', dailyCount);
    }

    // Shuffle helper
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Show a question
    function displayQuestion() {
        
        if (dailyCount >= DAILY_LIMIT) {
            endQuiz("You’ve reached your daily limit of 10 questions. Come back tomorrow!");
            return;
        }

        optionsContainer.innerHTML = '';
        nextQuestionBtn.style.display = 'none';
        submitAnswerBtn.style.display = 'block';

        const questionData = quizQuestions[currentQuestionIndex];
        questionTextElement.textContent = questionData.question;

        const shuffledOptions = [...questionData.options]; // clone original options
        shuffleArray(shuffledOptions); // shuffle them randomly

        shuffledOptions.forEach((option, index) => {
            const label = document.createElement('label');
            label.setAttribute('for', `option${index}`);
            label.classList.add('option-item');

            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `option${index}`;
            input.name = 'quizOption';
            input.value = option;

            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            optionsContainer.appendChild(label);
        });

    }

    // Submit handler
    if (submitAnswerBtn) {
    submitAnswerBtn.addEventListener('click', () => {
        const selected = document.querySelector('input[name="quizOption"]:checked');
        if (!selected) {
            alert("Please select an option!");
            return;
        }

        const selectedValue = selected.value;
        const correctAnswer = quizQuestions[currentQuestionIndex].answer;

        if (selectedValue === correctAnswer) {
            score++;
            document.getElementById('current-score').textContent = score;
        }

        // Highlight answers
          document.querySelectorAll(".option-item").forEach((label) => {
            const input = label.querySelector("input");
            if (input.value === correctAnswer) {
            label.style.backgroundColor = "#c8f7c5";
            } else if (input.checked) {
            label.style.backgroundColor = "#f7c5c5";
            }
            input.disabled = true;
        });

        submitAnswerBtn.style.display = 'none';
        nextQuestionBtn.style.display = 'block';
        // After submitting, increment the daily count
        dailyCount++;
        userData.count = dailyCount;

        // Save it back
        userStats[userEmail] = userData;
        localStorage.setItem("userDailyStats", JSON.stringify(userStats));

    });
    }

    // Next button logic
    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                displayQuestion();
            } else {
                endQuiz();
            }
        });
    }

    function endQuiz(message) {
            alert(message);

            if (score > 0) {
            saveToLeaderboard(score);
    }

    // Redirect or disable UI here if needed

        questionTextElement.textContent = message || "Quiz Finished!";
        optionsContainer.innerHTML = "";
        submitAnswerBtn.style.display = "none";
        nextQuestionBtn.style.display = "none";

        setTimeout(() => {
        window.location.href = "leaderboard.html";
    }, 500);
    }
if (questionTextElement && optionsContainer && nextQuestionBtn && submitAnswerBtn) {
  shuffleArray(quizQuestions);
  displayQuestion();
}

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex].fact;
    const factTextElement = document.getElementById("fact-text");
        if (factTextElement) {
            factTextElement.textContent = randomFact;
            } else {
        console.warn("fact-text element not found on this page.");
    }
}
  
  // Load one fact when page opens

document.addEventListener("DOMContentLoaded", function () {
  if (document.body.classList.contains("facts-page")) {
    getRandomFact();
  }
});




// Check if we are on the leaderboard page
document.addEventListener("DOMContentLoaded", () => {
    const leaderboardBody = document.getElementById('leaderboard-body');
    const clearBtn = document.getElementById('clear-leaderboard-btn');

    if (leaderboardBody) {
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

        leaderboard.forEach((entry, index) => {
            const row = document.createElement('tr');

            const rankCell = document.createElement('td');
            rankCell.textContent = index + 1;

            const nameCell = document.createElement('td');
            nameCell.textContent = entry.name;

            const scoreCell = document.createElement('td');
            scoreCell.textContent = entry.score;

            row.appendChild(rankCell);
            row.appendChild(nameCell);
            row.appendChild(scoreCell);

            leaderboardBody.appendChild(row);
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            const confirmClear = confirm("Are you sure you want to clear the leaderboard?");
            if (confirmClear) {
                localStorage.removeItem('leaderboard');
                location.reload(); // Reload to refresh the table
            }
        });
    }
});



// === SIGN UP MODAL FUNCTIONALITY ===

// Create and inject signup modal dynamically
const signupModal = document.createElement("div");
signupModal.innerHTML = `
  <div id="signupModal" style="
    display:none;
    position: fixed;
    top: 20%;
    left: 35%;
    background: #fff;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(0,0,0,0.2);
    z-index: 1000;">
    
    <h2>Register</h2>
    <form id="signupForm">
      <input type="email" id="signupEmail" placeholder="Enter your email" required style="display:block; margin:10px 0; padding:8px; width:90%;">
      <input type="password" id="signupPassword" placeholder="Create password" required style="display:block; margin:10px 0; padding:8px; width:90%;">
      <button type="submit" style="margin-right: 10px;">Register</button>
      <button type="button" onclick="document.getElementById('signupModal').style.display='none'">Cancel</button>
    </form>
  </div>
`;
document.body.appendChild(signupModal);

// Show signup modal
const signupLink = document.querySelector(".sign-up-anchor");
if (signupLink) {
  signupLink.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("signupModal").style.display = "block";
  });
}


// Signup form handler
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find(user => user.email === email);
      if (existingUser) {
        alert("User already exists. Please login.");
        return;
      }

      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful! Please login.");
      document.getElementById("signupModal").style.display = "none";
    });
  }
});

// === LOGIN FUNCTIONALITY ===
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("Email").value;
      const password = document.getElementById("Password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const matchedUser = users.find(user => user.email === email && user.password === password);

      if (matchedUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
        alert("Login successful!");
        window.location.href = "quiz.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  }
});

