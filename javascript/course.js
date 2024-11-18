document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const cards = document.querySelectorAll('.card');

    // Function to filter courses
    const filterCourses = (category) => {
        cards.forEach((card) => {
            if (card.dataset.category === category || category === 'all') {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    };

    // Function to toggle active button state
    const toggleActiveButton = (clickedButton) => {
        buttons.forEach((button) => {
            button.classList.remove('active');
        });
        clickedButton.classList.add('active');
    };

    // Set default filter (IT courses)
    filterCourses('it');
    document.getElementById('btn-it').classList.add('active'); // Mark IT button as active initially

    // Add click event to buttons
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterCourses(category); // Filter courses based on the selected category
            toggleActiveButton(button); // Mark clicked button as active
        });
    });
});
