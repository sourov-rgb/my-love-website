import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

// Draw a small heart shape
function createHeartShape(ctx) {
  ctx.beginPath();
  ctx.moveTo(10, 5);
  ctx.bezierCurveTo(10, 0, 0, 0, 0, 5);
  ctx.bezierCurveTo(0, 10, 10, 15, 10, 20);
  ctx.bezierCurveTo(10, 15, 20, 10, 20, 5);
  ctx.bezierCurveTo(20, 0, 10, 0, 10, 5);
  ctx.closePath();
  ctx.fill();
}

function ConfettiHearts() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={130}
        recycle={true}
        gravity={0.02}  // Falls slower
        wind={0.01}
        drawShape={(ctx) => createHeartShape(ctx)}
        initialVelocityY={3}  // slower initial falling speed
        colors={['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb','#02f242','#1602f2','#be7ee6','#7ee6a6']}
        tweenDuration={10000} // slows down the rotation and motion change
      />
    </div>
  );
}

export default ConfettiHearts;
