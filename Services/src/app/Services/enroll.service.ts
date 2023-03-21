import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor() { }

  onEnrollClicked(title: string){
    alert('Thank You for enrolling to '+title+' course')
  }
}
