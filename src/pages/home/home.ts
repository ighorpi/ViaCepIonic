import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViacepProvider} from '../../providers/viacep/viacep';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	private cep;
	private endereco:any = {};
	
  constructor(public navCtrl: NavController, private viacep: ViacepProvider) {}
	
	getEndereco(){
		this.viacep.callService(this.cep)
		.subscribe(
        data =>{
		this.endereco = data;
		console.log(data);
        }
      );
	}
	

    
}
