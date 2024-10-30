const genres = {
  "Chillout Fusion": [
    {
      title: "Whispers of the Forest",
      prompt:
        "Gentle flute melodies intertwined with soothing violin harmonies, soft saxophone solos adding warmth, rhythmic hand drumming creating a serene atmosphere, ambient textures that evoke nature's tranquility, 70 BPM.",
      youtubeLink: "#",
      genre: "Chillout Fusion",
      instruments: [
        "🎷 Saxophone",
        "🎻 Violin",
        "🥁 Hand Drums",
        "🎼 Ambient Textures",
      ],
      bpm: 70,
      style: ["🌿 Nature-inspired", "🧘 Meditative"],
    },
  ],
  "World Music": [
    {
      title: "Global Rhythms",
      prompt:
        "Uplifting arrangements featuring ethnic flutes, vibrant strings, and mellow saxophone, a blend of traditional and modern elements, captivating rhythms from various cultures, inviting listeners to dance and celebrate, 95 BPM.",
      youtubeLink: "#",
      genre: "World Music",
      instruments: ["🎺 Ethnic Flutes", "🎻 Strings", "🎷 Saxophone"],
      bpm: 95,
      style: ["🌍 Multicultural", "💃 Danceable"],
    },
    {
      title: "Cultural Tapestry",
      prompt:
        "Diverse instrumental layers featuring flute, violin, and hand percussion, blending traditional melodies with modern grooves, creating a rich auditory experience that tells a story, 90 BPM.",
      youtubeLink: "#",
      genre: "World Music",
      instruments: ["🎺 Flute", "🎻 Violin", "🥁 Hand Percussion"],
      bpm: 90,
      style: ["🎭 Storytelling", "🌈 Diverse"],
    },
  ],
  "Acoustic Jazz": [
    {
      title: "Evening Glow",
      prompt:
        "Rich saxophone improvisations paired with delicate flute passages, smooth violin melodies complementing soft percussion, intimate lyrics reflecting on love and connection, warm and inviting, 80 BPM.",
      youtubeLink: "#",
      genre: "Acoustic Jazz",
      instruments: [
        "🎷 Saxophone",
        "🎺 Flute",
        "🎻 Violin",
        "🥁 Soft Percussion",
      ],
      bpm: 80,
      style: ["🌙 Intimate", "❤️ Romantic"],
    },
    {
      title: "Late Night Stroll",
      prompt:
        "Smooth saxophone and delicate flute melodies creating a relaxed vibe, gentle percussion setting a laid-back groove, introspective lyrics about midnight adventures, 80 BPM.",
      youtubeLink: "#",
      genre: "Acoustic Jazz",
      instruments: ["🎷 Saxophone", "🎺 Flute", "🥁 Gentle Percussion"],
      bpm: 80,
      style: ["🌃 Nocturnal", "🚶‍♂️ Laid-back"],
    },
    {
      title: "Calm Reflections",
      prompt:
        "Soft saxophone improvisations blending with tranquil flute melodies, gentle percussion creating a soothing backdrop, ambient sounds enhancing a peaceful listening experience, perfect for introspection, 65 BPM.",
      youtubeLink: "#",
      genre: "Acoustic Jazz",
      instruments: [
        "🎷 Saxophone",
        "🎺 Flute",
        "🥁 Gentle Percussion",
        "🎼 Ambient Sounds",
      ],
      bpm: 65,
      style: ["🧘 Introspective", "🍃 Peaceful"],
    },
  ],
  "Folk Fusion": [
    {
      title: "Stories Untold",
      prompt:
        "Lively flute and violin interplay with rhythmic drumming, engaging melodies that tell stories, a blend of cultural influences creating a festive atmosphere, inviting claps and movement, 100 BPM.",
      youtubeLink: "#",
      genre: "Folk Fusion",
      instruments: ["🎺 Flute", "🎻 Violin", "🥁 Rhythmic Drums"],
      bpm: 100,
      style: ["📚 Storytelling", "🎉 Festive"],
    },
    {
      title: "Nature's Embrace",
      prompt:
        "Heartfelt violin lines intertwined with melodic flute passages, subtle drumming providing a soft groove, reflective lyrics about love and the beauty of nature, inviting and warm, 75 BPM.",
      youtubeLink: "#",
      genre: "Folk Fusion",
      instruments: ["🎻 Violin", "🎺 Flute", "🥁 Subtle Drums"],
      bpm: 75,
      style: ["🌿 Nature-inspired", "❤️ Romantic"],
    },
    {
      title: "Echoes of Tradition",
      prompt:
        "Playful flute and violin dialogues with rhythmic hand drums, earthy saxophone adding richness, storytelling lyrics weaving tales of heritage and culture, uplifting and engaging, 95 BPM.",
      youtubeLink: "#",
      genre: "Folk Fusion",
      instruments: ["🎺 Flute", "🎻 Violin", "🥁 Hand Drums", "🎷 Saxophone"],
      bpm: 95,
      style: ["🏞️ Traditional", "🌟 Uplifting"],
    },
  ],
  "Bossa Nova": [
    {
      title: "Tropical Breeze",
      prompt:
        "Smooth saxophone melodies with soft flute accompaniment, gentle guitar strumming and light percussion, relaxing rhythms capturing the essence of sunny beach days, warm and inviting, 85 BPM.",
      youtubeLink: "#",
      genre: "Bossa Nova",
      instruments: [
        "🎷 Saxophone",
        "🎺 Flute",
        "🎸 Guitar",
        "🥁 Light Percussion",
      ],
      bpm: 85,
      style: ["🏖️ Tropical", "☀️ Sunny"],
    },
  ],
  "Celtic Fusion": [
    {
      title: "Mystical Journeys",
      prompt:
        "Enchanting flute and violin harmonies leading the way, rhythmic hand drumming setting a lively pace, earthy saxophone tones adding depth, evoking landscapes of rolling hills and ancient tales, 90 BPM.",
      youtubeLink: "#",
      genre: "Celtic Fusion",
      instruments: ["🎺 Flute", "🎻 Violin", "🥁 Hand Drums", "🎷 Saxophone"],
      bpm: 90,
      style: ["🍀 Celtic", "🏞️ Mystical"],
    },
  ],
  "Indie Acoustic": [
    {
      title: "Serenity in Sound",
      prompt:
        "Ethereal flute and violin soundscapes creating a meditative environment, subtle saxophone accents floating in and out, gentle percussive elements providing a soft pulse, ideal for relaxation and mindfulness, 60 BPM.",
      youtubeLink: "#",
      genre: "Indie Acoustic",
      instruments: [
        "🎺 Flute",
        "🎻 Violin",
        "🎷 Saxophone",
        "🥁 Gentle Percussion",
      ],
      bpm: 60,
      style: ["🧘 Meditative", "🍃 Relaxing"],
    },
  ],
  "Neo-Soul": [
    {
      title: "Velvet Dreams",
      prompt:
        "Soulful saxophone riffs accompanied by lush flute harmonies, soft violin strings adding warmth, gentle rhythmic elements creating a cozy atmosphere, heartfelt lyrics reflecting love and desire, 70 BPM.",
      youtubeLink: "#",
      genre: "Neo-Soul",
      instruments: ["🎷 Saxophone", "🎺 Flute", "🎻 Violin", " Gentle Rhythm"],
      bpm: 70,
      style: ["❤️ Romantic", "🌙 Cozy"],
    },
  ],
  "Urban Chill": [
    {
      title: "City Lights",
      prompt:
        "Smooth saxophone lines paired with gentle flute harmonies, subtle drumming creating a relaxed urban vibe, reflective lyrics about life in the city, blending chill and contemporary sounds, 85 BPM.",
      youtubeLink: "#",
      genre: "Urban Chill",
      instruments: ["🎷 Saxophone", "🎺 Flute", "🥁 Subtle Drums"],
      bpm: 85,
      style: ["🏙️ Urban", "😎 Chill"],
    },
  ],
  "Cinematic Chill": [
    {
      title: "Whispers of the Night",
      prompt:
        "Ethereal flute and violin soundscapes with atmospheric percussion, saxophone tones adding a layer of emotion, cinematic melodies perfect for storytelling, 65 BPM.",
      youtubeLink: "#",
      genre: "Cinematic Chill",
      instruments: [
        "🎺 Flute",
        "🎻 Violin",
        "🥁 Atmospheric Percussion",
        "🎷 Saxophone",
      ],
      bpm: 65,
      style: ["🎬 Cinematic", "🌙 Nocturnal"],
    },
  ],
  "Jazz Chill": [
    {
      title: "Midnight Jazz",
      prompt:
        "Sultry saxophone melodies with smooth flute accents, light percussion adding a laid-back groove, evocative lyrics exploring night adventures, warm and inviting atmosphere, 80 BPM.",
      youtubeLink: "#",
      genre: "Jazz Chill",
      instruments: ["🎷 Saxophone", "🎺 Flute", "🥁 Light Percussion"],
      bpm: 80,
      style: ["🌃 Nocturnal", "🎷 Jazzy"],
    },
  ],
  "Tropical Chill": [
    {
      title: "Island Retreat",
      prompt:
        "Relaxing flute and saxophone melodies layered over gentle percussion, serene soundscapes creating an escape to paradise, harmonious rhythms promoting tranquility, 70 BPM.",
      youtubeLink: "#",
      genre: "Tropical Chill",
      instruments: ["🎺 Flute", "🎷 Saxophone", "🥁 Gentle Percussion"],
      bpm: 70,
      style: ["🏝️ Tropical", "🧘 Relaxing"],
    },
  ],
  "Chillout Lounge": [
    {
      title: "Cafe Melodies",
      prompt:
        "Laid-back saxophone and flute arrangements complemented by soft percussion, light strings adding depth, inviting melodies perfect for relaxation and social gatherings, 75 BPM.",
      youtubeLink: "#",
      genre: "Chillout Lounge",
      instruments: [
        "🎷 Saxophone",
        "🎺 Flute",
        "🥁 Soft Percussion",
        "🎻 Light Strings",
      ],
      bpm: 75,
      style: ["☕ Cafe", " Relaxing"],
    },
  ],
  "Electronic Chill": [
    {
      title: "Electric Nights",
      prompt:
        "Fast-paced beats driven by dynamic synthesizers, incredible remixes that elevate the energy, futuristic sounds creating an immersive experience, building tension with climactic moments that make crowds move, 128 BPM.",
      youtubeLink: "#",
      genre: "Electronic Chill",
      instruments: ["🎹 Synthesizers", "🥁 Electronic Drums", "🎛️ Remixes"],
      bpm: 128,
      style: ["🌃 Nocturnal", "🔊 Energetic"],
    },
  ],
  Folk: [
    {
      title: "Summer Stroll",
      prompt:
        "Light flute and violin melodies with rhythmic hand drumming, storytelling lyrics about carefree days, an uplifting and inviting sound perfect for warm summer evenings, 90 BPM.",
      youtubeLink: "#",
      genre: "Folk",
      instruments: ["🎺 Flute", "🎻 Violin", "🥁 Hand Drums"],
      bpm: 90,
      style: ["☀️ Summer", "🚶‍♂️ Carefree"],
    },
  ],
  "Chill Jazz": [
    {
      title: "Saxophone Groove",
      prompt:
        "Smooth saxophone lines paired with gentle flute harmonies, subtle drumming creating a relaxed urban vibe, reflective lyrics about life in the city, blending chill and contemporary sounds, 85 BPM.",
      youtubeLink: "#",
      genre: "Chill Jazz",
      instruments: ["🎷 Saxophone", "🎺 Flute", "🥁 Subtle Drums"],
      bpm: 85,
      style: ["🏙️ Urban", "😎 Chill"],
    },
  ],
  "Acoustic Dream": [
    {
      title: "Starlit Paths",
      prompt:
        "Delicate flute and violin arrangements creating an enchanting sound, soft drumming providing a gentle heartbeat, reflective lyrics evoking dreams and aspirations, 75 BPM.",
      youtubeLink: "#",
      genre: "Acoustic Dream",
      instruments: ["🎺 Flute", "🎻 Violin", "🥁 Soft Drums"],
      bpm: 75,
      style: ["✨ Dreamy", "🌠 Starry"],
    },
  ],
  "Fusion World Beat": [
    {
      title: "Rhythms of Unity",
      prompt:
        "Energetic flute and violin interactions with vibrant drumming, saxophone accents adding flair, lyrics celebrating diversity and connection, an infectious rhythm encouraging movement, 105 BPM.",
      youtubeLink: "#",
      genre: "Fusion World Beat",
      instruments: [
        "🎺 Flute",
        "🎻 Violin",
        "🥁 Vibrant Drums",
        "🎷 Saxophone",
      ],
      bpm: 105,
      style: ["🌍 Global", "💃 Danceable"],
    },
  ],
  "Jazz-Folk Fusion": [
    {
      title: "Echoing Souls",
      prompt:
        "A blend of smooth saxophone and warm flute melodies with intricate drumming, reflective lyrics exploring life's journeys, an engaging mix of genres creating a rich listening experience, 90 BPM.",
      youtubeLink: "#",
      genre: "Jazz-Folk Fusion",
      instruments: ["🎷 Saxophone", "🎺 Flute", "🥁 Intricate Drums"],
      bpm: 90,
      style: ["🎭 Reflective", "🌈 Fusion"],
    },
  ],
};

