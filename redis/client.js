import redis from "redis";

const redisClient = redis.createClient(connectionString);
const URL = process.env.REDIS_URL;

const get = (key) =>
    new Promise((resolve, reject) =>
        redisClient.get(key, (err, result) =>
            err ? reject(err) : resolve(result)));

const set = (...args) => redisClient.set(...args);

export default {
    get,
    set,
};
