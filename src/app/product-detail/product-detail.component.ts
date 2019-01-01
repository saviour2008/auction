import { Comment } from './../shared/product.service';
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
  public comments: Comment[];
  public newRating: number = 5;
  public newComment: string = "";
  public isCommentHidden: boolean = true;
  constructor(private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.productId = params["productId"]);
    this.productService.getProduct(this.productId).subscribe(res => this.product = res);
    this.productService.getCommentsForProductId(this.productId).subscribe(res => this.comments = res);
  }
  addComment() {
    let comment = new Comment(0, this.productId, new Date().getTime(), "someone", this.newRating, this.newComment);
    this.comments.unshift(comment);
    let sum = this.comments.reduce((sum, item) => sum + item.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
