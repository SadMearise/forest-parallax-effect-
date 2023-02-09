import * as functions from "./files/functions.js";
import './libs/gsap.min.js';
import './libs/ScrollTrigger.min.js';
import './libs/ScrollSmoother.min.js';

import '../scss/home.scss';

functions.isWebp();
functions.ibg();

window.addEventListener('scroll', (function() {
	document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
}).bind(window))

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
