// Ambil semua tombol
const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

// Tambahkan event listener ke setiap tombol
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Fungsi untuk menangani klik pada tombol
function handleButtonClick(event) {
    const value = event.target.getAttribute('data-value');
    
    if (value === 'C') {
        clearDisplay();
    } else if (value === '=') {
        calculateResult();
    } else {
        appendToDisplay(value);
    }
}

// Menambahkan input ke layar tampilan
function appendToDisplay(value) {
    display.value += value;
}

// Menghapus tampilan layar
function clearDisplay() {
    display.value = '';
}

// Fungsi untuk menghitung hasil
function calculateResult() {
    try {
        display.value = eval(display.value);  // Menggunakan eval untuk melakukan operasi matematika
    } catch (error) {
        display.value = 'Error';
    }
}
