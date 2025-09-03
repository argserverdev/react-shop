import { useParams } from 'react-router';

import { CustomJumbotron } from '../../components/CustomJumbotron';
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { products } from '../../../mocks/products.mock';
import { ProductsGrid } from '../../components/ProductsGrid';


export const GenderPage = () => {

  const { gender } = useParams();

  const genderLabel = gender === 'men'
    ? 'Hombres'
    : gender === 'women'
      ? 'Mujeres'
      : 'Niños';

  return (
    <>
      <CustomJumbotron title={ `Productos para ${ genderLabel }` } />
      <ProductsGrid products={ products } />
      <CustomPagination totalPages={ 5 } />
    </>
  );
};