const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const instrumentFilter = document.getElementById("instrumentFilter");
const bpmFilter = document.getElementById("bpmFilter");
const styleFilter = document.getElementById("styleFilter");
const clearFiltersBtn = document.getElementById("clearFilters");

// פונקציה ליצירת רשימת פרטי השיר
function createSongDetails(song) {
  return `
    <ul class="song-details">
      <li>🎵 <span>ז'אנר:</span> ${song.genre}</li>
      <li>🎸 <span>כלי נגינה:</span> ${song.instruments.join(", ")}</li>
      <li>⏱️ <span>קצב:</span> ${song.bpm} BPM</li>
      <li>🌟 <span>סגנון:</span> ${song.style.join(", ")}</li>
    </ul>
  `;
}

// פונקציה לעדכון תצוגת השירים
function updateSongDisplay() {
  const playlistContainer = document.getElementById("playlist");
  playlistContainer.innerHTML = "";
  const searchTerm = searchInput.value.toLowerCase();
  const selectedGenres = Array.from(genreFilter.selectedOptions).map(
    (option) => option.value
  );
  const selectedInstruments = Array.from(instrumentFilter.selectedOptions).map(
    (option) => option.value
  );
  const selectedBPMs = Array.from(bpmFilter.selectedOptions).map((option) =>
    parseInt(option.value)
  );
  const selectedStyles = Array.from(styleFilter.selectedOptions).map(
    (option) => option.value
  );

  let allSongs = [];

  for (const [genre, songs] of Object.entries(genres)) {
    if (selectedGenres.length > 0 && !selectedGenres.includes(genre)) continue;

    const filteredSongs = songs.filter(
      (song) =>
        (song.title.toLowerCase().includes(searchTerm) ||
          song.prompt.toLowerCase().includes(searchTerm)) &&
        (selectedInstruments.length === 0 ||
          selectedInstruments.some((inst) =>
            song.instruments.includes(inst)
          )) &&
        (selectedBPMs.length === 0 || selectedBPMs.includes(song.bpm)) &&
        (selectedStyles.length === 0 ||
          selectedStyles.some((style) => song.style.includes(style)))
    );

    allSongs = allSongs.concat(filteredSongs);
  }

  if (allSongs.length > 0) {
    allSongs.forEach((song) => {
      const songElement = document.createElement("div");
      songElement.className = "song";
      songElement.innerHTML = `
                <h4 class="song-title">${song.title}</h4>
                <p class="prompt">${song.prompt}</p>
                ${createSongDetails(song)}
                <a href="${
                  song.youtubeLink
                }" class="link" target="_blank">צפה ביוטיוב</a>
            `;
      addSongWithAnimation(playlistContainer, songElement);
    });
  } else {
    playlistContainer.innerHTML = "<p>לא נמצאו שירים מתאימים.</p>";
  }

  // הוספת הודעת סטטוס לקוראי מסך
  const statusMessage = document.createElement("div");
  statusMessage.className = "sr-only";
  statusMessage.setAttribute("aria-live", "polite");
  statusMessage.textContent = `נמצאו ${allSongs.length} שירים מתאימים.`;
  playlistContainer.appendChild(statusMessage);

  // הפיכת השירים החדשים לניתנים להתמקדות
  makeSongsFocusable();
}

