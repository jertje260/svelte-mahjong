<script lang="ts">
    import { Tile } from "../models/tile";
    export let tile: Tile;
    export let handler: (t: Tile) => void;
    let src = `/tiles/${tile.TileType.toLocaleLowerCase()}${tile.TileNumber}.png`

    const scaleFactor = 0.75;
    const width = 128 * scaleFactor;
    const height = 178 * scaleFactor;

    const XZOffset = -8
    const YZOffset = 10
    const top = tile.Location.Z*XZOffset;
    const left = tile.Location.Z*YZOffset;

    function clickTile(){
        handler(tile);
        tile = tile;
    }
</script>

<div class="tile" style="grid-column-start: {tile.Location.X+1}; grid-row-start: {tile.Location.Y+1}; width: {width}px; height: {height}px; {tile.IsRemoved? "display:none": ""}">
<form on:submit|preventDefault={clickTile} style="top:{top}px; left:{left}px; z-index: {tile.Location.Z}px;">
<button 
    style="background-image: url({src});"
    class="{tile.IsSelected? "selected": ""}" 
    type="submit">
    <span class="sr-only">{tile.TileType.toLocaleLowerCase()}:{tile.TileNumber}</span>
</button>
</form>
</div>

<style>
    .tile {
        grid-column-end: span 2;
        grid-row-end: span 2;
        position: relative;
    }
    form {
        width: 100%;
        height: 100%;
        position: absolute;
    }
	button {
        padding: 0;
        border: none;
        background: none;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: var(--url);
        width: 100%;
        height: 100%;
	}
    .sr-only {
        display: none;;
    }
    .selected {
        outline: 5px solid green;
        outline-offset: -5px;
    }

    button:focus-visible, button:hover {
        outline: none;
        border: 5px solid orange;
    }
</style>
