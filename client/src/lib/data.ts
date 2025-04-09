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
  {
    id: 4,
    title: "Portrait Photography",
    subtitle: "",
    imageUrl: imagePath('portraits', 'IMG_3587.jpg'),
    categories: ["portraits"],
    link: "#"
  },
  
  // Brands & Business
  {
    id: 20,
    title: "Brand Photography",
    subtitle: "",
    imageUrl: imagePath('brands', 'IMG_9346.jpg'),
    categories: ["brands"],
    link: "#"
  },
  {
    id: 5,
    title: "Brand Photography",
    subtitle: "",
    imageUrl: imagePath('brands', 'IMG_9352.jpg'),
    categories: ["brands"],
    link: "#"
  },
  {
    id: 6,
    title: "Brand Photography",
    subtitle: "",
    imageUrl: imagePath('brands', 'IMG_9360.jpg'),
    categories: ["brands"],
    link: "#"
  },
  {
    id: 7,
    title: "Brand Photography",
    subtitle: "",
    imageUrl: imagePath('brands', 'IMG_9382-Enhanced-NR.jpg'),
    categories: ["brands"],
    link: "#"
  },
  {
    id: 8,
    title: "Brand Photography",
    subtitle: "",
    imageUrl: imagePath('brands', 'IMG_9423.jpg'),
    categories: ["brands"],
    link: "#"
  },
  {
    id: 9,
    title: "Brand Photography",
    subtitle: "",
    imageUrl: imagePath('brands', 'IMG_9433-Enhanced-NR.jpg'),
    categories: ["brands"],
    link: "#"
  },
  
  // Live Shows (Music)
  {
    id: 10,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A0261.jpg'),
    categories: ["music"],
    link: "#"
  },
  {
    id: 11,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A5969.jpg'),
    categories: ["music"],
    link: "#"
  },
  
  // Man's Best Friend (Dogs)
  // Ready for your dog images
  
  // Sports
  // Ready for your sports images
];
