let language
let languageCode
/*The setLanguage function cchanges the  language of the page from Russion,English,
  or Spanish depending on what language code the code variable holds based off what
  Language the user clicks on*/
const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ht') {
        language = 'Hatian Creole'
    } else if (code === 'ar') {
        language = 'Arabic'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language
}
