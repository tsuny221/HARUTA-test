require('scroll-restoration-polyfill')
require('babel-polyfill')

require('lazysizes')
require('lazysizes/plugins/unveilhooks/ls.unveilhooks')
require('lazysizes/plugins/aspectratio/ls.aspectratio')

window.jQuery = require('jquery')
window.$ = window.jQuery

require('jquery.easing')
// require('velocity-animate')
require('imagesloaded')

require('../libs/requestAFrame.js')
require('../libs/jquery.bez.js')

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
import Util from '../modules/common/Util'
// import ClassTemplate from '../modules/common/ClassTemplate'

$(() => {
  window.util = new Util
  if (util.mode === 'tablet') {
    $('meta[name="viewport"]').attr('content', 'width=1280')
  }


    //プラグインを定義
  
  
  
    $(window).on("load", () => {
      gsap.registerPlugin(ScrollTrigger);

 
      let area = document.querySelector(".wrapper");
      let wrap = document.querySelector(".content");
      let main = $(".main");
      let mainPh = $(".main__ph");
      let mainW = main.width()

      //横スクロール

      gsap.to(wrap, {
        x: () => -(wrap.offsetWidth - innerWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          invalidateOnRefresh: true,
          pin: true,
          scrub: true,
          end: () => "+=" + (wrap.offsetWidth - innerWidth),
        },
      });

      let start = 0;
      let end = (main.width() / 6) * 2;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".main", //アニメーションが始まるトリガーとなる要素
          start: "+=" + start,
          end: "+=" + end,
          scrub: true, //スクロール量に合わせてアニメーションが進む（数字も指定できる）
        },
      });
      tl.to(".main", { scale: 1.5 });
      tl.to(".main", { scale: 1 });

    let mainphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main", //アニメーションが始まるトリガーとなる要素
        start: "+=" + start,
        end: "+=" + end,
        scrub: true, //スクロール量に合わせてアニメーションが進む（数字も指定できる
      },
    });
      mainphTl.to(".main__ph", { x: () => - util.scr * 0.5 + "px" });
      mainphTl.to(".main__ph", { x: () => 0 + "px" });

      // gsap.to(".main__ph", {
      //   x: () => -(wrap.offsetWidth - innerWidth) + "px",
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".main", //アニメーションが始まるトリガーとなる要素
      //     start: "+=" + start,
      //     end: "+=" + end,
      //     scrub: true, //スクロール量に合わせてアニメーションが進む（数字も指定できる
      //   },
      // });

    
    })



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

})