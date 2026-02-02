import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/types';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden border-border/50 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-3 top-3 opacity-0 transition-all duration-300 group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
          {product.category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>
        <h3 className="mb-1 font-semibold text-card-foreground line-clamp-1">
          {product.name}
        </h3>
        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <Button
            size="sm"
            onClick={() => addToCart(product)}
            className="gap-1"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          by {product.sellerName}
        </p>
      </CardContent>
    </Card>
  );
}
