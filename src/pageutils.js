async function digestMessage(message, hashtype) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest(hashtype, msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

function tsToDate(ts) {
  if (!ts) {
    return "";
  }

  if (ts.length < 14) {
    ts += "00000000000000".substr(ts.length);
  }

  const datestr = (ts.substring(0, 4) + "-" +
    ts.substring(4, 6) + "-" +
    ts.substring(6, 8) + "T" +
    ts.substring(8, 10) + ":" +
    ts.substring(10, 12) + ":" +
    ts.substring(12, 14) + "-00:00");

  return new Date(datestr);
};

function getTS(iso) {
  return iso.replace(/[-:T]/g, '').slice(0, 14);
}




export { digestMessage, tsToDate, getTS };
