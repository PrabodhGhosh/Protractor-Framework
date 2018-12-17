describe('Submit Form', function(){

	// Access the URL in beforeEach function
	beforeEach(function(){
		var SetUpMethod = requireHelper('SetUp');
		SetUpMethod.setUp();
	})


	// Indicate test is completed in afterEach function
	afterEach(function(){
		var TearDownMethod = requireHelper('TearDown');
		TearDownMethod.tearDown();
	})




	// Access the objects from HomePageObjects.js

	it('Test Submit Form', function(){


		var obj = requirePageObjects('HomePageObjects');


		obj.Homepage1.Name.sendKeys("Prabodh");
		obj.Homepage1.Email.sendKeys("learn@gmail.com");
		obj.Homepage1.Password.sendKeys("password");
		obj.Homepage1.Checkbox.click();
		obj.Homepage1.Gender.click();
		obj.Homepage1.EmploymentStatus.click();
		obj.Homepage1.SubmitBtn.click();
		expect((obj.Homepage1.Success).getText()).toContain("Success! The Form has been submitted successfully!.");

	});

})