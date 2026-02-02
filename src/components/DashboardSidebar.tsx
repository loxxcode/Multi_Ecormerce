import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  BarChart3,
  Heart,
  FileText,
  Store,
  Home,
  ChevronLeft,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { UserRole } from '@/lib/types';

interface SidebarItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const buyerItems: SidebarItem[] = [
  { label: 'Overview', icon: LayoutDashboard, href: '/buyer' },
  { label: 'Orders', icon: ShoppingCart, href: '/buyer/orders' },
  { label: 'Wishlist', icon: Heart, href: '/buyer/wishlist' },
  { label: 'Settings', icon: Settings, href: '/buyer/settings' },
];

const sellerItems: SidebarItem[] = [
  { label: 'Overview', icon: LayoutDashboard, href: '/seller' },
  { label: 'Products', icon: Package, href: '/seller/products' },
  { label: 'Orders', icon: ShoppingCart, href: '/seller/orders' },
  { label: 'Analytics', icon: BarChart3, href: '/seller/analytics' },
  { label: 'Settings', icon: Settings, href: '/seller/settings' },
];

const adminItems: SidebarItem[] = [
  { label: 'Overview', icon: LayoutDashboard, href: '/admin' },
  { label: 'Users', icon: Users, href: '/admin/users' },
  { label: 'Products', icon: Package, href: '/admin/products' },
  { label: 'Orders', icon: FileText, href: '/admin/orders' },
  { label: 'Sellers', icon: Store, href: '/admin/sellers' },
  { label: 'Analytics', icon: BarChart3, href: '/admin/analytics' },
  { label: 'Settings', icon: Settings, href: '/admin/settings' },
];

interface DashboardSidebarProps {
  role: UserRole;
}

export function DashboardSidebar({ role }: DashboardSidebarProps) {
  const location = useLocation();
  const items = role === 'buyer' ? buyerItems : role === 'seller' ? sellerItems : adminItems;

  const roleLabels = {
    buyer: 'Buyer',
    seller: 'Seller',
    admin: 'Admin',
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Store className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold">
              Multi<span className="text-primary">Market</span>
            </span>
          </Link>
        </div>

        {/* Role Badge */}
        <div className="px-4 py-3 border-b border-border">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {roleLabels[role]} Dashboard
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {items.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
          <Button variant="outline" className="w-full justify-start gap-2" asChild>
            <Link to="/">
              <Home className="h-4 w-4" />
              Back to Store
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
