const hideButton = document.querySelector('#hideButton');
const textDiv = document.querySelector('#text');

hideButton.addEventListener('click', () => {
  textDiv.style.display = 'none';
});

document.body.insertAdjacentHTML(
    "beforeend",
    "<div id ='card'> <h2>Vaniko</h2> <a href='#'>Go to Profile</a></div>"
)

const Em = document.querySelector("#card")

Em.style.backgroundColor = 'red';