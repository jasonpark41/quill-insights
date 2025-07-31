import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Extend jsPDF type to include autoTable
type jsPDFWithAutoTable = jsPDF & {
  autoTable: (...args: any[]) => any;
  autoTable: any;
};

// Helper function to properly escape CSV values
const escapeCsvValue = (value: any): string => {
  if (value === null || value === undefined) {
    return '';
  }
  
  const stringValue = String(value);
  
  // If the value contains commas, quotes, or newlines, wrap it in quotes and escape internal quotes
  if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n') || stringValue.includes('\r')) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  
  return stringValue;
};

export const exportToCsv = (data: any) => {
  let csvContent = '';

  // Summary Data
  csvContent += 'Budget Summary\n';
  csvContent += 'Metric,Value\n';
  data.summary.forEach((row: any) => {
    csvContent += `${escapeCsvValue(row.metric)},${escapeCsvValue(row.value)}\n`;
  });
  csvContent += '\n';

  // Category Spend (with savings included)
  csvContent += 'Spend by Category\n';
  csvContent += 'Category,Spend,Savings,Percentage\n';
  data.categorySpend.forEach((row: any) => {
    csvContent += `${escapeCsvValue(row.Category)},${escapeCsvValue(row.Spend)},${escapeCsvValue(row.Savings)},${escapeCsvValue(row.Percentage)}\n`;
  });
  csvContent += '\n';

  // Top Purchased Items
  csvContent += 'Top Purchased Items\n';
  const topItemsHeaders = Object.keys(data.topPurchasedItems[0]);
  csvContent += topItemsHeaders.map(header => escapeCsvValue(header)).join(',') + '\n';
  data.topPurchasedItems.forEach((row: any) => {
    csvContent += topItemsHeaders.map(header => escapeCsvValue(row[header])).join(',') + '\n';
  });
  csvContent += '\n';

  // Budget-Savvy Picks
  csvContent += 'Quill Budget-Savvy Picks\n';
  const savvyHeaders = Object.keys(data.budgetSavvyPicks[0]);
  csvContent += savvyHeaders.map(header => escapeCsvValue(header)).join(',') + '\n';
  data.budgetSavvyPicks.forEach((row: any) => {
    csvContent += savvyHeaders.map(header => escapeCsvValue(row[header])).join(',') + '\n';
  });
  csvContent += '\n';

  // Bulk Items
  csvContent += 'Bulk Purchase Opportunities\n';
  const bulkHeaders = Object.keys(data.bulkItems[0]);
  csvContent += bulkHeaders.map(header => escapeCsvValue(header)).join(',') + '\n';
  data.bulkItems.forEach((row: any) => {
    csvContent += bulkHeaders.map(header => escapeCsvValue(row[header])).join(',') + '\n';
  });
  csvContent += '\n';

  // Sponsored Picks
  csvContent += 'Quill Rewards+ Member Solutions\n';
  const sponsoredHeaders = Object.keys(data.sponsoredPicks[0]);
  csvContent += sponsoredHeaders.map(header => escapeCsvValue(header)).join(',') + '\n';
  data.sponsoredPicks.forEach((row: any) => {
    csvContent += sponsoredHeaders.map(header => escapeCsvValue(row[header])).join(',') + '\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'budgetReport.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToPdf = (data: any, title: string) => {
  const doc = new jsPDF() as jsPDFWithAutoTable;
  let yPos = 20;

  doc.setFontSize(18);
  doc.text(title, 14, yPos);
  yPos += 10;

  // Summary Data
  doc.setFontSize(14);
  doc.text('Budget Summary', 14, yPos);
  yPos += 7;
  autoTable(doc, {
    startY: yPos,
    head: [['Metric', 'Value']],
    body: data.summary.map((row: any) => [row.metric, row.value]),
    theme: 'grid',
    headStyles: { fillColor: [22, 160, 133] },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 60 }
    },
    styles: {
      cellPadding: 3,
      fontSize: 10,
      halign: 'left'
    }
  });
  yPos = (doc as any).lastAutoTable.finalY + 10;

  // Category Spend (with savings)
  doc.setFontSize(14);
  doc.text('Spend by Category', 14, yPos);
  yPos += 7;
  autoTable(doc, {
    startY: yPos,
    head: [['Category', 'Spend', 'Savings', 'Percentage']],
    body: data.categorySpend.map((row: any) => [row.Category, row.Spend, row.Savings, row.Percentage]),
    theme: 'grid',
    headStyles: { fillColor: [22, 160, 133] },
    columnStyles: {
      0: { cellWidth: 50 },
      1: { cellWidth: 35 },
      2: { cellWidth: 35 },
      3: { cellWidth: 25 }
    },
    styles: {
      cellPadding: 3,
      fontSize: 9,
      halign: 'left'
    }
  });
  yPos = (doc as any).lastAutoTable.finalY + 10;

  // Add new page if needed
  if (yPos > 220) {
    doc.addPage();
    yPos = 20;
  }

  // Top Purchased Items - Dynamic headers like CSV
  doc.setFontSize(14);
  doc.text('Top Purchased Items', 14, yPos);
  yPos += 7;
  const topItemsHeaders = Object.keys(data.topPurchasedItems[0]);
  autoTable(doc, {
    startY: yPos,
    head: [topItemsHeaders],
    body: data.topPurchasedItems.map((row: any) => topItemsHeaders.map(header => row[header])),
    theme: 'grid',
    headStyles: { fillColor: [22, 160, 133] },
    styles: {
      cellPadding: 3,
      fontSize: 9,
      halign: 'left'
    }
  });
  yPos = (doc as any).lastAutoTable.finalY + 10;

  if (yPos > 200) {
    doc.addPage();
    yPos = 20;
  }

  // Budget-Savvy Picks - Dynamic headers like CSV
  doc.setFontSize(14);
  doc.text('Quill Budget-Savvy Picks', 14, yPos);
  yPos += 7;
  const savvyHeaders = Object.keys(data.budgetSavvyPicks[0]);
  autoTable(doc, {
    startY: yPos,
    head: [savvyHeaders],
    body: data.budgetSavvyPicks.map((row: any) => savvyHeaders.map(header => row[header])),
    theme: 'grid',
    headStyles: { fillColor: [22, 160, 133] },
    styles: {
      cellPadding: 3,
      fontSize: 8,
      halign: 'left'
    }
  });
  yPos = (doc as any).lastAutoTable.finalY + 10;

  if (yPos > 200) {
    doc.addPage();
    yPos = 20;
  }

  // Bulk Items - Dynamic headers like CSV
  doc.setFontSize(14);
  doc.text('Bulk Purchase Opportunities', 14, yPos);
  yPos += 7;
  const bulkHeaders = Object.keys(data.bulkItems[0]);
  autoTable(doc, {
    startY: yPos,
    head: [bulkHeaders],
    body: data.bulkItems.map((row: any) => bulkHeaders.map(header => row[header])),
    theme: 'grid',
    headStyles: { fillColor: [22, 160, 133] },
    styles: {
      cellPadding: 3,
      fontSize: 8,
      halign: 'left'
    }
  });
  yPos = (doc as any).lastAutoTable.finalY + 10;

  if (yPos > 200) {
    doc.addPage();
    yPos = 20;
  }

  // Sponsored Picks - Dynamic headers like CSV
  doc.setFontSize(14);
  doc.text('Quill Rewards+ Member Solutions', 14, yPos);
  yPos += 7;
  const sponsoredHeaders = Object.keys(data.sponsoredPicks[0]);
  autoTable(doc, {
    startY: yPos,
    head: [sponsoredHeaders],
    body: data.sponsoredPicks.map((row: any) => sponsoredHeaders.map(header => row[header])),
    theme: 'grid',
    headStyles: { fillColor: [22, 160, 133] },
    styles: {
      cellPadding: 3,
      fontSize: 8,
      halign: 'left'
    }
  });

  // Save as PDF
  const pdfBlob = doc.output('blob');
  const link = document.createElement('a');
  link.href = URL.createObjectURL(pdfBlob as Blob);
  link.setAttribute('download', 'budgetReport.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};