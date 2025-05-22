let currentIndex = 0;
let imageElements = [];

function openFullImage(src) {
    imageElements = Array.from(document.querySelectorAll(".galleryImage"))
        .filter(img => img.style.display !== "none");

    currentIndex = imageElements.findIndex(img => img.src === src);
    updateFullImage();
    document.getElementById("fullImageBox").classList.add("show");
}

function updateFullImage() {
    const fullImage = document.getElementById("fullImage");
    const description = document.getElementById("imageDescription");
    const counter = document.getElementById("imageCounter");

    const currentImg = imageElements[currentIndex];
    fullImage.src = currentImg.src;
    description.textContent = currentImg.getAttribute("data-description") || "";
    counter.textContent = `${currentIndex + 1} / ${imageElements.length}`;
}

function showNextImage() {
    if (currentIndex < imageElements.length - 1) {
        currentIndex++;
        updateFullImage();
    }
}

function showPrevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateFullImage();
    }
}

function closeFullImage() {
    document.getElementById("fullImageBox").classList.remove("show");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const themeButton = document.getElementById("themeButton");
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️"; 
    } else {
        themeButton.textContent = "🌙"; 
    }
}

function filterImages() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const images = document.querySelectorAll(".galleryImage");

    images.forEach(img => {
        const name = (img.getAttribute('data-description') || img.getAttribute('alt') || '').toLowerCase();

        if (name.includes(input)) {
            img.style.display = 'inline-block';
        } else {
            img.style.display = 'none';
        }
    });
}

function filterByCategory(category) {
    const images = document.querySelectorAll(".galleryImage");

    images.forEach(image => {
        const imageCategory = image.dataset.category;
        
        if (category === "all" || imageCategory === category) {
            image.style.display = "inline-block";
        } else {
            image.style.display = "none";
        }
    });
}
