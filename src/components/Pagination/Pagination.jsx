import React from "react";
import { Pagination, PaginationItem } from '@mui/material';

import styles from './styles.module.css';





function Paginat({ item }) {
  return (
    <div className={styles.wrapper}>
        <Pagination count={10} variant="outlined" color="secondary" showFirstButton showLastButton />
    </div>
  );
}

export default Paginat;