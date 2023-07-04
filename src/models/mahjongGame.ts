import { type TileType, type TileNumber, Tile } from "./tile";
import { shuffle } from "../helpers/shuffle";
import { LocationSets } from "./locationSets";

export class MahjongGame {
    readonly Tiles: Tile[];


    public static Create(layout: Layout): MahjongGame {
        let tiles: Tile[] = [];
        const allSuites: TileType[] = [
            'Character',
            'Circle',
            'Bamboo',
            'Dragon',
            'Flower',
            'Season',
            'Wind'
        ];
        const fourOptionSuites: TileType[] = ['Dragon', 'Flower', 'Season', 'Wind'];
        const allNumbers: TileNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        allSuites.forEach((suite) => {
            allNumbers.forEach((number) => {
                if (number > 3 && suite == "Dragon") {
                    return;
                }
                if (number > 4 && fourOptionSuites.indexOf(suite) !== -1) {
                    return;
                }
                let amount = 4;
                switch (suite) {
                    case 'Flower':
                    case 'Season':
                        amount = 1;
                        break;
                    default:
                        break;
                }
                for (let index = 0; index < amount; index++) {
                    tiles.push(new Tile(suite, number));
                }
            });
        });

        tiles = shuffle(tiles);

        //TODO build board
        var locations = LocationSets.get(layout)
        if(locations == undefined){
            throw new Error("location set not found");
        }
        for (let index = 0; index < locations.length; index++) {
            tiles[index].Location = locations[index];
        }
        console.log(locations.length);
        return new MahjongGame(tiles)
    }

    constructor(tiles: Tile[]) {
        this.Tiles = tiles;
    }


}