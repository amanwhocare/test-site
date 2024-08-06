function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60, // Adjust for the fixed nav height
        behavior: 'smooth'
    });
}
