import { Metadata } from "next";
import { ProductCatalog } from "@/components/ProductCatalog";
import { getAllProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Catalog | Lucentrez",
  description: "Browse Lucentrez streetwear products and continue checkout on marketplace.",
};

export default async function CatalogPage() {
  const products = await getAllProducts();

  return (
    <main className="w-full px-4 py-8 md:px-6 lg:px-10">
      <ProductCatalog products={products} />
    </main>
  );
}
