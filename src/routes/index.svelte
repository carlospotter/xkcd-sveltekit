<!-- JS -->
<script context="module">
    export async function load() {
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
        const apiUrl = `api/` + type;
        const res = await fetch(apiUrl)

        comic = await res.json();

        if (type === "last") {
            lastComic = comic.num;
        }

        //console.log(comic);
    }   
    
    const prevComic = async (num) => {
        if (num > 1) {
            const apiUrl = `api/` + (num - 1);
            const res = await fetch(apiUrl)

            comic = await res.json();    
        } else {
            console.log("This is the first comic!")
        }

    }

    const nextComic = async (num) => {
        if (num < lastComic) {
            const apiUrl = `api/` + (num + 1);
            const res = await fetch(apiUrl)

            comic = await res.json();    
        } else {
            console.log("This is the last comic!")
        }
    }

    // TODO: lazy load
</script>


<!-- HTML -->

<div class="max-w-2xl mx-auto my-8 grid grid-cols-4">
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
