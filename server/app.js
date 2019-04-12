// Express stuff
import express from "express";
import path from "path";

import ReactApp from "./routes/react-app";

const app = express();

// Static
app.use(express.static(path.join(__dirname, "../build")));

// Middlewares
app.use(express.json());

// Routes
app.get("*", ReactApp);

export default app;
