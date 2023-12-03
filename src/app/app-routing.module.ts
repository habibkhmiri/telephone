import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { Index1Component } from './index1/index1.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'' , redirectTo:'index',pathMatch:"full"},
  {path:'produit' , component:ProduitComponent},
  {path:'index' , component:Index1Component},
  {path:'contact' , component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
