// script2.js

document.addEventListener('DOMContentLoaded', function() {
  // Get all radio button elements with the name "radio"
  const radioButtons = document.querySelectorAll('input[type="radio"][name="radio"]');

  // Get the slider element
  const slider = document.querySelector('.slidebar');

    // Function to move the slider to the selected radio button
    function moveSlider(radio) {
        // Get the index of the selected radio button
        const index = parseInt(radio.id.replace('rd-', '')) - 1;

        // Calculate the translateX value for the slider
        const translateX = index * 100; // Calculate translation based on percentages

        // Apply the translateX transform to the slider
        slider.style.transform = `translateX(${translateX}%) scaleX(1)`; // Ensure scaleX is 1
    }

  // Add an event listener to each radio button
  radioButtons.forEach(radio => {
    radio.addEventListener('click', function() {
        //Move the slider.
        moveSlider(this);

        //Navigate to the linked html on click
         const label = document.querySelector(`label[for="${this.id}"]`);
            if (label) {
                const link = label.querySelector('a');
                if (link) {
                    window.location.href = link.href;
                }
            }
    });
  });

  // Initial slider position based on the checked radio button on page load
  const checkedRadio = document.querySelector('input[name="radio"]:checked');
    if (checkedRadio) {
        moveSlider(checkedRadio);
    }
});