// אתחול מסנני הז'אנרים, כלי הנגינה והסגנונות
function initFilters() {
  const instruments = new Set();
  const styles = new Set();
  const bpms = new Set();

  Object.entries(genres).forEach(([genre, songs]) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);

    songs.forEach((song) => {
      song.instruments.forEach((inst) => instruments.add(inst));
      song.style.forEach((style) => styles.add(style));
      bpms.add(song.bpm);
    });
  });

  instruments.forEach((inst) => {
    const option = document.createElement("option");
    option.value = inst;
    option.textContent = inst;
    instrumentFilter.appendChild(option);
  });

  styles.forEach((style) => {
    const option = document.createElement("option");
    option.value = style;
    option.textContent = style;
    styleFilter.appendChild(option);
  });

  Array.from(bpms)
    .sort((a, b) => a - b)
    .forEach((bpm) => {
      const option = document.createElement("option");
      option.value = bpm;
      option.textContent = `${bpm} BPM`;
      bpmFilter.appendChild(option);
    });
}

// פונקציה לניקוי כל הסינונים
function clearAllFilters() {
  searchInput.value = "";
  genreFilter.selectedIndex = -1;
  instrumentFilter.selectedIndex = -1;
  styleFilter.selectedIndex = -1;
  bpmFilter.selectedIndex = -1;
  updateSongDisplay();
}

