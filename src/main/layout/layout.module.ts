import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { LayoutComponent } from './layout.component';
import { LayoutRoutesModule } from './layout-routes.module';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

// 声明模块中拥有的视图类
const components = [
  LayoutComponent,
  HeaderComponent,
  ContentComponent,
  FooterComponent
]

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    LayoutRoutesModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class LayoutModule { }
