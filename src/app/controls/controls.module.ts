import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CheckboxComponent } from "./checkbox/checkbox.component";
import { CustomIconComponent } from "./custom-icon/custom-icon.component";
import { DateTimeComponent } from "./date-time/date-time.component";
import { FileInputComponent } from "./file-input/file-input.component";
import { LoadingIndicatorComponent } from "./loading-indicator/loading-indicator.component";
import { NumberInputComponent } from "./number-input/number-input.component";
import { RadioSetComponent } from "./radio-set/radio-set.component";
import { RatingsComponent } from "./ratings/ratings.component";
import { SelectComponent } from "./select/select.component";
import { SubmitButtonComponent } from "./submit-button/submit-button.component";
import { TextAreaComponent } from "./text-area/text-area.component";
import { TextInputComponent } from "./text-input/text-input.component";
import { ToggleSwitchComponent } from "./toggle-switch/toggle-switch.component";

import { DemoComponent } from "./demo/demo.component";

import { ControlsRoutingModule } from "./controls-routing.module";
import { AppMaterialModule } from "../app-material.module";

@NgModule({
	imports: [CommonModule, ControlsRoutingModule, FormsModule, AppMaterialModule],
	declarations: [
		DemoComponent,
		CheckboxComponent,
		CustomIconComponent,
		DateTimeComponent,
		FileInputComponent,
		LoadingIndicatorComponent,
		NumberInputComponent,
		RadioSetComponent,
		RatingsComponent,
		SelectComponent,
		SubmitButtonComponent,
		TextAreaComponent,
		TextInputComponent,
		ToggleSwitchComponent
	],
	exports: [
		CheckboxComponent,
		CustomIconComponent,
		DateTimeComponent,
		FileInputComponent,
		LoadingIndicatorComponent,
		NumberInputComponent,
		RadioSetComponent,
		RatingsComponent,
		SelectComponent,
		SubmitButtonComponent,
		TextAreaComponent,
		TextInputComponent,
		ToggleSwitchComponent
	]
})
export class ControlsModule {}
