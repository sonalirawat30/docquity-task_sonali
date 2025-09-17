import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainComponentComponent } from './main-component/main-component.component';
import { SectionComponentComponent } from './section-component/section-component.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponentComponent,
    SectionComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MainComponentComponent,
    SectionComponentComponent
  ],
  providers: []
})
export class SharedModule { }
