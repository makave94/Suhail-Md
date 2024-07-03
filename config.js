const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_17_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc1LFxuICAgICAgICA1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAzLFxuICAgICAgICA1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTExLFxuICAgICAgICA5LFxuICAgICAgICAzLFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNixcbiAgICAgICAgMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgMTA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDM0LFxuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImozc1ZVdlNobjhMRUJZOWVqN0JhSkJJL0lHUHo3V3NSNmFDQVl3MXRqdkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBocDVyR2hnUXVLbXNDLXpqZ04weUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWI0MjQyMzEtZDNlZi00NmI3LWE4MDYtOWEyODA0MmYwY2FjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMjE3LFxuICAgICAgMTUzLFxuICAgICAgMTU0LFxuICAgICAgMjM1LFxuICAgICAgMjQzLFxuICAgICAgMjU1LFxuICAgICAgMTQwLFxuICAgICAgMjQ0LFxuICAgICAgNDgsXG4gICAgICA2NCxcbiAgICAgIDIwNCxcbiAgICAgIDczLFxuICAgICAgMTQ0LFxuICAgICAgMzAsXG4gICAgICAxOTcsXG4gICAgICA1OSxcbiAgICAgIDM2LFxuICAgICAgMTAzLFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAxMTksXG4gICAgICAyMDIsXG4gICAgICA0NSxcbiAgICAgIDIyNCxcbiAgICAgIDUwLFxuICAgICAgMzgsXG4gICAgICAyNTEsXG4gICAgICA5NixcbiAgICAgIDIxOCxcbiAgICAgIDEsXG4gICAgICA2NixcbiAgICAgIDEzMixcbiAgICAgIDEyMixcbiAgICAgIDk0LFxuICAgICAgNjcsXG4gICAgICAxNDQsXG4gICAgICAxNzUsXG4gICAgICAyMDYsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzTTJNVDJTRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTk4NDU0NzMxOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjc0ODIyOTIwNDc5NTk6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDIycEpjR0VJT3VsTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtR09YWXNJMC9ZelpScndlWDYwQjllUUd0WEZIeXBzVksvTDRSRUtrMTNZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNOZVIweXlmNzNkUlZvTDZtUkZaMmo5UFErMzNvSnFQMU1xSUI4RnhyT2o2ZzJBWDB5dEY0N0FMVXYyOUQ0Sk5uUmpBaDVUK1liSXI0c0NKUENES0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklLQWZXNko1MENQVFRJOWhaM01xWjFodjBGbU9GMWtKZVRsWDFBN2REN0tSeWFFdXVicXpQZnFKVENIb3BaOGxXV0I0T0lJZjJwNWxqR0tzS01hMkFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU5ODQ1NDczMTozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTk4MjE1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
