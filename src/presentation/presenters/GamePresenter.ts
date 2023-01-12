import Direction from "domain/entities/Direction";
import GameModel from "domain/entities/GameModel";
import GameView from "presentation/views/GameView";

export default class GamePresenter {
	private gameModel: GameModel;
	private gameView: GameView;

	private isRunning: boolean;

	constructor(gameModel: GameModel, gameView: GameView) {
		this.gameModel = gameModel;
		this.gameView = gameView;

		this.isRunning = false;
	}

	public start() {
		this.isRunning = true;
		this.gameLoop();
	}

	public stop() {
		this.isRunning = false;
	}

	private gameLoop() {
		if (!this.isRunning) {
			return;
		}
		this.update();
		this.render();

		setTimeout(() => {
			this.gameLoop();
		}, 75);

		// TODO
		// requestAnimationFrame(() => {
		// });
	}

	private update() {
		this.gameView.updateInput()
		const direction = this.gameView.getKeyboardInput();
		if (direction) {
			this.changeDirection(direction);
		}
		this.gameModel.update();
	}

	private render() {
		this.gameView.render();
	}

	private changeDirection(newDirection: Direction) {
		this.gameModel.GameBoard.Snake.changeDirection(newDirection);
	}
}
