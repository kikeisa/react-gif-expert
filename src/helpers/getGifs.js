export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=mUivZh8P09o7c5CJGdGWGlpI0iDoAHIx&q=${category}&limit=10`
    const resp = await fetch( url );

    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id    : img.id,
        title : img.title,
        url   : img.images.fixed_height.url

    }) );
    return gifs
    
    

}