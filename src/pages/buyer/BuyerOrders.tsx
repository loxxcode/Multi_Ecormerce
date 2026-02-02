import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockOrders } from '@/lib/mockData';

const BuyerOrders = () => {
  const orders = mockOrders;

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role="buyer" />
      
      <main className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Orders</h1>
          <p className="text-muted-foreground">Track and manage your orders</p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Ordered on {order.createdAt.toLocaleDateString()} • Sold by {order.sellerName}
                  </p>
                </div>
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
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.products.map((item) => (
                    <div
                      key={item.productId}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                    >
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="h-20 w-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{item.productName}</p>
                        <p className="text-sm text-muted-foreground">
                          Quantity: {item.quantity}
                        </p>
                        <p className="font-semibold mt-1">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm">
                          Track Order
                        </Button>
                        {order.status === 'delivered' && (
                          <Button variant="secondary" size="sm">
                            Write Review
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-muted-foreground">Order Total</span>
                  <span className="text-xl font-bold">${order.total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BuyerOrders;
