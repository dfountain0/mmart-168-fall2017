const beyonceTweet = {
    name: 'Beyoncé',
    handle: '@beyonce',
    text: '#LEMONADE the Visual Album.'
}

const links = ['https://twitter.com/mmart168',
                'https://twitter.com/beyonce',
                'http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg']

const modifyText = () => {
  // YOUR CODE HERE
  document.querySelector('#message2').innerHTML = beyonceTweet.text
  document.querySelector('#link2').innerHTML = beyonceTweet.name
  document.querySelector('#user2').innerHTML = beyonceTweet.handle
  console.log('modifying text')
}


//part 1. change the text of Link2 and user2
//to be the text and username from the BeyonceText-> text of tweet
// object, respectively
//<a id="link2" href=



const changeLinkAndImageAttributes = () => {
  // YOUR CODE HERE
document.querySelector('#link1').href = links[0]
document.querySelector('#link2').href = links[1]
document.querySelector('#beyonce').src = links[2]
  console.log('changing link attribute')
}

const changeClassAttribute = () => {
  document.querySelector('#tweet1').className = 'tweet-pink'
  document.querySelector('#tweet2').className = 'tweet-pink'
  // YOUR CODE HERE
  console.log('changing class attribute')
}

const appendElements = () => {
  document.querySelector('#tweet1').innerHTML += '<a href="https://f17.ebook.mmart.us/"> Intro to JavaScript</a>'
  document.querySelector('tweet1').innerHTML += '<img src="https://images-na.ssl-images-amazon.com/images/I/A15dQM39ELL._CR0,0,3840,2880_._SL1000_.jpg">'
  // YOUR CODE HERE
  console.log('appending element')
}
