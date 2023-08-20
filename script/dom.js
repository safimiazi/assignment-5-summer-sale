
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const value = parseFloat(inputText)
    console.log(value)
}

function getElementValue(elementId){
    const elementField = document.getElementById(elementId);
    const elementValue = parseFloat(elementField.innerText);
    return elementValue;
}

function setElementValue(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}


function handleClick(target){
    //add item name in the selected item div
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.childNodes[3].childNodes[3].innerHTML;
    const p = document.createElement('p');
    const count = selectedItemContainer.childElementCount;
    p.innerHTML= `${count + 1} ${itemName}`;
    selectedItemContainer.appendChild(p);

    const cardPrice = parseFloat(target.childNodes[3].children[2].children[0].innerText);
     
    const totalPriceField = document.getElementById('total-price');
    const totalPriceText = totalPriceField.innerText;
    const total = parseFloat(totalPriceText)
     const totalPrice = total + cardPrice;
     totalPriceField.innerText = totalPrice;  
}

//enable apply button
document.getElementById('coupon-confirm').addEventListener('keyup', function(event){
    const text = event.target.value;
    const applyBtn = document.getElementById('Apply-btn');
    if(text == 'SELL200'){
        applyBtn.removeAttribute('disabled')
    }
    else{
        applyBtn.setAttribute('disabled', true)
    }
})

// work apply button
document.getElementById('Apply-btn').addEventListener('click', function(){
    const totalPrice = getElementValue('total-price');
    const discountValue= (totalPrice*20)/100;
    const discount =getElementValue('discount');
    setElementValue('discount', discountValue);
    const total = totalPrice - discountValue;
    setElementValue('total', total)

})

function goHome(){
    setElementValue('total-price', 0)
    setElementValue('discount', 0)
    setElementValue('total', 0)
    setElementValue('selected-items', '')
    const inputField = document.getElementById('coupon-confirm');
    inputField.value = ''
    
}