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

    if(elementSym == '+'){    
        products[parentId].amount++
    }
    else if(elementSym == '-' && products[parentId].amount > 0){
        products[parentId].amount--
    }

    output.innerHTML = products[parentId].amount
    console.log(products[parentId].amount, elementSym);


}

