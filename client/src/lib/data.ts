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
  {
    id: 5,
    title: "Portrait Photography",
    subtitle: "",
    imageUrl: imagePath('portraits', 'IMG_4637.jpg'),
    categories: ["portraits"],
    link: "#"
  },
  {
    id: 6,
    title: "Portrait Photography",
    subtitle: "",
    imageUrl: imagePath('portraits', 'Danny-headshot.jpg'),
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
  {
    id: 12,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A0791.jpg'),
    categories: ["music"],
    link: "#"
  },
  {
    id: 13,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A0891.jpg'),
    categories: ["music"],
    link: "#"
  },
  {
    id: 14,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A1148.jpg'),
    categories: ["music"],
    link: "#"
  },
  {
    id: 15,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A1317.jpg'),
    categories: ["music"],
    link: "#"
  },
  {
    id: 16,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'IMG_8722 copy.jpg'),
    categories: ["music"],
    link: "#"
  },
  {
    id: 17,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A0203.jpg'),
    categories: ["music"],
    link: "#"
  },
  {
    id: 18,
    title: "Music Photography",
    subtitle: "",
    imageUrl: imagePath('music', 'A58A1043.jpg'),
    categories: ["music"],
    link: "#"
  },
  
  // Man's Best Friend (Dogs)
  {
    id: 30,
    title: "Dog Photography",
    subtitle: "Man's Best Friend",
    imageUrl: imagePath('dogs', 'IMG_2813.jpg'),
    categories: ["dogs"],
    link: "#"
  },
  {
    id: 31,
    title: "Dog Photography",
    subtitle: "Man's Best Friend",
    imageUrl: imagePath('dogs', 'IMG_9756.jpg'),
    categories: ["dogs"],
    link: "#"
  },
  {
    id: 32,
    title: "Dog Photography",
    subtitle: "Man's Best Friend",
    imageUrl: imagePath('dogs', 'IMG_9848.jpg'),
    categories: ["dogs"],
    link: "#"
  },
  
  // Sports
  {
    id: 40,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5681.jpg'),
    categories: ["sports"],
    link: "#"
  },
  {
    id: 41,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5692.jpg'),
    categories: ["sports"],
    link: "#"
  },
  {
    id: 42,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5700.jpg'),
    categories: ["sports"],
    link: "#"
  },
  {
    id: 43,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5754.jpg'),
    categories: ["sports"],
    link: "#"
  },
  {
    id: 44,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5763.jpg'),
    categories: ["sports"],
    link: "#"
  },
  {
    id: 45,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5767.jpg'),
    categories: ["sports"],
    link: "#"
  },
  {
    id: 46,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', '_MG_5774.jpg'),
    categories: ["sports"],
    link: "#"
  },
  {
    id: 47,
    title: "Sports Photography",
    subtitle: "Action Shots",
    imageUrl: imagePath('sports', 'IMG_2364.jpg'),
    categories: ["sports"],
    link: "#"
  }
];
