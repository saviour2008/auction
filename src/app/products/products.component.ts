import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products: Product[];
  private imgUrl = "http://placehold.it/354x160";
  private keyword: string;
  private titleFilter: FormControl = new FormControl();

  constructor(private router: Router,
    private productService: ProductService
  ) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value)
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => { this.products = res });
  }

  // toProductDetail(sTitle) {
  //   this.router.navigate(["/product", sTitle]);
  // }

}

