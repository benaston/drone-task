import cache from "./client";

export default = (key) =>
    new Promise((resolve, reject) =>
        redisClient.get(key, (err, result) =>
            err ? reject(err) : resolve(result)));