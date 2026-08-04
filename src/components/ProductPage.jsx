import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

function ProductPage() {
  return (
    <main className="grid sm:gap-12 lg:gap-32 lg:grid-cols-2">
      <ProductGallery />
      <ProductInfo />
    </main>
  );
}

export default ProductPage;