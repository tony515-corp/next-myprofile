function plugin(fnName) {
  return typeof window !== "undefined" &&
    typeof window.$ === "function" &&
    window.$.fn &&
    typeof window.$.fn[fnName] === "function";
}

function hidePreloader($) {
  const $loader = $(".se-pre-con");
  if ($loader.length) {
    $loader.fadeOut("slow");
  }
}

export function initTemplate() {
  if (typeof window === "undefined" || typeof window.$ !== "function") {
    return () => {};
  }

  const $ = window.$;

  hidePreloader($);
  if (document.readyState !== "complete") {
    $(window).on("load.template", () => hidePreloader($));
  }

  if (typeof window.Typed === "function" && $(".typed").length) {
    $(".typed").each(function initTyped() {
      new window.Typed(this, {
        stringsElement: ".typed-strings",
        loop: true,
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 2500,
      });
    });
  }

  if (plugin("mixItUp") && $("#portfolio").length && !$("#portfolio").data("mixitup")) {
    $("#portfolio").mixItUp({
      selectors: {
        target: ".tile",
        filter: ".filter",
        sort: ".sort-btn",
      },
      animation: {
        animateResizeContainer: false,
        effects: "fade scale",
      },
    });
  }

  $("[data-background]").each(function setBackground() {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
  });

  if (plugin("countTo")) {
    $(".timer").countTo();
    if (plugin("appear")) {
      $(".fun-fact").appear(
        function onAppear() {
          $(".timer").countTo();
        },
        { accY: -100 }
      );
    }
  }

  if (typeof window.WOW === "function") {
    new window.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    }).init();
  }

  $("a.smooth-menu").on("click.template", function onSmoothScroll(event) {
    const target = $($(this).attr("href"));
    if (!target.length) {
      return;
    }
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top - 85,
      },
      1500,
      "easeInOutExpo"
    );
    event.preventDefault();
  });

  if (plugin("owlCarousel")) {
    if ($(".feed-sldr").length && !$(".feed-sldr").hasClass("owl-loaded")) {
      $(".feed-sldr").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: [
          "<i class='fas fa-chevron-left'></i>",
          "<i class='fas fa-chevron-right'></i>",
        ],
        dots: false,
        autoplay: true,
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 },
        },
      });
    }
  }

  if (plugin("magnificPopup")) {
    $(".popup-link").magnificPopup({ type: "image" });

    $(".magnific-mix-gallery").each(function initGallery() {
      const $imageLinks = $(this).find(".item");
      const items = [];

      $imageLinks.each(function collectItem() {
        const $item = $(this);
        items.push({
          src: $item.attr("href"),
          type: $item.hasClass("magnific-iframe") ? "iframe" : "image",
          title: $item.data("title"),
        });
      });

      $imageLinks.magnificPopup({
        mainClass: "mfp-fade",
        items,
        gallery: {
          enabled: true,
          tPrev: $(this).data("prev-text"),
          tNext: $(this).data("next-text"),
        },
        type: "image",
        callbacks: {
          beforeOpen: function goToIndex() {
            const index = $imageLinks.index(this.st.el);
            if (index !== -1) {
              this.goTo(index);
            }
          },
        },
      });
    });
  }

  $(".menu-tab").on("click.template", function toggleMenu() {
    $(".menu-hide").toggleClass("show");
    $(".menu-tab").toggleClass("active");
  });

  const topButton = document.getElementById("scrtop");
  const onScroll = () => {
    if (!topButton) {
      return;
    }
    const scrolled = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
    topButton.style.display = scrolled ? "block" : "none";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  return () => {
    $(window).off("load.template");
    $("a.smooth-menu").off("click.template");
    $(".menu-tab").off("click.template");
    window.removeEventListener("scroll", onScroll);
  };
}
