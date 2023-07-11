import type { Range } from "../types/range";

export type TileType = "Character" | "Circle" | "Bamboo" | "Season" | "Flower" | "Wind" | "Dragon"
export type TileNumber = Range<1, 10>;
export type Location = { X: number, Y: number, Z: number}

const defaultLocation: Location = { X: -1, Y: -1, Z:-1 }

export class Tile {
    readonly TileType: TileType;
    readonly TileNumber: TileNumber;
    private _location: Location;
    public IsSelected: boolean = false;
    public IsRemoved: boolean = false;
    

    constructor(tileType: TileType, number: TileNumber) {
        this.TileType = tileType;
        this.TileNumber = number;
        this._location = defaultLocation;
    }

    public get Location(): Location {
        return this._location;
    }

    public set Location(location: Location) {
        this._location = location;
    }

    public matches(tile: Tile): boolean {
        if (this.TileType == "Season" || this.TileType == "Flower") {
            return tile.TileType == this.TileType
        }

        // maybe something with dragons

        return tile.TileType == this.TileType && tile.TileNumber == this.TileNumber;
    }
}