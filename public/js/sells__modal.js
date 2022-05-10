const modal = {
    card_mphoto: document.getElementById("cards__img-tmpl"),
    thumb_front_img: document.getElementById("thumb__front-tmpl"),
    thumb_back_img: document.getElementById("thumb__back-tmpl"),

    card_mphoto_src: null,
    card_mphoto_back_src: null,

    _showThumbFront: function () {
        this.thumb_front_img.classList.add("thumb--active");
        this.thumb_back_img.classList.remove("thumb--active");

        this.card_mphoto.src = `images/${this.card_mphoto_src}`;
    },

    _showThumbBack: function () {
        this.thumb_back_img.classList.add("thumb--active");
        this.thumb_front_img.classList.remove("thumb--active");

        this.card_mphoto.src = `images/${this.card_mphoto_back_src}`;
    },

    init() {
        this.thumb_front_img.addEventListener(
            "click",
            this._showThumbFront.bind(this)
        );
        this.thumb_back_img.addEventListener(
            "click",
            this._showThumbBack.bind(this)
        );
    },

    open(options) {
        this.thumb_front_img.classList.add("thumb--active");
        this.thumb_back_img.classList.remove("thumb--active");

        const curr =
            loadSelectValue(
                document.querySelector("[name='currency_options']")
            ) || "£";
        let price = options.price;

        switch (curr) {
            case "$":
                price *= FUNT_TO_USD;
                break;
            case "€":
                price *= FUNT_TO_EURO;
                break;
            default:
        }

        document.getElementById("price__val-tmpl").innerHTML = price.toFixed(2);

        document
            .getElementById("cards__img-tmpl")
            .setAttribute("src", "images/" + options.mphoto);
        document
            .getElementById("thumb__front-tmpl")
            .setAttribute("src", "images/" + options.mphoto);
        document
            .getElementById("thumb__back-tmpl")
            .setAttribute("src", "images/" + options.mphoto_b);

        document.querySelector(".modal").style.visibility = "visible";

        this.card_mphoto_src = options.mphoto;
        this.card_mphoto_back_src = options.mphoto_b;
    },

    close() {
        document.querySelector(".modal").style.visibility = "hidden";
    },
};


const modal__overlay = document.getElementById("modal__overlay");

modal__overlay.addEventListener("click", function (event) {
    if (
        modal__overlay !== event.target &&
        modal__overlay.firstElementChild !== event.target
    )
        return;

    modal.close();
});

modal.init();
