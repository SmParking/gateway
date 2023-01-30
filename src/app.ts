import express from "express";
import fastgateway from "fast-gateway";
import config from "./config/config";

const server = fastgateway({
    routes: [{
      prefix: `/venues`,
      target: `${config.HOST}:${config.VENUE_SERVICE_PORT}`
    }]
  });

server.start(config.PORT);