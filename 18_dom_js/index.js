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

    // grabbing some data
    const searchEngineName = e.target.querySelector(
      '[name="search-engine-name"]'
    ).value;
    const searchEngineUrl = e.target.querySelector('[name="search-engine-url"]')
      .value;

    // doing something with that data
    const newSearchEngineTemplate = `<li><a href="${searchEngineUrl}">${searchEngineName}</a></li>`;

    // rendering
    const linksUl = document.querySelector('ul');
    linksUl.innerHTML += newSearchEngineTemplate;
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
