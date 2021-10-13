const codes = [
  {
    id: 1,
    barcode: 12356123456,
    price: 10500,
    productName: "Наименование товара 1",
    manufacturer: "Наименование производителя 1",
  },
  {
    id: 12,
    barcode: 123512345,
    price: 1050000,
    productName: "Наименование товара 2",
    manufacturer: "Наименование производителя 2",
  },
  {
    id: 123,
    barcode: 12356123456,
    price: 4300,
    productName: "Наименование товара 3",
    manufacturer: "Наименование производителя 3",
  },
  {
    id: 1234,
    barcode: 12356123456,
    price: 5000,
    productName: "Наименование товара 4",
    manufacturer: "Наименование производителя 4",
  },
  {
    id: 12345,
    barcode: 12356123456,
    price: 1050000000,
    productName: "Наименование товара 5",
    manufacturer: "Наименование производителя 5",
  },
];

const showcaseEl = document.getElementById("showcase");
const showcaseEl2 = document.getElementById("showcase2")
const showcaseEl3 = document.getElementById("showcase3")
// const inputFormEl = document.getElementById("inputForm");

showcaseEl.addEventListener("click", (e) => {
  e.preventDefault();
  const clickedScanButton = e.target.closest(".scan-btn");
  if (clickedScanButton) {
    console.log("Кнопка Сканировать нажата")
    showcaseEl2.innerHTML = inputBarCode();
  }
});

showcaseEl3.addEventListener("click", (e) => {
  e.preventDefault();
  const clickedScanMoreButton = e.target.closest(".scan-more-btn");
  if (clickedScanMoreButton) {
    console.log("Кнопка Сканировать еще нажата")
    showcaseEl2.innerHTML = inputBarCode();
    showcaseEl3.innerHTML = resetField();
  }
});

//Проверить код
showcaseEl2.addEventListener("click", e => {
    e.preventDefault()
  const clickedInputBtn = e.target.closest(".input-btn")
  const userBarcode = form.barcode.value;
  if (clickedInputBtn) {
    console.log(userBarcode);
    const idx = codes.findIndex(barcodeIdx => barcodeIdx.id === +userBarcode);
    showcaseEl3.innerHTML = showBarcodePrice(codes, idx)
    showcaseEl2.innerHTML = resetField();
  }
});

// компонент ввода номера штрих кода
function inputBarCode() {
  return `<form id="form" name="form1">
<input type="text" name="barcode" placeholder="Введите штрих код">
<button class="input-btn" type="button">Подтвердить</button>
</form>
`;
}

// сбрасываем содержимое в html
function resetField () {
  return ``;
}

// компонент отображает цену товара
function showBarcodePrice(codesArray, idx) {
  return `<div class="returned-scan">
<h2>${codesArray[idx].productName}</h2>
<h3>Производитель: ${codesArray[idx].manufacturer}</h3>
<h3>Цена: ${codesArray[idx].price}</h3>
</div>
<button class="scan-more-btn btn" >Сканировать еще</button>
`
}

