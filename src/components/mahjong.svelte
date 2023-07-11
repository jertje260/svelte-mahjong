<script lang="ts">
	import { MahjongGame } from '../models/mahjongGame';
	import type { Tile } from '../models/tile';
	import MahjongTile from './mahjongTile.svelte';
	export let format: Layout;

	let game: MahjongGame = MahjongGame.Create(format);

	const tileClicked = (tile: Tile) => {
		game.select(tile);
		game = game;
	}

	const getTiles = (game: MahjongGame): Tile[] => {
		return game.Tiles.filter(c=> c.Location.Z !== -1);
	}
</script>

<div class="board">
	<div class="layer" style="grid-template-columns: repeat({game.BoardSize.X+2}, 1fr); grid-template-rows: repeat({game.BoardSize.Y+2}, 1fr);">
		{#each getTiles(game) as t}
			<MahjongTile tile={t} handler={tileClicked}/>
		{/each}
	</div>
</div>

<style>
	.board {
		position: relative;
		padding-top: 30px;
	}
	.layer {
		position: absolute;
		display: grid;
	}
</style>