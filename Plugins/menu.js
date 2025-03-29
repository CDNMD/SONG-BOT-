
const config = require('../config');
const { cmd, commands } = require('../command');
const pdfUrl = "https://i.ibb.co/Jw88Pn6R/3579.jpg";

cmd({
    pattern: "menu",
    desc: "Check commands.",
    category: "main",
    react: "✅",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Send a message indicating the bot is alive
        const message = await conn.sendMessage(from, { text: '`CHALAH MD💚`' });

        // Simulate some processing time
        const startTime = Date.now();
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulating a delay
        const endTime = Date.now();
        const ping = endTime - startTime;

        // New menu message
        const menuMessage = `
💚 *CHALAH SONG MENU: 📥*

🔱 𝗢𝘄𝗻𝗲𝗿 - CHALANA INDUWARA
‼️ 𝗛𝗲𝗹𝗽  - DTZ TEAM MEMBERS  
📥 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 - 94776938009  

────────────────────  
📍SONG BOT MENU 📍

   🎭 COMMAND 👇
   
   *ALIVE COMMAND*
   *MENU COMMAND*
   *TIKTOK COMMAND*
   *YT COMMAND*
   *FB COMMAND*
   *SONG COMMAND AND VIDEO COMMAND*
  
    *මෙ CHALAH SONG බොටාව විශෙශයෙන්ම හැදුවෙ STATUS චැනල් කරන සෙට් එකට SONG VIDEO ඩව්න්ලොඩ් කරගන්න*
    
  `JOIN CHANNEL`

*https://whatsapp.com/channel/0029Vb3v0Fe1dAvw1XUIV61t*

──────────────────── 
`;

        // Send the alive response with the updated menu
        await conn.sendMessage(from, {
            document: { url: pdfUrl },
            fileName: 'CHALAH SONG BOT',
            mimetype: "application/pdf",
            fileLength: 99999999999999,
            image: { url: 'https://i.ibb.co/Jw88Pn6R/3579.jpg' },
            pageCount: 2024,
            caption: menuMessage,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: 'CHALAH SONG BOT💚',
                    newsletterJid: "120363343196447945@newsletter",
                },
                externalAdReply: {
                    title: '©CHALAH MD  💚',
                    body: ' *CHALAH MD  💚*',
                    thumbnailUrl: 'https://i.ibb.co/Jw88Pn6R/3579.jpg',
                    sourceUrl: 'https://wa.me/94776938009',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});
