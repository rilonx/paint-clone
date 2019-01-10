import IPoint from '@/classes/IPoint';

export default class Drawer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D|null;
  private isPause: boolean;
  private isDrawing: boolean;
  private mouse: IPoint = {x: 0, y: 0};
  // Constructor
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.isPause = false;
    this.isDrawing = false;
    this.setDefaultBrush();
    this.addListeners();
  }
  // Public methods
  public destroy() {
    this.canvas.removeEventListener('mousemove', this.setMouse);
    this.canvas.removeEventListener('mousedown', this.startDraw);
    this.canvas.removeEventListener('mouseup', this.stopDraw);
  }
  public canDraw(): boolean {
    return this.isPause;
  }
  public onPause() {
    this.isPause = true;
  }
  public offPause() {
    this.isPause = true;
  }
  public draw() {
    if (this.ctx) {
      this.ctx.lineTo(this.mouse.x, this.mouse.y);
      this.ctx.stroke();
    }
  }
  public setMouse(event: MouseEvent) {
    this.mouse = {
      x: event.pageX - this.canvas.offsetLeft - 6,
      y: event.pageY - this.canvas.offsetTop - 64
    };
    if (this.isDrawing) {
      this.draw();
    }
  }
  public setDefaultBrush() {
    if (this.ctx) {
      this.ctx.lineWidth = 3;
      this.ctx.lineJoin = 'round';
      this.ctx.lineCap = 'round';
      this.ctx.strokeStyle = '#00CC99';
    }
  }
  private startDraw() {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.mouse.x, this.mouse.y);
    }
    this.isDrawing = true;
  }
  private stopDraw() {
    this.isDrawing = false;
  }
  private addListeners() {
    this.canvas.addEventListener('mousemove', this.setMouse.bind(this));
    this.canvas.addEventListener('mousedown', this.startDraw.bind(this));
    this.canvas.addEventListener('mouseup', this.stopDraw.bind(this));
  }
}
