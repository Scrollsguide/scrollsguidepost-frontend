<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Scrolls Price Check - Scrollsguide</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href='http://fonts.googleapis.com/css?family=Montaga' rel='stylesheet' type='text/css'>

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <!-- build:css styles/main.css -->
    <link rel="stylesheet" href="styles/bootstrap.css">
    <link rel="stylesheet" href="styles/bootstrap-responsive.css">
    <link rel="stylesheet" href="styles/main.css">
    <!-- endbuild -->

    <link rel="stylesheet" href="http://www.scrollsguide.com/app/super_low_res/sheet.css">
	<!--<link rel="stylesheet" href="http://www.scrollsguide.com/style/navbar.css" type="text/css" />-->
    <link rel="stylesheet" href="" id="theme-stylesheet">
  </head>
  <body ng-app="scrollsguidepostFrontendApp" ng-cloak>
    <!--[if lt IE 7]>
      <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
    <![endif]-->

    <!--[if lt IE 9]>
      <script src="components/es5-shim/es5-shim.js"></script>
      <script src="components/json3/lib/json3.min.js"></script>
    <![endif]-->

    <!-- Add your site or application content here -->
    <div ng-view></div>

    <div class="container">
      <div class="row-fluid">
        <footer>
          <hr>
          <p>
            &copy;Scrollsguide 2014, all <img src="/img/scrolls-logo.png" style="width: 80px"> Images and Content &copy;Mojang. This site is not affiliated with or endorsed by <a href="http://www.mojang.com">Mojang</a> in any way.  Card information and prices thanks to <a href="http://www.scrollsguide.com/">Scrollsguide</a>.
          </p>
        </footer>
      </div>
    </div>

    <script src="http://www.scrollsguide.com/js/jquery-1.11.0.min.js"></script>
    <script src="components/angular/angular.js"></script>
    <script src="components/angular-resource/angular-resource.js"></script>
    <script src="components/angular-cookies/angular-cookies.js"></script>
    <script src="components/angular-sanitize/angular-sanitize.js"></script>
    <script src="components/keypress.js"></script>
    <script src="http://www.scrollsguide.com/js/bootstrap-dropdown.js"></script>
	<!--<script src="http://www.scrollsguide.com/js/dropdown.js"></script>-->

    <!-- build:js scripts/scripts.js -->
    <script src="scripts/app.js"></script>
    <script src="scripts/controllers/main.js"></script>
    <script src="scripts/services/cards.js"></script>
    <script src="scripts/services/price-details.js"></script>
    <script src="scripts/services/prices.js"></script>
    <!-- endbuild -->

    <!--GA-->
    <script>
      var _gaq=[['_setAccount','UA-16433114-4'],['_trackPageview']];
      (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
      s.parentNode.insertBefore(g,s)}(document,'script'));
    </script>
  </body>
</html>
