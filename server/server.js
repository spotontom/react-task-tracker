const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5001;
const USERS_PATH = path.join(__dirname, "data", "users.json");

app.use(cors());
app.use(express.json());

// Utility: Load users from JSON file
function loadUsers() {
  const data = fs.readFileSync(USERS_PATH, "utf-8");
  return JSON.parse(data);
}

// Utility: Save users to JSON file
function saveUsers(users) {
  fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2));
}

// ✅ Login endpoint (requires email and password)
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Login request received with:", req.body); 
  const users = loadUsers();
  const user = users.find((u) => u.username === username);

  if (!user) {
    console.log("User not found for username:", username);
    return res.status(401).json({ error: "Invalid credentials" });
  }

  if ( user.password !== password) {
    console.log("User password not match!")
    return res.status(401).json({ error: "Invalid credentials" });
  }

  console.log("Login successful for:", username);
  res.json({
    email: user.email,
    username: user.username,
    tasks: user.tasks,
  });
});
// ✅ Session restore endpoint (email only)
app.post("/session", (req, res) => {
  const { username } = req.body;
  const users = loadUsers();
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({ tasks: user.tasks });
});

// ✅ Update tasks endpoint
app.post("/update-tasks", (req, res) => {
  const { username, tasks } = req.body;
  const users = loadUsers();
  const user = users.find((u) => u.username=== username);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.tasks = tasks;
  saveUsers(users);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
