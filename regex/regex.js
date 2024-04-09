document.getElementById('emailInput').addEventListener('input', function() {
    var email = document.getElementById('emailInput').value;
    var regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (regex.test(email)) {
        document.getElementById('result').innerText = 'Format email benar.';
    } else {
        document.getElementById('result').innerText = 'Format email salah.';
    }
});

// Validasi Tanggal (format YYYY-MM-DD)
document.getElementById('tanggalInput').addEventListener('input', function() {
    var tanggal = document.getElementById('tanggalInput').value;
    var regexTanggal = /^\d{4}-\d{2}-\d{2}$/;

    if (regexTanggal.test(tanggal)) {
        document.getElementById('tanggalResult').innerText = 'Format tanggal benar.';
    } else {
        document.getElementById('tanggalResult').innerText = 'Format tanggal salah.';
    }
});

// Validasi Nomor Telepon (format internasional)
document.getElementById('teleponInput').addEventListener('input', function() {
    var telepon = document.getElementById('teleponInput').value;
    var regexTelepon = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (regexTelepon.test(telepon)) {
        document.getElementById('teleponResult').innerText = 'Format telepon benar.';
    } else {
        document.getElementById('teleponResult').innerText = 'Format telepon salah.';
    }
});

// Validasi Password yang Kuat
document.getElementById('passwordInput').addEventListener('input', function() {
    var password = document.getElementById('passwordInput').value;
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regexPassword.test(password)) {
        document.getElementById('passwordResult').innerText = 'Format password kuat.';
    } else {
        document.getElementById('passwordResult').innerText = 'Format password lemah.';
    }
});
// Validasi Ip
document.getElementById('ipInput').addEventListener('input', function() {
    var ip = document.getElementById('ipInput').value;
    var regexIP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (regexIP.test(ip)) {
        document.getElementById('ipResult').innerText = 'Format alamat IP benar.';
    } else {
        document.getElementById('ipResult').innerText = 'Format alamat IP salah.';
    }
});

