import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UiComponent } from "./ui.component";

const routes: Routes = [
  {
    path: "",
    component: UiComponent,
    children: [
      { path: "", redirectTo: "introduction", pathMatch: "full" },
      { path: "introduction", loadChildren: "./introduction/introduction.module#IntroductionModule" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutesModule {}
