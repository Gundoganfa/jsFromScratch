// jsCodeRunner.js: Ziyaretçi kodunu çalıştıran script
// Kod editörü HTML'ini otomatik ekle
if (!document.getElementById('js-code-runner')) {
    var runnerDiv = document.createElement('div');
    runnerDiv.id = 'js-code-runner';
    runnerDiv.innerHTML = '<textarea id="js-input" rows="6" cols="50">// Buraya JavaScript kodunuzu yazın</textarea><br><button onclick="runUserCode()">Test</button><div id="js-output"></div>';
    document.body.appendChild(runnerDiv);
}
function runUserCode() {
    const code = document.getElementById("js-input").value;
    try {
        eval(code); // Sadece demo/test amaçlı, güvenlik için dikkatli kullanın
        document.getElementById("js-output").textContent = "Kod başarıyla çalıştı!";
    } catch (e) {
        document.getElementById("js-output").textContent = "Hata: " + e.message;
    }
}
