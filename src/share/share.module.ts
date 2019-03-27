import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';

// 声明模块中拥有的视图类
const components = [
]

// 能够动态创建的视图类
const entryComponents = [
]

// 模块
const modules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    PortalModule,
    DragDropModule
]

// 服务
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
