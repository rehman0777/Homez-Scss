// ===================== HAMBURGER START ========================

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===================== Tabs START ========================

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

function switchTab(activeTab) {
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabContents.forEach((content) => content.classList.remove("active"));

  activeTab.classList.add("active");
  const contentId = activeTab.id.replace("-tab", "-content");
  document.getElementById(contentId).classList.add("active");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    switchTab(tab);
  });
});

document.getElementById("all-tab").classList.add("active");
document.getElementById("all-content").classList.add("active");

// ===================== scroll START ========================

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===================== Featured Listing START ========================

$(".featured_listing_slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});

// =====================  Apartment Slider START ========================

$(".apartment_slider_main").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});

// =====================  Client Reviews Slider START ========================
$(".client_reviews_slider_main").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});
