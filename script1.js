const getS = selector => document.querySelector(selector);

getS('.btn-edit').addEventListener('click', () => {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
})

getS('.btn-save').addEventListener('click', () => {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
})

getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
})


/* start function change text size  */
function fontSize() {
    getS('.top-block').style.fontSize = event.target.value;
}
/* end function change text font  */



/* start function change text font  */
let fFamily = document.getElementById('fontChoose');

fFamily.addEventListener('click', () => {
    getS('.top-block').style.fontFamily = event.target.value;
})
/* end function change text font  */


let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];

/* start function change text color  */
getS('.btn-text-color').addEventListener('click', () => {
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function () {
            getS('.top-block').style.color = this.style.backgroundColor;
        }
    }
})
getS('.btn-text-color').onclick = function () {
    getS('.colors').classList.remove('hide');
}
/* end function change text color */

/* start function change background color */
getS('.btn-bg-color').addEventListener('click', () => {

    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function () {
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;
        }
    }
})

getS('.btn-bg-color').onclick = function () {
    getS('.colors').classList.remove('hide');
}
/* end function change background color */

/* start function bold style */

function fontWeight() {
    if (event.target.checked) {
        getS('.top-block').classList.add('bold');
    }
    else {
        getS('.top-block').classList.remove('bold');
    }
}
/* end function bold style */

/* start function cursive style */
function cursive() {
    if (event.target.checked) {
        getS('.top-block').classList.add('cursive');
    }
    else {
        getS('.top-block').classList.remove('cursive');
    }
}
/* end function cursive style */


getS('.btn-add').onclick = function () {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}

/* start function add list */
function addList() {
    console.log(event.target.checked);
    getS('.create-list').classList.remove('hide');
    getS('.create-table').classList.add('hide');
}
const list = document.forms['form-list'];

getS('.btn-create-list').onclick = function () {
    console.log(list)
    const countLi = list.count.value;
    const typeLi = list.type.value;

    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li>item ${i + 1}</li>`;
    }
    getS('.edit-area').value += '</ul>';
    console.log(countLi, typeLi)

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}
/* end function add list */


/* start function add table */
function addTable() {
    getS('.create-table').classList.remove('hide');
    getS('.create-list').classList.add('hide');
}

const table = document.forms['form-table'];

getS('.btn-create-table').onclick = function () {
    const countTr = table.countTr.value;
    const countTd = table.countTd.value;
    const widthTd = table.widthTd.value;
    const heightTd = table.heightTd.value;
    const widthBorder = table.widthBorder.value;
    const typeBorder = table.typeBorder.value;
    const colorBorder = table.colorBorder.value;

    getS('.edit-area').value += `<table>`;
    for (let i = 0; i < countTr; i++) {
        getS('.edit-area').value += `<tr>`;
        for (let j = 0; j < countTd; j++) {
            getS('.edit-area').value += `<td style="border: ${widthBorder}px ${typeBorder} ${colorBorder}; width:${widthTd}px; height:${heightTd}px; border-color:${colorBorder}; ">item ${j + 1}</td>`;
        }
        getS('.edit-area').value += `</tr>`;
    }
    getS('.edit-area').value += '</table>';

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}
/* end function add table */