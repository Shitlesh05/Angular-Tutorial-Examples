import { Component, OnInit } from '@angular/core';
import { from, Observable,of,interval, Subscription} from 'rxjs';
import { map,filter } from 'rxjs/operators'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Observable14';
 
// 1.creating observable by Observable Constructor
   /* myObservable = new Observable((observer)=>{
    console.log("Observable starts");
    setTimeout(() => {observer.next("1")} , 1000 )
    setTimeout(() => {observer.next("2")} , 2000 )
    setTimeout(() => {observer.next("3")} , 3000 )
      
        //error()
    setTimeout(() => {observer.error(new Error('Something went wrong please try again later......'))} , 4000 )

    setTimeout(() => {observer.next("4")} , 5000 )
    setTimeout(() => {observer.next("5")} , 6000 )

    // complete ()
    setTimeout(() => {observer.complete()} , 6000 )
    
  });

  ngOnInit(){
    this.myObservable.subscribe((val) => {
      console.log(val);
    } , (error)=>{          // error()
      alert(error.message);
    } , ()=>{    // complete()
      alert('Observable has completed emitting all the values....')
    });
  }*/


  // 2. Creating observable by create() method 
  /*  myObservable = Observable.create((observer:any) =>{
    setTimeout(() => {observer.next("A")} , 1000 )
    setTimeout(() => {observer.next("B")} , 2000 )
    setTimeout(() => {observer.next("C")} , 3000 )
    //setTimeout(() => {observer.error(new Error('Something went wrong please try again later......'))} , 4000 )
    setTimeout(() => {observer.next("D")} , 5000 )
    setTimeout(() => {observer.next("E")} , 6000 )
    setTimeout(() => {observer.complete()} , 6000 )
  });

  ngOnInit(){
    this.myObservable.subscribe((val: any) => {
      console.log(val);
    } , (error: { message: any; })=>{          // error()
      alert(error.message);
    } , ()=>{    // complete()
      alert('Observable has completed emitting all the values....')
    });
  }*/
  
  // 3. creating Observable from operators     :- 
  //a.Using of operator
  /*array1 = [1,2,3,4,5];
  array2 = ['A','B','C'];
  myObservable = of(this.array1 , this.array2 , 20 , 79 , 'Shitlesh');

  ngOnInit(){
    this.myObservable.subscribe((val: any) => {
      console.log(val);
    } , (error: { message: any; })=>{          // error()
      alert(error.message);
    } , ()=>{    // complete()
      alert('Observable has completed emitting all the values....')
    });
  }*/

  //Using from operator
  // array1 = [1,2,3,4,5];
  // array2 = ['A','B','C'];
  // myObservable = from(this.array1);

  // ngOnInit(){
  //   this.myObservable.subscribe((val: any) => {
  //     console.log(val);
  //   } , (error: { message: any; })=>{          // error()
  //     alert(error.message);
  //   } , ()=>{    // complete()
  //     alert('Observable has completed emitting all the values....')
  //   });
  // }

  // Using map operator
  /*array1 = [1,2,3,4,5];
  array2 = ['A','B','C'];
  myObservable = from(this.array1);

  transformedObs = this.myObservable.pipe(map((val)=>{
    return val * 5;
  }))

  ngOnInit(){
    this.transformedObs.subscribe((val: any) => {
      console.log(val);
    } , (error: { message: any; })=>{          // error()
      alert(error.message);
    } , ()=>{    // complete()
      alert('Observable has completed emitting all the values....')
    });
  }*/


  // Using filter operator
  // array1 = [1,2,3,4,5];
  // myObservable = from(this.array1);

  // transformedObs = this.myObservable.pipe(map((val)=>{
  //   return val * 5;
  // })) // 5 10 15 20 25

  // filterObs = this.transformedObs.pipe(filter((val)=>{
  //   return val >= 15
  // }))

  // ngOnInit(){
  //   this.filterObs.subscribe((val: any) => {
  //     console.log(val);
  //   } , (error: { message: any; })=>{          // error()
  //     alert(error.message);
  //   } , ()=>{    // complete()
  //     alert('Observable has completed emitting all the values....')
  //   });
  // }


  // Combination of map() and filter()
  /*array1 = [1,2,3,4,5];
  myObservable = from(this.array1);

  transformedObs = this.myObservable.pipe(map((val)=>{
    return val * 5;
  }) , filter((val)=>{
    return val >= 15
  }))

  ngOnInit(){
    this.transformedObs.subscribe((val: any) => {
      console.log(val);
    } , (error: { message: any; })=>{          // error()
      alert(error.message);
    } , ()=>{    // complete()
      alert('Observable has completed emitting all the values....')
    });
  }*/


  // Chaining of pipe method to Observable directly
  /*array1 = [1,2,3,4,5];
  myObservable = from(this.array1).pipe(map((val)=>{
    return val * 5;
  }) , filter((val)=>{
    return val >= 15
  }))

  ngOnInit(){
    this.myObservable.subscribe((val: any) => {
      console.log(val);
    } , (error: { message: any; })=>{          // error()
      alert(error.message);
    } , ()=>{    // complete()
      alert('Observable has completed emitting all the values....')
    });
  }*/

  //unsubscribe() method using interval() function

  array1 = [1,2,3,4,5];
  
  /*myObservable = from(this.array1).pipe(map((val)=>{
    return val * 5;
  }) , filter((val)=>{
    return val >= 15
  }))*/

  counterObs = interval(1000);

  counterSub: any;

  ngOnInit(){
    /*this.myObservable.subscribe((val: any) => {
      console.log(val);
    } , (error: { message: any; })=>{          // error()
      alert(error.message);
    } , ()=>{    // complete()
      alert('Observable has completed emitting all the values....')
    });*/
  }

  unsubscribe(){
    this.counterSub.unsubscribe();
  }

  subscribe(){
    this.counterSub = this.counterObs.subscribe((val)=>{
      console.log(val);
    })
  }

}
