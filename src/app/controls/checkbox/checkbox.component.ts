import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  forwardRef
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "bsd-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  checked: boolean = true;

  @Input()
  id: string;
  @Input()
  isSmallCheckbox: boolean = false;
  @Input()
  label: string;
  @Input()
  isDisabled: boolean = false;

  @Output()
  onItemChecked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onChange(checked: boolean) {
    this.checked = checked;
    this.propagateChange(this.checked);

    this.onItemChecked.emit(this.checked);
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
  }

  propagateChange = (_: boolean) => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}
}
