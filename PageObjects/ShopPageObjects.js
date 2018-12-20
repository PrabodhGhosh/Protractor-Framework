function ShopPage()

{
	this.ShopBtn=element(by.xpath("//a[contains(text(),'Shop')]"));
	this.FirstItemAdd=element(by.buttonText('Add'));
	this.CheckOut=element(by.className('nav-link btn btn-primary'));
	this.CheckOut2= element(by.buttonText('Checkout'));
	this.Purchase=element(by.className('btn btn-success btn-lg')); 
    this.Success=element(by.className('close'));
	
}

Shoppage = new ShopPage();



module.exports={
		Shoppage
}