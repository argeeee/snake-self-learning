import Direction from "../../domain/entities/Direction";
import InputHandler from "../../domain/input/InputHandler";
import Renderer from "../../domain/renderer/Renderer";

export default class GameView {
	static LEFT_KEY = 37;
	static UP_KEY = 38;
	static RIGHT_KEY = 39;
	static DOWN_KEY = 40;

	static KEYS = [
		GameView.LEFT_KEY,
		GameView.UP_KEY,
		GameView.RIGHT_KEY,
		GameView.DOWN_KEY,
	];

	private renderer: Renderer;
	private inputHandler: InputHandler;
	public input: Direction;

	constructor(renderer: Renderer, inputHandler: InputHandler) {
		this.renderer = renderer;
		this.inputHandler = inputHandler;
	}

	public updateInput() {
		for (const keyCode of GameView.KEYS) {
			if (this.inputHandler.getKeyPressed(keyCode)) {
				this.input = this.inputFromKeyCode(keyCode);
				break;
			}
		}
	}

	public render() {
		this.renderer.render()
	}

	private inputFromKeyCode = (keyCode: number) => {
		switch (keyCode) {
			case GameView.LEFT_KEY:
				return Direction.Left;
			case GameView.UP_KEY:
				return Direction.Up;
			case GameView.RIGHT_KEY:
				return Direction.Right;
			case 40:
				return Direction.Down;
		}
		return undefined;
	}

	public getKeyboardInput(): Direction {
		return this.input;
	}
}