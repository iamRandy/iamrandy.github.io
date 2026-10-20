export type View = 'home' | 'contact' | 'projects' | 'gallery';
export type SwapViewFn = (args: { whichView: View }) => void;