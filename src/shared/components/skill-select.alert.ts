import { AlertController } from 'ionic-angular';

import { SkillModel } from '../models/skill.model';

export function openSkillSelect(alertCtrl: AlertController, skillList: SkillModel[]) {
    let skillAlert = this.alertCtrl.create();
    skillAlert.setTitle('Select Skills');

    for (let i = 0; i < skillList.length; i++) {
        skillAlert.addInput({
            type: 'checkbox',
            label: skillList[i].name,
            value: skillList[i].id
        });
    }

    skillAlert.addButton('Cancel');
    skillAlert.addButton({
        text: 'Select',
        handler: data => {
            console.log('Checkbox data:', data);
        }
    });
};
