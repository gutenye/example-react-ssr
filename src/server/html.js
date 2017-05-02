export default function createHtml({html}) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>App</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
        <link rel="icon" type="image/x-icon" href="/favicon.png">
        <link rel="manifest" href="manifest.json">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="App">
        <link rel="apple-touch-icon" href="icon.png">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.pd = console.log.bind(console)
          window.pd2 = function(a) { console.log(JSON.stringify(a)) }
          window.perr = function(err) { console.error(err.stack) }
          window.$ = function(selector) { return typeof selector === "string" ? document.querySelector(selector) : selector || null }
          window.$$ = function(selector) { return [].slice.call(document.querySelectorAll(selector)) }
        </script>
        <script src='/app.js' async defer></script>
      </body>
    </html>
  `
}
