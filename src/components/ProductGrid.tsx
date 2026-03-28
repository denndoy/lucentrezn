import { ProductCard } from "@/components/ProductCard";
import { ProductView } from "@/lib/types";

export type CatalogGridItem = ProductView & {
  inStock: boolean;
  featured: boolean;
  sizes: Array<"S" | "M" | "L" | "XL">;
};

type ProductGridProps = {
  products: CatalogGridItem[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="border border-dashed border-border p-8 text-center text-muted">
        No products found for this filter.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
