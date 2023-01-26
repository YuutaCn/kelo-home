document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sposob-form');
  const formModal = document.getElementById('modal-form');
  const formOtvet = document.getElementById('otvet-form');
  let telInputs = document.querySelectorAll('._tel');
  let telMask = new Inputmask('+7 (999) 999-99-99');
  telMask.mask(telInputs);
  let error = 0;

  form.addEventListener('submit', formSend);
  formModal.addEventListener('submit', modalFormSend);
  formOtvet.addEventListener('submit', otvetFormSend);


  // Отправка формы
  async function formSend(el) {
    el.preventDefault();
    formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_pending');
      let response = await fetch('sendmail.php', {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_pending');
        showSenk();
      } else {
        alert('Ошибка')
        form.classList.remove('_pending');
        showSenk();
      };
    };
  };
  // Отправка модальный формы
  async function modalFormSend(el) {
    el.preventDefault();
    modalFormValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_pending');
      let response = await fetch('sendmail.php', {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_pending');
        showSenk();
      } else {
        alert('Ошибка')
        form.classList.remove('_pending');
        showSenk();
      };
    };
  };
  // Отправка формы ответа
  async function otvetFormSend(el) {
    el.preventDefault();
    otvetFormValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_pending');
      let response = await fetch('sendmail.php', {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_pending');
        showSenk();
      } else {
        alert('Ошибка')
        form.classList.remove('_pending');
        showSenk();
      };
    };
  };

  // Валидация нижней формы
  function formValidate(form) {
    error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('sposob-form-name')) {
        if (input.value.length < 2) {
          formAddError(input);
          input.placeholder = 'Введите имя!';
          error++;
        };
      } else if (input.classList.contains('sposob-form-tel')) {
        if (telTest(input)) {
          formAddError(input);
          input.placeholder = 'Телефон введен не корректно!';
          error++;
        };
      };
    };
  };

  // Валидация модальной формы
  function modalFormValidate(form) {
    error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('modal-form-name')) {
        if (input.value.length < 2) {
          formAddError(input);
          input.placeholder = 'Введите имя!';
          error++;
        };
      } else if (input.classList.contains('modal-form-tel')) {
        if (telTest(input)) {
          formAddError(input);
          input.placeholder = 'Телефон введен не корректно!';
          error++;
        };
      };
    };
  };

  // Валидация формы ответа
  function otvetFormValidate(form) {
    error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('otvet-form-name')) {
        if (input.value.length < 2) {
          formAddError(input);
          input.placeholder = 'Введите имя!';
          error++;
        };
      } else if (input.classList.contains('otvet-form-tel')) {
        if (telTest(input)) {
          formAddError(input);
          input.placeholder = 'Телефон введен не корректно!';
          error++;
        };
      };
    };
  };

  function formAddError(input) {
    input.classList.add('_error');
  };

  function formRemoveError(input) {
    input.classList.remove('_error');
  };

  function telTest(input) {
    return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value)
  }

  function showSenk() {
    document.querySelector('#senk').style.display = 'block';
    setTimeout(() => {
      document.querySelector('#senk').classList.add('show');
    }, 500);
    setTimeout(() => {
      document.querySelector('#senk').classList.remove('show');
      setTimeout(() => {
        document.querySelector('#senk').style.display = 'none';
      }, 500);
    }, 2000);
  };
});

