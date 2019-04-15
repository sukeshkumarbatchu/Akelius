import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { IUnit } from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  unitDetail$: Observable<IUnit>;
  private detailSubject = new BehaviorSubject<any>("");

  constructor() {
      this.unitDetail$ = this.detailSubject.asObservable();
  }

  unitDetails(data) {
      this.detailSubject.next(data);
  }
}
