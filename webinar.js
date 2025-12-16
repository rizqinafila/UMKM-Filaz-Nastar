function showError(idInput, idError, message) {
  const el = document.getElementById(idInput);
  const err = document.getElementById(idError);
  el.classList.add("invalid");
  err.textContent = message;
}

function clearError(idInput, idError) {
  const el = document.getElementById(idInput);
  const err = document.getElementById(idError);
  el.classList.remove("invalid");
  err.textContent = "";
}

document.getElementById("nama").addEventListener("input", () => {
  const nama = document.getElementById("nama").value.trim();
  if (nama.length < 3) showError("nama", "err-nama", "Nama minimal 3 karakter.");
  else clearError("nama", "err-nama");
});

document.getElementById("email").addEventListener("input", () => {
  const email = document.getElementById("email").value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!valid) showError("email", "err-email", "Format email tidak valid.");
  else if (email.endsWith("@yahoo.com")) showError("email", "err-email", "Email yahoo.com tidak diperbolehkan.");
  else clearError("email", "err-email");
});

document.getElementById("hp").addEventListener("input", () => {
  const hp = document.getElementById("hp").value.trim();
  if (!/^[0-9]+$/.test(hp)) showError("hp", "err-hp", "No HP hanya boleh angka.");
  else clearError("hp", "err-hp");
});

document.getElementById("topik").addEventListener("change", () => {
  const value = document.getElementById("topik").value;
  if (value === "") showError("topik", "err-topik", "Silakan pilih topik.");
  else clearError("topik", "err-topik");
});

document.getElementById("setuju").addEventListener("change", () => {
  const setuju = document.getElementById("setuju").checked;
  if (!setuju) showError("setuju", "err-setuju", "Kamu harus menyetujui S&K.");
  else clearError("setuju", "err-setuju");
});

document.getElementById("webinarForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const hp = document.getElementById("hp").value.trim();
  const topik = document.getElementById("topik").value;
  const setuju = document.getElementById("setuju").checked;

  if (nama.length < 3) { 
    showError("nama", "err-nama", "Nama minimal 3 karakter."); valid = false; }
  const formatEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!formatEmail) { 
    showError("email", "err-email", "Email tidak valid."); valid = false; }

  else if (email.endsWith("@yahoo.com")) { 
    showError("email", "err-email", "Tidak boleh menggunakan domain yahoo.com."); valid = false; }

  if (!/^[0-9]+$/.test(hp)) { 
    showError("hp", "err-hp", "Nomor HP harus angka."); valid = false; }

  if (topik === "") { 
    showError("topik", "err-topik", "Pilih satu topik."); valid = false; }

  if (!setuju) { 
    showError("setuju", "err-setuju", "Setujui syarat & ketentuan."); valid = false; }

  if (valid) {
    alert("Pendaftaran berhasil! Kami akan menghubungi kamu via email.");
    this.reset();
    
    ["nama","email","hp","topik","setuju"].forEach(id => document.getElementById(id)?.classList.remove("invalid"));
    ["err-nama","err-email","err-hp","err-topik","err-setuju"].forEach(id => document.getElementById(id).textContent = "");
  }
});
