import { Component, Input, forwardRef, Output, EventEmitter } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
	selector: "bsd-text-input",
	templateUrl: "./text-input.component.html",
	styleUrls: ["./text-input.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TextInputComponent),
			multi: true
		}
	]
})
export class TextInputComponent implements ControlValueAccessor {
	@Input()
	label: string;
	@Input()
	type: string;
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
	hideLabel = false;
	@Input()
	iconType: string;
	@Input()
	iconAlignment: string; // 'left', 'right'

	@Output()
	onBlur: EventEmitter<boolean> = new EventEmitter<boolean>();

	_value: string;
	get value(): string {
		return this._value;
	}
	set value(v: string) {
		this.inputChanged(v);
	}

	propagateChange = (_: any) => {};

	inputChanged(value: string) {
		this._value = value;
		this.propagateChange(this.value);
	}

	writeValue(obj: any) {
		if (obj !== undefined) {
			this._value = obj;
		}
	}

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any) {} // Not currently needed
}
