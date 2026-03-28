import { ProductSkeletonGrid } from "@/components/ProductSkeletonGrid";

export default function Loading() {
  return (
    <main className="w-full px-2 py-14">
      <div className="mb-8 h-10 w-64 animate-pulse rounded bg-zinc-800" />
      <ProductSkeletonGrid />
    </main>
  );
}
