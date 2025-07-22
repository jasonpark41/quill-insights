import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, ShoppingCart } from "lucide-react";

const topItems = [
  {
    product: "Purell Advanced Hand Sanitizer",
    category: "PPE & Safety",
    spend: 2800,
    frequency: "Weekly",
    trend: "up",
    healthcare: true
  },
  {
    product: "Nitrile Examination Gloves",
    category: "PPE & Safety", 
    spend: 2400,
    frequency: "Bi-weekly",
    trend: "stable",
    healthcare: true
  },
  {
    product: "Disinfecting Wipes",
    category: "Jan/San",
    spend: 1900,
    frequency: "Weekly",
    trend: "up",
    healthcare: true
  },
  {
    product: "Copy Paper - Multipurpose",
    category: "Paper",
    spend: 1200,
    frequency: "Monthly",
    trend: "down",
    healthcare: false
  },
  {
    product: "Facial Tissues",
    category: "Jan/San",
    spend: 890,
    frequency: "Bi-weekly",
    trend: "stable",
    healthcare: false
  }
];

export const TopItemsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-2 font-semibold">Product</th>
            <th className="text-left py-3 px-2 font-semibold">Category</th>
            <th className="text-right py-3 px-2 font-semibold">Monthly Spend</th>
            <th className="text-center py-3 px-2 font-semibold">Frequency</th>
            <th className="text-center py-3 px-2 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {topItems.map((item, index) => (
            <tr key={index} className="border-b border-border/50 hover:bg-muted/30">
              <td className="py-4 px-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{item.product}</span>
                  {item.healthcare && (
                    <Badge variant="secondary" className="bg-healthcare-mint text-jet text-xs">
                      Healthcare Priority
                    </Badge>
                  )}
                </div>
              </td>
              <td className="py-4 px-2 text-muted-foreground">{item.category}</td>
              <td className="py-4 px-2 text-right font-semibold">${item.spend.toLocaleString()}</td>
              <td className="py-4 px-2 text-center">
                <Badge variant="outline">{item.frequency}</Badge>
              </td>
              <td className="py-4 px-2">
                <div className="flex gap-2 justify-center">
                  <Button size="sm" variant="outline" className="gap-1">
                    <RefreshCw className="h-3 w-3" />
                    Reorder
                  </Button>
                  <Button size="sm" variant="outline" className="gap-1">
                    <ShoppingCart className="h-3 w-3" />
                    Subscribe
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};