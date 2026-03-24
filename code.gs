function doGet(e) {
  const view = e && e.parameter && e.parameter.view ? e.parameter.view : 'dashboard';
  const tmpl = HtmlService.createTemplateFromFile('index');
  
  // Inject web-app URL so client-side JS can construct absolute links.
  // Apps Script runs the user HTML inside a sandboxed iframe at
  // script.googleusercontent.com, so relative URLs like '?view=training'
  // resolve to the wrong origin. Injecting the real URL fixes this.
  tmpl.appUrl = ScriptApp.getService().getUrl();
  tmpl.initialView = view === 'training' ? 'training' : 'dashboard';
  tmpl.initialPage = e && e.parameter && e.parameter.page ? e.parameter.page : 'index';

  return tmpl.evaluate()
    .setTitle('Philip Cowan Analytics')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function include(filename) {
  // Allow HTML to include partials (Styles, JavaScript)
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
