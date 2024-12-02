document.addEventListener('DOMContentLoaded', () => {
    const pages = ["website", "cc", "product", "about-me"];

    pages.forEach((page, index) => {
        const container = document.querySelector(`.container${index + 1}`); 
        if (container) {
            container.addEventListener('click', () => {
                window.location.href = `${page}.html`; 
            });
        } else {
            console.error(`.container${index + 1} not found`);
        }
    });

    const island = document.querySelector('.island');
    if (island) {
        island.classList.add('animate'); // Add class to trigger animations
    }


});//DOMContentLoaded
