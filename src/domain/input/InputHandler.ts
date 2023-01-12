export default interface InputHandler {
	getKeyPressed(key: number): boolean;
	destroy(): void;
}