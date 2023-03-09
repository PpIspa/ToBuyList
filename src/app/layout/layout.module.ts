import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ServiceModule } from '../service/service.module';
import { ComponentModule } from '../component/component.module';

@NgModule({
  declarations: [HeaderComponent, MainComponent],
  imports: [CommonModule, ServiceModule, ComponentModule],
  exports: [HeaderComponent, MainComponent],
})
export class LayoutModule { }
