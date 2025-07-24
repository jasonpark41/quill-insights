import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const categoryData = [
  { name: 'Jan/San Supplies', spend: 15600, percentage: 34, color: 'hsl(var(--primary))' },
  { name: 'PPE & Safety', spend: 8900, percentage: 19, color: 'hsl(var(--secondary))' },
  { name: 'Paper Products', spend: 7400, percentage: 16, color: 'hsl(var(--healthcare-mint))' },
  { name: 'Ink & Cartridges', spend: 5200, percentage: 11, color: 'hsl(var(--healthcare-sage))' },
  { name: 'Breakroom', spend: 3600, percentage: 8, color: 'hsl(var(--accent))' },
  { name: 'Medical Supplies', spend: 2800, percentage: 6, color: '#495057' },
  { name: 'Office Supplies', spend: 2300, percentage: 6, color: 'hsl(var(--border))' },
  { name: 'Technology', spend: 2100, percentage: 5, color: '#8ecae6' },
  { name: 'Furniture', spend: 1800, percentage: 4, color: '#219ebc' },
  { name: 'Shipping Supplies', spend: 1500, percentage: 3, color: '#023047' },
  { name: 'Maintenance', spend: 1200, percentage: 2, color: '#ffb703' },
  { name: 'Reception', spend: 1000, percentage: 2, color: '#fb8500' },
  { name: 'Marketing Materials', spend: 900, percentage: 2, color: '#adb5bd' },
];

export const CategorySpendChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={categoryData} barCategoryGap={32}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 11 }} // Smaller font size for labels
          interval={0} // Force all labels to show
        />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px'
          }}
          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Spend']}
        />
        <Bar dataKey="spend" barSize={65}>
          {categoryData.map((entry, index) => (
            <Cell key={`bar-cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};