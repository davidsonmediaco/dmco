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
    title: "Portrait Photography",
    subtitle: "",
    imageUrl: imagePath('portraits', 'GAILJPH.jpg'),
    categories: ["portraits"],
    link: "#"
  },
  {
    id: 2,
    title: "Portrait Photography",
    subtitle: "",
    imageUrl: imagePath('portraits', 'IMG_1041.jpg'),
    categories: ["portraits"],
    link: "#"
  },
  {
    id: 3,
    title: "Portrait Photography",
    subtitle: "",
    imageUrl: imagePath('portraits', 'laura 4.png'),
    categories: ["portraits"],
    link: "#"
  },
  
  // Brands & Business
  // Ready for your brand images
  
  // Live Shows (Music)
  // Ready for your music images
  
  // Man's Best Friend (Dogs)
  // Ready for your dog images
  
  // Sports
  // Ready for your sports images
];
