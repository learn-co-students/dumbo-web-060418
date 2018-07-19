// inktoni
// ask jeeves
// duck duck go
// babel
// aol Search
// msn search
// yahooligans

document.addEventListener('DOMContentLoaded', init);

function init() {
  const searchEngineForm = document.querySelector('form');
  searchEngineForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // grabbing some data from the page
    const searchEngineName = e.target.querySelector(
      '[name="search-engine-name"]'
    ).value;
    const searchEngineUrl = e.target.querySelector('[name="search-engine-url"]')
      .value;

    // doing something with that data
    const newSearchEngineTemplate = `<li><a href="${searchEngineUrl}">${searchEngineName}</a></li>`;
    fetch('https://api.jsonbin.io/b/5b509f974d5ea95c8ba73ec2', {
      method: 'PUT',
      headers: {
        'secret-key':
          '$2a$10$Nwu.V0phVzOqQA38Ptys5etRCEPdB1Z/tYaAJS0vuQ8cBsunm3eZe',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        engines: [
          {
            name: searchEngineName,
            url: searchEngineUrl
          }
        ]
      })
    });

    // rendering
    const linksUl = document.querySelector('ul');
    linksUl.innerHTML += newSearchEngineTemplate;
  });

  // Initial render
  fetch('https://api.jsonbin.io/b/5b509f974d5ea95c8ba73ec2', {
    method: 'GET',
    headers: {
      'secret-key':
        '$2a$10$Nwu.V0phVzOqQA38Ptys5etRCEPdB1Z/tYaAJS0vuQ8cBsunm3eZe'
    }
  })
    .then(function(resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function(data) {
      const seList = document.querySelector('#search-engine-list');
      const template = data.engines
        .map(function(engine) {
          return `<li><a href="${engine.url}">${engine.name}</a></li>`;
        })
        .join('');
      seList.innerHTML += template;
    });
}

// function otherDOMDependentFunction() {}

// when the form is submitted, to add that link to the page

(function(name) {
  // this is happening once
  // this is happening immediately
  return 'hi, ' + name;
})('eric');

function likeThis(args) {}
