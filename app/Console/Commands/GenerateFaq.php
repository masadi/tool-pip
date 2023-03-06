<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Kategori;
use App\Models\Faq;

class GenerateFaq extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:faq';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $data = [
            [
                'icon' => 'DatabaseIcon',
                'title' => 'Database',
                'deskripsi' => 'Pertanyaan seputar pengelolaan database',
                'faq' => [
                    [
                        'question' => 'Cara menggunakan database versi 5.x di versi 6.x',
                        'answer' => '<ul>
                        <li>Matikan services eRaporSMKDB</li>
                        <li>copy folder eRaporSMK di drive C, amankan di drive lain</li>
                        <li>Uninstall e-Rapor SMK versi 5</li>
                        <li>Restart Komputer/Laptop</li>
                        <li>Install eRapor SMK versi 6</li>
                        <li>Matikan services eRaporSMKDB</li>
                        <li>Hapus folder database di folder C:\\eRaporSMK</li>
                        <li>Copy folder database hasil backup di atas dan paste di folder C:\\eRaporSMK</li>
                        <li>Jalankan services eRaporSMKDB</li>
                        <li>Buka folder C:\\eRaporSMK\\updater</li>
                        <li>Klik kanan file update-erapor.bat dan pilih Run as Administrator</li>
                        <li>Klik kanan file symlink.bat dan pilih Run as Administrator</li>
                        <li>Selesai</li>
                        </ul>',
                    ],
                    [
                        'question' => 'Services eRaporSMKDB tidak bisa running',
                        'answer' => '<p>Masuk ke folder C:\\eRaporSMK\webserver\bin, cari file pg_ctl.bat.</p>
                        <p>Klik kanan file tersebut dan klik Run as Administrator</p>',
                    ],
                ],
            ],
            [
                'icon' => 'TerminalIcon',
                'title' => 'Update Aplikasi',
                'deskripsi' => 'Permasalahan saat update aplikasi',
                'faq' => [
                    [
                        'question' => 'composer update gagal',
                        'answer' => '<p>Jika saat menjalankan perintah <code>composer update</code> tampil seperti gambar dibawah ini: </p>
                        <p><img src="http://app.erapor-smk.net/images/composer-update.png" class="img-fluid"/></p>
                        <p>Silahkan download aplikasi composer <a href="https://getcomposer.org/download/" target="_blank">disini</a></p>
                        Tutup CMD nya kemudian buka kembali dan ulangi dari awal</p>',
                    ],
                    [
                        'question' => 'git pull gagal (part 1)',
                        'answer' => '<p>Jika saat menjalankan perintah <code>git pull</code> tampil seperti gambar dibawah ini: </p>
                        <p><img src="http://app.erapor-smk.net/images/git-pull-part-1.jpeg" class="img-fluid"/></p>
                        <p>Silahkan ketik ulang <code>git config --global --add safe.directory C:/eRaporSMK/dataweb</code> [enter]</p>
                        Kemudian ketik lagi <code>git pull</code> [enter]</p>',
                    ],
                    [
                        'question' => 'git pull gagal (part 2)',
                        'answer' => '<p>Jika saat menjalankan perintah <code>git pull</code> tampil seperti gambar dibawah ini: </p>
                        <p><img src="http://app.erapor-smk.net/images/git-pull-part-2.jpeg" class="img-fluid"/></p>
                        <p>Silahkan ketik <code>git stash</code> [enter]</p>
                        <p>Kemudian ketik lagi <code>git pull</code> [enter]</p>',
                    ],
                    [
                        'question' => 'git pull gagal (part 3)',
                        'answer' => '<p>Jika saat menjalankan perintah <code>git pull</code> tampil seperti gambar dibawah ini: </p>
                        <p><img src="http://app.erapor-smk.net/images/git-pull-part-3.jpeg" class="img-fluid"/></p>
                        <p>Silahkan ketik <code>git clean -df</code> [enter]</p>
                        <p>Kemudian ketik lagi <code>git pull</code> [enter]</p>',
                    ],
                    [
                        'question' => 'git pull gagal (part 4)',
                        'answer' => '<p>Jika saat menjalankan perintah <code>git pull</code> tampil seperti gambar dibawah ini: </p>
                        <p><img src="http://app.erapor-smk.net/images/git-pull-part-4.png" class="img-fluid"/></p>
                        <p>Silahkan download dulu aplikasi git melalui <a href="https://git-scm.com/download/win" target="_blank">disini</a></p>
                        <p>Tutup CMD nya kemudian buka kembali dan ulangi dari awal</p>',
                    ],
                ],
            ],
            [
                'icon' => 'UserXIcon',
                'title' => 'Lupa Password',
                'deskripsi' => 'Apa yang harus dilakukan saat lupa password?',
                'faq' => [
                    [
                        'question' => 'Akun Administrator',
                        'answer' => '<p>Untuk mereset password akun Administrator di aplikasi e-Rapor SMK, silahkan buka file C:\\eRaporSMK\dataweb\\routes\\web.php</p>
                        <p>Disarankan membuka file php dengan aplikasi Notepad++. Jika belum memiliki, silahkan download <a href="https://notepad-plus-plus.org/downloads/" target="_blank">disini</a> kemudian install</p>
                        <p>Setelah membuka file <strong>web.php</strong>, scroll ke paling bawah, dan temukan kode sesuai gambar dibawah ini:</p>
                        <p><img src="http://app.erapor-smk.net/images/web-php-1.png" alt="web.php" class="img-fluid"/></p>
                        <p>Hapus kode dibaris 171 dan baris 180</p>
                        <p>Maka akan menjadi seperti gambar dibawah ini</p>
                        <p><img src="http://app.erapor-smk.net/images/web-php-2.png" alt="web.php" class="img-fluid"/></p>
                        <p>Simpan hasil editnya atau tekan tombol <code>Ctrl + S</code></p>
                        <p>Selanjutkan copy code ini: <code>http://localhost.8154/reset-password/email@gmail.com/password</code></p>
                        <p>Silahkan ganti <code>email@gmail.com</code> dengan email administrator yang terdaftar di aplikasi e-Rapor SMK</p>
                        <p>Dan juga ganti <code>password</code> dengan password baru yang akan dipakai untuk login administrator di aplikasi e-Rapor SMK</p>
                        <p>silahkan akses di browser menggunakan alamat: <code>http://localhost.8154/reset-password/<strong>email.administrator</strong>/<strong>password-baru</strong></code></p>
                        <p><span class="badge bg-danger">WARNING!!! Pastikan email menggunakan huruf kecil semua!!!</span></p>
                        <p><span class="badge bg-danger">WARNING!!! Pastikan email dan password tidak menggunakan spasi!!!</span></p>
                        <p>Setelah selesai mengakses alamat tersebut di browser, jika berhasil akan tampil notifikasi:<br>
                        Password untuk email <strong>xxxx@gmail.com</strong> telah diganti menjadi <strong>password-baru</strong><p>
                        <p>Jika gagal, atau email administrator salah, maka akan tampil norofikasi:<br>
                        Email <strong>xxxx@gmail.com</strong> tidak ditemukan di database!</p>
                        <p>Setelah berhasil mereset password, kembalikan seperti semula kondisi file <code>web.php</code> yang telah diedit atau bisa pakai Ctrl + Z jika aplikasi Notepad++ belum tertutup</p>',
                    ],
                    [
                        'question' => 'Akun Guru dan Peserta Didik',
                        'answer' => '<p>Untuk mereset password akun Guru dan Peserta Didik di aplikasi e-Rapor SMK, bisa dilakukan oleh Administrator pada menu Pengaturan &raquo; Akses Pengguna kemudian cari nama Guru atau Peserta Didik di form pencarian kemudian klik tombol <span class="badge bg-success">Detil</span></p>
                        <p>Setelah muncul pop up pada laman browser, silahkan klik tombol <span class="badge bg-danger">Reset Password</span></p>',
                    ],
                    [
                        'question' => 'Laman register menjadi 404',
                        'answer' => '<p>Khusus pengguna baru yang gagal registrasi karena laman register menjadi 404, lakukan langkah berikut:</p>
                        <ol>
                        <li>Buka CMD run as administrator</li>
                        <li>Ketik <code>cd C:\eRaporSMK\dataweb</code> [enter]</li>
                        <li>Ketik <code>php artisan migrate:refresh</code> [enter]</li>
                        <li>Ketik <code>php artisan db:seed</code> [enter]</li>
                        <li>Ketik <code>php artisan erapor:update</code> [enter]</li>
                        </ol>
                        <p><span class="badge bg-danger">WARNING!!! Aksi ini khusus pengguna baru yang belum pernah input apapun di aplikasi e-Rapor SMK!!!</span></p>',
                    ],
                ],
            ],
            [
                'icon' => 'AnchorIcon',
                'title' => 'Penilaian Prakerin/PKL',
                'deskripsi' => 'Bagaimana Cara Melakukan Penilaian Prakerin/PKL?',
                'faq' => [
                    [
                        'question' => 'Bagaimana Cara Melakukan Penilaian Prakerin/PKL?',
                        'answer' => '<p>Di dapodik, pastikan sudah melakukan ini:</p>
                        <ol>
                        <li>Di menu Sekolah, tab Relasi Dunia Usaha & Industri, sudah ditambah data DUDI</li>
                        <li>Di menu Sekolah, tab Perjanjian Kerja Sama (PKS), pastikan sudah ditambah MoU</li>
                        <li>Klik di data MoU yang sudah ditambah, kemudian klik tombol Prakerin/Teaching Factory</li>
                        <li>Di pop up Prakerin/Teaching Faktor, silahkan tambah Aktifitas PD</li>
                        <li>Klik Aktifitas PD yang sudah ditambah, kemudian klik tombol:
                            <ul>
                            <li>Anggota, tambahkan PD yang mengikuti Prakerin</li>
                            <li>Pembimbing, Tambahkan Guru yang menjadi pembimbing prakerin</li>
                            </ul>
                        </li>
                        </ol>',
                    ],
                ],
            ],
            [
                'icon' => '',
                'title' => '',
                'deskripsi' => '',
                'faq' => [
                    [
                        'question' => '',
                        'answer' => '<p></p>',
                    ],
                ],
            ],
        ];
        foreach($data as $d){
            if($d['title']){
                $kategori = Kategori::updateOrCreate(
                    [
                        'title' => $d['title'],
                    ],
                    [
                        'icon' => $d['icon'],
                        'deskripsi' => $d['deskripsi']
                    ]
                );
                foreach($d['faq'] as $faq){
                    Faq::updateOrCreate(
                        [
                            'kategori_id' => $kategori->id,
                            'question' => $faq['question'],
                        ],
                        [
                            'answer' => $faq['answer']
                        ]
                    );
                }
            }
        }
    }
}
