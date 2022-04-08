AOS.init();
let realData="";
let quotesData="";
const click_Button = document.getElementById("click_Button");
const quote_Author = document.getElementById("author");  
const text_Quote=document.getElementById("quotes");
const tweetMe= document.getElementById("tweetMe");

const twitterOpen = ()=>{
    const openedTwitter = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(openedTwitter);
}
const getNewQuote = () => {
    let rnumber = Math.floor(Math.random() *10);
    //  console.log(realData[rnumber].text);
    //  console.log(realData[rnumber].author);  
    quotesData=realData[rnumber]; 
    text_Quote.innerText = `${quotesData.text}`;
      quotesData.author == null ? (quote_Author.innerText="unknown") :  (quote_Author.innerText = `By ${quotesData.author}`);
}
const getQuotes = async () =>{
    const apiQuote = "https://type.fit/api/quotes";
    try {
       let data = await fetch(apiQuote);
        realData= await data.json();
        // console.log(realData[10].text);
    //    console.log(realData[10].author);   
    getNewQuote();
    }
     catch (error) {
       
                    }
                             }

getQuotes();

click_Button.addEventListener("click", getNewQuote);
tweetMe.addEventListener("click", twitterOpen);