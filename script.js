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
        }, {
            name: 'tangible',
            url: '/tangible',
            templateUrl: './templates/tangible.html',
            controller: 'tangibleController',
            controllerAs: 'tangibleCtrl'
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
        .controller('tangibleController', tangibleController);

    /* @ngInject */
    tangibleController.$inject = [];

    function tangibleController() {
        var tangibleCtrl = this;
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

        homeCtrl.data = [{
            category: 'Recent projects',
            list: [{
                title: 'Alex <span class="label label-success">New</span>',
                date: new Date('20 March 2018'),
                for: '@Shipmnts',
                purpose: 'B2C',
                description: './templates/alex.html'
            },{
                title: 'Tangible <span class="label label-success">New</span>',
                date: new Date('21 May 2017'),
                for: 'Learning',
                purpose: 'B2C',
                description: './templates/tangible.html'
            }, {
                title: 'English Duniya',
                date: new Date('21 March 2017'),
                for: '@Zaya',
                purpose: 'B2C',
                description: './templates/project-english-duniya.html'
            }, {
                title: 'Quiz Egg',
                date: new Date('21 February 2017'),
                for: '@Zaya',
                purpose: 'Hackathon',
                description: './templates/project-quiz-egg.html'
            }, {
                title: 'Config App',
                date: new Date('21 December 2016'),
                for: '@Zaya',
                purpose: 'B2B',
                description: './templates/project-config-app.html'
            }, {
                title: 'Curate App',
                date: new Date('21 Jun 2015'),
                for: '@Zaya',
                purpose: 'B2B',
                description: './templates/project-curate-app.html'
            }, {
                title: 'Learn App',
                date: new Date('21 December 2014'),
                for: '@Zaya',
                purpose: 'B2B',
                description: './templates/project-learn-app.html'
            }, ]
        }, {
            category: 'Old projects',
            list: [{
                title: 'Experience',
                for: 'Telibees & VCC',
                purpose: 'B2B',
                description: './templates/project-old-experience.html'
            }]
        }, {
            category: 'Random',
            list: [{
                title: 'Snap & stroke',
                for: 'People & nature',
                purpose: 'Happiness',
                description: './templates/random-photography.html'
            }, {
                title: 'Tutorial',
                for: 'People',
                purpose: 'Help',
                description: './templates/youtube.html'
            }]
        }]
    }

})();

(function() {
    angular
        .module('portfolio')
        .directive('onload', function() {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    angular.element(element).addClass('invisible')
                    element.bind('load', function() {
                        angular.element(element).removeClass('invisible')
                    });
                    element.bind('error', function() {
                        console.log('image could not be loaded');
                    });
                }
            };
        });
})();

(function() {
    angular
        .module('portfolio')
        .directive('tangible', function() {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    let tangible
                    scope.$on('$destroy', function() {
                        tangible.destroy()
                        tangible = null
                        delete tangible
                    });
                    WebFont.load({
                        custom: {
                            families: ['indie-flower'],
                            urls: ['./assets/font/IndieFlower.ttf']
                        },
                        active : ()=>{
                            let elem = document.querySelector('div.tangible-playground')
                            $.getJSON("./data/data.json", function(stageData) {
                                tangible = new Tangible({
                                    target: elem,
                                    data: stageData,
                                    width: stageData.width,
                                    height: stageData.height,
                                    path: {
                                        img: './assets/tangible',
                                        audio: './assets/tangible'
                                    }
                                })
                            });
                        }
                    });
                }
            };
        });
})();
