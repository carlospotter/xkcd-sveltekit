export async function get() {
    const urlPrefix = `https://xkcd.com/`;
    const urlSuffix = `info.0.json`;

    const resLastComic = await fetch(urlPrefix + urlSuffix);
    const jsonLastComic = await resLastComic.json();
    const lastComic = jsonLastComic.num;

    // Search for a random comic:
    const randomIndex = Math.floor(Math.random() * lastComic);

    const resRandomComic = await fetch(urlPrefix + randomIndex + `/` + urlSuffix);
    const jsonRandomComic = await resRandomComic.json();
    const randomComic = {
        title: jsonRandomComic.title,
        num: jsonRandomComic.num,
        img: jsonRandomComic.img
    };

    console.log(randomComic);

    return {
        status: 200,
        body: randomComic
    };
}