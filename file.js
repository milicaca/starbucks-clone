const tabs = document.querySelector(".menu-list");
const tabButton = document.querySelectorAll(".tab-button");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(a => {
            a.classList.remove("active");
        });
        e.target.classList.add("active");


    }
}


const fav = document.querySelector(".favorites-button");
const tabFavorite = document.querySelectorAll(".tab-favorite");
const contents = document.querySelectorAll(".content");

fav.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabFavorite.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");

    }

}