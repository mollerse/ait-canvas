const {
  aitFFIUnwrapValue: unwrap,
  aitFFIWrapValue: wrap,
  aitFFI__F: aitFFIF,
  aitFFILookupVariable: lookup
} = require('ait-lang/ffi');
const { writeFileSync, createWriteStream } = require('fs');
const { join } = require('path');

var CTX = '__aitCanvasContext';

let Canvas = null;
try {
  Canvas = require('canvas');
} catch (e) {
  throw new Error(
    'ait-canvas error: This requres node-canvas to run. Please install the canvas-package.'
  );
}

function nodeCanvas() {
  if (this.type != 'node') {
    throw new Error('ait-canvas error: nodeCanvas not supported for runtimes other than node');
  }
  return wrap(new Canvas());
}

function writeImage(fname) {
  if (this.type != 'node') {
    throw new Error('ait-canvas error: writeImage not supported for runtimes other than node');
  }

  const out = join(this.root, unwrap(fname));
  const data = unwrap(lookup(this, CTX)).canvas.toBuffer();

  writeFileSync(out, data);
}


function writeImageAsync(fname) {
  if (this.type != 'node') {
    throw new Error('ait-canvas error: writeImage not supported for runtimes other than node');
  }

  const out = createWriteStream(join(this.root, unwrap(fname)));
  const stream = unwrap(lookup(this, CTX)).canvas.pngStream();

  stream.on('data', function(chunk) {
    out.write(chunk);
  });

  stream.on('end', function() {
    console.log('ait-canvas: image saved');
  });
}

module.exports = {
  nodeCanvas: aitFFIF(0, 'nodeCanvas', nodeCanvas),
  writeImage: aitFFIF(1, 'writeImage', writeImage),
  writeImageAsync: aitFFIF(1, 'writeImageAsyc', writeImageAsync)
};
