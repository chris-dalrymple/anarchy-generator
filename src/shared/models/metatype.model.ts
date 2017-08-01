import { MetaTypeEnum } from '../enums/metatype.enum';

export class MetaTypeModel {
    public strengthMax: Number = 6;
    public agilityMax: Number = 6;
    public willpowerMax: Number = 6;
    public logicMax: Number = 6;
    public charismaMax: Number = 6;
    public edgeMax: Number = 6;

    public strengthMin: Number = 1;
    public agilityMin: Number = 1;
    public willpowerMin: Number = 1;
    public logicMin: Number = 1;
    public charismaMin: Number = 1;
    public edgeMin: Number = 1;

    constructor(metatype: MetaTypeEnum) {
        if (metatype === MetaTypeEnum.elf) {
            this.agilityMax = 7;
            this.charismaMax = 8;
            this.agilityMin = 2;
            this.charismaMin = 2;
        } else if (metatype === MetaTypeEnum.dwarf) {
            this.strengthMax = 8;
            this.strengthMin = 2;
            this.willpowerMax = 7;
            this.willpowerMin = 2;
        } else if (metatype === MetaTypeEnum.ork) {
            this.strengthMax = 8;
            this.strengthMin = 3;
            this.logicMax = 5;
            this.charismaMax = 5;
        } else if (metatype == MetaTypeEnum.troll) {
            this.strengthMax = 10;
            this.strengthMin = 3;
            this.agilityMax = 5;
            this.logicMax = 5;
            this.charismaMax = 4;
        }
    }
}