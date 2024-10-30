// מערך של אלבומים לדוגמה
const albums = [
  {
    id: 1,
    title: "שלווה טרופית",
    artist: "הרמוניה עולמית",
    year: 2021,
    genre: "World Music",
    cover: "album1.jpg",
  },
  {
    id: 2,
    title: "לילות ג'אז",
    artist: "קווינטט הירח",
    year: 2020,
    genre: "Jazz",
    cover: "album2.jpg",
  },
  {
    id: 3,
    title: "מדיטציה אלקטרונית",
    artist: "פולסר",
    year: 2022,
    genre: "Electronic",
    cover: "album3.jpg",
  },
  // הוסף עוד אלבומים כאן...
];

// פונקציה ליצירת כרטיס אלבום
function createAlbumCard(album) {
  return `
        <div class="album-card" tabindex="0">
            <img src="${album.cover}" alt="כריכת האלבום ${album.title}" class="album-cover">
            <h3>${album.title}</h3>
            <p>אמן: ${album.artist}</p>
            <p>שנה: ${album.year}</p>
            <p>ז'אנר: ${album.genre}</p>
        </div>
    `;
}

// פונקציה לעדכון תצוגת האלבומים
function updateAlbumDisplay() {
  const albumsList = document.getElementById("albums-list");
  const searchTerm = document
    .getElementById("albumSearchInput")
    .value.toLowerCase();
  const selectedGenres = Array.from(
    document.getElementById("genreFilter").selectedOptions
  ).map((option) => option.value);
  const selectedYear = document.getElementById("yearFilter").value;

  const filteredAlbums = albums.filter(
    (album) =>
      (album.title.toLowerCase().includes(searchTerm) ||
        album.artist.toLowerCase().includes(searchTerm)) &&
      (selectedGenres.length === 0 || selectedGenres.includes(album.genre)) &&
      (selectedYear === "" || album.year.toString() === selectedYear)
  );

  albumsList.innerHTML = filteredAlbums.map(createAlbumCard).join("");
}

// פונקציה לאתחול הפילטרים
function initFilters() {
  const genreFilter = document.getElementById("genreFilter");
  const yearFilter = document.getElementById("yearFilter");

  const genres = [...new Set(albums.map((album) => album.genre))];
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });

  const years = [...new Set(albums.map((album) => album.year))].sort(
    (a, b) => b - a
  );
  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
  });
}

// אתחול הדף
function init() {
  initFilters();
  updateAlbumDisplay();

  // הוספת מאזיני אירועים
  document
    .getElementById("albumSearchInput")
    .addEventListener("input", updateAlbumDisplay);
  document
    .getElementById("genreFilter")
    .addEventListener("change", updateAlbumDisplay);
  document
    .getElementById("yearFilter")
    .addEventListener("change", updateAlbumDisplay);
  document.getElementById("clearAlbumFilters").addEventListener("click", () => {
    document.getElementById("albumSearchInput").value = "";
    document.getElementById("genreFilter").selectedIndex = -1;
    document.getElementById("yearFilter").value = "";
    updateAlbumDisplay();
  });
}

// הפעלת האתחול כאשר הדף נטען
document.addEventListener("DOMContentLoaded", init);
