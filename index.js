const {
  aitFFIWrapValue: wrap,
  aitFFIUnwrapValue: unwrap,
  aitFFI__F,
  aitFFILookupVariable: lookup,
  aitFFIStoreRootVariable: store
} = require('ait-lang/ffi');

function unwrapper(fn) {
  return function(...args) {
    const unwrappedArgs = args.map(function(arg) {
      if (Array.isArray(arg.body)) {
        return arg.body.map(unwrap).reverse();
      } else {
        return unwrap(arg);
      }
    });
    fn.apply(this, unwrappedArgs);
  };
}

var CTX = '__aitCanvasContext';

function canvasContext(canvas) {
  var ctx = wrap(unwrap(canvas).getContext('2d'));
  store(this, CTX, ctx);
  return ctx;
}

function canvasDimensions(height, width) {
  const c = unwrap(lookup(this, CTX));
  c.canvas.height = height;
  c.canvas.width = width;
}

function fillRect(height, width, [x, y]) {
  unwrap(lookup(this, CTX)).fillRect(x, y, width, height);
}

function clearRect(height, width, [x, y]) {
  unwrap(lookup(this, CTX)).clearRect(x, y, width, height);
}

function strokeRect(height, width, [x, y]) {
  unwrap(lookup(this, CTX)).strokeRect(x, y, width, height);
}

function scale(y, x) {
  unwrap(lookup(this, CTX)).scale(x, y);
}

function rotate(deg) {
  unwrap(lookup(this, CTX)).rotate(deg);
}

function translate(y, x) {
  unwrap(lookup(this, CTX)).translate(x, y);
}

function transform([m11, m12, m21, m22, dx, dy]) {
  unwrap(lookup(this, CTX)).transform(m11, m12, m21, m22, dx, dy);
}

function setTransform([m11, m12, m21, m22, dx, dy]) {
  unwrap(lookup(this, CTX)).setTransform([m11, m12, m21, m22, dx, dy]);
}

function lineWidth(width) {
  unwrap(lookup(this, CTX)).lineWidth = width;
}

function lineCap(cap) {
  unwrap(lookup(this, CTX)).lineCap = cap;
}

function lineJoin(join) {
  unwrap(lookup(this, CTX)).lineJoin = join;
}

function miterLimit(limit) {
  unwrap(lookup(this, CTX)).miterLimit = limit;
}

function globalAlpha(alpha) {
  unwrap(lookup(this, CTX)).globalAlpha = alpha;
}

function globalCompositeOperation(operation) {
  unwrap(lookup(this, CTX)).globalCompositeOperation = operation;
}

function strokeStyle(style) {
  unwrap(lookup(this, CTX)).strokeStyle = style;
}

function fillStyle(style) {
  unwrap(lookup(this, CTX)).fillStyle = style;
}

function shadowOffsetX(offset) {
  unwrap(lookup(this, CTX)).shadowOffsetX = offset;
}

function shadowOffsetY(offset) {
  unwrap(lookup(this, CTX)).shadowOffsetY = offset;
}

function shadowBlur(blur) {
  unwrap(lookup(this, CTX)).shadowBlur = blur;
}

function shadowColor(color) {
  unwrap(lookup(this, CTX)).shadowColor = color;
}

function beginPath() {
  unwrap(lookup(this, CTX)).beginPath();
}

function clip() {
  unwrap(lookup(this, CTX)).clip();
}

function quadraticCurveTo([x, y], [cpx, cpy]) {
  unwrap(lookup(this, CTX)).quadraticCurveTo(cpx, cpy, x, y);
}

function bezierCurveTo([x, y], [cp2x, cp2y], [cp1x, cp1y]) {
  unwrap(lookup(this, CTX)).bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
}

function moveTo([x, y]) {
  unwrap(lookup(this, CTX)).moveTo(x, y);
}

function lineTo([x, y]) {
  unwrap(lookup(this, CTX)).lineTo(x, y);
}

function rect(height, width, [x, y]) {
  unwrap(lookup(this, CTX)).rect(x, y, width, height);
}

function arc(anticlockwise, endAngle, startAngle, r, [x, y]) {
  unwrap(lookup(this, CTX)).arc(x, y, r, startAngle, endAngle, anticlockwise);
}

function arcTo(radius, [x2, y2], [x1, y1]) {
  unwrap(lookup(this, CTX)).arcTo(x1, y1, x2, y2, radius);
}

function isPointInPath([x, y]) {
  unwrap(lookup(this, CTX)).isPointInPath(x, y);
}

function closePath() {
  unwrap(lookup(this, CTX)).closePath();
}

function stroke() {
  unwrap(lookup(this, CTX)).stroke();
}

function fill() {
  unwrap(lookup(this, CTX)).fill();
}

