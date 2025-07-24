import { useParams } from 'react-router-dom';
import products from '../assets/products.json';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <img src={product.image} alt={product.name} width="300" />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
