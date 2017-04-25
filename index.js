const jsword = require('ait-lang/interfaces');

const fillRect = jsword('fillRect', function(height, width, [x, y]) {
  this.ctx.fillRect(x, y, width, height);
});

const clearRect = jsword('clearRect', function(height, width, [x, y]) {
  this.ctx.clearRect(x, y, width, height);
});

const strokeRect = jsword('strokeRect', function(height, width, [x, y]) {
  this.ctx.strokeRect(x, y, width, height);
});

const scale = jsword('scale', function(y, x) {
  this.ctx.scale(x, y);
});

const rotate = jsword('rotate', function(deg) {
  this.ctx.rotate(deg);
});

const translate = jsword('translate', function(y, x) {
  this.ctx.translate(x, y);
});

const transform = jsword('transform', function([m11, m12, m21, m22, dx, dy]) {
  this.ctx.transform(m11, m12, m21, m22, dx, dy);
});

const setTransform = jsword('setTransform', function([m11, m12, m21, m22, dx, dy]) {
  this.ctx.setTransform([m11, m12, m21, m22, dx, dy]);
});

const lineWidth = jsword('lineWidth', function(width) {
  this.ctx.lineWidth = width;
});

const lineCap = jsword('lineCap', function(cap) {
  this.ctx.lineCap = cap;
});

const lineJoin = jsword('lineJoin', function(join) {
  this.ctx.lineJoin = join;
});

const miterLimit = jsword('miterLimit', function(limit) {
  this.ctx.miterLimit = limit;
});

const globalAlpha = jsword('globalAlpha', function(alpha) {
  this.ctx.globalAlpha = alpha;
});

const globalCompositeOperation = jsword('globalCompositeOperation', function(operation) {
  this.ctx.globalCompositeOperation = operation;
});

const strokeStyle = jsword('strokeStyle', function(style) {
  this.ctx.strokeStyle = style;
});

const fillStyle = jsword('fillStyle', function(style) {
  this.ctx.fillStyle = style;
});

const shadowOffsetX = jsword('shadowOffsetX', function(offset) {
  this.ctx.shadowOffsetX = offset;
});

const shadowOffsetY = jsword('shadowOffsetY', function(offset) {
  this.ctx.shadowOffsetY = offset;
});

const shadowBlur = jsword('shadowBlur', function(blur) {
  this.ctx.shadowBlur = blur;
});

const shadowColor = jsword('shadowColor', function(color) {
  this.ctx.shadowColor = color;
});

const beginPath = jsword('beginPath', function() {
  this.ctx.beginPath();
});

const clip = jsword('clip', function() {
  this.ctx.clip();
});

const quadraticCurveTo = jsword('quadraticCurveTo', function([x, y], [cpx, cpy]) {
  this.ctx.quadraticCurveTo(cpx, cpy, x, y);
});

const bezierCurveTo = jsword('bezierCurveTo', function([x, y], [cp2x, cp2y], [cp1x, cp1y]) {
  this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
});

const moveTo = jsword('moveTo', function([x, y]) {
  this.ctx.moveTo(x, y);
});

const lineTo = jsword('lineTo', function([x, y]) {
  this.ctx.lineTo(x, y);
});

const rect = jsword('rect', function(height, width, [x, y]) {
  this.ctx.rect(x, y, width, height);
});

const arc = jsword('arc', function(anticlockwise, endAngle, startAngle, r, [x, y]) {
  this.ctx.arc(x, y, r, startAngle, endAngle, anticlockwise);
});

const arcTo = jsword('arcTo', function(radius, [x2, y2], [x1, y1]) {
  this.ctx.arcTo(x1, y1, x2, y2, radius);
});

const isPointInPath = jsword('isPointInPath', function([x, y]) {
  this.ctx.isPointInPath(x, y);
});

const closePath = jsword('closePath', function() {
  this.ctx.closePath();
});

const stroke = jsword('stroke', function() {
  this.ctx.stroke();
});

const fill = jsword('fill', function() {
  this.ctx.fill();
});

const canvasHeight = jsword('canvasHeight', function() {
  return this.ctx.canvas.height;
});

const canvasWidth = jsword('canvasWidth', function() {
  return this.ctx.canvas.width;
});

const save = jsword('save', function() {
  this.ctx.save();
});

const restore = jsword('restore', function() {
  this.ctx.restore();
});

module.exports = {
  canvasHeight,
  canvasWidth,
  strokeRect,
  fillRect,
  clearRect,
  scale,
  rotate,
  translate,
  transform,
  setTransform,
  lineWidth,
  lineJoin,
  lineCap,
  miterLimit,
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
  globalCompositeOperation,
  shadowOffsetX,
  shadowOffsetY,
  shadowBlur,
  shadowColor,
  save,
  restore
};
