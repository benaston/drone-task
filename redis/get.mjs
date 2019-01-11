import client from "./client";

export default = (client, key) =>
    new Promise((resolve, reject) =>
        client.get(key, (err, result) =>
            err ? reject(err) : resolve(result)));