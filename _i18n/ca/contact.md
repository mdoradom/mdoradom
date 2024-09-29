<div class="contact-section">
  <h1>Contacte</h1>
  
  <p class="contact-intro">No dubtis a contactar-me a través de qualsevol d'aquestes plataformes:</p>

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

  <p class="contact-outro">Espero poder connectar amb tu aviat!</p>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const emailContainer = document.getElementById('emailContainer');
    const emailText = document.getElementById('emailText');
    const copyFeedback = document.getElementById('copyFeedback');

    emailContainer.addEventListener('click', function() {
      const email = emailText.textContent;
      navigator.clipboard.writeText(email).then(function() {
        copyFeedback.textContent = 'Copiat!';
        setTimeout(function() {
          copyFeedback.textContent = '';
        }, 2000);
      }).catch(function(err) {
        console.error('Error en copiar l\'email: ', err);
      });
    });
  });
</script>