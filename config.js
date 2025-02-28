const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="avenyamakazi8@gmail.com"
global.location="Johannesburg,South Africa."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27767494368";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_06_02_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDkzLFxuICAgICAgICAzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDksXG4gICAgICAgIDc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzLFxuICAgICAgICA3MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTYzLFxuICAgICAgICA0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAzNixcbiAgICAgICAgNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxLFxuICAgICAgICA2NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0LFxuICAgICAgICA2LFxuICAgICAgICA1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU2LFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICA0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4LFxuICAgICAgICA0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4aFFYaEtHQkxoc0t6OTFyQk96eFdJV1dLOVpveDRFN1BMQ3VjbHZNMzFNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3ODE4MjMyMjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNEFBMjY5QUM3MzNCMTkyRENFQjM5RDZBNzg5Q0Q4OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDA3NjU5ODhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzgxODIzMjI2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDQzOTFGRjVEQTdBRkMzN0IwNTMzNDE0MTdEMzdBN0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQwNzY1OTg4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc4MTgyMzIyNjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE3NzJBQTZGRUQ0NUEyMTM5RUM5RjBGNTc1NkY0NzczXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MDc2NTk5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3ODE4MjMyMjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQ0JDMTY1NkQ5MEM4NzcyRTc3NDc1OTg5NDMwQTQ2QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDA3NjU5OTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU3BXdVRoZVdUY2l6S2FlR0pLSUJOUVwiLFxuICBcInBob25lSWRcIjogXCI4ODJiMGY3ZC0wYzdkLTRiNzQtYTEzOS00OWQ4OTM3MmNhOThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgMjQyLFxuICAgICAgMTU2LFxuICAgICAgMjIwLFxuICAgICAgMjM2LFxuICAgICAgODgsXG4gICAgICA2NSxcbiAgICAgIDE0LFxuICAgICAgNjcsXG4gICAgICAyMTIsXG4gICAgICA3MyxcbiAgICAgIDE1MyxcbiAgICAgIDYyLFxuICAgICAgODIsXG4gICAgICA0NixcbiAgICAgIDc4LFxuICAgICAgNjMsXG4gICAgICAxNzIsXG4gICAgICAyNTUsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMTUsXG4gICAgICAyMTUsXG4gICAgICAxMTEsXG4gICAgICA3MSxcbiAgICAgIDE2LFxuICAgICAgMTIzLFxuICAgICAgODcsXG4gICAgICA0NyxcbiAgICAgIDIsXG4gICAgICAxOSxcbiAgICAgIDczLFxuICAgICAgMTAxLFxuICAgICAgMTQ1LFxuICAgICAgMzcsXG4gICAgICAxOTksXG4gICAgICAxNjQsXG4gICAgICAyMzUsXG4gICAgICAyMjUsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjhWWU45OUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3ODE4MjMyMjY5OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJZb2dneVwiLFxuICAgIFwibGlkXCI6IFwiMTc0NTkxMDkxNjc1MzI4OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVdIMXZrSEVKNzJoNzRHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoRzk0NVg3WGNlc3VNNVhYUVhjQWJTMjI3cC9CQ0NpL2xqU1ZEa1pjOXo4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndzRDZQSEN3eEYxU0FiWUhpelJnNHUvRW50aVU5YzhuT2wxemg5TlI0NlhYTk9TZVRIdUVBbXdxMXJmb0NjcWwzQXBHaFhyenUvaDZxQlFKaGZ4dkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9HNEltZkh6VHB5aW42YTdhRWNFU01EOVB2ZWlwOXpkV0tGaVpKckd3ZjZUWVVOc0p6SElzVi9uN0JpTzdpRTgyMURSUkQxbi9Xd2E3ZVkzZFBIQUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3ODE4MjMyMjY5OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQwNzY1OTg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFNyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIU3IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRbER3Ni9KWVR5SERjTlF1RVQ1WGRuNWoybS9US3N6dC9OREJBVzBOTC9jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMzQyMTM1MDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0MDU5MjYxODU4OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝕬𝖛𝖊.𝕭☚⍢⃝☚",
  ownername:process.env.OWNER_NAME|| "𝕬𝖛𝖊.𝕭",


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
