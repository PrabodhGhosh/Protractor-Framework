describe('Submit Form', function(){
	
	var obj = require("./PageObjects/HomePageObjects.js"); // Access the objects from HomePageObjects.js
	
	it('Test Submit Form', function(){
		
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		obj.Homepage.Name.sendKeys("Prabodh");
		
	})
})