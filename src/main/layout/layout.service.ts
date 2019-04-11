import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class LayoutService {
  shrink = false;

  menus = [
    { id: "1", parentId: null, label: "UI库", router: "", icon: "icon-ui" },
    { id: "1-1", parentId: "1", label: "简介", router: "" },
    { id: "1-2", parentId: "1", label: "基本组件", router: "" },
    { id: "1-3", parentId: "1", label: "表格", router: "" },
    { id: "1-4", parentId: "1", label: "表单", router: "" },
    { id: "1-5", parentId: "1", label: "树", router: "" },
    { id: "1-1", parentId: "1", label: "简介", router: "" },
    { id: "1-2", parentId: "1", label: "基本组件", router: "" },
    { id: "1-3", parentId: "1", label: "表格", router: "" },
    { id: "1-4", parentId: "1", label: "表单", router: "" },
    { id: "1-5", parentId: "1", label: "树", router: "" },
    { id: "1-1", parentId: "1", label: "简介", router: "" },
    { id: "1-2", parentId: "1", label: "基本组件", router: "" },
    { id: "1-3", parentId: "1", label: "表格", router: "" },
    { id: "1-4", parentId: "1", label: "表单", router: "" },
    { id: "1-5", parentId: "1", label: "树", router: "" },
    { id: "1-3", parentId: "1", label: "表格", router: "" },
    { id: "1-4", parentId: "1", label: "表单", router: "" },
    { id: "1-5", parentId: "1", label: "树", router: "" },
    {
      id: "2",
      parentId: null,
      label: "用户模块",
      router: "",
      icon: "icon-module"
    },
    {
      id: "3",
      parentId: null,
      label: "表单设计器",
      router: "",
      icon: "icon-form"
    },
    {
      id: "4",
      parentId: null,
      label: "工作流设计",
      router: "",
      icon: "icon-workflow"
    },
    {
      id: "5",
      parentId: null,
      label: "代码生成",
      router: "",
      icon: "icon-code"
    }
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(x => x instanceof NavigationEnd))
      .subscribe((x: NavigationEnd) => {
        this.shrink = x.url.indexOf(`/${environment.layout}/docs`) == 0;
      });
  }
}
