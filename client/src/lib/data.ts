import { PortfolioItemType } from "@/components/ui/PortfolioItem";

// Helper function to get correct path to local images
const imagePath = (category: string, filename: string) => `/images/${category}/${filename}`;

// Example of how to use uploaded files:
// For placeholder use: Use online images until you upload your own
// After uploading your own photos, replace the imageUrl with: 
// imageUrl: imagePath('portraits', 'your-filename.jpg')

export const portfolioItems: PortfolioItemType[] = [
  // BTS Photography
  {
    id: 60,
    title: "BTS Photography",
    subtitle: "Jersey Girl Podcast",
    imageUrl: imagePath('bts', 'jersey-girl-pod-mondlock-moments-bts-01.jpg'),
    categories: ["bts"],
    link: "#",
    isWide: true
  },
  {
    id: 61,
    title: "BTS Photography",
    subtitle: "Behind the Scenes",
    imageUrl: imagePath('bts', 'jersey-girl-pod-mondlock-moments-bts-05.jpg'),
    categories: ["bts"],
    link: "#",
    isWide: true
  },
  {
    id: 62,
    title: "BTS Photography",
    subtitle: "Creative Process",
    imageUrl: imagePath('bts', 'jersey-girl-pod-mondlock-moments-bts-09.jpg'),
    categories: ["bts"],
    link: "#",
    isWide: true
  },
  {
    id: 63,
    title: "BTS Photography",
    subtitle: "Studio Setup",
    imageUrl: imagePath('bts', 'jersey-girl-pod-mondlock-moments-bts-10.jpg'),
    categories: ["bts"],
    link: "#",
    isWide: true
  },
  {
    id: 64,
    title: "BTS Photography",
    subtitle: "Production Team",
    imageUrl: imagePath('bts', 'jersey-girl-pod-mondlock-moments-bts-11.jpg'),
    categories: ["bts"],
    link: "#",
    isWide: true
  },
  {
    id: 65,
    title: "BTS Photography",
    subtitle: "Equipment Setup",
    imageUrl: imagePath('bts', 'jersey-girl-pod-mondlock-moments-bts-12.jpg'),
    categories: ["bts"],
    link: "#",
    isWide: true
  },
  
  // Portraits
  {
    id: 1,
    title: "Portrait Photography",
    subtitle: "Professional Headshots",
    imageUrl: imagePath('portraits', 'gail-bench.jpg.jpg'),
    categories: ["portraits"],
    link: "#",
    isWide: true
  },
  {
    id: 2,
    title: "Portrait Photography",
    subtitle: "Outdoor Sessions",
    imageUrl: imagePath('portraits', 'gail-denim-headshot.jpg'),
    categories: ["portraits"],
    link: "#",
    isWide: true
  },
  {
    id: 3,
    title: "Portrait Photography",
    subtitle: "Studio Portraits",
    imageUrl: imagePath('portraits', 'laura 4.png'),
    categories: ["portraits"],
    link: "#",
    isWide: true
  },
  {
    id: 7,
    title: "Portrait Photography",
    subtitle: "Unique Portrait",
    imageUrl: imagePath('portraits', 'monte-idol-headshot.jpg'),
    categories: ["portraits"],
    link: "#",
    isWide: true
  },
  {
    id: 4,
    title: "Portrait Photography",
    subtitle: "",
    imageUrl: imagePath('portraits', 'gail-water-headshot.jpg'),
    categories: ["portraits"],
    link: "#",
    isWide: true
  },
  {
    id: 6,
    title: "Portrait Photography",
    subtitle: "",
    imageUrl: imagePath('portraits', 'Danny-headshot.jpg'),
    categories: ["portraits"],
    link: "#",
    isWide: true
  },
  {
    id: 8,
    title: "Portrait Photography",
    subtitle: "Environmental Portrait",
    imageUrl: imagePath('portraits', 'IMG_2364.jpg'),
    categories: ["portraits"],
    link: "#",
    isWide: true
  },
  
  // Brands & Businesses
  {
    id: 21,
    title: "Brands & Businesses Photography",
    subtitle: "Barrister Coffee House",
    imageUrl: imagePath('brands', 'barrister-coffee-house-coffee-pour.jpg'),
    categories: ["brands"],
    link: "#",
    isWide: true
  },
  {
    id: 22,
    title: "Brands & Businesses Photography",
    subtitle: "Coffee Roasting Close-Up",
    imageUrl: imagePath('brands', 'barrister-coffee-roast-close-up.jpg'),
    categories: ["brands"],
    link: "#",
    isWide: true
  },
  {
    id: 23,
    title: "Brand Photography",
    subtitle: "Coffee Roasting Process",
    imageUrl: imagePath('brands', 'barrister-coffee-roasting.jpg'),
    categories: ["brands"],
    link: "#",
    isWide: true
  },
  {
    id: 24,
    title: "Brand Photography",
    subtitle: "San Remo Coffee Machine",
    imageUrl: imagePath('brands', 'san-remo-coffe-machine.jpg.jpg'),
    categories: ["brands"],
    link: "#",
    isWide: true
  },
  {
    id: 25,
    title: "Brand Photography",
    subtitle: "San Remo Coffee Wide",
    imageUrl: imagePath('brands', 'san-remo-coffee-wide.jpg'),
    categories: ["brands"],
    link: "#",
    isWide: true
  },
  {
    id: 26,
    title: "Brand Photography",
    subtitle: "San Remo Espresso",
    imageUrl: imagePath('brands', 'san-remo-espresso.jpg'),
    categories: ["brands"],
    link: "#",
    isWide: true
  },
  
  // Live Shows (Music)
  {
    id: 10,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A0261.jpg'),
    categories: ["music"],
    link: "#",
    isWide: true
  },
  {
    id: 11,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A5969.jpg'),
    categories: ["music"],
    link: "#",
    isWide: true
  },
  {
    id: 12,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A0791.jpg'),
    categories: ["music"],
    link: "#",
    isWide: true
  },
  {
    id: 13,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A0891.jpg'),
    categories: ["music"],
    link: "#",
    isWide: false  // Removed from slideshow as requested
  },
  {
    id: 14,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A1148.jpg'),
    categories: ["music"],
    link: "#",
    isWide: true
  },
  {
    id: 15,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A1317.jpg'),
    categories: ["music"],
    link: "#",
    isWide: false  // Keeping this as false since it's a vertical image
  },
  {
    id: 16,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'IMG_8722 copy.jpg'),
    categories: ["music"],
    link: "#",
    isWide: true
  },
  {
    id: 17,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A0203.jpg'),
    categories: ["music"],
    link: "#",
    isWide: true
  },
  {
    id: 18,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A1043.jpg'),
    categories: ["music"],
    link: "#",
    isWide: true
  },
  
  // Man's Best Friend (Dogs)
  {
    id: 30,
    title: "Dog Photography",
    subtitle: "Man's Best Friend",
    imageUrl: imagePath('dogs', 'IMG_2813.jpg'),
    categories: ["dogs"],
    link: "#",
    isWide: true
  },
  {
    id: 31,
    title: "Dog Photography",
    subtitle: "Man's Best Friend",
    imageUrl: imagePath('dogs', 'IMG_9756.jpg'),
    categories: ["dogs"],
    link: "#",
    isWide: true
  },
  {
    id: 32,
    title: "Dog Photography",
    subtitle: "Man's Best Friend",
    imageUrl: imagePath('dogs', 'IMG_9848.jpg'),
    categories: ["dogs"],
    link: "#",
    isWide: false
  },
  
  // Sports
  {
    id: 40,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5681.jpg'),
    categories: ["sports"],
    link: "#",
    isWide: true
  },
  {
    id: 41,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5692.jpg'),
    categories: ["sports"],
    link: "#",
    isWide: true
  },
  {
    id: 42,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5700.jpg'),
    categories: ["sports"],
    link: "#",
    isWide: true
  },
  {
    id: 43,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5754.jpg'),
    categories: ["sports"],
    link: "#",
    isWide: true
  },
  {
    id: 44,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5763.jpg'),
    categories: ["sports"],
    link: "#",
    isWide: true
  },
  {
    id: 45,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5767.jpg'),
    categories: ["sports"],
    link: "#",
    isWide: true
  },
  {
    id: 46,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5774.jpg'),
    categories: ["sports"],
    link: "#",
    isWide: true
  }
];
