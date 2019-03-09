import { Component, OnInit, ViewChild, ElementRef, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import Flatpickr from "flatpickr";

@Component({
	selector: "bsd-date-time",
	templateUrl: "./date-time.component.html",
	styleUrls: ["./date-time.component.scss", "./flatpickr.css"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DateTimeComponent),
			multi: true
		}
	]
})
export class DateTimeComponent implements OnInit, ControlValueAccessor {
	@Input()
	label: string;
	@Input()
	enableTime: boolean = false;
	@Input()
	inlineCalendar: boolean = false;
	@Input()
	calendarMode: "single"; // | 'multiple' | 'range'
	@Input()
	dateFormat: string;

	@ViewChild("dpElement")
	_el: ElementRef;

	value: Date;
	endValue: Date;

	private _instance: any;

	constructor() {}

	ngOnInit() {
		let self = this;

		this._instance = Flatpickr(this._el.nativeElement, {
			animate: true,
			enableTime: this.enableTime,
			inline: this.inlineCalendar,
			mode: this.calendarMode,
			altInput: true,
			altFormat: this.dateFormat,
			onChange: function(selectedDates, dateStr, instance) {
				self.valueChanged(selectedDates[0], selectedDates[1]);
			}
		});
	}

	propagateChange = (_: any) => {};

	valueChanged(value: Date, endValue: Date) {
		if (!value) return;

		this.value = value;
		this.endValue = endValue;
		const dates: Date[] = [];
		if (this.enableTime) {
			dates.push(
				new Date(
					this.value.getFullYear(),
					this.value.getMonth(),
					this.value.getDate(),
					this.value.getHours(),
					this.value.getMinutes()
				)
			);
			if (endValue)
				dates.push(
					new Date(
						this.endValue.getFullYear(),
						this.endValue.getMonth(),
						this.endValue.getDate(),
						this.endValue.getHours(),
						this.endValue.getMinutes()
					)
				);
		} else {
			dates.push(new Date(this.value.getFullYear(), this.value.getMonth(), this.value.getDate()));
			if (this.endValue)
				dates.push(
					new Date(this.endValue.getFullYear(), this.endValue.getMonth(), this.endValue.getDate())
				);
		}
		this.propagateChange(dates);
	}

	writeValue(obj: Date) {
		if (obj !== undefined) {
			this.value = obj;
			this._instance.setDate(this.value);
		}
	}

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any) {} //Not currently needed
}
