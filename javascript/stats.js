document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat h3");
    const speed = 100; // Adjust this value to control counting speed

    const startCounting = (counter) => {
        const target = +counter.getAttribute("data-count"); // Convert data-count to a number
        const type = counter.getAttribute("data-type"); // Get the type (e.g., "plus", "percent")
        let count = 0;

        const updateCount = () => {
            const increment = Math.ceil(target / speed); // Determine increment value

            if (count < target) {
                count += increment;
                if (count > target) count = target; // Prevent overshooting

                // Update the text based on type
                counter.textContent = type === "percent" ? `${count}%` : `${count} +`;
                setTimeout(updateCount, 30); // Call the function recursively
            } else {
                // Final value
                counter.textContent = type === "percent" ? `${target}%` : `${target} +`;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    startCounting(counter);
                    observer.unobserve(counter); // Stop observing once counting starts
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    counters.forEach((counter) => observer.observe(counter));
});
