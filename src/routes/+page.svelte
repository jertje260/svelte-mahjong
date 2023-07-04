<script lang="ts">
	import Mahjong from "../components/mahjong.svelte";

    let hasGame = false;
    let selected: Layout;
    
    const options: Layout[] = ["Classic", "Pyramid", "Square"]

    const startGame = () => {
        console.log(selected);
        hasGame = true;
    }
</script>


<h1>Welcome to Mahjong solitair</h1>
<p class="small">Mahjong tileset designed by <a href="https://www.codeinferno.com" >Code Inferno</a></p>
{#if !hasGame}
<form on:submit|preventDefault={startGame}>
    <p>Pick your starting layout</p>
    <select bind:value={selected}>
        {#each options as opt}
        <option value={opt}>{opt}</option>
        {/each}
    </select>
    <button type="submit" disabled={!selected}>Start Game</button>
</form>
{:else}
<Mahjong format={selected} />
{/if}


<style>
    .small {
        font-size: small;
    }
</style>