<template>
    <header
        id="header"
        class="containerr"
        :style="[
            $route.path == '/'
                ? { 'background-color': '#f8f8f8', height: '100vh   ' }
                : { 'background-color': '#fff', height: 'auto' },
        ]"
    >
        <div class="header">
            <div class="header__box">
                <div class="header__left">
                    Currency :
                    <select
                        name="user_profile_color_1"
                        onchange="SaveSelectValue(this)"
                        class="header__select"
                        id="header__select"
                    >
                        <option value="£">GBP</option>
                        <option value="$">USD</option>
                        <option value="€">EUR</option>
                    </select>
                </div>
                <div class="header__right">
                    <ul class="header__items">
                        <li class="header__item item__des">
                            <a href="#/signup">Register</a>
                        </li>
                        <li class="header__item item__des">
                            <a href="#/signup">Sign In</a>
                        </li>
                        <li class="header__item sign-icon">
                            <a href="#/signup"
                                ><i class="fa-solid fa-user"></i
                            ></a>
                        </li>
                        <li class="header__item item">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <div class="item__text">
                                Empty<i class="fa-solid fa-angle-down"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <nav class="nav" v-if="$route.path == '/'">
            <div class="nav__up">
                <div class="nav__logo">
                    <a href="index.html"><span>AVENUE</span> FASHION</a>
                </div>
                <div class="nav__icon">
                        <span></span>
                    </div>
                <div class="nav__nav">
                    <ul class="nav__items nav__items-up">
                        <li class="nav__link">
                            <div class="nav__item item" id="nav__item-mens">
                                MENS
                            </div>
                            <i class="fa-solid fa-angle-down"></i>
                            <div class="item__block" id="item__block-mens">
                                <div class="item__item">
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Casuals
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Jackets</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Hoodies & Sweatshirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Polo Shirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Sportswear</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Trousers & Chinos</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >T-Shirts</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Formal
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Jackets</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Shirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html">Suits</a>
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Trousers</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item__item">
                                    <div class="item__discount">
                                        <nobr> <span>Autumn sale!</span></nobr
                                        ><br />
                                        up to 50% off
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav__link">
                            <div class="nav__item item" id="nav__item-womens">
                                Womens
                            </div>
                            <i class="fa-solid fa-angle-down"></i>
                            <div class="item__block" id="item__block-womens">
                                <div class="item__item">
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Casuals
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Jackets</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Hoodies & Sweatshirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Polo Shirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Sportswear</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Trousers & Chinos</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >T-Shirts</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Formal
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Jackets</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Shirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html">Suits</a>
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Trousers</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item__item">
                                    <div class="item__discount">
                                        <nobr> <span>Autumn sale!</span></nobr
                                        ><br />
                                        up to 50% off
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav__link">
                            <a href="#/load" class="nav__item item"
                                >THE BREND
                            </a>
                        </li>
                        <li class="nav__link">
                            <div
                                href="#"
                                class="nav__item item"
                                id="nav__item-lc"
                            >
                                LOCAL STORES
                            </div>
                            <i class="fa-solid fa-angle-down"></i>
                            <div class="item__block" id="item__block-lc">
                                <div class="item__item">
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                LOCAL STORES
                                            </li>
                                            <li class="item__li">
                                                <a href="localstores.html"
                                                    >London</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="localstores.html"
                                                    >New York</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="localstores.html"
                                                    >Paris</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item__item">
                                    <div class="item__discount">
                                        <nobr> <span>Autumn sale!</span></nobr
                                        ><br />
                                        up to 50% off
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav__link">
                            <div
                                href="#"
                                class="nav__item item"
                                id="nav__item-bk"
                            >
                                THE BOOK
                            </div>
                            <i class="fa-solid fa-angle-down"></i>
                            <div
                                class="item__block item__block-last"
                                id="item__block-bk"
                            >
                                <div class="item__item">
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Our Lookbooks
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html"
                                                    >Latest Posts (mixed)</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html"
                                                    >Men’s Lookbook</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html"
                                                    >Women’s Lookbook</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Your Lookbook
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html"
                                                    >View and Edit</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html">Share</a>
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html"
                                                    >Delete</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item__item">
                                    <div class="item__discount">
                                        <nobr> <span>Autumn sale!</span></nobr
                                        ><br />
                                        up to 50% off
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="nav__search">
                        <i class="fas fa-search"></i>
                        <input type="search" placeholder="Search..   " />
                    </div>
                </div>
            </div>
            <div class="nav__title">
                <div class="nav__letter">A</div>
                <div class="nav__letter">V</div>
                <div class="nav__letter">E</div>
            </div>
            <div class="nav__button">
                <a href="#" class="nav__btn"> shop men’s collection</a>
            </div>
            <div class="nav__img">
                <img src="../images/nav/man.png" alt="" class="nav__man" />
            </div>
        </nav>
        <nav class="nav nav-nmain" v-else>
            <div class="nav__up nav__up-nmain">
                <div class="nav__logo">
                    <a href="../index.html"><span>AVENUE</span> FASHION</a>
                </div>
                 <div class="nav__icon">
                        <span></span>
                    </div>
                <div class="nav__nav">
                    <ul class="nav__items nav__items-up">
                        <li class="nav__link">
                            <div class="nav__item item" id="nav__item-mens">
                                MENS
                            </div>
                            <i class="fa-solid fa-angle-down"></i>
                            <div class="item__block" id="item__block-mens">
                                <div class="item__item">
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Casuals
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Jackets</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Hoodies & Sweatshirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Polo Shirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Sportswear</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Trousers & Chinos</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >T-Shirts</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Formal
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Jackets</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Shirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html">Suits</a>
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Trousers</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item__item">
                                    <div class="item__discount">
                                        <nobr> <span>Autumn sale!</span></nobr
                                        ><br />
                                        up to 50% off
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav__link">
                            <div class="nav__item item" id="nav__item-womens">
                                Womens
                            </div>
                            <i class="fa-solid fa-angle-down"></i>
                            <div class="item__block" id="item__block-womens">
                                <div class="item__item">
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Casuals
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Jackets</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Hoodies & Sweatshirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Polo Shirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Sportswear</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Trousers & Chinos</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >T-Shirts</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Formal
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Jackets</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Shirts</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html">Suits</a>
                                            </li>
                                            <li class="item__li">
                                                <a href="product.html"
                                                    >Trousers</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item__item">
                                    <div class="item__discount">
                                        <nobr> <span>Autumn sale!</span></nobr
                                        ><br />
                                        up to 50% off
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav__link">
                            <a href="#/load" class="nav__item item"
                                >THE BREND
                            </a>
                        </li>
                        <li class="nav__link">
                            <div
                                href="#"
                                class="nav__item item"
                                id="nav__item-lc"
                            >
                                LOCAL STORES
                            </div>
                            <i class="fa-solid fa-angle-down"></i>
                            <div class="item__block" id="item__block-lc">
                                <div class="item__item">
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                LOCAL STORES
                                            </li>
                                            <li class="item__li">
                                                <a href="localstores.html"
                                                    >London</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="localstores.html"
                                                    >New York</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="localstores.html"
                                                    >Paris</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item__item">
                                    <div class="item__discount">
                                        <nobr> <span>Autumn sale!</span></nobr
                                        ><br />
                                        up to 50% off
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav__link">
                            <div
                                href="#"
                                class="nav__item item"
                                id="nav__item-bk"
                            >
                                THE BOOK
                            </div>
                            <i class="fa-solid fa-angle-down"></i>
                            <div
                                class="item__block item__block-last"
                                id="item__block-bk"
                            >
                                <div class="item__item">
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Our Lookbooks
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html"
                                                    >Latest Posts (mixed)</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html"
                                                    >Men’s Lookbook</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html"
                                                    >Women’s Lookbook</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="item__list">
                                        <ul class="item__ul">
                                            <li class="item__li item__li-main">
                                                Your Lookbook
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html"
                                                    >View and Edit</a
                                                >
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html">Share</a>
                                            </li>
                                            <li class="item__li">
                                                <a href="thebook.html"
                                                    >Delete</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item__item">
                                    <div class="item__discount">
                                        <nobr> <span>Autumn sale!</span></nobr
                                        ><br />
                                        up to 50% off
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="nav__search">
                        <i class="fas fa-search"></i>
                        <input type="search" placeholder="Search..   " />
                    </div>
                </div>
            </div>
            <div class="nav__main">
                <div class="nav__text" v-if="$route.path == '/load'">
                    <div class="nav__mtitle"><span>The</span> brand</div>
                    <div class="nav__stitle">company slogan goes here</div>
                </div>
                <div class="nav__text" v-else-if="$route.path == '/signup'">
                    <div class="nav__mtitle"><span>Welcome</span> to Ave</div>
                    <div class="nav__stitle">sign in or register</div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    mounted() {
        let Script3 = document.createElement("script");
        Script3.setAttribute("src", "../js/sells.js ");
        
        let Script1 = document.createElement("script");
        Script1.setAttribute("src", "../js/nav.js ");

        let Script2 = document.createElement("script");
        Script2.setAttribute("src", "../js/likes.js ");

        let Script5 = document.createElement("script");
        Script5.setAttribute("src", "../js/select.js ");

        let Script4 = document.createElement("script");
        Script4.setAttribute("src", "../js/sells__modal.js ");

        document.head.appendChild(Script1); 
        document.head.appendChild(Script2);
        document.head.appendChild(Script3);
        document.head.appendChild(Script4); 
        documen
    },
};
</script>
<style>
.header {
    width: 100%;
    background-color: #333333;
    z-index: 999;
}

