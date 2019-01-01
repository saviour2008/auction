import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public formModel:FormGroup;
  public categroies:string[];
  constructor(private productService:ProductService) { 
    let fb = new FormBuilder();
    this.formModel = fb.group({
      title:['',Validators.minLength(6)],
      price:[null,this.positiveNumberValidator],
      category:['-1']
    })
  }

  ngOnInit() {
    this.categroies = this.productService.getAllCategories();
  }

  positiveNumberValidator(control:FormControl):any{
    if(!control.value){
      return null;
    }
    let price = parseInt(control.value);
    if (price>0){
      return null
    }else{
      return {positiveNumber: true}
    }
  }
  onSearch(){
    if(this.formModel.valid){
      console.log(this.formModel.value)
    }
  }
}
