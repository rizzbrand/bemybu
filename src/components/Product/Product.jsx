"use client";
import "./Product.css";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { getProductSlug } from "@/app/wardrobe/products";

const Product = ({
  product,
  productIndex,
  showAddToCart = true,
  className = "",
  innerRef,
  style,
}) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const slug = getProductSlug(product);

  return (
    <div className={`product ${className}`} ref={innerRef} style={style}>
      <Link href={`/unit/${slug}`} className="product-img">
        <Image
          src={`/products/product_${productIndex}.png`}
          alt={product.name}
          width={600}
          height={800}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </Link>
      <div className="product-info">
        <div className="product-info-wrapper">
          <Link href={`/unit/${slug}`}>
            <p>{product.name}</p>
          </Link>
          <p>${product.price}</p>
        </div>
        {showAddToCart && (
          <button
            className="add-to-cart-btn"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
