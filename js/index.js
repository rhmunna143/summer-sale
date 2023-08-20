// common variable to use
const cartListId = 'cart-list';
const totalPriceId = 'total-price';
const discountId = 'discount';
const totalId = 'total';

const cartList = select(cartListId);

// cart validation
const CartPrice = textNumber(totalPriceId);
const cartTotal = textNumber(totalId);

function couponEnable() {
    removeAttribute('coupon-apply-btn', 'disabled');
} //for coupon

document.getElementById('coupon-code').addEventListener('keyup', function(event) {
    const couponCode = event.target.value;
    const validCode = 'SELL200'
    
    if(couponCode == validCode) {
        couponEnable();
    }
});

function purchaseEnable() {
    removeClass('purchase-btn', 'disabled-link');
} //for cart


if(cartTotal > 0) {
    purchaseEnable();
}

// for product 1
document.getElementById('product').addEventListener('click', function() {
    const productName = select('product-name');
    const proNameTxt = productName.innerText;
    const count = cartList.childElementCount;
    let innerHTML = ` ${count + 1}. ${proNameTxt}`;
    
    setHtml(cartListId, innerHTML);

    
});