// Your code h// Your code here
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const form = document.getElementById('submit-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageInput = document.getElementById('message');
const checkbox = document.getElementById('checkbox');

const postData = async (data) => {
   
    
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  console.log('Response:', json);
  alert(`Thank you for submitting yor details.
${data.name}`);

  if (!response.ok) throw new Error('Failed to submit form.');
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    message: messageInput.value,
    checkbox: checkbox.checked,
  };
  postData(data);
});ere
