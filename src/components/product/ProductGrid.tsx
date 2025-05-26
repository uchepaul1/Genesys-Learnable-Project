import React, { useState } from 'react';
import { useGetProductsQuery } from '../productsAPI';
import './ProductGrid.css'

const PAGE_SIZE = 10;

const ProductGrid: React.FC = () => {
  const [skip, setSkip] = useState(0);

  const { data, error, isLoading, isFetching } = useGetProductsQuery(
    { limit: PAGE_SIZE, skip },
    { refetchOnMountOrArgChange: true }
  );

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const hasMore = skip + PAGE_SIZE < total;

  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + PAGE_SIZE);
  };

  return (
    <main className="product-section">
      <header className="product-header">
        <p className="product-header__top-title">Featured Products</p>
        <h1 className="product-header__main-title">BESTSELLER PRODUCTS</h1>
        <p className="product-header__description">
          Problems trying to resolve the conflict between.
        </p>
      </header>
      <section className="product-grid">
        {(isLoading || isFetching) && <div>Loading...</div>}
        {error && <div>Error loading products.</div>}
        {products.map((product) => (
          <article className="product-cards" key={product.id}>
            <div className="product-card__image">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <h2 className="product-card__title">{product.title}</h2>
            <p className="product-card__subtitle">{product.brand}</p>
            <div className="product-card__prices">
              <span className="product-card__price--old">
                ${product.price.toFixed(2)}
              </span>
              <span className="product-card__price--new">
                $
                {(
                  product.price *
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
              </span>
            </div>
          </article>
        ))}
      </section>
      <div className="product-section__actions">
        {hasMore && (
          <button
            className="load-more-btn"
            type="button"
            onClick={handleLoadMore}
            disabled={isFetching}
          >
            {isFetching ? 'Loading...' : 'LOAD MORE PRODUCTS'}
          </button>
        )}
      </div>
    </main>
  );
};

export default ProductGrid;