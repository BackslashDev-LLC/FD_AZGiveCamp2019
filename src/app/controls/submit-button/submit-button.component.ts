import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
	selector: "bsd-submit-button",
	templateUrl: "./submit-button.component.html",
	styleUrls: ["./submit-button.component.scss"]
})
export class SubmitButtonComponent implements OnInit {
	@Input() isDisabled: boolean = false;
	@Input() isProcessing: boolean = false;
	@Input() buttonText: string;
	@Input() fullWidth:boolean;

	@Output() onBtnClick: EventEmitter<boolean> = new EventEmitter<boolean>();
	constructor() {}

	ngOnInit() {}
}
