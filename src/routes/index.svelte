<!-- JS -->
<script context="module">
    export async function load() {
        // TODO: Environment variables:
        const apiUrl = `http://localhost:3000/api/last`;

        let comic = await fetch(apiUrl).then(res => res.json());

        let lastComic = comic.num;

        return {props: {comic, lastComic}};
    }
    
    // export const hydrate = true;
</script>

<script>
    import ComicCard from "../components/comicCard.svelte";

    export let comic;

    export let lastComic;

    const fetchComic = async (type) => {
        // TODO: Environment variables:
        const apiUrl = `http://localhost:3000/api/` + type;
        const res = await fetch(apiUrl)

        comic = await res.json();

        if (type === "last") {
            lastComic = comic.num;
        }

        //console.log(comic);
    }   
    
    const prevComic = async (num) => {
        // TODO: Environment variables:
        if (num > 1){
            const apiUrl = `http://localhost:3000/api/` + (num - 1);
            const res = await fetch(apiUrl)

            comic = await res.json();    
        }
    }

    const nextComic = async (num) => {
        // TODO: Environment variables:
        if (num < lastComic) {
            const apiUrl = `http://localhost:3000/api/` + (num + 1);
            const res = await fetch(apiUrl)

            comic = await res.json();    
        }
    }

    // TODO: lazy load
</script>


<!-- HTML -->
<h1>XKCD</h1>
<!-- <p>{comic.title}</p>

<img src={comic.img} alt="comic"> -->

<div>
    <button class="btnPrev" on:click={() => prevComic(comic.num)}>
        Previous
    </button>

    <button class="btnLast" on:click={() => fetchComic("last")}>
        Last
    </button>
    
    <button class="btnRandom" on:click={() => fetchComic("random")}>
        Random
    </button>

    <button class="btnNext" on:click={() => nextComic(comic.num)}>
        Next
    </button>
</div>

<ComicCard xkcdComic = {comic}></ComicCard>

<!-- CSS -->
<style>
    /* TODO: Add Tailwind CSS to the project */
    h1 {
        text-align: center;
    }
</style>
