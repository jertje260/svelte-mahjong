<script lang="ts">
	import { Tile, type TileNumber, type TileType } from '../models/tile';
	import MahjongTile from './mahjongTile.svelte';
	export let format: Layout;

	let tiles: Tile[] = [];

	const generateTileSet = () => {
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
				if (number > 4 && fourOptionSuites.indexOf(suite) !== -1) {
					return;
				}
				let amount = 4;
				switch (suite) {
					case 'Flower':
					case 'Season':
						amount = 1;
						break;
					case 'Dragon':
						amount = 3;
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
	};

    function shuffle(array: any[]) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function setLocations() {
        
    }

	generateTileSet();

    setLocations();
</script>

<div class="grid">
    {#each tiles as t}
        <MahjongTile tile={t}/>
    {/each}

</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>