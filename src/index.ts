import GameBoard from "./domain/entities/GameBoard";
import GameModel from "./domain/entities/GameModel";

import RendererImpl from "./presentation/renderer/RendererImpl";
import GameView from "./presentation/views/GameView";
import GamePresenter from "./presentation/presenters/GamePresenter";

import KeyboardInputHandler from "./data/input/KeyboardInputHandler";

(function() {
	document.addEventListener('DOMContentLoaded', () => {
		const canvas = document.getElementById('screen') as HTMLCanvasElement;
		const gameBoard = new GameBoard(25, 25);
		const gameModel = new GameModel(gameBoard);
		const renderer = new RendererImpl(canvas, gameModel);
		const gameView = new GameView(renderer, new KeyboardInputHandler());
		const gamePresenter = new GamePresenter(gameModel, gameView);

		gamePresenter.start()
		
	})
})();