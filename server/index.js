import app from "./app";
import Debug from "debug";
import { port } from "./config";

const debug = new Debug("ethereum-certifier:root");

async function start() {
  await app.listen(port);
  debug(`🚀  Server running at port: ${port}`);
}

start();
