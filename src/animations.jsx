import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Function to initialize Locomotive Scroll and ScrollTrigger
export const initAnimations = () => {
  // Initialize Locomotive Scroll
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smoothMobile: false,
    inertia: 0.8,
  });

  // Update ScrollTrigger when locomotive scroll updates
  locomotiveScroll.on("scroll", ScrollTrigger.update);

  // ScrollTrigger proxy for Locomotive Scroll
  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length
        ? locomotiveScroll.scrollTo(value, 0, 0)
        : locomotiveScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform
      ? "transform"
      : "fixed",
  });

  // Animation for product cards
  gsap.utils.toArray(".product-card").forEach((card) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top bottom-=100",
      end: "bottom top",
      scroller: "[data-scroll-container]",
      toggleClass: { targets: card, className: "animated" },
      once: true,
    });
  });

  // Animation for product details on the product page
  const productDetails = document.querySelector(".product-details");
  if (productDetails) {
    gsap.from(productDetails, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: productDetails,
        start: "top bottom-=100",
        end: "bottom top",
        scroller: "[data-scroll-container]",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }

  // Update ScrollTrigger after page changes
  locomotiveScroll.update();

  // Clean up on page refresh/change
  ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
  ScrollTrigger.refresh();

  return locomotiveScroll;
};

// Function to update animations when content changes
export const updateAnimations = () => {
  ScrollTrigger.refresh();
};
