<template>
    <main id="main">
        <article class="product__block">
                <div class="container">

                    <hr>

                    <div class="sells">

                        <div class="sells__title">

                            <div class="nav__nav">
                                <ul class="nav__items">
                                    <li>
                                        <a href="" class="nav__item">Popular</a>
                                    </li>

                                    <li>
                                        <a href="" class="nav__item">New arrivals</a>
                                    </li>

                                    <li>
                                        <a href="" class="nav__item">Best sellers</a>
                                    </li>

                                    <li>
                                        <a href="" class="nav__item">Special offers</a>
                                    </li>

                                    <li>
                                        <a href="" class="nav__item">Comming soon</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div class="sells__cards">

                            <div class="cards__inner">
                                <!-- Cards items -->
                            </div>

                        </div>

                        <div class="card__modal modal">
                            <div class="modal__overlay" id="modal__overlay">

                                <div class="modal__inner">

                                    <div class="cards__item">
                                        <div class="cards__prices">

                                            <div class="cards__price">
                                                <span class="price__currency">£</span>
                                                <span id="price__val-tmpl">29.95</span>
                                            </div>

                                        </div>

                                        <img class="cards__img" id="cards__img-tmpl" src="images/sells/photo_5.png"
                                            alt="">

                                        <div class="cards__img__thumb">
                                            <img class="thumb--front thumb--active" id="thumb__front-tmpl"
                                                src="images/sells/photo_5.png" height="102" alt="">
                                            <img class="thumb--back" id="thumb__back-tmpl"
                                                src="images/sells/photo_5_back.png" alt="" height="102">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr>
                </div>
            </article>

        <article class="look__book">
            <div class="blocks__book">
                <div class="book__items">
                    <div class="book__maintitle">men’s</div>
                    <div class="book__title">lookbook</div>
                    <div class="book__p">
                        Lorem ipsum dolor sit amet eras facilisis consectetur
                        adipiscing elit lor, integer lorem consecteur dignissim
                        laciniqui. Elementum metus facilisis ut phasellu.
                    </div>
                    <a href="thebook.html" class="nav__btn">view now </a>
                </div>
            </div>
            <div class="blocks__book blocks__book2">
                <div class="book__items">
                    <div class="book__maintitle">men’s</div>
                    <div class="book__title">lookbook</div>
                    <div class="book__p">
                        Lorem ipsum dolor sit amet eras facilisis consectetur
                        adipiscing elit lor, integer lorem consecteur dignissim
                        laciniqui. Elementum metus facilisis ut phasellu.
                    </div>
                    <a href="thebook.html" class="nav__btn">view now </a>
                </div>
            </div>
            <div class="blocks__book blocks__book3">
                <div class="book__items">
                    <div class="book__maintitle">men’s</div>
                    <div class="book__title">lookbook</div>
                    <div class="book__p">
                        Lorem ipsum dolor sit amet eras facilisis consectetur
                        adipiscing elit lor, integer lorem consecteur dignissim
                        laciniqui. Elementum metus facilisis ut phasellu.
                    </div>
                    <a href="thebook.html" class="nav__btn">view now </a>
                </div>
            </div>
        </article>
    </main>
</template>
<script>

export default {
    name: "Main",
};

</script>
<style>
.sells__title {
    margin: 40px 0;
}

.cards__inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 30px;
}

.cards__item {
    position: relative;

    transition: box-shadow 0.3s linear;
}
.sells__cards {
    margin-bottom: 60px;
}

.cards__item:hover .details {
    display: block;
}

.cards__item:hover .cards__info {
    display: block;
}

.cards__item:hover .cards__img__thumb {
    display: flex;
}

.cards__item:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.cards__item.card-3 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
}

.cards__item.card-4 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
}

.cards__prices {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 21px;
    font-weight: 300;
    padding-left: 15px;
    padding-top: 12px;
    color: #9a9a9a;
}

.cards__price span {
    vertical-align: top;
    line-height: 1;
}

.price__currency {
    font-size: 10px;

    vertical-align: top;
}

.cards__price--old {
    margin-right: 10px;
}

