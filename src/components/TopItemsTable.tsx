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

import { bulkItems } from "@/data/mockData";

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
                  className="w-10 h-10 object-contain mix-blend-multiply"
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