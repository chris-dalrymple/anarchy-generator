import { MetaTypeEnum } from '../enums/metatype.enum';

export class MetaTypeModel {
    public strengthMax: number = 6;
    public agilityMax: number = 6;
    public willpowerMax: number = 6;
    public logicMax: number = 6;
    public charismaMax: number = 6;
    public edgeMax: number = 6;

    public strengthMin: number = 1;
    public agilityMin: number = 1;
    public willpowerMin: number = 1;
    public logicMin: number = 1;
    public charismaMin: number = 1;
    public edgeMin: number = 1;

    constructor(metatype: number) {
        this.setMetaType(metatype);
    }

    public setMetaType(type: number) {
        console.log(typeof(type));
        type = Number(type);
        this.strengthMax = 6;
        this.agilityMax = 6;
        this.willpowerMax = 6;
        this.logicMax = 6;
        this.charismaMax = 6;
        this.edgeMax = 6;
        
        this.strengthMin = 1;
        this.agilityMin = 1;
        this.willpowerMin = 1;
        this.logicMin = 1;
        this.charismaMin = 1;
        this.edgeMin = 1;
        if (type === MetaTypeEnum.elf) {
            console.log('here');
            this.agilityMax = 7;
            this.charismaMax = 8;
            this.agilityMin = 2;
            this.charismaMin = 2;
        } else if (type === MetaTypeEnum.dwarf) {
            this.strengthMax = 8;
            this.strengthMin = 2;
            this.willpowerMax = 7;
            this.willpowerMin = 2;
        } else if (type === MetaTypeEnum.ork) {
            this.strengthMax = 8;
            this.strengthMin = 3;
            this.logicMax = 5;
            this.charismaMax = 5;
        } else if (type == MetaTypeEnum.troll) {
            this.strengthMax = 10;
            this.strengthMin = 3;
            this.agilityMax = 5;
            this.logicMax = 5;
            this.charismaMax = 4;
        }
    }
}