import dotenv from "dotenv";
import { findSourceMap, SourceMap } from "module";
dotenv.config();
import path from "path";

const BASE_PATH = path.join(__dirname + "../../../");
const SOURCE_PATH = path.join(__dirname + "../../");

const PORT: any = Number(process.env.PORT) || 9000;
const URI: string = process.env.MONGO_URI || "";
const VERSION = process.env.VERSION || "1.0.0";

const config = {
  PORT: PORT,
  HOST: process.env.HOST,  
  API_PREFIX: `/${process.env.PREFIX}/${process.env.API_VERSION}`,
  VENUE_SERVICE_PORT: process.env.VENUE_SERVICE_PORT
};

export default config;
