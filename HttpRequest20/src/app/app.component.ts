import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Products } from './model/products';
import { ProductService } from './Services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'HttpRequest20';
  allProducts : Products[] = [];
  isFetching: boolean = false;
  @ViewChild('productsForm') form: NgForm;
  editMode: boolean = false;
  currentProductId: string;
  errorMessage:string = null;
  errorSub: Subscription;


  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.fetchProducts();    // it is called here as we want to display all the products in DB on our web page 
    this.errorSub = this.productService.error.subscribe((message)=>{
      this.errorMessage = message;
    })
  }

  onProductsFetch(){
    this.fetchProducts();
  }

// send post request
  onProductCreate(products: {pName:string , desc: string , price: string})
  {
    if(!this.editMode){
      this.productService.createProduct(products);
    }
    else{
      this.productService.updateProduct(this.currentProductId , products);
    }
    
  }
// fetch data with get request
  private fetchProducts(){
    this.isFetching = true;
    this.productService.fetchProduct().subscribe((products)=>{
      this.allProducts = products;
      this.isFetching = false;
    }, (err) => {
      this.errorMessage = err.message;
    })
  }

  // deleting data with http request
  onDeleteProduct(id: string){
    this.productService.deleteProducts(id);
  }

  onDeleteAllProducts(){
    this.productService.deleteAllProducts();
  }

  onEdit(id : string){
    this.currentProductId = id;
    // get the product based on id
    let currentProduct = this.allProducts.find((p) => {return p.id === id})
    //console.log(this.form);

    // populate the form with the product details
    this.form.setValue({
      pName: currentProduct.pName,
      desc : currentProduct.desc,
      price: currentProduct.price
    });

    // change the button addvalue to update product
    this.editMode = true;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

}


