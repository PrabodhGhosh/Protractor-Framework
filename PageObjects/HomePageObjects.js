//Get the page objects to spec files in the form of key-value pair

/*module.exports.Homepage=
{
		Name:element(by.name('name')),
		Email:element(by.name('email')),
		Password:element(by.id("exampleInputPassword1")),
		Checkbox: element(by.css("input[id='exampleCheck1']")),
//		element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click(); //One way to select a value
		Gender:element(by.css("select[id='exampleFormControlSelect1']")).click().element(by.css("select[id='exampleFormControlSelect1']>option:nth-child(2)")), //Another way
//		to select a value
		EmploymentStatus:element(by.id("inlineRadio1")),
		SubmitBtn:element(by.buttonText("Submit")),
		Success:element(by.css("div[class*='success']"))

};*/

function HomePage1()

{
	this.Name=element(by.name('name'));
	this.Email=element(by.name('email'));
	this.Password=element(by.id("exampleInputPassword1"));
	this.Checkbox= element(by.css("input[id='exampleCheck1']"))
//	element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click(); //One way to select a value
	this.Gender=element(by.css("select[id='exampleFormControlSelect1']")).click().element(by.css("select[id='exampleFormControlSelect1']>option:nth-child(2)")); //Another way
//	to select a value
	this.EmploymentStatus=element(by.id("inlineRadio1"));
	this.SubmitBtn=element(by.buttonText("Submit"));
	this.Success=element(by.css("div[class*='success']"));
}

Homepage1 = new HomePage1();



module.exports={
		Homepage1
}