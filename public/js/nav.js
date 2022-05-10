const isDescendant = function (parent, child) {
    let node = child;
    while (node) {
        if (node === parent) {
            return true;
        }

        // Traverse up to the parent
        node = node.parentNode;
    }
    // Go up until the root but couldn't find the parent
    return false;
};

const nav__linkm = document.getElementById("nav__item-mens");
const menu__blockm = document.getElementById("item__block-mens");

const nav__linkw = document.getElementById("nav__item-womens");
const menu__blockw = document.getElementById("item__block-womens");

const nav__linklc = document.getElementById("nav__item-lc");
const menu__blocklc = document.getElementById("item__block-lc");

const nav__linkbk = document.getElementById("nav__item-bk");
const menu__blockbk = document.getElementById("item__block-bk");

let check1 = 0;
let check2 = 0;
let check3 = 0;
let check4 = 0;


nav__linkm.addEventListener("click", function onClick() {
    menu__blockm.style.display = "flex";
    check1 =  1;
});

nav__linkw.addEventListener("click", function onClick() {
    menu__blockw.style.display = "flex";
    check2 = check2 + 1;
});

nav__linklc.addEventListener("click", function onClick() {
    menu__blocklc.style.display = "flex";
    check3 = check3 + 1;
});

nav__linkbk.addEventListener("click", function onClick() {
    menu__blockbk.style.display = "flex";
    check4 = check4 + 1;
});

window.addEventListener("click", function (event) {
    if (isDescendant(menu__blockm, event.target)) return;
    if (isDescendant(menu__blockw, event.target)) return;
    if (isDescendant(menu__blocklc, event.target)) return;
    if (isDescendant(menu__blockbk, event.target)) return;

    if (event.target !== nav__linkm) {
        menu__blockm.style.display = "none";
        check1 = 0;

    } else {
        if (check1 % 2 === 0) {
            menu__blockm.style.display = "none";
            console.log(check1)
        }
    }

    if (event.target !== nav__linkw) {
        menu__blockw.style.display = "none";
        check2 = 0;
    } else {
        if (check2 % 2 === 0) {
            menu__blockw.style.display = "none";
        }
    }

    if (event.target !== nav__linklc) {
        menu__blocklc.style.display = "none";
        check3 = 0;
    } else {
        if (check3 % 2 === 0) {
            menu__blocklc.style.display = "none";
        }
    }

    if (event.target !== nav__linkbk) {
        menu__blockbk.style.display = "none";
        check4 = 0;
    } else {
        if (check4 % 2 === 0) {
            menu__blockbk.style.display = "none";
        }
    }
});

const iconMenu = document.querySelector('.nav__icon');
const bodyMenu = document.querySelector('.nav__nav');
if(iconMenu){
 
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle('_active');
        bodyMenu.classList.toggle('_active');
    });
if(iconMenu.classList.contains('_active')){
    document.body.classList.remove("_lock");
        iconMenu.classList.remove('_active');
        bodyMenu.classList.remove('_active');
}

}
