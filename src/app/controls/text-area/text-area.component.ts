import { Component, Input, forwardRef, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
	selector: "bsd-text-area",
	templateUrl: "./text-area.component.html",
	styleUrls: ["./text-area.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TextAreaComponent),
			multi: true
		}
	]
})
export class TextAreaComponent implements OnInit, ControlValueAccessor {
	@Input()
	label: string;
	@Input()
	rows: number;
	@Input()
	placeholderText: string;
	@Input()
	hintText: string;
	@Input()
	hasCharCount = false;
	@Input()
	charCount: string;
	@Input()
	charCountMax: string;
	@Input()
	isRequired = false;
	@Input()
	isInvalid: boolean;
	@Input()
	isDisabled: boolean;
	@Input()
	isReadOnly: boolean;
	// @Input() mentionItems: string[];
	// @Input() mentionTriggerChar: string;
	value = "";

	ngOnInit() {
		if (this.charCount === "") {
			this.charCount = "0";
		}
	}

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

	registerOnTouched(fn: any) {} //Not currently needed
}
