import {
	Component,
	OnInit,
	Input,
	EventEmitter,
	forwardRef,
	ChangeDetectorRef,
	ChangeDetectionStrategy,
	Output
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const RATING_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => RatingsComponent),
	multi: true
};

@Component({
	selector: "tt-ratings",
	templateUrl: "./ratings.component.html",
	styleUrls: ["./ratings.component.scss"],
	providers: [RATING_CONTROL_VALUE_ACCESSOR],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingsComponent implements ControlValueAccessor, OnInit {
	@Input() max = 5;
	@Input() readonly = false;

	@Output() hover: EventEmitter<number> = new EventEmitter();
	@Output() leave: EventEmitter<number> = new EventEmitter();

	range: any[];
	value: number;

	onChange: any = Function.prototype;
	onTouched: any = Function.prototype;

	score = 0;

	constructor(private changeDetection: ChangeDetectorRef) {}

	ngOnInit() {
		this.range = [];

		for (let i = 0; i < this.max; i++) {
			this.range.push(i);
		}
	}

	rate(value: number): void {
		let rating = 0;

		if (!this.readonly && value >= 0 && value <= this.range.length) {
			if (this.value === value) {
				rating = value - 0.5;
			} else if (Math.ceil(this.value) === value) {
				rating = value;
			} else {
				rating = value - 0.5;
			}

			this.writeValue(rating);
			this.onChange(rating);
		}
	}

	writeValue(value: number): void {
		this.score = (value / this.range.length) * 100;
		this.value = value;
		this.changeDetection.markForCheck();
	}

	registerOnChange(fn: (_: any) => {}): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => {}): void {
		this.onTouched = fn;
	}
}
