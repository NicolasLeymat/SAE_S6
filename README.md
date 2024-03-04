<p align="center" style="margin-bottom: 0px !important;">
  <h1 align="center" style="margin-top: 0px;">SAE_S6_Prerequis</h1>
</p>

## Initialisation du projet
  ### Step 1 : 
    - Créez le dossier qui contiendra le bot discord
    
  ### Step 2 ( à l'intérieur du folder du bot discord, faire ces commandes) : 
    - npm init
    Entrez les informations de votre projet. Appuyez sur Entrée plusieurs fois pour accepter les valeurs par défaut. Lorsque vous arrivez à la partie "entry point", saisissez "bot.js" pour changer le point d'entrée de votre bot à ce fichier.
    - npm install discord.js
    - npm install dotenv
    - npm install discord-api-types
    - npm install @discordjs/rest

  ### Step 3 
    Votre project tree devras resembler à ça : 
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
    - Créez le folder src 
    - Créez votre fichier main (ici bot.js)
    - Créez 3 folders (commands, events, functions)
    - Dans le folder functions créez un folder handlers
    - Dans le folder events créez un folder client
    - Dans le folder commands créez un folder tools

## Initialisation du bot
    Dans cette partie, nous allons voir comment créer le bot, récupérer son token, puis l'ajouter à un serveur Discord
  ### Step 1 :
    - Si vous n'avez pas de serveur de test, créez un serveur discord qui vous servira de test pour votre bot
    - Ensuite, rendez-vous sur https://discord.com/developers/applications
    - En haut à droite, vous verrez un bouton avec marqué "New application". Cliquez dessus et donnez-lui le nom que vous voulez
    - Activez les "Privileged Gateway Intents"
  
  ### Step 2 :
    - Ensuite, rendez-vous dans la partie "Bot" 
    - Cliquez sur "Reset Token" et copiez le token montré à l'écran
    - Ensuite, collez-le dans le fichier .env avec le nom que vous voulez (conseil : gardez le même nom). Par exemple : token=votre_token
  
  ### Step 3 :
    - Allez dans OAuth2, puis dans URL Generator
    - Dans la partie "Scopes", sélectionnez "bot"
    - Ensuite, dans la partie "Bot Permissions", sélectionnez "Administrator"
    - Ouvrez l'URL et ajoutez-le à votre serveur Discord de test
