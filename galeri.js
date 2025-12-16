const cards = document.querySelectorAll(".gallery-container .card");

function tampilNamaProduk(card, nama) {
    const captionArea = card.querySelector(".card-body");

    const captionLama = captionArea.querySelector(".nama-produk");
    if (captionLama) captionLama.remove();

    const caption = document.createElement("p");
    caption.className = "nama-produk";
    caption.textContent = "Foto: " + nama;

    captionArea.appendChild(caption);
}

cards.forEach(card => {
    const img = card.querySelector("img");
    if (!img) return;

    const namaProduk = img.alt || "Produk Filaz Nastar";

    img.addEventListener("click", () => {
        tampilNamaProduk(card, namaProduk);
    });

    img.addEventListener("mouseenter", () => {
        img.classList.add("hover-zoom");
    });

    img.addEventListener("mouseleave", () => {
        img.classList.remove("hover-zoom");
    });
});
