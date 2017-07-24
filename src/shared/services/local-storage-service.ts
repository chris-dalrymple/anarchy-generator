import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { CharacterModel } from '../models/character-model';

@Injectable()
export class LocalStorageService {
    constructor(private storage: Storage) {}

    addCharacter(character: CharacterModel) {
        this.storage.set(character.name, JSON.stringify(character));
    }

    removeCharacter(characterId) {
        this.storage.remove(characterId);
    }

    getCharacter(characterId) {
        return this.storage.get(characterId).then(value => value ? true : false);
    }

    getCharacterList() {
        return this.storage.keys();
    }
}