module.exports = {
  Admins: [
           "HiroosyDev#6016", 
           "HiroosyDev#6016"], // Admins of the bot, I don't know what this do.
           
  ExpressServer: true, 
  // If you wanted to make the website run or not
  
  DefaultPrefix: process.env.Prefix || "/", 
  // Default prefix, Server Admins can change the prefix
  
  Port: 8080, 
  //Which port website gonna be hosted
  
  SupportServer: "https://discord.gg/bdPF3kp4EC", 
  // Support Server Link
  
  Token: process.env.Token || "OTcxOTY3ODg1Mzk4NDA5MzI3.Gyqcca.ymRVUbwUcGYvP8nYcsxraBp1EzVKvF46KpyXic", 
  // Discord Bot Token
  
  ClientID: process.env.Discord_ClientID || "971967885398409327", 
  // Discord Client ID
  
  ClientSecret: process.env.Discord_ClientSecret || "5BSqnle2Z8WUKd4IRNV2D1SlUMejBluG", 
  // Discord Client Secret
  
  Scopes: ["identify", "guilds", "applications.commands"], 
  // Discord OAuth2 Scopes
  
  ServerDeafen: true, 
  // If you want bot to stay deafened
  
  DefaultVolume: 100, 
  // Sets the default volume of the bot, You can change this number anywhere from 1 to 9007199254740991 (JS Integer limit. If you do set it to that, you're a monster.)
  
  CallbackURL: "/api/callback", 
  // Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  
  "24/7": false, 
  // Make the bot stays in VC 24/7 (when you reboot the bot will **not** automatically rejoin.)
  
  CookieSecret: '_ga=GA1.2.684540350.1652173099; _gid=GA1.2.1932374052.1652173099; _gat_gtag_UA_137153197_1=1; __gads=ID=5a201913cb3adcd6-2285e36d20d300f8:T=1652173100:RT=1652173100:S=ALNI_Ma5T99MHBxaAI7ZNxZzKkvhw13pcg; XSRF-TOKEN=eyJpdiI6IitcL21FZlU1XC82WXBRQ1E0ZlNXY0lydz09IiwidmFsdWUiOiJYTm82MGFXQWhHZ1UxQmZZZXI3VTdaQ0syalRhZ3ZEcFVUenI5TmVpTTl6VWMyZHpmNWtFZFlWWWhXVGN2SVlMdFZBR2UwRmcwYnRHeDJhaWxqK045QT09IiwibWFjIjoiZWM1ZjRjMTBlNDQ0NGU3NjgzN2FmMDA1ZTg5NjJiMjBmNTlmMjQ0MDFlNTBlODIxMTkwNGVjYTY5NTk1YTlhMSJ9; laravel_session=eyJpdiI6InNUXC9HUDlQUXdcL3lBdmFQTktWNWJVQT09IiwidmFsdWUiOiI1VEx5T29GR04zZVwvOUlzUVR1T3ZVbG5iK1FQWXcxYlR4ZHhwNkpoK2hzSXRPcEN1c1o3ZWk0SUVKcHpjcGd4bXRnSWVReU1qUURCcG8wUVd1ejA4VGc9PSIsIm1hYyI6ImZkOGNiNmVmNDBkYTFkN2Q4MmY1YmQ1NDFkYTEzMmE5ZWUwNWNmNWQ3NWU2MmU4ODVlZWI5MThmMmVhYjg4M2IifQ%3D%3D', 
  // A cookie for you, cookie for me. make sure you change this value!
  
  IconURL: "https://telegra.ph/file/87abae0f3849ad4a5e6c4.jpg", 
  // URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  
  EmbedColor: "RANDOM", 
  // Color of most embeds | Custom Hex value are supported. I.e: "#36393F"
  
  Permissions: 2205281600, 
  // Bot Inviting Permissions
  
  Website: process.env.Website || "", 
  // Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  // If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.

  Presence: {
    status: "idle", // You can show online, idle, and dnd
    name: "﹝ 𝙳𝙸𝚂𝙲𝙾𝚁𝙳 𝙱𝙾𝚃 𝙼𝚄𝚂𝙸𝙲 ﹞", // The message shown
    type: "STREAMING", // PLAYING, WATCHING, LISTENING, STREAMING
    url: "https://www.twitch.tv/hiroosyy", // IF YOU USE TYPE "STREAMING"
  },

//======================[ L A V A L I N K ]===================
  // You need a lavalink server for this bot to work!!!!
  // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
  Lavalink: {
    id: "Main", 
      //- Used for indentifier. You can set this to whatever you want.
      
    host: "lavalink.oops.wtf", 
      //- The host name or IP of the lavalink server.
      
    port: 443, 
      // The port that lavalink is listening to. This must be a number!
      
    pass: "www.freelavalink.ga", 
      //- The password of the lavalink server.
      
    secure: true, 
      // Set this to true if the lavalink uses SSL. if not set it to false.
      
    retryAmount: 200, 
      //- The amount of times to retry connecting to the node if connection got dropped.
    
    retryDelay: 40, 
      //- Delay between reconnect attempts if connection is lost.
  },

//====================[ S P O T I F Y ]====================
  // Spotify Integration, allows you to enter a spotify link.
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "cb41529dc3bd4d8f8a240dbee0fff4e8", // Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "bcca82f42930498aa385a8289fdf276b", // Spotify Client Secret
  },
};
