import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ViacepProvider {

  constructor(public http: HttpClient) {
    
  }
  callService(cep:String):any {
      return this.http.get(`http://viacep.com.br/ws/` + cep + `/json/`)
    }

}
