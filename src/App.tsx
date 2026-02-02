import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import SellerDashboard from "./pages/seller/SellerDashboard";
import SellerProducts from "./pages/seller/SellerProducts";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import BuyerOrders from "./pages/buyer/BuyerOrders";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/cart" element={<Cart />} />
                
                {/* Seller Dashboard Routes */}
                <Route path="/seller" element={<SellerDashboard />} />
                <Route path="/seller/products" element={<SellerProducts />} />
                <Route path="/seller/orders" element={<SellerDashboard />} />
                <Route path="/seller/analytics" element={<SellerDashboard />} />
                <Route path="/seller/settings" element={<SellerDashboard />} />
                
                {/* Admin Dashboard Routes */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/users" element={<AdminUsers />} />
                <Route path="/admin/products" element={<AdminDashboard />} />
                <Route path="/admin/orders" element={<AdminDashboard />} />
                <Route path="/admin/sellers" element={<AdminDashboard />} />
                <Route path="/admin/analytics" element={<AdminDashboard />} />
                <Route path="/admin/settings" element={<AdminDashboard />} />
                
                {/* Buyer Dashboard Routes */}
                <Route path="/buyer" element={<BuyerDashboard />} />
                <Route path="/buyer/orders" element={<BuyerOrders />} />
                <Route path="/buyer/wishlist" element={<BuyerDashboard />} />
                <Route path="/buyer/settings" element={<BuyerDashboard />} />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
