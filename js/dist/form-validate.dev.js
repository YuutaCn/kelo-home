"use strict";

document.addEventListener('DOMContentLoaded', function () {
  window.alert = console.log;
  var form = document.getElementById('sposob-form');
  var formModal = document.getElementById('modal-form');
  var formOtvet = document.getElementById('otvet-form');
  var telInputs = document.querySelectorAll('._tel');
  var telMask = new Inputmask('+7 (999) 999-99-99');
  telMask.mask(telInputs);
  var error = 0;
  form.addEventListener('submit', formSend);
  formModal.addEventListener('submit', modalFormSend);
  formOtvet.addEventListener('submit', otvetFormSend); // Отправка формы

  function formSend(el) {
    var formData, response, result;
    return regeneratorRuntime.async(function formSend$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            el.preventDefault();
            formValidate(form);
            formData = new FormData(form);

            if (!(error === 0)) {
              _context.next = 22;
              break;
            }

            form.classList.add('_pending');
            _context.next = 7;
            return regeneratorRuntime.awrap(fetch('sendmail.php', {
              method: "POST",
              body: formData
            }));

          case 7:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 18;
              break;
            }

            _context.next = 11;
            return regeneratorRuntime.awrap(response.json());

          case 11:
            result = _context.sent;
            alert(result.message);
            form.reset();
            form.classList.remove('_pending');
            showSenk();
            _context.next = 21;
            break;

          case 18:
            alert('Ошибка');
            form.classList.remove('_pending');
            showSenk();

          case 21:
            ;

          case 22:
            ;

          case 23:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  ; // Отправка модальный формы

  function modalFormSend(el) {
    var formData, response, result;
    return regeneratorRuntime.async(function modalFormSend$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            el.preventDefault();
            modalFormValidate(form);
            formData = new FormData(form);

            if (!(error === 0)) {
              _context2.next = 23;
              break;
            }

            form.classList.add('_pending');
            _context2.next = 7;
            return regeneratorRuntime.awrap(fetch('sendmail.php', {
              method: "POST",
              body: formData
            }));

          case 7:
            response = _context2.sent;

            if (!response.ok) {
              _context2.next = 19;
              break;
            }

            _context2.next = 11;
            return regeneratorRuntime.awrap(response.json());

          case 11:
            result = _context2.sent;
            alert(result.message);
            form.reset();
            form.classList.remove('_pending');
            document.getElementById('callback').classList.remove('show');
            setTimeout(function () {
              document.getElementById('callback').style.display = 'none';
              showSenk();
            }, 500);
            _context2.next = 22;
            break;

          case 19:
            alert('Ошибка');
            form.classList.remove('_pending');
            showSenk();

          case 22:
            ;

          case 23:
            ;

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    });
  }

  ; // Отправка формы ответа

  function otvetFormSend(el) {
    var formData, response, result;
    return regeneratorRuntime.async(function otvetFormSend$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            el.preventDefault();
            otvetFormValidate(form);
            formData = new FormData(form);

            if (!(error === 0)) {
              _context3.next = 23;
              break;
            }

            form.classList.add('_pending');
            _context3.next = 7;
            return regeneratorRuntime.awrap(fetch('sendmail.php', {
              method: "POST",
              body: formData
            }));

          case 7:
            response = _context3.sent;

            if (!response.ok) {
              _context3.next = 19;
              break;
            }

            _context3.next = 11;
            return regeneratorRuntime.awrap(response.json());

          case 11:
            result = _context3.sent;
            alert(result.message);
            form.reset();
            form.classList.remove('_pending');
            document.getElementById('otvet').classList.remove('show');
            setTimeout(function () {
              document.getElementById('otvet').style.display = 'none';
              showSenk();
            }, 500);
            _context3.next = 22;
            break;

          case 19:
            alert('Ошибка');
            form.classList.remove('_pending');
            showSenk();

          case 22:
            ;

          case 23:
            ;

          case 24:
          case "end":
            return _context3.stop();
        }
      }
    });
  }

  ; // Валидация нижней формы

  function formValidate(form) {
    error = 0;
    var formReq = document.querySelectorAll('._req');

    for (var i = 0; i < formReq.length; i++) {
      var input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('sposob-form-name')) {
        if (input.value.length < 2) {
          formAddError(input);
          input.placeholder = 'Введите имя!';
          error++;
        }

        ;
      } else if (input.classList.contains('sposob-form-tel')) {
        if (telTest(input)) {
          formAddError(input);
          input.placeholder = 'Телефон введен не корректно!';
          error++;
        }

        ;
      }

      ;
    }

    ;
  }

  ; // Валидация модальной формы

  function modalFormValidate(form) {
    error = 0;
    var formReq = document.querySelectorAll('._req');

    for (var i = 0; i < formReq.length; i++) {
      var input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('modal-form-name')) {
        if (input.value.length < 2) {
          formAddError(input);
          input.placeholder = 'Введите имя!';
          error++;
        }

        ;
      } else if (input.classList.contains('modal-form-tel')) {
        if (telTest(input)) {
          formAddError(input);
          input.placeholder = 'Телефон введен не корректно!';
          error++;
        }

        ;
      }

      ;
    }

    ;
  }

  ; // Валидация формы ответа

  function otvetFormValidate(form) {
    error = 0;
    var formReq = document.querySelectorAll('._req');

    for (var i = 0; i < formReq.length; i++) {
      var input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('otvet-form-name')) {
        if (input.value.length < 2) {
          formAddError(input);
          input.placeholder = 'Введите имя!';
          error++;
        }

        ;
      } else if (input.classList.contains('otvet-form-tel')) {
        if (telTest(input)) {
          formAddError(input);
          input.placeholder = 'Телефон введен не корректно!';
          error++;
        }

        ;
      }

      ;
    }

    ;
  }

  ;

  function formAddError(input) {
    input.classList.add('_error');
  }

  ;

  function formRemoveError(input) {
    input.classList.remove('_error');
  }

  ;

  function telTest(input) {
    return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
  }

  function showSenk() {
    document.querySelector('#senk').style.display = 'block';
    setTimeout(function () {
      document.querySelector('#senk').classList.add('show');
    }, 500);
  }

  ;
});
$(function () {
  jQuery(document).ready(function (e) {
    jQuery(document).on("click", ".mob-menu", function () {
      jQuery(".menu").slideDown(500);
    }), jQuery(document).on("click", ".vopros.item-1 .otvet .item", function (t) {
      e(".item-1 .otvet .item").removeClass("active"), e(this).addClass("active"), e("[name='otvet1']").attr("value", e(this).find(".desk").text()), e(".vopros .otvet .item").removeClass("error");
    }), jQuery(document).on("click", ".vopros.item-2 .otvet .item", function (t) {
      e(".item-2 .otvet .item").removeClass("active"), e(this).addClass("active"), e("[name='otvet2']").attr("value", e(this).find(".desk").text()), e(".vopros .otvet .item").removeClass("error");
    }), jQuery(document).on("click", ".vopros.item-3 .otvet .item", function (t) {
      e(".item-3 .otvet .item").removeClass("active"), e(this).addClass("active"), e("[name='otvet3']").attr("value", e(this).find(".desk").text()), e(".vopros .otvet .item").removeClass("error");
    }), jQuery(document).on("click", ".vopros.item-4 .otvet .item", function (t) {
      e(this).addClass("active"), e("[name='otvet-4']").val(" ");
      var o = "";
      e(".vopros.item-4 .otvet .item.active").each(function (t) {
        o += e(this).find(".desk").text();
      }), e("[name='otvet4']").attr("value", o), e(".vopros .otvet .item").removeClass("error");
    }), jQuery(document).on("click", ".vopros.item-5 .otvet .item", function (t) {
      e(".item-5 .otvet .item").removeClass("active"), e(this).addClass("active"), e("[name='otvet5']").attr("value", e(this).find(".desk").text()), e(".vopros .otvet .item").removeClass("error");
    }), jQuery(document).on("click", ".vopros.item-1 .btn_red", function (t) {
      t.preventDefault();
      var o = e(this).parents(".vopros").find(".otvet .item");
      e(".vopros .otvet .item").removeClass("error"), o.each(function (t) {
        e(this).hasClass("active") ? (e(".vopros").hide(), e(".vopros.item-2").show(), e(this).addClass("active"), e("[name='otvet-1']").val(e(this).find(".desk").text()), e(".indicator .span-1").addClass("active"), e(".vasha span").text("1%")) : e(".vopros.item-1 .otvet .item").addClass("error");
      });
    }), jQuery(document).on("click", ".vopros.item-2 .btn_red", function (t) {
      t.preventDefault();
      var o = e(this).parents(".vopros").find(".otvet .item");
      e(".vopros .otvet .item").removeClass("error"), o.each(function (t) {
        e(this).hasClass("active") ? (e(".vopros").hide(), e(".vopros.item-3").show(), e(this).addClass("active"), e("[name='otvet-2']").val(e(this).find(".desk").text()), e(".indicator .span-2").addClass("active"), e(".vasha span").text("2%")) : e(".vopros.item-2 .otvet .item").addClass("error");
      });
    }), jQuery(document).on("click", ".vopros.item-3 .btn_red", function (t) {
      t.preventDefault();
      var o = e(this).parents(".vopros").find(".otvet .item");
      e(".vopros .otvet .item").removeClass("error"), o.each(function (t) {
        e(this).hasClass("active") ? (e(".vopros").hide(), e(".vopros.item-4").show(), e(this).addClass("active"), e("[name='otvet-3']").val(e(this).find(".desk").text()), e(".indicator .span-3").addClass("active"), e(".vasha span").text("3%")) : e(".vopros.item-3 .otvet .item").addClass("error");
      });
    }), jQuery(document).on("click", ".vopros.item-4 .btn_red", function (t) {
      t.preventDefault();
      var o = e(this).parents(".vopros").find(".otvet .item");
      e(".vopros .otvet .item").removeClass("error"), o.each(function (t) {
        e(this).hasClass("active") ? (e(".vopros").hide(), e(".vopros.item-5").show(), e(this).addClass("active"), e(".indicator .span-4").addClass("active"), e(".vasha span").text("4%")) : e(".vopros.item-4 .otvet .item").addClass("error");
      });
    }), jQuery(document).on("click", ".vopros.item-5 .btn_red", function (t) {
      t.preventDefault();
      var o = e(this).parents(".vopros").find(".otvet .item");
      e(".vopros .otvet .item").removeClass("error"), o.each(function (t) {
        e(this).hasClass("active") ? (e("[name='otvet-5']").val(e(this).find(".desk").text()), e(".modal").modal("hide"), e("#otvet").modal("show"), e(".vopros.item-1").show(), e(".vopros.item-5").hide(), e(".otvet .item").removeClass("active"), e(".indicator .span-5").addClass("active"), e(".vasha span").text("5%")) : e(".vopros.item-5 .otvet .item").addClass("error");
      });
    }), e('a[href^="#"].yak').click(function () {
      return elementClick = e(this).attr("href"), destination = e(elementClick).offset().top, e("body,html").animate({
        scrollTop: destination
      }, 1100), !1;
    });
  });
});
document.getElementById('senk').addEventListener('click', function (el) {
  document.getElementById('senk').classList.remove('show');
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.modal-backdrop').classList.remove('show');
  setTimeout(function () {
    document.getElementById('senk').style.display = 'none';
    document.querySelector('.modal-backdrop').style.display = 'none';
  }, 500);
});