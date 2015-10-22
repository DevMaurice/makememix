var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
    mix.copy('resources/vendor/bootstrap/dist/fonts', 'public/assets/fonts');
    mix.copy('resources/vendor/font-awesome/fonts', 'public/assets/fonts');
    mix.styles([
        'resources/vendor/bootstrap/dist/css/bootstrap.css',
        'resources/vendor/fontawesome/css/font-awesome.css',
        'resources/css/sb-admin-2.css',
        'resources/vendor/datatables/media/css/dataTables.foundation.css',
        'resources/css/timeline.css'        
    ], 'public/assets/stylesheets/styles.css', './');
    mix.scripts([
        'resources/vendor/jquery/dist/jquery.js',
        'resources/vendor/bootstrap/dist/js/bootstrap.js',
        'resources/vendor/metisMenu/dist/metisMenu.js',
        'resources/vendor/datatables/media/js/jquery.dataTables.js',
        'resources/vendor/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.js',
        'resources/js/sb-admin-2.js'     
            ], 'public/assets/scripts/frontend.js', './');
});


