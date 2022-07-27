import axios from 'axios';

let allQuotes ;
const fetched = async () => {
    let {data} = await axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
     allQuotes = data;
     generate_random(data);
}

fetched();
const generate_random = (data) => {
    let random_num = Math.floor(Math.random()*data.quotes.length);
    let random_quote = data.quotes[random_num];
    
    document.querySelector('.display-area').innerHTML = `<h2>${random_quote.quote}</h2>`
}
    

document.querySelector('.generate').onclick = ()=> {generate_random(allQuotes)};


