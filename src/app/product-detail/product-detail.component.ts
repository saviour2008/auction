import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router"
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  public productId: number;
  constructor(private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.productId = params["productId"]);
    this.product = this.productService.getProduct(this.productId);
  }

}
