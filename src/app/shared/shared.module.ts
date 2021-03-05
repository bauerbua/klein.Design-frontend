import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/shared-components.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [FilterPipe],
  imports: [
    CommonModule,
    SharedComponentsModule,
  ],
  exports: [
    SharedComponentsModule,
    FilterPipe
  ]
})
export class SharedModule { }
