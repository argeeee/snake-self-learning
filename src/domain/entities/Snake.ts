import Direction from "./Direction";

export default class Snake {
	private x: number;
	private y: number;
	private body: Array<[number, number]>;
	private direction: Direction;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
		this.body = [[x, y]];
		this.direction = Direction.Right;
	}

	public move() {
		let x = this.x;
		let y = this.y;

		switch (this.direction) {
			case Direction.Right:
				x++;
				break;
			case Direction.Left:
				x--;
				break;
			case Direction.Up:
				y--;
				break;
			case Direction.Down:
				y++;
				break;
		}

		this.x = x;
		this.y = y;
		this.body.unshift([x, y]);
		this.body.pop();
	}

	public grow() {
		this.body.push(this.getTail());
	}
	public getTail(): [number, number] {
		return this.body[this.body.length - 1];
	}

	public changeDirection(newDirection: Direction) {
		this.direction = newDirection;
	}

	public getHead(): [number, number] {
		return this.body[0];
	}

	public getBody(): Array<[number, number]> {
		return this.body;
	}
}
