"use client";
import "./genesis.css";
import { useRef } from "react";
import Image from "next/image";
import Copy from "@/components/Copy/Copy";
import TextBlock from "@/components/TextBlock/TextBlock";
import BrandIcon from "@/components/BrandIcon/BrandIcon";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Genesis() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".project-page-whitespace",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const projectPreviewWrapper = document.querySelector(
            ".project-preview-wrapper"
          );
          const previewCols = document.querySelectorAll(
            ".preview-col:not(.main-preview-col)"
          );
          const mainPreviewImg = document.querySelector(
            ".preview-img.main-preview-img img"
          );

          if (!projectPreviewWrapper || !previewCols.length || !mainPreviewImg)
            return;

          const previewScreenWidth = window.innerWidth;
          const previewMaxScale = previewScreenWidth < 900 ? 4 : 2.65;

          const scale = 1 + self.progress * previewMaxScale;
          const yPreviewColTranslate = self.progress * 300;
          const mainPreviewImgScale = 2 - self.progress * 0.85;

          projectPreviewWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;

          previewCols.forEach((previewCol) => {
            previewCol.style.transform = `translateY(${yPreviewColTranslate}px)`;
          });

          mainPreviewImg.style.transform = `scale(${mainPreviewImgScale})`;
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <section className="project-preview">
        <div className="project-preview-wrapper">
          <div className="preview-col">
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_03.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_06.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_09.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
          </div>
          <div className="preview-col">
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_01.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_04.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_07.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
          </div>
          <div className="preview-col main-preview-col">
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_02.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
            <div className="preview-img main-preview-img">
              <Image src="/spotlight/spotlight_img_05.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_08.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
          </div>
          <div className="preview-col">
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_03.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_06.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_09.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
          </div>
          <div className="preview-col">
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_01.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_04.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
            <div className="preview-img">
              <Image src="/spotlight/spotlight_img_07.jpg" alt="" width={400} height={500} sizes="(max-width: 900px) 33vw, 200px" />
            </div>
          </div>
        </div>
      </section>

      <section className="genesis-hero">
        <div className="gen-hero-img">
          <Image
            src="/genesis/hero.jpg"
            alt=""
            width={1920}
            height={1080}
            sizes="100vw"
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="container">
          <div className="gen-hero-copy">
            <Copy animateOnScroll={false} delay={0.7} type="flicker">
              <p>Heritage over excess,</p>
              <p>Tradition refined,</p>
              <p>Luxury by design.</p>
            </Copy>
          </div>
          <div className="gen-hero-copy">
            <Copy animateOnScroll={false} delay={0.8} type="flicker">
              <p>We craft timeless forms,</p>
              <p>Built for the few.</p>
            </Copy>
          </div>
          <div className="gen-hero-copy">
            <Copy animateOnScroll={false} delay={0.7}>
              <h1>The story behind every stitch</h1>
            </Copy>
            <div className="gen-hero-meta">
              <div className="gen-hero-meta-block">
                <Copy animateOnScroll={false} delay={0.9} type="flicker">
                  <p>We honor the bubu,</p>
                  <p>Reimagined for the modern connoisseur,</p>
                  <p>A study in elegance.</p>
                </Copy>
              </div>
              <div className="gen-hero-meta-block">
                <Copy animateOnScroll={false} delay={1} type="flicker">
                  <p>[ BE BU / 0001 ]</p>
                </Copy>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="genesis-about">
        <div className="container">
          <div className="genesis-about-logo">
            <BrandIcon fill="#0f0f0f" />
          </div>
          <div className="genesis-about-copy">
            <Copy>
              <h4>
                Be Bu is built on the belief that heritage deserves refinement.
                Every piece honors the bubu tradition—loose, flowing, dignified—
                while elevating it for the discerning client. We define luxury
                through restraint, craft through intention, presence through
                understatement.
              </h4>
            </Copy>
            <Copy>
              <h4 delay={0.5}>
                Our roots lie in West African elegance, reimagined for those who
                appreciate the rare. Each garment is crafted with the finest
                materials, designed for comfort and distinction. Be Bu is not
                merely fashion. It is a legacy, reserved for the few.
              </h4>
            </Copy>
          </div>
        </div>
      </section>

      <section className="project-page-whitespace"></section>

      <TextBlock />
    </div>
  );
}
