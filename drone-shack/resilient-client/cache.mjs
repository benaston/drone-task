import client from '/redis/client';

export default (p) => p
    .then(({ uri, json }) => client.set({ key: uri, value: json });