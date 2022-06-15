import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother.js";

require("scroll-restoration-polyfill");
require("babel-polyfill");

require("lazysizes");
require("lazysizes/plugins/unveilhooks/ls.unveilhooks");
require("lazysizes/plugins/aspectratio/ls.aspectratio");

window.jQuery = require("jquery");
window.$ = window.jQuery;

require("jquery.easing");
// require('velocity-animate')
require("imagesloaded");

require("../libs/requestAFrame.js");
require("../libs/jquery.bez.js");

// require('../libs/jquery.mScroll.js')
// require('../libs/jquery.mShare.js')
// require('../libs/jquery.inview.js')
// require('../libs/jquery.mLazy.js')
// require('../libs/jquery.mScrollManager.js')
// require('../libs/jquery.mSlider.js')
// require('../libs/jquery.mParallax.js')
// require('../libs/jquery.mModal.js')
// require('../libs/jquery.cookie.js') // use LocalStorage
// require('../libs/jquery.mFadeIn.js')

// import {TweenLite, Power2} from "gsap/TweenLite"
import Util from "../modules/common/Util";
// import ClassTemplate from '../modules/common/ClassTemplate'

ScrollSmoother.create({
  smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
 
});

$(() => {
  window.util = new Util();
  if (util.mode === "tablet") {
    $('meta[name="viewport"]').attr("content", "width=1280");
  }

  gsap.registerPlugin(ScrollTrigger);

  let $cont = $(".content");
  let $looks = $(".looks");
  let $look = $(".look");
  let $credit = $(".credit");
  let len = $look.length;
  let scrub = true; // 慣性

  let zoomTimeline = (num) => {
    return gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: $look.eq(num)[0],
        scrub: scrub,
        horizontal: true,
        start: "-20% center",
        end: "120% center",
        containerAnimation: scrollTween,
        onLeaveBack: () => {
          if (num === 0) {
            $credit.html("credit button test");
          } else {
            $credit.html("credit button " + (num + 1 - 1));
          }
        },
        onEnter: () => {
          $credit.html("credit button " + (num + 1));
        },
        onEnterBack: () => {
          $credit.html("credit button " + (num + 1));
        },
        onLeave: () => {
          if (num === len - 1) {
            $credit.html("");
          } else {
            $credit.html("credit button " + (num + 1 + 1));
          }
        },
      },
    });
  };

  //横スクロール
  let scrollTween = gsap.to($cont[0], {
    // gsap.toでscrollTriggerを使う場合、xの値は最大スクロール量なので、$cont.offsetWidth（要素の横幅） - innerWidth（画面幅）で、最大スクロール量を調整
    x: () => -($cont[0].offsetWidth - $(window).width()), // 関数の戻り値にしてあるとresizeに対応してくれる
    ease: "none",
    scrollTrigger: {
      trigger: $cont[0],
      invalidateOnRefresh: true, // 多分滑らかにしてくれる
      pin: true, // 上下移動させない
      scrub: scrub, // 慣性
      // end: $cont.offsetWidth - innerWidth,
    },
  });

  let zoomTimeline1 = zoomTimeline(0);
  let zoomTimeline2 = zoomTimeline(1);
  let zoomTimeline3 = zoomTimeline(2);
  let zoomTimeline4 = zoomTimeline(3);
  let zoomTimeline5 = zoomTimeline(4);
  let zoomTimeline6 = zoomTimeline(5);
  let zoomTimeline7 = zoomTimeline(6);
  let zoomTimeline8 = zoomTimeline(7);
  let zoomTimeline9 = zoomTimeline(8);

  zoomTimeline2.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 1) + "%",
  });
  zoomTimeline2.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 1) + "%",
  });
  zoomTimeline2.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 1) + "%",
  });
  zoomTimeline2.to($looks[0], { scale: 1, x: "0%" });
  zoomTimeline4.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 3) + "%",
  });
  zoomTimeline4.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 3) + "%",
  });
  zoomTimeline4.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 3) + "%",
  });
  zoomTimeline4.to($looks[0], { scale: 1, x: "0%" });
  zoomTimeline6.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 5) + "%",
  });
  zoomTimeline6.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 5) + "%",
  });
  zoomTimeline6.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 5) + "%",
  });
  zoomTimeline6.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 5.5) + "%",
  });
  zoomTimeline7.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 6) + "%",
  });
  zoomTimeline7.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 6) + "%",
  });
  zoomTimeline7.to($looks[0], {
    scale: 1.5,
    x: (-100 / len) * 0.5 * (0.5 + 6) + "%",
  });
  zoomTimeline7.to($looks[0], { scale: 1, x: "0%" });

  // new ClassTemplate

  // usage of libs
  // $('.mScroll').mScroll({
  //   duration: 640,
  //   easing: 'easeOutExpo',
  //   jump: () => {
  //     return util.winH
  //   },
  // })

  // $('.mShare').mShare()

  // window.inview = new $.inview()

  // new $.mLazy($('.mLazy'), {
  //   fps: 8,
  //   offset: () => {
  //     return util.winH * 2
  //   },
  // })

  // new $.mSlider({
  //   // 要素系
  //   $slider: $('.Slider'),

  //   // アニメーション系
  //   type: 'slide',
  //   duration: 240,
  //   easing: 'easeInOutQuad',
  //   crop_init: 'left',

  //   // 操作系
  //   swipe: true,
  //   click_next: true,
  //   direct: false,
  //   controller: false,

  //   // 表示系
  //   init: 0,
  //   init_hide: false,
  //   visible_len: 1,

  //   // 自動再生系
  //   autoplay: true,
  //   autoplay_delay: false,
  //   autoplay_interval: 5200,

  //   // コールバック
  //   before_change: function() {},
  //   after_change: function() {},
  // })

  // $.mModal({
  //   type: 'fade',
  //   scroll_top: true,
  //   duration: 260,
  //   easing: 'swing',

  //   velocity_js: true,
  //   css_animation: true,

  //   before_open: function(e) {},
  //   after_open: function(e) {},
  //   before_close: function(e) {},
  //   after_close: function(e) {},

  //   open_classname: 'mModal-open',
  //   close_classname: 'mModal-close',
  //   toggle_classname: 'mModal-toggle',
  //   page_classname: 'mModal-page',
  //   modal_classname: 'mModal-modal',
  //   modal_cont_classname: 'mModal-modal_cont',
  //   opened_classname: 'mModal-opened'
  // })
});
