import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';

import { CharacterModel } from '../models/character-model';
import { SkillModel } from '../models/skill.model';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class LocalStorageService {

    private db: SQLiteObject;
    private databaseReady: BehaviorSubject<boolean>;

    constructor(public sqlitePorter: SQLitePorter, private storage: Storage, 
                private platform: Platform, private sqlite: SQLite, private http: Http) {
        this.databaseReady = new BehaviorSubject(false);
        this.platform.ready().then(() => {
            this.sqlite.create({
                name: 'anarchy.db',
                location: 'default'
            }).then((db: SQLiteObject) => {
                this.db = db;
                this.storage.get('database_filled').then((val) => {
                    if (val) {
                        this.databaseReady.next(true);
                    } else {
                        this.initDatabase();
                    }
                });
            });
        });
    }

    initDatabase() {
        this.http.get('../../assets/databaseDump.sql').map(res => res.text()).subscribe(sql => {
            // console.log('Attempting database init.');
            this.sqlitePorter.importSqlToDb(this.db, sql).then((data) => {
                // console.log('Sql data imported.');
                this.databaseReady.next(true);
                this.storage.set('database_filled', true);
            }).catch(e => {
                // console.log('Error on database init.');
                console.error(e);
            });
        });
    }

    closeDatabase() {
        this.db.close().then(() => {
            console.log('Database closed');
        }).catch((err) => {
            console.log('Error on database close: ' + err);
        })
    }

    // Character storage
    addCharacter(character: CharacterModel) {
        // this.storage.set(character.name, JSON.stringify(character));
        let data = JSON.stringify(character);
        return this.db.executeSql('INSERT INTO characters(name, json) VALUES (?,?)', [character.name, data]);
    }

    removeCharacter(characterId) {
        this.storage.remove(characterId);
    }

    getCharacter(characterId) {
        return this.storage.get(characterId).then(value => value ? true : false);
    }

    getCharacterList() {
        return this.db.executeSql("SELECT * FROM characters", []).then((data) => {
            let characters = [];
            if (data.rows.length > 0) {
                for (let i = 0; i < data.rows.length; i++) {
                    characters.push(JSON.parse(data.rows.item(i).json));
                }
            }
            return characters;
        }, err => {
            console.log('Error: ', err);
            return [];
        });
        // return Promise.resolve();
        // return this.storage.keys();
    }

    // Skill storage
    addSkill(skill: SkillModel){
        this.storage.set(skill.id, JSON.stringify(skill));
    }

    removeSkill(skillId: string) {
        this.storage.remove(skillId);
    }

    getSkill(skillId: string) {
        return this.storage.get(skillId).then(value => value ? true : false);
    }

    getSkillList() {
        return this.db.executeSql("SELECT * FROM skills", []).then((data) => {
            let skills = [];
            if (data.rows.length > 0) {
                for (let i = 0; i < data.rows.length; i++) {
                    skills.push({
                        id: data.rows.item(i).id,
                        name: data.rows.item(i).name,
                        desc: data.rows.item(i).description,
                        rating: data.rows.item(i).rating,
                        attribute: data.rows.item(i).attribute
                    });
                }
            }
            return skills;
        }, err => {
            console.error(err);
            console.log('Error: ', err);
            return [];
        });
    }

    getDatabaseState() {
        return this.databaseReady.asObservable();
    }
}