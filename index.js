const env = require("dotenv");
const { createMacchaApiServer } = require("maccha.server");
const { join } = require("path");
const webpack = require("webpack");

env.config();

function parse(connectionString) {
    connectionString += ";";
    const [host, port] = connectionString.match(/^.*Data Source=(.+?);.*$/, "")[1].split(":");
    const [, database] = connectionString.match(/^.*Database=(.+?);.*$/, "");
    const [, password] = connectionString.match(/^.*Password=(.+?);.*$/, "");
    const [, username] = connectionString.match(/^.*User Id=(.+?);.*$/, "");

    return {
        port,
        host,
        password,
        database,
        username
    };
}

function dbConfig() {
    var azureKey = process.env[process.env.AZURE_CONNECTION_STRING_KEY];
    if (azureKey) {
        const parsed = parse(azureKey);
        return {
            username: parsed.username,
            password: parsed.password,
            database: parsed.database,
            host: parsed.host,
            port: parsed.port,
            logging: false,
            logger: process.env.LOGGER_TYPE
        }
    }

    return {
        username: process.env.DB_USERNAME ?? "",
        password: process.env.DB_PASSWORD ?? "",
        database: process.env.DB_DATABASE ?? "",
        host: process.env.DB_HOST ?? "",
        port: Number(process.env.DB_PORT),
        logging: false,
        logger: process.env.LOGGER_TYPE
    };
}

async function bootstrap() {
    const app = await createMacchaApiServer({
        assetsDir: join(process.cwd(), "public"),
        authorization: {
            expiresIn: process.env.EXPIRES_IN ?? "",
            jwtKey: process.env.JWT_KEY ?? ""
        },
        database: dbConfig(),
        pulugins: [

        ]
    });

    console.log("start espresso cms listen on " + (process.env.PORT || 3000));
    await app.listen(process.env.PORT || 3000);
}
bootstrap();