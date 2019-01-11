import client from '/redis/client';
import is3rdPartyError from './is-3rd-party-error';

export default (p) => p
    .catch((err) => is3rdPartyError(err) ?
        client.get(uri) : Promise.reject(err));