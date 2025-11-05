// Select elements
const fontSize = document.getElementById('font-size');
const fontWeight = document.getElementById('font-weight');
const colorPicker = document.getElementById('color-picker');
const targetElement = document.getElementById('target-element');
const screenshotButton = document.getElementById('screenshot');

// Apply style changes to selected element
function updateStyle() {
  const el = document.getElementById(targetElement.value);
  el.style.fontSize = fontSize.value + 'px';
  el.style.fontWeight = fontWeight.value;
  el.style.color = colorPicker.value;
}

fontSize.addEventListener('input', updateStyle);
fontWeight.addEventListener('input', updateStyle);
colorPicker.addEventListener('input', updateStyle);

// Trigger screenshot (PhantomJS)
screenshotButton.addEventListener('click', () => {
  // This assumes you run PhantomJS externally (phantomjs capture.js)
  alert('Screenshot function triggered — run PhantomJS to capture the page.');
});
