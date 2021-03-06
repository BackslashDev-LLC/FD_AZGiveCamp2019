import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "bsd-loading-indicator",
	templateUrl: "./loading-indicator.component.html",
	styleUrls: ["./loading-indicator.component.scss"]
})
export class LoadingIndicatorComponent implements OnInit {
	@Input()
	isLoading: boolean = false;

	constructor() {}

	ngOnInit() {}
}
