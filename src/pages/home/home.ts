import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public resultApi:any = {};
  public feedApi:any = {};

  constructor(public navCtrl: NavController,
              public httpClient: HttpClient) {}
              
    callApi():void {
      this.httpClient.get(`http://viacep.com.br/ws/${this.feedApi.cep}/json/`)
      .subscribe(
        data =>{
          this.resultApi = data;
          console.log(data);
        }
      );
    }
}
