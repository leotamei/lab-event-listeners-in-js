/**
 * 1. Handle Button Clicks
 */
function changeBackgroundColor() {
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#009688', '#4caf50'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

/**
 * 2. Capture Keyboard Input
 */
function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyPressDisplay');
  if (keyDisplay && event) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

/**
 * 3. Process Text Input
 */
function displayUserInput(event) {
  const textDisplay = document.getElementById('textInputDisplay');
  if (textDisplay) {
    const textInput = document.getElementById('textInput');
    const value = event && event.target ? event.target.value : textInput ? textInput.value : '';
    textDisplay.textContent = `You typed: ${value}`;
  }
}

/**
 * 4. Combine Multiple Events & Event Listeners Attachment
 */
function setupEventListeners() {
  const colorBtn = document.getElementById('changeColorButton');
  const resetColorBtn = document.getElementById('resetColorButton');
  const textInput = document.getElementById('textInput');
  const hoverElement = document.getElementById('hover-box');
  const formElement = document.getElementById('sample-form');

  // Button click and double-click listeners
  if (colorBtn) {
    colorBtn.addEventListener('click', changeBackgroundColor);
  }

  if (resetColorBtn) {
    resetColorBtn.addEventListener('dblclick', resetBackgroundColor);
  }

  // Keyboard listener on the document
  document.addEventListener('keydown', displayKeyPress);

  // Input event listener on text field
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }

  // BONUS: mouseover & mouseout events
  if (hoverElement) {
    hoverElement.addEventListener('mouseover', () => {
      hoverElement.style.backgroundColor = 'yellow';
    });
    hoverElement.addEventListener('mouseout', () => {
      hoverElement.style.backgroundColor = 'initial';
    });
  }

  // BONUS: submit event handling
  if (formElement) {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      const formOutput = document.getElementById('form-output');
      const formInput = document.getElementById('form-input');
      if (formOutput && formInput) {
        formOutput.textContent = `Submitted: ${formInput.value}`;
        formInput.value = '';
      }
    });
  }
}

// Automatically attach listeners when the DOM is loaded in the browser
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
  } else {
    setupEventListeners();
  }
}

// Export for Node / Jest test compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners
  };
}