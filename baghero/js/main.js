
$( document ).ready(function() {
    var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: "#section01", duration: "100%"})
    .setClassToggle("#a1", "active") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#section02",duration: "100%"})
    .setClassToggle("#a2", "active") // add class toggle

    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#section03",duration: "100%"})
    .setClassToggle("#a3", "active") // add class toggle

    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#section05",duration: "100%"})
    .setClassToggle("#a4", "active") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#section09",duration: "100%"})
    .setClassToggle("#a5", "active") // add class toggle
    .addTo(controller);

 
     $(".logoFB").mouseenter(function () {
        TweenMax.to($(this).find("span"), 0.2, { opacity: 1 }), TweenMax.to($(this).find("i"), 0.2, { scaleX: 0.5, scaleY: 0.5 });
    });
    $(".logoFB").mouseleave(function () {
        TweenMax.to($(this).find("span"), 1, { opacity: 0 }), TweenMax.to($(this).find("i"), 0.2, { scaleX: 1, scaleY: 1 });
    });
    $(".logoIG").mouseenter(function () {
        TweenMax.to($(this).find("span"), 0.2, { opacity: 1 }), TweenMax.to($(this).find("i"), 0.2, { scaleX: 0.5, scaleY: 0.5 });
    });
    $(".logoIG").mouseleave(function () {
        TweenMax.to($(this).find("span"), 1, { opacity: 0 }), TweenMax.to($(this).find("i"), 0.2, { scaleX: 1, scaleY: 1 });
    });
    $(".logoMAIL").mouseenter(function () {
        TweenMax.to($(this).find("span"), 0.2, { opacity: 1 }), TweenMax.to($(this).find("i"), 0.2, { scaleX: 0.5, scaleY: 0.5 });
    });
    $(".logoMAIL").mouseleave(function () {
        TweenMax.to($(this).find("span"), 1, { opacity: 0 }), TweenMax.to($(this).find("i"), 0.2, { scaleX: 1, scaleY: 1 });
    });
    $(".logoCALL").mouseenter(function () {
        TweenMax.to($(this).find("span"), 0.2, { opacity: 1 }), TweenMax.to($(this).find("i"), 0.2, { scaleX: 0.5, scaleY: 0.5 });
    });
    $(".logoCALL").mouseleave(function () {
        TweenMax.to($(this).find("span"), 1, { opacity: 0 }), TweenMax.to($(this).find("i"), 0.2, { scaleX: 1, scaleY: 1 });
    });
    $("#a1").mouseenter(function () {
        TweenMax.to($(this).children("span"), 0.2, { opacity: 1 }), TweenMax.to($(this).find(".circle-o"), 0.2, { scaleX: 0.5, scaleY: 0.5 });
    });
    $("#a1").mouseleave(function () {
        TweenMax.to($(this).find("span"), 1, { opacity: 0 }), TweenMax.to($(this).find(".circle-o"), 0.2, { scaleX: 1, scaleY: 1 });
       
    });
    $("#a2").mouseenter(function () {
        TweenMax.to($(this).children("span"), 0.2, { opacity: 1 }), TweenMax.to($(this).find(".circle-o"), 0.2, { scaleX: 0.5, scaleY: 0.5 });
    });
    $("#a2").mouseleave(function () {
        TweenMax.to($(this).find("span"), 1, { opacity: 0 }), TweenMax.to($(this).find(".circle-o"), 0.2, { scaleX: 1, scaleY: 1 });
    });
    $("#a3").mouseenter(function () {
        TweenMax.to($(this).children("span"), 0.2, { opacity: 1 }), TweenMax.to($(this).find(".circle-o"), 0.2, { scaleX: 0.5, scaleY: 0.5 });
    });
    $("#a3").mouseleave(function () {
        TweenMax.to($(this).find("span"), 1, { opacity: 0 }), TweenMax.to($(this).find(".circle-o"), 0.2, { scaleX: 1, scaleY: 1 });
    });
    $("#a4").mouseenter(function () {
        TweenMax.to($(this).children("span"), 0.2, { opacity: 1 }), TweenMax.to($(this).find(".circle-o"), 0.2, { scaleX: 0.5, scaleY: 0.5 });
    });
    $("#a4").mouseleave(function () {
        TweenMax.to($(this).find("span"), 1, { opacity: 0 }), TweenMax.to($(this).find(".circle-o"), 0.2, { scaleX: 1, scaleY: 1 });
    });
    $("#a5").mouseenter(function () {
        TweenMax.to($(this).children("span"), 0.2, { opacity: 1 }), TweenMax.to($(this).find(".circle-o"), 0.2, { scaleX: 0.5, scaleY: 0.5 });
    });
    $("#a5").mouseleave(function () {
        TweenMax.to($(this).find("span"), 1, { opacity: 0 }), TweenMax.to($(this).find(".circle-o"), 0.2, { scaleX: 1, scaleY: 1 });
    });
   


    var wrapper = new TimelineMax()
    .add([TweenMax.fromTo(".section01", 1, { y: "0%" }, { y: "-100%", ease: Linear.easeNone }), TweenMax.fromTo(".section02", 1, { y: "0%" }, { y: "-100%", ease: Linear.easeNone })]),

    section03 = new ScrollMagic.Scene({ triggerElement: "#wrapper", triggerHook: "onLeave", duration: "200%" }).setPin("#wrapper").setTween(wrapper).addTo(controller);

 
        var section04 = new TimelineMax().add([
            TweenMax.fromTo(".parassol.rouge", 1.3, { x: 150, y: 50, rotation: 30 }, { x: -150, y: -50, rotation: -30, ease: Power1.easeInOut }),
            TweenMax.fromTo(".parassol.vert", 1.5, { x: -150, y: 150, rotation: -15 }, { x: -70, y: -100, rotation:0, ease: Power1.easeInOut }),
            TweenMax.fromTo(".calme .title", 1.5, { x: 100, opacity: 0 }, { x: -150, opacity: 3, ease: Power1.easeInOut }),
        ]);
        new ScrollMagic.Scene({ triggerElement: ".section04", triggerHook: "onEnter", duration: "200%" }).setTween(section04).addTo(controller);


  


        var bg = new TimelineMax()
      .add([TweenMax.fromTo(".bg1", 1, { y: "0%" }, { y: "100%", ease: Linear.easeNone }), TweenMax.fromTo(".bg2", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone })])
        .add([TweenMax.fromTo(".bg2", 1, { x: "0%" }, { x: "-100%", ease: Linear.easeNone }), TweenMax.fromTo(".bg3", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })]),
  
      section03 = (new ScrollMagic.Scene({ triggerElement: ".section03", triggerHook: "onLeave", duration: "200%" }).setPin(".section03").setTween(bg).addTo(controller),
        new TimelineMax()
           .add([            
                 TweenMax.from("section.panel:nth-child(1) .inside .p .pObj", 0.4, { opacity: 0, x: 100, ease: Power3.easeOut, delay: 1 }),
         ])
             .add([
                TweenMax.to("section.panel:nth-child(1) .inside .p .pObj", 1, { opacity: 0, x: 100, ease: Power3.easeIn }),
                TweenMax.from("section.panel:nth-child(2) .inside .p .pObj", 1, { opacity: 0, x: -100, ease: Power3.easeOut, delay: 0.4 }),
             ])
            .add([
                 TweenMax.to("section.panel:nth-child(2) .inside .p .pObj", 1, { opacity: 0, x: 100, ease: Power3.easeIn }),
              TweenMax.from("section.panel:nth-child(3) .inside .p .pObj", 1, { opacity: 0, x: -100, ease: Power3.easeOut, delay: 0.4 }),
          ])
            .add([
                TweenMax.to("section.panel:nth-child(3) .inside .p .pObj", 1, { opacity: 0, x: 100, ease: Power3.easeIn, delay: 0.4 }),
            ]));
  new ScrollMagic.Scene({ triggerElement: ".section03", triggerHook: "onEnter", duration: "400%" }).setTween(section03).addTo(controller);





