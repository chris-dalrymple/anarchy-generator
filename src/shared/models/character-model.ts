export class MetaType {
    public static human: 0;
    public static elf: 1;
    public static dwarf: 2;
    public static ork: 3;
    public static troll: 4;
}

export class CharacterModel {
    public name: string = '';
    public metatype: MetaType = MetaType.human;
    // basic attributes
    public strength: number = 0;
    public agility: number = 0;
    public willpower: number = 0;
    public logic: number = 0;
    public charisma: number = 0;
    public edge: number = 0;
    public essence: number = 6;
    // special qualities
    public emerged: boolean = false;
    public awakened: boolean = false;
    public dispositions: string[] = [];
    public cues: string[] = [];
    public weapons: any[] = [];
    public karmaTotal: number = 0;
    public karmaBalance: number = 0;
}