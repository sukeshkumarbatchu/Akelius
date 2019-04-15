import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const baseURL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class StringHandlerService {

  private unitsListAPI = baseURL + 'units';

  constructor() { }

  getUnitsAPI() {
    return this.unitsListAPI;
  }
}
