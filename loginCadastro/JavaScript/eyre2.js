document.addEventListener("DOMContentLoaded", function () {
    const dataNascimentoInput = document.getElementById("birthdate");
  
    dataNascimentoInput.addEventListener("click", function () {
      const picker = new luxon.CalendarPicker(dataNascimentoInput);
      picker.show();
    });
  });