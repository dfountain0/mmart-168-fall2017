console.log(tweets)
const tweet1 = () => {
    console.log(tweets.statuses[0])
    document.querySelector('#tweet3 .message').innerHTML = tweets.statuses[0].text
    document.querySelector('#tweet3 .username').innerHTML = tweets.statuses[0].user.screen_name
    document.querySelector('#tweet3 .date').innerHTML = tweets.statuses[0].created_at
}

const tweet2 = () => {
  console.log(tweets.statuses[0])
  document.querySelector('#tweet2 .message').innerHTML = tweets.statuses[1].text
  document.queryselector('#tweet2 .username').innerHTML = tweets.statuses[1].user.screen_name
  document.querySelector('#tweet2 .date').innerHTML = tweets.statuses[1].created_at
    //TODO: output the contents of the second tweet below the first one:
}

const tweet3 = () => {
    //TODO:  output the contents of the third tweet below the second one:
    console.log(tweets.statuses[0])
    document.querySelector('#tweet1 .message').innerHTML = tweets.statuses[2].text
    document.queryselector('#tweet1 .username').innerHTML = tweets.statuses[2].user.screen_name
    document.querySelector('#tweet1 .date').innerHTML = tweets.statuses[2].created_at
}

const showAll = () => {
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

    // tweet 1:
    var newDiv = document.createElement('div')
    var newContent = document.createTextNode(tweets.statuses[0].text)
    newDiv.appendChild(newContent) //add the text node to the newly created div.
    document.getElementById('all').appendChild(newDiv)

    // tweet 2:
    newDiv = document.createElement('div')
    newContent = document.createTextNode(tweets.statuses[1].text)
    newDiv.appendChild(newContent) //add the text node to the newly created div.
    document.getElementById('all').appendChild(newDiv)

    //.....
}
