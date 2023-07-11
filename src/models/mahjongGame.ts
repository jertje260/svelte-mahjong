import { type TileType, type TileNumber, Tile, type Location } from "./tile";
import { shuffle } from "../helpers/shuffle";
import { LocationSets } from "./locationSets";
export type SelectResult = "Selected" | "NotFree" | "Matched" | "NotMatching" | "Deselected"

export class MahjongGame {
    readonly BoardSize: Location
    readonly Tiles: Tile[];
    private selectedTile: Tile | null = null;

    public select(tile: Tile): SelectResult {
        if(tile === this.selectedTile){
            tile.IsSelected = false;
            this.selectedTile = null;
            return "Deselected"
        }
        if(!isFreeTile(tile)){
            return "NotFree"
        }

        if(this.selectedTile == null){
            this.selectedTile = tile;
            tile.IsSelected = true;
            return "Selected"
        }

        if(!this.selectedTile.matches(tile)){
            this.selectedTile.IsSelected = false;
            tile.IsSelected = false;
            this.selectedTile = null;
            return "NotMatching"
        }

        this.selectedTile.IsRemoved = true;
        tile.IsRemoved = true;

        this.selectedTile = null;
        return "Matched"
    }

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
        this.BoardSize = {
            X: Math.max(...tiles.map(({Location}) => Location.X )),
            Y: Math.max(...tiles.map(({Location}) => Location.Y )),
            Z: Math.max(...tiles.map(({Location}) => Location.Z )),
        }
    }


}

function isFreeTile(tile: Tile): boolean {
    // check for tiles on top
    // check for either left or right side free
    return true;
}
