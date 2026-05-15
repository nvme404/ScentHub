
import { Store, Perfume, Review } from './types';

const genericReviews: Review[] = [
  {
    id: 'r1',
    userName: 'Budi Santoso',
    rating: 5,
    comment: 'Wanginya enak banget, tahan lama seharian. Packing aman!',
    date: '2023-10-20',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'r2',
    userName: 'Siti Aminah',
    rating: 4,
    comment: 'Original 100%. Pengiriman agak lama tapi terbayar dengan kualitas.',
    date: '2023-10-18',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100'
  }
];

export const STORES: Store[] = [
  {
    id: 's1',
    name: 'Dior Official Store',
    logo: 'https://www.dior.com/on/demandware.static/Sites-dior_international-Site/-/default/dw06990494/images/favicon.ico',
    rating: 4.9,
    followers: '2.5M',
    productsCount: 150,
    responseRate: '98%',
    joinedDate: '5 years ago',
    isOfficial: true,
    perfumes: [
      {
        id: 'p1',
        name: 'Sauvage Eau de Parfum',
        brand: 'Dior',
        price: 2450000,
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&h=800',
        description: 'Raw and noble. Radiant top notes burst with the juicy freshness of Reggio di Calabria Bergamot.',
        category: 'Men',
        rating: 4.9,
        sold: 15400,
        isBestSeller: true,
        notes: { top: ['Bergamot'], middle: ['Lavender', 'Pepper'], base: ['Ambroxan'] },
        reviews: genericReviews
      },
      {
        id: 'p2',
        name: "J'adore Eau de Parfum",
        brand: 'Dior',
        price: 2850000,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&h=800',
        description: "The grand feminine floral by the House of Dior.",
        category: 'Women',
        rating: 4.8,
        sold: 8200,
        isBestSeller: true,
        notes: { top: ['Pear', 'Melon'], middle: ['Jasmine', 'Rose'], base: ['Musk'] },
        reviews: genericReviews
      },
      {
        id: 'p22',
        name: "Fahrenheit",
        brand: 'Dior',
        price: 1950000,
        image: 'https://images.unsplash.com/photo-1592914610354-fd35984456b6?auto=format&fit=crop&w=600&h=800',
        description: "A creative and powerful signature fragrance for men.",
        category: 'Men',
        rating: 4.7,
        sold: 3100,
        isBestSeller: false,
        notes: { top: ['Lavender', 'Mandarin'], middle: ['Violet', 'Cedar'], base: ['Leather', 'Patchouli'] },
        reviews: genericReviews
      }
    ]
  },
  {
    id: 's2',
    name: 'Mykonos Indonesia',
    logo: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&w=200&h=200',
    rating: 4.8,
    followers: '850K',
    productsCount: 45,
    responseRate: '95%',
    joinedDate: '3 years ago',
    isOfficial: true,
    perfumes: [
      {
        id: 'p3',
        name: 'California Extract de Parfum',
        brand: 'Mykonos',
        price: 219000,
        image: 'https://images.unsplash.com/photo-1588405864443-f72880004f84?auto=format&fit=crop&w=600&h=800',
        description: 'Fresh citrusy and woody blend inspired by the California coast.',
        category: 'Unisex',
        rating: 4.9,
        sold: 12500,
        isBestSeller: true,
        notes: { top: ['Orange', 'Lemon'], middle: ['Sea Salt', 'Sage'], base: ['Amber'] },
        reviews: genericReviews
      },
      {
        id: 'p23',
        name: 'Aphrodite',
        brand: 'Mykonos',
        price: 249000,
        image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=600&h=800',
        description: 'Sensual floral scent with a long-lasting honey base.',
        category: 'Women',
        rating: 4.8,
        sold: 22000,
        isBestSeller: true,
        notes: { top: ['Wild Rose'], middle: ['Honey'], base: ['Vanilla', 'Musk'] },
        reviews: genericReviews
      }
    ]
  },
  {
    id: 's16',
    name: 'Felixir Official',
    logo: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=200&h=200',
    rating: 4.7,
    followers: '120K',
    productsCount: 15,
    responseRate: '99%',
    joinedDate: '1 year ago',
    isOfficial: true,
    perfumes: [
      {
        id: 'p24',
        name: 'Icarus',
        brand: 'Felixir',
        price: 189000,
        image: 'https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?auto=format&fit=crop&w=600&h=800',
        description: 'Bold woody fragrance with hints of spice for the modern explorer.',
        category: 'Men',
        rating: 4.9,
        sold: 5000,
        isBestSeller: true,
        notes: { top: ['Cinnamon', 'Bergamot'], middle: ['Tobacco', 'Vetiver'], base: ['Leather'] },
        reviews: genericReviews
      }
    ]
  },
  {
    id: 's17',
    name: 'Brafen Niche',
    logo: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=200&h=200',
    rating: 4.6,
    followers: '45K',
    productsCount: 8,
    responseRate: '90%',
    joinedDate: '2 years ago',
    isOfficial: true,
    perfumes: [
      {
        id: 'p25',
        name: 'Cool Water',
        brand: 'Brafen',
        price: 155000,
        image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=600&h=800',
        description: 'Aquatic and fresh, a classic representation of ocean vibes.',
        category: 'Men',
        rating: 4.5,
        sold: 1200,
        isBestSeller: false,
        notes: { top: ['Sea Water', 'Mint'], middle: ['Sandalwood', 'Geranium'], base: ['Musk', 'Oakmoss'] },
        reviews: genericReviews
      }
    ]
  },
  {
    id: 's4',
    name: 'Chanel Luxury',
    logo: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=200&h=200',
    rating: 5.0,
    followers: '4.2M',
    productsCount: 210,
    responseRate: '99%',
    joinedDate: '10 years ago',
    isOfficial: true,
    perfumes: [
      {
        id: 'p6',
        name: 'Bleu de Chanel',
        brand: 'Chanel',
        price: 3150000,
        image: 'https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?auto=format&fit=crop&w=600&h=800',
        description: 'Timeless, powerful scent. Woody aromatic trail.',
        category: 'Men',
        rating: 4.9,
        sold: 21000,
        isBestSeller: true,
        notes: { top: ['Grapefruit'], middle: ['Ginger'], base: ['Sandalwood'] },
        reviews: genericReviews
      },
      {
        id: 'p26',
        name: 'Coco Mademoiselle',
        brand: 'Chanel',
        price: 3450000,
        image: 'https://images.unsplash.com/photo-1563170351-be39c88ea276?auto=format&fit=crop&w=600&h=800',
        description: 'The essence of a bold, free woman. An oriental with a strong character.',
        category: 'Women',
        rating: 4.8,
        sold: 35000,
        isBestSeller: true,
        notes: { top: ['Orange'], middle: ['Rose', 'Jasmine'], base: ['Patchouli', 'Vetiver'] },
        reviews: genericReviews
      }
    ]
  },
  {
    id: 's5',
    name: 'Tom Ford Beauty',
    logo: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=200&h=200',
    rating: 4.9,
    followers: '1.8M',
    productsCount: 88,
    responseRate: '92%',
    joinedDate: '4 years ago',
    isOfficial: true,
    perfumes: [
      {
        id: 'p8',
        name: 'Oud Wood Eau de Parfum',
        brand: 'Tom Ford',
        price: 5200000,
        image: 'https://images.unsplash.com/photo-1592914610354-fd35984456b6?auto=format&fit=crop&w=600&h=800',
        description: 'Rare, precious, expensive. Oud wood is one of the most exotic ingredients.',
        category: 'Unisex',
        rating: 4.8,
        sold: 5200,
        isBestSeller: true,
        notes: { top: ['Rosewood'], middle: ['Sichuan Pepper'], base: ['Oud', 'Sandalwood'] },
        reviews: genericReviews
      },
      {
        id: 'p27',
        name: 'Tobacco Vanille',
        brand: 'Tom Ford',
        price: 5400000,
        image: 'https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?auto=format&fit=crop&w=600&h=800',
        description: 'Opulent, warm, and iconic. Reminiscent of an English Gentleman\'s Club.',
        category: 'Unisex',
        rating: 4.9,
        sold: 4800,
        isBestSeller: true,
        notes: { top: ['Tobacco Leaf'], middle: ['Vanilla', 'Cacao'], base: ['Dried Fruits', 'Woody Notes'] },
        reviews: genericReviews
      }
    ]
  },
  {
    id: 's6',
    name: 'HMNS Perfumery',
    logo: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?auto=format&fit=crop&w=200&h=200',
    rating: 4.8,
    followers: '1.2M',
    productsCount: 32,
    responseRate: '99%',
    joinedDate: '3 years ago',
    isOfficial: true,
    perfumes: [
      {
        id: 'p9',
        name: 'Orgasm',
        brand: 'HMNS',
        price: 359000,
        image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=600&h=800',
        description: 'Floral, fruity, and woody notes blend perfectly.',
        category: 'Women',
        rating: 4.9,
        sold: 85000,
        isBestSeller: true,
        notes: { top: ['Red Apple'], middle: ['Rose', 'Jasmine'], base: ['Amber'] },
        reviews: genericReviews
      },
      {
        id: 'p28',
        name: 'Farhampton',
        brand: 'HMNS',
        price: 369000,
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&h=800',
        description: 'The ultimate aromatic-woody perfume for the true gentleman.',
        category: 'Men',
        rating: 4.8,
        sold: 45000,
        isBestSeller: true,
        notes: { top: ['Bergamot', 'Pepper'], middle: ['Lavender', 'Geranium'], base: ['Cedar', 'Amber'] },
        reviews: genericReviews
      }
    ]
  },
  {
    id: 's7',
    name: 'Creed Aventus Official',
    logo: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=200&h=200',
    rating: 4.9,
    followers: '500K',
    productsCount: 25,
    responseRate: '90%',
    joinedDate: '7 years ago',
    isOfficial: true,
    perfumes: [
      {
        id: 'p10',
        name: 'Aventus',
        brand: 'Creed',
        price: 6500000,
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&h=800',
        description: 'Legendary success. Inspired by the dramatic life of a historic emperor.',
        category: 'Men',
        rating: 5.0,
        sold: 3400,
        isBestSeller: true,
        notes: { top: ['Pineapple', 'Apple'], middle: ['Patchouli', 'Rose'], base: ['Musk', 'Oakmoss'] },
        reviews: genericReviews
      }
    ]
  }
];

export const ALL_PERFUMES = STORES.flatMap(s => s.perfumes);
