import App from "./app";
import * as process from "process";

import * as bodyParser from "body-parser";
import loggerMiddleware from "./middleware/logger";

import * as customenv from "custom-env";

import UsuarioController from "./controllers/Usuario.controller";

import "reflect-metadata";
import { createConnection } from "typeorm";

const ENV = "devlocal";
customenv.env(ENV);
console.log("/**************************/");
console.log(`/DATA BASE CONFIG - ${ENV.toUpperCase()}/`);

var databaseconfig: any = {
  type: process.env.CONNTYPE,
  host: process.env.CONNHOST,
  port: parseInt(process.env.CONNPORT),
  username: process.env.CONNUSER,
  password: process.env.CONNPW,
  database: process.env.CONNDB,
  entities: ["src/entity/**/*.ts"],
  synchronize: process.env.CONNSYNC === "true",
  logging: process.env.CONNLOG === "true"
};
console.log(databaseconfig);
console.log("/**************************/");
createConnection(databaseconfig)
  .then(async connection => {
    console.log("/CONNECTION SUCCESS/");
    const app = new App({
      port: 5000,
      controllers: [new UsuarioController()],
      middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
      ]
    });

    app.listen();
    console.log("/**************************/");
  })
  .catch(error => {
    console.log("/**************************/");
    console.log("/CONNECTION ERROR/");
    console.log("/--------INFO--------/");
    console.log(error);
    console.log("/**************************/");
  });
