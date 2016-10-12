(function() {
    'use strict';

    angular
        .module('app')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http'];

    /* @ngInject */
    function WeatherFactory($http) {

        var service = {
            getWeather: getWeather
        };

        return service;

        ////////////////

        function getWeather(city) {
            // Get method to use API
        	return $http({
        		method: 'GET',
        		url: 'http://api.openweathermap.org/data/2.5/weather',
        		params: {
        			APPID: '4d5326de26961477e36e9cbab40a3566',
        			q: city,
                    units: "imperial"
        		}

        	}).then(function(response) {

        		return response.data;
        });

    }

}
})();