// הסרת מאזין האירועים הישן של bpmFilter
// הוספת מאזין אירועים חדש
bpmFilter.addEventListener("change", updateSongDisplay);

clearFiltersBtn.addEventListener("click", clearAllFilters);

// הוספת אנימציה בעת טעינת שירים חדשים
function addSongWithAnimation(genreElement, songElement) {
  songElement.style.opacity = "0";
  genreElement.appendChild(songElement);
  setTimeout(() => {
    songElement.style.transition = "opacity 0.5s ease-out";
    songElement.style.opacity = "1";
  }, 10);
}

// אתחול הפילטרים ועדכון התצוגה הראשונית
function init() {
  initFilters();
  updateSongDisplay(); // קריאה לעדכון תצוגת השירים
  makeSongsFocusable(); // הפיכת השירים לניתנים להתמקדות
  initTheme();

  // הפעלת השעון
  updateClock();
  setInterval(updateClock, 1000);
}

init();

// הוספת ניווט מקלדת לרשימת השירים
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    const songs = document.querySelectorAll(".song");
    const currentFocus = document.activeElement;
    let index = Array.from(songs).indexOf(currentFocus);

    if (e.key === "ArrowDown") {
      index = (index + 1) % songs.length;
    } else {
      index = (index - 1 + songs.length) % songs.length;
    }

    songs[index].focus();
  }
});

