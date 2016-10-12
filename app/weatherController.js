(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['WeatherFactory', '$http'];

    /* @ngInject */
    function WeatherController(WeatherFactory, $http) {
        var vm = this;

        vm.cityData;
        vm.searchHistory = [];
        vm.getInfo;
        vm.cityname;
        vm.history = [{}];

        // function to push our data from API
        vm.getInfo = function(cityname){
            
            toastr.options = {
              "closeButton": false,
              "debug": false,
              "newestOnTop": false,
              "progressBar": false,
              "positionClass": "toast-bottom-right",
              "preventDuplicates": false,
              "onclick": null,
              "showDuration": "300",
              "hideDuration": "1000",
              "timeOut": "5000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"    
            }
              toastr.success("Found your city!"); 

        	WeatherFactory.getWeather(cityname)
            .then(function(result){
        		vm.cityData = result;
        		vm.history.push({
        			place: result.name,
        			dt: result.dt

        		})

        	});
        }

    }   

})();