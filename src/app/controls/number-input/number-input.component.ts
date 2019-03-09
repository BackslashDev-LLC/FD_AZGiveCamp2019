import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
	selector: "bsd-number-input",
	templateUrl: "./number-input.component.html",
	styleUrls: ["./number-input.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => NumberInputComponent),
			multi: true
		}
	]
})
export class NumberInputComponent implements ControlValueAccessor {
	@Input()
	label: string;
	@Input()
	placeholderText: string;
	@Input()
	isRequired = false;
	@Input()
	isDisabled: boolean;
	@Input()
	isReadOnly: boolean;
	@Input()
	isInvalid: boolean;
	@Input()
	minValue: number;
	@Input()
	maxValue: number;
	@Input()
	iconType: string;
	@Input()
	isRightAligned = false;

	value: string;

	propagateChange = (_: any) => {};

	inputChanged(value: string) {
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
