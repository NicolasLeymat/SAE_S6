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
         |-- node_modules
            |-- ... Toutes vos dépendances
         |-- src
            |-- commands
              |-- tools
                |*- vos commands
            |-- events
              |-- client
                |*- vos events client
            |-- functions
              |-- handlers
                |*- vos handlers
            |*- bot.js
         |*- .env
         |*- package-lock.json
      |--|*- package.json

# Initialisation du bot
    Dans cette partie nous allons voir comment créer le bot récupérer son token puis l'ajouter sur un seerveur discord
  # Step 1 :
    - Si vous n'avez pas de serveur de test, créer un serveur discord qui vous serviras de test pour votre bot
    - Copier l'id de votre serveur discord et collé le dans le handleCommands.js au niveau du guildID
    - Ensuite rendez-vous sur [text](https://discord.com/developers/applications)
    - en haut à droite vous verrez un bouton avec marqué New application cliqué dessus et donnée lui le nom que vous voulez
  
  # Step 2 :
    - Un fois votre bot créer copié votr applicationID et collé le dans le handleCommands.js au niveau du ClientID
    - Ensuite rendez-vous dans la partie Bot cliqué sur reset token et copier le dans le .env avec le nom que vous voulez (conseil : gardez le meme nom)
  
  # Step 3 :
    - Allé dans OAuth2, URL Generator
    - Dans la partie scopes selectionner bot
    - ensuite dans la partie bot permissions selectionner Administrator
    - Ouvrer l'URL et ajouter le à votre discord



  
  

