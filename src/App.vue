<template>
    <Header />
    <router-view></router-view>
    <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
import Load from "./components/Load.vue";


  

export default {
    name: "App",  
    components: {
        Header,
        Main,
        Footer,
        Load
    },    

  
};

</script>

<style>
/* Указываем box sizing */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Убираем внутренние отступы */
ul[class],
ol[class] {
    padding: 0;
}

a {
    text-decoration: none;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
    margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
}

.product__block {
    padding: 60px 0;
}

.container {
    max-width: 1840px;
    padding: 0 30px;
    width: 100%;
    margin: 0 auto;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
    list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
    text-decoration-skip-ink: auto;
}

/* Упрощаем работу с изображениями */
img {
    max-width: 100%;
    display: block;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
    font: inherit;
}

ul,
li {
    text-decoration: none;
    list-style-type: none;
}

/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

body {
    font-family: "Montserrat", sans-serif;
}
</style>
