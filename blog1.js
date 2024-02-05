
count = localStorage.getItem('count');
count = parseInt(count); // because localstorage stores everything in strings

// First time the value does not exist...
if(isNaN(count)) {
  count = 0; 
}


var button = document.getElementById("like");

    
button.onclick = function() {
    count += 1;
    document.getElementById('lnum').innerHTML=count+" likes";
    localStorage.setItem("count", count);
};

document.getElementById('lnum').innerHTML=count+" likes";


/////////////////////////////////////



const field = document.querySelector('textarea');
const comments = document.getElementById('comment-box');
var comments_arr = [];

if(!localStorage.commentData){localStorage.commentData = [];}
else{
  comments_arr = JSON.parse(localStorage.commentData);
}

const display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

window.addEventListener('load', display_comments);

submit.onclick = function(event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0)
    { 
        comments_arr.push(content);
        localStorage.commentData = JSON.stringify(comments_arr);
        display_comments();
        field.value = '';
    }
}