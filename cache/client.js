import redis from "redis";

const URL = process.env.REDIS_URL;
const redisClient = redis.createClient(URL);

export default {
    get,
    set,
};