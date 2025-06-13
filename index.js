document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.getElementById('inputBox');
  const charCountEl = document.getElementById('charCount');
  const charDisplay = document.getElementById('charDisplay');
  
  // Clear button
  const clearBtn = document.querySelector('.tools button:last-child');
  clearBtn.addEventListener('click', () => {
    inputBox.value = '';
    charCountEl.textContent = '0';
    charDisplay.style.display = 'none'; // Hide the character count
  });

  // Search button
  const searchBtn = document.querySelector('.tools button:first-child');
  searchBtn.addEventListener('click', () => {
    const text = inputBox.value.trim();
    const charCount = text.length;
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

    if (charCount === 0) {
      alert('Please enter some text to check character count');
      return;
    }

    // Show the character count and update it
    charCountEl.textContent = charCount;
    charDisplay.textContent = `Character Count: ${charCount}, Word Count: ${wordCount}`;
    charDisplay.style.display = 'inline-block';
  });
});
