import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jul', spend: 52000 },
  { month: 'Aug', spend: 48500 },
  { month: 'Sep', spend: 51200 },
  { month: 'Oct', spend: 47800 },
  { month: 'Nov', spend: 49200 },
  { month: 'Dec', spend: 45800 }
];

export const SpendTrendChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
        <YAxis stroke="hsl(var(--foreground))" />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="spend" 
          stroke="hsl(var(--primary))" 
          strokeWidth={3}
          dot={{ fill: 'hsl(var(--primary))' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};