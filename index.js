let left = document.getElementsByClassName("bi-caret-left-fill")[0]
let right = document.getElementsByClassName("bi-caret-right-fill")[0]
let cards = document.getElementsByClassName("cards")[0];
let poster = document.getElementById("poster")
let title = document.getElementById("title")
let price = document.getElementById("price-2")

left.addEventListener("click", function () {
    cards.scrollLeft -= 170;
})

right.addEventListener("click", function () {
    cards.scrollLeft += 170;
})

Array.from(document.getElementsByClassName("card")).forEach((ele) => {
    ele.addEventListener("click", () => {
        poster.src = ele.getElementsByTagName("img")[0].src;
        title.innerText= ele.getElementsByTagName("h5")[0].innerText; 
        price.innerText=ele.getElementsByTagName("h4")[0].innerText;
    })
})                                                          