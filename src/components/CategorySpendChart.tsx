import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const categoryData = [
  { name: 'Jan/San Supplies', spend: 15600, percentage: 34, color: 'hsl(var(--primary))' },
  { name: 'PPE & Safety', spend: 8900, percentage: 19, color: 'hsl(var(--secondary))' },
  { name: 'Paper Products', spend: 7400, percentage: 16, color: 'hsl(var(--healthcare-mint))' },
  { name: 'Ink & Cartridges', spend: 5200, percentage: 11, color: 'hsl(var(--healthcare-sage))' },
  { name: 'Breakroom', spend: 3600, percentage: 8, color: 'hsl(var(--accent))' },
  { name: 'Medical Supplies', spend: 2800, percentage: 6, color: 'hsl(var(--muted))' },
  { name: 'Office Supplies', spend: 2300, percentage: 6, color: 'hsl(var(--border))' }
];

export const CategorySpendChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={categoryData} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis type="number" stroke="hsl(var(--foreground))" />
        <YAxis dataKey="name" type="category" stroke="hsl(var(--foreground))" width={120} />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px'
          }}
          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Spend']}
        />
        <Bar 
          dataKey="spend" 
          fill="hsl(var(--primary))"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};