import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

function ProductPage() {
  return (
    <main className="grid lg:grid-cols-2 lg:items-center">
      <ProductGallery />
      <ProductInfo />
    </main>
  );
}

export default ProductPage;