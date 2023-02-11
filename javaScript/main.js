// weekly tasks

console.log(weeklyTasks);
let wTasks = JSON.parse(weeklyTasks);

// cards from bootstrap
for (let val of wTasks) {
    document.getElementById("tasks").innerHTML +=
        `<div>
        <div class="card p-2" style="width: 25rem;">
        <li class="list-group-item"><span class="bg-primary text-white mb-2 py-0.75 px-1 rounded-2">Task</span></li>
        <img src="${val.image}" class="card-img-top mt-1" alt="${val.taskName}">
        <div class="card-body">
          <h5 class="card-title">${val.taskName}</h5>
          <p class="card-text">${val.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item "><i class="fa-solid fa-triangle-exclamation "style="width: 1rem;"></i> <span class="fw-bold">Priority level:<p class="btn btn-success priorityBtn h-auto" style="width:1rem;">${val.importance}</p> </span><br><i class="fa-solid fa-map-location-dot"style="width:1rem;" ></i> <span class="fw-bold">Location:</span> ${val.location}</li>
          <li class="list-group-item"></li>
        </ul>
      </div>
      </div>`;
}

let btns = document.getElementsByName("priorityBtn");
let importance = document.getElementById("importance").value;
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {

        console.log(wTasks[i].importance);
        document.getElementById("importance")[i].innerHTML = wTasks[i].importance;
    })

    if (importance.length >= 5) {
        document.getElementById("color").style.color = "green";
    } else {
        document.getElementById("color").style.color = "red";
    }
}