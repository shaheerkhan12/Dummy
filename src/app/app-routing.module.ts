import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { SubcomponentComponent } from "./subcomponent/subcomponent.component";

const routes: Routes = [
  { path: "dummy", component: AppComponent },

  { path: "", redirectTo: "/dummy", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
