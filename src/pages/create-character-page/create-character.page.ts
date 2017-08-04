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

  // public buttonHandler = {
  //   title: 'Pizza Toppings',
  //   buttons: [
  //     {
  //       text: 'Okay',
  //       role: 'cancel',
  //       handler: () => { console.log('Ok clicked'); }
  //     }
  //   ]
  // };

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
    // this.setMetaType();
  }

  setMetaType(selectedValue: number) {
    console.log('Setting value = ' + selectedValue);
    this.metaType.setMetaType(selectedValue);
    console.log(this.metaType);
    this.checkCharacterData();
  }

  saveCharacter() {
    this.storageService.addCharacter(this.character);
    this.navCtrl.pop();
  }

  private checkCharacterData() {
    this.checkStat('strength', this.metaType.strengthMax, this.metaType.strengthMin);
    this.checkStat('agility', this.metaType.agilityMax, this.metaType.agilityMin);
    this.checkStat('willpower', this.metaType.willpowerMax, this.metaType.willpowerMin);
    this.checkStat('logic', this.metaType.logicMax, this.metaType.logicMin);
    this.checkStat('charisma', this.metaType.charismaMax, this.metaType.charismaMin);
  }

  private checkStat(stat: string, max: number, min: number) {
    if (this.character[stat] > max) {
      this.character[stat] = max;
    } else if (this.character[stat] < min) {
      this.character[stat] = min;
    }
  }
}
