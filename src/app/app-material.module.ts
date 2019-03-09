import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatTabsModule,
  MatBottomSheetModule,
  MatStepperModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatButtonToggleModule
} from "@angular/material";

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonToggleModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonToggleModule
  ]
})
export class AppMaterialModule {}
