// global varivable
let a;
let b;
let c;
let d;

document.getElementById("update").style.display = "none";

function globalgetValueArray(getVlue) {
    getVlue.forEach(function (value) {

        let title = document.getElementById("title").value;
        let discription = document.getElementById("description").value;
        let color = document.getElementById("color").value;
        let date = document.getElementById("date").value;
        // creat a grid div, paragraphs and button
        let titleParagraph = document.createElement("p");
        // titleParagraph.id = "title" + x;
        let discriptionParagraph = document.createElement("p");
        // discriptionParagraph.id = "description" + x;
        let dateParagraph = document.createElement("p");
        // dateParagraph.id = "date" + x;
        let gridDataDiv = document.createElement("div");
        gridDataDiv.id = value.divId;
        let grid = document.getElementById("grid");
        let buttonDiv = document.createElement("div");
        let deletButton = document.createElement("button");

        let editButton = document.createElement("button");


        editButton.innerHTML = " Edit";
        deletButton.innerHTML = " Delete";

        // append div paragraph and button
        grid.appendChild(gridDataDiv);
        gridDataDiv.appendChild(titleParagraph);
        gridDataDiv.appendChild(discriptionParagraph);
        gridDataDiv.appendChild(dateParagraph);
        gridDataDiv.appendChild(buttonDiv);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deletButton);

        titleParagraph.innerHTML = value.Title;
        discriptionParagraph.innerHTML = value.Discription;
        dateParagraph.innerHTML = value.Date;
        gridDataDiv.style.backgroundColor = value.Color;

        discriptionParagraph.style.fontWeight = "Italic";
        discriptionParagraph.style.color = "white";
        titleParagraph.style.fontWeight = "bold";
        titleParagraph.style.color = "white";
        dateParagraph.style.color = "white";
        //  button styling
        editButton.style.backgroundColor = "white";
        editButton.style.padding = "5px 20px";
        deletButton.style.backgroundColor = "white";
        deletButton.style.padding = "5px 12px";
        deletButton.style.borderRadius = "10px"
        editButton.style.margin = "10px";
        editButton.style.borderRadius = "10px";
        buttonDiv.style.float = "right";
        buttonDiv.style.marginRight = "10px"
        gridDataDiv.style.borderRadius = "10px";
        gridDataDiv.style.boxShadow = "5px 5px 10px";
        grid.style.marginLeft = "20px";
        gridDataDiv.style.padding = "10px";
        grid.style.marginRight = "20px";


        // when click the button then close the form
        let totdoNoteForm = document.getElementById("dialog");
        totdoNoteForm.removeAttribute("open", true);

        // delelebutton function
        deletButton.onclick = function () {
            deletefunction(value.divId);
        };
        // editbutton function
        editButton.onclick = function () {
            editfunction(value);
        };
    });

}
let totdoNoteForm = document.getElementById("dialog");
// this is the click button when click the button opn the dialog
function addbtn() {

    totdoNoteForm.setAttribute("open", true);
}
// that is the close function when click the close button then close the dialoge
function formClose() {

    totdoNoteForm.removeAttribute("open", true);
}

