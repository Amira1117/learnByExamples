var acc = document.getElementsByClassName("accordion");
let selectedId = localStorage.getItem('selectedId') || '';
let done = localStorage.getItem('done') || '';
var i;

// добавляем идентификатор
for (i = 0; i < acc.length; i++) {
    acc[i].id = i;
    if (selectedId == i) {
        var panel = acc[i].nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
        acc[i].classList.toggle("active");
    }
}

// добавляем слушателей к строкам
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", openRow);
}

// Отерываение при нажатии но строку
function openRow(me) {
    // При каждом нажатии скрыть открытые поля
    Object.keys(acc).map(el => acc[el].nextElementSibling.style.maxHeight = null)

    if (selectedId === me.target.id) return

    selectedId = me.target.id
    localStorage.setItem('selectedId', selectedId); // запоминаем открытое поле

    var panel = me.target.nextElementSibling;
    me.target.classList.add("active");
    panel.style.maxHeight = panel.scrollHeight + "px";
}

// проставим галочки сделано, понавешаем слушателей чекбокса "Сделано"
document.querySelectorAll('[type="checkbox"]').forEach(el => {
    if (done.includes(+el.parentElement.previousElementSibling.id + 1)) {
        el.checked = true
        el.parentElement.previousElementSibling.classList.toggle("done")
    }
    el.addEventListener("click", handler)
})


function handler(el) {
    let doneArr = done.split(',').map(el => +el)
    let numberTask = +el.target.parentElement.previousElementSibling.id + 1
    if (doneArr.indexOf(numberTask) > 0) {
        let index = doneArr.indexOf(numberTask)
        el.target.parentElement.previousElementSibling.classList.remove("done")
        doneArr.splice(index, 1)
    } else {
        doneArr.push(numberTask)
        el.target.parentElement.previousElementSibling.classList.add("done")
    }
    done = doneArr.join(',')
    localStorage.setItem('done', done)
}