export { };
// line above signals Typscript that we are OK require node-fetch below
/* eslint @typescript-eslint/no-var-requires: "off" */
const nodeFetch = require(`node-fetch`);
const parser = new DOMParser();
const data = await nodeFetch(
  'https://www.thedrum.com/news/2021/04/01/why-marketers-should-care-about-care-time-serve'
).then(res => res.text());
const test = parser.parseFromString(data, "text/html");
const logger = test.getElementsByTagName('meta');
console.log(logger);