// הפיכת כל שיר לאלמנט שניתן להתמקד עליו
function makeSongsFocusable() {
  const songs = document.querySelectorAll(".song");
  songs.forEach((song) => {
    song.setAttribute("tabindex", "0");
  });
}

// קריאה לפונקציה זו לאחר עדכון רשימת השירים
updateSongDisplay();
makeSongsFocusable();

function initPlaylist() {
  let index = 1;
  for (const [genre, songs] of Object.entries(genres)) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = genre;

    songs.forEach((song) => {
      const option = document.createElement("option");
      option.value = song.title;
      option.textContent = `${index}. ${song.title}`;
      option.dataset.genre = genre;
      option.dataset.bpm = song.bpm;
      optgroup.appendChild(option);
      index++;
    });

    playlistSelect.appendChild(optgroup);
  }
}

playlistSelect.addEventListener("change", function () {
  const selectedOption = this.options[this.selectedIndex];
  const selectedSong = selectedOption.value;
  const selectedGenre = selectedOption.dataset.genre;
  const selectedBPM = selectedOption.dataset.bpm;

  searchInput.value = selectedSong;

  // ניקוי בחירות קודמות
  genreFilter.selectedIndex = -1;
  bpmFilter.selectedIndex = -1;

  // בחירת הז'אנר המתאים
  Array.from(genreFilter.options).forEach((option) => {
    if (option.value === selectedGenre) {
      option.selected = true;
    }
  });

  // בחירת ה-BPM המתאים
  Array.from(bpmFilter.options).forEach((option) => {
    if (option.value === selectedBPM) {
      option.selected = true;
    }
  });

  updateSongDisplay();
});

