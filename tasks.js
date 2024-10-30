// מידע על הגרסה
const VERSION = "1.0.0";

// מערך של משימות לדוגמה
let tasks = [
  {
    id: 1,
    text: "להאזין לאלבום חדש",
    completed: false,
    priority: 2,
    dateAdded: new Date(),
    dueDate: new Date(new Date().setDate(new Date().getDate() + 7)),
    category: "פנאי",
    tags: ["מוזיקה"],
    reminder: null,
  },
  {
    id: 2,
    text: "לתרגל מדיטציה",
    completed: false,
    priority: 1,
    dateAdded: new Date(),
    dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    category: "פנאי",
    tags: ["מוזיקה"],
    reminder: null,
  },
  {
    id: 3,
    text: "לכתוב רשימת השמעה חדשה",
    completed: true,
    priority: 3,
    dateAdded: new Date(),
    dueDate: new Date(new Date().setDate(new Date().getDate() + 3)),
    category: "פנאי",
    tags: ["מוזיקה"],
    reminder: null,
  },
];

// פונקציה ליצירת אלמנט משימה
function createTaskElement(task) {
  const taskElement = document.createElement("div");
  taskElement.className = `task ${task.completed ? "completed" : ""}`;
  taskElement.innerHTML = `
    <input type="checkbox" id="task-${task.id}" ${
    task.completed ? "checked" : ""
  } aria-label="סמן כהושלם">
    <label for="task-${task.id}" class="task-text">${task.text}</label>
    <span class="task-priority" data-priority="${
      task.priority
    }">${getPriorityEmoji(task.priority)}</span>
    <span class="task-due-date">📅 ${formatDate(task.dueDate)}</span>
    <span class="task-category">🏷️ ${task.category}</span>
    <div class="task-actions">
      <button class="edit-task" aria-label="ערוך משימה">✏️</button>
      <button class="delete-task" aria-label="מחק משימה">🗑️</button>
    </div>
    <div class="task-tags">${task.tags
      .map((tag) => `<span class="task-tag">🏷️ ${tag}</span>`)
      .join("")}</div>
  `;

  const checkbox = taskElement.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    updateTaskDisplay();
    speak(
      task.completed
        ? "משימה הושלמה: " + task.text
        : "משימה סומנה כלא הושלמה: " + task.text
    );
  });

  const prioritySelect = taskElement.querySelector(".task-priority");
  prioritySelect.addEventListener("change", (e) => {
    task.priority = parseInt(e.target.value);
    updateTaskDisplay();
  });

  taskElement.querySelector(".edit-task").addEventListener("click", () => {
    openEditModal(task);
  });

  taskElement.querySelector(".delete-task").addEventListener("click", () => {
    if (confirm("האם אתה בטוח שברצונך למחוק משימה זו?")) {
      tasks = tasks.filter((t) => t.id !== task.id);
      updateTaskDisplay();
      speak("משימה נמחקה: " + task.text);
    }
  });

  return taskElement;
}

function getPriorityEmoji(priority) {
  switch (priority) {
    case 1:
      return "🔴"; // גבוהה
    case 2:
      return "🟠"; // בינונית
    case 3:
      return "🟢"; // נמוכה
    default:
      return "⚪"; // לא מוגדרת
  }
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("he-IL");
}

// פונקציה לעדכון התאריך והשעון
function updateDateTime() {
  const now = new Date();

  // עדכון התאריך
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = now.toLocaleDateString("he-IL", options);
  document.getElementById("date").textContent = dateString;

  // עדכון השעון
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

// פונקציה לעדכון תצוגת המשימות
function updateTaskDisplay() {
  const tasksList = document.getElementById("tasksList");
  const filter = document.getElementById("taskFilter").value;
  const sort = document.getElementById("taskSort").value;
  const search = document.getElementById("taskSearch").value.toLowerCase();

  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  const categoryFilter = document.getElementById("categoryFilter").value;
  if (categoryFilter) {
    filteredTasks = filteredTasks.filter(
      (task) => task.category === categoryFilter
    );
  }

  const tagFilter = document.getElementById("tagFilter").value.toLowerCase();
  if (tagFilter) {
    filteredTasks = filteredTasks.filter((task) =>
      task.tags.some((tag) => tag.toLowerCase().includes(tagFilter))
    );
  }

  if (search) {
    filteredTasks = filteredTasks.filter(
      (task) =>
        task.text.toLowerCase().includes(search) ||
        task.tags.some((tag) => tag.toLowerCase().includes(search)) ||
        task.category.toLowerCase().includes(search)
    );
  }

  filteredTasks.sort((a, b) => {
    if (sort === "priority") {
      return a.priority - b.priority;
    } else if (sort === "alphabetical") {
      return a.text.localeCompare(b.text, "he");
    } else {
      return b.dateAdded - a.dateAdded;
    }
  });

  tasksList.innerHTML = "";
  filteredTasks.forEach((task) => {
    tasksList.appendChild(createTaskElement(task));
  });

  updateTaskStats();
}

// פונקציה להוספת משימה חדשה
function addTask(event) {
  event.preventDefault();
  const taskInput = document.getElementById("taskInput");
  const taskDueDate = document.getElementById("taskDueDate");
  const taskPriority = document.getElementById("taskPriority");
  const taskTags = document.getElementById("taskTags");
  const taskCategory = document.getElementById("taskCategory");
  const taskReminder = document.getElementById("taskReminder");
  const text = taskInput.value.trim();
  if (text) {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
      priority: parseInt(taskPriority.value),
      dateAdded: new Date(),
      dueDate: taskDueDate.value ? new Date(taskDueDate.value) : null,
      tags: taskTags.value
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
      category: taskCategory.value,
      reminder: taskReminder.value ? new Date(taskReminder.value) : null,
    };
    tasks.push(newTask);
    resetForm();
    updateTaskDisplay();
    speak("משימה חדשה נוספה: " + text);
    if (newTask.reminder) {
      setReminder(newTask);
    }
  }
}

