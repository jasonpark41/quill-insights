export const bulkItems = [
  {
    item: "Hammermill Copy Plus 8.5\" x 11\" Copy Paper, 20 lbs",
    category: "Paper",
    regularPrice: 164.99,
    bulkPrice: 139.99,
    bulkQuantity: "20 cases",
    savings: 15, // %
    image: "/images/paper.png",
  },
  {
    item: "Canon 275 XL Black High Yield Ink Cartridge",
    category: "Ink & Toner",
    regularPrice: 369.99,
    bulkPrice: 319.99,
    bulkQuantity: "10 cartridges",
    savings: 13, // %
    image: "/images/ink.png",
  },
  {
    item: "CloroxPro Disinfecting Wipes, Fresh Scent, 75 Wipes/Container",
    category: "Cleaning",
    regularPrice: 139.75,
    bulkPrice: 119.99,
    bulkQuantity: "25 containers",
    savings: 14, // %
    image: "/images/wipes.png",
  },
  {
    item: "PURELL Advanced Hand Sanitizer Refreshing Gel, Clean Scent, 1.5 Liter Pump Bottle",
    category: "Safety",
    regularPrice: 329.85,
    bulkPrice: 289.99,
    bulkQuantity: "15 bottles",
    savings: 12, // %
    image: "/images/sanitizer.png",
  },
  {
    item: "Quill Brand® File Folders, 1/3-Cut Assorted, Letter Size, Manila, 100/Box",
    category: "Office Supplies",
    regularPrice: 169.90,
    bulkPrice: 149.99,
    bulkQuantity: "10 boxes",
    savings: 12, // %
    image: "/images/folders.png",
  }
];

export const rewardsProducts = [
  {
    product: "Ammex Professional Series Powder Free Nitrile Exam Gloves, Latex Free, XL, Blue",
    category: "Safety Supplies",
    vendor: "Ammex",
    sponsoredNote: "Exclusive Rewards+ member pricing - 15% off regular price",
    price: "$79.89",
    features: ["Latex-free to reduce risks of allergic reactions", "Powder-free gloves are perfect where residue is an issue", "100 gloves in a box, 10 boxes per carton"],
    rewardsFeature: "Earn 2x points on all safety supplies purchases",
    badgeType: "rewards",
    image: "images/gloves.png"
  },
  {
    product: "Apple AirPods Noise-Canceling Earbuds with USB-C Charging Case, 4th Generation",
    category: "Headphones",
    vendor: "Apple",
    sponsoredNote: "Rewards+ exclusive - Premium quality at member prices",
    price: "$210.99",
    features: ["Dust, sweat, and water resistant", "Improved sound and call quality", "Long battery life"],
    rewardsFeature: "Free shipping on orders over $50",
    badgeType: "rewards",
    image: "images/airpods.png"
  },
  {
    product: "Quill Brand® Kelburne Luxura Faux Leather Computer and Desk Chair",
    category: "Office Chairs",
    vendor: "Quill Brand",
    sponsoredNote: "Member exclusive - Ergonomic design with extended warranty",
    price: "$218.49",
    features: ["Ergonomic support", "Adjustable height", "5-year warranty"],
    rewardsFeature: "Extended warranty and priority customer service",
    badgeType: "rewards",
    image: "images/chair.png"
  },
  {
    product: 'Union & Scale™ Essentials 48"W Computer and Writing Desk',
    category: "Office Desks",
    vendor: "Union & Scale",
    sponsoredNote: "Rewards+ pricing - Same quality, better value",
    price: "$349.59",
    features: ["Integrated power strip with two USB ports", "Fade-resistant", "Powered writing desk"],
    rewardsFeature: "Automatic reorder discounts available",
    badgeType: "rewards",
    image: "images/desk.png"
  }
];

export const items = [
  { name: "Copy Paper", category: "Paper", source: "Quill" },
  { name: "Ink Cartridges", category: "Ink & Toner", source: "Canon" },
  { name: "Hand Sanitizer", category: "Safety", source: "Purell" },
  { name: "File Folders", category: "Office Supplies", source: "Quill Brand" },
  { name: "Disinfecting Wipes", category: "Cleaning", source: "Clorox" },
  { name: "Pens", category: "Writing", source: "BIC" },
  { name: "Notebooks", category: "Paper", source: "Mead" },
  { name: "Sticky Notes", category: "Office Supplies", source: "Post-it" },
];

export const sponsoredItems = [
  { product: "Premium Paper Bundle", category: "Paper", price: "$89.99", sponsoredNote: "Save 20% on bulk orders" },
  { product: "Ergonomic Chair", category: "Furniture", price: "$299.99", sponsoredNote: "Free shipping included" },
  { product: "Wireless Mouse", category: "Technology", price: "$24.99", sponsoredNote: "Extended warranty" },
  { product: "Desk Organizer Set", category: "Office Supplies", price: "$39.99", sponsoredNote: "Buy 2 get 1 free" },
];

export const categoryData = [
  { name: 'Jan/San Supplies', spend: 15600, savings: 1400, percentage: 16, color: 'hsl(var(--primary))' },
  { name: 'PPE & Safety', spend: 8900, savings: 1100, percentage: 13, color: 'hsl(var(--secondary))' },
  { name: 'Paper Products', spend: 7400, savings: 950, percentage: 11, color: 'hsl(var(--healthcare-mint))' },
  { name: 'Ink & Cartridges', spend: 5200, savings: 900, percentage: 10, color: 'hsl(var(--healthcare-sage))' },
  { name: 'Breakroom', spend: 3600, savings: 700, percentage: 8, color: 'hsl(var(--accent))' },
  { name: 'Medical Supplies', spend: 2800, savings: 650, percentage: 8, color: '#495057' },
  { name: 'Office Supplies', spend: 2300, savings: 600, percentage: 7, color: 'hsl(var(--border))' },
  { name: 'Technology', spend: 2100, savings: 500, percentage: 6, color: '#8ecae6' },
  { name: 'Furniture', spend: 1800, savings: 450, percentage: 5, color: '#219ebc' },
  { name: 'Shipping Supplies', spend: 1500, savings: 400, percentage: 5, color: '#023047' },
  { name: 'Maintenance', spend: 1200, savings: 350, percentage: 4, color: '#ffb703' },
  { name: 'Reception', spend: 1000, savings: 300, percentage: 3, color: '#fb8500' },
  { name: 'Marketing Materials', spend: 900, savings: 300, percentage: 3, color: '#adb5bd' },
];

// Total savings: 8600, percentages sum to 99 (rounding), adjust as needed// Total savings: 8600, percentages sum to 99 (rounding), adjust as needed