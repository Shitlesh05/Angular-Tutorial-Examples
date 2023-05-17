import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Products } from "../model/products";


@Injectable({ providedIn: "root" })
export class ProductService {
    error = new Subject<string>();
    constructor(private http: HttpClient ){}

    // create product in database
    createProduct(products: {pName:string , desc: string , price: string}) {
        console.log(products);
        const headers = new HttpHeaders({ 'myHeader': 'shitlesh' })
        this.http.post<{ name: string }>('https://angular-a4835-default-rtdb.firebaseio.com/products.json123',
        products, { headers: headers })
        .subscribe((res) => {
            console.log(res);
        }, (err)=>{
            this.error.next(err.message);
        });
    }

    // fetch product from database
    fetchProduct() {
        return this.http.get<{[key: string]: Products}>('https://angular-a4835-default-rtdb.firebaseio.com/products.json')
        .pipe(map((res)=>{
            const products = [];
            for(const key in res){
                if(res.hasOwnProperty(key)){
                products.push({...res[key] , id: key})
                }
            }
        return products;
        }) , catchError((err)=>{
            // logic for logging error
            return throwError(err);
        }))
    }
    // delete product from database
    deleteProducts(id : string) {
        this.http.delete('https://angular-a4835-default-rtdb.firebaseio.com/products/'+id+'.json')
        .subscribe();
    }
    // delete all product from database
    deleteAllProducts() {
        this.http.delete('https://angular-a4835-default-rtdb.firebaseio.com/products/.json')
        .subscribe();
    }

    //update product 
    updateProduct(id :string , value: Products){
        this.http.put('https://angular-a4835-default-rtdb.firebaseio.com/products/'+id+'.json',value)
        .subscribe();
    }
}