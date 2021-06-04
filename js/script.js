

function getRandomQuote (){
    const quote = [
    {
        quote:"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source:"Patrick McKenzie",
        citation:"Twitter",
        year:"2020"
    },
    {
        quote:"All our dreams can come true, if we have the courage to pursue them.",
        source:"Walt Disney",
        citation:"Collected",
        year:"2012"
    },
    {
        quote:"The secret of getting ahead is getting started.",
        source:"Mark Twain",
        citation:"Web",
        year:"2013"
    },
    {
        quote:"It’s hard to beat a person who never gives up.",
        source:" Babe Ruth",
        citation:"Unknown",
        year:"2021"
    },
    {
        quote:"If people are doubting how far you can go, go so far that you can’t hear them anymore.",
        source:"Michele Ruiz",
        citation:"Web",
        year:"2015"
    },
    {
        quote:"Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.",
        source:"Joss Whedon",
        citation:"Unknown",
        year:"2020"
    },
    {
        quote:"You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.",
        source:"William W. Purkey",
        citation:"Google",
        year:"2019"
    },
    {
        quote:"Do one thing every day that scares you.",
        source:"Eleanor Roosevelt",
        citation:"Google",
        year:"2020"
    },
      {
        quote:"Whatever you are, be a good one.",
        source:"Abraham Lincoln",
        citation:"Twitter",
        year:"2010"
    }
]

    let random = Math.floor((Math.random() * quote.length))
    document.querySelector('.quote').innerText =   quote[random].quote
    document.querySelector('.source').innerText = quote[random].source
   
   let p = document.querySelector('.source')
   let span = document.createElement('span')
   let span2 = document.createElement('span')
   span.innerHTML = (` , ` + quote[random].citation)
    span2.innerHTML = (` , ` + quote[random].year)
   p.appendChild(span)
   p.appendChild(span2)
   
      
  
}

const quoteBtn = document.querySelector('.load-quote')

quoteBtn.addEventListener('click', getRandomQuote)