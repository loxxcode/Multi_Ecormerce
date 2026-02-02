import { ArrowRight, ShoppingBag, Store, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { mockProducts, mockCategories } from '@/lib/mockData';

const Index = () => {
  const featuredProducts = mockProducts.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Multi-Vendor Marketplace
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Discover Unique Products from{' '}
              <span className="text-primary">Trusted Sellers</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Shop from thousands of independent sellers offering unique, quality products.
              Find exactly what you're looking for, all in one place.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2 gradient-primary border-0">
                Start Shopping
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/seller">Become a Seller</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_100%)]" />
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: '10K+', label: 'Products', icon: ShoppingBag },
              { value: '500+', label: 'Sellers', icon: Store },
              { value: '50K+', label: 'Happy Customers', icon: TrendingUp },
              { value: '99%', label: 'Satisfaction', icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto h-8 w-8 text-primary mb-2" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Shop by Category</h2>
            <p className="mt-2 text-muted-foreground">
              Browse our popular categories
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {mockCategories.map((category, index) => (
              <Card
                key={category.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="flex flex-col items-center p-6">
                  <span className="text-4xl mb-3">{category.icon}</span>
                  <h3 className="font-semibold text-center">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">
                Handpicked products from our best sellers
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" className="gap-2">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="overflow-hidden gradient-primary border-0">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-2xl text-center text-primary-foreground">
                <h2 className="text-3xl font-bold md:text-4xl">
                  Start Selling Today
                </h2>
                <p className="mt-4 text-primary-foreground/90">
                  Join thousands of sellers and reach millions of customers.
                  Easy setup, powerful tools, and dedicated support.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="mt-8 gap-2"
                  asChild
                >
                  <Link to="/seller">
                    <Store className="h-5 w-5" />
                    Open Your Store
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                  <Store className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">
                  Multi<span className="text-primary">Market</span>
                </span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Your trusted multi-vendor marketplace for unique products from independent sellers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Buyers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-foreground transition-colors">How to Buy</Link></li>
                <li><Link to="/" className="hover:text-foreground transition-colors">Payment Options</Link></li>
                <li><Link to="/" className="hover:text-foreground transition-colors">Shipping Info</Link></li>
                <li><Link to="/" className="hover:text-foreground transition-colors">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Sellers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/seller" className="hover:text-foreground transition-colors">Seller Dashboard</Link></li>
                <li><Link to="/" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="/" className="hover:text-foreground transition-colors">Seller Guide</Link></li>
                <li><Link to="/" className="hover:text-foreground transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link to="/" className="hover:text-foreground transition-colors">Contact Us</Link></li>
                <li><Link to="/" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 MultiMarket. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