let array = [];
console.log(array);
// form function on event
function addNotes(event) {
    event.preventDefault();

    let x = Math.random() * 100;
    let title = document.getElementById("title").value;
    let discription = document.getElementById("description").value;
    let color = document.getElementById("color").value;
    let date = document.getElementById("date").value;
    // creat a grid div, paragraphs and button
    let titleParagraph = document.createElement("p");
    titleParagraph.id = "title" + x;
    let discriptionParagraph = document.createElement("p");
    discriptionParagraph.id = "description" + x;
    let dateParagraph = document.createElement("p");
    dateParagraph.id = "date" + x;
    let gridDataDiv = document.createElement("div");
    gridDataDiv.id = "uniuqeid" + x;
    let grid = document.getElementById("grid");
    let buttonDiv = document.createElement("div");
    let deletButton = document.createElement("button");
    let editButton = document.createElement("button");

    editButton.innerHTML = " Edit";
    deletButton.innerHTML = " Delete";
    deletButton.className = "deletebtn";
    editButton.className = "editbtn";

    // append div paragraph and button
    grid.appendChild(gridDataDiv);
    gridDataDiv.appendChild(titleParagraph);
    gridDataDiv.appendChild(discriptionParagraph);
    gridDataDiv.appendChild(dateParagraph);
    gridDataDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(deletButton);

    titleParagraph.innerHTML = title;
    discriptionParagraph.innerHTML = discription;
    dateParagraph.innerHTML = date;
    gridDataDiv.style.backgroundColor = color;
    //styling
    discriptionParagraph.style.fontWeight = "Italic";
    discriptionParagraph.style.color = "white";
    titleParagraph.style.fontWeight = "bold";
    titleParagraph.style.color = "white";
    dateParagraph.style.color = "white";
    // button style in js
    editButton.style.backgroundColor = "white";
    editButton.style.padding = "5px 20px";
    editButton.style.margin = "10px";
    editButton.style.borderRadius = "10px";

    deletButton.style.backgroundColor = "white";
    deletButton.style.borderRadius = "10px";
    deletButton.style.padding = "5px 12px"
    deletButton.style.margin = "10px";

    gridDataDiv.style.borderRadius = "10px";
    gridDataDiv.style.boxShadow = "5px 5px 10px";
    grid.style.marginLeft = "20px";
    grid.style.marginRight = "20px";
    gridDataDiv.style.padding = "20px";
    gridDataDiv.style.marginRight = "10px";
    buttonDiv.style.float = "right";
    buttonDiv.style.marginRight = "10px";

    let object = {
        divId: "uniuqeid" + x,
        Title: title,
        Discription: discription,
        Date: date,
        Color: color,
    };
    array.push(object);
    //  where we set the values in local storage
    localStorage.setItem("localStoragValue", JSON.stringify(array));


    // delelebutton function
    array.forEach((value) => {
        deletButton.onclick = function () {
            deletefunction(value.divId);
        };
        // editbutton function

        editButton.onclick = function () {
            editfunction(value)
        }
    })
    // when data are submite then title,description and date filed empty
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("color").value = "";
    document.getElementById("date").value = "";

    // when click the button then close the form
    totdoNoteForm.removeAttribute("open", true);
}

// where get the value from local storage

let getlocalStoragValue = localStorage.getItem("localStoragValue");
if (getlocalStoragValue !== null) {
    array = JSON.parse(getlocalStoragValue);
}

globalgetValueArray(array);

// deletefunction
function deletefunction(getid) {
    let deletparagraph = document.getElementById(getid);
    deletparagraph.remove();

    let getlocalStoragValue = JSON.parse(
        localStorage.getItem("localStoragValue")
    );
    // console.log(id);
    console.log(getlocalStoragValue);
    let index = getlocalStoragValue.findIndex(function (v) {
        return (v.divId === getid);
    });
    getlocalStoragValue.splice(index, 1);
    array.splice(index, 1);

    localStorage.setItem(
        "localStoragValue",
        JSON.stringify(getlocalStoragValue)
    );
}

let updatevalue;

function editfunction(value) {
    console.log(value)

    updatevalue = value;
    // when i click the edit button then update button display block and submit dsiply none
    document.getElementById("update").style.display = "inline-block";
    document.getElementById("submit").style.display = "none";
    // onclik the edit bustton then dialog box open

    totdoNoteForm.setAttribute("open", true);

    document.getElementById("title").value = value.Title;
    document.getElementById("description").value = value.Discription;
    document.getElementById("date").value = value.Date;
    document.getElementById("color").value =
        value.Color;

}


function updatefunction(value) {

    console.log(value)
    document.getElementById("update").style.display = "none";
    document.getElementById("submit").style.display = "inline-block";


    let totdoNoteForm = document.getElementById("dialog");
    totdoNoteForm.removeAttribute("open", true);



    let object = {
        divId: value.divId,
        Title: document.getElementById("title").value,
        Discription: document.getElementById("description").value,
        Date: document.getElementById("date").value,
        Color: document.getElementById("color").value
    }
    console.log(object)

    let replaceData = array.findIndex(function (v) {
        return v.divId === value.divId;
    })

    array[replaceData] = object;
    localStorage.setItem("localStoragValue", JSON.stringify(array));


}

function searchfunction() {
    let findNote = document.getElementById("myinput").value.toUpperCase();
    let searchToDoNote = array.filter(function (filterSearchValue) {
        let searchTitleNote =
            filterSearchValue.Title.toUpperCase().includes(findNote);
        let searchDiscriptionNote =
            filterSearchValue.Discription.toUpperCase().includes(findNote);

        if (searchTitleNote == true) {
            return true;
        } else if (searchDiscriptionNote == true) {
            return true;
        } else {
            return false;
        }
    });
    console.log(searchToDoNote);

    document.getElementById("grid").innerHTML = "";
    globalgetValueArray(searchToDoNote)

}
