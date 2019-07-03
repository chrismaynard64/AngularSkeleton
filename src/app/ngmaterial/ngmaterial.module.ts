import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule, MatDialogModule, MatButtonModule, MatToolbarModule
  ],
  exports:[MatIconModule, MatDialogModule, MatButtonModule, MatToolbarModule]
})
export class NgMaterialModule { }
