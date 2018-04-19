import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routerConfig } from './app.routes';

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routerConfig)
  ],
  declarations: [],
  providers: [
    {
      provide: APP_BASE_HREF, useValue: '/'
    }
  ]
})
export class AppRoutingModule { }
