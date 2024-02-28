document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const images = document.querySelectorAll("#gallery img");
    const body = document.body;

    // Replace 'path/to/your/images/folder' with the actual path to your images folder
    const imagesPath = 'images';

    // Fetch the JSON file containing image file names
    fetch('imageFileNames.json')
        .then(response => response.json())
        .then(data => {
            data.images.forEach((fileName, index) => {
                const img = document.createElement("img");
                img.src = `${imagesPath}/${fileName}`;
                img.alt = `Image ${index + 1}`;
                gallery.appendChild(img);
            });

            // Add a fade-in effect for each image on scroll
            window.addEventListener("scroll", function () {
                images.forEach(img => {
                    const imgTop = img.getBoundingClientRect().top;
                    const imgBottom = img.getBoundingClientRect().bottom;

                    if (imgTop < window.innerHeight && imgBottom >= 0) {
                                    // Check if the image is at least partially visible in the viewport
            if (imgTop < window.innerHeight && imgBottom >= 0) {
                img.classList.add("visible");
            }
                    }
                });
            });

            // Trigger the scroll event to apply initial fade-in
            window.dispatchEvent(new Event('scroll'));
        })
        .catch(error => console.error('Error fetching image file names:', error));
});