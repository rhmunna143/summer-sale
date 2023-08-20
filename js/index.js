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

function purchaseEnable() {
    removeClass('purchase-btn', 'disabled-link');
} //for cart


if (cartTotal > 0) {
    purchaseEnable();
}

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