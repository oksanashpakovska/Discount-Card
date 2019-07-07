function Discount_Card(id) {
    this.Id = id;
    this.Discount = 1;
    this.Amount = 0;
    this.Buy = function(price) {
        this.Amount += price;
        this.Discount = Math.floor(this.Amount/1000 + 1);
        return price - (price / 100 * this.Discount);
    }
}

var DiscountCards = [];
function CreateNewData(){
    DiscountCards.push(new Discount_Card(DiscountCards.length));
    Discount = document.querySelector(".Discount");
    NextSum = document.querySelector(".NextSum");
    Discount.innerHTML = DiscountCards[DiscountCards.length-1].Discount + '%';
    NextSum.innerHTML = DiscountCards[DiscountCards.length-1].Amount%1000 +'$';
}

function BuyWithCard(){
    let price = parseInt(document.querySelector(".amount").value);
    let input = document.querySelector(".FinalPrice");
    input.innerHTML = DiscountCards[DiscountCards.length-1].Buy(price) + '$';
    Discount = document.querySelector(".Discount");
    NextSum = document.querySelector(".NextSum");
    Discount.innerHTML = DiscountCards[DiscountCards.length - 1].Discount + '%';
    NextSum.innerHTML = 1000 - (DiscountCards[DiscountCards.length - 1].Amount % 1000) + '$';
    console.log(DiscountCards[DiscountCards.length-1]);
}