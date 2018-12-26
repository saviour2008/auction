import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1, "北京", 1, 2, "首都", ["直辖市", "省会", "城市"]),
    new Product(2, "上海", 2, 3, "直辖市", ["直辖市", "省会", "城市"]),
    new Product(3, "大连", 3, 3, "城市", ["直辖市", "省会", "城市"]),
    new Product(4, "天津", 4, 4, "直辖市", ["直辖市", "省会", "城市"]),
    new Product(5, "西安", 5, 1, "省会", ["直辖市", "省会", "城市"]),
    new Product(6, "成都", 6, 0, "省会", ["直辖市", "省会", "城市"]),
    new Product(7, "南京", 7, 2, "省会", ["直辖市", "省会", "城市"])
  ]
  private comments: Comment[] = [
    new Comment(1, 1, 1545836114320, "peter", 3, "I like it"),
    new Comment(2, 2, 1545866114320, "peter", 3, "I like it"),
    new Comment(3, 1, 1545856114320, "peter", 3, "I like it"),
    new Comment(4, 2, 1545846114320, "peter", 3, "I like it"),
  ]
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product: Product) => product.id == id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}
export class Product {
  constructor(public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public category: Array<string>
  ) {

  }
}
export class Comment {
  constructor(public id: number,
    public productId: number,
    public timestamp: number,
    public user: string,
    public rating: number,
    public content: string
  ) {
  }
}