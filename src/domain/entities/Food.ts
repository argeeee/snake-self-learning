export default class Food {
	private x: number;
	private y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public getPosition(): [number, number] {
		return [this.x, this.y];
	}
}
