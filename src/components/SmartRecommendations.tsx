import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, DollarSign, Star } from "lucide-react";

const recommendations = [
  {
    currentProduct: "Brand Name Hand Sanitizer",
    quillAlternative: "Quill Brand Professional Hand Sanitizer",
    currentSpend: 2800,
    newPrice: 2100,
    savings: 700,
    savingsPercent: 25,
    category: "Safety",
    benefit: "EPA approved with same active ingredients",
    image: "🧴"
  },
  {
    currentProduct: "Premium Nitrile Gloves",
    quillAlternative: "Quill Select Nitrile Gloves",
    currentSpend: 2400,
    newPrice: 1920,
    savings: 480,
    savingsPercent: 20,
    category: "Safety",
    benefit: "Powder-free, latex-free with same protection",
    image: "🧤"
  },
  {
    currentProduct: "Brand Name Disinfecting Wipes",
    quillAlternative: "Quill Professional Disinfecting Wipes",
    currentSpend: 1900,
    newPrice: 1520,
    savings: 380,
    savingsPercent: 20,
    category: "Cleaning",
    benefit: "Kills 99.9% of viruses and bacteria",
    image: "🧽"
  },
  {
    currentProduct: "Premium Copy Paper",
    quillAlternative: "Quill Brand Multipurpose Paper",
    currentSpend: 1200,
    newPrice: 960,
    savings: 240,
    savingsPercent: 20,
    category: "Paper",
    benefit: "Same brightness and quality for all printing needs",
    image: "📄"
  }
];

export const SmartRecommendations = () => {
  return (
    <div className="space-y-4">
      {recommendations.map((rec, index) => (
        <Card key={index} className="border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                  {/* Current Product */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{rec.image}</span>
                      <h4 className="font-semibold text-sm text-muted-foreground">Current Purchase</h4>
                    </div>
                    <p className="font-semibold">{rec.currentProduct}</p>
                    <p className="text-sm text-muted-foreground">${rec.currentSpend}/month</p>
                  </div>

                  {/* Arrow and Savings */}
                  <div className="flex flex-col items-center justify-center text-center">
                    <ArrowRight className="h-6 w-6 text-primary mb-2" />
                    <Badge className="bg-green-100 text-green-800 gap-1">
                      <DollarSign className="h-3 w-3" />
                      Save {rec.savingsPercent}%
                    </Badge>
                    <p className="text-sm font-semibold text-green-600 mt-1">
                      ${rec.savings}/month
                    </p>
                  </div>

                  {/* Quill Alternative */}
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Quill Alternative</h4>
                    <p className="font-semibold">{rec.quillAlternative}</p>
                    <p className="text-sm text-muted-foreground">${rec.newPrice}/month</p>
                    <Badge variant="secondary" className="mt-1 bg-healthcare-mint text-jet">
                      <Star className="h-3 w-3 mr-1" />
                      Quality Guaranteed
                    </Badge>
                  </div>
                </div>

                {/* Product Benefit */}
                <div className="mt-4 p-3 bg-healthcare-mint/20 rounded-md">
                  <p className="text-sm"><strong>Quality Benefit:</strong> {rec.benefit}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="ml-6 flex flex-col gap-2">
                <Button size="sm" className="gap-1">
                  Compare Details
                </Button>
                <Button size="sm" variant="secondary" className="gap-1">
                  Subscribe & Save
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-primary">Total Potential Monthly Savings</h4>
            <p className="text-2xl font-bold text-green-600">$1,800</p>
            <p className="text-sm text-muted-foreground">$21,600 annually with these switches</p>
          </div>
          <Button className="gap-2">
            Switch All Recommended
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};