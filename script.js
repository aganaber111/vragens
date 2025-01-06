// Koyu mod açma/kapama butonu için öğeyi seç
const toggleButton = document.getElementById('toggleButton');

// Body elementini al
const body = document.body;

// Butona tıklama olayını dinleyin
toggleButton.addEventListener('click', () => {
    // Body etiketine 'dark-mode' sınıfını ekle veya kaldır
    body.classList.toggle('dark-mode');
});
