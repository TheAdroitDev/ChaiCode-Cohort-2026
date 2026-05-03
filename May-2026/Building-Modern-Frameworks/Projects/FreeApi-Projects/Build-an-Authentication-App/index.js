const BASE_URL = "https://api.freeapi.app/api/v1/users";

// ---------------- UI HELPERS ----------------
const registerSection = document.getElementById("registerSection");
const loginSection = document.getElementById("loginSection");
const profileSection = document.getElementById("profileSection");

function showRegister() {
  registerSection.style.display = "block";
  loginSection.style.display = "none";
  profileSection.style.display = "none";
}

function showLogin() {
  registerSection.style.display = "none";
  loginSection.style.display = "block";
  profileSection.style.display = "none";
}

function showProfile(user) {
  registerSection.style.display = "none";
  loginSection.style.display = "none";
  profileSection.style.display = "block";

  document.getElementById("userData").innerText =
    `Username: ${user.username}, Email: ${user.email}`;
}

// ---------------- API LAYER ----------------
async function registerUser(data) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

async function loginUser(data) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // IMPORTANT
    body: JSON.stringify(data),
  });
  return res.json();
}

async function getCurrentUser() {
  const res = await fetch(`${BASE_URL}/current-user`, {
    method: "GET",
    credentials: "include", // IMPORTANT
  });
  return res.json();
}

async function logoutUser() {
  const res = await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
  return res.json();
}

// ---------------- FORM HANDLERS ----------------

// REGISTER
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    email: document.getElementById("regEmail").value,
    username: document.getElementById("regUsername").value,
    password: document.getElementById("regPassword").value,
    role: document.getElementById("regRole").value,
  };

  const result = await registerUser(data);

  document.getElementById("registerMsg").innerText =
    result.message || "Registered!";
});

// LOGIN
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    username: document.getElementById("loginUsername").value,
    password: document.getElementById("loginPassword").value,
  };

  const result = await loginUser(data);

  if (result.success) {
    const userRes = await getCurrentUser();
    showProfile(userRes.data);
  } else {
    document.getElementById("loginMsg").innerText =
      result.message || "Login failed";
  }
});

// LOGOUT
document.getElementById("logoutBtn").addEventListener("click", async () => {
  await logoutUser();
  showLogin();
});

// ---------------- APP INIT ----------------
async function init() {
  const res = await getCurrentUser();

  if (res.success) {
    showProfile(res.data);
  } else {
    showLogin();
  }
}

init();