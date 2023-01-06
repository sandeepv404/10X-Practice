let btn = document.querySelectorAll("button");
let pencount = document.getElementById("pens-qty");
let lemcount = document.getElementById("lem-qty");
let meatcount = document.getElementById("meat-qty");
let vegcount = document.getElementById("veg-qty");
let inp = document.querySelectorAll("input");
let prices = document.querySelectorAll("tbody>tr>td:last-child");
let totalprice = document.getElementById("t-price");

for (let i = 0; i < 8; i++) {
    btn[i].addEventListener("click", function () {
        document.querySelector("tfoot").style.display = "table-footer-group";
        if (i % 2 == 0) {
            if (i == 0 && vegcount.value > 0) {
                --vegcount.value;
                let x = parseInt(prices[0].innerText);
                let ans = x - 16;
                prices[0].innerHTML = `${ans}`;
                totalprice.innerHTML = parseInt(totalprice.innerText) - 16;
            } else if (i == 2 && meatcount.value > 0) {
                --meatcount.value;
                let x = parseInt(prices[1].innerText);
                let ans = x - 20;
                prices[1].innerHTML = `${ans}`;
                totalprice.innerHTML = parseInt(totalprice.innerText) - 20;
            } else if (i == 4 && lemcount.value > 0) {
                --lemcount.value;
                let x = parseInt(prices[2].innerText);
                let ans = x - 50;
                prices[2].innerHTML = `${ans}`;
                totalprice.innerHTML = parseInt(totalprice.innerText) - 50;
            } else if (i == 6 && pencount.value > 0) {
                --pencount.value;
                let x = parseInt(prices[3].innerText);
                let ans = x - 8;
                prices[3].innerHTML = `${ans}`;
                totalprice.innerHTML = parseInt(totalprice.innerText) - 8;
            }
        } else {
            if (i == 1) {
                ++vegcount.value;
                let x = parseInt(prices[0].innerText);
                let ans = x + 16;
                prices[0].innerHTML = `${ans}`;
                totalprice.innerHTML = parseInt(totalprice.innerText) + 16;
            } else if (i == 3) {
                ++meatcount.value;
                let x = parseInt(prices[1].innerText);
                let ans = x + 20;
                prices[1].innerHTML = `${ans}`;
                totalprice.innerHTML = parseInt(totalprice.innerText) + 20;
            } else if (i == 5) {
                ++lemcount.value;
                let x = parseInt(prices[2].innerText);
                let ans = x + 50;
                prices[2].innerHTML = `${ans}`;
                totalprice.innerHTML = parseInt(totalprice.innerText) + 50;
            } else if (i == 7) {
                ++pencount.value;
                let x = parseInt(prices[3].innerText);
                let ans = x + 8;
                prices[3].innerHTML = `${ans}`;
                totalprice.innerHTML = parseInt(totalprice.innerText) + 8;
            }
        }
    });
}