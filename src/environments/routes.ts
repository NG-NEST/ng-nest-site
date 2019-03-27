import { Routes } from "@angular/router";
import { environment } from "./environment";
// import { AuthGuard } from "src/services/auths/auth-guard";

// 公共路由
export const shareRoutes: Routes = [
    // 没有权限的显示模块
    { path: 'no-auth', loadChildren: 'src/main/no-auth/no-auth.module#NoAuthModule' },
    // 错误的路由或不存在的路由指向的模块
    { path: '**', loadChildren: 'src/main/exception/404.module#Exception404Module' }
]

// 顶级路由，指向框架页
export const mainRoutes: Routes = [
    // index 指向框架模块
    { path: environment.layout, loadChildren: 'src/main/layout/layout.module#LayoutModule' },
    // 如果路由为空就指向 index
    { path: '', redirectTo: environment.layout, pathMatch: 'full' },

    ...shareRoutes
];

// 框架页中对应的路由，指向具体的页面，框架页面中的路由都会带上顶级路由 index 如：/index/workplace
export const layoutRoutes: Routes = [
    // 如果路由为空就指向配置的默认首页
    { path: '', redirectTo: environment.defaultPage, pathMatch: 'full' },
    // 示例功能
    { path: 'home', loadChildren: 'src/main/home/home.module#HomeModule' },

    ...shareRoutes
]
