document.getElementById('generate').addEventListener('click', function() {
  // Prompt for password length
  let length = parseInt(prompt('Enter password length (between 8 and 128 characters):'));

  // Validate the length
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Please enter a valid number between 8 and 128.');
    return;
  }

  // Prompt for character types
  let includeLowercase = confirm('Include lowercase characters?');
  let includeUppercase = confirm('Include uppercase characters?');
  let includeNumbers = confirm('Include numbers?');
  let includeSpecial = confirm('Include special characters?');

  // Validate at least one character type is selected
  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
    alert('You must include at least one character type.');
    return;
  }

  // Generate password
  let charset = '';
  if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumbers) charset += '0123456789';
  if (includeSpecial) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

  let password = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  // Display the generated password
  document.getElementById('password').value = password;
});
