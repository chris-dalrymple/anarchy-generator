import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CharacterModel } from '../../shared/models/character-model';
import { LocalStorageService } from '../../shared/services/local-storage-service';

@Component({
  selector: 'create-character-page',
  templateUrl: 'create-character.page.html',
})
export class CreateCharacterPage {
  public character: CharacterModel = new CharacterModel();
  public myNumber: any = 22;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storageService: LocalStorageService) {}

  ionViewDidLoad() {
    // this.character = new CharacterModel();
    // this.character.name = '';
    // this.character.strength = 0;
    // this.character.agility = 0;
    // this.character.willpower = 0;
    // this.character.logic = 0;
    // this.character.charisma = 0;
    // this.character.edge = 0;

  }

  saveCharacter() {
    this.storageService.addCharacter(this.character);
    this.navCtrl.pop();
  }
}
