// ================= Express Server =================
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running and always online!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});

// ================= Minecraft Bot =================
const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    host: "mc.example.com", // yaha apna server IP daalna
    port: 25565,           // yaha apna server port daalna
    username: "YourBotName" // yaha apna bot ka username daalna
  });

  bot.on("login", () => {
    console.log("Bot logged in successfully!");
  });

  bot.on("end", () => {
    console.log("Bot disconnected. Reconnecting in 10s...");
    setTimeout(createBot, 10000); // 10 second baad auto reconnect
  });

  bot.on("error", (err) => {
    console.log("Error:", err);
  });
}

createBot();