$(function () {
  jQuery(document).ready(function (e) {
    jQuery(document).on("click", ".mob-menu", function () {
      jQuery(".menu").slideDown(500);
    }),
      jQuery(document).on("click", ".vopros.item-1 .otvet .item", function (t) {
        e(".item-1 .otvet .item").removeClass("active"),
          e(this).addClass("active"),
          e("[name='otvet1']").attr("value", e(this).find(".desk").text()),
          e(".vopros .otvet .item").removeClass("error");
      }),
      jQuery(document).on("click", ".vopros.item-2 .otvet .item", function (t) {
        e(".item-2 .otvet .item").removeClass("active"), e(this).addClass("active"), e("[name='otvet2']").attr("value", e(this).find(".desk").text()), e(".vopros .otvet .item").removeClass("error");
      }),
      jQuery(document).on("click", ".vopros.item-3 .otvet .item", function (t) {
        e(".item-3 .otvet .item").removeClass("active"), e(this).addClass("active"), e("[name='otvet3']").attr("value", e(this).find(".desk").text()), e(".vopros .otvet .item").removeClass("error");
      }),
      jQuery(document).on("click", ".vopros.item-4 .otvet .item", function (t) {
        e(this).addClass("active"), e("[name='otvet-4']").val(" ");
        var o = "";
        e(".vopros.item-4 .otvet .item.active").each(function (t) {
          o += e(this).find(".desk").text();
        }),
          e("[name='otvet4']").attr("value", o),
          e(".vopros .otvet .item").removeClass("error");
      }),
      jQuery(document).on("click", ".vopros.item-5 .otvet .item", function (t) {
        e(".item-5 .otvet .item").removeClass("active"), e(this).addClass("active"), e("[name='otvet5']").attr("value", e(this).find(".desk").text()), e(".vopros .otvet .item").removeClass("error");
      }),
      jQuery(document).on("click", ".vopros.item-1 .btn_red", function (t) {
        t.preventDefault();
        var o = e(this).parents(".vopros").find(".otvet .item");
        e(".vopros .otvet .item").removeClass("error"),
          o.each(function (t) {
            e(this).hasClass("active")
              ? (e(".vopros").hide(), e(".vopros.item-2").show(), e(this).addClass("active"), e("[name='otvet-1']").val(e(this).find(".desk").text()), e(".indicator .span-1").addClass("active"), e(".vasha span").text("1%"))
              : e(".vopros.item-1 .otvet .item").addClass("error");
          });
      }),
      jQuery(document).on("click", ".vopros.item-2 .btn_red", function (t) {
        t.preventDefault();
        var o = e(this).parents(".vopros").find(".otvet .item");
        e(".vopros .otvet .item").removeClass("error"),
          o.each(function (t) {
            e(this).hasClass("active")
              ? (e(".vopros").hide(), e(".vopros.item-3").show(), e(this).addClass("active"), e("[name='otvet-2']").val(e(this).find(".desk").text()), e(".indicator .span-2").addClass("active"), e(".vasha span").text("2%"))
              : e(".vopros.item-2 .otvet .item").addClass("error");
          });
      }),
      jQuery(document).on("click", ".vopros.item-3 .btn_red", function (t) {
        t.preventDefault();
        var o = e(this).parents(".vopros").find(".otvet .item");
        e(".vopros .otvet .item").removeClass("error"),
          o.each(function (t) {
            e(this).hasClass("active")
              ? (e(".vopros").hide(), e(".vopros.item-4").show(), e(this).addClass("active"), e("[name='otvet-3']").val(e(this).find(".desk").text()), e(".indicator .span-3").addClass("active"), e(".vasha span").text("3%"))
              : e(".vopros.item-3 .otvet .item").addClass("error");
          });
      }),
      jQuery(document).on("click", ".vopros.item-4 .btn_red", function (t) {
        t.preventDefault();
        var o = e(this).parents(".vopros").find(".otvet .item");
        e(".vopros .otvet .item").removeClass("error"),
          o.each(function (t) {
            e(this).hasClass("active")
              ? (e(".vopros").hide(), e(".vopros.item-5").show(), e(this).addClass("active"), e(".indicator .span-4").addClass("active"), e(".vasha span").text("4%"))
              : e(".vopros.item-4 .otvet .item").addClass("error");
          });
      }),
      jQuery(document).on("click", ".vopros.item-5 .btn_red", function (t) {
        t.preventDefault();
        var o = e(this).parents(".vopros").find(".otvet .item");
        e(".vopros .otvet .item").removeClass("error"),
          o.each(function (t) {
            e(this).hasClass("active")
              ? (e("[name='otvet-5']").val(e(this).find(".desk").text()),
                e(".modal").modal("hide"),
                e("#otvet").modal("show"),
                e(".vopros.item-1").show(),
                e(".vopros.item-5").hide(),
                e(".otvet .item").removeClass("active"),
                e(".indicator .span-5").addClass("active"),
                e(".vasha span").text("5%"))
              : e(".vopros.item-5 .otvet .item").addClass("error");
          });
      }),
      e('a[href^="#"].yak').click(function () {
        return (elementClick = e(this).attr("href")), (destination = e(elementClick).offset().top), e("body,html").animate({ scrollTop: destination }, 1100), !1;
      });
  });
});
