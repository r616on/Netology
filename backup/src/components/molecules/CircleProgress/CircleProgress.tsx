
import * as React from 'react';
import classnames from 'classnames';
import {concatStyles} from "../../../helpers/css-modules";

import criticalCSS from './critical.scss';

const styles = concatStyles([
    criticalCSS
]);

const CircleProgress = ({ size = 120, stroke = 6, max = 1, now = 1, children,strokeBackground, strokeColor = 'white' }) => {
  if (!strokeBackground) {
    strokeBackground = stroke
  }
  let progress = React.createRef()
  let c: any = null
  let deegres = 0;
  let floated = now/max *100

  React.useLayoutEffect(() => {
    console.log('refreshed')
    let can = progress.current
    var posX = size / 2,
        posY = size / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * floated;

        c = can.getContext('2d');
        c.lineCap = 'round';
        var acrInterval = setInterval (function() {
          deegres += 1;
          c.clearRect( 0, 0, can.width, can.height );
          procent = deegres / oneProcent;
    
          var grad= c.createLinearGradient(0, size, size, 0);
          grad.addColorStop(0, "#B139FE");
          grad.addColorStop(1, "#1E61EB");
          // spanProcent.innerHTML = procent.toFixed();
    
          let outer = stroke - strokeBackground

          c.beginPath();
          c.arc( posX, posY, size/2 -strokeBackground - outer/2, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
          if (strokeColor == 'white') {
            c.strokeStyle = 'rgba(255,255,255,0.25)';
          }
          if (strokeColor == 'gray') {
            c.strokeStyle = 'rgba(226, 227, 243, 0.65)';
          }
          c.lineWidth = `${strokeBackground}`;
          c.stroke();
    
          c.beginPath();
          c.strokeStyle = grad;
          c.lineWidth = `${stroke}`;
          c.arc( posX, posY, size/2 -stroke, (Math.PI/180) * 90, (Math.PI/180) * (90 - deegres), true );
          c.stroke();
    
          if( deegres >= result ) clearInterval(acrInterval);
    
        }, fps);
  }, [size, stroke])  
  
  return (
    <div className={styles["canvas-wrap"]} style={{ height: size, width: size }}>
      <canvas ref={progress} id="canvas" width={size} height={size}></canvas>
      <span className={styles.procent}>
        {children}
      </span>
    </div>
  )
}

export default CircleProgress