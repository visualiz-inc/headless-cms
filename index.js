const env = require("dotenv");
const { createMacchaApiServer } = require("maccha-server");
const { join } = require("path");

env.config();

async function bootstrap() {
    const app = await createMacchaApiServer({
        assetsDir: join(process.cwd(), "public"),
        authorization: {
            expiresIn: process.env.EXPIRES_IN ?? "",
            jwtKey: process.env.JWT_KEY ?? ""
        },
        database: {
            username: process.env.DB_USERNAME ?? "",
            password: process.env.DB_PASSWORD ?? "",
            database: process.env.DB_DATABASE ?? "",
            host: process.env.DB_HOST ?? "",
            port: Number(process.env.DB_PORT),
            logging: false,
            logger: process.env.LOGGER_TYPE
        },
        mailConnectionString: process.env.MAIL_CONNECTION_STRING,
        pulugins: [

        ]
    });

    console.log("start espresso cms listen on " + (process.env.PORT || 3000));
    await app.listen(process.env.PORT || 3000);
}

bootstrap();