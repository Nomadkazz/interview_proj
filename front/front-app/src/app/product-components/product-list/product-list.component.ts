import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import { Product } from '../../models/product';
import { ProductNewComponent } from '../product-new/product-new.component';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { ProductService } from '../../product.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns = ['id', 'name', "action"];
  products = new MatTableDataSource<Product>();

  constructor(private productService: ProductService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    console.log('Refreshing list ..')
    this.getProducts();
    this.changeDetectorRefs.detectChanges();
  }

  getProducts(): void {
    // this.productService.getProducts().subscribe(products => this.products = new MatTableDataSource<Product>(products));
    let product = new Product();
    product.color='12';
    product.description='12';
    product.id=1;
    product.name='12';
    product.price=2;
    product.weight=2;
    this.products.data.push(product)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.products.filter = filterValue.trim().toLowerCase();
  }
}
