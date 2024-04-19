import React from "react";
import { useOnDraw } from "../hooks";
import state from "../store";
import { useSnapshot } from "valtio";
function Canvas({ width, height }: { width: number; height: number }) {
  const snap = useSnapshot(state);
  const {
    setCanvasRef,
    onCanvasMouseDown
} = useOnDraw(onDraw);
  function onDraw(ctx: any, point: any, prevPoint: any) {
    drawLine(prevPoint, point, ctx, "#fff", 2);
  }
  function drawLine(start: any, end: any, ctx: any, color: any, width: any) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }

  return (
    <canvas
      width={width}
      height={height}
      className="border border-black"
      ref={setCanvasRef}
      onMouseDown={onCanvasMouseDown}
    />
  );
}

export default Canvas;