import { ShoppingCart, Package, Heart, Clock } from 'lucide-react';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { StatsCard } from '@/components/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockOrders, mockProducts } from '@/lib/mockData';

const BuyerDashboard = () => {
  const myOrders = mockOrders;
  const recentlyViewed = mockProducts.slice(0, 4);

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role="buyer" />
      
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-muted-foreground">Track your orders and manage your account</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard
            title="Total Orders"
            value={myOrders.length}
            icon={ShoppingCart}
            variant="primary"
          />
          <StatsCard
            title="In Progress"
            value={myOrders.filter((o) => o.status === 'processing' || o.status === 'shipped').length}
            icon={Package}
            variant="accent"
          />
          <StatsCard
            title="Wishlist Items"
            value={12}
            icon={Heart}
          />
          <StatsCard
            title="Pending Reviews"
            value={3}
            icon={Clock}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Orders */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Orders</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                  >
                    <img
                      src={order.products[0].image}
                      alt={order.products[0].productName}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.products.length} item(s) • {order.createdAt.toLocaleDateString()}
                      </p>
                      <Badge
                        variant={
                          order.status === 'delivered'
                            ? 'default'
                            : order.status === 'shipped'
                            ? 'secondary'
                            : 'outline'
                        }
                        className="mt-1 capitalize"
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <p className="font-semibold">${order.total.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recently Viewed */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recently Viewed</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentlyViewed.map((product) => (
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
                        by {product.sellerName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${product.price}</p>
                      <Button size="sm" variant="outline" className="mt-1">
                        Add to Cart
                      </Button>
                    </div>
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

export default BuyerDashboard;
