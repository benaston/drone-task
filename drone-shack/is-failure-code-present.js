// Returns true if `err` looks like it 
// was caused by the unreliable 3rd-party 
// drone API.
export default (err) => err.code >= 400;