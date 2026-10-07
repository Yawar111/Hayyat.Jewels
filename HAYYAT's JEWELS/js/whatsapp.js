/**
 * HAYYAT'S JEWELS — WhatsApp Concierge Integration & Contact Config
 */

const WHATSAPP_NUMBER = '15551234567';

const CONTACT = {
  address: '18 Atelier Lane, Mayfair, London W1K 4QT',
  phone: '+44 20 7946 0958',
  email: 'concierge@hayyatsjewels.com'
};

/**
 * Generate a WhatsApp click-to-chat URL with pre-filled message
 * @param {string} message 
 * @returns {string} wa.me URL
 */
function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Build structured order message from form data and bag items
 * @param {object} form 
 * @returns {string} formatted inquiry message
 */
function orderMessage(form) {
  const lines = getCart().map(x => {
    const p = productById(x.productId);
    const opts = Object.values(x.options || {}).filter(Boolean).join(', ');
    return `• ${p.name} — ${x.qty} × ${money(p.price)}${opts ? `\n  Options: ${opts}` : ''}`;
  });

  return [
    `✨ HAYYAT'S JEWELS INQUIRY ✨`,
    ``,
    `Client Details:`,
    `Name: ${form.name || 'N/A'}`,
    `Phone / WhatsApp: ${form.phone || 'N/A'}`,
    `Email: ${form.email || 'N/A'}`,
    `City: ${form.city || 'N/A'}`,
    `Address: ${form.address || 'N/A'}`,
    `Preferred Contact: ${form.contact || 'WhatsApp'}`,
    ``,
    `Requested Pieces:`,
    lines.length ? lines.join('\n') : 'No pieces specified.',
    ``,
    `Total Est: ${money(cartTotal())}`,
    ``,
    form.notes ? `Special Notes: ${form.notes}` : ''
  ].filter(Boolean).join('\n');
}
