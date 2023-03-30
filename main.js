const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      // badgeEl.style.display = "none";
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //버튼보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // badgeEl.style.display = "block";
      //버튼숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
//_.throttle(실행할함수, 제한할시간)
//gsap.to(요소,지속시간,옵션{})

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.7,
  });
});
const swiperEl = document.querySelector(".notice-line .swiper");

new Swiper(swiperEl, {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
const promotionEl = document.querySelector(".promotion .swiper");
const paginationEl = document.querySelector(".promotion .swiper-pagination");

new Swiper(promotionEl, {
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드 가운데
  loop: true, //반복 보여주기
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: paginationEl,
    clickable: true, //사용자가 실제 페이지 번호요소 제어 가능여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev ",
    nextEl: ".awards .swiper-next",
  },
});

const promoEl = document.querySelector(".promotion");

const promoToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;

promoToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김처리
    promoEl.classList.add("hide");
  } else {
    //보여줘
    promoEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function flaotingObj(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
flaotingObj(".floating1", 1, 15);
flaotingObj(".floating2", 0.5, 15);
flaotingObj(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
