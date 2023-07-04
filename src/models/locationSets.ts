import type { Location } from "./tile";

export const LocationSets: Map<Layout, Location[]> = new Map<Layout, Location[]>(
    [
        ["Classic", [
            // first layer
            ...GenerateRow({ X: 2, Y: 0, Z: 0 }, 12), 
            ...GenerateRow({ X: 6, Y: 2, Z: 0 }, 8), 
            ...GenerateRow({ X: 4, Y: 4, Z: 0 }, 10), 
            ...GenerateRow({ X: 2, Y: 6, Z: 0 }, 12), 
            { X: 0, Y: 7, Z: 0 }, { X: 26, Y: 7, Z: 0 }, { X: 28, Y: 7, Z: 0 }, 
            ...GenerateRow({ X: 2, Y: 8, Z: 0 }, 12),
            ...GenerateRow({ X: 4, Y: 10, Z: 0 }, 10), 
            ...GenerateRow({ X: 6, Y: 12, Z: 0 }, 8), 
            ...GenerateRow({ X: 2, Y: 14, Z: 0 }, 12), 
            // second layer
            ...GenerateRow({ X: 8, Y: 2, Z: 1 }, 6), 
            ...GenerateRow({ X: 8, Y: 4, Z: 1 }, 6), 
            ...GenerateRow({ X: 8, Y: 6, Z: 1 }, 6), 
            ...GenerateRow({ X: 8, Y: 8, Z: 1 }, 6),
            ...GenerateRow({ X: 8, Y: 10, Z: 1 }, 6),
            ...GenerateRow({ X: 8, Y: 12, Z: 1 }, 6),
            // third layer
            ...GenerateRow({ X: 10, Y: 4, Z: 2 }, 4), 
            ...GenerateRow({ X: 10, Y: 6, Z: 2 }, 4), 
            ...GenerateRow({ X: 10, Y: 8, Z: 2 }, 4), 
            ...GenerateRow({ X: 10, Y: 10, Z: 2 }, 4),
            // fourth layer
            { X: 12, Y: 6, Z: 3 }, 
            { X: 14, Y: 6, Z: 3 }, 
            { X: 12, Y: 8, Z: 3 }, 
            { X: 14, Y: 8, Z: 3 },
            // fifth layer
            { X: 13, Y: 7, Z: 4 }
        ]]
    ]
)

function GenerateRow(startLocation: Location, itemsXDirection: number): Location[] {
    const locations = [];
    for (let index = 0; index < itemsXDirection; index++) {
        locations.push({ X: startLocation.X + 2 * index, Y: startLocation.Y, Z: startLocation.Z })
    }
    return locations;
}