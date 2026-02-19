"use client";
import "../unit.css";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug } from "../../wardrobe/products";
import Copy from "@/components/Copy/Copy";
import Product from "@/components/Product/Product";
import { useCartStore } from "@/store/cartStore";

export default function UnitPage() {
  const params = useParams();
  const slug = params?.slug;
  const [relatedProducts, setRelatedProducts] = useState([]);
  const addToCart = useCartStore((state) => state.addToCart);

  const currentProduct = slug ? getProductBySlug(slug) : null;

  useEffect(() => {
    if (!currentProduct) return;
    const others = products.filter((p) => p.name !== currentProduct.name);
    const shuffled = [...others].sort(() => 0.5 - Math.random());
    setRelatedProducts(shuffled.slice(0, 4));
  }, [currentProduct]);

  if (!currentProduct) {
    return (
      <section className="product-hero">
        <div className="product-hero-col product-meta">
          <div className="product-meta-container">
            <Copy>
              <h3>Product not found</h3>
              <p className="bodyCopy">
                <Link href="/wardrobe">View all products</Link>
              </p>
            </Copy>
          </div>
        </div>
      </section>
    );
  }

  const productIndex = products.indexOf(currentProduct) + 1;
  const productImageSrc = `/products/product_${productIndex}.png`;

  return (
    <>
      <section className="product-hero product-hero-single">
        <div className="product-hero-col product-hero-img">
          <Image
            src={productImageSrc}
            alt={currentProduct.name}
            width={800}
            height={1000}
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
        <div className="product-hero-col product-meta">
          <div className="product-meta-container">
            <div className="product-meta-header">
              <h3>{currentProduct.name}</h3>
              <h3>€{currentProduct.price}</h3>
            </div>
            <div className="product-meta-header-divider"></div>
            <div className="product-color-container">
              <p className="md">Chroma</p>
              <div className="product-colors">
                <div className="product-color">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="product-sizes-container">
              <p className="md">Form Size</p>
              <div className="product-sizes">
                {currentProduct.sizes.map((size, i) => (
                  <p
                    key={size}
                    className={`md ${i === 0 ? "selected" : ""}`}
                  >
                    [ {size} ]
                  </p>
                ))}
              </div>
            </div>
            <div className="product-meta-buttons">
              <button
                className="primary"
                onClick={() => addToCart(currentProduct)}
              >
                Add To Bag
              </button>
              <button className="secondary">Save Item</button>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details product-details-sleek specifications">
        <div className="product-details-accent"></div>
        <div className="product-details-content">
          <div className="product-details-label">[ 01 ]</div>
          <Copy>
            <h4>Specifications</h4>
          </Copy>
          <Copy>
            <p className="bodyCopy lg">{currentProduct.description}</p>
          </Copy>
        </div>
      </section>

      <section className="product-details product-details-sleek shipping-details">
        <div className="product-details-accent"></div>
        <div className="product-details-content">
          <div className="product-details-label">[ 02 ]</div>
          <Copy>
            <h4>Shipping Terms</h4>
          </Copy>
          <Copy>
            <p className="bodyCopy lg">
              All orders are processed within 5 business days and shipped via
              tracked courier service. Estimated delivery times vary by region,
              but most domestic shipments arrive within 7 business days.
              You&apos;ll receive a tracking link once your order is dispatched.
            </p>
            <p className="bodyCopy lg">
              We accept returns on unworn items within 14 days of delivery. To
              initiate a return, please contact our support team with your order
              number. Refunds are issued to the original payment method once the
              item is received and inspected.
            </p>
          </Copy>
        </div>
      </section>

      <section className="related-products">
        <div className="container">
          <div className="related-products-header">
            <h3>Further Curations</h3>
          </div>
          <div className="related-products-container">
            <div className="container">
              {relatedProducts.map((product) => (
                <Product
                  key={product.name}
                  product={product}
                  productIndex={products.indexOf(product) + 1}
                  showAddToCart={true}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
