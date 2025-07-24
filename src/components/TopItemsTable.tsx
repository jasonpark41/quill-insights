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

export const TopItemsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Regular Price</TableHead>
          <TableHead>Bulk Price</TableHead>
          <TableHead>Bulk Requirement</TableHead>
          <TableHead>Savings</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bulkItems.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex items-center gap-3">
                {/* Render the image */}
                <img
                  src={item.image}
                  alt={item.item}
                  className="w-10 h-10 object-contain"
                />
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
              <Badge className="bg-green-100 text-green-800 inline-flex items-center text-md font-bold w-20 justify-center">
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