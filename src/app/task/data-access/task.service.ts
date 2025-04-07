import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface alumnos {
  contact:string;
  fullName:string;
  idNumber:string;
  paid:boolean;
  paymentDate:string;
  professor:string;
  schedule:string;
}
const PATH = 'alumnos';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, PATH);

  
  constructor() { }

  
getAll(): Observable<alumnos[]> {
  return collectionData(this._collection, { idField: 'id' }) as Observable<alumnos[]>;
}
}
