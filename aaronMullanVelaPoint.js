// Fill in the bodies of the following JavaScript functions
// so that they behave as described.

/**
 * Creates a query section to be added to a URL containing information from input elements.
 * @param {string[]} formSelectors - Selectors identifying input elements to be included in a url query.
 * @example ["#inputA", "#inputB"]
 * @returns {string} - The query part of a URL including information from input elements.
 * @example "?inputA=alpha&inputB=beta"
 */

function createQuery(formSelectors) {
  const queryArray = ['?']
  formSelectors.forEach((e, i) => {
    query = e.slice(1);
    value = document.getElementById("query").value;
    queryArray.push(query);
    switch (true) {
      case i === 0 : queryArray.push("=" + value + "&"); 
        break;
      case i === 1 : queryArray.push("=" + value);
    }
  })
  const queryString = queryArray.join('');
  return queryString;
}


/**
* Fills input elements with information taken from a URL's query section.
* @param {string[]} formSelectors - Selectors identifying input elements which will recieve values taken from a url.
* @example ["#inputA", "#inputB"]
* @param {string} url - A URL containing query information.
* @example "http://example.com?inputA=alpha&inputB=beta"
*/
function readQuery(formSelectors, url) {
  let params = new URLSearchParams(url.split('?')[1]);
  
  formSelectors.forEach(e => {
    query = e.slice(1);
    paramValue = params.get(query);
    document.getElementById(query).value = paramValue;
  })
}
const params2 = new URLSearchParams([["foo", "1"], ["bar", "2"]])
const params3 = 'blah' +params2
console.log(params3);