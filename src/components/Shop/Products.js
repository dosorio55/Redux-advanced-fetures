import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    id: 1,
    name: 'My Book',
    price: 12,
    description: 'The book you wanna buy'
  },
  {
    id: 2,
    name: 'My Book 2',
    price: 10,
    description: 'The book you wanna buy 2'
  },
  {
    id: 3,
    name: 'Its not a book',
    price: 30,
    description: 'the NOTbook'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(({ name, id, price, description }) =>
          <ProductItem
            key={id}
            id={id}
            name={name}
            price={price}
            description={description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
