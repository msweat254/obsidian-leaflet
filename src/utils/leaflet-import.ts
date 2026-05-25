import { MAP_OVERLAY_STROKE_OPACITY, MAP_OVERLAY_STROKE_WIDTH } from ".";
import type * as Leaflet from "leaflet";
import { FullscreenPlugin } from "./fullscreen/fullscreen";

declare global {
    interface Window {
        [LeafletSymbol]: typeof Leaflet;
    }
}

export const LeafletSymbol = "OBSIDIAN_LEAFLET_PLUGIN";

const WindowL = window.L;
if (!window.L) {
    require("leaflet");
}

const L = window.L;
window[LeafletSymbol] = L;
L.Circle.mergeOptions({
    weight: MAP_OVERLAY_STROKE_WIDTH,
    opacity: MAP_OVERLAY_STROKE_OPACITY
});

FullscreenPlugin(L);

const hotline = require("leaflet-hotline");
if (typeof hotline === "function") {
    hotline(L);
}

if (WindowL !== undefined) {
    window.L = WindowL;
}
