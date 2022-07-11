import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';


import {DragDropModule} from '@angular/cdk/drag-drop';
import {OverlayModule} from '@angular/cdk/overlay';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatToolbarModule, MatSidenavModule, MatCardModule,
  MatDialogModule, MatSnackBarModule, MatButtonModule,MatListModule, MatExpansionModule, MatMenuModule, MatButtonToggleModule, MatRadioModule,
  MatSelectModule, MatStepperModule, MatTabsModule, MatSliderModule, MatProgressBarModule, MatTableModule, MatCheckboxModule, MatTooltipModule,
  MatRippleModule, MatChipsModule, MatNativeDateModule, MatBadgeModule, DragDropModule, MatSlideToggleModule, OverlayModule, A11yModule,
  MatPaginatorModule, BidiModule
  ],
  exports: [
    MatIconModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatToolbarModule, MatSidenavModule, MatCardModule,
  MatDialogModule, MatSnackBarModule, MatButtonModule,MatListModule, MatExpansionModule,MatMenuModule, MatButtonToggleModule, MatRadioModule,
  MatSelectModule, MatStepperModule, MatTabsModule, MatSliderModule, MatProgressBarModule,MatTableModule,MatCheckboxModule, MatTooltipModule,
  MatRippleModule, MatChipsModule, MatNativeDateModule, MatBadgeModule, DragDropModule, MatSlideToggleModule, OverlayModule, 
  A11yModule, MatPaginatorModule, BidiModule
  ]
})
export class CoreMaterialModule { }
