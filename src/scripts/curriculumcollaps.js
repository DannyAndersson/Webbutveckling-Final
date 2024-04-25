// toggle collapsible sections in the curriculum page
function toggleCollapsible() {
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // find sibling section-collapsible and toggle its display
            const collapsibleSection = header.nextElementSibling;
            const arrow = header.querySelector('h1'); // Arrow element to be updated
            if (collapsibleSection.classList.contains('collapsible-expanded')) {
                collapsibleSection.classList.remove('collapsible-expanded');
                arrow.textContent = "► " + arrow.textContent.slice(2); // change arrow to point right - collapsed
            } else {
                collapsibleSection.classList.add('collapsible-expanded');
                arrow.textContent = "▼ " + arrow.textContent.slice(2); // change arrow to point down - expanded
            }
        });
    });
}

// toggle collapsible sections on page load, to have them collapsed by default
document.addEventListener('DOMContentLoaded', toggleCollapsible);
