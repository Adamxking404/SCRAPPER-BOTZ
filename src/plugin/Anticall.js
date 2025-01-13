import config from '../../config.cjs';

// Main command function
const anticallcommand = async (m, Matrix) => {
  const botNumber = await Matrix.decodeJid(Matrix.user.id);
  const isCreator = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(m.sender);
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === 'anticall') {
    if (!isCreator) return m.reply("*📛 මෙය OWNER විධානයකි*");
    let responseMessage;

    if (text === 'on') {
      config.REJECT_CALL = true;
      responseMessage = "Anti-Call සක්‍රීය කරන ලදී ✅.";
    } else if (text === 'off') {
      config.REJECT_CALL = false;
      responseMessage = "Anti-Call අක්‍රීය කරන ලදී ❎.";
    } else {
      responseMessage = "Usage:\n- `.anticall on`: Anti-Call සක්‍රීය කිරීමට.\n- `.anticall off`: Anti-Call අක්‍රිය කිරීමට.";
    }

    try {
      await Matrix.sendMessage(m.from, { text: responseMessage }, { quoted: m });
    } catch (error) {
      console.error("❌Error processing your request:\nඔන්න ඕක තමයි ප්‍රශ්නෙ🥲", error);
      await Matrix.sendMessage(m.from, { text: 'Error processing your request.' }, { quoted: m });
    }
  }
};

export default anticallcommand;
