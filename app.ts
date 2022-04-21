import http from "http";

import * as got from "./data.json";

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "GET") {
    res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
  }
  const [_, resourse, id] = req.url?.split("/") || [];

  if (resourse === "characters") {
    if (!id) {
      // return all characters
      res.end(JSON.stringify(got.characters));
    }
    res.end(
      JSON.stringify(got.characters.find((character) => character.id == id))
    );
  } else {
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
