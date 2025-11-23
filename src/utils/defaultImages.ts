// Default featured images for different categories
export const getDefaultFeaturedImage = (category: string): string => {
  const defaultImages: Record<string, string> = {
    "business": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=630&fit=crop&crop=center",
    "it-consulting": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop&crop=center",
    "real-estate": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop&crop=center",
    "events": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=630&fit=crop&crop=center",
    "digital-marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&crop=center"
  };

  return defaultImages[category] || defaultImages["business"];
};

// Category-specific image collections for variety
export const getCategoryImages = (category: string): string[] => {
  const imageCollections: Record<string, string[]> = {
    "business": [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=630&fit=crop&crop=center"
    ],
    "it-consulting": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=630&fit=crop&crop=center"
    ],
    "real-estate": [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=630&fit=crop&crop=center"
    ],
    "events": [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1519167758481-83f550bbd0dc?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=630&fit=crop&crop=center"
    ],
    "digital-marketing": [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=1200&h=630&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=630&fit=crop&crop=center"
    ]
  };

  return imageCollections[category] || imageCollections["business"];
};