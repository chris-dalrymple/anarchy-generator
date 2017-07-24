import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterListPage } from './character-list-page';

@NgModule({
  declarations: [
    CharacterListPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterListPage),
  ],
  exports: [
    CharacterListPage
  ]
})
export class CharacterListPageModule {}
