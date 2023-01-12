import Food from "./Food";
import Snake from "./Snake";

export default class GameBoard {
	private width: number;
	private height: number;
	private food: Food;
	private snake: Snake;

	private atLeastOneCollisionHappened: boolean;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.food = new Food(this.getRandomX(), this.getRandomY());
		this.snake = new Snake(this.getRandomX(), this.getRandomY());
		this.atLeastOneCollisionHappened = false;
	}

	public get Snake(): Snake {
		return this.snake;
	}

	public get Food(): Food {
		return this.food;
	}

	public get Width(): number {
		return this.width;
	}
	
	public get Height(): number {
		return this.height;
	}

	public update() {
		this.snake.move();
		if (this.checkCollision()) {
			// handle collision
			this.atLeastOneCollisionHappened = true;
		}
		if (this.checkFoodCollision()) {
			this.snake.grow();
			this.food = new Food(this.getRandomX(), this.getRandomY());
		}
	}

	public gameBoardHasCollisions(): boolean {
		return this.atLeastOneCollisionHappened;
	}

	private checkCollision(): boolean {
		const [x, y] = this.snake.getHead();
		if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
			//collision with the walls
			return true;
		}
		const body = this.snake.getBody();
		for (let i = 1; i < body.length; i++) {
			if (x === body[i][0] && y === body[i][1]) {
				//collision with the snake's body
				return true;
			}
		}
		return false;
	}

	private checkFoodCollision(): boolean {
		const [headX, headY] = this.snake.getHead();
		const [foodX, foodY] = this.food.getPosition();
		return headX === foodX && headY === foodY;
	}

	private getRandomX(): number {
		return Math.floor(Math.random() * this.width);
	}

	private getRandomY(): number {
		return Math.floor(Math.random() * this.height);
	}
}
