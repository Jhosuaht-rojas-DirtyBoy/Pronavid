document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".opciones-track");
    const items = Array.from(track.children);
    const prevBtn = document.querySelector("#btn-prev");
    const nextBtn = document.querySelector("#btn-next");

    // Clones para que sea circular
    const firstClone = items[0].cloneNode(true);
    const lastClone = items[items.length - 1].cloneNode(true);

    track.insertBefore(lastClone, items[0]);
    track.appendChild(firstClone);

    const allItems = document.querySelectorAll(".btn-opcion");
    let index = 1;
    let itemWidth = allItems[0].offsetWidth + 24;

    track.style.transform = `translateX(${-index * itemWidth}px)`;

    function updateWidth() {
        itemWidth = allItems[0].offsetWidth + 24;
        track.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    window.addEventListener("resize", updateWidth);

    function moveToIndex() {
        track.style.transition = "transform 0.45s ease";
        track.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index++;
        moveToIndex();

        setTimeout(() => {
            if (index === allItems.length - 1) {
                track.style.transition = "none";
                index = 1;
                track.style.transform = `translateX(${-index * itemWidth}px)`;
            }
        }, 460);
    });

    prevBtn.addEventListener("click", () => {
        index--;
        moveToIndex();

        setTimeout(() => {
            if (index === 0) {
                track.style.transition = "none";
                index = allItems.length - 2;
                track.style.transform = `translateX(${-index * itemWidth}px)`;
            }
        }, 460);
    });
});
