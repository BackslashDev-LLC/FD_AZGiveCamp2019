import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
	selector: "bsd-select",
	templateUrl: "./select.component.html",
	styleUrls: ["./select.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectComponent),
			multi: true
		}
	]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
	@Input()
	label: string;
	@Input()
	propText: string;
	@Input()
	propValue: string;
	@Input()
	placeholderText = "";
	@Input()
	isDisabled = false;
	@Input()
	isReadOnly = false;
	@Input()
	isRequired = false;
	@Input()
	isInvalid: boolean;

	useDefault = true;

	private _items: any[] = [];
	@Input()
	get items(): any[] {
		return this._items;
	}
	set items(val: any[]) {
		this.useDefault = true;

		this._items = val;
	}

	@Output()
	onItemSelect: EventEmitter<any> = new EventEmitter<any>();

	public _value: any;
	private _item: any;

	constructor() {}

	ngOnInit() {}

	getValue(item: any) {
		if (this.propValue) {
			return item[this.propValue];
		}

		return item;
	}

	getText(item: any) {
		if (this.propText) {
			return item[this.propText];
		}

		return item;
	}

	onChange(select: any) {
		this.useDefault = false;

		const selectedItem = this.items[select.selectedIndex - 1];

		if (selectedItem) {
			if (this.propValue) {
				this._value = selectedItem[this.propValue];
			} else {
				this._value = selectedItem;
			}
		} else {
			this._value = null;
		}

		this.propagateChange(this._value);
		this.setSelected();
	}

	writeValue(obj: any): void {
		if (obj !== undefined) {
			this._value = obj;
			this.setSelected();
		}
	}

	private setSelected() {
		if (!this.items) {
			return;
		}

		this.useDefault = false;

		if (this.propValue) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i][this.propValue] == this._value) {
					this._item = this.items[i];
					break;
				}
			}
		} else {
			this._item = this._value;
		}

		this.onItemSelect.emit(this._item);
	}

	propagateChange = (_: any) => {};

	registerOnChange(fn: any): void {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any): void {}
}
