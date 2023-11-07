const express = require("express");

const app = express();

app.get("/", (_req, res) => res.send("Hello World"));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on port ${port}`));
