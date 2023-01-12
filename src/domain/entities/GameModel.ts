import Food from "domain/entities/Food";
import GameBoard from "domain/entities/GameBoard";
import Snake from "domain/entities/Snake";

export default class GameModel {
	private gameBoard: GameBoard;
	private snake: Snake;
	private food: Food;

	constructor(gameBoard: GameBoard) {
		this.gameBoard = gameBoard;
		this.snake = gameBoard.Snake;
		this.food = gameBoard.Food;
	}

	public get Snake(): Snake {
		return this.snake;
	}

	public get Food(): Food {
		return this.food;
	}

	public get GameBoard(): GameBoard {
		return this.gameBoard;
	}

	public update() {
		this.gameBoard.update()
	}
}