function resetForm() {
  document.getElementById("taskInput").value = "";
  document.getElementById("taskDueDate").value = "";
  document.getElementById("taskPriority").value = "2";
  document.getElementById("taskTags").value = "";
  document.getElementById("taskCategory").value = "";
  document.getElementById("taskReminder").value = "";
}

function openEditModal(task) {
  const modal = document.getElementById("editTaskModal");
  document.getElementById("editTaskText").value = task.text;
  document.getElementById("editTaskDueDate").value = task.dueDate
    ? task.dueDate.toISOString().split("T")[0]
    : "";
  document.getElementById("editTaskPriority").value = task.priority;
  document.getElementById("editTaskTags").value = task.tags.join(", ");
  document.getElementById("editTaskCategory").value = task.category;
  document.getElementById("editTaskReminder").value = task.reminder
    ? task.reminder.toISOString().slice(0, 16)
    : "";

  modal.style.display = "block";

  document.getElementById("editTaskForm").onsubmit = function (e) {
    e.preventDefault();
    saveEditedTask(task);
  };
}

function saveEditedTask(task) {
  task.text = document.getElementById("editTaskText").value;
  task.dueDate = new Date(document.getElementById("editTaskDueDate").value);
  task.priority = parseInt(document.getElementById("editTaskPriority").value);
  task.tags = document
    .getElementById("editTaskTags")
    .value.split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");
  task.category = document.getElementById("editTaskCategory").value;
  task.reminder = document.getElementById("editTaskReminder").value
    ? new Date(document.getElementById("editTaskReminder").value)
    : null;

  updateTaskDisplay();
  closeEditModal();
  speak("המשימה עודכנה: " + task.text);
  if (task.reminder) {
    setReminder(task);
  }
}

function closeEditModal() {
  document.getElementById("editTaskModal").style.display = "none";
}

function setReminder(task) {
  const now = new Date();
  const timeDiff = task.reminder.getTime() - now.getTime();
  if (timeDiff > 0) {
    setTimeout(() => {
      if (Notification.permission === "granted") {
        const notification = new Notification("תזכורת למשימה", {
          body: task.text,
          icon: "⏰", // שימוש באמוג'י במקום אייקון
        });
        notification.onclick = function () {
          openEditModal(task);
        };
      } else {
        alert(`⏰ תזכורת: ${task.text}`);
      }
      speak(`תזכורת למשימה: ${task.text}`);
    }, timeDiff);
  }
}

function exportTasks() {
  const tasksJSON = JSON.stringify(tasks);
  const blob = new Blob([tasksJSON], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "tasks.json";
  a.click();
}

function importTasks() {
  const fileInput = document.getElementById("importTasksFile");
  fileInput.click();
  fileInput.onchange = function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const importedTasks = JSON.parse(e.target.result);
      tasks = importedTasks;
      updateTaskDisplay();
      speak("משימות יובאו בהצלחה");
    };
    reader.readAsText(file);
  };
}

// פונקציה לעדכון סטטיסיקות המשימות
function updateTaskStats() {
  document.getElementById("totalTasks").textContent = tasks.length;
  document.getElementById("activeTasks").textContent = tasks.filter(
    (task) => !task.completed
  ).length;
  document.getElementById("completedTasks").textContent = tasks.filter(
    (task) => task.completed
  ).length;
}

