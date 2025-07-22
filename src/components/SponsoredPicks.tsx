import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star, Shield, Award, ArrowRight } from "lucide-react";

const sponsoredProducts = [
  {
    product: "EcoPro Hospital-Grade Disinfectant Wipes",
    category: "Jan/San",
    vendor: "GreenClean Solutions",
    sponsoredNote: "Trusted by 200+ healthcare facilities",
    price: "$89.99/case",
    features: ["EPA List N approved", "Alcohol-free formula", "Safe for medical equipment"],
    healthcareFeature: "Non-corrosive on sensitive medical devices",
    badgeType: "trusted"
  },
  {
    product: "MedSafe Nitrile Exam Gloves - Powder Free",
    category: "PPE & Safety",
    vendor: "MedSafe Industries",
    sponsoredNote: "FDA 510(k) cleared for medical use",
    price: "$124.99/case",
    features: ["Textured fingertips", "Latex-free", "Chemotherapy tested"],
    healthcareFeature: "Chemotherapy drug tested for oncology safety",
    badgeType: "fda"
  },
  {
    product: "BioShield N95 Respirator Masks",
    category: "PPE & Safety",
    vendor: "BioShield Medical",
    sponsoredNote: "NIOSH approved, preferred by ICU staff",
    price: "$156.99/box",
    features: ["NIOSH N95 certified", "Fluid resistant", "Comfortable seal"],
    healthcareFeature: "Tested for extended wear in ICU environments",
    badgeType: "certified"
  },
  {
    product: "AquaPure Hand Sanitizer Gel - 70% Alcohol",
    category: "PPE & Safety",
    vendor: "AquaPure Health",
    sponsoredNote: "WHO formula compliant, dermatologist tested",
    price: "$45.99/gallon",
    features: ["WHO formula", "Moisturizing aloe", "Fragrance-free"],
    healthcareFeature: "Gentle formula for frequent use by healthcare workers",
    badgeType: "who"
  }
];

const getBadgeIcon = (type: string) => {
  switch(type) {
    case "fda": return <Shield className="h-3 w-3" />;
    case "certified": return <Award className="h-3 w-3" />;
    case "who": return <Star className="h-3 w-3" />;
    default: return <Star className="h-3 w-3" />;
  }
};

export const SponsoredPicks = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {sponsoredProducts.map((product, index) => (
          <Card key={index} className="border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <Badge variant="outline" className="bg-primary text-primary-foreground gap-1">
                  {getBadgeIcon(product.badgeType)}
                  Sponsored
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
              </div>

              <h4 className="font-bold text-lg mb-2">{product.product}</h4>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Vendor:</span>
                  <span className="text-sm font-semibold">{product.vendor}</span>
                </div>
                
                <div className="text-primary font-bold text-lg">{product.price}</div>
                
                <div className="bg-healthcare-mint/20 p-2 rounded text-xs border-l-2 border-healthcare-mint">
                  <strong>Healthcare Focus:</strong> {product.healthcareFeature}
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
                  Request Sample
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
        <div className="text-center">
          <h4 className="font-bold text-lg mb-2">Healthcare Supply Optimization Program</h4>
          <p className="text-muted-foreground mb-4">
            Get personalized recommendations and exclusive healthcare pricing from our verified vendor network
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="gap-2">
              Join Program
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};