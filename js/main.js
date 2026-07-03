const services = [
  {
    image: "assets/laundry-dry-cleaning-rafiki.png",
    title: "Laundry",
    desc: "Professional laundry and dry cleaning from your doorstep. We pick up, wash, iron and deliver back to you.",
    rating: "4.9 ⭐ (312 reviews)",
    price: "From KES 200/kg",
    workers: "148 workers available"
  },
  {
    image: "assets/cleaning-service-rafiki.png",
    title: "Home & Office Cleaning",
    desc: "Thorough cleaning of homes and offices by trained professionals with quality cleaning supplies included.",
    rating: "4.8 ⭐ (275 reviews)",
    price: "From KES 1,500/session",
    workers: "201 workers available"
  },
  {
    image: "assets/electrician-pana.png",
    title: "Electrical",
    desc: "Licensed electricians for wiring, repairs, installations, and fault-finding. Safety-certified and insured.",
    rating: "4.7 ⭐ (189 reviews)",
    price: "From KES 500/hr",
    workers: "87 workers available"
  },
  {
    image: "assets/gardening-cuate.png",
    title: "Gardening",
    desc: "Lawn mowing, pruning, planting and full garden makeovers. Regular or one-off sessions available.",
    rating: "4.9 ⭐ (143 reviews)",
    price: "From KES 800/session",
    workers: "64 workers available"
  },
  {
    image: "assets/hairdresser-team-rafiki.png",
    title: "Hair Styling",
    desc: "Expert stylists for braids, perms, treatments and cuts. Home visit or salon — you choose.",
    rating: "4.8 ⭐ (230 reviews)",
    price: "From KES 500/style",
    workers: "175 workers available"
  },
  {
    image: "assets/barber-pana.png",
    title: "Barber",
    desc: "Classic cuts, fades, beard trims and grooming by skilled barbers who come to you.",
    rating: "4.9 ⭐ (298 reviews)",
    price: "From KES 300/cut",
    workers: "119 workers available"
  },
  {
    image: "assets/pipeline-maintenance-rafiki.png",
    title: "Plumbing",
    desc: "Fast plumbing repairs, pipe installation, leaks and blockages fixed by certified plumbers.",
    rating: "4.7 ⭐ (167 reviews)",
    price: "From KES 700/hr",
    workers: "93 workers available"
  },
  {
    image: "assets/chef-pana.png",
    title: "Cooking",
    desc: "Private chefs and cooks for daily meals, events and meal prep. Local cuisines and special diets catered for.",
    rating: "4.8 ⭐ (212 reviews)",
    price: "From KES 1,200/day",
    workers: "110 workers available"
  },
];

const grid = document.getElementById("services-grid");

services.forEach((service) => {
  const card = document.createElement("div");
  card.className = "service-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.title = `Learn more about ${service.title}`;

  card.innerHTML = `
    <img src="${service.image}" alt="${service.title}" />
    <h3>${service.title}</h3>
    <p class="service-card-rating">${service.rating.split(" (")[0]}</p>
    <p class="service-card-price">${service.price}</p>
    <span class="service-card-cta">Book →</span>
  `;

  card.addEventListener("click", () => openModal(service));
  card.addEventListener("keydown", e => { if (e.key === "Enter") openModal(service); });

  grid.appendChild(card);
});

// Modal logic
const overlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");

function openModal(service) {
  document.getElementById("modal-img").src = service.image;
  document.getElementById("modal-img").alt = service.title;
  document.getElementById("modal-title").textContent = service.title;
  document.getElementById("modal-desc").textContent = service.desc;
  document.getElementById("modal-rating").textContent = service.rating;
  document.getElementById("modal-price").textContent = service.price;
  document.getElementById("modal-workers").textContent = service.workers;
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.hidden = true;
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// Animated counters for stats bar
function animateCounter(el, target, duration = 1600) {
  const formatted = target.toLocaleString();
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start).toLocaleString();
  }, 16);
}

window.addEventListener("load", () => {
  animateCounter(document.getElementById("stat-workers"), 1240);
  animateCounter(document.getElementById("stat-jobs"), 8530);
});