.cards__price--old .price__price {
    text-decoration: line-through;
}
.cards__img__thumb {
    position: absolute;
    right: 20px;
    top: 20px;

    max-width: 20%;
    height: auto;

    row-gap: 15px;

    flex-direction: column;
    justify-content: space-between;

    display: none;
}

.thumb--active {
    border: 1px solid #000;
}

.thumb--front,
.thumb--back {
    max-height: 102px;
}

.thumb--front:hover,
.thumb--back:hover {
    border: 1px solid #000;
}

.cards__info {
    display: none;

    position: absolute;
    bottom: 35%;
    left: 45%;

    max-width: 10%;
    max-height: 10%;
    width: 40px;
    height: 40px;

    font-size: 1.5em;

    text-align: center;

    color: rgba(178, 77, 54, 0.9);
    background-color: #fff;

    border-radius: 50%;
}

.modal {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;

    visibility: hidden;

    width: 100%;
    height: 100vh;
}

.modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.8);

    z-index: 100;
}

.modal__inner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 100%;
    height: 80vh;

    display: flex;
    justify-content: center;
}

.modal__inner #cards__img-tmpl {
    height: 100%;
}

.details {
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;

    width: 100%;

    text-align: center;

    transform: translateY(100%);
    background-color: #fff;

    border-top: 0.5px solid #ccc;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.details__title {
    font-size: 13px;

    margin-top: 20px;

    text-transform: uppercase;

    color: #727272;
}

.details__desc {
    font-family: "Roboto", sans-serif;
    font-size: 15px;

    margin: 10px 0;

    color: #8e8c8c;
}

.details__icons {
    display: flex;
    justify-content: center;

    gap: 10px;

    margin-bottom: 10px;
}

.details__icons i {
    padding: 10px;

    font-size: 15px;

    border-radius: 50%;
    color: #fff;
    background-color: #8e8c8c;

    transition: background 0.2s linear;
}

.details__icons i:hover {
    background-color: #4bb1b1 !important;
}

/* LOOK BOOK*/
.look__book {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
}
.blocks__book {
    background-color: #f8f8f8;
    padding: 80px 3% 0px 0px;
    display: flex;
    align-items: flex-end;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
    background-image: url(../images/book/pic1.png); 
    background-repeat: no-repeat;
    background-position: 20px bottom;
}
.blocks__book2 {
     background-image: url(../images/book/pic2.png); 
    background-repeat: no-repeat;
    background-position: 20px bottom;
}

.blocks__book3 {
    background-image: url(../images/book/pic3.png); 
    background-repeat: no-repeat;
    background-position: 20px bottom;
}

.book__items {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 56;
    padding-bottom: 120px;
}
.book__p {
    text-align: right;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    color: #727272;
    margin-bottom: 35px;
    max-width: 300px;
}
.book__maintitle {
    font-weight: bold;
    font-size: 48px;
    color: #575153;
    text-transform: uppercase;
    line-height: 48px;
    margin-bottom: 15px;
}
.book__title {
    line-height: 48px;
    font-weight: 300;
    font-size: 48px;
    color: #575153;
    text-transform: uppercase;
    margin-bottom: 30px;
}
.book__item {
    margin-left: 20px;
}
.book__img {
    height: 100%;
    width: 100%;
}

/* MEDIA */

@media (max-width: 1279px) { 

    .cards__prices {
        font-size: 16px;
    }
}
@media (max-width: 999px) { 
    .cards__prices {
        font-size: 14px;
    }
    .look__book{
        flex-direction: column;
    }

}
@media (max-width: 768px) { 
    
    /* SELLS */
    .cards__inner {
        display: flex;
        flex-direction: column;
        width: 100%;
        
        gap: 30px;
    }
   
    img{
        height:100vw;
        width: 100%;
    }
    .card__item{
        width: 100%;
    }
    .nav__nav-sells{
        display: flex;
        text-align: center;
        
        justify-content: center;
    }

    .cards__prices {
        font-size: 21px;
    }

   
    .look__book{
        margin-bottom: 50px;
    }
   
}
</style>
