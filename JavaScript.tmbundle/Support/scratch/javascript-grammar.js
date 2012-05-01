
// Unit Tests
// ==========
// Also, check the symbol list.

// Basic
// -----

// foldingStartMarker
/** START Section Name */

// foldingStopMarker
/* END Section Name **/

// Source
// ------

foo

// Keywords
// --------

// control
break case catch continue default do else finally for goto if import let package 
return switch throw try while

// operator
delete in instanceof new delete typeof with
!f f%b f&b f*b f-- f-b f++ f+b ~f f===b f==b f=b f!=b f!==b f<=b f>=b 
f<<=b f>>=b f>>>=b f<>b f&&b f||b f?:b f?b:b f*=b 
f/=b f%=b f+=b f-=b f&=b f^=b
(/= // ?

// other.directive
"use strict"
// other.object
this
super
arguments
this.prototype
this.constructor
this.caller
// other.environment
debugger

// Comments
// --------

// This is a line comment.
/** 
 * This is a documentation block comment. The JsDoc newline command should work.
 * Hit return =>
 */
/*
  This is a block comment. It's the line comment shortkey with `alt`.
  JsDoc newlines should not work. Hit return =>
*/
//<![CDATA[ 
// Here is some xhtml dom scripting.
$('<div>').show();
//]]>
<!--Here is an html line comment-->
<!--
  Here is an html block comment
-->

// Strings
// -------

"This is a double-quoted string, with tokenized quotes."
"
This is a block of double-quoted string.
And escaped \xff \277 \367 \377 \4 \a
"
'This is a single-quoted string, with tokenized quotes.'
'
This is a block of single-quoted string.
And escaped \xff \277 \367 \377 \4 \a
'
(/^(?<!T)(his) \s*is a regex pattern .*$/gi)
// Storage
// -------

// types
boolean byte char class double enum float function int interface long short var void

// modifiers
const export extends final implements native private protected public static 
synchronized throws transient volatile

// Constant
// --------

// language
true false null Infinity NaN undefined

// numeric
0x999999
0xAA99999999

// Punctuation
// -----------

// terminator
foo = bar;

// Meta
// ----

foo.bar 

// braces
{} {{}}.foo [] [[]].foo foo() (foo())


// Support
// -------

// dom
JSON Math window.JSON window.Math window window.URL URL applicationCache
window.applicationCache controllers window.controllers crypto window.crypto
defaultStatus window.defaultStatus dialogArguments window.dialogArguments closed
window.closed content window.content directories window.directories document
window.document frameElement window.frameElement frames window.frames fullScreen
window.fullScreen history window.history innerHeight window.innerHeight
innerWidth window.innerWidth length window.length location window.location
locationbar window.locationbar menubar window.menubar messageManager
window.messageManager mozAnimationStartTime window.mozAnimationStartTime
mozInnerScreenX window.mozInnerScreenX mozInnerScreenY window.mozInnerScreenY
mozPaintCount window.mozPaintCount navigator window.navigator window.screen
screen window.screenX window.screenY window.opener window.outerHeight
window.outerWidth window.parent window.personalbar window.scrollMaxX
window.scrollMaxY window.scrollX window.scrollY window.scrollbars window.self
window.sidebar window.status window.statusbar window.toolbar window.top
window.window window.pageXOffset window.pageYOffset screenX screenY opener
outerHeight outerWidth parent personalbar scrollMaxX scrollMaxY scrollX scrollY
scrollbars self sidebar status statusbar toolbar top pageXOffset pageYOffset
offscreenBuffering window.offscreenBuffering window.localStorage localStorage

navigator.appCodeName navigator.appName navigator.appVersion navigator.buildID
navigator.cookieEnabled navigator.javaEnabled navigator.language
navigator.mimeTypes navigator.mozIsLocallyAvailable navigator.onLine
navigator.oscpu navigator.platform navigator.plugins navigator.product
navigator.productSub navigator.registerContentHandler navigator.userAgent
navigator.vendor navigator.vendorSub navigator.geolocation
navigator.geolocation.getCurrentPosition navigator.geolocation.watchPosition
history.back history.forward history.go history.pushState history.replaceState
crypto.getRandomValues screen.availHeight screen.availLeft screen.availTop
screen.availWidth screen.colorDepth screen.height screen.left screen.pixelDepth
screen.top screen.width localStorage.clear localStorage.getItem localStorage.key
localStorage.removeItem localStorage.setItem location.assign location.hash
location.host location.hostname location.href location.origin location.pathname
location.port location.protocol location.search location.reload location.replace
URL.createObjectURL URL.revokeObjectURL menubar.visible locationbar.visible
toolbar.visible

window.screen.availHeight window.screen.availLeft window.screen.availTop
window.screen.availWidth window.screen.colorDepth window.screen.height
window.screen.left window.screen.pixelDepth window.screen.top
window.screen.width window.navigator.geolocation window.navigator.appCodeName
window.navigator.appName window.navigator.appVersion window.navigator.buildID
window.navigator.cookieEnabled window.navigator.javaEnabled
window.navigator.language window.navigator.mimeTypes
window.navigator.mozIsLocallyAvailable window.navigator.onLine
window.navigator.oscpu window.navigator.platform window.navigator.plugins
window.navigator.product window.navigator.productSub
window.navigator.registerContentHandler window.navigator.userAgent
window.navigator.vendor window.navigator.vendorSub window.URL.createObjectURL
window.URL.revokeObjectURL

// objects
console console.log console.warn console.info console.error console.time
console.timeEnd console.assert console.dir console.dirxml console.group
console.groupCollapsed console.groupEnd console.markTimeline console.memory
console.profile console.profileEnd console.profiles console.time console.timeEnd
console.timeStamp console.trace

// functions, properties
// language
decodeURI decodeURIComponent encodeURI encodeURIComponent eval
isFinite isNaN parseFloat parseInt uneval

{}.hasOwnProperty {}.isPrototypeOf {}.propertyIsEnumerable {}.toLocaleString
{}.toString {}.valueOf {}.call {}.apply {}.bind {}.name {}.length {}.reduce
{}.reduceRight {}.concat {}.every {}.filter {}.forEach {}.indexOf {}.join
{}.lastIndexOf {}.map {}.pop {}.push {}.reverse {}.shift {}.slice {}.some
{}.sort {}.splice {}.toSource {}.unshift {}.trim {}.trimLeft {}.trimRight
{}.anchor {}.big {}.blink {}.bold {}.charAt {}.charCodeAt {}.concat {}.fixed
{}.fontcolor {}.fontsize {}.fromCharCode {}.indexOf {}.italics {}.lastIndexOf
{}.link {}.localeCompare {}.match {}.quote {}.replace {}.search {}.small
{}.split {}.strike {}.sub {}.substr {}.substring {}.sup {}.toLocaleLowerCase
{}.toLocaleUpperCase {}.toLowerCase {}.toSource {}.toUpperCase
{}.prototype.hasOwnProperty {}.prototype.isPrototypeOf
{}.prototype.propertyIsEnumerable {}.prototype.toLocaleString
{}.prototype.toString {}.prototype.valueOf {}.prototype.call {}.prototype.apply
{}.prototype.bind {}.prototype.name {}.prototype.length {}.prototype.reduce
{}.prototype.reduceRight {}.prototype.concat {}.prototype.every
{}.prototype.filter {}.prototype.forEach {}.prototype.indexOf {}.prototype.join
{}.prototype.lastIndexOf {}.prototype.map {}.prototype.pop {}.prototype.push
{}.prototype.reverse {}.prototype.shift {}.prototype.slice {}.prototype.some
{}.prototype.sort {}.prototype.splice {}.prototype.toSource {}.prototype.unshift
{}.prototype.trim {}.prototype.trimLeft {}.prototype.trimRight
{}.prototype.anchor {}.prototype.big {}.prototype.blink {}.prototype.bold
{}.prototype.charAt {}.prototype.charCodeAt {}.prototype.concat
{}.prototype.fixed {}.prototype.fontcolor {}.prototype.fontsize
{}.prototype.fromCharCode {}.prototype.indexOf {}.prototype.italics
{}.prototype.lastIndexOf {}.prototype.link {}.prototype.localeCompare
{}.prototype.match {}.prototype.quote {}.prototype.replace {}.prototype.search
{}.prototype.small {}.prototype.split {}.prototype.strike {}.prototype.sub
{}.prototype.substr {}.prototype.substring {}.prototype.sup
{}.prototype.toLocaleLowerCase {}.prototype.toLocaleUpperCase
{}.prototype.toLowerCase {}.prototype.toSource {}.prototype.toUpperCase

Date.UTC Date.prototype.getDate Date.prototype.getDay Date.prototype.getFullYear
Date.prototype.getHours Date.prototype.getMilliseconds Date.prototype.getMinutes
Date.prototype.getMonth Date.prototype.getSeconds Date.prototype.getTime
Date.prototype.getTimezoneOffset Date.prototype.getUTCDate
Date.prototype.getUTCDay Date.prototype.getUTCFullYear
Date.prototype.getUTCHours Date.prototype.getUTCMilliseconds
Date.prototype.getUTCMinutes Date.prototype.getUTCMonth
Date.prototype.getUTCSeconds Date.prototype.getYear Date.prototype.now
Date.prototype.parse Date.prototype.setDate Date.prototype.setFullYear
Date.prototype.setHours Date.prototype.setMilliseconds Date.prototype.setMinutes
Date.prototype.setMonth Date.prototype.setSeconds Date.prototype.setTime
Date.prototype.setUTCDate Date.prototype.setUTCFullYear
Date.prototype.setUTCHours Date.prototype.setUTCMilliseconds
Date.prototype.setUTCMinutes Date.prototype.setUTCMonth
Date.prototype.setUTCSeconds Date.prototype.setYear Date.prototype.toDateString
Date.prototype.toGMTString Date.prototype.toISOString Date.prototype.toJSON
Date.prototype.toLocaleDateString Date.prototype.toLocaleFormat
Date.prototype.toLocaleString Date.prototype.toLocaleTimeString
Date.prototype.toSource Date.prototype.toTimeString Date.prototype.toUTCString
Date.prototype.valueOf

date.getDate date.getDay date.getFullYear date.getHours
date.getMilliseconds date.getMinutes date.getMonth date.getSeconds date.getTime
date.getTimezoneOffset date.getUTCDate date.getUTCDay date.getUTCFullYear
date.getUTCHours date.getUTCMilliseconds date.getUTCMinutes date.getUTCMonth
date.getUTCSeconds date.getYear date.now date.parse date.setDate
date.setFullYear date.setHours date.setMilliseconds date.setMinutes
date.setMonth date.setSeconds date.setTime date.setUTCDate date.setUTCFullYear
date.setUTCHours date.setUTCMilliseconds date.setUTCMinutes date.setUTCMonth
date.setUTCSeconds date.setYear date.toDateString date.toGMTString
date.toISOString date.toJSON date.toLocaleDateString date.toLocaleFormat
date.toLocaleString date.toLocaleTimeString date.toSource date.toTimeString
date.toUTCString date.valueOf

// dom

atob back blur btoa clearImmediate clearInterval clearTimeout close
confirm dump escape find focus forward getAttention getComputedStyle
getSelection home matchMedia moveBy moveTo open openDialog postMessage print
prompt requestAnimationFrame resizeBy resizeTo scroll scrollBy scrollByLines
scrollByPages scrollTo setCursor setImmediate setInterval setTimeout
showModalDialog sizeToContent stop unescape updateCommands
window.alert window.atob window.back window.blur window.btoa
window.clearImmediate window.clearInterval window.clearTimeout window.close
window.confirm window.dump window.escape window.find window.focus window.forward
window.getAttention window.getComputedStyle window.getSelection window.home
window.matchMedia window.moveBy window.moveTo window.open window.openDialog
window.postMessage window.print window.prompt window.requestAnimationFrame
window.resizeBy window.resizeTo window.scroll window.scrollBy
window.scrollByLines window.scrollByPages window.scrollTo window.setCursor
window.setImmediate window.setInterval window.setTimeout window.showModalDialog
window.sizeToContent window.stop window.unescape window.updateCommands
el.addEventListener elem.addEventListener element.addEventListener
element.baseURIObject element.blur element.childElementCount element.children
element.classList element.className element.click element.clientHeight
element.clientLeft element.clientTop element.clientWidth element.contentEditable
element.contentEditable element.dataset element.dir element.dispatchEvent
element.firstElementChild element.focus element.getAttribute
element.getAttributeNS element.getAttributeNode element.getAttributeNodeNS
element.getBoundingClientRect element.getClientRects
element.getElementsByTagName element.getElementsByTagNameNS element.hasAttribute
element.hasAttributeNS element.id element.innerHTML element.insertAdjacentHTML
element.isContentEditable element.isContentEditable element.item element.lang
element.lastElementChild element.mozMatchesSelector element.mozRequestFullScreen
element.mozRequestFullScreen element.mozRequestFullScreen element.name
element.nextElementSibling element.offsetHeight element.offsetLeft
element.offsetParent element.offsetTop element.offsetWidth
element.onafterscriptexecute element.onbeforescriptexecute element.onblur
element.onchange element.onclick element.oncopy element.oncut element.ondblclick
element.onfocus element.onkeydown element.onkeypress element.onkeyup
element.onmousedown element.onmousemove element.onmouseout element.onmouseover
element.onmouseup element.onpaste element.onresize element.onscroll
element.outerHTML element.previousElementSibling element.querySelector
element.querySelectorAll element.removeAttribute element.removeAttributeNS
element.removeAttributeNode element.removeEventListener element.scrollHeight
element.scrollIntoView element.scrollLeft element.scrollTop element.scrollWidth
element.setAttribute element.setAttributeNS element.setAttributeNode
element.setAttributeNodeNS element.setCapture element.style element.tabIndex
element.tagName element.title worker.postMessage worker.terminate

event.cancelBubble event.cancelable event.clientX event.clientY event.ctrlKey
event.currentTarget event.defaultPrevented event.detail event.eventPhase
event.explicitOriginalTarget event.initEvent event.initKeyEvent
event.initMouseEvent event.initUIEvent event.metaKey event.mozInputSource
event.originalTarget event.preventDefault event.relatedTarget event.screenX
event.screenY event.shiftKey event.stopImmediatePropagation
event.stopPropagation event.target event.timeStamp event.type event.view
event.acceleration event.accelerationIncludingGravity event.interval
event.rotationRate event.absolute event.alpha event.beta event.gamma

form.acceptCharset form.action form.elements form.enctype form.length
form.method form.name form.reset form.submit form.target

range.cloneContents range.cloneRange range.collapse range.collapsed
range.commonAncestorContainer range.compareBoundaryPoints range.compareNode
range.comparePoint range.createContextualFragment range.deleteContents
range.detach range.endContainer range.endOffset range.extractContents
range.getBoundingClientRect range.getClientRects range.insertNode
range.intersectsNode range.isPointInRange range.selectNode
range.selectNodeContents range.setEnd range.setEndAfter range.setEndBefore
range.setStart range.setStartAfter range.setStartBefore range.startContainer
range.startOffset range.surroundContents range.toString

table.align table.bgColor table.border table.caption table.cellPadding
table.cellSpacing table.createCaption table.createTFoot table.createTHead
table.deleteCaption table.deleteRow table.deleteTFoot table.deleteTHead
table.frame table.insertRow table.rows table.rules table.summary table.tBodies
table.tFoot table.tHead table.width

document.URL document.activeElement document.adoptNode document.alinkColor
document.anchors document.applets document.async document.baseURIObject
document.bgColor document.body document.characterSet document.clear
document.close document.compatMode document.contentType document.cookie
document.createAttribute document.createCDATASection document.createComment
document.createDocumentFragment document.createElement document.createElementNS
document.createEntityReference document.createEvent document.createExpression
document.createNSResolver document.createProcessingInstruction
document.createRange document.createTextNode document.createTreeWalker
document.currentScript document.defaultView document.doctype
document.documentElement document.documentURI document.documentURIObject
document.domain document.elementFromPoint document.embeds
document.enableStyleSheetsForSet document.evaluate document.fgColor
document.forms document.getBoxObjectFor document.getElementById
document.getElementsByClassName document.getElementsByName
document.getElementsByTagName document.getElementsByTagNameNS document.hasFocus
document.height document.images document.implementation document.importNode
document.inputEncoding document.lastModified document.lastStyleSheetSet
document.linkColor document.links document.load document.loadOverlay
document.location document.mozCancelFullScreen document.mozFullScreen
document.mozFullScreenElement document.mozFullScreenEnabled
document.mozSetImageElement document.mozSyntheticDocument
document.onreadystatechange document.open document.plugins document.popupNode
document.preferredStyleSheetSet document.queryCommandSupported
document.querySelector document.querySelectorAll document.readyState
document.referrer document.releaseCapture document.scripts document.scripts
document.selectedStyleSheetSet document.styleSheetSets document.styleSheets
document.title document.tooltipNode document.vlinkColor document.width
document.write document.writeln document.xmlVersion

// events (dirty)
onrowsinserted onrowsdelete onrowenter onrowexit onresizestart onresizeend
onresizeend onreset onreadystatechange onmouseout onmouseover onmousedown
onmouseup onmousemove onbeforecut onbeforedeactivate onbeforeunload
onbeforeupdate onbeforepaste onbeforeprint onbeforeeditfocus onbeforeactivate
onblur onscroll onstop onsubmit onselect onselectstart onselectionchange onhover
onhelp onchange oncontextmenu oncontrolselect oncut oncellchange onclick onclose
ondeactivate ondatasetchanged ondatasetcomplete ondataavailable ondrop ondrag 
ondragstart ondragover ondragdrop ondragenter ondragend ondragleave ondblclick
onunload onpaste onpropertychange onerror onerrorupdate onkeydown onkeyup
onkeypress onfocus onload onactivate onafterupdate onafterprint onabort
ondevicemotion ondeviceorientation onhashchange onmozbeforepaint onpaint 
onpopstate

// types
// language
Array Boolean Date Function Iterator Number Object RegExp String ArrayBuffer
Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array
Uint32Array Uint8Array Uint8ClampedArray Error EvalError InternalError
RangeError ReferenceError StopIteration SyntaxError TypeError URIError
DataView
// dom
Attr Audio AudioProcessingEvent BeforeLoadEvent Blob CDATASection CSSCharsetRule
CSSFontFaceRule CSSImportRule CSSMediaRule CSSPageRule CSSPrimitiveValue CSSRule
CSSRuleList CSSStyleDeclaration CSSStyleRule CSSStyleSheet DOMException
DOMImplementation DOMParser DOMSettableTokenList DOMStringList DOMStringMap
DOMTokenList DOMDateInput Document Element Entity EntityReference ErrorEvent
Event EventException EventSource File FileError FileList FileReader FormData
HashChangeEvent Image Intent KeyboardEvent MediaController MediaError MediaList
MediaStreamEvent MessageChannel MessageEvent MessagePort MimeType MimeTypeArray
MouseEvent MutationEvent OfflineAudioCompletionEvent Option OverflowEvent
PageTransitionEvent PopStateEvent ProgressEvent RGBColor Range RangeException
Rect SQLException SVGZoomEvent SVGUnitTypes TextEvent TouchEvent UIEvent
WebSocket WheelEvent WebGLActiveInfo WebGLBuffer WebGLContextEvent
WebGLFrameBuffer WebGLProgram WebGLRenderBuffer WebGLRenderingContext
WebGLShader WebGLTexture WebGLUniformLocation WebKitAnimationEvent
WebKitBlobBuilder WebKitCSSFilterValue WebKitCSSKeyframeRule
WebKitCSSKeyframesRule WebKitCSSMatrix WebKitCSSRegionRule WebKitCSSTransformValue
WebKitMutationObserver WebKitMutationPoint WebKitMutationTransitionEvent
HTMLDocument HTMLElement HTMLAnchorElement HTMLAppletElement HTMLAudioElement
HTMLAreaElement HTMLBaseElement HTMLBaseFontElement HTMLBodyElement
HTMLBRElement HTMLButtonElement HTMLCanvasElement HTMLDirectoryElement
HTMLDivElement HTMLDListElement HTMLEmbedElement HTMLFieldSetElement
HTMLFontElement HTMLFormElement HTMLFrameElement HTMLFrameSetElement
HTMLHeadElement HTMLHeadingElement HTMLHtmlElement HTMLHRElement
HTMLIFrameElement HTMLImageElement HTMLInputElement HTMLKeygenElement
HTMLLabelElement HTMLLIElement HTMLLinkElement HTMLMapElement HTMLMenuElement
HTMLMetaElement HTMLModElement HTMLObjectElement HTMLOListElement
HTMLOptGroupElement HTMLOptionElement HTMLOutputElement HTMLParagraphElement
HTMLParamElement HTMLPreElement HTMLQuoteElement HTMLScriptElement
HTMLSelectElement HTMLSourceElement HTMLSpanElement HTMLStyleElement
HTMLTableElement HTMLTableCaptionElement HTMLTableCellElement
HTMLTableDataCellElement HTMLTableHeaderCellElement HTMLTableColElement
HTMLTableRowElement HTMLTableSectionElement HTMLTextAreaElement HTMLTimeElement
HTMLTitleElement HTMLTrackElement HTMLUListElement HTMLUnknownElement
HTMLVideoElement HTMLCollection HTMLAllCollection HTMLFormControlsCollection
HTMLOptionsCollection HTMLPropertiesCollection HTMLCanvasElement CanvasRenderingContext2D CanvasGradient CanvasPattern
TextMetrics ImageData CanvasPixelArray HTMLAudioElement HTMLVideoElement
NotifyAudioAvailableEvent HTMLCollection HTMLAllCollection
HTMLFormControlsCollection HTMLOptionsCollection HTMLPropertiesCollection
DOMTokenList DOMSettableTokenList DOMStringMap RadioNodeList SVGDocument
SVGElement SVGAElement SVGAltGlyphElement SVGAltGlyphDefElement
SVGAltGlyphItemElement SVGAnimationElement SVGAnimateElement
SVGAnimateColorElement SVGAnimateMotionElement SVGAnimateTransformElement
SVGSetElement SVGCircleElement SVGClipPathElement SVGColorProfileElement
SVGCursorElement SVGDefsElement SVGDescElement SVGEllipseElement
SVGFilterElement SVGFilterPrimitiveStandardAttributes SVGFEBlendElement
SVGFEColorMatrixElement SVGFEComponentTransferElement SVGFECompositeElement
SVGFEConvolveMatrixElement SVGFEDiffuseLightingElement
SVGFEDisplacementMapElement SVGFEDistantLightElement SVGFEFloodElement
SVGFEGaussianBlurElement SVGFEImageElement SVGFEMergeElement
SVGFEMergeNodeElement SVGFEMorphologyElement SVGFEOffsetElement
SVGFEPointLightElement SVGFESpecularLightingElement SVGFESpotLightElement
SVGFETileElement SVGFETurbulenceElement SVGComponentTransferFunctionElement
SVGFEFuncRElement SVGFEFuncGElement SVGFEFuncBElement SVGFEFuncAElement
SVGFontElement SVGFontFaceElement SVGFontFaceFormatElement
SVGFontFaceNameElement SVGFontFaceSrcElement SVGFontFaceUriElement
SVGForeignObjectElement SVGGElement SVGGlyphElement SVGGlyphRefElement
SVGGradientElement SVGLinearGradientElement SVGRadialGradientElement
SVGHKernElement SVGImageElement SVGLineElement SVGMarkerElement SVGMaskElement
SVGMetadataElement SVGMissingGlyphElement SVGMPathElement SVGPathElement
SVGPatternElement SVGPolylineElement SVGPolygonElement SVGRectElement
SVGScriptElement SVGStopElement SVGStyleElement SVGSwitchElement
SVGSymbolElement SVGTextElement SVGTextPathElement SVGTitleElement
SVGTRefElement SVGTSpanElement SVGUseElement SVGViewElement SVGVKernElement
SVGAngle SVGColor SVGICCColor SVGElementInstance SVGElementInstanceList
SVGLength SVGLengthList SVGMatrix SVGNumber SVGNumberList SVGPaint SVGPoint
SVGPointList SVGPreserveAspectRatio SVGRect SVGStringList SVGTransform
SVGTransformList SVGAnimatedAngle SVGAnimatedBoolean SVGAnimatedEnumeration
SVGAnimatedInteger SVGAnimatedLength SVGAnimatedLengthList SVGAnimatedNumber
SVGAnimatedNumberList SVGAnimatedPreserveAspectRatio SVGAnimatedRect
SVGAnimatedString SVGAnimatedTransformList SVGPathSegList SVGPathSeg
SVGPathSegArcAbs SVGPathSegArcRel SVGPathSegClosePath SVGPathSegCurvetoCubicAbs
SVGPathSegCurvetoCubicRel SVGPathSegCurvetoCubicSmoothAbs
SVGPathSegCurvetoCubicSmoothRel SVGPathSegCurvetoQuadraticAbs
SVGPathSegCurvetoQuadraticRel SVGPathSegCurvetoQuadraticSmoothAbs
SVGPathSegCurvetoQuadraticSmoothRel SVGPathSegLinetoAbs
SVGPathSegLinetoHorizontalAbs SVGPathSegLinetoHorizontalRel SVGPathSegLinetoRel
SVGPathSegLinetoVerticalAbs SVGPathSegLinetoVerticalRel SVGPathSegMovetoAbs
SVGPathSegMovetoRel SVGAnimatedPathData ElementTimeControl TimeEvent
XMLHttpRequest DeviceMotionEvent DeviceOrientationEvent

// constants

ELEMENT_NODE ATTRIBUTE_NODE TEXT_NODE CDATA_SECTION_NODE ENTITY_REFERENCE_NODE
ENTITY_NODE PROCESSING_INSTRUCTION_NODE COMMENT_NODE DOCUMENT_NODE
DOCUMENT_TYPE_NODE DOCUMENT_FRAGMENT_NODE NOTATION_NODE INDEX_SIZE_ERR
DOMSTRING_SIZE_ERR HIERARCHY_REQUEST_ERR WRONG_DOCUMENT_ERR
INVALID_CHARACTER_ERR NO_DATA_ALLOWED_ERR NO_MODIFICATION_ALLOWED_ERR
NOT_FOUND_ERR NOT_SUPPORTED_ERR INUSE_ATTRIBUTE_ERR


// Examples
// ========

// closure
(function($, window){
  
})(jQuery, window);

// code folding
/** Block */
/* **/

// class 
$.ns.MyClass = $.ns.Base.extend({
  var my_instance = new MyClass();
});

// constant
ns.CONSTANT = 0;
ns._A_CONSTANT = 1;
ns.___CONSTANT = 2;

// trailing whitespace
// has it here  
foo  
foo();  
var foo;  

// class properties
MyClass.prototype.$doStuff = '';
MyClass.prototype.doStuff = doStuff || function(){};
MyClass.prototype.doStuff = function(foo,bar,baz, parent){ // with params
  var _this = this;
  
  // calls
  somethingElse.call(this, foo, bar, baz);
  parent.doStuff.apply(this, arguments);
  
  // objects
  this.foo = {
    // nested properties
    property: {
      property: {}
    },
    // methods
    property: function(){
      this.bar = 2;
      return bar;
    },
    // spacing test
    property : function () {
      
    },
    property : '',
    // string variations
    'property': '',
    'property': function(){
      // ternary
      (/^\w[]{}$/).test() ? this.foo() : this.bar();
    },
    "property": '',
    "property": function(){}
  };
}

// variable declaration, with assignments
var str = "!@#$%^&*()_+-=`~;:'",
    // inline comment
    obj = {
      property: MyClass.classProperty,
      "property": function(foo,bar,baz){ oneLiner(); }, 
      $elem: $('body')
    };
var foo = { top: 0, left: 0 };
var bar = function(){};
// undefined
var foo, bar, baz;

// jQuery
foo.$bar = $('a:eq(0)');
// double quotes
foo.$bar = $("a:eq(0)");
$jqueryObject;
$($($()));

// templating
'<%= Model.Foo %>'
'<?= Model.Foo %>'
"<%= Model.Foo %>"
"<?= Model.Foo %>"

// long one-liner
case 'integer': return ox3.util.toInt(Math.random() * Math.pow(10, 12));

var _isDefaultFilterValue = function(val){
  if (ox3.isNull(val)) {
    return true;
  }
  // ...
};