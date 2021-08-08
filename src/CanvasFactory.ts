
type CanvasFactory = () => HTMLCanvasElement | null;

let canvasProvider : CanvasFactory = () => (typeof document !== 'undefined'
    ? document.createElement('canvas')
    : null);


export function getCanvas() {
    return canvasProvider();
}

export function setProvider(provider:CanvasFactory) {
    canvasProvider = provider;
}