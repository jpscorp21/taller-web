import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaisesService } from '../../services/paises/paises.service';


@IonicPage()
@Component({
  selector: 'page-paises',
  templateUrl: 'paises.html',
})
export class PaisesPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _paises: PaisesService) {
    this._paises.get();
  }



}
