import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { UtilitiesService } from "../../services/utilities.service";

@Component({
	selector: "bsd-toggle-switch",
	templateUrl: "./toggle-switch.component.html",
	styleUrls: ["./toggle-switch.component.scss"]
})
export class ToggleSwitchComponent implements OnInit {
	switchId: string;

	@Input()
	checked: boolean;

	@Output()
	onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(private _utils: UtilitiesService, private _el: ElementRef) {}

	ngOnInit() {
		this.switchId = this._utils.makeId(7);
	}

	toggle(checked: boolean) {
		this.checked = checked;
		this.onChange.emit(this.checked);
	}
}
