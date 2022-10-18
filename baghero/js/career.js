$( document ).ready(function() {
    var controller = new ScrollMagic.Controller();


    
var aa = new TimelineMax().fromTo(".animate-hex .pic1", 2, { opacity: 0, x: -55 }, { opacity: 1, x: 0, ease: Quad.easeOut });
scenesection07Equipe1 = new ScrollMagic.Scene({ triggerElement: ".animate-hex .pic1", triggerHook: "onEnter" }).setTween(aa).addTo(controller);
var oa = new TimelineMax().fromTo(".animate-hex .pic2", 2, { opacity: 0, x: 30 }, { opacity: 1, x: 0, ease: Quad.easeOut });
scenesection07Equipe2 = new ScrollMagic.Scene({ triggerElement: ".animate-hex .pic2", triggerHook: "onEnter" }).setTween(oa).addTo(controller);
var ta = new TimelineMax().fromTo(".animate-hex .pic3", 1, { opacity: 0, y: 55 }, { opacity: 1, y: 0, ease: Quad.easeOut });
scenesection07Equipe3 = new ScrollMagic.Scene({ triggerElement: ".animate-hex .pic3", triggerHook: "onEnter" }).setTween(ta).addTo(controller);
var na = new TimelineMax().fromTo(".animate-hex .pic4", 0.7, { opacity: 0, x: -55}, { opacity: 1, x: 0,  ease: Quad.easeOut });
scenesection07Paragraph1 = new ScrollMagic.Scene({ triggerElement: ".animate-hex .pic4", triggerHook: "onEnter" }).setTween(na).addTo(controller);
var na2 = new TimelineMax().fromTo(".animate-hex .pic5", 1, { opacity: 0, x: 55 }, { opacity: 1, x: 0,  ease: Quad.easeOut });
scenesection07Paragraph2 = new ScrollMagic.Scene({ triggerElement: ".animate-hex .pic5", triggerHook: "onEnter" }).setTween(na2).addTo(controller);
var na3 = new TimelineMax().fromTo(".animate-hex .pic6",1, { opacity: 0, y: 55}, { opacity: 1, y: 0,  ease: Quad.easeOut });
scenesection07Paragraph3 = new ScrollMagic.Scene({ triggerElement: ".animate-hex .pic6", triggerHook: "onEnter" }).setTween(na3).addTo(controller);



var dep = new TimelineMax().fromTo(".department .dep_area",2, { opacity: 0, y: 200}, { opacity: 1, y: 0,  ease: Quad.easeOut });
scenesection07Paragraph3 = new ScrollMagic.Scene({ triggerElement: ".department .dep_area", triggerHook: "onEnter" }).setTween(dep).addTo(controller);


var openings = new TimelineMax().fromTo(".openings",2, { opacity: 0,}, { opacity: 1,  ease: Quad.easeOut });
scenesection07Paragraph3 = new ScrollMagic.Scene({ triggerElement: ".openings", triggerHook: "onEnter" }).setTween(openings).addTo(controller);
})