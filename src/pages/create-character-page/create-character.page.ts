import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CharacterModel } from '../../shared/models/character-model';
import { MetaTypeModel } from '../../shared/models/metatype.model';
import { LocalStorageService } from '../../shared/services/local-storage-service';
import { MetaTypeEnum } from '../../shared/enums/metatype.enum';

@Component({
  selector: 'create-character-page',
  templateUrl: 'create-character.page.html',
})
export class CreateCharacterPage {
  public character: CharacterModel = new CharacterModel();
  public metaType: MetaTypeModel = new MetaTypeModel(MetaTypeEnum.human);
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
    this.setMetaType();
  }

  setMetaType() {
    console.log('Setting value = ' + this.character.metatype);
    this.metaType = new MetaTypeModel(this.character.metatype);
  }

  saveCharacter() {
    this.storageService.addCharacter(this.character);
    this.navCtrl.pop();
  }
}
