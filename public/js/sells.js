// When Popular page is the current tab, the 3d and 4th image sizes are more wider than usual.
// We use four photos for one sell-item then: mphoto, mphoto_b, mphoto_cutted, mphoto_b_cutted.
// It's a dirty huck for short-term solution that must be resolved.
//
// TODO: need to think how to build the image container for "wide" images
function _getOriginalPhoto(cutted_photo) {
    let original_photo = cutted_photo;

    if (cutted_photo.includes("_cut"))
        original_photo = cutted_photo.replace("_cut", "");

    return original_photo;
}

function fetchDataJSON(url) {
    return fetch(url).then((r) => r.json());
}

function buildCardHTML(card) {
    const cards_item_html = document.createElement("div");
    cards_item_html.className = "cards__item";

    cards_item_html.insertAdjacentHTML(
        "afterbegin",
        `<div class="cards__prices">
            <div class="cards__price">
                <span class="price__currency">£</span>
                <span class="price__price">${card.price}</span>
            </div>
        </div>

        <img class="cards__img" src="images/${_getOriginalPhoto(
            card.mphoto
        )}" alt="">

        <div class="cards__img__thumb">
            <img class="thumb--front thumb--active" src="images/${_getOriginalPhoto(
                card.mphoto
            )}" alt="">
            <img class="thumb--back" src="images/${_getOriginalPhoto(
                card.mphoto_b
            )}"" alt="">
        </div>

        <div class="cards__info">
            <i class="fa-solid fa-info"></i>
        </div>

        <div class="cards__details details">
            <h2 class="details__title">
                ${card.title} 
                <span class="price__currency">£</span>
                <span class="price__price">${card.price}</span>
            </h2>

            <p class="details__desc">
                ${card.description}
            </p>

            <div class="details__icons">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-heart" data-like-id="${card.id}"></i>
                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </div>
        </div>`
    );

    if (card.old_price > 0) {
        cards_item_html
            .getElementsByClassName("cards__prices")[0]
            .insertAdjacentHTML(
                "afterbegin",
                `<div class="cards__price cards__price--old">
                    <span class="price__currency">£</span>
                    <span class="price__price">${card.old_price}</span>
                 </div>`
            );
    }

    return cards_item_html;
}

async function buildCardInner() {
    const cards_info = await fetchDataJSON("../db/cards.json");

    const cards_inner = document.getElementsByClassName("cards__inner")[0];

    const cards = cards_info.map(buildCardHTML);

    cards.forEach((c) => cards_inner.appendChild(c));

    cards.forEach((card, ind) => {
        const mphoto = card.getElementsByClassName("cards__img")[0];
        const thumb_front_img = card.getElementsByClassName("thumb--front")[0];
        const thumb_back_img = card.getElementsByClassName("thumb--back")[0];
        const card__expanded = card.getElementsByClassName(
            "fa-up-right-and-down-left-from-center"
        )[0];

        thumb_front_img.addEventListener("click", function () {
            thumb_front_img.classList.add("thumb--active");
            thumb_back_img.classList.remove("thumb--active");

            mphoto.src = `/images/${_getOriginalPhoto(cards_info[ind].mphoto)}`; // dirty hack.
        });

        thumb_back_img.addEventListener("click", function () {
            thumb_back_img.classList.add("thumb--active");
            thumb_front_img.classList.remove("thumb--active");

            mphoto.src = `images/${_getOriginalPhoto(
                cards_info[ind].mphoto_b
            )}`; // dirty hack.
        });

        card__expanded.addEventListener("click", function (event) {
            if (card__expanded !== event.target) return;

            modal.open(cards_info[ind]);
        });
    });

    return cards;
}

function appendScript(url) {
    const select_script = document.createElement("script");
    select_script.setAttribute("src", url);
    document.body.appendChild(select_script);
}

(async function () {
    const cards = await buildCardInner();

    cards[2].classList.add("card-3");
    cards[3].classList.add("card-4");

    appendScript("js/select.js");
    appendScript("js/likes.js");
})();
