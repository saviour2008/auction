import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products: Product[];
  private imgUrl = "http://placehold.it/354x160";

  constructor(private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  // toProductDetail(sTitle) {
  //   this.router.navigate(["/product", sTitle]);
  // }

}

