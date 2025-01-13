const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Your Session Id",
  PREFIX: process.env.PREFIX || '.', // Command prefix for the bot
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, // Automatically mark statuses as seen
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : true, // Automatically reply to statuses
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '🥰 ඔයාගේ status බැලුවා ඈ ✅', // Custom message for status replies
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false, // Auto-download media
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false, // Auto mark messages as read
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false, // Auto-simulate typing
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false, // Auto-simulate recording
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false, // Keep bot always online
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false, // Auto-react to messages

  // Auto-block numbers starting with specific prefixes (e.g., 212 for Morocco)
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true, 

  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, // Auto-reject incoming calls
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true, // Disallow certain actions/messages
  MODE: process.env.MODE || "public", // Bot mode: public or private
  OWNER_NAME: process.env.OWNER_NAME || "✪⏤͟͞★⃝ꪶ‎⎚ 𝐀𝐃𝐀𝐌 × 𝐊𝐈𝐍𝐆 ⫸", // Owner name
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94775704025", // Owner's WhatsApp number
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc", // API key for external services
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, // Enable/disable welcome messages for groups
};

module.exports = config;