var section04 = new TimelineMax()
.add([TweenMax.fromTo(".section04para .parallax-window", 1, { x: 0 }, { x: -200, ease: Linear.easeNone })])
.add([TweenMax.fromTo(".section04para .parallax-window", 1, { x: -200 }, { x: -400, ease: Linear.easeNone })]);

 new ScrollMagic.Scene({ triggerElement: ".section04", triggerHook: "onEnter", duration: "200%" }).setTween(section04).addTo(controller);


 var section04text = new TimelineMax()
 .add([
     TweenMax.fromTo(".section04para .section04-text ", 1, { x: -100, opacity: 0 }, { x: -35, opacity: 3, ease: Power1.easeInOut })]);
  new ScrollMagic.Scene({ triggerElement: ".section04para", triggerHook: "onEnter", duration: "150%" }).setTween(section04text).addTo(controller);
 

var svgpath = new TimelineMax({ delay: 23 });
t=0;
svgpath.to("#tracesvg path#p1", 14, { onStart: t, onStartParams: ["path#p1"], strokeDashoffset: 50, ease: Linear.easeNone })
.to("#tracesvg path#p2", 7, { onStart: t, onStartParams: ["path#p2"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 })
.to("#tracesvg path#p3", 12, { onStart: t, onStartParams: ["path#p3"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 })
.to("#tracesvg path#p4", 11, { onStart: t, onStartParams: ["path#p4"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 })
.to("#tracesvg path#p5", 10, { onStart: t, onStartParams: ["path#p5"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 })
.to("#tracesvg path#p6", 9, { onStart: t, onStartParams: ["path#p6"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 })
.to("#tracesvg path#p7", 5, { onStart: t, onStartParams: ["path#p7"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 });
var svgpath2 = new TimelineMax({ delay: 18 });
svgpath2.add([
    TweenMax.staggerTo("#saladesvg path", 2.5, { onStart: t, onStartParams: ["#saladesvg path"], strokeDashoffset: 0, strokeWidth: 6 }, 0.3)
]);

var combinesvg = new TimelineMax().add([svgpath, svgpath2]);
section05 = new ScrollMagic.Scene({ triggerElement: ".section05", triggerHook: "onEnter", duration: "4000px" }).setTween(combinesvg).addTo(controller);

var aa = new TimelineMax().fromTo(".section07 .equipe1", 2, { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: Quad.easeOut });
scenesection07Equipe1 = new ScrollMagic.Scene({ triggerElement: ".section07 .equipe1", triggerHook: "onEnter" }).setTween(aa).addTo(controller);
var oa = new TimelineMax().fromTo(".section07 .equipe2", 2, { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: Quad.easeOut });
scenesection07Equipe2 = new ScrollMagic.Scene({ triggerElement: ".section07 .equipe2", triggerHook: "onEnter" }).setTween(oa).addTo(controller);
var ta = new TimelineMax().fromTo(".section07 .equipe3", 2, { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: Quad.easeOut });
scenesection07Equipe3 = new ScrollMagic.Scene({ triggerElement: ".section07 .equipe3", triggerHook: "onEnter" }).setTween(ta).addTo(controller);
var na = new TimelineMax().fromTo(".section07 .paragraph1", 0.7, { opacity: 0, x: 55}, { opacity: 1, x: 0,  ease: Quad.easeOut });
scenesection07Paragraph1 = new ScrollMagic.Scene({ triggerElement: ".section07 .paragraph1", triggerHook: "onEnter" }).setTween(na).addTo(controller);
var na2 = new TimelineMax().fromTo(".section07 .paragraph2", 1, { opacity: 0, x: 55 }, { opacity: 1, x: 0,  ease: Quad.easeOut });
scenesection07Paragraph2 = new ScrollMagic.Scene({ triggerElement: ".section07 .paragraph2", triggerHook: "onEnter" }).setTween(na2).addTo(controller);
var na3 = new TimelineMax().fromTo(".section07 .paragraph3",2, { opacity: 0, x: 55}, { opacity: 1, x: 0,  ease: Quad.easeOut });
scenesection07Paragraph3 = new ScrollMagic.Scene({ triggerElement: ".section07 .paragraph3", triggerHook: "onEnter" }).setTween(na3).addTo(controller);
var sa = new TimelineMax().add([
    TweenMax.fromTo(".section08 .paragraph", 2, { textShadow: "rgba(154,129,69, 1) -50px 20px 10px" }, { textShadow: "rgba(154,129,69, 0) -350px 20px 50px", ease: Quad.easeIn }),
]);
scenesection08Paragraph = new ScrollMagic.Scene({ triggerElement: ".section08", triggerHook: "onEnter", duration: "150%" }).setTween(sa).addTo(controller);



var spot = new TimelineMax().add([
    
    TweenMax.fromTo(".section08 .spot", 2, { x: -124 }, { x: 100, ease: Linear.easeNone }),
]);
scenesection08Paragraph = new ScrollMagic.Scene({ triggerElement: ".section08", triggerHook: "onEnter", duration: "80%" }).setTween(spot).addTo(controller);





if ($(window).width() <= 576) {
   console.log("SIze change");

   var svgpath = new TimelineMax({ delay: 23 });
t=0;
svgpath.to("#tracesvg path#p1", 14, { onStart: t, onStartParams: ["path#p2"], strokeDashoffset: 50, ease: Linear.easeNone })
.to("#tracesvg path#p2", 7, { onStart: t, onStartParams: ["path#p2"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 })
.to("#tracesvg path#p3", 12, { onStart: t, onStartParams: ["path#p3"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 })
.to("#tracesvg path#p4", 11, { onStart: t, onStartParams: ["path#p4"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 })
.to("#tracesvg path#p5", 10, { onStart: t, onStartParams: ["path#p5"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 })
.to("#tracesvg path#p6", 9, { onStart: t, onStartParams: ["path#p6"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 })
.to("#tracesvg path#p7", 5, { onStart: t, onStartParams: ["path#p7"], strokeDashoffset: 0, ease: Linear.easeNone, delay: 1.5 });
var svgpath2 = new TimelineMax({ delay: 18 });
svgpath2.add([
    TweenMax.staggerTo("#saladesvg path", 2.5, { onStart: t, onStartParams: ["#saladesvg path"], strokeDashoffset: 0, strokeWidth: 6 }, 0.3)
]);
  }















});

