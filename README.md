# `ait-canvas`

Canvas words for the Ait Language

## Install

`npm install mollerse/ait-canvas`

## Usage

### Browser
```ait
@load ait-canvas ;

"canvas" createElement canvasContext
```

Load the module. Create a canvas-element (or grab an existing one, doesn't matter) and grab the canvasContext. Now you can use the canvas words in this pacakge.

### Node

The canvas is normaly not available in node, but there is a package called `canvas` which can be used. The bindings for this is available in the `node.js` file. It can be used like this:

```ait
@load ait-canvas ;
@load ait-canvas/node ;

nodeCanvas canvasContext
```

The main difference is the `nodeCanvas` word which gives you an instance of `node-canvas`.

## Still missing

- Image drawing
- Text
- Pixel manipulation
