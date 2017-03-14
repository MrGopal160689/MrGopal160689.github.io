(function() {
    'use strict';
    angular
        .module('portfolio', [
            'ui.router',
            'ngSanitize'
        ]);
})();
(function() {
    'use strict';
    angular
        .module('portfolio')
        .config(config);

    function config($urlRouterProvider, $injector, $stateProvider) {
        $urlRouterProvider.otherwise(function($injector) {
            $injector.get('$state').go('home');
        });

        var states = [{
            name: 'home',
            url: '/home',
            templateUrl: './templates/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        }]

        states.forEach(function(state) {
            $stateProvider.state(state);
        });
    }
})();
(function() {
    'use strict';
    angular
        .module('portfolio')
        .controller('homeController', homeController);

    /* @ngInject */
    homeController.$inject = [];

    function homeController() {
        var homeCtrl = this;
        
        homeCtrl.data = [
            { 
                category : 'Recent projects',
                list : [
                        {
                            title : 'English Duniya',
                            date : new Date('21 March 2017'),
                            for : 'Zaya Learning Labs',
                            purpose : 'B2C',
                            description : './templates/project-english-duniya.html'
                        },{
                            title : 'Quiz Egg',
                            date : new Date('21 February 2017'),
                            for : 'Zaya Learning Labs',
                            purpose : 'Hackathon',
                            description : './templates/project-quiz-egg.html'
                        },{
                            title : 'Config App',
                            date : new Date('21 December 2016'),
                            for : 'Zaya Learning Labs',
                            purpose : 'B2B',
                            description : './templates/project-config-app.html'
                        },{
                            title : 'Curate App',
                            date : new Date('21 Jun 2015'),
                            for : 'Zaya Learning Labs',
                            purpose : 'B2B',
                            description : './templates/project-curate-app.html'
                        },{
                            title : 'Learn App',
                            date : new Date('21 December 2014'),
                            for : 'Zaya Learning Labs',
                            purpose : 'B2B',
                            description : './templates/project-learn-app.html'
                        },
                ]
            },
            {
                category : 'Old projects',
                list : [
                    {
                        title : 'Experience',
                        for : 'Telibees & VCC',
                        purpose : 'B2B',
                        description : './templates/project-old-experience.html'
                    }
                ]
            },
            {
                category : 'Random',
                list : [
                    {
                        title : 'Snap & stroke',
                        for : 'People & nature',
                        purpose : 'Happiness',
                        description : './templates/random-photography.html'
                    },
                    {
                        title : 'Tutorial',
                        for : 'People',
                        purpose : 'Help',
                        description : './templates/youtube.html'
                    }
                ]
            }
        ]
    }

})();

(function(){
    angular
        .module('portfolio')
        .directive('onload', function() {
          return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                angular.element(element).addClass('invisible')
                element.bind('load', function() {
                    angular.element(element).removeClass('invisible')
                    console.log(angular.element(element).addClass('animation-fade-in'))
                });
                element.bind('error', function(){
                     console.log('image could not be loaded');
                });
            }
          };
        });
})();