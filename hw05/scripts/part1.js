let language = 'English'
let languageCode = 'en'
let jsonData


const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language

    //clear form:
    getData()
}

const clearData = () => {
    const element = document.getElementById('results')
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

//Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
const getData = () => {

    const term = document.getElementById('term').value
    console.log(term)
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    console.log(twitterURL)
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            let div
            let textNode

            // output statuses:
            console.log(json.statuses)

            // clear out existing tweets:
            clearData()
            /* 1.The reverseText function takes in a parameter called 'string'.
            2. We split each character in the string using ".split" whichthen seperates
            each character in the string and puts them in an array in which each
            character is now an index within the array. We then set that value into
            a variable called splitString.
            3. Next we take the splitString variable and use an array method called
            ".reverse" which reverses the properties in the Array and set that value to a variable called reverseArray.
            4. Lastly we take our reverseArray variable and use another array method called
            .join and join all of the properties within the array together making them one string.
            and set that value to the last variable we will use called joinArray
            5. now we return joinArray which will give us our reversed string.*/
            function reverseText(string) {
              let splitString = string.split('')
              let reverseArray = splitString.reverse()
              let joinArray = reverseArray.join('')
              return joinArray
            }

            // ---------------------- TASK 1 -----------------------------------
            // 1. Write a function called 'reverseText' that takes a single string as an input. It should return that string with all characters reversed
            // e.g., 'Hello, world' will return 'dlrow ,olleH'
            // You can test this in the browser by updating the forEach function to reverse every tweet's text
            // HINT: This is a common interview question to screen out javascript devs who don't understand the language's native functions. Google around - you might find a good solution for this problem
            // Once you've written your reverse text function, write a comment describing how it works.

            function reverseTweet(string) {
              if (string.includes('#')) {
                return string
              } else {
                return reverseText(string)
              }
            }


            // ---------------------- TASK 2 -----------------------------------
            // 2. Now, write a function called 'reverseTweet' that takes a single string as an input. If the string contains a hashtag (#), it should return the string.
            // If it doesn't contain a hashtag, it should return the string with all characters reversed
            // Update the forEach function so that it reverses tweets that don't have hashtags
            // HINT: Strings have a useful function called indexOf that you may find useful: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
            // HINT: You already have a reverseText function laying around...

            // ---------------------- DELIVERABLE -----------------------------------
            // When somebody searches for a keyword, tweets with hashtags will appear as normal. Tweets with no hashtags will be inexplicably reversed.
            // EXTRA CREDIT: Add a class to reversed tweets to make their background red. This will require modifying the existing CSS!

            json.statuses.forEach((status) => {
                div = document.createElement('div')
                div.className = 'tweet'
                textNode = document.createTextNode(reverseTweet(status.text))


                if (!status.text.includes('#')) {
                    div.className += ' tweet-red'
                }
                div.appendChild(textNode)
                document.getElementById('results').appendChild(div)
            })

        })
}
