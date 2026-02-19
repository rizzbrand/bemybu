"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { products, getProductSlug } from "../wardrobe/products";

export default function UnitRedirect() {
  const router = useRouter();

  useEffect(() => {
    const firstProduct = products[0];
    const slug = firstProduct ? getProductSlug(firstProduct) : null;
    router.replace(slug ? `/unit/${slug}` : "/wardrobe");
  }, [router]);

  return null;
}
