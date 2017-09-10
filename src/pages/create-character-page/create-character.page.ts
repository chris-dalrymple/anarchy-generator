import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

import { CharacterModel } from '../../shared/models/character-model';
import { MetaTypeModel } from '../../shared/models/metatype.model';
import { LocalStorageService } from '../../shared/services/local-storage-service';
import { MetaTypeEnum } from '../../shared/enums/metatype.enum';
import { openSkillSelect } from '../../shared/components/skill-select.alert';

@Component({
  selector: 'create-character-page',
  templateUrl: 'create-character.page.html',
})
export class CreateCharacterPage {
  public character: CharacterModel = new CharacterModel();
  public metaType: MetaTypeModel = new MetaTypeModel(MetaTypeEnum.human);
  public myNumber: any = 22;
  public skills: any[] = [];

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
              public AlertCtrl: AlertController,
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
    this.storageService.getSkillList().then(list => {
      this.skills = list;
    });
  }

  setMetaType(selectedValue: number) {
    console.log('Setting value = ' + selectedValue);
    this.metaType.setMetaType(selectedValue);
    console.log(this.metaType);
    this.checkCharacterData();
  }

  saveCharacter() {
    this.storageService.addCharacter(this.character).then(() => {
      this.navCtrl.pop();
    }).catch((err) => {
      console.log(err.message);
    });
  }

  getSkillPopup() {
    openSkillSelect(this.AlertCtrl, this.skills);
  }

  openSkillSelect() {
    let skillAlert = this.AlertCtrl.create();
    skillAlert.setTitle('Select Skills');

    for (let i = 0; i < this.skills.length; i++) {
        skillAlert.addInput({
            type: 'checkbox',
            label: this.skills[i].name,
            value: this.skills[i].id
        });
    }

    skillAlert.addButton('Cancel');
    skillAlert.addButton({
        text: 'Select',
        handler: (data) => {
          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < this.skills.length; j++) {
              if (data[i] === this.skills[j].id) {
                this.character.skillList.push(this.skills[j]);
                break;
              }
            }
          }
        }
    });

    skillAlert.present();
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
