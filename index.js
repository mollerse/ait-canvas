const jsword = require('ait-lang/interfaces');

const fillRect = jsword(function(height, width, y, x) {
  this.ctx.fillRect(x, y, width, height);
}, 'fillRect');

const translate = jsword(function(y, x) {
  this.ctx.translate(x, y);
}, 'translate');

const lineWidth = jsword(function(width) {
  this.ctx.lineWidth = width;
}, 'lineWidth');

const globalAlpha = jsword(function(alpha) {
  this.ctx.globalAlpha = alpha;
}, 'globalAlpha');

const strokeStyle = jsword(function(style) {
  this.ctx.strokeStyle = style;
}, 'strokeStyle');

const fillStyle = jsword(function(style) {
  this.ctx.fillStyle = style;
}, 'fillStyle');

const beginPath = jsword(function() {
  this.ctx.beginPath();
}, 'beginPath');

const quadraticCurveTo = jsword(function({x: cx, y: cy}, {x, y}) {
  this.ctx.quadraticCurveTo(x, y, cx, cy);
}, 'quadraticCurveTo');

const moveTo = jsword(function({x, y}) {
  this.ctx.moveTo(x, y);
}, 'moveTo');

const arc = jsword(function(anticlockwise, endAngle, startAngle, r, {x, y}) {
  this.ctx.arc(x, y, r, startAngle, endAngle, anticlockwise);
}, 'arc');

const closePath = jsword(function() {
  this.ctx.closePath();
}, 'closePath');

const stroke = jsword(function() {
  this.ctx.stroke();
}, 'stroke');

const fill = jsword(function() {
  this.ctx.fill();
}, 'fill');

const canvasHeight = jsword(function() {
  return this.canvas.height;
}, 'canvasHeight');

const canvasWidth = jsword(function() {
  return this.canvas.width;
}, 'canvasWidth');

module.exports = {
  canvasHeight,
  canvasWidth,
  fillRect,
  translate,
  lineWidth,
  globalAlpha,
  strokeStyle,
  fillStyle,
  beginPath,
  quadraticCurveTo,
  moveTo,
  closePath,
  stroke,
  arc,
  fill
};
