# Lore Portal

Un progetto che punta a raccogliere tutti i lavori della community di [DarioMocciaTwitch](https://www.twitch.tv/dariomocciatwitch) in un unico sito

## Sviluppo

### Requirements

```
node (v14.16.0)
yarn (1.13.0)
netlify-cli (3.30.4)
```

Installare le dipendenze lanciando `yarn` nella cartella del progetto.

È possibile lanciare il processo di sviluppo locale con `yarn start` o `netlify dev`.

### Environment Variables

Sono necessarie alcune variabili d'ambiente configurate. Per farlo creare un file `.env` nella root del progetto all'interno dovranno essere definite:

- `GOOGLE_SPREADSHEET_ID_FROM_URL` riferite a un foglio Google Sheets
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` e `GOOGLE_PRIVATE_KEY`, seguire il processo per un [Service Account](https://github.com/theoephraim/node-google-spreadsheet/blob/756d57fea3e1cf1d5ba6a38b12210102da0bf621/docs/getting-started/authentication.md)

- (facoltativi) `TELEGRAM_BOT_TOKEN` e `TELEGRAM_CHANNEL_ID` per testare le notifiche attraverso un bot Telegram, se non specificato le notifiche non verranno inviate.

```
GOOGLE_SPREADSHEET_ID_FROM_URL=stringa di caratteri casuali
GOOGLE_SERVICE_ACCOUNT_EMAIL=admin@qualcosa.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\...
TELEGRAM_BOT_TOKEN=token dal BotFather
TELEGRAM_CHANNEL_ID=id della chat
```

### Tools

Editor consigliato [Visual Studio Code](https://code.visualstudio.com/)

La formattazione dei file segue regole condivise visibili nel file `.prettierrc`, per applicarle automaticamente è necessario usare [Prettier](https://prettier.io/), usando `vscode` si può utilizzare l'[estensione omonima](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

[React](https://reactjs.org/)

[Next.js](https://nextjs.org/).

[Styled Components](https://styled-components.com/) per gestire lo stile
