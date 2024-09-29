<div class="contact-section">
  <h1>Contact</h1>
  
  <p class="contact-intro">Feel free to contact me through any of these platforms:</p>

  <div class="email-container" id="emailContainer">
    <span class="email" id="emailText">mariodoradomartinez@gmail.com</span>
    <span class="copy-feedback" id="copyFeedback"></span>
  </div>

  <div class="social-icons">
    <a href="https://www.linkedin.com/in/mario-dorado-martinez" target="_blank" rel="noopener noreferrer">
      <img src="{{ site.baseurl }}/assets/icons/linkedin-color.svg" alt="LinkedIn">
    </a>
    <a href="https://github.com/mdoradom" target="_blank" rel="noopener noreferrer">
      <img src="{{ site.baseurl }}/assets/icons/github-color.svg" alt="GitHub">
    </a>
    <a href="https://mdoradom.itch.io" target="_blank" rel="noopener noreferrer">
      <img src="{{ site.baseurl }}/assets/icons/itchdotio-color.svg" alt="Itch.io">
    </a>
  </div>

  <p class="contact-outro">I hope to connect with you soon!</p>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const emailContainer = document.getElementById('emailContainer');
    const emailText = document.getElementById('emailText');
    const copyFeedback = document.getElementById('copyFeedback');

    emailContainer.addEventListener('click', function() {
      const email = emailText.textContent;
      navigator.clipboard.writeText(email).then(function() {
        copyFeedback.textContent = 'Copied!';
        setTimeout(function() {
          copyFeedback.textContent = '';
        }, 2000);
      }).catch(function(err) {
        console.error('Error copying the email: ', err);
      });
    });
  });
</script>