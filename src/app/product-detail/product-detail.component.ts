import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router"

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  productTitle: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.productTitle = params["productTitle"]);
    //this.productTitle = this.routeInfo.snapshot.params["productTitle"];
  }

}
