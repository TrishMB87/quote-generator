const generateQuote = function() {
    const quotes = [
    {
     character: "Stitch from Lilo and Stitch",   
     quote: "“Ohana means family. Family means no one gets left behind or forgotten.” "
    },

    {
     character: "Baymax from Big Hero 6",   
     quote: "I have some concerns."
    },

    {
    character: "Laverne from The Hunchback of Notre Dame",   
    quote: "If watching is all you're gonna do, then you're gonna watch your life go by without ya."
    },

    {
    character: "Rafiki from The Lion King",   
    quote: "Oh yes, the past can hurt, but the way I see it you can either run from it or learn from it."
    },

    {
    character: "Grandmother Willow from Pocahontas",   
    quote: "Sometimes the right path is not the easiest one."
    },

    {
    character: "Dory from Finding Nemo",   
    quote: "Just keep swimming!"
    },
   
    {
    character: "Edna Mode from The Incredibles",   
    quote: "I never look back darling. It distracts from the now."
    },
   
    {
    character: "Sadness from Inside Out",   
    quote: "Crying helps me slow down and obsess over the weight of life's problems."
    },
   
    {
    character: "Emperor of China in Mulan",   
    quote: "The flower that blooms in adversity is the most rare and beautiful of all."
    },
   
    {
    character: "Dug from Up",   
    quote: "SQUIRREL!!!"
    }

];

let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("character").innerHTML = quotes[arrayIndex].character;

}
window.onload = function() {
    generateQuote();
    document.getElementById("random").addEventListener('click', generateQuote);
}
