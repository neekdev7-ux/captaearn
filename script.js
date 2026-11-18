// CaptaEarn demo landing — demo-only logic. No real earnings, no backend.
(function () {
  "use strict";
  var CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I lookalikes
  var demoBalance = 0, demoSolved = 0, currentCode = "";

  function randomCode() {
    var s = "";
    for (var i = 0; i < 5; i++) s += CHARS[Math.floor(Math.random() * CHARS.length)];
    return s;
  }
  function showCode() {
    currentCode = randomCode();
    var el = document.getElementById("demoCode");
    if (el) el.textContent = currentCode.split("").join(" ");
  }
  function setMsg(text, cls) {
    var m = document.getElementById("demoMsg");
    if (!m) return;
    m.textContent = text;
    m.className = "demo-msg mt-3 mb-0" + (cls ? " " + cls : "");
  }
  function renderBalance() {
    var b = document.getElementById("demoBalance");
    var s = document.getElementById("demoSolved");
    if (b) b.textContent = "$" + demoBalance.toFixed(3);
    if (s) s.textContent = demoSolved + (demoSolved === 1 ? " solved" : " solved");
  }

  var input = document.getElementById("demoInput");
  var submit = document.getElementById("demoSubmit");
  var refresh = document.getElementById("refreshBtn");

  function verify() {
    if (!input) return;
    var val = input.value.trim().toUpperCase();
    if (val === currentCode) {
      demoBalance += 0.002;
      demoSolved += 1;
      renderBalance();
      setMsg("Correct! +$0.002 demo credit. New code generated.", "ok");
      showCode();
      input.value = "";
    } else {
      setMsg("Not quite — check the code and try again. (Demo only, nothing lost.)", "bad");
      showCode();
      input.value = "";
    }
    input.focus();
  }

  if (submit) submit.addEventListener("click", verify);
  if (input) input.addEventListener("keydown", function (e) { if (e.key === "Enter") verify(); });
  if (refresh) refresh.addEventListener("click", function () {
    showCode();
    setMsg("Fresh code — type the 5 characters shown above.");
    if (input) { input.value = ""; input.focus(); }
  });

  // Hero mock code rotates every 6s so the page feels alive.
  var hero = document.getElementById("heroCode");
  if (hero) setInterval(function () { hero.textContent = randomCode().split("").join(" "); }, 6000);

  // Earnings calculator (estimates from the real app rates).
  var range = document.getElementById("calcRange");
  var vipBox = document.getElementById("calcVip");
  function calc() {
    if (!range) return;
    var n = parseInt(range.value, 10) || 0;
    var rate = vipBox && vipBox.checked ? 0.004 : 0.002;
    var day = n * rate;
    var c = document.getElementById("calcCount");
    var d = document.getElementById("calcDay");
    var mo = document.getElementById("calcMonth");
    var y = document.getElementById("calcYear");
    if (c) c.textContent = n.toLocaleString("en-US");
    if (d) d.textContent = "$" + day.toFixed(2);
    if (mo) mo.textContent = "$" + (day * 30).toFixed(2);
    if (y) y.textContent = "$" + (day * 365).toFixed(2);
  }
  if (range) range.addEventListener("input", calc);
  if (vipBox) vipBox.addEventListener("change", calc);

  // Copy referral link (demo link).
  var copyBtn = document.getElementById("copyRef");
  if (copyBtn) copyBtn.addEventListener("click", function () {
    var link = document.getElementById("refLink");
    if (!link) return;
    var done = function () {
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
      setTimeout(function () { copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy'; }, 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link.value).then(done, done);
    } else {
      link.select();
      try { document.execCommand("copy"); } catch (e) {}
      done();
    }
  });

  showCode();
  renderBalance();
  calc();
})();
