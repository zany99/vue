<template>
    <aside class="block__social">
        <div class="social__blocks">
            <div class="social__items socials__items-link">
                <div class="social__links">
                    <ul class="social__list">
                        <li class="social__link"><span>Information</span></li>
                        <li class="social__link">
                            <a href="#" class="social__a">The brand</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Local stories</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Customer service</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Privacy & cookies</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Site map</a>
                        </li>
                    </ul>
                </div>
                <div class="social__links">
                    <ul class="social__list">
                        <li class="social__link">
                            <span>Why buy from us</span>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Shipping & returns</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Secure shopping</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Testimonials</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Award winning</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Ethical trading</a>
                        </li>
                    </ul>
                </div>
                <div class="social__links">
                    <ul class="social__list">
                        <li class="social__link"><span>Your account</span></li>
                        <li class="social__link">
                            <a href="#" class="social__a">Sign in</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Register</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">View cart</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">View your lookbook</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Track an order</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Update information</a>
                        </li>
                    </ul>
                </div>
                <div class="social__links">
                    <ul class="social__list">
                        <li class="social__link"><span>Lookbook</span></li>
                        <li class="social__link">
                            <a href="#" class="social__a">Latest posts</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Men’s lookbook</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Women’s lookbook</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">Lookbooks RSS feed</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a">View your lookbook</a>
                        </li>
                        <li class="social__link">
                            <a href="#" class="social__a"
                                >Delete your lookbook</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="social__links">
                    <ul class="social__list">
                        <li class="social__link">
                            <span>contact details</span>
                        </li>
                        <li class="social__link">
                            <a
                                href="https://www.google.com.ua/maps/place/180-182+Regent+St.,+London+W1B+5TW,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/@51.5124729,-0.1420052,17z/data=!3m1!4b1!4m5!3m4!1s0x487604d5742d021f:0xa612bb1b1adfcb37!8m2!3d51.5124696!4d-0.1398165?hl=ru"
                                class="social__a"
                                >Head Office: Avenue Fashion, <br />
                                180-182 Regent Street, London.</a
                            >
                        </li>
                        <li class="social__link">
                            <a href="tel:+380934767446" class="social__a"
                                >Telephone: 0123-456-789
                            </a>
                        </li>
                        <li class="social__link">
                            <a
                                href="mailto:gooddaymyfriend3@gmail.com?subject=Avenue support!"
                                class="social__a"
                                >Email: support@yourwebsite.com</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <div class="social__items social__items-down">
                <div class="social__award social__award-black">
                    <span>award winner </span><br />
                    fashion awards 2016
                </div>
                <div class="social__award social__award-blue">
                    <div class="social__i">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </aside>
    <footer class="footer">
        <div class="footer__block">
            <div class="footer__items">© 2022 Avenue Fashion™</div>
            <div class="footer__items">
                <div class="footer__item">Design by RobbyDesigns.com</div>
                <div class="footer__item">Dev by Loremipsum.com</div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "Footer",
};
</script>
<style>
.block__social {
    width: 100%;
    background-color: #f8f8f8;
}
.social__blocks {
    max-width: 1235px;
    width: 100%;
    margin: 0 auto;
    padding: 60px 30px;
    display: flex;
    gap: 60px;
    flex-direction: column;
    justify-content: space-between;
}
.social__items {
    display: flex;
    justify-content: space-between;
}
.social__award {
    width: 48.5%;
    color: #fff;
    font-size: 36px;
    text-align: center;
}
.social__award-black {
    background-color: #333333;
    font-weight: 300;
    padding: 46px 60px;
    text-transform: uppercase;
}
.social__award-black span {
    font-weight: bold;
}
.social__award-blue {
    display: flex;
    align-items: center;
    background-color: #00c8c8;
}
.social__i {
    max-width: 285px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.social__i a {
    color: #fff;
}
.social__a {
    font-size: 14px;
    font-weight: 300;
    color: #727272;
}
.social__link span {
    font-size: 13px;
    text-transform: uppercase;
    color: #575153;
}
.social__link:first-child {
    margin-bottom: 10px;
}

.social__list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
}

/* FOOTER */

.footer {
    width: 100%;
    background-color: #333333;
}
.footer__block {
    max-width: 1235px;
    width: 100%;
    margin: 0 auto;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer__items {
    display: flex;
    gap: 40px;
    font-size: 13px;
    color: #777777;
}

@media (max-width: 768px) { 
        
    .social__items-down{
        flex-direction: column;
    }
    .social__award{
        width: 100%;
        font-size: 30px;
    }
    .social__award-black{
        padding: 40px 30px;
    }
    .social__award-blue{
        height: 150px;
        padding: 0px 30px;
    }
    .socials__items-link{
        display: grid;
        grid-template-columns: repeat(2, 2fr);
    }
    .social__blocks{
        padding: 15px 15px;
        gap:30px;
    }
    .social__links{
        padding-top: 10px;
    }
    
    .footer__item{
        display: none;
    }
    
}
</style>
