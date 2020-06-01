

var id;

function redirectHelper(e)
{
    var target=e.target;
    var id=target.getAttribute("class");
    window.document.location='./superhero_detail.html'+'?id='+id;

    return;
}

function getData()
{
    let name = document.querySelector("#super-input").value;
    let accesToken = "3436617196389496";
    let url = "https://superheroapi.com/api.php/"+accesToken+"/search/"+ name;
    fetch(url).then((res) => {return res.json()} ).then(function(data){

        var ulcontain = document.querySelector("#search-list");
        ulcontain.innerHTML='';
        if(data.response==="success")
        {
            
            let len = data.results.length;
            
            for(let i=0;i<len;i++)
            {
                id=data.results[i].id;
                var li= ulcontain.appendChild(document.createElement("li"));
                //li.innerText=data.results[i]["name"];
                li.classList.add("list-group-item");
                var check = li.appendChild(document.createElement("input"));
                check.setAttribute("id",data.results[i].name);
                check.setAttribute("name","mycheckedbox");
                check.setAttribute("type","checkbox");
                check.classList.add("form-check-input");
                var atag=li.appendChild(document.createElement("a"));
                // var detailtag = document.querySelector("#one");
                // detailtag.setAttribute("class",id);
                atag.innerText = data.results[i]["name"];
                atag.setAttribute("class",id);

                atag.addEventListener("click",function(e){redirectHelper(e)});
                
                
               
                
                
                

            }
          
            

            console.log("after loop");
            
        }
        else
        {
            var ulcontain = document.querySelector("#search-list");
            var li= ulcontain.appendChild(document.createElement("h1"));
            li.innerText="No matching search results";
        }
    });

}









var button = document.querySelector("#btn-search");

button.addEventListener("click",getData);

function getCheckedvalue()
{
    var checkedBoxes = document.querySelectorAll('input[name=mycheckedbox]:checked');
    var name = [];
    alert(checkedBoxes.length + " heros added to favourites");
    for(var i=0;i<checkedBoxes.length;i++)
    {
        let id = checkedBoxes[i].getAttribute("id");
        name.push(id);
        

    }

    localStorage.setItem("fav-heroes",name);
    


}


var btn = document.querySelector("#fav");
btn.addEventListener("click",getCheckedvalue);




















