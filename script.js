// TravelMate — small interactions, nothing complicated.

const scrollButtons = document.querySelectorAll("[data-scroll]");

scrollButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

const countryData = {
  india: {
    kicker: "IF YOU PICK INDIA",
    title: "Start with Rajasthan.",
    text: "Colourful streets, huge forts, late-night chai and enough history to keep you looking up the whole trip.",
    images: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=85"
    ],
    alt: ["Historic architecture in Rajasthan", "Taj Mahal in India"]
  },
  japan: {
    kicker: "IF YOU PICK JAPAN",
    title: "Start with Kyoto.",
    text: "Temples in the morning, tiny streets in the evening, and the kind of food you keep thinking about after you leave.",
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=85"
    ],
    alt: ["Traditional street in Kyoto, Japan", "Temple in Japan"]
  },
  italy: {
    kicker: "IF YOU PICK ITALY",
    title: "Start with the coast.",
    text: "Take the long way, order something you can't pronounce, and let one beautiful town turn into the next.",
    images: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=85"
    ],
    alt: ["Italian coastal town", "Italian village in the mountains"]
  }
};

const countryButtons = document.querySelectorAll(".country-btn");
const countryResult = document.getElementById("country-result");

function updateCountry(country) {
  if (!countryResult || !countryData[country]) return;

  const data = countryData[country];

  countryResult.innerHTML = `
    <div>
      <span class="result-kicker">${data.kicker}</span>
      <h3>${data.title}</h3>
      <p>${data.text}</p>
    </div>
    <div class="result-images">
      <img src="${data.images[0]}" alt="${data.alt[0]}">
      <img src="${data.images[1]}" alt="${data.alt[1]}">
    </div>
  `;

  countryButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.country === country);
  });
}

countryButtons.forEach(button => {
  button.addEventListener("click", () => updateCountry(button.dataset.country));
});

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    formMessage.textContent = "Thanks — your message is ready to send. ✈";
    form.reset();
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}
