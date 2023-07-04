<script lang="ts">
	import { MahjongGame } from '../models/mahjongGame';
	import MahjongTile from './mahjongTile.svelte';
	export let format: Layout;

	let game: MahjongGame = MahjongGame.Create(format);
</script>

<div class="board">
    {#each game.Tiles as t}
        <MahjongTile tile={t}/>
    {/each}

</div>

<style>
	.board {
		position: relative;
	}
</style>