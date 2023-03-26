let path = []
path[1] = {
    text: 's',
    color: 'pink'
}
path[4] = {
    text: '',
    color: 'black'
}
path[16] = {
    text: 'f'
}

let gameAreaDiv = document.querySelector('#gameArea')
gameAreaDiv.innerHTML = '<button class="top"></button><button class="bottom"></button><button class="left"></button><button class="right"></button>'


// Заполняем коридоры        
let mapDiv = document.querySelector('#map')
mapDiv.innerHTML = ''
for (let i = 16; i >= 1; i--) {
    let color = path[i] ? path[i].color : ''
    let text = path[i] ? path[i].text : ''
    mapDiv.innerHTML += '<div id="_' + i + '"" onclick="addNode(' + i + ')" style=background:' + color + '>' + text + '</div>'
}

let map2Div = document.querySelector('#map2')

let clickTwo = []
let Labirint = {}

function addNode(val) {
    console.log("addNode -- -- -- ", )
    clickTwo.push(val)
    if (clickTwo.length < 2) return
    else {
        showNode(clickTwo)
        clickTwo = []
    }


    /*let obj = document.querySelector('#_' + clickTwo[0])
    let x1 = obj.offsetLeft - obj.parentElement.offsetLeft
    let y1 = obj.offsetTop - obj.parentElement.offsetTop

    obj = document.querySelector('#_' + clickTwo[1])
    let x2 = obj.offsetLeft - obj.parentElement.offsetLeft
    let y2 = obj.offsetTop - obj.parentElement.offsetTop

    let x = x1 < x2 ? x1 : x2
    let y = y1 < y2 ? y1 : y2

    let difx = Math.abs(x2 - x1)
    let dify = Math.abs(y2 - y1)
    console.log("difx", difx)

    x = x + difx / 2 + 9
    y = y + dify / 2 + 9

    map2Div.innerHTML += '<div style="left:' + x + 'px; top:' + y + 'px"></div>'

    Labirint[clickTwo.join('-')] = true
    console.log("Labirint", Labirint)
    clickTwo = []*/
}

function showNode(two) {
    console.log("------two", two)
    let obj = document.querySelector('#_' + two[0])
    let x1 = obj.offsetLeft - obj.parentElement.offsetLeft
    let y1 = obj.offsetTop - obj.parentElement.offsetTop

    obj = document.querySelector('#_' + two[1])
    let x2 = obj.offsetLeft - obj.parentElement.offsetLeft
    let y2 = obj.offsetTop - obj.parentElement.offsetTop

    let x = x1 < x2 ? x1 : x2
    let y = y1 < y2 ? y1 : y2

    let difx = Math.abs(x2 - x1)
    let dify = Math.abs(y2 - y1)
    console.log("difx", difx)

    x = x + difx / 2 + 9
    y = y + dify / 2 + 9

    map2Div.innerHTML += '<div style="left:' + x + 'px; top:' + y + 'px"></div>'

    two.sort()
    Labirint[two.join('-')] = true
}

function cls() {
    Labirint = {}
    localStorage.removeItem('Labirint')
    map2Div.innerHTML = ''
}

function save() {
    localStorage.setItem('Labirint', JSON.stringify(Labirint))
}

let Lab = localStorage.getItem('Labirint')

Lab = Lab && JSON.parse(Lab)
console.log(Lab)

Lab && Object.keys(Lab).map(el => {
    showNode(el.split('-'))
})