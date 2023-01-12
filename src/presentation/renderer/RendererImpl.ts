import Renderer from "domain/renderer/Renderer";
import GameModel from "domain/entities/GameModel";

export default class RendererImpl implements Renderer {
	static CELL_SIZE = 20;
	
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	private gameModel: GameModel;

	constructor(canvas: HTMLCanvasElement, gameModel: GameModel) {
		this.canvas = canvas;
		this.context = this.canvas.getContext("2d");
		this.gameModel = gameModel;

		// Set the canvas size to match the game board size
		this.canvas.width = this.gameModel.GameBoard.Width * RendererImpl.CELL_SIZE;
		this.canvas.height = this.gameModel.GameBoard.Height * RendererImpl.CELL_SIZE;
	}

	// Render the grid
	private renderGrid() {
		this.context.strokeStyle = "#ccc";
		for (let i = 0; i <= this.gameModel.GameBoard.Width; i++) {
			this.context.beginPath();
			this.context.moveTo(i * RendererImpl.CELL_SIZE, 0);
			this.context.lineTo(i * RendererImpl.CELL_SIZE, this.canvas.height);
			this.context.stroke();
		}
		for (let j = 0; j <= this.gameModel.GameBoard.Height; j++) {
			this.context.beginPath();
			this.context.moveTo(0, j * RendererImpl.CELL_SIZE);
			this.context.lineTo(this.canvas.width, j * RendererImpl.CELL_SIZE);
			this.context.stroke();
		}
	}

	// Render the snake
	private renderSnake() {
		this.context.fillStyle = "green";
		this.gameModel.GameBoard.Snake.getBody().forEach(([x, y]) => {
			this.context.fillRect(x * RendererImpl.CELL_SIZE, y * RendererImpl.CELL_SIZE, RendererImpl.CELL_SIZE, RendererImpl.CELL_SIZE);
		});
	}

	// Render the food
	private renderFood() {
		this.context.fillStyle = "red";
		const [x, y] = this.gameModel.GameBoard.Food.getPosition();
		this.context.fillRect(x * RendererImpl.CELL_SIZE, y * RendererImpl.CELL_SIZE, RendererImpl.CELL_SIZE, RendererImpl.CELL_SIZE);
	}

	// The main render function
	public render(): void {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.renderGrid();
		this.renderSnake();
		this.renderFood();
	}

}