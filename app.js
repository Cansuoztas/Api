const apiKey= "94011cf8197348d3b6a1116fcda0abe9";
  const url ="https://newsapi.org/v2/top-headlines?country=tr&apiKey="+apiKey;


const news = async ()=> {
try{
    const res = await fetch (url);
    if(!res.ok){
        hata()
        throw new Error("İkaz")
       
    }
     const data = await res.json();
     console.log(data.articles)
     renderNews(data.articles);

}catch(err){
    console.log(err)
}
}
const renderNews = (veri)=>{
    veri.forEach((a)=>{
  let{author,description,url,urlToImage }= a
document.querySelector(
    "#news-list" ).innerHTML+=
    `<div class="card" style="width: 18rem;">
  <img src="${urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${author}</h5>
    <p class="card-text">${description}</p>
    <a href="${url}" class="card-link">Devamı</a>
  </div>`
  
 

    })
}

const hata =(e)=>{
   document.querySelector("new-list") = `${e} is not found`
}
news()


    
