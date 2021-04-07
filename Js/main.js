let theInput = document.querySelector(".get_repos input");

let theButton = document.querySelector(".get_button");

let showData = document.querySelector(".show_data");


theButton.onclick = getTheData;

function getTheData() {
  
  if (theInput.value == "") {
   showData.innerHTML = "<span>this field can't be empty</span>";
  }else{
    
    fetch("https://api.github.com/users/Abdellah45/repos")
     .then(res => res.json())
     .then(repos => {
       showData.innerHTML = "";
       
       repos.forEach(repo => {
         
         let mainDiv = document.createElement("div");
         
         let repoName = document.createTextNode(repo.name);
         
         mainDiv.appendChild(repoName);
         
         let Url = document.createElement("a");
         
         let UrlText = document.createTextNode("visit");
         
         Url.appendChild(UrlText);
         
         Url.href = `https:\\\\github.com\\Abdellah45\\${repo.name}`;
         
         Url.setAttribute("target","_blanck");
         
         mainDiv.appendChild(Url);
         
         let startSpan = document.createElement("span");
         
         let startCount = document.createTextNode(`Starts ${repo.stargazers_count}`);
         
         startSpan.appendChild(startCount);
         
         mainDiv.appendChild(startSpan);
         
         mainDiv.className = "data_box";
         showData.appendChild(mainDiv);
         
       });
       
     })
  }
}
