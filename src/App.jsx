import { CartProvider, useCart } from "./context/CartContext";

function LiveAnnouncer() {
  const { announcement } = useCart();
  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {announcement}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <LiveAnnouncer />
      <Header />
      <main className="">
        {/* <h1 className="text-[1.75rem] sm:text-[2.75rem]">
          Fall Limited Edition Sneakers
        </h1> */}
        <ProductGallery />
        <ProductInfo />
      </main>
    </CartProvider>
  );
}

// ** Temp stub components

function Header() {
  const { cartCount } = useCart();
  return (
    <header className="p-4 border-b">
      <p>Header placeholder -- cart count: {cartCount}</p>
    </header>
  );
}

function ProductGallery() {
  return <section className="p-4">Gallery placeholder</section>;
}

function ProductInfo() {
  const { addToCart } = useCart();
  return (
    <section className="p-4">
      <button
        onClick={() => addToCart({ id: 1, name: "Sneaker" }, 2)}
        className="border px-3 py-1 rounded">
        Test: add 2 to cart
      </button>
    </section>
  );
}

export default App;
