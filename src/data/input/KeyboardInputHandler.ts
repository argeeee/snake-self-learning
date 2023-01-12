import InputHandler from "domain/input/InputHandler";

export default class KeyboardInputHandler implements InputHandler {

	private keys: { [key: number]: boolean; } = {};

	constructor() {
		window.addEventListener("keydown", this.onKeyDown.bind(this));
		window.addEventListener("keyup", this.onKeyUp.bind(this));
	}

	getKeyPressed(key: number): boolean {
		return this.keys[key] === true;
	}

	public onKeyDown = (event: KeyboardEvent) => {
		this.keys[event.keyCode] = true;
	};

	public onKeyUp = (event: KeyboardEvent) => {
		this.keys[event.keyCode] = false;
	};

	public destroy() {
		window.removeEventListener("keydown", this.onKeyDown.bind(this));
		window.removeEventListener("keyup", this.onKeyUp.bind(this));
	}
}
