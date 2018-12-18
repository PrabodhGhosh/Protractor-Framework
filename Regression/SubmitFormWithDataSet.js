describe('Submit Form', function(){

	//Access multiple Data to drive the test
	
	var Data = requireData('FormSubmitData');
	var using = require('jasmine-data-provider');
	

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




	using(Data.DataSet, function (data, description) {

		it('Using Data Provider'+' '+description, function(){

			var obj = requirePageObjects('HomePageObjects');
			obj.Homepage1.Name.sendKeys(data.Name);
			obj.Homepage1.Email.sendKeys(data.Email);
			obj.Homepage1.Password.sendKeys(data.Password);
			obj.Homepage1.Checkbox.click();
			obj.Homepage1.Gender.click();
			obj.Homepage1.EmploymentStatus.click();
			obj.Homepage1.SubmitBtn.click();
			expect((obj.Homepage1.Success).getText()).toContain("Success! The Form has been submitted successfully!.");
			obj.Homepage1.CloseBtn.click();

		});

	});



})