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

const BudgetingDashboard = () => {
  // All data is now contained within this component - no external dependencies
  const summaryData = {
    totalSpend: 45800,
    previousSpend: 51200,
    orders: 127,
    avgOrderValue: 360,
    categoriesCount: 13,
    estimatedSavings: 2527,
    estimatedMissedSavings: 2250,
    rewardsPoints: 12300
  };

  // Category data for chart - now local to this component
  const categoryData = [
    { name: 'Jan/San Supplies', spend: 15600, savings: 1400, percentage: 16, color: 'hsl(var(--primary))' },
    { name: 'PPE & Safety', spend: 8900, savings: 1100, percentage: 13, color: 'hsl(var(--secondary))' },
    { name: 'Paper Products', spend: 7400, savings: 950, percentage: 11, color: 'hsl(var(--healthcare-mint))' },
    { name: 'Ink & Cartridges', spend: 5200, savings: 900, percentage: 10, color: 'hsl(var(--healthcare-sage))' },
    { name: 'Breakroom', spend: 3600, savings: 700, percentage: 8, color: 'hsl(var(--accent))' },
    { name: 'Medical Supplies', spend: 2800, savings: 650, percentage: 8, color: '#495057' },
    { name: 'Office Supplies', spend: 2300, savings: 600, percentage: 7, color: 'hsl(var(--border))' },
    { name: 'Technology', spend: 2100, savings: 500, percentage: 6, color: '#8ecae6' },
    { name: 'Furniture', spend: 1800, savings: 450, percentage: 5, color: '#219ebc' },
    { name: 'Shipping Supplies', spend: 1500, savings: 400, percentage: 5, color: '#023047' },
    { name: 'Maintenance', spend: 1200, savings: 350, percentage: 4, color: '#ffb703' },
    { name: 'Reception', spend: 1000, savings: 300, percentage: 3, color: '#fb8500' },
    { name: 'Marketing Materials', spend: 900, savings: 300, percentage: 3, color: '#adb5bd' }
  ];

  // Top purchased items data
  const topPurchasedItems = [
    { name: 'Hammermill Copy Plus 8.5" x 11" Copy Paper, 20 lbs', category: 'Copy & Printer Paper', source: 'Hammermill' },
    { name: 'Canon 275 XL Black High Yield Ink Cartridge', category: 'Ink & Toner', source: 'Canon' },
    { name: 'CloroxPro Disinfecting Wipes, Fresh Scent, 75 Wipes/Container', category: 'Disinfectant Wipes', source: 'Clorox' },
    { name: 'Quill Brand® File Folders, 1/3-Cut Assorted, Letter Size, Manila, 100/Box', category: 'File Folders', source: 'Quill Brand' },
    { name: 'PURELL Advanced Hand Sanitizer Refreshing Gel, Clean Scent, 1.5 Liter Pump Bottle', category: 'Bottled Hand Sanitizer', source: 'Purrell' },
    { name: 'Ammex Professional Series Powder Free Nitrile Exam Gloves, Latex Free, XL, Blue', category: 'Safety Supplies', source: 'Ammex' },
    { name: 'Coastwide Professional Antibacterial Liquid Hand Soap Refill, 1 Gal., 4/Carton', category: 'Hand Soap', source: 'Coastwide' },
    { name: 'Advil Ibuprofen Pain Reliever, 200mg, 2/Packet, 50 Packets/Box', category: 'Pain Relievers', source: 'Advil' }
  ];

  // Bulk items data
  const bulkItems = [
    { item: 'Hammermill Copy Plus 8.5" x 11" Copy Paper, 20 lbs', category: 'Copy & Printer Paper', regularPrice: 164.99, bulkPrice: 139.99, bulkQuantity: '20 cases', savings: 15, image: '/images/paper.png' },
    { item: 'Canon 275 XL Black High Yield Ink Cartridge', category: 'Ink & Toner', regularPrice: 369.99, bulkPrice: 319.99, bulkQuantity: '10 cartridges', savings: 13, image: '/images/ink.png' },
    { item: 'CloroxPro Disinfecting Wipes, Fresh Scent, 75 Wipes/Container', category: 'Disinfectant Wipes', regularPrice: 139.75, bulkPrice: 119.99, bulkQuantity: '25 containers', savings: 14, image: '/images/wipes.png' },
    { item: 'PURELL Advanced Hand Sanitizer Refreshing Gel, Clean Scent, 1.5 Liter Pump Bottle', category: 'Bottled Hand Sanitizer', regularPrice: 329.85, bulkPrice: 289.99, bulkQuantity: '15 bottles', savings: 12, image: '/images/sanitizer.png' },
    { item: 'Quill Brand® File Folders, 1/3-Cut Assorted, Letter Size, Manila, 100/Box (740137)', category: 'File Folders', regularPrice: 169.90, bulkPrice: 149.99, bulkQuantity: '10 boxes', savings: 12, image: '/images/folders.png' }
  ];

  // Budget-savvy picks data
  const budgetSavvyPicks = [
    { product: 'PURELL Prime Defense Advanced 85% Alcohol Gel Hand Sanitizer', category: 'Bottled Hand Sanitizer', price: '$900', sponsoredNote: 'Save $300 monthly vs brand pricing' },
    { product: 'Softsoap Liquid Hand Soap, Soothing Clean Scent', category: 'Hand Soap', price: '$2,100', sponsoredNote: 'Save $400 monthly vs brand pricing' },
    { product: 'CloroxPro Disinfecting Wipes, Fresh Scent, 75 Wipes/Container', category: 'Disinfectant Wipes', price: '$1,520', sponsoredNote: 'Save $380 monthly vs brand pricing' },
    { product: 'Sharpie Permanent Marker, Fine Tip, Black, 12/Pack', category: 'Permanent Markers', price: '$1,000', sponsoredNote: 'Save $200 monthly vs brand pricing' }
  ];

  // Rewards products data
  const rewardsProducts = [
    { 
      product: 'Ammex Professional Series Powder Free Nitrile Exam Gloves, Latex Free, XL, Blue', 
      category: 'Safety Supplies', 
      vendor: 'Ammex', 
      price: '$79.89', 
      rewardsFeature: 'Earn 2x points on safety supplies purchases', 
      image: '/images/gloves.png',
      description: 'Powder-free gloves are great where residue is an issue. Latex-free to reduce risks of allergic reactions. Textured/micro-roughened surface delivers a dependable grip for working with tools.'
    },
    { 
      product: 'Coastwide Professional Antibacterial Liquid Hand Soap Refill, 1 Gal., 4/Carton', 
      category: 'Hand Soap', 
      vendor: 'Coastwide Professional', 
      price: '$63.99', 
      rewardsFeature: 'Free shipping on orders over $50', 
      image: '/images/soap.png',
      description: 'Liquid hand soap refill that is mild to the skin. 1 gal refill bottle, four bottles per carton. Contains chloroxylenol (PCMX), a broad-spectrum antimicrobial agent.'
    },
    { 
      product: 'Advil Ibuprofen Pain Reliever, 200mg, 2/Packet, 50 Packets/Box', 
      category: 'Pain Relievers', 
      vendor: 'Advil', 
      price: '$18.56', 
      rewardsFeature: 'Earn 1 point for every dollar spent on health products', 
      image: '/images/advil.png',
      description: 'Advil ibuprofen pain reliever provides powerful relief. Coated Advil tablets are easy to swallow pain relievers, providing relief that lasts for up to 6 hours. 50x2 packets of Advil Pain Reliever and Fever Reducer coated tablets, with ibuprofen 200mg for pain relief.'
    },
    { 
      product: 'WeCare KN95 Disposable Face Mask, Adult, Black, 20 Masks/Box, 3 Boxes/Pack', 
      category: 'Face Masks', 
      vendor: 'WeCare', 
      price: '$69.99', 
      rewardsFeature: 'Automatic reorder discounts available', 
      image: '/images/masks.png',
      description: 'Disposable face mask for personal protection. Adjustable ear loops are designed for ear comfort. Cone shape keeps the mask off your face and increases comfort and breathability.'
    }
  ];

  // Export data for PDF - matches your Excel structure exactly
  const exportData = {
    summary: [
      { metric: 'Monthly Spend', value: '$45,800' },
      { metric: 'Previous Spend', value: '$51,200' },
      { metric: 'Orders Placed', value: '127' },
      { metric: 'Average Order Value', value: '$360' },
      { metric: 'Categories Purchased', value: '13' },
      { metric: 'Total Dollars Saved', value: '$2,527' },
      { metric: 'Additional Savings Available', value: '$2,250' },
      { metric: 'Rewards+ Points', value: '12,300' }
    ],
    categorySpend: [
      { Category: 'Jan/San Supplies', Spend: '$15,600', Savings: '$1,400' },
      { Category: 'PPE & Safety', Spend: '$8,900', Savings: '$1,100' },
      { Category: 'Paper Products', Spend: '$7,400', Savings: '$950' },
      { Category: 'Ink & Cartridges', Spend: '$5,200', Savings: '$900' },
      { Category: 'Breakroom', Spend: '$3,600', Savings: '$700' },
      { Category: 'Medical Supplies', Spend: '$2,800', Savings: '$650' },
      { Category: 'Office Supplies', Spend: '$2,300', Savings: '$600' },
      { Category: 'Technology', Spend: '$2,100', Savings: '$500' },
      { Category: 'Furniture', Spend: '$1,800', Savings: '$450' },
      { Category: 'Shipping Supplies', Spend: '$1,500', Savings: '$400' },
      { Category: 'Maintenance', Spend: '$1,200', Savings: '$350' },
      { Category: 'Reception', Spend: '$1,000', Savings: '$300' },
      { Category: 'Marketing Materials', Spend: '$900', Savings: '$300' }
    ],
    topPurchasedItems: [
      { Name: 'Hammermill Copy Plus 8.5" x 11" Copy Paper, 20 lbs', Category: 'Copy & Printer Paper', Vendor: 'Hammermill' },
      { Name: 'Canon 275 XL Black High Yield Ink Cartridge', Category: 'Ink & Toner', Vendor: 'Canon' },
      { Name: 'CloroxPro Disinfecting Wipes, Fresh Scent, 75 Wipes/Container', Category: 'Disinfectant Wipes', Vendor: 'Clorox' },
      { Name: 'Quill Brand® File Folders, 1/3-Cut Assorted, Letter Size, Manila, 100/Box', Category: 'File Folders', Vendor: 'Quill Brand' },
      { Name: 'PURELL Advanced Hand Sanitizer Refreshing Gel, Clean Scent, 1.5 Liter Pump Bottle', Category: 'Bottled Hand Sanitizer', Vendor: 'Purrell' },
      { Name: 'Ammex Professional Series Powder Free Nitrile Exam Gloves, Latex Free, XL, Blue', Category: 'Safety Supplies', Vendor: 'Ammex' },
      { Name: 'Coastwide Professional Antibacterial Liquid Hand Soap Refill, 1 Gal., 4/Carton', Category: 'Hand Soap', Vendor: 'Coastwide' },
      { Name: 'Advil Ibuprofen Pain Reliever, 200mg, 2/Packet, 50 Packets/Box', Category: 'Pain Relievers', Vendor: 'Advil' }
    ],
    budgetSavvyPicks: [
      { Product: 'PURELL Prime Defense Advanced 85% Alcohol Gel Hand Sanitizer', Category: 'Bottled Hand Sanitizer', 'Brand Price Per Month': '$1,200.00', 'Quill Price Per Month': '$900', 'Savings Per Month': '$300' },
      { Product: 'Softsoap Liquid Hand Soap, Soothing Clean Scent', Category: 'Hand Soap', 'Brand Price Per Month': '$2,500.00', 'Quill Price Per Month': '$2,100', 'Savings Per Month': '$400' },
      { Product: 'CloroxPro Disinfecting Wipes, Fresh Scent, 75 Wipes/Container', Category: 'Disinfectant Wipes', 'Brand Price Per Month': '$1,900.00', 'Quill Price Per Month': '$1,520', 'Savings Per Month': '$380' },
      { Product: 'Sharpie Permanent Marker, Fine Tip, Black, 12/Pack', Category: 'Permanent Markers', 'Brand Price Per Month': '$1,200.00', 'Quill Price Per Month': '$1,000', 'Savings Per Month': '$200' }
    ],
    bulkItems: [
      { Item: 'Hammermill Copy Plus 8.5" x 11" Copy Paper, 20 lbs', Category: 'Copy & Printer Paper', 'Regular Price': '$164.99', 'Bulk Price': '$139.99', 'Bulk Quantity': '20 cases', 'Savings (%)': '15%' },
      { Item: 'Canon 275 XL Black High Yield Ink Cartridge', Category: 'Ink & Toner', 'Regular Price': '$369.99', 'Bulk Price': '$319.99', 'Bulk Quantity': '10 cartridges', 'Savings (%)': '13%' },
      { Item: 'CloroxPro Disinfecting Wipes, Fresh Scent, 75 Wipes/Container', Category: 'Disinfectant Wipes', 'Regular Price': '$139.75', 'Bulk Price': '$119.99', 'Bulk Quantity': '25 containers', 'Savings (%)': '14%' },
      { Item: 'PURELL Advanced Hand Sanitizer Refreshing Gel, Clean Scent, 1.5 Liter Pump Bottle', Category: 'Bottled Hand Sanitizer', 'Regular Price': '$329.85', 'Bulk Price': '$289.99', 'Bulk Quantity': '15 bottles', 'Savings (%)': '12%' },
      { Item: 'Quill Brand® File Folders, 1/3-Cut Assorted, Letter Size, Manila, 100/Box (740137)', Category: 'File Folders', 'Regular Price': '$169.90', 'Bulk Price': '$149.99', 'Bulk Quantity': '10 boxes', 'Savings (%)': '12%' }
    ],
    sponsoredPicks: [
      { Product: 'Ammex Professional Series Powder Free Nitrile Exam Gloves, Latex Free, XL, Blue', Category: 'Safety Supplies', Vendor: 'Ammex', Price: '$79.89', 'Rewards Benefit': 'Earn 2x points on safety supplies purchases' },
      { Product: 'Coastwide Professional Antibacterial Liquid Hand Soap Refill, 1 Gal., 4/Carton', Category: 'Hand Soap', Vendor: 'Coastwide Professional', Price: '$63.99', 'Rewards Benefit': 'Free shipping on orders over $50' },
      { Product: 'Advil Ibuprofen Pain Reliever, 200mg, 2/Packet, 50 Packets/Box', Category: 'Pain Relievers', Vendor: 'Advil', Price: '$18.56', 'Rewards Benefit': 'Earn 1 point for every dollar spent on health products' },
      { Product: 'WeCare KN95 Disposable Face Mask, Adult, Black, 20 Masks/Box, 3 Boxes/Pack', Category: 'Face Masks', Vendor: 'WeCare', Price: '$69.99', 'Rewards Benefit': 'Automatic reorder discounts available' }
    ]
  };

  const handleExport = (fileType: 'pdf' | 'excel') => {
    if (fileType === 'pdf') {
      exportToPdf(exportData, 'Budget Report');
    } else if (fileType === 'excel') {  
      const link = document.createElement('a');
      link.href = '/budgetReport.xlsx';
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
                Top Category: Jan/San Supplies
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
              <CardTitle className="text-sm font-medium">Additional Savings Available</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${summaryData.estimatedMissedSavings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                With smart recommendations
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
            <CategorySpendChart data={categoryData} />
          </CardContent>
        </Card>

        {/* Top Purchased Items */}
        <TopPurchasedItems data={topPurchasedItems} />

        {/* Bulk Purchase Opportunities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-montserrat">Bulk Purchase Opportunities</CardTitle>
            <p className="text-muted-foreground">
              Save more by purchasing your frequently ordered items in bulk
            </p>
          </CardHeader>
          <CardContent>
            <TopItemsTable data={bulkItems} />
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
            <SmartRecommendations data={budgetSavvyPicks} />
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
            <SponsoredPicks data={rewardsProducts} />
          </CardContent>
        </Card>
      </div>

      <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Created by Jason Park (Intern 2025)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BudgetingDashboard;