function createQuery(formSelectors) {
  const queryArray = []
  formSelectors.forEach(e => {
    const query = '';
    e.slice(0,1) === '#' ? query = e.slice(1) : query = e.split('=')[1];
    value = document.getElementById(query).value;
    queryArray.push([query, value]);
  })
  const queryString = new URLSearchParams(queryArray);
  const queryStringWithQuestionMark = '?' + queryString;
  return queryStringWithQuestionMark;
}

function readQuery(formSelectors, url) {
  let params = new URLSearchParams(url.split('?')[1]);
  formSelectors.forEach(e => {
    const query = '';
    e.slice(0,1) === '#' ? query = e.slice(1) : query = e.split('=')[1];
    paramValue = params.get(query);
    document.getElementById(query).value = paramValue;
  })
}

function multiformHandler () {
  const formList = document.forms;
  const arrayofForms = [];
  for (let item of formList) {
    arrayofForms.push(item.id)
  };
  return arrayofForms;
}