import express from "express";
import droneClient = from "./drone/client";

express.get("/drone", (req, resp) => 
  droneClient.get(req.query.id)
    .then((json) => resp.send(json))
    .catch((err) => console.error(err), resp.send(500)));

express.listen(3000);