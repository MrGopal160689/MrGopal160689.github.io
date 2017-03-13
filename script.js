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
                category : 'Projects',
                list : [
                        {
                            title : 'English Duniya',
                            date : new Date('21 February 2017'),
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
                            date : new Date('21 February 2017'),
                            for : 'Zaya Learning Labs',
                            purpose : 'B2B',
                            description : './templates/project-config-app.html'
                        },{
                            title : 'Curate App',
                            date : new Date('21 February 2017'),
                            for : 'Zaya Learning Labs',
                            purpose : 'B2B',
                            description : './templates/project-curate-app.html'
                        },{
                            title : 'Learn App',
                            date : new Date('21 February 2017'),
                            for : 'Zaya Learning Labs',
                            purpose : 'B2B',
                            description : './templates/project-learn-app.html'
                        },{
                            title : 'Reserv.in',
                            date : new Date('21 February 2017'),
                            for : 'Personal',
                            purpose : 'Side project',
                            description : './templates/project-reserv.html'
                        },{
                            title : 'Billing Solution',
                            date : new Date('21 February 2017'),
                            for : 'Video Cable Communication',
                            purpose : 'B2B',
                            description : './templates/project-video-cable.html'
                        },{
                            title : 'Mobile animation',
                            date : new Date('21 February 2017'),
                            for : 'Telibees Technologies Pvt. Ltd.',
                            purpose : 'B2B',
                            description : './templates/project-telibees.html'
                        },
                ]
            },
            {
                category : 'Random',
                list : [
                    {
                        title : 'Photography',
                        for : 'People & nature',
                        purpose : 'Happiness'
                    }
                ]
            }
        ]
    }

})();