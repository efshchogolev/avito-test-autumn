import {AdsList} from "src/features";
import Pagination from '@mui/material/Pagination';
import {Filters} from "src/entities";

export const ListPage = () => {
  return <div>
    <Filters />
    <AdsList/>
    <Pagination count={10} />
    Всего 1000 объявлений
  </div>;
};