// פונקציה להחלפת ערכת נושא
function changeTheme(theme) {
  const themeStylesheet = document.getElementById("theme-style");
  themeStylesheet.href = `${theme}-theme.css`;
  localStorage.setItem("theme", theme);
}

// פונקציה לטעינת ערכת הנושא השמורה
function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "morning";
  changeTheme(savedTheme);
}

// פונקציה חדשה לייצוא משימות ב-CSV
function exportTasksCSV() {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent +=
    "ID,טקסט,הושלם,עדיפות,תאריך הוספה,תאריך יעד,קטגוריה,תגיות,תזכורת\n";

  tasks.forEach((task) => {
    let row = [
      task.id,
      task.text,
      task.completed,
      task.priority,
      task.dateAdded.toISOString(),
      task.dueDate ? task.dueDate.toISOString() : "",
      task.category,
      task.tags.join(";"),
      task.reminder ? task.reminder.toISOString() : "",
    ].join(",");
    csvContent += row + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "tasks.csv");
  document.body.appendChild(link);
  link.click();
}

// פונקציה חדשה להצגת מידע על הגרסה
function showVersionInfo() {
  alert(
    `גרסת המערכת: ${VERSION}\n\nפותח על ידי: שם המפתח או שם הצוות\nרישיון: MIT\n\nתודה שאתם משתמשים במערכת ניהול המשימות שלנו!`
  );
}

// אתחול הדף
function init() {
  updateTaskDisplay();
  updateDateTime(); // עדכון ראשוני של התאריך והשעון
  setInterval(updateDateTime, 1000); // עדכון התאריך והשעון כל שנייה
  loadSavedTheme(); // טעינת ערכת הנושא השמורה

  // הוספת מאזיני אירועים
  document.getElementById("addTaskForm").addEventListener("submit", addTask);
  document
    .getElementById("taskFilter")
    .addEventListener("change", updateTaskDisplay);
  document
    .getElementById("taskSort")
    .addEventListener("change", updateTaskDisplay);
  document
    .getElementById("taskSearch")
    .addEventListener("input", updateTaskDisplay);

  // הוספת מאזיני אירועים לכפתורי החלפת ערכת נושא
  const themeButtons = document.querySelectorAll(".theme-btn");
  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.getAttribute("data-theme");
      changeTheme(theme);
    });
  });

  document.getElementById("exportTasks").addEventListener("click", exportTasks);
  document.getElementById("importTasks").addEventListener("click", importTasks);
  document
    .getElementById("exportTasksCSV")
    .addEventListener("click", exportTasksCSV);
  document
    .getElementById("showVersionInfo")
    .addEventListener("click", showVersionInfo);

  // בקשת הרשאה להתראות
  if (
    Notification.permission !== "granted" &&
    Notification.permission !== "denied"
  ) {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        console.log("התראות אושרו");
      }
    });
  }

  initSidebarSections();

  loadSavedSizeFactor();

  document
    .getElementById("decreaseSize")
    .addEventListener("click", () => changeSizeFactor(-0.1));
  document
    .getElementById("resetSize")
    .addEventListener("click", resetSizeFactor);
  document
    .getElementById("increaseSize")
    .addEventListener("click", () => changeSizeFactor(0.1));

  document
    .getElementById("closeEditModal")
    .addEventListener("click", closeEditModal);
}

function closeEditModal() {
  document.getElementById("editTaskModal").style.display = "none";
}

function exportTasks() {
  const tasksJSON = JSON.stringify(tasks);
  const blob = new Blob([tasksJSON], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "tasks.json";
  a.click();
}

function importTasks() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".json";
  fileInput.onchange = function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const importedTasks = JSON.parse(e.target.result);
      tasks = importedTasks;
      updateTaskDisplay();
      speak("משימות יובאו בהצלחה");
    };
    reader.readAsText(file);
  };
  fileInput.click();
}

function changeSizeFactor(change) {
  let currentFactor = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--size-factor")
  );
  let newFactor = Math.max(0.5, Math.min(2, currentFactor + change));
  document.documentElement.style.setProperty("--size-factor", newFactor);
  localStorage.setItem("sizeFactor", newFactor);
}

function resetSizeFactor() {
  document.documentElement.style.setProperty("--size-factor", 1);
  localStorage.setItem("sizeFactor", 1);
}

function loadSavedSizeFactor() {
  let savedFactor = localStorage.getItem("sizeFactor");
  if (savedFactor) {
    document.documentElement.style.setProperty("--size-factor", savedFactor);
  }
}

function showVersionInfo() {
  alert(
    `גרסת המערכת: ${VERSION}\n\nפותח על ידי: שם המפתח או שם הצוות\nרישיון: MIT\n\nתודה שאתם משתמשים במערכת ניהול המשימות שלנו!`
  );
}
