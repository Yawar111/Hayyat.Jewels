/**
 * HAYYAT'S JEWELS — Product Catalog & Imagery Data
 * Ultra-realistic, high-resolution luxury fine jewellery photography
 * All imagery strictly verified, focused on pure precious metals & gemstones (no half-clothing)
 */

const IMG = {
  // Hero & Banners
  hero: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=2000&q=90",
  heroSecondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=90",
  
  // Category Highlights (Modern, elegant, high-definition pure fine jewellery)
  bridal: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=90",
  rings: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=90",
  necklaces: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=90",
  earrings: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=90",
  bracelets: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1200&q=90",
  bangles: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=90",
  
  // Atelier & Editorial Story
  craftsmanship: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&w=1400&q=90",
  atelier: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=90",
  goldTexture: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1400&q=90",
  packaging: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=90"
};

const PRODUCTS = [
  {
    id: 'p1',
    slug: 'eternity-diamond-ring',
    name: 'Eternity Diamond Ring',
    category: 'Rings',
    collection: 'Bridal',
    price: 2850,
    description: 'A continuous line of hand-selected round brilliant diamonds, set in solid 18K gold for a lifetime of understated brilliance.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K Gold',
    purity: '750',
    stone: 'Diamond',
    weight: '3.8g',
    dimensions: '2.2mm band width',
    sizes: ['5', '6', '7', '8', '9'],
    colors: ['Yellow Gold', 'White Gold', 'Rose Gold'],
    featured: true,
    newArrival: true
  },
  {
    id: 'p2',
    slug: 'celeste-station-necklace',
    name: 'Celeste Station Necklace',
    category: 'Necklaces',
    collection: 'Everyday Gold',
    price: 1640,
    description: 'Delicate bezel-set diamonds suspended across an ultra-fine, hand-polished 18K gold link chain designed for effortless layering.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K Gold',
    purity: '750',
    stone: 'Diamond',
    weight: '4.1g',
    dimensions: '16–18in adjustable chain',
    sizes: [],
    colors: ['Yellow Gold', 'White Gold'],
    featured: true,
    newArrival: false
  },
  {
    id: 'p3',
    slug: 'luna-pearl-drop-earrings',
    name: 'Luna Pearl Drop Earrings',
    category: 'Earrings',
    collection: 'Bridal',
    price: 1180,
    description: 'Lustrous South Sea baroque pearls suspended from sculptural 18K gold hoops, created to catch and reflect natural light.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K Gold',
    purity: '750',
    stone: 'Pearl',
    weight: '5.2g pair',
    dimensions: '32mm drop length',
    sizes: [],
    colors: ['Yellow Gold', 'White Gold'],
    featured: true,
    newArrival: true
  },
  {
    id: 'p4',
    slug: 'solstice-sculpted-cuff',
    name: 'Solstice Sculpted Cuff',
    category: 'Bracelets',
    collection: 'Statement Pieces',
    price: 2190,
    description: 'A substantial, ergonomically contoured cuff in solid 18K gold with mirror-polished bevelled edges and an architectural profile.',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K Gold',
    purity: '750',
    stone: 'None',
    weight: '12.4g',
    dimensions: '58mm interior diameter',
    sizes: ['Small (15cm)', 'Medium (17cm)', 'Large (19cm)'],
    colors: ['Yellow Gold', 'Rose Gold'],
    featured: false,
    newArrival: true
  },
  {
    id: 'p5',
    slug: 'atelier-sapphire-band',
    name: 'Atelier Sapphire Band',
    category: 'Rings',
    collection: 'Statement Pieces',
    price: 3320,
    description: 'A velvety royal blue Ceylon sapphire framed in a geometric micro-halo of F/VS diamonds, forged in 18K white gold.',
    images: [
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K White Gold',
    purity: '750',
    stone: 'Sapphire',
    weight: '4.7g',
    dimensions: '3.1mm band width',
    sizes: ['5', '6', '7', '8'],
    colors: ['White Gold', 'Platinum'],
    featured: false,
    newArrival: false
  },
  {
    id: 'p6',
    slug: 'eclat-gold-hoops',
    name: 'Éclat Gold Hoops',
    category: 'Earrings',
    collection: 'Everyday Gold',
    price: 780,
    description: 'The definitive daily luxury hoop. Cast in heavyweight 18K gold with seamless click-closure engineering for everyday comfort.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K Gold',
    purity: '750',
    stone: 'None',
    weight: '3.4g pair',
    dimensions: '22mm diameter',
    sizes: [],
    colors: ['Yellow Gold', 'Rose Gold'],
    featured: true,
    newArrival: false
  },
  {
    id: 'p7',
    slug: 'aura-emerald-solitaire',
    name: 'Aura Emerald Solitaire Ring',
    category: 'Rings',
    collection: 'Statement Pieces',
    price: 4150,
    description: 'An emerald-cut Colombian emerald of vivid green saturation, cradled by dual tapered diamond baguettes in 18K yellow gold.',
    images: [
      'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K Gold',
    purity: '750',
    stone: 'Emerald',
    weight: '4.5g',
    dimensions: '2.8mm band',
    sizes: ['5', '6', '7', '8'],
    colors: ['Yellow Gold', 'White Gold'],
    featured: true,
    newArrival: true
  },
  {
    id: 'p8',
    slug: 'cascade-diamond-tennis-bracelet',
    name: 'Cascade Diamond Tennis Bracelet',
    category: 'Bracelets',
    collection: 'Bridal',
    price: 5200,
    description: 'Over 3.50 carats of hand-calibrated brilliant diamonds prong-set in flexible 18K white gold with a double safety clasp.',
    images: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K White Gold',
    purity: '750',
    stone: 'Diamond',
    weight: '8.9g',
    dimensions: '7.0 inches (17.8cm)',
    sizes: ['6.5 in', '7.0 in', '7.5 in'],
    colors: ['White Gold', 'Yellow Gold'],
    featured: true,
    newArrival: true
  },
  {
    id: 'p9',
    slug: 'astraea-diamond-pendant',
    name: 'Astraea Diamond Pendant',
    category: 'Necklaces',
    collection: 'Bridal',
    price: 2450,
    description: 'A teardrop pear-cut solitaire diamond encased in an openwork 18K white gold gallery, capturing light from every angle.',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K White Gold',
    purity: '750',
    stone: 'Diamond',
    weight: '3.6g',
    dimensions: '18in chain, 12mm pendant',
    sizes: [],
    colors: ['White Gold', 'Yellow Gold'],
    featured: true,
    newArrival: true
  },
  {
    id: 'p10',
    slug: 'serpentine-link-necklace',
    name: 'Serpentine Link Necklace',
    category: 'Necklaces',
    collection: 'Everyday Gold',
    price: 1890,
    description: 'Silky, fluid chevron links of solid 18K yellow gold that glide against the collarbone with luxurious weight and presence.',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K Gold',
    purity: '750',
    stone: 'None',
    weight: '7.8g',
    dimensions: '17in necklace length',
    sizes: [],
    colors: ['Yellow Gold', 'Rose Gold'],
    featured: false,
    newArrival: true
  },
  {
    id: 'p11',
    slug: 'pave-starlight-studs',
    name: 'Pavé Starlight Studs',
    category: 'Earrings',
    collection: 'Everyday Gold',
    price: 1420,
    description: 'Micro-pavé F/VS round diamonds set into 18K gold starburst discs with threaded screw-backs for secure daily wear.',
    images: [
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K Gold',
    purity: '750',
    stone: 'Diamond',
    weight: '2.9g pair',
    dimensions: '8.5mm diameter',
    sizes: [],
    colors: ['Yellow Gold', 'White Gold'],
    featured: false,
    newArrival: false
  },
  {
    id: 'p12',
    slug: 'heritage-sculpted-bangles',
    name: 'Heritage Sculpted Gold Bangles',
    category: 'Bracelets',
    collection: 'Statement Pieces',
    price: 3650,
    description: 'A duo of interlocking solid 18K gold round wire bangles, master-polished with high-gloss mirror reflections.',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K Gold',
    purity: '750',
    stone: 'None',
    weight: '16.5g pair',
    dimensions: '65mm inner diameter',
    sizes: ['Small (60mm)', 'Medium (65mm)', 'Large (70mm)'],
    colors: ['Yellow Gold', 'Rose Gold'],
    featured: true,
    newArrival: false
  },
  {
    id: 'p13',
    slug: 'sovereign-solitaire-engagement-ring',
    name: 'Sovereign Solitaire Engagement Ring',
    category: 'Rings',
    collection: 'Bridal',
    price: 4800,
    description: 'A showstopping 1.75ct brilliant round diamond held in a refined six-prong crown atop a knife-edge solid 18K gold band.',
    images: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=90',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=90'
    ],
    metal: '18K Gold',
    purity: '750',
    stone: 'Diamond',
    weight: '4.2g',
    dimensions: '2.0mm tapered band',
    sizes: ['5', '6', '7', '8', '9'],
    colors: ['Yellow Gold', 'White Gold', 'Platinum'],
    featured: true,
    newArrival: true
  }
];

/**
 * Retrieve a product by its URL slug
 * @param {string} slug 
 * @returns {object} product
 */
function productBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
}

/**
 * Format numeric amount to USD currency string
 * @param {number} v 
 * @returns {string} formatted currency
 */
function money(v) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(v);
}
