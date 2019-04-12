import path from "path";

const ReactApp = (req, res) => {
  res.sendFile(path.join(__dirname, `../../build/index.html`));
};

export default ReactApp;
