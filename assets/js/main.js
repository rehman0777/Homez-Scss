// ===================== HAMBURGER START ========================

const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');

hamburger.addEventListener('click', () => {
  sidebar.style.right = '0'; 
});

closeSidebar.addEventListener('click', () => {
  sidebar.style.right = '-250px'; 
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
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// =====================  Apartment Slider START ========================

$(".apartment_slider_main").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// =====================  Client Reviews Slider START ========================
$(".client_reviews_slider_main").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// =====================  Best DEAL SECTION TABS START ========================

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab_button");
  const tabContents = document.querySelectorAll(".tab_content");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      buttons.forEach(item => item.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      button.classList.add("active");
      const activeTab = button.getAttribute("data-tab");
      document.getElementById(activeTab).classList.add("active");
    });
  });

  document.querySelector(".tab_button[data-tab='for_rent']").classList.add("active");
  document.getElementById("for_rent").classList.add("active");
});


// ================ Brand Slider start =================

$('.brand_slider_main').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 500,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});