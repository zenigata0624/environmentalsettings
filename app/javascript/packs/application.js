// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "popper.js";
import "jquery";
import { gsap } from "gsap";


import "../stylesheets/index"
import "../stylesheets/application"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('turbolinks:load', function() {
  const element = document.querySelector('.element');
  element.style.opacity = '0';
  element.style.transform = 'translateY(100px)';
  let isVisible = false;
　
　 function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
   if (!isVisible && scrollTop > 100) {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1
      });
      isVisible = true;
    } else if (isVisible && scrollTop <= 100) {
      gsap.to(element, {
        opacity: 0,
        y: 100,
        duration: 1
      });
      isVisible = false;
    }
  }

  window.addEventListener('scroll', handleScroll);
});