let wTasks = JSON.parse(weeklyTasks);
console.log(wTasks);
const sortBtn = document.getElementById("sort");

for (let i = 0; i < wTasks.length; i++) {
    document.getElementById("wrapper").innerHTML +=
        `<div class="card1" style="display:flex; justify-content: center;">
        <div  style=" padding-top: 2rem; padding-bottom: 2rem">
        <div class="card text-sm shadow p-2 mb-3 bg-body rounded" style="width: 20rem; height: 40rem;">
        <li class="list-group-item"><span class="bg-dark text-white mb-2 py-1 px-1 rounded-1">Task</span> <span class="float-end"><i class="bi bi-bookmark "></i><i class="bi bi-three-dots-vertical"></i></span></li>
        <img src="${wTasks[i].image}" class="card-img-top mt-1"  alt="${wTasks[i].taskName}"> 
        <div class="card-body text-center"  style="height: 10rem" >
          <h5 class="card-title">${wTasks[i].taskName}</h5>
          <p class="card-text ">${wTasks[i].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item ">
            <i class="fa-solid fa-triangle-exclamation "style="width: 1rem"></i> 
              <span class="fw-bold">Priority level:<p class="btn btn-success ms-1 h-auto likeBtn"" >${wTasks[i].importance}</p>
  </span><br>
              <i class="fa-solid fa-map-location-dot"></i> 
              <span class="fw-bold">Location:</span> ${wTasks[i].location}</li>
          <li class="list-group-item text-end"> 
            <p class="del btn btn-danger  h-auto" id="buttons" <i class="bi bi-trash3-fill"></i> Delete </p>
            <p class="btn btn-success h-auto done"  id="done" ><i class="bi bi-check-circle-fill"></i> Done</p>
          </li>
        </ul>
      </div>
      </div>
      </div>`;
};



let btns = document.getElementsByClassName("likeBtn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        if (wTasks[i].importance >= 5) {
            wTasks[i].importance = -1
        }
        wTasks[i].importance++;

        console.log(wTasks[i].importance);

        document.getElementsByClassName("likeBtn")[i].innerHTML = wTasks[i].importance;
        if (wTasks[i].importance < 2) {
            btns[i].style.backgroundColor = "green";
            btns[i].style.color = "white";
        } else if (wTasks[i].importance < 4) {
            btns[i].style.backgroundColor = "yellow";
            btns[i].style.color = "black";
        } else if (wTasks[i].importance >= 4 && wTasks[i].importance <= 5) {
            btns[i].style.backgroundColor = "red";
            btns[i].style.color = "white";
        }
    })
};
// delete btn
let del = document.getElementsByClassName("del");

for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click", function() {
        // this.style.visibility = "hidden";
        document.getElementsByClassName("card1")[i].style.display = "none";
    })
}
// done btn
let done = document.getElementsByClassName("done");

for (let i = 0; i < done.length; i++) {
    done[i].addEventListener("click", function() {
        // this.style.visibility = "hidden";
        document.getElementsByClassName("card")[i].style.opacity = "0.5";
    })
}

function createHTML() {
    document.getElementById("wrapper").innerHTML = "";
    // cards from bootstrap
    for (let i = 0; i < wTasks.length; i++) {
        document.getElementById("wrapper").innerHTML +=
            `<div class="card1" style="display:flex; justify-content: center;">
            <div  style=" padding-top: 2rem; padding-bottom: 2rem">
        <div class="card text-sm shadow p-2 mb-3 bg-body rounded" style="width: 20rem; height: 40rem;">
        <li class="list-group-item"><span class="bg-dark text-white mb-2 py-1 px-1 rounded-1">Task</span> <span class="float-end"><i class="bi bi-bookmark "></i><i class="bi bi-three-dots-vertical"></i></span></li>
        <img src="${wTasks[i].image}" class="card-img-top mt-1"  alt="${wTasks[i].taskName}"> 
        <div class="card-body text-center"  style="height: 10rem" >
          <h5 class="card-title">${wTasks[i].taskName}</h5>
          <p class="card-text ">${wTasks[i].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item ">
            <i class="fa-solid fa-triangle-exclamation "style="width: 1rem"></i> 
              <span class="fw-bold">Priority level:<p class="btn btn-success ms-1 h-auto likeBtn"" >${wTasks[i].importance}</p>
  </span><br>
              <i class="fa-solid fa-map-location-dot"></i> 
              <span class="fw-bold">Location:</span> ${wTasks[i].location}</li>
          <li class="list-group-item text-end"> 
            <p class="del btn btn-danger  h-auto" id="buttons" <i class="bi bi-trash3-fill"></i> Delete </p>
            <p class="btn btn-success h-auto done"  id="done" ><i class="bi bi-check-circle-fill"></i> Done</p>
          </li>
        </ul>
      </div>
      </div>
      </div>`;
    };




    let btns = document.getElementsByClassName("likeBtn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            if (wTasks[i].importance >= 5) {
                wTasks[i].importance = -1
            }
            wTasks[i].importance++;

            console.log(wTasks[i].importance);

            document.getElementsByClassName("likeBtn")[i].innerHTML = wTasks[i].importance;
            if (wTasks[i].importance < 2) {
                btns[i].style.backgroundColor = "green";
                btns[i].style.color = "white";
            } else if (wTasks[i].importance < 4) {
                btns[i].style.backgroundColor = "yellow";
                btns[i].style.color = "black";
            } else if (wTasks[i].importance >= 4 && wTasks[i].importance <= 5) {
                btns[i].style.backgroundColor = "red";
                btns[i].style.color = "white";
            }
        })
    };
    // delete btn
    let del = document.getElementsByClassName("del");

    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener("click", function() {
            // this.style.visibility = "hidden";
            document.getElementsByClassName("card1")[i].style.display = "none";
        })
    }
    // done btn
    let done = document.getElementsByClassName("done");

    for (let i = 0; i < done.length; i++) {
        done[i].addEventListener("click", function() {
            // this.style.visibility = "hidden";
            document.getElementsByClassName("card")[i].style.opacity = "0.5";
        })
    }
}

sortBtn.addEventListener("click", function() {
    wTasks.sort((a, b) => b.importance - a.importance);
    console.log(wTasks);
    createHTML();
})