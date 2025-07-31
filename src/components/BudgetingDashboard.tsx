import React, { useState, useRef } from "react";
import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Gift } from "lucide-react";
import { Calendar, Download, Mail, Target, ShoppingCart, DollarSign, Package, TrendingDown, TrendingUp } from "lucide-react";
import { CategorySpendChart } from "./CategorySpendChart";
import { TopItemsTable } from "./TopItemsTable";
import { SmartRecommendations } from "./SmartRecommendations";
import { SponsoredPicks } from "./SponsoredPicks";
import { TopPurchasedItems } from "./TopPurchasedItems";
import { exportToPdf } from '@/lib/export';
import { bulkItems, rewardsProducts, categoryData, items, sponsoredItems } from "@/data/mockData";

const BudgetingDashboard = () => {
  // Mock data for display
  const summaryData = {
    totalSpend: 45800,
    previousSpend: 51200,
    orders: 127,
    avgOrderValue: 360,
    categoriesCount: 13,
    estimatedSavings: 8600,
    estimatedMissedSavings: 5320,
    rewardsPoints: 12300
  };

  // Complete export data object with all required properties
  const exportData = {
    summary: [
      { metric: 'Monthly Spend', value: `$${summaryData.totalSpend.toLocaleString()}` },
      { metric: 'Previous Spend', value: `$${summaryData.previousSpend.toLocaleString()}` },
      { metric: 'Orders Placed', value: summaryData.orders },
      { metric: 'Average Order Value', value: `$${summaryData.avgOrderValue}` },
      { metric: 'Categories Purchased', value: summaryData.categoriesCount },
      { metric: 'Total Dollars Saved', value: `$${summaryData.estimatedSavings.toLocaleString()}` },
      { metric: 'Total Dollars Missed', value: `$${summaryData.estimatedMissedSavings.toLocaleString()}` },
      { metric: 'Rewards+ Points', value: `${summaryData.rewardsPoints.toLocaleString()}` }
    ],
    categorySpend: categoryData.map(category => ({
      Category: category.name,
      Spend: `$${category.spend.toLocaleString()}`,
      Savings: `$${category.savings.toLocaleString()}`,
      Percentage: `${category.percentage}%`,
    })),
    topPurchasedItems: items.slice(0, 8).map(item => ({
      Name: item.name,
      Category: item.category,
      Source: item.source,
    })),
    budgetSavvyPicks: sponsoredItems.map(item => ({
      Product: item.product,
      Category: item.category,
      Price: item.price,
      'Savings Note': item.sponsoredNote,
    })),
    bulkItems: bulkItems.map(item => ({
      Item: item.item,
      Category: item.category,
      'Regular Price': `$${item.regularPrice}`,
      'Bulk Price': `$${item.bulkPrice}`,
      'Bulk Quantity': item.bulkQuantity,
      'Savings (%)': `${item.savings}%`,
    })),
    sponsoredPicks: rewardsProducts.map(product => ({
      Product: product.product,
      Category: product.category,
      Vendor: product.vendor,
      Price: product.price,
      'Rewards Benefit': product.rewardsFeature,
    })),
  };

  const handleExport = (fileType: 'PDF' | 'XLSX') => {
    if (fileType === 'PDF') {
      exportToPdf(exportData, 'Budget Report');
    } else {
      // Download pre-made Excel file
      const link = document.createElement('a');
      link.href = '/budgetReport(xlsx).xlsx';
      link.setAttribute('download', 'budgetReport.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [period, setPeriod] = useState("Monthly");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar trigger */}
      <button
        className="fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <DashboardHeader
        handleExport={handleExport}
        dropdownRef={dropdownRef}
        open={open}
        setOpen={setOpen}
        period={period}
        setPeriod={setPeriod}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Smart Overview Title */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#000" }}>Smart Overview</h2>

        {/* Summary Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spend This Month</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${summaryData.totalSpend.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                vs. ${summaryData.previousSpend.toLocaleString()} last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders Placed</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summaryData.orders}</div>
              <p className="text-xs text-muted-foreground">
                Avg: ${summaryData.avgOrderValue} per order
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Categories Purchased</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summaryData.categoriesCount}</div>
              <p className="text-xs text-muted-foreground">
                Focus on Jan/San & PPE
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Dollars Saved</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${summaryData.estimatedSavings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                With smart recommendations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Dollars Missed</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">${summaryData.estimatedMissedSavings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Without smart recommendations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rewards+ Points</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#2B58F1]">{summaryData.rewardsPoints.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Ready to be used for savings
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-montserrat">Spend by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <CategorySpendChart />
          </CardContent>
        </Card>

        {/* Top Purchased Items */}
        <TopPurchasedItems />

        {/* Bulk Purchase Opportunities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-montserrat">Bulk Purchase Opportunities</CardTitle>
            <p className="text-muted-foreground">
              Save more by purchasing your frequently ordered items in bulk
            </p>
          </CardHeader>
          <CardContent>
            <TopItemsTable />
          </CardContent>
        </Card>

        {/* Smart Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-montserrat text-primary">Quill Budget-Savvy Picks</CardTitle>
            <p className="text-muted-foreground">
              Cost-effective alternatives that can reduce your costs
            </p>
          </CardHeader>
          <CardContent>
            <SmartRecommendations />
          </CardContent>
        </Card>

        {/* Quill Rewards+ Member Solutions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-montserrat">Quill Rewards+ Member Solutions</CardTitle>
            <p className="text-muted-foreground">
              Exclusive pricing and products for Quill Rewards+ members
            </p>
          </CardHeader>
          <CardContent>
            <SponsoredPicks />
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default BudgetingDashboard;