// עדכון הפונקציה לשינוי ערכת הצבעים
function changeTheme(theme) {
  const themeStyle = document.getElementById("theme-style");
  themeStyle.href = `${theme}-theme.css`;
  localStorage.setItem("theme", theme);

  // עדכון הכפתור הפעיל
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.theme === theme) {
      btn.classList.add("active");
    }
  });

  // הוספת/הסרת class מה-body
  document.body.className = `theme-${theme}`;

  // שינוי הכותרת והתיאור בהתאם לערכה
  const albumTitle = document.querySelector(".album-title");
  const albumDescription = document.querySelector(".album-description");

  switch (theme) {
    case "morning":
      albumTitle.textContent = "🌅 בוקר של מנגינות רכות";
      albumDescription.textContent =
        "התחל את היום עם צלילים מרגיעים ומעוררי השראה";
      break;
    case "noon":
      albumTitle.textContent = "☀️ צהריים של קצב ואנרגיה";
      albumDescription.textContent = "מוזיקה קצבית ומלאת חיים לשיא היום";
      break;
    case "evening":
      albumTitle.textContent = "🌆 ערב של הרמוניות שקטות";
      albumDescription.textContent = "צלילים נעימים לסיום יום עמוס";
      break;
    case "night":
      albumTitle.textContent = "🌙 לילה של חלומות מוזיקליים";
      albumDescription.textContent = "מנגינות מרגיעות לשעות הקטנות של הלילה";
      break;
  }
}

// עדכון פונקציית האתחול של ערכת הצבעים
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    changeTheme(savedTheme);
  } else {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      changeTheme("morning");
    } else if (hour >= 12 && hour < 17) {
      changeTheme("noon");
    } else if (hour >= 17 && hour < 20) {
      changeTheme("evening");
    } else {
      changeTheme("night");
    }
  }
}

// מאזין אירועים לכפתורי ערכות הצבעים
document.querySelectorAll(".theme-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    changeTheme(btn.dataset.theme);
  });
});

// פונקציה לפתיחה וסגירה של מקטע הסינונים
function toggleFilters() {
  const sidebar = document.querySelector(".filters-sidebar");
  sidebar.classList.toggle("closed");
  const btn = document.querySelector(".toggle-filters-btn");
  btn.textContent = sidebar.classList.contains("closed") ? "🔍" : "❌";
}

// מאזין אירועים לכפתור פתיחה/סגירה של הסינונים
document
  .querySelector(".toggle-filters-btn")
  .addEventListener("click", toggleFilters);

// הוספת פונקציה לעדכון השעון
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("he-IL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("clock").textContent = timeString;
}

// פונקציה להחלפת הערכה המלאה
function changeFullTheme(theme) {
  // שינוי ערכת הצבעים
  changeTheme(theme);

  // החלפת תמונת הרקע
  const albumCover = document.querySelector(".album-cover");
  albumCover.src = `${theme}-background.jpg`;

  // שינוי הכותרת והתיאור בהתאם לערכה
  const albumTitle = document.querySelector(".album-title");
  const albumDescription = document.querySelector(".album-description");

  switch (theme) {
    case "morning":
      albumTitle.textContent = "🌅 בוקר של מנגינות רכות";
      albumDescription.textContent =
        "התחל את היום עם צלילים מרגיעים ומעוררי השראה";
      break;
    case "noon":
      albumTitle.textContent = "☀️ צהריים של קצב ואנרגיה";
      albumDescription.textContent = "מוזיקה קצבית ומלאת חיים לשיא היום";
      break;
    case "evening":
      albumTitle.textContent = "🌆 ערב של הרמוניות שקטות";
      albumDescription.textContent = "צלילים נעימים לסיום יום עמוס";
      break;
    case "night":
      albumTitle.textContent = "🌙 לילה של חלומות מוזיקליים";
      albumDescription.textContent = "מנגינות מרגיעות לשעות הקטנות של הלילה";
      break;
  }
}

// מאזין אירועים לכפתור החלפת ערכה מלאה
document
  .getElementById("fullThemeChange")
  .addEventListener("click", function () {
    const currentTheme = document.body.className.replace("theme-", "");
    const themes = ["morning", "noon", "evening", "night"];
    const currentIndex = themes.indexOf(currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    changeFullTheme(nextTheme);
  });

// עדכון פונקציית האתחול
function init() {
  initFilters();
  updateSongDisplay();
  makeSongsFocusable();
  initTheme();
  updateClock();
  setInterval(updateClock, 1000);

  // הוספת מאזיני אירועים לכפתורי ערכות הצבעים
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      changeTheme(btn.dataset.theme);
    });
  });
}

// ... (קוד קיים) ...
