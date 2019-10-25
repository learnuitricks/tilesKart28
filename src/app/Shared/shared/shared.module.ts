import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';
import { StatusPipe } from '../status.pipe';
import { MaxValueDirective } from '../max-value.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StarComponent,StatusPipe,MaxValueDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[StarComponent,StatusPipe,MaxValueDirective]
})
export class SharedModule { }
