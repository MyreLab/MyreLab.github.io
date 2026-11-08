"use strict";

// Enable Bootstrap tooltips on any element that asks for one
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.forEach(function (el) {
  new bootstrap.Tooltip(el);
});
