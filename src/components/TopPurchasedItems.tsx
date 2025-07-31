import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bulkItems, rewardsProducts } from "@/data/mockData";
import { Star } from "lucide-react";
import { SmartRecommendations } from "./SmartRecommendations";
import { recommendations } from "./SmartRecommendations";

const items = [
	...bulkItems.map((item) => ({
		name: item.item,
		image: item.image,
		category: item.category,
		source: "Bulk Opportunity",
	})),
	...rewardsProducts.map((item) => ({
		name: item.product,
		image: item.image,
		category: item.category,
		source: "Rewards+",
	})),
	...recommendations.map((item) => ({
		name: item.quillAlternative,
		image: item.quillImage,
		category: item.category,
		source: "Budget Savvy Pick",
	})),
];

const top8 = items.slice(0, 8);

export const TopPurchasedItems = () => (
	<Card className="mb-8">
		<CardHeader>
			<CardTitle className="font-montserrat">Top Purchased Items</CardTitle>
		</CardHeader>
		<CardContent>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{top8.map((item, idx) => (
					<li
						key={idx}
						className="flex items-center gap-4 bg-background rounded-lg p-3 border"
					>
						<img
							src={item.image}
							alt={item.name}
							className="w-14 h-14 object-contain rounded mix-blend-multiply"
						/>
						<div>
							<div className="font-semibold">{item.name}</div>
							<div className="text-xs text-muted-foreground">
								{item.category}
							</div>
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