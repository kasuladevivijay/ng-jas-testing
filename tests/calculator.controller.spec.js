/**
 * Tests for Calculator App
 */
describe('Calculator App', function() {
	
	beforeEach(module('calculatorApp'));

	beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
	}));

	describe('Sum', function() {
		
		it('1+2 should equal 3', function() {
			var $scope;
			var controller = $controller('CalculatorController', {$scope:$scope});
			$scope.x = 1;
			$scope.y = 2;
			$scope.sum();
			expect($scope.z).toBe(3);
		});
	});
});