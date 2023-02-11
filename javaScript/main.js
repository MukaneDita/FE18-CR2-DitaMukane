let wTasks = JSON.parse(weeklyTasks);
console.log(wTasks);

// cards from bootstrap
for (let val of wTasks) {
    document.getElementById("tasks").innerHTML +=
        `<div  style=" padding-top: 2rem; padding-bottom: 2rem">
        <div class="card p-2 text-sm" style="width: 23rem">
        <li class="list-group-item"><span class="bg-primary text-white mb-2 py-0.75 px-1 rounded-2">Task</span> <span></span></li>
        <img src="${val.image}" class="card-img-top mt-1" style="height: 23rem" alt="${val.taskName}"> 
        <div class="card-body text-center"  style="height: 10rem" >
          <h5 class="card-title">${val.taskName}</h5>
          <p class="card-text ">${val.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item ">
            <i class="fa-solid fa-triangle-exclamation "style="width: 1rem"></i> 
              <span class="fw-bold">Priority level:<p class="btn btn-success id="clickOnThis" h-auto" likeBtn>${val.importance}</p></span><br>
              <i class="fa-solid fa-map-location-dot"style="width:1rem;" ></i> 
              <span class="fw-bold">Location:</span> ${val.location}</li>
          <li class="list-group-item text-end"> 
            <p class="btn btn-danger id="buttons" h-auto" likeBtn>Delete</p>
            <p class="btn btn-success id="buttons" h-auto" likeBtn>Done</p>
          </li>
        </ul>
      </div>
      </div>`;
}
let btns = document.getElementsByName("likeBtn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        wTasks[i].importance++;
        console.log(wTasks[i].importance);
        document.getElementById("clickOnThis")[i].innerHTML = wTasks[i].importance;
    })
    if (btns.length < 2) {
        document.getElementById("clickOnThis").style.backgroundColor = "green";
    } else if (btns.length < 4) {
        document.getElementById("clickOnThis").style.backgroundColor = "yellow";
    } else {
        document.getElementById("clickOnThis").style.backgroundColor = "red";
    }
}