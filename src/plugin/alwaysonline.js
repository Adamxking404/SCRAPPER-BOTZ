import config from '../../config.cjs';

const alwaysonlineCommand = async (m, Matrix) => {
  const botNumber = await Matrix.decodeJid(Matrix.user.id);
  const isCreator = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(m.sender);
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === 'alwaysonline') {
    if (!isCreator) return m.reply("*📛 මෙය OWNER විධානයකි.*");
    let responseMessage;

    if (text === 'on') {
      config.ALWAYS_ONLINE = true;
      responseMessage = "Always Online සක්‍රීය කරන ලදී ✅.";
    } else if (text === 'off') {
      config.ALWAYS_ONLINE = false;
      responseMessage = "Always Online අක්‍රීය කරන ලදී ❎.";
    } else {
      responseMessage = "Usage:\n- `.alwaysonline on`: Always Online සක්‍රීය කිරීමට.\n- `.alwaysonline off`: Always Online අක්‍රීය කිරීමට.";
    }

    try {
      await Matrix.sendMessage(m.from, { text: responseMessage }, { quoted: m });
    } catch (error) {
      console.error("Error processing your request:", error);
      await Matrix.sendMessage(m.from, { text: 'Error processing your request.' }, { quoted: m });
    }
  }
};

export default alwaysonlineCommand;
