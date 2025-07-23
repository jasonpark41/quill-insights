import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Mail, Target, ShoppingCart, DollarSign, Package, TrendingDown, TrendingUp } from "lucide-react";
import { SpendTrendChart } from "./SpendTrendChart";
import { CategorySpendChart } from "./CategorySpendChart";
import { TopItemsTable } from "./TopItemsTable";
import { SmartRecommendations } from "./SmartRecommendations";
import { SponsoredPicks } from "./SponsoredPicks";

const BudgetingDashboard = () => {
  // Mock data for healthcare business
  const summaryData = {
    totalSpend: 45800,
    previousSpend: 51200,
    orders: 127,
    avgOrderValue: 360,
    categoriesCount: 8,
    estimatedSavings: 3200,
    rewardsRedeemed: 850
  };

  const changePercent = ((summaryData.totalSpend - summaryData.previousSpend) / summaryData.previousSpend * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold font-montserrat mb-2">Smart Budgeting Dashboard</h1>
              <p className="text-primary-foreground/90 text-lg">
                Track your facility spending, discover savings, and optimize your supply budget
              </p>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary" className="bg-healthcare-mint text-jet">
                  January 2025
                </Badge>
                <Badge variant="secondary" className="bg-healthcare-mint text-jet">
                  Monthly Report
                </Badge>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="gap-2">
                <Download className="h-4 w-4" />
                Export PDF
              </Button>
              <Button variant="secondary" className="gap-2">
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
              <Button variant="secondary" className="gap-2">
                <Calendar className="h-4 w-4" />
                Change Period
              </Button>
              <Button variant="secondary" className="gap-2">
                <Mail className="h-4 w-4" />
                Email Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Summary Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spend This Month</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${summaryData.totalSpend.toLocaleString()}</div>
              <div className="flex items-center text-sm">
                {changePercent < 0 ? (
                  <>
                    <TrendingDown className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-green-600">{Math.abs(changePercent).toFixed(1)}% decrease</span>
                  </>
                ) : (
                  <>
                    <TrendingUp className="h-4 w-4 text-red-600 mr-1" />
                    <span className="text-red-600">{changePercent.toFixed(1)}% increase</span>
                  </>
                )}
              </div>
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
              <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${summaryData.estimatedSavings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                With smart recommendations
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
            <CardTitle className="font-montserrat text-primary">Smart Budget-Savvy Picks</CardTitle>
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