import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface CategorySpendChartProps {
  data: any[];
}

export const CategorySpendChart = ({ data }: CategorySpendChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barCategoryGap={32}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 11 }}
          interval={0}
        />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px'
          }}
          formatter={(value: number, name: string) => [
            `$${value.toLocaleString()}`,
            name
          ]}
        />
        <Legend />
        <Bar dataKey="spend" name="Spend" barSize={28} fill="#2B58F1" />
        <Bar dataKey="savings" name="Savings" barSize={28} fill="#22c55e" />
      </BarChart>
    </ResponsiveContainer>
  );
};