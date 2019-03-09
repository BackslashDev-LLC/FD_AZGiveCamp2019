import { Component, OnInit } from "@angular/core";

@Component({
	selector: "bsd-control-demo",
	templateUrl: "./demo.component.html",
	styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
	textInput = "";
	textInput2 = "";
	textInput3 = "";
	selectMenu: string;
	textArea =
		"Contrary to popular belief, Lorem Ipsum is not simply random text." +
		"It has roots in a piece of classical Latin literature from 45 BC, making it" +
		"over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in" +
		"Virginia, looked up one of the more obscure Latin words," +
		"consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature," +
		"discovered the undoubtable source." +
		"Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum" +
		"(The Extremes of Good and Evil) by Cicero, written in 45 BC." +
		"This book is a treatise on the theory of ethics," +
		"very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..," +
		"comes from a line in section 1.10.32.";
	radioSet: string;
	numberInput = "100";
	numberInput2 = "200.00";
	numberInput3 = "300.00";
	checked = true;

	radioOptions: any[] = [
		{ text: "Option 1", value: "1" },
		{ text: "Option 2", value: "2" },
		{ text: "Option 3 with Longer Text", value: "3" },
		{ text: "Option 4", value: "4" }
	];
	selectedRadioOption = "1";

	toggleOn = false;

	tabMenuItems: any[] = ["Profile", "Login Credentials"];
	subMenuItems: any[] = [
		"Ackerman, John",
		"Arandia, Dan",
		"Crouch, Richard",
		"Verry, Thomas",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User",
		"Test User"
	];

	testSelectItems: string[] = ["Administrator", "Full-Time Developer", "Contract Developer"];
	selectedItem = "Administrator";

	saving = false;

	selectedDateRange: string;
	selectedDateAndTime: string;
	fileUpload: string;

	constructor() {}

	ngOnInit() {}

	save() {
		this.saving = true;

		const self = this;
		setTimeout(function() {
			self.saving = false;
		}, 3000);
	}
}
