import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
	selector: "bsd-radio-set",
	templateUrl: "./radio-set.component.html",
	styleUrls: ["./radio-set.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RadioSetComponent),
			multi: true
		}
	]
})
export class RadioSetComponent implements ControlValueAccessor {
	@Input()
	hideLabel = false;
	@Input()
	labelText: string;
	@Input()
	name: string;
	@Input()
	isRequired = false;
	@Input()
	nameValueOptions: any[] = [];
	@Input()
	isReadOnly = false;

	value: any;

	propagateChange = (_: any) => {};

	valueChanged(value: any) {
		this.value = value;
		this.propagateChange(this.value);
	}

	writeValue(obj: any) {
		if (obj !== undefined) {
			this.value = obj;
		}
	}

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any) {} // Not currently needed
}
