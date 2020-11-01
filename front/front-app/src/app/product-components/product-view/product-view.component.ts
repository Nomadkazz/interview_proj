import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product:Product=new Product();

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private location: Location) {
    }

  ngOnInit(): void {
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => 
        {this.product = product});
  }

  goBack(): void {
    this.location.back();
  }  

  edit(){
    this.router.navigate(["product/edit"+this.product.id]);
  }

  delete(){
    this.router.navigate(["product/delete/"+this.product.id]);
  }
}
