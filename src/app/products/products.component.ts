import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl = "http://placehold.it/354x160";
  constructor(private router: Router) { }

  ngOnInit() {
    this.products = [
      new Product(1, "北京", 1, 2, "首都", ["直辖市", "省会", "城市"]),
      new Product(2, "上海", 2, 3, "直辖市", ["直辖市", "省会", "城市"]),
      new Product(3, "大连", 3, 3, "城市", ["直辖市", "省会", "城市"]),
      new Product(4, "天津", 4, 4, "直辖市", ["直辖市", "省会", "城市"]),
      new Product(5, "西安", 5, 1, "省会", ["直辖市", "省会", "城市"]),
      new Product(6, "成都", 6, 0, "省会", ["直辖市", "省会", "城市"]),
      new Product(7, "南京", 7, 2, "省会", ["直辖市", "省会", "城市"])
    ]
  }

  toProductDetail(sTitle){
    this.router.navigate(["/product", sTitle]);
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public category: Array<string>
  ) {

  }
}
