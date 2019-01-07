import fetch = from "node-fetch";
import useCacheOnFail = from "/redis/use-cache-on-fail";
import cacheOnSuccess = "/redis/cache-on-success";
import toKey = from "./to-key";
import is3rdPartyError = from "./is-3rd-party-error";

const URL = "https://unreliable.com/;"

const get = (id) => 
    fetch(`${URl}?id=${id}`)
      .then(res => res.json());

export default {
  get: useCacheOnFail(cacheOnSuccess(get, toKey), toKey, is3rdPartyError) 
};