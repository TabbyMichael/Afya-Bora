export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  prescription_required: boolean;
  brand: string;
  packSize: string;
  description: string;
  benefits: string[];
  usage: string;
  ingredients?: string[];
  warnings?: string[];
  features?: string[];
};

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Panadol Extra Tablets',
    price: 250,
    image: '/images/products/Panadol-Extra-20s.avif',
    rating: 4.5,
    prescription_required: false,
    brand: 'GSK',
    packSize: '24 tablets',
    description: 'Panadol Extra combines paracetamol and caffeine for enhanced pain relief. This advanced formulation provides powerful relief from headaches, migraines, dental pain, and other aches while being gentle on your stomach.',
    benefits: [
      'Fast-acting pain relief within 15 minutes',
      'Contains optimal dose of 500mg paracetamol and 65mg caffeine per tablet',
      'Gentle on the stomach',
      'Non-drowsy formula'
    ],
    usage: 'Adults and children aged 12 years and over: Take 2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours.',
    ingredients: ['Paracetamol 500mg', 'Caffeine 65mg'],
    warnings: [
      'Do not exceed stated dose',
      'Avoid alcohol while taking this medication',
      'Not suitable for children under 12 years'
    ]
  },
  {
    id: '2',
    name: 'Centrum Advance Multivitamin',
    price: 1850,
    image: '/images/products/Centrum5054563189646-1-png.webp',
    rating: 4.8,
    prescription_required: false,
    brand: 'Centrum',
    packSize: '60 tablets',
    description: 'Centrum Advance is a comprehensive multivitamin formula scientifically developed to support your daily nutritional needs. With 24 key vitamins and minerals, it helps maintain energy, immunity, and overall well-being.',
    benefits: [
      'Complete nutritional support with 24 key nutrients',
      'Supports immune system function',
      'Enhances energy metabolism',
      'Promotes bone and muscle health',
      'Supports brain function and mental alertness'
    ],
    usage: 'Take one tablet daily with food. Best taken in the morning with breakfast.',
    ingredients: [
      'Vitamin A, C, D, E, K',
      'B-Complex Vitamins',
      'Zinc, Iron, Calcium',
      'Selenium, Chromium',
      'Lutein'
    ],
    warnings: [
      'Keep out of reach of children',
      'Store in a cool, dry place',
      'Not a substitute for a balanced diet'
    ]
  },
  {
    id: '3',
    name: 'Omron Blood Pressure Monitor',
    price: 6500,
    image: '/images/products/bp monitor61DCGvLyCsL.jpg',
    rating: 4.7,
    prescription_required: false,
    brand: 'Omron',
    packSize: '1 unit',
    description: 'The Omron Blood Pressure Monitor is a clinical-grade device offering accurate, reliable blood pressure measurements at home. Features IntelliSense® technology for personalized inflation and Irregular Heartbeat Detection.',
    benefits: [
      'Clinical accuracy validated by international protocols',
      'Easy one-touch operation',
      'Memory storage for up to 60 readings',
      'Irregular heartbeat detection',
      'Body movement detection for accurate readings'
    ],
    usage: 'Place cuff on bare arm, sit quietly for 5 minutes, then press START. Take readings at the same time each day.',
    features: [
      'Large LCD display',
      'Hypertension indicator',
      'Average of last 3 readings',
      'Date and time stamp',
      'Low battery indicator'
    ],
    warnings: [
      'Consult healthcare provider for interpreting readings',
      'Keep device away from water',
      'Replace batteries when indicator shows'
    ]
  },
  {
    id: '4',
    name: 'Glucometer Kit',
    price: 3200,
    image: '/images/products/glucometer-machine-600x600.jpg',
    rating: 4.6,
    prescription_required: false,
    brand: 'Accu-Check',
    packSize: 'Kit with 10 strips',
    description: 'The Accu-Check Glucometer Kit is a complete diabetes management system providing fast, accurate blood glucose readings in just 5 seconds. The advanced technology requires minimal blood sample and offers comprehensive data management.',
    benefits: [
      'Results in 5 seconds',
      'Requires tiny blood sample (0.6 μL)',
      'No coding required',
      'Stores up to 500 readings with date and time',
      'Bluetooth connectivity for data sharing'
    ],
    usage: 'Clean hands, insert strip, apply small blood drop, read results in 5 seconds. Test 2-4 times daily or as recommended by healthcare provider.',
    features: [
      'Pre and post-meal markers',
      'Averaging of 7, 14, 30 days',
      'USB connectivity',
      'Strip ejector for hygienic disposal',
      'Battery life indicator'
    ],
    warnings: [
      'For in-vitro diagnostic use only',
      'Store strips in original vial',
      'Replace battery when indicator shows'
    ]
  },
  {
    id: '5',
    name: 'Vitamin D3 Supplements',
    price: 950,
    image: '/images/products/vitamin-d..webp',
    rating: 4.4,
    prescription_required: false,
    brand: 'HealthKart',
    packSize: '60 capsules',
    description: 'Premium Vitamin D3 (Cholecalciferol) supplements delivering 2000 IU per softgel. Essential for calcium absorption, immune function, and bone health. Our unique formula ensures maximum absorption and bioavailability.',
    benefits: [
      'Supports bone and muscle strength',
      'Enhances calcium absorption',
      'Boosts immune system',
      'Improves mood and mental health',
      'Promotes heart health'
    ],
    usage: 'Take one softgel daily with meals or as directed by healthcare provider.',
    ingredients: [
      'Vitamin D3 (Cholecalciferol) 2000 IU',
      'Olive oil',
      'Gelatin softgel'
    ],
    warnings: [
      'Consult physician if pregnant or nursing',
      'Store in cool, dry place',
      'Do not exceed recommended dose'
    ]
  },
  {
    id: '6',
    name: 'N95 Face Masks',
    price: 750,
    image: '/images/products/n95-product-jpg.avif',
    rating: 4.3,
    prescription_required: false,
    brand: '3M',
    packSize: 'Pack of 10',
    description: 'Professional-grade N95 respirator masks providing 95% filtration of airborne particles. Features advanced electrostatic media for easier breathing and secure fit with adjustable nose clip and elastic straps.',
    benefits: [
      'Filters 95% of airborne particles',
      'Adjustable nose clip for secure fit',
      'Comfortable breathing resistance',
      'Fluid resistant',
      'Meets WHO guidelines for personal protection'
    ],
    usage: 'Ensure proper seal before each use. Replace mask when soiled or damaged. Do not reuse disposable masks.',
    features: [
      'Dual head straps',
      'Foam nose cushion',
      'Ultrasonically welded straps',
      'Compatible with eyewear'
    ],
    warnings: [
      'Not suitable for children',
      'Does not protect against gases',
      'Replace when breathing becomes difficult'
    ]
  },
  {
    id: '7',
    name: 'Digital Thermometer',
    price: 450,
    image: '/images/products/610lBxabhTL  thermometer.jpg',
    rating: 4.5,
    prescription_required: false,
    brand: 'Dr. Morepen',
    packSize: '1 unit',
    description: 'Advanced digital thermometer with high-precision temperature sensing and flexible tip. Features 60-second reading time, fever alarm, and last reading memory. Suitable for oral, rectal, and axillary use.',
    benefits: [
      'Accurate readings to 0.1°C',
      'Flexible tip for comfort',
      'Waterproof for easy cleaning',
      'Auto-shutoff to save battery',
      'Memory recall of last reading'
    ],
    usage: 'Place tip under tongue or in armpit. Wait for beep. Clean with alcohol before and after use.',
    features: [
      'LCD display',
      'Fever alarm',
      'Battery indicator',
      'Protective case included'
    ],
    warnings: [
      'Clean before and after each use',
      'Replace battery when indicator shows',
      'Keep away from children'
    ]
  },
  {
    id: '8',
    name: 'Omega 3 Fish Oil',
    price: 1200,
    image: '/images/products/Now-Foods-Omega-3-.webp',
    rating: 4.6,
    prescription_required: false,
    brand: 'Seven Seas',
    packSize: '30 capsules',
    description: 'Premium quality Omega-3 fish oil capsules containing high concentrations of EPA and DHA. Sourced from wild-caught deep sea fish and purified using molecular distillation for maximum purity and potency.',
    benefits: [
      'Supports heart health',
      'Enhances brain function',
      'Reduces inflammation',
      'Promotes eye health',
      'Supports joint mobility'
    ],
    usage: 'Take 1-2 softgels daily with meals. Best taken with food to maximize absorption.',
    ingredients: [
      'Fish Oil Concentrate 1000mg',
      'EPA 180mg',
      'DHA 120mg',
      'Vitamin E (antioxidant)'
    ],
    warnings: [
      'Consult doctor if on blood thinners',
      'Keep refrigerated after opening',
      'Stop use if fishy burps occur'
    ]
  },
  {
    id: '9',
    name: 'First Aid Kit',
    price: 1500,
    image: '/images/products/2231716_first-aid.jpg',
    rating: 4.7,
    prescription_required: false,
    brand: 'SafeKit',
    packSize: 'Complete kit',
    description: 'Comprehensive first aid kit containing over 100 essential medical supplies. Perfect for home, office, or travel. Includes premium quality bandages, antiseptics, and emergency tools in a durable, water-resistant case.',
    benefits: [
      'Complete emergency preparedness',
      'Hospital-grade supplies',
      'Organized compartments',
      'Portable and compact',
      'Clear instructions included'
    ],
    features: [
      'Bandages of various sizes',
      'Antiseptic wipes',
      'Scissors and tweezers',
      'Emergency blanket',
      'First aid manual'
    ],
    usage: 'Follow included first aid manual for proper use of supplies. Replace items after use.',
    warnings: [
      'Check expiration dates regularly',
      'Keep away from children',
      'Seek professional help for serious injuries'
    ]
  },
  {
    id: '10',
    name: 'Calcium + Vitamin D3',
    price: 850,
    image: '/images/products/Calcium + Vitamin D3.webp',
    rating: 4.4,
    prescription_required: false,
    brand: 'Shelcal',
    packSize: '30 tablets',
    description: 'Advanced calcium supplement enriched with Vitamin D3 for optimal absorption. Each tablet contains elemental calcium 500mg and Vitamin D3 250 IU. Essential for maintaining bone density and preventing osteoporosis.',
    benefits: [
      'Strengthens bones and teeth',
      'Prevents calcium deficiency',
      'Supports muscle function',
      'Enhances nerve transmission',
      'Aids in blood clotting'
    ],
    usage: 'Take one tablet twice daily, preferably with meals. Best absorbed when taken 2 hours apart from iron supplements.',
    ingredients: [
      'Calcium Carbonate 500mg',
      'Vitamin D3 250 IU',
      'Magnesium 50mg',
      'Zinc 7.5mg'
    ],
    warnings: [
      'Not for those with kidney stones',
      'Avoid if taking certain antibiotics',
      'Take 2 hours apart from iron supplements'
    ]
  },
  {
    id: '11',
    name: 'Hand Sanitizer',
    price: 250,
    image: '/images/products/51Fd4ZT0weL._SS400_sanitizer.jpg',
    rating: 4.3,
    prescription_required: false,
    brand: 'Dettol',
    packSize: '500ml',
    description: '',
    benefits: [],
    usage: '',
    ingredients: [],
    warnings: []
  },
  {
    id: '12',
    name: 'Protein Powder',
    price: 2500,
    image: '/images/products/Protein Powder.jpg',
    rating: 4.8,
    prescription_required: false,
    brand: 'Optimum Nutrition',
    packSize: '1kg',
    description: '',
    benefits: [],
    usage: '',
    ingredients: [],
    warnings: []
  },
  {
    id: '13',
    name: 'Nebulizer Machine',
    price: 3500,
    image: '/images/products/NEC801 nebulizer.jpg',
    rating: 4.6,
    prescription_required: false,
    brand: 'Philips',
    packSize: '1 unit',
    description: '',
    benefits: [],
    usage: '',
    ingredients: [],
    warnings: []
  },
  {
    id: '14',
    name: 'Biotin Supplements',
    price: 750,
    image: '/images/products/images   protein.jpg',
    rating: 4.5,
    prescription_required: false,
    brand: 'HealthVit',
    packSize: '60 tablets',
    description: '',
    benefits: [],
    usage: '',
    ingredients: [],
    warnings: []
  },
  {
    id: '15',
    name: 'Pulse Oximeter',
    price: 1800,
    image: '/images/products/Pulse Oximeter.jpg',
    rating: 4.7,
    prescription_required: false,
    brand: 'Dr. Trust',
    packSize: '1 unit',
    description: '',
    benefits: [],
    usage: '',
    ingredients: [],
    warnings: []
  },
  {
    id: '16',
    name: 'Collagen Supplements',
    price: 2200,
    image: '/images/products/Collagen Supplements.png',
    rating: 4.6,
    prescription_required: false,
    brand: 'Healthy Origins',
    packSize: '30 sachets',
    description: '',
    benefits: [],
    usage: '',
    ingredients: [],
    warnings: []
  },
  {
    id: '17',
    name: 'Zinc + Vitamin C',
    price: 550,
    image: '/images/products/Zinc + Vitamin C.avif',
    rating: 4.4,
    prescription_required: false,
    brand: 'HealthViva',
    packSize: '60 tablets',
    description: '',
    benefits: [],
    usage: '',
    ingredients: [],
    warnings: []
  },
  {
    id: '18',
    name: 'Digital Weight Scale',
    price: 1900,
    image: '/images/products/Digital Weight Scale.png',
    rating: 4.5,
    prescription_required: false,
    brand: 'Omron',
    packSize: '1 unit',
    description: '',
    benefits: [],
    usage: '',
    ingredients: [],
    warnings: []
  },
  {
    id: '19',
    name: 'Magnesium Supplements',
    price: 850,
    image: '/images/products/Magnesium Supplements.webp',
    rating: 4.3,
    prescription_required: false,
    brand: 'Now Foods',
    packSize: '90 tablets',
    description: '',
    benefits: [],
    usage: '',
    ingredients: [],
    warnings: []
  },
  {
    id: '20',
    name: 'Hot Water Bottle',
    price: 600,
    image: '/images/products/Sahyog.webp',
    rating: 4.4,
    prescription_required: false,
    brand: 'Sahyog',
    packSize: '2L capacity',
    description: '',
    benefits: [],
    usage: '',
    ingredients: [],
    warnings: []
  }
];
