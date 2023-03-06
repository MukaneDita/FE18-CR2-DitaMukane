let wTasks = JSON.parse(weeklyTasks);
console.log(wTasks);

// cards from bootstrap
for (let val of wTasks) {
    document.getElementById("tasks").innerHTML +=
        `<div  style=" padding-top: 2rem; padding-bottom: 2rem">
        <div class="card p-2 text-sm shadow p-3 mb-5 bg-body rounded" style="width: 25rem; height: 40rem;">
        <li class="list-group-item"><span class="bg-dark text-white mb-2 py-1 px-1 rounded-1">Task</span> <span class="float-end"><i class="bi bi-bookmark "></i><i class="bi bi-three-dots-vertical"></i></span></li>
        <img src="${val.image}" class="card-img-top mt-1"  alt="${val.taskName}"> 
        <div class="card-body text-center"  style="height: 10rem" >
          <h5 class="card-title">${val.taskName}</h5>
          <p class="card-text ">${val.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item ">
            <i class="fa-solid fa-triangle-exclamation "style="width: 1rem"></i> 
              <span class="fw-bold">Priority level:<p class="btn btn-success ms-1 h-auto likeBtn"" >${val.importance}</p>
<i class="minus fs-5 bi bi-dash-circle-fill"></i>
  </span><br>
              <i class="fa-solid fa-map-location-dot"></i> 
              <span class="fw-bold">Location:</span> ${val.location}</li>
          <li class="list-group-item text-end"> 
            <p class="del btn btn-danger  h-auto"id="buttons" <i class="bi bi-trash3-fill"></i> Delete </p>
            <p class="btn btn-success h-auto"  id="buttons" ><i class="bi bi-check-circle-fill"></i> Done</p>
          </li>
        </ul>
      </div>
      </div>`;

    const minusBtns = document.querySelectorAll(".minus");
    minusBtns.forEach((btns, i) => {
        btns.addEventListener("click", () => {
            minusImportannce(i);
        });
    });


};



// its not working
let btns = document.getElementsByClassName("likeBtn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        wTasks[i].importance++;
        console.log(wTasks[i].importance);
        document.getElementsByClassName("likeBtn")[i].innerHTML = wTasks[i].importance;
        if (wTasks[i].importance < 2) {
            btns[i].style.backgroundColor = "green";
        } else if (wTasks[i].importance < 4) {
            btns[i].style.backgroundColor = "yellow";
        } else {
            btns[i].style.backgroundColor = "red";
        }
    })
};

const minusImportannce = (index) => {
    if (wTasks[index].importance == 1) {
        btns.splice(index, 1);
    } else {
        wTasks[index].importance--;
    }
    cartTotal();
};

// <
// div class = "text-center m-0 cart-quantity h4 w-25" > $ {
//         item.qtty
//     } < /div> <
//     div class = "d-flex" >
//     <
//     i class = "minus fs-5 bi bi-dash-circle-fill" > < /i> <
//     /div>