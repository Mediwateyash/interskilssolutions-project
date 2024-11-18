document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
  
      // Close other open answers
      document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
        if (otherAnswer !== answer && otherAnswer.style.maxHeight) {
          otherAnswer.style.maxHeight = null;
        }
      });
  
      // Toggle the current answer
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
  
  const showMoreBtn = document.getElementById('show-more-btn');
  showMoreBtn.addEventListener('click', () => {
    const hiddenFaqs = document.querySelectorAll('.faq-item.hidden');
    hiddenFaqs.forEach((faq, index) => {
      if (index < 5) {
        faq.classList.remove('hidden');
        faq.classList.add('visible');
      }
    });
  
    // If no hidden FAQs left, hide the button
    if (document.querySelectorAll('.faq-item.hidden').length === 0) {
      showMoreBtn.style.display = 'none';
    }
  });
  