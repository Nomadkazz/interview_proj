import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:Product=new Product();

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
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
    this.productService.editProduct(this.product).subscribe(id => id != null ? console.log("Successfully saved") : console.log("Failed"));
  }

}
