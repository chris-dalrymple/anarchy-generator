import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';

import { NumericModule } from 'ionic2-numericpicker';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CharacterListPage } from '../pages/character-list-page/character-list-page';
import { CreateCharacterPage } from '../pages/create-character-page/create-character.page';
import { LocalStorageService } from '../shared/services/local-storage-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CharacterListPage,
    CreateCharacterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NumericModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CharacterListPage,
    CreateCharacterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageService,
    SQLitePorter,
    SQLite
  ]
})
export class AppModule {}
