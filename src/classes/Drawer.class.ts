export default class Drawer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D|null;
  // Constructor
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  }
  // Public methods
  public destroy() {
    console.log('destroy instance');
    // todo destroy listeners
  }
}
