function doGet(e) {
  const view = e && e.parameter && e.parameter.view ? e.parameter.view : 'dashboard';
  const templateName = view === 'training' ? 'training' : 'index';

  const tmpl = HtmlService.createTemplateFromFile(templateName);
  // Inject web-app URL so client-side JS can construct absolute links.
  // Apps Script runs the user HTML inside a sandboxed iframe at
  // script.googleusercontent.com, so relative URLs like '?view=training'
  // resolve to the wrong origin. Injecting the real URL fixes this.
  tmpl.appUrl = ScriptApp.getService().getUrl();

  if (view === 'training') {
    // Inject the requested page key so the React app can start on the
    // correct training module. window.location.search is not accessible
    // from inside the iframe, so we pass it via template injection.
    const requestedPage = e.parameter.page || 'Index';
    tmpl.initialPage = requestedPage;
  }

  return tmpl.evaluate()
    .setTitle('Philip Cowan Analytics')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function include(filename) {
  // Allow HTML to include partials (Styles, JavaScript)
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
