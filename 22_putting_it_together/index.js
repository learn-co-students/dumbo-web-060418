// inktoni
// ask jeeves
// duck duck go
// babel
// aol Search
// msn search
// yahooligans

document.addEventListener('DOMContentLoaded', init);

function init() {
  // Initial render
  Adapter.getEngines().then(renderSearchEngines)

  // looking for the search engine form on the page
  // add an event listener to listen for the form's submit
  const searchEngineForm = document.querySelector('#search-engine-form');
  searchEngineForm.addEventListener('submit', handleEngineSubmit);

  // add an event listener to listen for clicks on delete buttons inside of the
  // search engine list
  const searchEngineList = document.querySelector('#search-engine-list')
  searchEngineList.addEventListener('click', handleLinkDelete)
}

function engineTemplate(engine) {
  return `
    <li data-id="${engine.id}">
      <a href="${engine.url}">${engine.name}</a>: ${engine.status}
      <button class="delete">Delete</button>
    </li>`;
}

function renderSearchEngines(engines) {
  const template = engines.map(engineTemplate).join('');
  renderSearchEngine(template);
}

function renderSearchEngine(template) {
  const seList = document.querySelector('#search-engine-list');
  seList.innerHTML += template;
}

function handleEngineSubmit(e) {

  // don't do the default behavior - refresh the page (trying to make a request)
  e.preventDefault();

  // grabbing some data from the page
  const seName = e.target.querySelector('[name="search-engine-name"]').value;
  const seUrl = e.target.querySelector('[name="search-engine-url"]').value;
  const seStatus = e.target.querySelector('[name="search-engine-status"]')
    .value;

  // doing something with that data - create an html template
  // const newSearchEngineTemplate = `<li><a href="${seUrl}">${seName}</a>: ${seStatus}</li>`;

  // sending that data to the backend

  Adapter
    .createEngine(seName, seUrl, seStatus)
    .then(engineTemplate)
    .then(renderSearchEngine); //.catch()

  // // rendering that data (optimistically)
  // const linksUl = document.querySelector('ul');
  // linksUl.innerHTML += newSearchEngineTemplate;
}

function handleLinkDelete(e) {
  if (e.target.className === 'delete') {
    const parentEl = e.target.parentElement

    // delete from database
    const id = parentEl.dataset.id
    Adapter.deleteEngine(id)

    // remove from page
    parentEl.remove()
  }
}
