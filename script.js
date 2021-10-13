const bodyPocket = document.querySelector('.body-pocket')

const bodyPocketdisplay = bodyPocket.querySelector('.body-pocket__number')

const bodyPocketkeys = bodyPocket.querySelector('.body-pocket__keys')

const bodyPocketColors = document.querySelector('.body-pocket__colors')

console.log(bodyPocket.dataset)


const rhythm = 'var(--rhythm)'
const sub = 'var(--sub)'
const factory = 'var(--factory)'
const arcade = 'var(--arcade)'
const office = 'var(--office)'
const robot = 'var(--robot)'
const tonic = 'var(--tonic)'
const ko = 'var(--KO)'
const speak = 'var(--speak)'

// console.log(ko, speak)
// console.log(bodyPocketColors)



bodyPocketkeys.addEventListener('click', (e) => {

    if (e.target.closest('.key-button-name') !== e.currentTarget.closest('.key-button-name'))

        return

    const key = e.target
    const keyValue = key.textContent.trim()
    const displayValue = bodyPocketdisplay.textContent
    const { type } = key.dataset
    const { proviusKeyType } = bodyPocket.dataset



    //   if (key.classList.contains('suma')) {
    // console.log(key)


    if (type === 'number') {


        if (displayValue === '0' || proviusKeyType === 'operator') {
            bodyPocketdisplay.textContent = keyValue
        } else {
            bodyPocketdisplay.textContent = displayValue + keyValue;
        }

    }

    if (type === 'operator') {
        const operatorKeys = bodyPocketkeys.querySelectorAll('[data-type="operator"]')



        operatorKeys.forEach(el => { el.dataset.state = '' })
        key.dataset.state = 'selected'


        console.log(Array.isArray(operatorKeys))
        console.log(operatorKeys)

        bodyPocket.dataset.firstNumber = displayValue;
        bodyPocket.dataset.operator = key.dataset.action

        // console.log(key.dataset)

        // console.log(keyValue)
        // console.log(key.dataset.key)

    }


    if (type === 'equal') {
        const firstNumber = bodyPocket.dataset.firstNumber
        const operator = bodyPocket.dataset.operator
        const secondNumber = displayValue

        bodyPocketdisplay.textContent = calcula(firstNumber, operator, secondNumber)

        console.log(operator)

    }

    if (type === 'clear') {
        bodyPocketdisplay.textContent = '0'
        delete bodyPocket.dataset.firstNumber
        delete bodyPocket.dataset.operator


    }

    bodyPocket.dataset.proviusKeyType = type
})



function calcula(firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)

    if (operator === 'suma') return firstNumber + secondNumber
    if (operator === 'resta') return firstNumber - secondNumber
    if (operator === 'multiplica') return firstNumber * secondNumber
    if (operator === 'divide') return firstNumber / secondNumber
}



const uno = document.querySelector('.uno');
const dos = document.querySelector('.dos')


console.log(uno, dos)




// Cambio de color

console.log(bodyPocketColors)

bodyPocketColors.addEventListener('click', (t) => {
    if (!t.target.closest('button'))

        return
    const colorkey = t.target.textContent

    function changeColor(model, color) {

        if (colorkey === model) {

            const bannerConst = bodyPocket.querySelector('.body-pocket__banner')
            bannerConst.style.setProperty('color', color);

            const model = bodyPocket.querySelector('.body-pocket__model')
            model.textContent = colorkey

            const keybyConst = document.querySelectorAll('[data-key="key"]')

            keybyConst.forEach(e => { e.style.setProperty('background-color', color) })

            const keyNameColor = bodyPocket.querySelectorAll('[data-name="name"]')

            keyNameColor.forEach(e => { e.style.color = color })


        }

    }


    changeColor("rhythm", rhythm)
    changeColor("sub", sub)
    changeColor("factory", factory)
    changeColor("arcade", arcade)
    changeColor("office", office)
    changeColor("robot", robot)
    changeColor("tonic", tonic)
    changeColor("K.0!", ko)
    changeColor("speak", speak)






})







// if (colorkey === 'rhythm') {

//         const bannerConst= bodyPocket.querySelector('.body-pocket__banner')
//         bannerConst.style.setProperty('color','var(--rhythm)');

//         const model = bodyPocket.querySelector('.body-pocket__model')
//         model.textContent = colorkey

//         const keybyConst = document.querySelectorAll('[data-key="key"]')

//         keybyConst.forEach(e => {e.style.setProperty('background-color','var(--rhythm)')})

//         const keyNameColor = bodyPocket.querySelectorAll('[data-name="name"]')

//         keyNameColor.forEach(e => {e.style.color="var(--rhythm)"})






// for (i = 0; i < bodyPocketkeys.length; i++) {
//     bodyPocketkeys[i].addEventListener('click', (e) => {

//         if (!e.target.closest('.key-button-name'))

//             return

//         const myKey = e.target
//         const keyValue = myKey.textContent.trim()
//         const displayValue = bodyPocketdisplay.textContent

//         // console.log(keyValue)

// const { type } = myKey.dataset
// const { proviusKeyType } = bodyPocket.dataset

//         console.log(keyValue.trim())


//         console.log(displayValue)

// if (type ==='number') {


//     if (displayValue === '0' || proviusKeyType === 'operator') {
//         bodyPocketdisplay.textContent = keyValue
//     } else {
//         bodyPocketdisplay.textContent = displayValue + keyValue;
//     }

// }

//         if (type === 'operator') {




//         }


// })
// }