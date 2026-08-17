import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

function ProductPage() {
  return (
    <main id="main-content" className="flex flex-col lg:flex-row lg:justify-around sm:gap-12">
      <ProductGallery />
      <ProductInfo />
    </main>
  );
}

export default ProductPage;