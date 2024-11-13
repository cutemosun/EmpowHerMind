// Cookie Consent Banner
const cookieBanner = document.getElementById('cookie-banner');
const acceptCookies = document.getElementById('accept-cookies');
const customizeCookies = document.getElementById('customize-cookies');
const declineCookies = document.getElementById('decline-cookies');

acceptCookies.addEventListener('click', () => {
  cookieBanner.style.display = 'none';
  // Implement cookie acceptance logic here
});

customizeCookies.addEventListener('click', () => {
  cookieBanner.style.display = 'none';
  // Implement cookie customization logic here
});

declineCookies.addEventListener('click', () => {
  cookieBanner.style.display = 'none';
  // Implement cookie decline logic here
});

// Chatbot Consent Modal
const chatbotConsentModal = document.getElementById('chatbot-consent');
const proceedChatbot = document.getElementById('proceed-chatbot');
const cancelChatbot = document.getElementById('cancel-chatbot');

// Show the modal when the chatbot is initiated
// ... (Add your logic to trigger the modal when the user interacts with the chatbot)

proceedChatbot.addEventListener('click', () => {
  chatbotConsentModal.style.display = 'none';
  // Implement chatbot initiation logic here
});

cancelChatbot.addEventListener('click', () => {
  chatbotConsentModal.style.display = 'none';
  // Implement chatbot cancellation logic here
});