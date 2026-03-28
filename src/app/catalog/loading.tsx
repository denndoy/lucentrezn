import { ProductSkeletonGrid } from "@/components/ProductSkeletonGrid";

export default function CatalogLoading() {
  return (
    <main className="w-full px-4 py-8 md:px-6 lg:px-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="border border-border bg-card/70 p-4">
          <div className="h-11 animate-pulse bg-zinc-200" />
          <div className="mt-4 h-52 animate-pulse bg-zinc-200" />
          <div className="mt-4 h-36 animate-pulse bg-zinc-200" />
        </aside>
        <section>
          <div className="mb-5 h-10 w-56 animate-pulse bg-zinc-200" />
          <ProductSkeletonGrid />
        </section>
      </div>
    </main>
  );
}
