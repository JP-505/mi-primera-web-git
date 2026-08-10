// Manejo de estado de conexión (HU-07)
window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);

function updateNetworkStatus() {
  const statusElem = document.getElementById('netStatus');
  if (navigator.onLine) {
    statusElem.textContent = '🟢 En línea (HU-07)';
    statusElem.style.background = '#2e7d32';
  } else {
    statusElem.textContent = '🔴 Modo Offline (HU-07)';
    statusElem.style.background = '#c62828';
  }
}

// Filtro de Actividades por Asignatura (HU-09)
function filterTasks() {
  const selected = document.getElementById('subjectFilter').value;
  const cards = document.querySelectorAll('.task-card');

  cards.forEach(card => {
    const subject = card.getAttribute('data-subject');
    if (selected === 'all' || subject === selected) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Simulación de envío de evidencia (HU-02, HU-08, HU-10)
function handleUpload(event) {
  event.preventDefault();
  const isCompressed = event.target.querySelector('input[type="checkbox"]').checked;
  const msgElem = event.target.nextElementSibling;

  let text = "✅ Tarea entregada con éxito. (HU-10)";
  if (isCompressed) {
    text += " 🗜️ Archivo comprimido antes del envío (-40% datos). (HU-08)";
  }

  msgElem.textContent = text;
}

// Descarga simulada de guía para almacenamiento Offline (HU-11)
function downloadGuide(filename) {
  alert(`Descargando ${filename}... Archivo guardado localmente para consulta sin conexión (HU-11).`);
}