async function getData(){
    const res = await fetch ("https://api.quotable.io/random?tags=technology",
    {
        cache:"no-store",
    });
    return res.json();
}
export default async function Home(){
    const quote = await getData();
    return<div> {quote.content} </div>;
};