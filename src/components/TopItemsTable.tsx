import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ShoppingCart, Package, Percent } from "lucide-react";

const bulkItems = [
  {
    item: "Copy Paper (20 lb, Letter Size)",
    category: "Paper",
    regularPrice: 45,
    bulkPrice: 38,
    bulkQuantity: "10+ cases",
    savings: 15,
    image: "📄"
  },
  {
    item: "Black Ink Cartridges",
    category: "Ink & Toner", 
    regularPrice: 89,
    bulkPrice: 72,
    bulkQuantity: "5+ cartridges",
    savings: 19,
    image: "🖨️"
  },
  {
    item: "Disinfecting Wipes",
    category: "Cleaning",
    regularPrice: 24,
    bulkPrice: 20,
    bulkQuantity: "12+ containers",
    savings: 17,
    image: "🧽"
  },
  {
    item: "Hand Sanitizer (8 oz)",
    category: "Safety",
    regularPrice: 12,
    bulkPrice: 9,
    bulkQuantity: "24+ bottles",
    savings: 25,
    image: "🧴"
  },
  {
    item: "File Folders (Letter Size)",
    category: "Office Supplies",
    regularPrice: 28,
    bulkPrice: 24,
    bulkQuantity: "5+ boxes",
    savings: 14,
    image: "📁"
  }
];

export const TopItemsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Regular Price</TableHead>
          <TableHead>Bulk Price</TableHead>
          <TableHead>Bulk Minimum</TableHead>
          <TableHead>Savings</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bulkItems.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.image}</span>
                <div>
                  <span className="font-medium">{item.item}</span>
                  <div className="text-sm text-muted-foreground">{item.category}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-semibold">
              ${item.regularPrice}
            </TableCell>
            <TableCell className="font-semibold text-green-600">
              ${item.bulkPrice}
            </TableCell>
            <TableCell>{item.bulkQuantity}</TableCell>
            <TableCell>
              <Badge className="bg-green-100 text-green-800 gap-1">
                <Percent className="h-3 w-3" />
                {item.savings}% off
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="sm" className="gap-1">
                  <ShoppingCart className="h-3 w-3" />
                  Order Bulk
                </Button>
                <Button size="sm" variant="outline">
                  Add to Cart
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};