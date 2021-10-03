export async function get() {
    const urlPrefix = `https://xkcd.com/`;
    const urlSuffix = `info.0.json`;

    try {
        const resLastComic = await fetch(urlPrefix + urlSuffix);
        const jsonLastComic = await resLastComic.json();
        const lastComic = {
            title: jsonLastComic.title,
            num: jsonLastComic.num,
            img: jsonLastComic.img
        };

        //console.log(lastComic);

        return {
            status: 200,
            body: lastComic
        };
    } catch {
        return {
            status: 500
        };
    }
}