import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  variant?: 'default' | 'primary' | 'accent' | 'success';
}

export function StatsCard({ title, value, change, icon: Icon, variant = 'default' }: StatsCardProps) {
  const variantStyles = {
    default: 'bg-muted text-muted-foreground',
    primary: 'gradient-primary text-primary-foreground',
    accent: 'gradient-accent text-accent-foreground',
    success: 'bg-success text-success-foreground',
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="mt-1 text-2xl font-bold">{value}</p>
            {change !== undefined && (
              <p
                className={cn(
                  'mt-1 text-sm font-medium',
                  change >= 0 ? 'text-success' : 'text-destructive'
                )}
              >
                {change >= 0 ? '+' : ''}
                {change}% from last month
              </p>
            )}
          </div>
          <div className={cn('flex h-12 w-12 items-center justify-center rounded-xl', variantStyles[variant])}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
