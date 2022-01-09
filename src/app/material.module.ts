import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';


const myModule=[MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatDialogModule];


@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports:[myModule]
})
export class MaterialModule { }
