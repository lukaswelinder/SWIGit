'use strict';
// user model and related controllers
angular.module('swigit.post_mdl', [])

  .controller('swig_nav_ctrl',['$scope',function($scope) {
      
  }])

  .controller('swig_ctrl',['$scope',function($scope) {
      
  }])

  .controller('post_feed_ctrl',['$scope',function($scope) {
    $scope.posts = [
      {
        title: 'Fake feed array...',
        fullname: 'L. M. Welinder',
        username: 'lukas',
        feed: null,
        url_slug: 'random_postname',
        published: 'May 19, 2016',
        content: 'This is an exerpt'
      },
      {
        title: 'Fake feed array...',
        fullname: 'L. M. Welinder',
        username: 'lukas',
        feed: null,
        url_slug: 'random_postname',
        published: 'May 19, 2016',
        content: 'This is an exerpt'
      },
      {
        title: 'Fake feed array...',
        fullname: 'L. M. Welinder',
        username: 'lukas',
        feed: null,
        url_slug: 'random_postname',
        published: 'May 19, 2016',
        content: 'This is an exerpt'
      }
    ];

  }])

  .controller('post_body_ctrl',['$scope',function($scope) {
    $scope.post = {
        title: 'Fake post body...',
        fullname: 'L. M. Welinder',
        username: 'lukas',
        feed: null,
        url_slug: 'random_postname',
        published: 'May 19, 2016',
        content: 'This is an exerpt'
      };
  }]);

  