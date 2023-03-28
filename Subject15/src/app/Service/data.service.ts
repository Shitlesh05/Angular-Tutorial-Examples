import {EventEmitter, Injectable} from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class DataService{
    // using data emitter
    //dataEmitter = new EventEmitter<string>();

    // using subject
    newEmitter = new Subject<string>();

    raiseDataEmitterEvent(data:string){
        //this.dataEmitter.emit(data);   // this is for dataemitter
        this.newEmitter.next(data);
    }
}