export async function get({params}){
    const comic = params.comic;

    const urlPrefix = `https://xkcd.com/`;
    const urlSuffix = `info.0.json`;

    try {
        const resNumComic = await fetch(urlPrefix + comic + '/' + urlSuffix);
        const jsonNumComic = await resNumComic.json();
        const numComic = {
            title: jsonNumComic.title,
            num: jsonNumComic.num,
            img: jsonNumComic.img
        };
    
        //console.log(numComic);
    
        return {
            status: 200,
            body: numComic
        };
    } catch {
        return {
            status: 500
        };
    }
    
}