.header__box {
    max-width: 1230px;
    padding: 0px 30px;
    margin: 0 auto;
    color: #999999;
    height: 45px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__items {
    display: flex;
    gap: 40px;
    align-items: center;
}
.header__item a {
    color: #999999;
    transition: all 0.3s ease 0s;
}
.header__item a:hover {
    color: #00c8c8;
}

.header__item:last-child {
    background-color: #00c8c8;
    color: #fff;
    height: 45px;
    align-items: center;
    padding: 0 25px;
    display: flex;
    gap: 25px;
    margin-left: 43px;
}
.header__select {
    background-color: #333333;
    color: #999999;
    border: none;
}
.sign-icon {
    display: none;
}
.fa-cart-shopping {
    font-size: 18px;
}

.fa-angle-down {
    margin-left: 10px;
}

/* NAV */

.nav {
    max-width: 1840px;
    margin: 0 auto;
    height: calc(100vh - 45px);
    padding: 45px 30px 45px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.nav-nmain {
    justify-content: flex-start;
    padding: 45px 0px 0px 0px;
    height: 100%;
    gap: 45px;
}

.nav__main {
    display: flex;
    justify-content: center;

    height: 450px;

    background-size: 100% 100%;
    background-image: linear-gradient(
            to top,
            rgba(51, 51, 51, 0.7),
            rgba(51, 51, 51, 0.7)
        ),
        url("../images/bgc/bgc.png");
}
.nav__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    margin: 0 auto;
    width: 100%;
    max-width: 1585px;
    padding: 0 30px;

    line-height: 54px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #fff;
}
.nav__icon {
    display: none;
}
.nav__logo a {
    color: #000;
}
.nav__mtitle {
    font-size: 48px;
    font-weight: 300;
}
.nav__mtitle span {
    font-weight: bold;
}
.nav__stitle {
    font-size: 30px;
}

.nav__up {
    z-index: 5;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.nav__up-nmain {
    padding: 0px 30px;
}

.nav__nav {
    display: flex;
    gap: 115px;
}

.nav__items {
    display: flex;
    justify-content: space-between;
    z-index: 10;
    gap: 55px;
}
.nav__items-up li {
    position: relative;
    top: 12px;
}

.nav__item {
    display: flex;
    text-transform: uppercase;
    font-size: 13px;
    color: #222222;
    transition: all 0.3s ease 0s;
}
.nav__items li .fa-angle-down {
    position: relative;
    top: -5px;
    margin-left: 0px;
    font-size: 10px;
}
.fa-solid {
    transition: all 0.3s ease 0s;
}
.nav__link:hover .nav__item {
    color: #00c8c8;
}
.nav__link:hover .fa-solid {
    color: #00c8c8;
}
.nav__item:hover {
    color: #00c8c8;
}

.nav__logo {
    font-size: 24px;
    z-index: 10;
}
.nav__logo a {
    color: #000;
}
.nav__logo span {
    font-weight: bold;
}

.nav__search {
    align-self: center;
    position: relative;
}

.nav__search input {
    font-size: 13px;
    height: 30px;
    border: 1px solid #e7e7e7;
    background-color: #f8f8f8;
    padding: 10px;
    width: 190px;
}

.fa-search {
    position: absolute;
    right: 10px;
    top: 7px;
    color: #9e9e9e;
}

.nav__search input::placeholder {
    background-color: #f8f8f8;
    line-height: 1;
    color: #dbbdbd;
}

.nav__title {
    max-width: 1620px;
    padding: 0 45px;
    width: 100%;
    margin: 0 auto;
    font-weight: bold;
    color: #575153;
    display: flex;
    justify-content: space-between;
}

.nav__letter {
    z-index: 3;
    font-size: 450px;
    line-height: 324px;
}
.nav__button {
    max-width: 1340px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: end;
    position: relative;
    bottom: 9%;
    z-index: 2;
}
.nav__btn:hover {
    background-color: #00c8c8;
    color: #fff;
    border: 1px solid #00c8c8;
}
.nav__btn {
    z-index: 9;
    display: inline-block;
    border: 1px solid #737373;
    color: #454647;
    padding: 17px 41px;
    letter-spacing: 2px;
    font-size: 16px;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
}
.nav__img {
    position: absolute;
    top: 45px;
    padding-left: 9%;
}
.nav__man {
    height: calc(100vh - 45px);
}
/* ITEMS */

.look__book {
    margin-bottom: 110px;
}

.item__block {
    position: absolute;
    display: none;
    flex-direction: column;
    gap: 40px;

    padding: 30px;
    padding-top: 15px;

    background-color: #f8f8f8;
    box-shadow: 0px 40px 47px 0px rgba(0, 0, 0, 0.4);

    z-index: 500;
}
.item__block-last {
    right: 0px;
}

.item__item {
    display: flex;
    gap: 90px;
}
.item__ul {
    display: flex;
    flex-direction: column;
    gap: 11px;

    text-transform: none;
}
.item__li a {
    font-size: 14px;
    font-weight: 300;
    color: #727272;
    transition: all 0.3s ease 0s;
}
.item__li a:hover {
    color: #00c8c8;
}
.item__li-main {
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;

    color: #575153;
}
.item__discount {
    padding: 45px 62px;

    font-size: 36px;
    text-transform: uppercase;

    background-color: #333333;
    color: #fff;
}
.item__discount span {
    font-weight: bold;
}

/* MEDIA */

@media (max-width: 1279px) {
    .nav__search input {
        width: 150px;
        font-size: 12px;
    }
    .nav__nav {
        gap: 70px;
    }
    .nav__items {
        gap: 30px;
    }
    .nav__item {
        font-size: 12px;
    }
    .nav__logo {
        font-size: 20px;
    }
    .nav {
        padding: 30px 15px 45px 15px;
    }
    .nav__letter {
        font-size: 400px;
    }
    .nav__btn {
        font-size: 14px;
        padding: 13px 35px;
    }
}
@media (max-width: 999px) {
    .nav__search input {
        width: 120px;
        font-size: 12px;
    }
    .nav__nav {
        gap: 30px;
    }
    .nav__items {
        gap: 20px;
    }
    .nav__item {
        font-size: 11px;
    }
    .nav__logo {
        font-size: 18px;
    }
    .nav__letter {
        font-size: 300px;
    }
}

@media (max-width: 768px) {
    .item__des {
        display: none;
    }
    .sign-icon {
        display: block;
    }
    .header__item:last-child {
        margin-left: 0px;
    }
    .header__box {
        padding: 0 0 0 30px;
    }
    .header__items {
        gap: 30px;
    }
    .nav__up {
        padding: 0px 0px 15px 0px;
    }
    .nav__letter {
        font-size: 150px;
    }
    .nav__title {
        padding: 0px 10px;
    }
    .nav__img {
        display: none;
    }
    .nav__button {
        justify-content: center;
    }
    .nav__nav-sells {
        display: flex;
        text-align: center;
        justify-content: center;
    }
    
    .nav__main {
        background-size: auto 100%;
        background-repeat: no-repeat;
    }

    .nav__nav {
        flex-direction: column;
    }
    .nav__items {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .nav__up {
        align-items: flex-start;
    }
    .nav__icon {
        z-index: 5;
        display: block;
        position: relative;
        width: 30px;
        height: 18px;
        cursor: pointer;
    }
    .nav__icon::before,
    .nav__icon::after,
    .nav__icon span {
        left: 0;
        position: absolute;
        width: 100%;
        height: 10%;
        transition: all 0.3s ease 0s;
        background-color: #000;
    }
    .nav__icon::before,
    .nav__icon::after {
        content: "";
    }
    .nav__icon::before {
        top: 0;
    }
    .nav__icon::after {
        bottom: 0;
    }
    .nav__icon span {
        top: 50%;
        transform :scale(1) translate(0px, -50%) ;
    }
    .nav__nav{
        position: fixed;
        top:0;
        left:-100%;
        width: 100%;
        height:100%;
        background-color: rgba(0,0,0,0.9);
        color:#fff;
        padding: 100px 30px 30px 30px;
        transition: left 0.3s ease 0s;
        align-items:flex-start;
    }
    .nav__nav._active{
        left:0;
    }
    .nav__item{
        color:#fff;
        font-size: 20px;
    }
    .nav__search{
        align-self:flex-start;
    }
    .nav__search input{
        width:200px;
    }
    body._lock{
        overflow: hidden;
    }
    .nav__icon._active span{ 
        transform:scale(0) translate(0px,-50%);
        background-color: #fff;

    }
    .nav__icon._active::before,
     .nav__icon._active::after
    {
        background-color: #fff;
    }
    .nav__icon._active::before{
        top:50%;
        transform: rotate(-45deg) translate(0px,-50%);
    }
    .nav__icon._active::after{
        top:50%;
        transform: rotate(45deg) translate(0px,50%);
    }
}
</style>
