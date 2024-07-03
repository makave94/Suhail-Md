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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_31_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDk3LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE4LFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgODQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI5LFxuICAgICAgICA3NixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUG1EQzJMQUtuVjRSMzhtYjhQS3kvUzZaNmxFdWwyczNxRGNDZzg2MlRQST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1NDQ2MjMwMDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBN0JDNkIwOUZGQzIyRTYwNDNCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDAxNzExNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5WGtITTc5U1NvU1Ywa1hvV1JJWVRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmOWMyZGFhLWJiMTUtNDJjNi05YjMzLTg5NDEyZmUwMGQxZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMTE2LFxuICAgICAgMjA4LFxuICAgICAgMTg1LFxuICAgICAgMTksXG4gICAgICA2MixcbiAgICAgIDE2MixcbiAgICAgIDE5LFxuICAgICAgMTQ1LFxuICAgICAgMTYsXG4gICAgICAyMDAsXG4gICAgICA5MyxcbiAgICAgIDIzMixcbiAgICAgIDEwOSxcbiAgICAgIDg1LFxuICAgICAgMjM2LFxuICAgICAgNTYsXG4gICAgICAyMTEsXG4gICAgICA1OCxcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDcwLFxuICAgICAgMTQ1LFxuICAgICAgMjA3LFxuICAgICAgMTM3LFxuICAgICAgNixcbiAgICAgIDE0NyxcbiAgICAgIDEzNCxcbiAgICAgIDI0MCxcbiAgICAgIDExOCxcbiAgICAgIDE4MCxcbiAgICAgIDEzOSxcbiAgICAgIDIwNCxcbiAgICAgIDQ0LFxuICAgICAgMjMwLFxuICAgICAgMjEzLFxuICAgICAgMTA1LFxuICAgICAgMjM1LFxuICAgICAgNzAsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQ4UVM0OUtHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NDQ2MjMwMDE6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyOTYxMzk0MjUwNTcxOToyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ0hvYk1PRU5IQmxiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIncwS3hPMnpyNXNDNkdyNkI2K2FPS2tKQldBTzFGTlJPOTgrem9pbjY2VWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTWpyTmNjUk1QWnhkNzdveldDZE5QNFE5ekhwNWhreVpVMUFsZmFMaGRvRHl0cHlVY2FYRzZ5SjdNVXIzQ2RiTmZXZzd0WVNRN09qSkNmeUtlT2JQQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaEd6eXY5TlJCNnpyaVpIMytDRUN3YWlxanBEU1NYUjlBVG1kb1pQZ1VMS1BKaW1QUzZackNFSHdiUzhVOGJFUDdEM0xJTkJzYi9nN0o5SnV1REtNZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTQ0NjIzMDAxOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDAxNzEwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFKNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUo2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicXgyQmlZcnFBUzFnM0hmb2FDdEtJUVUydnF2b2FjdzBvSVIxNUJ4R3pQQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODY1NTkyNzUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwMTcxMTA4NTJcIn0iCn0="  // PUT your SESSION_ID 


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
