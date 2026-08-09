import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

function ProductPage() {
  return (
    <main className="grid sm:gap-12 lg:grid-cols-[min-content_1fr] lg:justify-between lg:justify-items-center">
      <ProductGallery />
      <ProductInfo />
    </main>
  );
}

export default ProductPage;