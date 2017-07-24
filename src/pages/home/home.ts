import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CharacterListPage } from '../character-list-page/character-list-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  characterList() {
    this.navCtrl.push(CharacterListPage);
  }
}
