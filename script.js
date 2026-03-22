// ================================
// CONFIGURAÇÕES — edite aqui
// ================================
const WHATSAPP_NUMERO  = '555192906115';
const WHATSAPP_MENSAGEM = 'Pode confirmar minha presença nos seus 15 anos!';
const PIX_CHAVE         = '60128987030';
// ================================

// Botão 1 — Google Maps
document.getElementById('btn1').addEventListener('click', () => {
  window.open(
    'https://www.google.com/maps/place/Av.+Otto+Niemeyer,+Porto+Alegre+-+RS/@-30.1057062,-51.244337,17z/data=!3m1!4b1!4m6!3m5!1s0x9519824071ca802f:0x5c0e6564d47f75a4!8m2!3d-30.1057109!4d-51.2417621!16s%2Fg%2F1ymx5cmbs?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D',
    '_blank'
  );
});

// Botão 2 — WhatsApp
document.getElementById('btn2').addEventListener('click', () => {
  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;
  window.open(url, '_blank');
});

// Botão 3 — Copiar chave Pix
document.getElementById('btn3').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(PIX_CHAVE);
  } catch {
    const el = document.createElement('textarea');
    el.value = PIX_CHAVE;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.focus();
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

});

// ================================
// Modal de confirmação
// ================================
function mostrarModal(mensagem) {
  const modal = document.getElementById('modal-confirmacao');
  const texto = document.getElementById('modal-texto');
  texto.textContent = mensagem;
  modal.classList.add('visivel');
  setTimeout(() => modal.classList.remove('visivel'), 2000);
}
