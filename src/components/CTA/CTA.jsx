"use client";
import "./CTA.css";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Copy from "../Copy/Copy";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const container = ctaRef.current;
    if (!container) return;

    const timer = setTimeout(() => {
      const leftImage = container.querySelector(
        ".cta-col:nth-child(1) .cta-side-img"
      );
      const rightImage = container.querySelector(
        ".cta-col:nth-child(3) .cta-side-img"
      );

      const st = ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          const leftTranslateY = 20 - progress * 30;
          gsap.set(leftImage, {
            y: `${leftTranslateY}rem`,
          });

          const rightTranslateY = -progress * 30;
          gsap.set(rightImage, {
            y: `${rightTranslateY}rem`,
          });
        },
      });

      return () => {
        st.kill();
      };
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="cta" ref={ctaRef}>
      <div className="container">
        <div className="cta-col">
          <div className="cta-side-img">
            <Image
              src="/cta/cta_img_01.jpg"
              alt=""
              width={400}
              height={600}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="cta-col-copy">
            <Copy>
              <p className="bodyCopy sm">
                Each piece is crafted for those who appreciate heritage,
                refinement, and understated luxury.
              </p>
            </Copy>
          </div>
        </div>
        <div className="cta-col">
          <div className="cta-header">
            <Copy>
              <h3>Reserve your place in the collection</h3>
            </Copy>
          </div>
          <div className="cta-main-img">
            <Image
              src="/cta/cta_img_02.jpg"
              alt=""
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="cta-col">
          <div className="cta-side-img">
            <Image
              src="/cta/cta_img_03.jpg"
              alt=""
              width={400}
              height={600}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cta-main-copy">
          <div className="btn">
            <Copy type="flicker">
              <Link href="/wardrobe">Discover the Collection</Link>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
