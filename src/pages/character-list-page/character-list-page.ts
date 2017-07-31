import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CharacterModel } from '../../shared/models/character-model';
import { CreateCharacterPage } from '../create-character-page/create-character.page';
import { LocalStorageService } from '../../shared/services/local-storage-service';


/**
 * Generated class for the CharacterListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'character-list-page',
  templateUrl: 'character-list-page.html',
})
export class CharacterListPage {

  private pageObject = {LIST: 'list', EMPTY: 'empty'};

  // public characterList: CharacterModel[] = [];
  public characterList: string[] = new Array(1);

  public pageView: string = this.pageObject.EMPTY;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: LocalStorageService) {
  }

  ionViewDidEnter() {
    this.storage.getCharacterList().then((results) => {
      // this.characterList = new Array(results.length);
      this.characterList = results;
    }).catch((err) => {
      console.error(err);
    });

    if (this.characterList.length <= 0) {
      this.pageView = this.pageObject.EMPTY;
    } else {
      this.pageView = this.pageObject.LIST;
    }
  }

  createCharacter() {
    this.navCtrl.push(CreateCharacterPage);
  }

  chooseCharacter(name: string) {
    console.log('Character key = ' + name);
  }
}
