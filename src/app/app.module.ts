import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { IpcellComponent } from './ipcell/ipcell.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IpcellComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    CarouselModule,
    SharedModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
