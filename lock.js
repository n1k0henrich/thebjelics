let allowed = false;

while (!allowed) {
  const password = prompt("Bitte gib das Passwort ein:");
  if (password === "NikoNadja") {
    allowed = true;
  } else {
    alert("Falsches Passwort.");
  }
}