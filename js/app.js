
const showcaseEl = document.getElementById('showcase');


// компонент ввода номера штрих код
function inputBarCode() {
return `<form class="input-form" id="inputForm">
<input type="number" class="input-barcode" name="inputBarcode" placeholder="Введите штрих код">
<button class="btn" id="approveInput">Подтвердить</button>
</form>`
} 

// компонент отображает цену товара
// function showBarCodePrice(codeNumber) {

// }

// начальный экран, куда возвращать пользователя

// ставим обработчик на нажатие кнопки сканировать товар
// showcaseEl.innerHTML = inputBarCode().join('')
document.addEventListener('click', e => {
    e.preventDefault()
    const clickedScanButton = e.target.closest('.btn')
    console.log(clickedScanButton)
    if (clickedScanButton) {
        showcaseEl.innerHTML = inputBarCode();    
    }
})

console.log(inputBarCode());
