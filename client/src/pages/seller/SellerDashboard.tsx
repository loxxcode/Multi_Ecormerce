import { DollarSign, Package, ShoppingCart, Users } from 'lucide-react';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { StatsCard } from '@/components/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { sellerStats, mockProducts, mockOrders } from '@/lib/mockData';

const SellerDashboard = () => {
  const recentOrders = mockOrders.slice(0, 5);
  const myProducts = mockProducts.slice(0, 4);

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role="seller" />
      
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Seller Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your store overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard
            title="Total Revenue"
            value={`$${sellerStats.revenue.toLocaleString()}`}
            change={sellerStats.growth}
            icon={DollarSign}
            variant="primary"
          />
          <StatsCard
            title="Total Orders"
            value={sellerStats.totalOrders}
            change={8.2}
            icon={ShoppingCart}
            variant="accent"
          />
          <StatsCard
            title="Products Listed"
            value={sellerStats.totalProducts}
            icon={Package}
          />
          <StatsCard
            title="Customers"
            value={sellerStats.totalCustomers}
            change={15.3}
            icon={Users}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                  >
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.buyerName} • {order.products.length} item(s)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${order.total.toFixed(2)}</p>
                      <Badge
                        variant={
                          order.status === 'delivered'
                            ? 'default'
                            : order.status === 'shipped'
                            ? 'secondary'
                            : 'outline'
                        }
                        className="capitalize"
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Stock: {product.stock} • ⭐ {product.rating}
                      </p>
                    </div>
                    <p className="font-semibold">${product.price}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;
