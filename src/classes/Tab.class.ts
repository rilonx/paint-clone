export default class Tab {
  public id: number;
  private name: string;
  private wasChanged: boolean;
  private wasDisabled: boolean;
  private isActive: boolean;
  private title: string;
  // Constructor
  constructor(id: number, name: string, wasChanged: boolean = false, wasDisabled: boolean = false) {
    this.id = id;
    this.name = name;
    this.wasDisabled = wasDisabled;
    this.wasChanged = false;
    this.isActive = true;
    this.title = 'default';
  }
  // Public methods
  public getId(): number {
    return this.id;
  }
  public setId(value: number): void {
    this.id = value;
  }
  public getIsActive(): boolean {
    return this.isActive;
  }
  public setIsActive(value: boolean): void {
    this.isActive = value;
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public setChanged(value: boolean): void {
    if (this.wasChanged !== value) {
      this.wasChanged = value;
      this.updateTitle();
    }
    this.wasChanged = value;
  }
  public updateTitle(): void {
    this.title = (this.wasChanged) ? `* ${this.name}` : this.name;
  }
}
