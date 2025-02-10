import { useEffect, useRef } from "react";

const GradientCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.55;  
    };

    const drawSlope = () => {
      resizeCanvas();

      // Create gradient from bottom left to top right
      const gradient = ctx.createLinearGradient(
        0, canvas.height,  // Start from bottom left
        canvas.width, 0    // End at top right
      );

      // Update color stops
      gradient.addColorStop(0, "#9d3789");    
      gradient.addColorStop(0.3, "#e23a78");  
      gradient.addColorStop(0.6, "#eb612f");  
      gradient.addColorStop(1, "#933090");    

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fill background with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      //  diagonal slope 
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);  // Start from bottom left corner

      // Draw a straight line from bottom left to top right
      ctx.lineTo(canvas.width, canvas.height * 0.8);  

      // Complete the shape
      ctx.lineTo(canvas.width, canvas.height);    // Line to bottom right
      ctx.lineTo(0, canvas.height);               // Line back to start
      ctx.closePath();

      // Fill the slope with white
      ctx.fillStyle = "white";
      ctx.fill();
    };


    drawSlope();

    // Handle resize
    window.addEventListener("resize", drawSlope);

    return () => {
      window.removeEventListener("resize", drawSlope);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full z-10"  // Set the height to cover the top part of the screen
    />
  );
};

export default GradientCanvas;
