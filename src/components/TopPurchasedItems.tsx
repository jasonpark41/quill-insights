import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TopPurchasedItemsProps {
	data: any[];
}

// Add a mapping for images based on product names
const getProductImage = (productName: string) => {
	if (productName.toLowerCase().includes("paper")) return "/images/paper.png";
	if (productName.toLowerCase().includes("ink") || productName.toLowerCase().includes("cartridge"))
		return "/images/ink.png";
	if (productName.toLowerCase().includes("wipes") || productName.toLowerCase().includes("disinfecting"))
		return "/images/wipes.png";
	if (productName.toLowerCase().includes("file") || productName.toLowerCase().includes("folder"))
		return "/images/folders.png";
	if (productName.toLowerCase().includes("sanitizer") || productName.toLowerCase().includes("purell"))
		return "/images/sanitizer.png";
	if (productName.toLowerCase().includes("gloves") || productName.toLowerCase().includes("ammex"))
		return "/images/gloves.png";
	if (productName.toLowerCase().includes("soap") || productName.toLowerCase().includes("coastwide"))
		return "/images/soap.png";
	if (productName.toLowerCase().includes("advil") || productName.toLowerCase().includes("pain"))
		return "/images/advil.png";

	// Default fallback
	return "/images/default-product.png";
};

export const TopPurchasedItems = ({ data }: TopPurchasedItemsProps) => (
	<Card className="mb-8">
		<CardHeader>
			<CardTitle className="font-montserrat">Top Purchased Items</CardTitle>
		</CardHeader>
		<CardContent>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{data.slice(0, 8).map((item, idx) => (
					<li
						key={idx}
						className="flex items-center gap-4 bg-background rounded-lg p-3 border"
					>
						<div className="w-14 h-14 rounded flex items-center justify-center overflow-hidden">
							<img
								src={getProductImage(item.name)}
								alt={item.name}
								className="w-full h-full object-contain mix-blend-darken"
								onError={(e) => {
									// Fallback if image fails to load
									e.currentTarget.style.display = "none";
									e.currentTarget.parentElement!.innerHTML = '<span class="text-xs text-gray-500">IMG</span>';
								}}
							/>
						</div>
						<div>
							<div className="font-semibold text-sm">{item.name}</div>
							<div className="text-xs text-muted-foreground">{item.category}</div>
							<div className="text-xs text-primary flex items-center gap-1">
								<Star className="w-3 h-3 text-yellow-400" />
								{item.source}
							</div>
						</div>
					</li>
				))}
			</ul>
		</CardContent>
	</Card>
);