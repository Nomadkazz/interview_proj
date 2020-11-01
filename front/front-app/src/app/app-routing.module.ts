import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product } from './models/product';
import { ProductNewComponent } from './product-components/product-new/product-new.component';
import { ProductListComponent } from './product-components/product-list/product-list.component';
import { ProductViewComponent } from './product-components/product-view/product-view.component';
import { ProductDeleteComponent } from './product-components/product-delete/product-delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-components/product-edit/product-edit.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/new', component: ProductNewComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: 'products/view/:id', component: ProductViewComponent },
  { path: 'products/delete/:id', component: ProductDeleteComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
