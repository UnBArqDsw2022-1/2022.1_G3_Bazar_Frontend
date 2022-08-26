import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule,
    SharedModule,
  ],
  exports: [LayoutComponent]
})

export class LayoutModule {}
