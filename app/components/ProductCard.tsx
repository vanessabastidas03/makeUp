"use client";

import { Product } from "../types";
import { Button } from "@/components/ui/button";
import { useCart } from "../hooks/useCart";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
        <p className="font-bold">${product.price.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground">Stock: {product.stock}</p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className="w-full"
        >
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
}