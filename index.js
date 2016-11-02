const jsword = require('ait-lang/interfaces');

const fillRect = jsword(function(height, width, {x, y}) {
  this.ctx.fillRect(x, y, width, height);
}, 'fillRect');

const clearRect = jsword(function(height, width, {x, y}) {
  this.ctx.clearRect(x, y, width, height);
}, 'clearRect');

const strokeRect = jsword(function(height, width, {x, y}) {
  this.ctx.strokeRect(x, y, width, height);
}, 'strokeRect');

const scale = jsword(function(y, x) {
  this.ctx.scale(x, y);
}, 'scale');

const rotate = jsword(function(deg) {
  this.ctx.rotate(deg);
}, 'rotate');

const translate = jsword(function(y, x) {
  this.ctx.translate(x, y);
}, 'translate');

const transform = jsword(function([m11, m12, m21, m22, dx, dy]) {
  this.ctx.transform(m11, m12, m21, m22, dx, dy);
}, 'transform');

const setTransform = jsword(function([m11, m12, m21, m22, dx, dy]) {
  this.ctx.setTransform([m11, m12, m21, m22, dx, dy]);
}, 'setTransform');

const lineWidth = jsword(function(width) {
  this.ctx.lineWidth = width;
}, 'lineWidth');

const lineCap = jsword(function(cap) {
  this.ctx.lineCap = cap;
}, 'lineCap');

const lineJoin = jsword(function(join) {
  this.ctx.lineJoin = join;
}, 'lineJoin');

const miterLimit = jsword(function(limit) {
  this.ctx.miterLimit = limit;
}, 'miterLimit');

const globalAlpha = jsword(function(alpha) {
  this.ctx.globalAlpha = alpha;
}, 'globalAlpha');

const globalCompositeOperation = jsword(function(operation) {
  this.ctx.globalCompositeOperation = operation;
}, 'globalCompositeOperation');

const strokeStyle = jsword(function(style) {
  this.ctx.strokeStyle = style;
}, 'strokeStyle');

const fillStyle = jsword(function(style) {
  this.ctx.fillStyle = style;
}, 'fillStyle');

const shadowOffsetX = jsword(function(offset) {
  this.ctx.shadowOffsetX = offset;
}, 'shadowOffsetX');

const shadowOffsetY = jsword(function(offset) {
  this.ctx.shadowOffsetY = offset;
}, 'shadowOffsetY');

const shadowBlur = jsword(function(blur) {
  this.ctx.shadowBlur = blur;
}, 'shadowBlur');

const shadowColor = jsword(function(color) {
  this.ctx.shadowColor = color;
}, 'shadowColor');

const beginPath = jsword(function() {
  this.ctx.beginPath();
}, 'beginPath');

const clip = jsword(function() {
  this.ctx.clip();
}, 'clip');

const quadraticCurveTo = jsword(function({x, y}, {x: cpx, y: cpy}) {
  this.ctx.quadraticCurveTo(cpx, cpy, x, y);
}, 'quadraticCurveTo');

const bezierCurveTo = jsword(function({x, y}, {x: cp2x, y: cp2y}, {x: cp1x, y: cp1y}) {
  this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
}, 'bezierCurveTo');

const moveTo = jsword(function({x, y}) {
  this.ctx.moveTo(x, y);
}, 'moveTo');

const lineTo = jsword(function({x, y}) {
  this.ctx.lineTo(x, y);
}, 'lineTo');

const rect = jsword(function(height, width, {x, y}) {
  this.ctx.rect(x, y, width, height);
}, 'rect');

const arc = jsword(function(anticlockwise, endAngle, startAngle, r, {x, y}) {
  this.ctx.arc(x, y, r, startAngle, endAngle, anticlockwise);
}, 'arc');

const arcTo = jsword(function(radius, {x: x2, y: y2}, {x: x1, y: y1}) {
  this.ctx.arcTo(x1, y1, x2, y2, radius);
}, 'arcTo');

const isPointInPath = jsword(function({x, y}) {
  this.ctx.isPointInPath(x, y);
}, 'isPointInPath');

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

const save = jsword(function() {
  return this.ctx.save;
}, 'save');

const restore = jsword(function() {
  return this.ctx.restore;
}, 'restore');

module.exports = {
  canvasHeight,
  canvasWidth,
  fillRect,
  scale,
  rotate,
  translate,
  transform,
  setTransform,
  lineWidth,
  globalAlpha,
  strokeStyle,
  fillStyle,
  beginPath,
  clip,
  quadraticCurveTo,
  bezierCurveTo,
  moveTo,
  lineTo,
  rect,
  closePath,
  stroke,
  arc,
  arcTo,
  isPointInPath,
  fill,
  save,
  restore
};
