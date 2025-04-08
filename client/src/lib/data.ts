import { PortfolioItemType } from "@/components/ui/PortfolioItem";

// Helper function to get correct path to local images
const imagePath = (category: string, filename: string) => `/images/${category}/${filename}`;

// Example of how to use uploaded files:
// For placeholder use: Use online images until you upload your own
// After uploading your own photos, replace the imageUrl with: 
// imageUrl: imagePath('portraits', 'your-filename.jpg')

export const portfolioItems: PortfolioItemType[] = [
  // Portraits
  {
    id: 1,
    title: "Creative Portraits",
    subtitle: "Professional headshots",
    imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=987&auto=format&fit=crop",
    categories: ["portraits"],
    link: "#"
  },
  {
    id: 2,
    title: "Editorial Session",
    subtitle: "Magazine feature portraits",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop",
    categories: ["portraits"],
    link: "#"
  },
  {
    id: 3,
    title: "Artisan Series",
    subtitle: "Highlighting local creators",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1374&auto=format&fit=crop",
    categories: ["portraits"],
    link: "#"
  },
  {
    id: 21,
    title: "Urban Expressions",
    subtitle: "City life portrait series",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop",
    categories: ["portraits"],
    link: "#"
  },
  {
    id: 22,
    title: "Natural Light",
    subtitle: "Golden hour sessions",
    imageUrl: "https://images.unsplash.com/photo-1520975867559-974c92525660?q=80&w=1374&auto=format&fit=crop",
    categories: ["portraits"],
    link: "#"
  },
  {
    id: 23,
    title: "Character Study",
    subtitle: "Environmental portraits",
    imageUrl: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1169&auto=format&fit=crop",
    categories: ["portraits"],
    link: "#"
  },
  {
    id: 24,
    title: "Studio Elegance",
    subtitle: "Controlled lighting portraits",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
    categories: ["portraits"],
    link: "#"
  },
  {
    id: 25,
    title: "Authentic Moments",
    subtitle: "Candid lifestyle portraits",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    categories: ["portraits"],
    link: "#"
  },
  
  // Brands & Business
  {
    id: 4,
    title: "Modern Office",
    subtitle: "Brand identity shoot",
    imageUrl: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1170&auto=format&fit=crop",
    categories: ["brands"],
    link: "#"
  },
  {
    id: 5,
    title: "Retail Spaces",
    subtitle: "Storefront photography",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    categories: ["brands"],
    link: "#"
  },
  {
    id: 6,
    title: "Product Lifestyle",
    subtitle: "E-commerce imagery",
    imageUrl: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=1372&auto=format&fit=crop",
    categories: ["brands"],
    link: "#"
  },
  {
    id: 26,
    title: "Brand Storytelling",
    subtitle: "Visual narrative for businesses",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop",
    categories: ["brands"],
    link: "#"
  },
  {
    id: 27,
    title: "Product Details",
    subtitle: "Close-up commercial photography",
    imageUrl: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?q=80&w=1493&auto=format&fit=crop",
    categories: ["brands"],
    link: "#"
  },
  {
    id: 28,
    title: "Workspace Culture",
    subtitle: "Team environment photography",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    categories: ["brands"],
    link: "#"
  },
  {
    id: 29,
    title: "Brand Lifestyle",
    subtitle: "Authentic customer interactions",
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1470&auto=format&fit=crop",
    categories: ["brands"],
    link: "#"
  },
  {
    id: 30,
    title: "Pop-Up Events",
    subtitle: "Brand activation photography",
    imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1374&auto=format&fit=crop",
    categories: ["brands"],
    link: "#"
  },
  
  // Live Shows (Music)
  {
    id: 7,
    title: "Live Shows",
    subtitle: "Concert photography",
    imageUrl: "https://images.unsplash.com/photo-1626628080286-8ec8be8e4e6e?q=80&w=1170&auto=format&fit=crop",
    categories: ["music"],
    link: "#"
  },
  {
    id: 8,
    title: "Stage Moments",
    subtitle: "Performance captures",
    imageUrl: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop",
    categories: ["music"],
    link: "#"
  },
  {
    id: 9,
    title: "Backstage Access",
    subtitle: "Behind the scenes",
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1470&auto=format&fit=crop",
    categories: ["music"],
    link: "#"
  },
  {
    id: 31,
    title: "Festival Coverage",
    subtitle: "Multi-day music events",
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop",
    categories: ["music"],
    link: "#"
  },
  {
    id: 32,
    title: "Artist Portraits",
    subtitle: "Musician promo imagery",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop",
    categories: ["music"],
    link: "#"
  },
  {
    id: 33,
    title: "Crowd Energy",
    subtitle: "Audience experience",
    imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1528&auto=format&fit=crop",
    categories: ["music"],
    link: "#"
  },
  {
    id: 34,
    title: "Studio Sessions",
    subtitle: "Recording process",
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1470&auto=format&fit=crop",
    categories: ["music"],
    link: "#"
  },
  {
    id: 35,
    title: "Instrument Details",
    subtitle: "Musical equipment close-ups",
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1470&auto=format&fit=crop",
    categories: ["music"],
    link: "#"
  },
  
  // Man's Best Friend (Dogs)
  {
    id: 10,
    title: "Man's Best Friend",
    subtitle: "Candid captures of our best friend",
    imageUrl: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1170&auto=format&fit=crop",
    categories: ["dogs"],
    link: "#"
  },
  {
    id: 11,
    title: "Playful Pups",
    subtitle: "Action shots in nature",
    imageUrl: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1376&auto=format&fit=crop",
    categories: ["dogs"],
    link: "#"
  },
  {
    id: 12,
    title: "Loyal Companions",
    subtitle: "Pet and owner moments",
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1469&auto=format&fit=crop",
    categories: ["dogs"],
    link: "#"
  },
  {
    id: 36,
    title: "Studio Pet Portraits",
    subtitle: "Professional dog photography",
    imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1469&auto=format&fit=crop",
    categories: ["dogs"],
    link: "#"
  },
  {
    id: 37,
    title: "Puppies at Play",
    subtitle: "Young dogs enjoying life",
    imageUrl: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1470&auto=format&fit=crop",
    categories: ["dogs"],
    link: "#"
  },
  {
    id: 38,
    title: "Dog Beach Day",
    subtitle: "Canines enjoying the water",
    imageUrl: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=1470&auto=format&fit=crop",
    categories: ["dogs"],
    link: "#"
  },
  {
    id: 39,
    title: "Urban Pups",
    subtitle: "City dogs on adventure",
    imageUrl: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=1375&auto=format&fit=crop",
    categories: ["dogs"],
    link: "#"
  },
  {
    id: 40,
    title: "Senior Dog Dignity",
    subtitle: "Celebrating elder canines",
    imageUrl: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1374&auto=format&fit=crop",
    categories: ["dogs"],
    link: "#"
  },
  
  // Sports
  {
    id: 15,
    title: "Action Shots",
    subtitle: "Dynamic sports photography",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1169&auto=format&fit=crop",
    categories: ["sports"],
    link: "#"
  },
  {
    id: 16,
    title: "Team Spirit",
    subtitle: "Youth sports leagues",
    imageUrl: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1471&auto=format&fit=crop",
    categories: ["sports"],
    link: "#"
  },
  {
    id: 17,
    title: "Game Day",
    subtitle: "Local championship coverage",
    imageUrl: "https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=1023&auto=format&fit=crop",
    categories: ["sports"],
    link: "#"
  },
  {
    id: 41,
    title: "Marathon Moments",
    subtitle: "Endurance event photography",
    imageUrl: "https://images.unsplash.com/photo-1595558033524-112d87f0cf7d?q=80&w=1374&auto=format&fit=crop",
    categories: ["sports"],
    link: "#"
  },
  {
    id: 42,
    title: "Court Action",
    subtitle: "Basketball photography",
    imageUrl: "https://images.unsplash.com/photo-1613904985222-0d534ba38061?q=80&w=1470&auto=format&fit=crop",
    categories: ["sports"],
    link: "#"
  },
  {
    id: 43,
    title: "Athlete Portraits",
    subtitle: "Sports personality feature",
    imageUrl: "https://images.unsplash.com/photo-1526403646408-57b94dc15399?q=80&w=1470&auto=format&fit=crop",
    categories: ["sports"],
    link: "#"
  },
  {
    id: 44,
    title: "Victory Moment",
    subtitle: "Triumph in competition",
    imageUrl: "https://images.unsplash.com/photo-1516731415730-0c607149933a?q=80&w=1470&auto=format&fit=crop",
    categories: ["sports"],
    link: "#"
  },
  {
    id: 45,
    title: "Training Sessions",
    subtitle: "Behind the competition",
    imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1469&auto=format&fit=crop",
    categories: ["sports"],
    link: "#"
  },
  
  // Additional lifestyle items (not in main categories)
  {
    id: 13,
    title: "Summer Lifestyle",
    subtitle: "Outdoor living campaign",
    imageUrl: "https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?q=80&w=1074&auto=format&fit=crop",
    categories: ["lifestyle"],
    link: "#"
  },
  {
    id: 14,
    title: "Modern Living",
    subtitle: "Interior design feature",
    imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1180&auto=format&fit=crop",
    categories: ["lifestyle"],
    link: "#"
  }
];
