import express from "express";
import droneShackClient = from "./drone-shack/client";

express.get("/:version/:resource/:id", ({ params: { version, resource, id } }, resp) =>
    droneShackClient.get(version, resource, id)
    .then((json) => resp.send(json))
    .catch((err) => console.error(err), resp.send(500)));

express.listen(3000);