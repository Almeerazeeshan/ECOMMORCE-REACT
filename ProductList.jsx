import products from '../assets/products.json';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
