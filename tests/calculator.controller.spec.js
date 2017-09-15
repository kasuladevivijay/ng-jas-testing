/**
 * Tests for Calculator App
 */
describe('Calculator App', function() {

  beforeEach(module('calculatorApp'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('Sum', function() {

    it('1+2 should equal 3', function(done) {
      var $scope = {}
      var controller = $controller('CalculatorController', {
        $scope: $scope
      });
      $scope.x = 1;
      $scope.y = 2;
      $scope.sum();
      expect($scope.z).toBe(3);
			done();
    });

		it('z should have default value of zero', function(done) {
			var $scope = {};
			var controller = $controller('CalculatorController', {$scope:$scope});
			expect($scope.z).toBe(0);
			done();
		})
  });

	describe('Subtract',function() {

    it("3-2 should be 1", function (done) {
      var $scope = {};
      var controller = $controller('CalculatorController',{$scope:$scope});
      $scope.x = 3;
      $scope.y = 2;
      $scope.subtract();
      expect($scope.z).toBe(1);
      done();
    });

	});

});
