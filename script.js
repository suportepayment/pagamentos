function copyToClipboard() {
      const textToCopy = 'b03b2092-8e88-4e26-a1a9-8a97fb85dd32';
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          showPopup('');
        })
        .catch((error) => {
          console.error('Erro ao copiar o texto:', error);
        });
    }

    function showPopup(message) {
      const popup = document.getElementById('popup');
      const popupOverlay = document.getElementById('popup-overlay');
      const popupMessage = document.querySelector('.popup-message');
      popupMessage.textContent = message;
      popup.style.display = 'block';
      popupOverlay.style.display = 'block';
    }

    function closePopup() {
      document.getElementById('popup').style.display = 'none';
      document.getElementById('popup-overlay').style.display = 'none';
    }

    // share

    // Adicione o evento de clique ao ícone de compartilhamento
        document.getElementById('shareButton').addEventListener('click', () => {
            // Compartilha a página atual
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: window.location.href
                }).then(() => {
                    console.log('Página compartilhada com sucesso!');
                }).catch((error) => {
                    console.error('Erro ao compartilhar a página:', error);
                });
            } else {
                console.log('Compartilhamento não suportado pelo navegador.');
                // Aqui você pode adicionar um fallback ou mensagem para navegadores que não suportam o compartilhamento nativo.
            }
        });