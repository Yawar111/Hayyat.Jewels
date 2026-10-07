/**
 * HAYYAT'S JEWELS — Instant Search
 */

function searchProducts(q) {
  q = (q || '').toLowerCase().trim();
  if (!q) return [];

  const matchedProducts = PRODUCTS.filter(p => 
    (p.name + ' ' + p.category + ' ' + p.collection + ' ' + (p.stone || '') + ' ' + (p.metal || '') + ' ' + p.description)
      .toLowerCase()
      .includes(q)
  );

  const matchedJournal = JOURNAL.filter(j => 
    (j.title + ' ' + j.category)
      .toLowerCase()
      .includes(q)
  );

  return [...matchedProducts, ...matchedJournal];
}