import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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
      <PieChart>
        <Pie
          data={categoryData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percentage }) => `${name}: ${percentage}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="spend"
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px'
          }}
          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Spend']}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};