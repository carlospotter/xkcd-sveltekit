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
<h1 class="text-center text-4xl" style="font-family: 'Shadows Into Light', cursive;">XKCD</h1>

<div class="max-w-4xl mx-auto my-5 grid grid-cols-4">
    <button class="w-20 mx-auto text-2xl border border-black rounded" style="font-family: 'Shadows Into Light', cursive;" on:click={() => prevComic(comic.num)}>
        Previous
    </button>

    <button class="w-20 mx-auto text-2xl border border-black rounded" style="font-family: 'Shadows Into Light', cursive;" on:click={() => fetchComic("random")}>
        Random
    </button>

    <button class="w-20 mx-auto text-2xl border border-black rounded" style="font-family: 'Shadows Into Light', cursive;" on:click={() => fetchComic("last")}>
        Last
    </button>
    
    <button class="w-20 mx-auto text-2xl border border-black rounded" style="font-family: 'Shadows Into Light', cursive;" on:click={() => nextComic(comic.num)}>
        Next
    </button>
</div>

<ComicCard xkcdComic = {comic}></ComicCard>

<!-- CSS -->
