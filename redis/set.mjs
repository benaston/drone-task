import client from "./client";

const DEFAULT_LIFETIME = 300; // seconds

export default ({ key, value, lifetime = DEFAULT_LIFETIME }) => 
  client.setx(key, lifetime, value);