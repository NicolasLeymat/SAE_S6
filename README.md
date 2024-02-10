# SAE_S6

# Initialisation du projet
  # Step 1 : 
    - Créer le folder qui contiendras le bot discord
    
  # Step 2 ( à l'intérieur du folder du bot discord, faire ces commandes) : 
    - npm init
    - npm install discord.js
    - npm install dotenv
    - npm install discord-api-types
    - npm install @discordjs/rest

  # Step 3 
    - Créer le folder src 
    - Créer votre fichier main (ici bot.js)
    - Créer 3 folders (commands, events, functions)
    - Dans le folder functions créer un folder handlers
    - Dans le folder events créer un folder client
    - Dans le folder commands créer un folder tools
    - votre project tree devrais resembler à ça : 
      |-- Discord_Bot
      |  |-- node_modules
      |  |--|-- ... Toutes vos dépendances
      |  |  |-- src
      |  |  |  |-- commands
      |  |  |  |  |-- tools
      |  |  |  |  | |*- vos commands
      |  |  |  |-- events
      |  |  |  |  |-- client
      |  |  |  |  | |*- vos events client
      |  |  |  |-- functions
      |  |  |  |  |-- handlers
      |  |  |  |  | |*- vos handlers
      |  |  |--|*- bot.js
      |  |  |*- .env
      |  |  |*- package-lock.json
      |--|--|*- package.json  

  
  

