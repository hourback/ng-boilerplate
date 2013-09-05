angular.module( 'causeAndEffect', [
  'templates-app',
  'templates-common',
  'causeAndEffect.home',
  'causeAndEffect.about',
  'causeAndEffect.account',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | causeAndEffect' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})

;

