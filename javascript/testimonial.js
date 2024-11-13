document.addEventListener('DOMContentLoaded', function () {
    const initialTestimonials = 4;
    const testimonialsContainer = document.querySelector('.testimonial-container');
    let isExpanded = false;

    // Real testimonials array
    const realTestimonials = [
        {
            name:"Tejas Dhane",
            rating:"★★★★★",
            text:"I got placed within a month. The teaching is excellent, and they even offer paid projects. They prepare you for interviews and help you upgrade your skills. Overall, a great experience."
        },{
            name:"Kasturi Raut",
            rating:"★★★★★",
            text:"Great experience learning from industry experts. Highly recommend this institute for quality training and placement. Thank you! 😊"
        },{
            name: "Nikhil Baburao Shivalkar",
            rating: "★★★★★",
            text: "Had a wonderful learning experience. Completed Auto-CAD 2D & 3D Max & Revit. Supportive staff and experienced faculties. Highly recommended. I got a core job and am very happy to have joined."
        },
        {
            name: "Pritam Shinde",
            rating: "★★★★★",
            text: "Excellent experience and the right platform to get a job. I got a placement within a week of registration. Excellent teaching by Hanif Sir, and all commitments from Priya Mam were fulfilled."
        },
        {
            name: "Girish Dinkar",
            rating: "★★★★★",
            text: "Joined for AutoCAD and SolidWorks design courses. Ankita mam teaches very well and has a deep knowledge of the subject. Highly recommended."
        },
        {
            name: "Machhindra Kapade",
            rating: "★★★★★",
            text: "Mayur Sir provides quality training and life lessons in lectures.."
        }
    ];

    // Truncate and expand text
    document.querySelectorAll('.testimonial-card .read-more').forEach(readMore => {
        readMore.addEventListener('click', toggleReadMore);
    });

    // Load more testimonials on button click
    document.getElementById('see-more').addEventListener('click', function () {
        if (!isExpanded) {
            loadMoreTestimonials();
            this.textContent = 'Show Less';
            isExpanded = true;
        } else {
            collapseTestimonials();
            this.textContent = 'See More';
            isExpanded = false;
        }
    });

    // Function to load more real testimonials
    function loadMoreTestimonials() {
        realTestimonials.forEach((testimonial) => {
            const card = document.createElement('div');
            card.classList.add('testimonial-card');
            card.innerHTML = `
                <h3>${testimonial.name}</h3>
                <div class="rating">${testimonial.rating}</div>
                <p class="testimonial-text" style="-webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;">
                    ${testimonial.text}
                </p>
                <span class="read-more">Read more</span>
            `;
            testimonialsContainer.appendChild(card);
        });
        addReadMoreEvent();
    }

    // Function to collapse additional testimonials
    function collapseTestimonials() {
        const cards = document.querySelectorAll('.testimonial-card');
        cards.forEach((card, index) => {
            if (index >= initialTestimonials) {
                card.remove();
            }
        });
    }

    // Function to add event listener to "Read more" links in newly loaded testimonials
    function addReadMoreEvent() {
        document.querySelectorAll('.testimonial-card .read-more').forEach(readMore => {
            readMore.removeEventListener('click', toggleReadMore); // Remove existing listener if any
            readMore.addEventListener('click', toggleReadMore);
        });
    }

    // Function to toggle "Read more" and "Read less" states
    function toggleReadMore() {
        const textElement = this.previousElementSibling;
        if (textElement.style.webkitLineClamp === '3') {
            textElement.style.webkitLineClamp = 'unset';
            textElement.style.overflow = 'visible';
            this.textContent = 'Read less';
        } else {
            textElement.style.webkitLineClamp = '3';
            textElement.style.overflow = 'hidden';
            this.textContent = 'Read more';
        }
    }
});
