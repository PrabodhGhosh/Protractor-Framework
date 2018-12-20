describe('Shop ', function(){



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



	it('Item', function(){

		var obj = requirePageObjects('ShopPageObjects');
		obj.Shoppage.ShopBtn.click();
		obj.Shoppage.FirstItemAdd.click();
		obj.Shoppage.CheckOut.click();
		obj.Shoppage.CheckOut2.click();
		obj.Shoppage.Purchase.click();
		expect((obj.Shoppage.Success).getText()).toContain("×");


	});





})