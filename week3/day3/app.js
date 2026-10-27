let items = [...catalogItems];
let activeCategory = "All";
let searchQuery = "";
let currentSort = "default";
let favorites = JSON.parse(localStorage.getItem("vault_favorites")) || [];

const cardsGrid = document.getElementById("cards-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const categoryFilters = document.getElementById("category-filters");
const sortSelect = document.getElementById("sort-select");
const themeToggle = document.getElementById("theme-toggle");

const detailModal = document.getElementById("detail-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalMetric = document.getElementById("modal-metric");
const modalDescription = document.getElementById("modal-description");

const formModal = document.getElementById("form-modal");
const addItemBtn = document.getElementById("add-item-btn");
const formCloseBtn = document.getElementById("form-close-btn");
const formBackdrop = document.getElementById("form-backdrop");
const addLandmarkForm = document.getElementById("add-landmark-form");

function renderItems() {
  cardsGrid.innerHTML = "";

  let filtered = items.filter(item => {
    const matchesCategory =
      activeCategory === "All" ? true :
      activeCategory === "Favorites" ? favorites.includes(item.id) :
      item.category === activeCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (currentSort === "name-asc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSort === "name-desc") {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  } else if (currentSort === "metric-asc") {
    filtered.sort((a, b) => a.metric - b.metric);
  } else if (currentSort === "metric-desc") {
    filtered.sort((a, b) => b.metric - a.metric);
  }

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
    filtered.forEach(item => {
      const card = createCardElement(item);
      cardsGrid.appendChild(card);
    });
  }
}

function createCardElement(item) {
  const isFav = favorites.includes(item.id);
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("tabindex", "0");

  card.innerHTML = `
    <div class="card-img-wrapper">
      <img class="card-img" src="${item.image}" alt="${item.title}" loading="lazy">
      <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${item.id}" aria-label="Toggle favorite">
        ${isFav ? '❤️' : '🤍'}
      </button>
    </div>
    <div class="card-content">
      <div class="card-badges">
        <span class="badge">${item.category}</span>
        <span class="badge badge-accent">${item.metricLabel}</span>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-desc">${item.shortDescription}</p>
    </div>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.closest(".fav-btn")) return;
    openDetailModal(item);
  });

  const favBtn = card.querySelector(".fav-btn");
  favBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(item.id);
  });

  return card;
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("vault_favorites", JSON.stringify(favorites));
  renderItems();
}

function openDetailModal(item) {
  modalImage.src = item.image;
  modalImage.alt = item.title;
  modalTitle.textContent = item.title;
  modalCategory.textContent = item.category;
  modalMetric.textContent = item.metricLabel;
  modalDescription.textContent = item.fullDetails;

  detailModal.classList.remove("hidden");
  detailModal.setAttribute("aria-hidden", "false");
}

function closeDetailModal() {
  detailModal.classList.add("hidden");
  detailModal.setAttribute("aria-hidden", "true");
}

function openFormModal() {
  formModal.classList.remove("hidden");
  formModal.setAttribute("aria-hidden", "false");
}

function closeFormModal() {
  formModal.classList.add("hidden");
  formModal.setAttribute("aria-hidden", "true");
  addLandmarkForm.reset();
}

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  renderItems();
});

categoryFilters.addEventListener("click", (e) => {
  if (!e.target.classList.contains("filter-btn")) return;

  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");

  activeCategory = e.target.dataset.category;
  renderItems();
});

sortSelect.addEventListener("change", (e) => {
  currentSort = e.value || e.target.value;
  renderItems();
});

modalCloseBtn.addEventListener("click", closeDetailModal);
modalBackdrop.addEventListener("click", closeDetailModal);

formCloseBtn.addEventListener("click", closeFormModal);
formBackdrop.addEventListener("click", closeFormModal);
addItemBtn.addEventListener("click", openFormModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDetailModal();
    closeFormModal();
  }
});

addLandmarkForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newItem = {
    id: Date.now(),
    title: document.getElementById("form-title").value.trim(),
    category: document.getElementById("form-category").value,
    image: document.getElementById("form-image").value.trim(),
    metric: parseInt(document.getElementById("form-metric").value, 10),
    metricLabel: document.getElementById("form-metric-label").value.trim(),
    shortDescription: document.getElementById("form-short-desc").value.trim(),
    fullDetails: document.getElementById("form-full-details").value.trim()
  };

  items.unshift(newItem);
  renderItems();
  closeFormModal();
});

function initTheme() {
  const savedTheme = localStorage.getItem("vault_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("vault_theme", newTheme);
  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

initTheme();
renderItems();