import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product:Product=new Product();

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) {
    }
    
  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }  

  add(){
    this.productService.saveProduct(this.product).subscribe(id => id != null ? console.log("Successfully saved") : console.log("Failed"));
  }

}
