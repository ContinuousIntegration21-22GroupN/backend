import http from "http";

import * as got from "./data.json";
import { sendHttpError, sendHttpResponse } from "./utils";

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "GET") {
    sendHttpError(res, { status: 404 });
  }
  const [_, resourse, id] = req.url?.split("/") || [];

  if (resourse === "characters") {
    if (!id) {
      // return all characters
      sendHttpResponse(res, { data: got.characters });
      return;
    }

    const character = got.characters.find((character) => character.id == id);
    if (character) {
      sendHttpResponse(res, {
        data: character,
      });
    } else {
      sendHttpError(res, { status: 404, message: "Character not found" });
    }
  } else {
    sendHttpError(res, { status: 404 });
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default server;
