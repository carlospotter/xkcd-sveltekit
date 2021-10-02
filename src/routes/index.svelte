<!-- JS -->
<script context="module">
    export async function load() {
        // TODO: Environment variables:
        const apiUrl = `http://localhost:3000/api/last`;

        let comic = await fetch(apiUrl).then(res => res.json());

        return {props: {comic}};
    }
    
    // export const hydrate = true;
</script>

<script>
    export let comic;

    const fetchComic = async (type) => {
        // TODO: Environment variables:
        const apiUrl = `http://localhost:3000/api/` + type;
        const res = await fetch(apiUrl)

        comic = await res.json();

        console.log(comic);
    }    

    // TODO: lazy load
</script>


<!-- HTML -->
<h1>XKCD</h1>
<p>{comic?.title}</p>

<img src={comic?.img} alt="comic">

<button class="btnLast" on:click={() => fetchComic("last")}>
    Get Last Comic
</button>

<button class="btnRandom" on:click={() => fetchComic("random")}>
    Get Random Comic
</button>

<!-- CSS -->
<style>
    
</style>
