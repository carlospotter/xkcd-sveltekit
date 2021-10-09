<!-- JS -->
<script>
    export let xkcdComic;
</script>


<!-- HTML -->
<div class="mt-5">
    <p class="text-3xl text-center" style="font-family: 'Shadows Into Light', cursive;">{xkcdComic.num} - {xkcdComic.title}</p>

    <img class="mx-auto object-contain my-5" src={xkcdComic.img} alt="comic">

    <p class="text-sm text-center mt-5" style="font-family: 'Shadows Into Light', cursive;">Source: <a href="https://xkcd.com/{xkcdComic.num}" target="_blank">https://xkcd.com/{xkcdComic.num}</a></p>
</div>

<!-- CSS -->


