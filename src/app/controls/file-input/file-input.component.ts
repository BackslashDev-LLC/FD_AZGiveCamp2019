import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
	selector: "bsd-file-input",
	templateUrl: "./file-input.component.html",
	styleUrls: ["./file-input.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FileInputComponent),
			multi: true
		}
	]
})
export class FileInputComponent implements OnInit, ControlValueAccessor {
	@Input()
	label: string;
	@Input()
	placeholderText: string;
	@Input()
	isRequired: boolean = false;
	@Input()
	isDisabled: boolean;
	@Input()
	isReadOnly: boolean;
	@Input()
	isInvalid: boolean;

	_selectedFile: File;
	get selectedFile(): File {
		return this._selectedFile;
	}
	set selectedFile(file: File) {
		this.inputChanged(file);
	}

	propagateChange = (_: any) => {};

	inputChanged(value: File) {
		this._selectedFile = value;
		this.propagateChange(this.selectedFile);
	}

	writeValue(obj: any) {
		if (obj !== undefined) this._selectedFile = obj;
	}

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any) {} //Not currently needed

	get selectedFileName(): string {
		if (this.selectedFile) {
			return this.selectedFile.name;
		} else {
			return this.placeholderText;
		}
	}

	constructor() {}

	ngOnInit() {}

	onFileChanged(e: any) {
		this.selectedFile = e.target.files[0];
	}
}
