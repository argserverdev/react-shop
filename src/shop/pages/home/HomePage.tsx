import { CustomJumbotron } from '../../components/CustomJumbotron';
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { products } from '../../../mocks/products.mock';
import { ProductsGrid } from '../../components/ProductsGrid';


export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="Todos los productos" />
      <ProductsGrid products={ products } />
      <CustomPagination totalPages={ 5 } />
    </>
  );
};