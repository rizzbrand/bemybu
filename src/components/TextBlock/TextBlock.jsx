import "./TextBlock.css";

import Copy from "../Copy/Copy";
import BrandIcon from "../BrandIcon/BrandIcon";

const TextBlock = () => {
  return (
    <section className="text-block">
      <div className="container">
        <div className="text-block-col">
          <Copy>
            <h3>Designed for quiet distinction.</h3>
          </Copy>
          <div className="text-block-logo">
            <BrandIcon />
          </div>
        </div>
        <div className="text-block-col">
          <div className="text-block-copy">
            <Copy>
              <p className="bodyCopy sm">
                Designed for those who value understated luxury. Built on
                heritage and craft, each piece honors the bubu tradition while
                embracing refined elegance. Timeless in silhouette, deliberate in
                detail.
              </p>
            </Copy>
          </div>
          <div className="text-block-copy">
            <Copy>
              <p className="bodyCopy sm">
                No excess. Only intention. Each garment is crafted to endure—
                indifferent to passing trends, untouched by noise. Flowing in cut,
                dignified in presence. A collection for those who wear legacy.
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
