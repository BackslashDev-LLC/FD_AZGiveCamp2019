import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "bsd-custom-icon",
	templateUrl: "./custom-icon.component.html",
	styleUrls: ["./custom-icon.component.scss"]
})
export class CustomIconComponent implements OnInit {
	@Input()
	iconName: string;

	constructor() {}

	ngOnInit() {}
}
