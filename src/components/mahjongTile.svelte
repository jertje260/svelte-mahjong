<script lang="ts">
    import { Tile } from "../models/tile";
    export let tile: Tile;

    const scaleFactor = 0.75;
    const width = 128 * scaleFactor;
    const height = 178 * scaleFactor;


    const halfWidth = width /2;
    const halfHeight = height/2;
    const XZOffset = -8
    const YZOffset = 10
</script>

<!-- style="margin-bottom: {bottomOffset}px; margin-right: {rightOffset}px;" -->
<img src="/tiles/{tile.TileType.toLocaleLowerCase()}{tile.TileNumber}.png" alt="{tile.TileType}{tile.TileNumber}" style="top:{halfHeight * tile.Location.Y+ tile.Location.Z*XZOffset}px; left:{halfWidth * tile.Location.X+ tile.Location.Z*YZOffset}px; z-index: {tile.Location.Z}px; width:{width}px; height:{height}px"/>

<style>
    img{
        position: absolute;
    }
</style>