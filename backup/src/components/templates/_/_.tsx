import * as React from "react";
import { Link } from "react-router-dom";

import criticalCSS from './critical.scss';
const styles = criticalCSS;

export default () => {
  return (
    <div className={styles.links}>
      <div>
        <Link to="/landing">
          Landing
        </Link>
      </div>
      <div>
        <Link to="/index3">
          Index3
        </Link>
      </div>
      <div>
        <Link to="/support">
          Support
        </Link>
      </div>
      <div>
        <Link to="/top10">
          Top10
        </Link>
      </div>
      <div>
        <Link to="/reviews">
          Reviews
        </Link>
      </div>
      <div>
        <Link to="/garantuee">
          Garantuee
        </Link>
      </div>
    </div>
  )
}