const errorForm = document.querySelector('.error_form');

function sloj() {
    let a = document.getElementsByName("x") [0].value
    let b = document.getElementsByName("y") [0].value

    document.getElementsByName("result") [0].value = Number(a) + Number(b)
    
}

function vuch() {
    let a = document.getElementsByName("x") [0].value
    let b = document.getElementsByName("y") [0].value

    document.getElementsByName("result") [0].value = Number(a) - Number(b)
    
}

function umno() {
    let a = document.getElementsByName("x") [0].value
    let b = document.getElementsByName("y") [0].value

    document.getElementsByName("result") [0].value = Number(a) * Number(b)
    
}

function dele() {
    let a = document.getElementsByName("x") [0].value
    let b = document.getElementsByName("y") [0].value
    let result_2 = document.getElementsByName("result_2")[0]

    let c;
    if (Number(b)  === 0 || Number(a) === 0) {
        errorForm.innerHTML = result_2.value = "Ошибка на ноль делить нелзя Алеша"
        return result_2.value = ("Ошибка на ноль делить нельзя Алеша")

    } else {
        c = Number(a) / Number(b)
        return result_2.value = c
    }
     document.getElementsByName("result_2") [0].value = c
    
}

function dvoe() {
    let a = document.getElementsByName("x") [0].value
    let b = document.getElementsByName("y") [0].value

    document.getElementsByName("result") [0].value = Number(a) ** Number(b)
    
}

console.log(true && false)







// let a = 500
// let b = 500

// if(a > b) {
//     alert("а больше чем b")
// } else {
//      alert("b больше чем а, либо равны")
//     if(a == b) {
//       alert("a равно b")  
//     } else {
//         alert("b больше чем a")
//     }
// }