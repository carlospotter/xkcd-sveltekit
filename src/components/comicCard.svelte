<!-- JS -->
<script>
    export let xkcdComic;
</script>


<!-- HTML -->
<div class="mt-5">
    <p class="text-3xl text-center" style="font-family: 'Shadows Into Light', cursive;">{xkcdComic.num} - {xkcdComic.title}</p>

    <img class="mx-auto object-contain my-5" src={xkcdComic.img} alt="comic">
</div>


<!-- CSS -->
