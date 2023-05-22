import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { AdminFormComponent } from './admin-form/admin-form.component';


const routes: Routes = [
  {
   path:'',
   redirectTo:'login',
   pathMatch:'full'
  },

  {
     path:'login',
     component:LoginComponent,
 },
 {
   path:'catalogue',
   component:CatalogueComponent
 },
 {
  path:'checkoutpage',
  component:CheckoutpageComponent

 },
 {
   path:'form',
   component:AdminFormComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
