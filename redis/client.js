import redis = from "redis";

const redisClient = redis.createClient(connectionString);
const URL = process.env.REDIS_URL;

export default ({
  get,
  set,
});

const get = () => 
  new Promise((resolve, reject) =>
      redisClient.get("schools/" + terms, (err, result) => 
        err ? reject(err) : resolve(result)));

const set = (...args) => redisClient.set(...args);