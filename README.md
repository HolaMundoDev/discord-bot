# HolaMundo Bot

Este repositorio es usado para el desarrollo del bot de la comunidad [HolaMundo](https://discord.gg/sZYgfBJyTm) en discord, para este se usa el lenguaje de progamacion typescript y el entorno de ejecucion nodejs

## Requerimientos
- NodeJs
- Yarn (Aunque el proyecto esta optimizado para yarn se pede usar npm)

## Empezando
1. Primero debemos instalar las dependencias con el administrador de dependencias yarn de la siguiente manera:

```bash
yarn install
# or
npm install
```
2. Luego debemos crear un bot token en el [portal de discord para desarrolladores](https://discord.com/developers/applications) y crear un archivo llamado `.env` hay vamos a agregar la variable de entorno llamada `BOT_TOKEN` de la siguiente manera
```env
# .env
BOT_TOKEN=mi_token
```
> Nota: debes remplazar mi token por el token que obtuvistes en el portal de discord para desarrolladores

3. Ahora si podemos iniciar el bot con el siguiente comando:
```bash
yarn run dev
# or 
npm run dev
```
