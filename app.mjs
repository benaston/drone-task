import express from "express";
import droneClient = from "./drone-shack/drone/client";

express.get("/:version/:resource/:id", (params, resp) =>
    droneClient.get({ resource: params, cb: (json) => resp.send(json) })
    .catch((err) => console.error(err), resp.send(500)));

express.listen(3000);