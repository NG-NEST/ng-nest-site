import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { LayoutModule } from '@angular/cdk/layout';
import { DevelopingComponent } from './developing/developing.component';
import { RouterModule } from '@angular/router';

const components = [
  DevelopingComponent
]

const entryComponents = [
]

const modules = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  OverlayModule,
  PortalModule,
  DragDropModule,
  LayoutModule
]

const providers = [
]

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components,
    ...modules
  ],
  entryComponents: [
    ...entryComponents
  ],
  providers: [
    ...providers
  ]
})
export class ShareModule { }
