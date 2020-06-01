
var fav = document.querySelector("#fav-list");






var items={...localStorage};
var heroes=items["fav-heroes"].split(',');
for(let i=0;i<heroes.length;i++)
{
    
    let li = fav.appendChild(document.createElement('li'));
    li.classList.add('list-group-item');
    li.innerText=heroes[i];
    console.log(heroes[i]);
     
}