function canvasHeight() {
  return wrap(unwrap(lookup(this, CTX)).canvas.height);
}

function canvasWidth() {
  return wrap(unwrap(lookup(this, CTX)).canvas.width);
}

function save() {
  unwrap(lookup(this, CTX)).save();
}

function restore() {
  unwrap(lookup(this, CTX)).restore();
}

function writeImage() {
  if (this.type != 'node') {
    throw new Error('ait-canvas error: writeImage not supported for runtimes other than node');
  }
}

function createLinearGradient([x2, y2], [x1, y1]) {
  return this.ctx.createLinearGradient(x1, y1, x2, y2);
}

function createRadialGradient(r2, [x2, y2], r1, [x1, y1]) {
  return this.ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
}

function addColorStop(color, offset, gradient) {
  gradient.addColorStop(offset, color);
  return gradient;
}

module.exports = {
  canvasContext: aitFFI__F(1, 'canvasContext', canvasContext),
  canvasDimensions: aitFFI__F(2, 'canvasDimensions', unwrapper(canvasDimensions)),
  canvasHeight: aitFFI__F(0, 'canvasHeight', canvasHeight),
  canvasWidth: aitFFI__F(0, 'canvasWidth', canvasWidth),
  fillRect: aitFFI__F(3, 'fillRect', unwrapper(fillRect)),
  clearRect: aitFFI__F(3, 'clearRect', unwrapper(clearRect)),
  strokeRect: aitFFI__F(3, 'strokeRect', unwrapper(strokeRect)),
  scale: aitFFI__F(1, 'scale', unwrapper(scale)),
  rotate: aitFFI__F(1, 'rotate', unwrapper(rotate)),
  translate: aitFFI__F(2, 'translate', unwrapper(translate)),
  transform: aitFFI__F(1, 'transform', unwrapper(transform)),
  setTransform: aitFFI__F(1, 'setTransform', unwrapper(setTransform)),
  lineWidth: aitFFI__F(1, 'lineWidth', unwrapper(lineWidth)),
  globalAlpha: aitFFI__F(1, 'globalAlpha', unwrapper(globalAlpha)),
  strokeStyle: aitFFI__F(1, 'strokeStyle', unwrapper(strokeStyle)),
  fillStyle: aitFFI__F(1, 'fillStyle', unwrapper(fillStyle)),
  beginPath: aitFFI__F(0, 'beginPath', beginPath),
  clip: aitFFI__F(0, 'clip', clip),
  quadraticCurveTo: aitFFI__F(2, 'quadraticCurveTo', unwrapper(quadraticCurveTo)),
  bezierCurveTo: aitFFI__F(3, 'bezierCurveTo', unwrapper(bezierCurveTo)),
  moveTo: aitFFI__F(1, 'moveTo', unwrapper(moveTo)),
  lineTo: aitFFI__F(1, 'lineTo', unwrapper(lineTo)),
  rect: aitFFI__F(3, 'rect', unwrapper(rect)),
  closePath: aitFFI__F(0, 'closePath', closePath),
  stroke: aitFFI__F(0, 'stroke', stroke),
  arc: aitFFI__F(5, 'arc', unwrapper(arc)),
  arcTo: aitFFI__F(3, 'arcTo', unwrapper(arcTo)),
  isPointInPath: aitFFI__F(1, 'isPointInPath', unwrapper(isPointInPath)),
  fill: aitFFI__F(0, 'fill', fill),
  save: aitFFI__F(0, 'save', save),
  restore: aitFFI__F(0, 'restore', restore),
  lineCap: aitFFI__F(1, 'lineCap', unwrapper(lineCap)),
  lineJoin: aitFFI__F(1, 'lineJoin', unwrapper(lineJoin)),
  miterLimit: aitFFI__F(1, 'miterLimit', unwrapper(miterLimit)),
  globalCompositeOperation: aitFFI__F(
    1,
    'globalCompositeOperation',
    unwrapper(globalCompositeOperation)
  ),
  shadowOffsetX: aitFFI__F(1, 'shadowOffsetX', unwrapper(shadowOffsetX)),
  shadowOffsetY: aitFFI__F(1, 'shadowOffsetY', unwrapper(shadowOffsetY)),
  shadowBlur: aitFFI__F(1, 'shadowBlur', unwrapper(shadowBlur)),
  shadowColor: aitFFI__F(1, 'shadowColor', unwrapper(shadowColor)),
  createLinearGradient: aitFFI__F(2, 'createLinearGradient', createLinearGradient),
  createRadialGradient: aitFFI__F(4, 'createRadialGradient', createRadialGradient),
  addColorStop: aitFFI__F(3, 'addColorStop', addColorStop)
};
