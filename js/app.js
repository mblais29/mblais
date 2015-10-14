(function(){

	var app = angular.module('store',[]);

	app.controller('storeController', function(){
		this.products = people;
		this.animals = animal;
	});
	
	var animal = [
		{
			specie: 'Mammal',
			type: 'Whale',
			price: 3000,
			time: 1444773439223,
			img: [{
				full: 'img/mountains-small.jpg',
			}]
		},
		{
			specie: 'Reptile',
			type: 'Snake',
			price: 1500,
			time: 1444773439223,
			reviews: [
				{
					stars: 5,
					body: 'Great animal',
					author: 'joe@test.com'
				},
				{
					stars: 3,
					body: 'gross!!!!!',
					author: 'jane@test.com'
				}
				
				]
		}
	];
	
	var people = [
		{
			name: 'Chelsea Kidd',
			age: 28,
			sex: 'female',
			status: 'Married',
			canPay: true,
			soldOut: false
		},
		{
			name: 'Mitchel Blais',
			age: 27,
			sex: 'male',
			status: 'Married',
			canPay: true,
			soldOut: false
		},
	];
	app.controller('panelController', function(){
		this.products = people;
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	
	app.controller('formController', function(){
		this.items = [
			{
				name: 'Monitor',
				cost: 500,
				description: 'Wide Screen',
				reviews: [
				{
					stars: 5,
					body: 'Great Product',
					author: 'joe@test.com'
				},
				{
					stars: 3,
					body: 'Could be better',
					author: 'jane@test.com'
				}
				
				]
			}
		];
	});


})();
