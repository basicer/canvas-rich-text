import {StyleOptions} from "../StyleOptions";
import {configureCanvas} from "./configureCanvas";
import {getCanvas} from "../CanvasFactory";

let canvas : HTMLCanvasElement;
let canvasContext : CanvasRenderingContext2D | null;

export function measureText(text: string, style: StyleOptions): TextMetrics {
	if (canvas === undefined) {
		canvas = getCanvas()!;
		canvasContext = canvas?.getContext('2d')
	}
	if (!canvasContext) {
		return {} as any;
	}

	configureCanvas(style, canvasContext);

	return canvasContext.measureText(text);
}