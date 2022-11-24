# koibanx-web-V2

Web institucional

## Instalacion

Copiar .env.example como .env

Actualizar el valor de las variables de entorno definidas en tales archivos (tambien pueden ser inyectadas como env variables desde docker)

MONGODB_URI=
Url para conectarse a una Base de datos Mongo

SMTP_HOST=
SMTP_PORT=
SMTP_USERNAME=
SMTP_PASSWORD=

Credenciales necesarias para poder enviar un email con una postulación

POSTULATION_EMAIL_FROM=
POSTULATION_EMAIL_TO=

Email remitente y destino al cual va a llegar una postulación

API_URL=

URL que va a tomar la API para que pueda interactuar el frontend con el backend

```bash
npm run build
# or
yarn build

npm run start
# or
yarn start
```

## Admin Panel
Para loguearse al admin, deben entrar al sitio /admin/login. Pueden usar como usuario de prueba los que se encuentran en el archivo users.mongodb. Previamente, deben importar dicho archivo en la base de mongo

## URLs

**Develop**

[https://koibanx-web-v2.dev.koibanx.link/es](https://koibanx-web-v2.dev.koibanx.link/es)

**Production**

[https://koibanx.com](https://koibanx.com)
