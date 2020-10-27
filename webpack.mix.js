const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let staticPath = 'static'
let resourcesPath = 'resources'

// setResroucesRoots add prefix to url() in scss on example:
// from /images/close.svg to /static/images/close.svg
mix.setResourceRoot('/static')

// Path where mix-manifest.json is created.
mix.setPublicPath('static')

// if you don't need browser-sync feature you can remove this lines.
if (process.argv.includes('--browser-sync')) {
  mix.browserSync('localhost:8000')
}

// Now you can use full mix api.
mix.js(`${resourcesPath}/js/app.js`, `${staticPath}/js/`)
mix.sass(`${resourcesPath}/sass/app.scss`, `${staticPath}/css/`).options({
  processCssUrls: false,
})

// Overrides django default admin site.
mix.sass(`${resourcesPath}/sass/admin/base.scss`, `${staticPath}/css/admin/`).options({
  processCssUrls: false,
})
mix.sass(`${resourcesPath}/sass/admin/admin.scss`, `${staticPath}/css/admin/`).options({
  processCssUrls: false,
})
mix.sass(`${resourcesPath}/sass/admin/nav_sidebar.scss`, `${staticPath}/css/admin/`).options({
  processCssUrls: false,
})
mix.sass(`${resourcesPath}/sass/admin/forms.scss`, `${staticPath}/css/admin/`).options({
  processCssUrls: false,
})
