# HolaMundo Bot

Este repositorio contiene el código del bot de Discord hecho para la comunidad de [HolaMundo](https://discord.gg/sZYgfBJyTm), este está escrito usando TypeScript dentro del entorno de NodeJS.

## Requerimientos
- NodeJS
- Yarn o NPM (Por defecto está Yarn).

## Primeros Pasos
1. Antes que nada instalaremos las dependencias del proyecto, usando el comando de abajo:
```bash
yarn install
# or
npm install
```

2. Antes de encender el bot debemos crear un token en el [portal de Discord para desarrolladores](https://discord.com/developers/applications) y crear un archivo llamado `.env` en el directorio principal, en el vamos a colocar la variable de entorno `BOT_TOKEN` de la siguiente manera:
```env
# .env
BOT_TOKEN=mi_token
```
> NOTA: Reemplaza `mi_token` por el token que obtuviste del portal de Discord para desarrolladores.

3. Luego de haber configurado nuestro entorno podemos iniciar el bot usando el siguiente comando:
```bash
yarn run dev
# or 
npm run dev
```

## Tareas
Para las tareas del proyecto se usa Github Projects [aquí](https://github.com/JheysonDev/holamundo-bot/projects) podrás encontrar tareas en forma de tickets que puedes ir realizando para aportar al desarrollo de este bot.
