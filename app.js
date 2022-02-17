
const products = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0
    }
}  

const plusOrMinusBtn = document.querySelectorAll(".main__product-btn") 
for(i = 0; i < plusOrMinusBtn.length; i++){
    plusOrMinusBtn[i].addEventListener("click", function(){
        addOrSubtract(this)
        })
}

function addOrSubtract(element){
    // closest - orab turgan elementning eng yaqinidagini topib beradi
    // console.log(element.closest(".main__product"));
    const parent = element.closest(".main__product")
    const parentId = parent.getAttribute('id')
    const elementSym = element.getAttribute('data-symbol')
    const output = parent.querySelector(".main__product-num")
    const sum = parent.querySelector(".main__product-price-span")
    console.log(sum );
    if(elementSym == '+'){    
        products[parentId].amount++
        if (parentId == "plainBurger"){
            sum.innerHTML = parseInt(sum.innerHTML) + 10000
        }else if(parentId == "freshBurger"){
            sum.innerHTML = parseInt(sum.innerHTML) + 20500
        }else if(parentId == "freshCombo"){
            sum.innerHTML = parseInt(sum.innerHTML) + 31900
        }
    }
    else if(elementSym == '-' && products[parentId].amount > 0){
        products[parentId].amount--
        if (parentId == "plainBurger"){
            sum.innerHTML = parseInt(sum.innerHTML) - 10000
        }else if(parentId == "freshBurger"){
            sum.innerHTML = parseInt(sum.innerHTML) - 20500
        }else if(parentId == "freshCombo"){
            sum.innerHTML = parseInt(sum.innerHTML) - 31900
        }
    }

    output.innerHTML = products[parentId].amount
    console.log(products[parentId].amount, elementSym);


}


const level = document.querySelector(".header__timer-extra")

function levelRecursion() {
    level.innerHTML++
 
    if(level.innerHTML > 0 && level.innerHTML <= 50){
        setTimeout(() => {
            levelRecursion()
        }, 50);
    }
    if (level.innerHTML > 50 && level.innerHTML <= 75){
        setTimeout(() => {
            levelRecursion()
        }, 100);
    }if (level.innerHTML > 75 && level.innerHTML <= 99){
        setTimeout(() => {
            levelRecursion()
        }, 200);
    }
}
levelRecursion()
