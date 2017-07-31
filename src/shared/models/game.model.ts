export class GameModel {
    public static GANG_LEVEL_GAME: number = 0;
    public static STREET_RUNNER_GAME: number = 1;
    public static PRIME_RUNNER_GAME: number = 2;

    public attributePoints: number = 0;
    public skillPoints: number = 0;
    public ampPoints: number = 0;
    public weaponCount: number = 0;

    setGameLevel(gameLevel: number) {
        if (gameLevel === GameModel.PRIME_RUNNER_GAME){
            this.attributePoints = 20;
            this.skillPoints = 14;
            this.ampPoints = 14;
        } else if (gameLevel === GameModel.STREET_RUNNER_GAME) {
            this.attributePoints = 16;
            this.skillPoints = 12;
            this.ampPoints = 10;
        } else {
            this.attributePoints = 12;
            this.skillPoints = 10;
            this.ampPoints = 6;
        }
    }
}