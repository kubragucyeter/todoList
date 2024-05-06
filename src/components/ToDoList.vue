<template>
   <!-- <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        To Do List
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="input-group">
                                <input type="text" id="txtTaskName" class="form-control">
                                <button @click="newTask" id="btnAddNewTask">
                                    Add
                                </button>
                                <button id="tset1" @click="func1">Tıkla</button>
                            </div>
                        </form>
                    </div>                                               
                </div>
                <div class="card mt-3">
                    <div class="card-header controls">
                        <div class="filters">
                            <span class="active" id="all">All</span>
                            <span id="pending">To do</span>
                            <span id="completed">Done</span>
                        </div>
                        <button id="btnClear" class="btn btn-danger btn-sm float-end">Clean</button>
                    </div>
                    <ul id="task-list" class="list-group list-group-flush"></ul>
                </div>
            </div>
        </div>
        <div>
            <h1 id="deneme" @click="denemelik" style="border: 2px solid; margin: 10px;">Deneme</h1>
        </div>
    </div> -->
</template>
<script setup lang="ts">

// interface Gorev {
//     id: number;
//     gorevAdi: string;
//     durum: string;
// }

// function func1(){
//     console.log("dfgfdg")
//     alert("dfg")
// }
// let sonuc: any;
// let gorevListesi: Gorev[] = [];

// if (localStorage.getItem("gorevListesi") !== null) {
//     gorevListesi = JSON.parse(localStorage.getItem("gorevListesi")!);
// }

// let editId: number | undefined;
// let isEditTask: boolean = false;

// const taskInput: HTMLInputElement | null = document.querySelector("#txtTaskName");
// const btnclear: HTMLElement | null = document.querySelector("#btnClear");
// const filters: NodeListOf<Element> | null = document.querySelectorAll(".filters span");

// displayTask("all");

// // document.getElementById("deneme")?.addEventListener("click",()=>{})
// function denemelik(){
//     alert("denendi")
// }
// function displayTask(filter: string): void {
//     let ul: HTMLElement | null = document.getElementById("task-list");

//     if (ul) {
//         ul.innerHTML = "";


//         if (gorevListesi.length == 0) {
//             ul.innerHTML = "<p class='p-3 m-0'>Your task list is empty. </p>";
//         } else {
//             for (let gorev of gorevListesi) {
//                 let completed: string = gorev.durum == "completed" ? "checked" : "";

//                 if (filter == gorev.durum || filter == "all") {
//                     let li: string = `
//                     <li class="task list-group-item">
//                     <div class="form-check">
//                         <input type="checkbox" onclick="updateStatus(this)" id="${gorev.id}" class="form-check-input" ${completed}>
//                         <label for="${gorev.id}" class="form-check-label ${completed}">${gorev.gorevAdi}</label>
//                     </div>

//                     <div class="dropdown">
//                         <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                             <i class="fa-solid fa-ellipsis"></i>
//                         </button>
//                         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                             <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-sharp fa-solid fa-trash"></i> Delete</a></li>
//                             <li><a onclick='editTask(${gorev.id}, "${gorev.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-sharp fa-solid fa-pen"></i> Edit</a></li>
//                         </ul>
//                     </div>
//                 </li>
//             `;
//                     ul.insertAdjacentHTML("beforeend", li)

//                 }
//             }

//         }
//     }
// }
// document.getElementById("tset1")?.addEventListener("click",function(event){
//     alert("fds")
//     console.log(event)
// })

// document.body.addEventListener("keydown", function (event: KeyboardEvent) {
//     if (event.key === "Enter" && event.target === taskInput) {
//         const btnAddNewTask = document.getElementById("btnAddNewTask");
//         if (btnAddNewTask) {
//             btnAddNewTask.click();
//         }
//     }
// });

// document.querySelector("#btnAddNewTask")?.addEventListener("click", newTask);

// for (let span of filters) {
//     span.addEventListener("click", function () {
//         document.querySelector("span.active")?.classList.remove("active");
//         span.classList.add("active");
//         displayTask(span.id);
//     });
// }
// function newTask(event: Event) {
//     debugger
//     alert("kübra")
//     if (taskInput?.value == "") {
//         alert("Add section cannot be left blank!");
//     } else {

//         if (!isEditTask) {
//             // ekleme
//             gorevListesi.push({ "id": gorevListesi.length + 1, "gorevAdi": taskInput!.value, "durum": "pending" });
//         } else {
//             // güncelleme
//             for (let gorev of gorevListesi) {
//                 if (gorev.id == editId) {
//                     gorev.gorevAdi = taskInput!.value;
//                 }
//                 isEditTask = false;
//             }
//         }

//         taskInput!.value = "";
//         displayTask(document.querySelector("span.active")?.id || "");
//         localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
//     }
//     event.preventDefault();
// }

// function deleteTask(id: number): void {
//     let deleteId: string | undefined;

//     for (let index in gorevListesi) {
//         if (gorevListesi[index].id == id) {
//             deleteId = index;
//         }
//     }

//     gorevListesi.splice(Number(deleteId), 1);
//     displayTask(document.querySelector("span.active")?.id || "");
//     localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
// }

// function editTask(taskId: number, taskName: string): void {
//     editId = taskId;
//     isEditTask = true;
//     taskInput!.value = taskName;
//     taskInput!.focus();
//     taskInput!.classList.add("active");

//     console.log("edit id:", editId);
//     console.log("edit mode", isEditTask);
// }


// btnclear?.addEventListener("click", function () {
//     gorevListesi.splice(0, gorevListesi.length);
//     localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
//     displayTask("");
// })

// function updateStatus(selectedTask: HTMLInputElement): void {
//     let label: HTMLElement = selectedTask.nextElementSibling as HTMLElement;
//     let durum: string;

//     if (selectedTask.checked) {
//         label.classList.add("checked");
//         durum = "completed";
//     } else {
//         label.classList.remove("checked");
//         durum = "pending";
//     }

//     for (let gorev of gorevListesi) {
//         if (gorev.id == Number(selectedTask.id)) {
//             gorev.durum = durum;
//         }
//     }

//     displayTask(document.querySelector("span.active")?.id || "");
//     localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
// }

</script>

    <style>
         /* .dropdown-toggle::after {
            display: none;
        }

        .task {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .task label.checked {
            text-decoration: line-through;
        }

        .controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .filters span.active {
            color: blue;
        }

        .filters span {
            margin-right: 5px;
            font-size: 15px;
            column-rule-color: #444444;
            cursor: pointer;
        } */
    </style>
