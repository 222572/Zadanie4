function goTo(id) {
  document
    .querySelectorAll(".window")
    .forEach((w) => w.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function validateForm() {
  const fio = document.getElementById("fio").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const polis = document.getElementById("polis").value.trim();

  if (!fio || !dob || !polis) {
    document.getElementById("error-dialog").classList.add("active");
  } else {
    goTo("select-doctor");
  }
}

function closeDialog(id) {
  document.getElementById(id).classList.remove("active");
}

function confirmDoctor() {
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Упростим: случайное подтверждение
  const confirmed = Math.random() > 0.5;

  if (!doctor || !date || !time) {
    alert("Выберите врача, дату и время");
    return;
  }

  if (confirmed) {
    goTo("success");
  } else {
    goTo("alternative");
  }
}

function acceptAlternative() {
  const date = document.getElementById("alt-date").value;
  const time = document.getElementById("alt-time").value;
  if (!date || !time) {
    alert("Выберите альтернативные дату и время");
    return;
  }
  goTo("success");
}
