// process.env[process.env.AZURE_CONNECTION_STRING_KEY]
export const parse = (connectionString) => {
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
};