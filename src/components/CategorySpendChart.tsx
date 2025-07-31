import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

import { categoryData } from "@/data/mockData";

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
          formatter={(value: number, name: string) => [
            `$${value.toLocaleString()}`,
            name // This will show "Spend" or "Savings" as set in <Bar name="..."/>
          ]}
        />
        <Legend />
        <Bar dataKey="spend" name="Spend" barSize={28} fill="#2B58F1" />
        <Bar dataKey="savings" name="Savings" barSize={28} fill="#22c55e" />
      </BarChart>
    </ResponsiveContainer>
  );
};