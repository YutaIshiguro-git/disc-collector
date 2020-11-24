import dotenv = require("dotenv");
dotenv.config();

export = {
   type: "postgres",
   // If you prefer to use 1 postgres connection string, uncomment next line and comment out anything between host and database keys.
   // url: process.env.DB_URL,
   host: process.env.DB_HOST || "localhost",
   port: process.env.DB_PORT || 3333,
   username: process.env.DB_USER || "Yuta",
   password: process.env.DB_PASSWORD || "",
   database: process.env.DB_NAME || "discollector",
   entities: ["src/entities/**/*.ts"],
   migrations: ["src/migrations/**/*.ts"],
   seeds: ["src/seeds/**/*.ts"],
   logging: false,
   migrationsRun: false /* Disable auto-run migration */,
   cli: {
     entitiesDir: "src/entities",
     migrationsDir: "src/migrations",
   },
 };
