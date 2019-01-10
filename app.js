import express from "express";
import client = from "./drone-shack/client";

express.get("/:version/:resource/:id", (params, resp) =>
    client.get(params, (json) => resp.send(json))
    .catch((err) => console.error(err), resp.send(500)));

express.listen(3000);