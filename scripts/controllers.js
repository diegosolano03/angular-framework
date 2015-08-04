
(function () {
  'use strict';
	angular.module('appControllers')

	.controller('logCtrl', [ '$scope', '$location', '$rootScope', function($scope, $location, $rootScope){
  		$('#logg').css({ 'min-height': ($(window).height()) });
  		angular.element(document).ready(function () {
	        $('#view').removeClass('wait');
	        setTimeout(function(){
	        	$('#view').addClass('wait');
	        	setTimeout(function(){
	        		$rootScope.$apply(function(){
						$location.path("/home");
					});
	        	}, 1000);
	        }, 3000);
	    });
	}])

	.controller('homeCtrl', [ '$scope', '$location', '$rootScope', 'User', function($scope, $location, $rootScope, User){
  		$('#home').css({ 'min-height': ($(window).height()) });
	    $('footer').removeClass('hidden');

  		angular.element(document).ready(function(){
	        $('#view').removeClass('wait');
	    });

		function resetVars(){
			$scope.isLoading = false;
			$scope.hasError = false;
			$scope.msgError = "";
			$scope.hasSuccess = false;
			$scope.msgSuccess = "";
		}

  		resetVars();

		$scope.data = {
			name: "",
			email: ""
		};

		$scope.fbLogin = function(){
			FB.login(function(response){
				if (response.authResponse){
					FB.api('/me?fields=name,email', function(response){
					// console.log(response);
						$scope.$apply(function(){
							$scope.data.name = response.name;
							$scope.data.email = response.email;
						});
					});
				}else{
					//console.log('User cancelled login or did not fully authorize.');
				}
			}, { scope: 'email' });
		};

  		$scope.isLoading = false;

	    $scope.submit = function(data){
  			resetVars();
	        if($scope.register.$valid){
  				$scope.isLoading = true;
	        	// console.log(data);
				User.insert(data).success(function(response){
					// console.log(response);
  					resetVars();
			  		setTimeout(function(){
			        	$('#view').addClass('wait');
			        	setTimeout(function(){
			        		$rootScope.$apply(function() {
								$location.path("/thanks");
							});
			        	}, 1000);
			        }, 1000);
				})
				.error(function(response){
					// console.log(response);
  					resetVars();
  					$scope.hasError = true;
				  	$scope.msgError = response.status.msg;
				});
			}
  		};
	}])

	.controller('thanksCtrl', [ '$scope', function($scope){
  		$('#thanks').css({ 'min-height': (($(window).height()-116)) });
  		$('footer').removeClass('hidden');
  		angular.element(document).ready(function () {
	        $('#view').removeClass('wait');
	    });
	}])

	.controller('rulesCtrl', [ '$scope', function($scope){
  		$('#rules').css({ 'min-height': ($(window).height()) });
  		$('footer').removeClass('hidden');
  		angular.element(document).ready(function () {
	        $('#view').removeClass('wait');
	    });
	}])

	.factory('User', ['$http', function($http){
	    return {
			insert: function(data) {
				return $http.get( 'backend/addUser.php', { params: data } );
			}
	    };
	}])

	.factory("Auth", function($cookies, $cookieStore, $location, $rootScope){
		return{
			login : function(username, password){
				$cookies.username = username,
				$cookies.password = password;
				$('body').addClass('wait');
				setTimeout(function(){
					$rootScope.$apply(function() {
						$location.path("/home");
					});
				}, 500);
			},
			logout : function(){
				$cookieStore.remove("username"),
				$cookieStore.remove("password");
				$location.path("/");
			}
		}
	})

})();