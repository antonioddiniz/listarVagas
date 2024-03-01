import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './Pages/teste/teste.component';
import { MainComponent } from './Pages/main/main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
