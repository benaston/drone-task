import redis from "redis";
import get from "./get";
import set from "./set";

const URL = process.env.REDIS_URL;
const redisClient = redis.createClient(URL);

export default {
    get,
    set,
};