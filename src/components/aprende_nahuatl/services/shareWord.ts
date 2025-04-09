// Primero, necesitamos definir una interfaz para las opciones de compartir
interface ShareOptions {
  title: string;
  text: string;
  url?: string;
  files?: File[];
}
interface WordType {
  nahuatl: string
  spanish: string
  image: string
  slug: string
}

// Función para verificar si el navegador soporta la API Web Share con archivos
const canShareWithFiles = (): boolean => {
  return navigator.share && 
         navigator.canShare && 
         typeof navigator.share === 'function' && 
         typeof navigator.canShare === 'function';
};

// Función que crea un archivo de imagen a partir de una URL
const urlToFile = async (url: string, filename: string): Promise<File | null> => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], filename, { type: blob.type });
  } catch (error) {
    console.error('Error converting URL to File:', error);
    return null;
  }
};

// Función principal para compartir
export function shareWord(word: WordType) {
  // Datos de la palabra a compartir
  const shareTitle = `¡Aprende Náhuatl con Nahua Vision!`;
  const shareText = `Hoy aprendí que "${word.nahuatl}" significa "${word.spanish}" en Náhuatl.`;
  
  // Determinar si podemos compartir con imagen directamente
  if (canShareWithFiles()) {
    // Convertir la URL de la imagen a un archivo
    urlToFile(word.image, `${word.slug}.jpg`)
      .then((file) => {
        if (file && navigator.canShare({ files: [file] })) {
          // Compartir con imagen
          navigator.share({
            title: shareTitle,
            text: shareText,
            files: [file]
          })
            .then(() => console.log('¡Contenido compartido exitosamente!'))
            .catch((error) => {
              console.error('Error compartiendo:', error);
              fallbackShare(shareTitle, shareText);
            });
        } else {
          fallbackShare(shareTitle, shareText);
        }
      })
      .catch(() => {
        fallbackShare(shareTitle, shareText);
      });
  } else {
    fallbackShare(shareTitle, shareText);
  }
}

// Función alternativa cuando no se puede compartir la imagen directamente
function fallbackShare(title: string, text: string) {
  // URL de la página actual para compartir
  const shareUrl = window.location.href;
  
  // Intentar compartir sin imagen
  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: shareUrl
    })
      .then(() => console.log('¡Contenido compartido exitosamente!'))
      .catch((error) => {
        console.error('Error compartiendo:', error);
        showSocialShareMenu();
      });
  } else {
    // Si Web Share API no está disponible, mostrar menú personalizado
    showSocialShareMenu();
  }
}

// Función para mostrar un menú personalizado de compartir
function showSocialShareMenu() {
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(`¡Aprende que "${word.nahuatl}" significa "${word.spanish}" en Náhuatl con Nahua Vision!`);
  
  // Crear y mostrar un menú de opciones para compartir
  const shareModal = document.createElement('div');
  shareModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  shareModal.innerHTML = `
    <div class="bg-[#1d1d1b] p-6 rounded-xl max-w-sm w-full">
      <h3 class="text-[#FF9A00] font-bold text-xl mb-4">Compartir palabra</h3>
      <div class="grid grid-cols-3 gap-4 mb-4">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener" class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 flex items-center justify-center mb-2">
            <i class="fa-brands fa-instagram text-white text-xl"></i>
          </div>
          <span class="text-white text-xs">Instagram</span>
        </a>
        <a href="https://api.whatsapp.com/send?text=${shareText} ${shareUrl}" target="_blank" rel="noopener" class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-2">
            <i class="fa-brands fa-whatsapp text-white text-xl"></i>
          </div>
          <span class="text-white text-xs">WhatsApp</span>
        </a>
        <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" target="_blank" rel="noopener" class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center mb-2">
            <i class="fa-brands fa-twitter text-white text-xl"></i>
          </div>
          <span class="text-white text-xs">Twitter</span>
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener" class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-2">
            <i class="fa-brands fa-facebook-f text-white text-xl"></i>
          </div>
          <span class="text-white text-xs">Facebook</span>
        </a>
        <a href="mailto:?subject=${encodeURIComponent('Palabra en Náhuatl')}&body=${shareText} ${shareUrl}" class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mb-2">
            <i class="fa-solid fa-envelope text-white text-xl"></i>
          </div>
          <span class="text-white text-xs">Email</span>
        </a>
        <button id="copyLink" class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-[#C4C7FF] flex items-center justify-center mb-2">
            <i class="fa-solid fa-link text-[#1d1d1b] text-xl"></i>
          </div>
          <span class="text-white text-xs">Copiar link</span>
        </button>
      </div>
      <button id="closeShareModal" class="w-full py-2 bg-[#FF9A00] text-white rounded-lg font-medium">Cerrar</button>
    </div>
  `;
  
  document.body.appendChild(shareModal);
  
  // Agregar controladores de eventos
  document.getElementById('closeShareModal')?.addEventListener('click', () => {
    document.body.removeChild(shareModal);
  });
  
  document.getElementById('copyLink')?.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        const copyButton = document.getElementById('copyLink');
        if (copyButton) {
          const originalText = copyButton.querySelector('span')?.innerText;
          if (copyButton.querySelector('span')) {
            copyButton.querySelector('span')!.innerText = '¡Copiado!';
            setTimeout(() => {
              if (copyButton.querySelector('span') && originalText) {
                copyButton.querySelector('span')!.innerText = originalText;
              }
            }, 2000);
          }
        }
      });
  });
  
  // Cerrar el modal al hacer clic fuera
  shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
      document.body.removeChild(shareModal);
    }
  });
}
