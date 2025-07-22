import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star, Shield, Award, ArrowRight } from "lucide-react";

const rewardsProducts = [
  {
    product: "Quill Elite Multi-Surface Cleaner",
    category: "Cleaning",
    vendor: "Quill Corporation",
    sponsoredNote: "Exclusive Rewards+ member pricing - 20% off regular price",
    price: "$67.99/case",
    features: ["All-purpose formula", "Streak-free finish", "Pleasant scent"],
    rewardsFeature: "Earn 2x points on all cleaning supply purchases",
    badgeType: "rewards",
    image: "🧽"
  },
  {
    product: "Quill Professional Paper Towels",
    category: "Paper Products",
    vendor: "Quill Corporation",
    sponsoredNote: "Rewards+ exclusive - Premium quality at member prices",
    price: "$89.99/case",
    features: ["2-ply absorbent", "Perforated sheets", "Bulk packaging"],
    rewardsFeature: "Free shipping on orders over $50",
    badgeType: "rewards",
    image: "🧻"
  },
  {
    product: "Quill Select Office Chair",
    category: "Furniture",
    vendor: "Quill Corporation",
    sponsoredNote: "Member exclusive - Ergonomic design with extended warranty",
    price: "$299.99/each",
    features: ["Ergonomic support", "Adjustable height", "5-year warranty"],
    rewardsFeature: "Extended warranty and priority customer service",
    badgeType: "rewards",
    image: "🪑"
  },
  {
    product: "Quill Premium Ink Cartridges",
    category: "Ink & Toner",
    vendor: "Quill Corporation",
    sponsoredNote: "Rewards+ pricing - Same quality, better value",
    price: "$34.99/cartridge",
    features: ["High-yield capacity", "Fade-resistant", "Compatible guarantee"],
    rewardsFeature: "Automatic reorder discounts available",
    badgeType: "rewards",
    image: "🖨️"
  }
];

const getBadgeIcon = (type: string) => {
  switch(type) {
    case "rewards": return <Star className="h-3 w-3" />;
    default: return <Star className="h-3 w-3" />;
  }
};

export const SponsoredPicks = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {rewardsProducts.map((product, index) => (
          <Card key={index} className="border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <Badge variant="outline" className="bg-primary text-primary-foreground gap-1">
                  {getBadgeIcon(product.badgeType)}
                  Rewards+ Exclusive
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{product.image}</span>
                <h4 className="font-bold text-lg">{product.product}</h4>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Vendor:</span>
                  <span className="text-sm font-semibold">{product.vendor}</span>
                </div>
                
                <div className="text-primary font-bold text-lg">{product.price}</div>
                
                <div className="bg-healthcare-mint/20 p-2 rounded text-xs border-l-2 border-healthcare-mint">
                  <strong>Rewards+ Benefit:</strong> {product.rewardsFeature}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Key Features:</p>
                <ul className="text-xs space-y-1">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/10 p-3 rounded-md mb-4">
                <p className="text-sm font-medium text-primary">"{product.sponsoredNote}"</p>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1 gap-1">
                  <ExternalLink className="h-3 w-3" />
                  Shop Now
                </Button>
                <Button size="sm" variant="outline">
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
        <div className="text-center">
          <h4 className="font-bold text-lg mb-4">FAQ & Support</h4>
          <div className="text-left max-w-2xl mx-auto space-y-4">
            <div>
              <h5 className="font-semibold mb-1">How do I opt in/out?</h5>
              <p className="text-sm text-muted-foreground">Visit your account settings to manage email preferences and report frequency.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-1">How are recommendations made?</h5>
              <p className="text-sm text-muted-foreground">Our AI analyzes your purchase history to suggest cost-effective alternatives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};