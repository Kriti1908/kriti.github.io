count2 = localStorage.getItem('count2');
count2 = parseInt(count2); // because localstorage stores everything in strings

// First time the value does not exist...
if(isNaN(count2)) {
  count2 = 0; 
}


var button2 = document.getElementById("like2");

    
button2.onclick = function() {
    count2 += 1;
    document.getElementById('lnum2').innerHTML=count2+" likes";
    localStorage.setItem("count2", count2);
};

document.getElementById('lnum2').innerHTML=count2+" likes";


/////////////////////////////////////



const field2 = document.querySelector('textarea');
const comments2 = document.getElementById('comment-box');
var comments_arr2 = [];

if(!localStorage.commentData2){localStorage.commentData2 = [];}
else{
  comments_arr2 = JSON.parse(localStorage.commentData2);
}

const display_comments = () => {
  let list2 = '<ul>';
   comments_arr2.forEach(comment => {
    list2 += `<li>${comment}</li>`;
  })
  list2 += '</ul>';
  comments2.innerHTML = list2;
}

window.addEventListener('load', display_comments);

submit.onclick = function(event){
    event.preventDefault();
    const content2 = field2.value;
    if(content2.length > 0)
    { 
        comments_arr2.push(content2);
        localStorage.commentData2 = JSON.stringify(comments_arr2);
        display_comments();
        field.value = '';
    }
}