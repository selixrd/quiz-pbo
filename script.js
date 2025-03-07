const questions = [
    {
        number: 1,
        question: "Apa yang dimaksud dengan Pemrograman Berorientasi Objek (PBO)?",
        options: ["Pendekatan untuk mendesain perangkat lunak dengan menggabungkan data dan fungsi dalam objek", "Teknik untuk membuat program berbasis fungsi", "Teknik untuk mendeklarasikan variabel dalam pemrograman", "Penggunaan bahasa pemrograman berbasis teks"],
        answer: 0
    },
    {
        number: 2,
        question: "Dalam PBO, apa yang dimaksud dengan class?",
        options: ["Tempat untuk menyimpan data hanya", "Tempat untuk mendefinisikan objek", "Tempat untuk menyimpan file program", "Struktur data yang menyimpan metode saja"],
        answer: 1
    },
    {
        number: 3,
        question: "Apa yang dimaksud dengan object dalam konsep PBO?",
        options: ["Sebuah tipe data", "Sebuah instance dari class", "Sebuah algoritma dalam program", "Kumpulan variabel dalam program"],
        answer: 1
    },
    {
        number: 4,
        question: "Apa itu encapsulation dalam PBO?",
        options: ["Menggabungkan beberapa kelas menjadi satu", "Menyembunyikan detail implementasi dan hanya menampilkan interface", "Membuat objek menjadi lebih cepat", "Menggabungkan metode dalam satu kelas"],
        answer: 1
    },
    {
        number: 5,
        question: "Apa itu inheritance dalam PBO?",
        options: ["Teknik untuk menyembunyikan data", "Kemampuan kelas untuk mewarisi atribut dan metode dari kelas lain", "Teknik untuk membuat kelas baru tanpa atribut", "Teknik untuk menghapus metode yang ada di kelas lain"],
        answer: 1
    },
    {
        number: 6,
        question: "Apa yang dimaksud dengan constructor dalam PBO?",
        options: ["Fungsi yang digunakan untuk mendeklarasikan variabel", "Fungsi yang secara otomatis dipanggil saat objek dibuat", "Fungsi untuk menghapus objek", "Fungsi untuk mengubah nilai variabel"],
        answer: 1
    },
    {
        number: 7,
        question: "Dalam PBO, apa itu method?",
        options: ["Kumpulan data dalam sebuah objek", "Fungsi yang terikat pada objek dan dapat mengakses data objek", "Teknik untuk mendeklarasikan kelas", "Variabel yang digunakan dalam kelas"],
        answer: 1
    },
    {
        number: 8,
        question: "Apa itu access modifier dalam PBO?",
        options: ["Modifier yang digunakan untuk mendeklarasikan objek", "Modifier yang menentukan aksesibilitas atribut dan metode di dalam kelas", "Modifier yang mengubah kelas menjadi objek", "Modifier yang digunakan untuk menghapus objek"],
        answer: 1
    },
    {
        number: 9,
        question: "Modifier akses manakah yang memungkinkan akses data hanya dalam kelas yang sama dan kelas turunannya?",
        options: ["Public", "Private", "Protected", "Default"],
        answer: 2
    },
    {
        number: 10,
        question: "Apa perbedaan antara public dan private dalam modifier akses?",
        options: ["Public bisa diakses di semua kelas, private hanya bisa diakses di dalam kelas itu sendiri", "Private bisa diakses oleh semua kelas, public hanya diakses di dalam kelas", "Public dan private memiliki akses yang sama", "Public digunakan untuk metode, private hanya untuk variabel"],
        answer: 0
    },
    {
        number: 11,
        question: "Apa yang dimaksud dengan overloading dalam PBO?",
        options: ["Membuat metode dengan nama yang sama tetapi dengan parameter yang berbeda", "Mengganti metode yang sudah ada dalam kelas induk", "Menambah metode baru dalam kelas induk", "Mengganti nama kelas"],
        answer: 0
    },
    {
        number: 12,
        question: "Apa yang dimaksud dengan overriding dalam PBO?",
        options: ["Membuat metode baru dalam kelas anak dengan nama yang sama dengan metode di kelas induk", "Menghapus metode yang ada di kelas induk", "Menambah atribut baru di kelas induk", "Membuat konstruktor baru dalam kelas anak"],
        answer: 0
    },
    {
        number: 13,
        question: "Apa itu polymorphism dalam PBO?",
        options: ["Kemampuan untuk menyembunyikan detail implementasi", "Kemampuan objek untuk memiliki banyak bentuk atau perilaku", "Menggabungkan beberapa objek menjadi satu", "Penggunaan metode untuk mengakses data objek"],
        answer: 1
    },
    {
        number: 14,
        question: "Apa yang dimaksud dengan interface dalam PBO?",
        options: ["Kelas yang tidak dapat diinstansiasi", "Sebuah kelas yang mengimplementasikan lebih dari satu kelas induk", "Sebuah blueprint untuk kelas yang tidak berisi implementasi", "Sebuah objek yang menyimpan banyak metode"],
        answer: 2
    },
    {
        number: 15,
        question: "Kapan kita menggunakan kata kunci super dalam PBO?",
        options: ["Untuk mengakses atribut atau metode kelas induk dari kelas anak", "Untuk membuat objek baru", "Untuk mendeklarasikan variabel dalam kelas induk", "Untuk mendeklarasikan kelas baru"],
        answer: 0
    },
    {
        number: 16,
        question: "Apa yang dimaksud dengan abstract class dalam PBO?",
        options: ["Kelas yang tidak dapat memiliki metode", "Kelas yang hanya dapat diinstansiasi oleh objek lain", "Kelas yang tidak dapat diinstansiasi langsung dan memiliki metode abstract", "Kelas yang hanya berisi variabel"],
        answer: 2
    },
    {
        number: 17,
        question: "Apa itu final dalam modifier akses di PBO?",
        options: ["Menandakan bahwa sebuah kelas tidak dapat diubah", "Menandakan bahwa sebuah metode tidak dapat diubah atau di-override", "Menandakan bahwa sebuah variabel tidak dapat diubah setelah diberi nilai", "Semua jawaban benar"],
        answer: 3
    },
    {
        number: 18,
        question: "Apa yang dimaksud dengan static dalam PBO?",
        options: ["Atribut atau metode yang hanya bisa diakses melalui objek", "Atribut atau metode yang dapat diakses tanpa membuat objek", "Atribut atau metode yang dapat diubah secara otomatis", "Atribut yang hanya ada di kelas induk"],
        answer: 1
    },
    {
        number: 19,
        question: "Apa yang dimaksud dengan getter dan setter dalam PBO?",
        options: ["Metode yang digunakan untuk menambahkan dan menghapus objek", "Metode yang digunakan untuk mengakses dan memodifikasi nilai atribut", "Metode untuk menyembunyikan detail implementasi", "Metode untuk mengganti kelas induk"],
        answer: 1
    },
    {
        number: 20,
        question: "Apa peran constructor dalam sebuah kelas?",
        options: ["Menyimpan data yang dimiliki objek", "Menambahkan objek ke dalam kelas", "Menjalankan kode saat objek pertama kali dibuat", "Menyembunyikan data dalam kelas"],
        answer: 2
    }
];
questions.push(
    {
        number: 21,
        question: "Apa itu constructor chaining dalam PBO?",
        options: ["Memanggil konstruktor dari kelas yang lebih rendah", "Memanggil konstruktor lain dalam satu kelas menggunakan kata kunci this atau super", "Menghubungkan dua objek dengan cara tertentu", "Membuat objek dengan parameter yang berbeda"],
        answer: 1
    },
    {
        number: 22,
        question: "Apa yang dimaksud dengan instance dalam PBO?",
        options: ["Variabel yang digunakan untuk membuat kelas", "Sebuah objek yang dibuat berdasarkan blueprint kelas", "Metode yang digunakan untuk menyembunyikan data", "Sebuah atribut dalam kelas"],
        answer: 1
    },
    {
        number: 23,
        question: "Apa yang terjadi jika kita mengubah modifier akses sebuah atribut menjadi private?",
        options: ["Atribut hanya dapat diakses dalam kelas yang sama", "Atribut dapat diakses dari kelas manapun", "Atribut tidak dapat diakses oleh objek", "Atribut dapat diakses oleh objek lain"],
        answer: 0
    },
    {
        number: 24,
        question: "Apa yang dimaksud dengan method signature?",
        options: ["Nama metode dan parameter yang diterima oleh metode", "Nama metode dan jenis data yang dikembalikan oleh metode", "Nama metode dan kelas tempat metode berada", "Nama kelas yang menggunakan metode tersebut"],
        answer: 0
    },
    {
        number: 25,
        question: "Pada PBO, objek diciptakan dengan menggunakan kata kunci:",
        options: ["this", "new", "super", "class"],
        answer: 1
    },
    {
        number: 26,
        question: "Apa yang dimaksud dengan dynamic method dispatch dalam PBO?",
        options: ["Metode yang dipanggil secara otomatis pada saat program dijalankan", "Pemilihan metode yang sesuai dengan tipe objek pada saat runtime", "Menentukan metode mana yang akan digunakan saat kompilasi", "Menyembunyikan metode dalam kelas"],
        answer: 1
    },
    {
        number: 27,
        question: "Bagaimana cara mendeklarasikan kelas di Java?",
        options: ["class Kelas { }", "object Kelas { }", "define class Kelas { }", "create class Kelas { }"],
        answer: 0
    },
    {
        number: 28,
        question: "Apa yang dimaksud dengan aggregation dalam hubungan antar kelas?",
        options: ["Kelas memiliki objek dari kelas lain sebagai bagian dari dirinya", "Kelas mengubah objek dari kelas lain", "Kelas memiliki relasi dengan kelas lain hanya secara statis", "Kelas mewarisi metode dari kelas lain"],
        answer: 0
    },
    {
        number: 29,
        question: "Apa itu association dalam konsep relasi antar kelas?",
        options: ["Ketika objek satu kelas memiliki hubungan dengan objek kelas lain", "Ketika kelas mewarisi metode dari kelas lain", "Ketika objek dalam kelas dapat mengakses data di kelas lain", "Ketika dua kelas saling berbagi atribut"],
        answer: 0
    },
    {
        number: 30,
        question: "Apa tujuan dari refactoring dalam pengembangan perangkat lunak berorientasi objek?",
        options: ["Mengubah struktur program untuk meningkatkan kinerja tanpa mengubah fungsionalitas", "Mengganti nama kelas atau objek", "Menambah jumlah kelas dalam program", "Menghapus kode yang tidak digunakan"],
        answer: 0
    }
);
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);

function loadQuestion(index) {
    document.getElementById("question").textContent = `${questions[index].number}. ${questions[index].question}`;
    document.getElementById("options").innerHTML = questions[index].options.map((option, i) => 
        `<button onclick="selectAnswer(${i})" class="${userAnswers[index] === i ? 'selected' : ''}">${String.fromCharCode(65 + i)}. ${option}</button>`
    ).join("");
    document.getElementById("progress").textContent = `${userAnswers.filter(ans => ans !== null).length}/${questions.length}`;
}

function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    loadQuestion(currentQuestionIndex);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function submitQuiz() {
    if (userAnswers.includes(null)) {
        alert("Anda harus menjawab semua soal terlebih dahulu!");
        return;
    }
    let score = userAnswers.reduce((score, ans, i) => score + (ans === questions[i].answer ? 1 : 0), 0);
    document.getElementById("quiz-container").innerHTML = `<h2>Skor Anda: ${score}/${questions.length}</h2>`;
}

document.addEventListener("DOMContentLoaded", () => loadQuestion(currentQuestionIndex));