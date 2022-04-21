function Damage() {
  //Initialization
  const DAMAGE = document.getElementById("Damage").value
  const CRIT = document.getElementById("Crit").value
  const DOT = document.getElementById("Dot").value

  //Electric
  let dmg1 = +DAMAGE + (CRIT / 20)
  document.getElementById("electric").textContent = `First hit: ${dmg1}, Second hit: ${dmg1 * .7}, Third hit: ${dmg1 * .3}`

  //Gamble
}
