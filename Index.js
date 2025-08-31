// ================= Express Web Server (UptimeRobot ke liye) =================
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});

// ================= Minecraft Bot (Mineflayer) =================
const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    host: "thedemolisher.progamer.me", // 👈 apna server IP daalo
    port: 17776,              // 👈 agar port alag hai toh change karo
    username: "AFK_Bot"       // 👈 apna Minecraft username ya email (offline mode me koi bhi naam)
  });

  bot.on("login", () => {
    console.log("Bot logged in!");
  });

  bot.on("end", () => {
    console.log("Bot disconnected, reconnecting in 10s...");
    setTimeout(createBot, 10000);
  });

  bot.on("error", (err) => {
    console.log("Bot error:", err);
  });
}

createBot();
