// common variable to use
const cartListId = 'cart-list';
const totalPriceId = 'total-price';
const discountId = 'discount';
const totalId = 'total';

const product3 = 'product-3';
const product4 = 'product-4';
const product5 = 'product-5';
const product6 = 'product-6';

const cartList = select(cartListId);

// cart validation
const CartPrice = textNumber(totalPriceId);
const cartTotal = textNumber(totalId);

function couponEnable() {
    removeAttribute('coupon-apply-btn', 'disabled');
} //for coupon

document.getElementById('coupon-code').addEventListener('keyup', function (event) {
    const couponCode = event.target.value;
    const validCode = 'SELL200'

    if (couponCode == validCode) {
        couponEnable();
    }
});

// for product 1
const product = 'product';

document.getElementById(product).addEventListener('click', function () {
    // provide id as variable
    const productHead = 'product-name';
    const productPrice = 'price';

    const productName = select(productHead);
    const proNameTxt = productName.innerText;
    const count = cartList.childElementCount;
    let innerHTML = ` ${count + 1}. ${proNameTxt}`;

    setHtml(cartListId, innerHTML);

    const itmPrice = textNumber(productPrice);
    const preTotalPrice = textNumber(totalPriceId);
    const preTotal = textNumber(totalId);

    const currentTotalPrice = toSum(preTotalPrice, itmPrice);
    setText(totalPriceId, currentTotalPrice);
    setText(totalId, currentTotalPrice);
});

// for product 2
const product2 = 'product-2';

document.getElementById(product2).addEventListener('click', function () {
    // provide id as variable
    const productHead = 'product-name-2';
    const productPrice = 'price-2';

    const productName = select(productHead);
    const proNameTxt = productName.innerText;
    const count = cartList.childElementCount;
    let innerHTML = ` ${count + 1}. ${proNameTxt}`;

    setHtml(cartListId, innerHTML);

    const itmPrice = textNumber(productPrice);
    const preTotalPrice = textNumber(totalPriceId);
    const preTotal = textNumber(totalId);

    const currentTotalPrice = toSum(preTotalPrice, itmPrice);
    setText(totalPriceId, currentTotalPrice);
    setText(totalId, currentTotalPrice);
});

// for product 3
document.getElementById(product3).addEventListener('click', function () {
    // provide id as variable
    const productHead = 'product-name-3';
    const productPrice = 'price-3';

    const productName = select(productHead);
    const proNameTxt = productName.innerText;
    const count = cartList.childElementCount;
    let innerHTML = ` ${count + 1}. ${proNameTxt}`;

    setHtml(cartListId, innerHTML);

    const itmPrice = textNumber(productPrice);
    const preTotalPrice = textNumber(totalPriceId);
    const preTotal = textNumber(totalId);

    const currentTotalPrice = toSum(preTotalPrice, itmPrice);
    setText(totalPriceId, currentTotalPrice);
    setText(totalId, currentTotalPrice);
});

// for product 4
document.getElementById(product4).addEventListener('click', function () {
    // provide id as variable
    const productHead = 'product-name-4';
    const productPrice = 'price-4';

    const productName = select(productHead);
    const proNameTxt = productName.innerText;
    const count = cartList.childElementCount;
    let innerHTML = ` ${count + 1}. ${proNameTxt}`;

    setHtml(cartListId, innerHTML);

    const itmPrice = textNumber(productPrice);
    const preTotalPrice = textNumber(totalPriceId);
    const preTotal = textNumber(totalId);

    const currentTotalPrice = toSum(preTotalPrice, itmPrice);
    setText(totalPriceId, currentTotalPrice);
    setText(totalId, currentTotalPrice);
});

// for product 5
document.getElementById(product5).addEventListener('click', function () {
    // provide id as variable
    const productHead = 'product-name-5';
    const productPrice = 'price-5';

    const productName = select(productHead);
    const proNameTxt = productName.innerText;
    const count = cartList.childElementCount;
    let innerHTML = ` ${count + 1}. ${proNameTxt}`;

    setHtml(cartListId, innerHTML);

    const itmPrice = textNumber(productPrice);
    const preTotalPrice = textNumber(totalPriceId);
    const preTotal = textNumber(totalId);

    const currentTotalPrice = toSum(preTotalPrice, itmPrice);
    setText(totalPriceId, currentTotalPrice);
    setText(totalId, currentTotalPrice);
});

// for product 6
document.getElementById(product6).addEventListener('click', function () {
    // provide id as variable
    const productHead = 'product-name-6';
    const productPrice = 'price-6';

    const productName = select(productHead);
    const proNameTxt = productName.innerText;
    const count = cartList.childElementCount;
    let innerHTML = ` ${count + 1}. ${proNameTxt}`;

    setHtml(cartListId, innerHTML);

    const itmPrice = textNumber(productPrice);
    const preTotalPrice = textNumber(totalPriceId);
    const preTotal = textNumber(totalId);

    const currentTotalPrice = toSum(preTotalPrice, itmPrice);
    setText(totalPriceId, currentTotalPrice);
    setText(totalId, currentTotalPrice);
});

// to fixed
function toDecimal(totalNumber) {
    const preTotalPrice = textNumber(totalPriceId);
    const totalPrice = preTotalPrice.toFixed(2);
    setText(totalPriceId, totalPrice);

    const preDiscount = textNumber(discountId);
    const discount = preDiscount.toFixed(2);
    setText(discountId, discount);

    const preTotal = textNumber(totalId);
    const total = preTotal.toFixed(2);
    setText(totalId, total);


    if (totalNumber > 0) {
        removeClass('purchase-btn', 'disabled-link');
    }
}

// coupon discount
document.getElementById('coupon-apply-btn').addEventListener('click', function () {
    const totalPrice = textNumber(totalPriceId);
    const discount = totalPrice * 0.2;

    if (totalPrice > 200) {
        const total = totalPrice - discount;
        setText(discountId, discount);
        setText(totalId, total);

        toDecimal();
    }
});

// purchase enable
function purEnable() {
    const preTotal = textNumber(totalId);
    const total = preTotal.toFixed(2);
    const totalNumber = parseFloat(total);

    if (totalNumber > 0) {
        removeClass('purchase-btn', 'disabled-link');
        return totalNumber;
    }
}

// to fixed after reload (using help from INTERNET)
// Code to execute before page reload
window.addEventListener('beforeunload', function () {
    localStorage.setItem('reloadInProgress', 'true');
});

// Code to execute after page reload
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('reloadInProgress') === 'true') {
        localStorage.removeItem('reloadInProgress');
        // Action
        toDecimal();
    }
});

document.getElementById('pur-enable').addEventListener('click', function () {
    purEnable();
});