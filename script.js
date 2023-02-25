var acc = document.getElementsByClassName("accordion");
let selectedId = localStorage.getItem('selectedId');
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
    acc[i].addEventListener("click", function() {
        openRow(this)
    });
}

// При каждом нажатии скрыть открытые поля
function closeAllRow() {
    for (i = 0; i < acc.length; i++) {
        acc[i].nextElementSibling.style.maxHeight = null;
    }
}

// Отерываение при нажатии но строку
function openRow(me) {
    console.log(me)
    localStorage.setItem('selectedId', me.id); // запоминаем открутое поле
    closeAllRow()
    me.classList.toggle("active");
    var panel = me.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
}