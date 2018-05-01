import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './records.component';
import { FormsModule } from '@angular/forms';
import {SearchByKeyPipeModule} from '../pipes/search-by-key.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchByKeyPipeModule
  ],
  declarations: [RecordsComponent]
})
export class RecordsModule { }
