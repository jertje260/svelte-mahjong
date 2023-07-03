<script lang="ts">
    import { Tile } from "../models/tile";
    export let tile: Tile
</script>

<div>
    <span>{tile.TileType}</span>
    {#if tile.TileNumber != 0}
        <span>{tile.TileNumber}</span>
    {/if}
</div>