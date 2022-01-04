import * as React from "react";
import {concatStyles} from "../../../helpers/css-modules";
import Button from "../../atoms/Button/Button";

import criticalCSS from "./critical.scss";

const styles = concatStyles([criticalCSS]);

interface PaginationProps {
    current_page: number;
    last_page?: number;
}

import IconArrowLeft from './icons/arrow_left.svg';
import IconArrowRight from './icons/arrow_right.svg';

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
        <div className={styles.paginate}>
        <div className={styles.arrow}>
          <img src={IconArrowLeft} />
        </div>
        <Button size="small-registration" round={true} color="disabled">1</Button>
        <Button size="small-registration" round={true} color="disabled">2</Button>
        <Button size="small-registration" round={true} color="secondary">3</Button>
        <Button size="small-registration" round={true} color="disabled">334</Button>
        <div className={styles.arrow}>
          <img src={IconArrowRight} />
        </div>
      </div>
  )
}
export default Pagination