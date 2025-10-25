import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

const Articles: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Memahami Diabetes Tipe 2 pada Remaja',
      excerpt: 'Diabetes tipe 2 semakin banyak ditemukan pada remaja. Pelajari faktor risiko, gejala, dan cara pencegahan yang efektif.',
      category: 'Edukasi Dasar',
      readTime: '5 menit',
      color: 'blue',
    },
    {
      id: 2,
      title: 'Menu Makanan Sehat untuk Remaja dengan Diabetes',
      excerpt: 'Contoh menu harian yang seimbang, lezat, dan aman untuk remaja dengan diabetes. Termasuk resep praktis dan tips memasak.',
      category: 'Nutrisi',
      readTime: '7 menit',
      color: 'green',
    },
    {
      id: 3,
      title: 'Cara Mengajak Remaja Aktif Berolahraga',
      excerpt: 'Strategi motivasi dan tips praktis untuk mendorong remaja rutin berolahraga tanpa merasa terpaksa.',
      category: 'Aktivitas Fisik',
      readTime: '6 menit',
      color: 'teal',
    },
    {
      id: 4,
      title: 'Panduan Menggunakan Glucometer di Rumah',
      excerpt: 'Langkah demi langkah cara menggunakan alat pengukur gula darah dengan benar dan aman.',
      category: 'Monitoring',
      readTime: '4 menit',
      color: 'red',
    },
    {
      id: 5,
      title: 'Mengatasi Hipoglikemia: Yang Harus Dilakukan',
      excerpt: 'Kenali tanda-tanda gula darah rendah dan langkah pertolongan pertama yang harus segera dilakukan.',
      category: 'Darurat',
      readTime: '5 menit',
      color: 'orange',
    },
    {
      id: 6,
      title: 'Komunikasi Efektif dengan Remaja tentang Diabetes',
      excerpt: 'Tips komunikasi yang membangun dan mendukung untuk membantu remaja menerima dan mengelola kondisinya.',
      category: 'Parenting',
      readTime: '6 menit',
      color: 'purple',
    },
    {
      id: 7,
      title: 'Menyimpan dan Menggunakan Insulin dengan Benar',
      excerpt: 'Panduan lengkap tentang penyimpanan insulin, teknik penyuntikan, dan rotasi lokasi suntik.',
      category: 'Terapi',
      readTime: '8 menit',
      color: 'violet',
    },
    {
      id: 8,
      title: 'Diabetes dan Kesehatan Mental Remaja',
      excerpt: 'Memahami dampak psikologis diabetes pada remaja dan cara mendukung kesehatan mental mereka.',
      category: 'Kesehatan Mental',
      readTime: '7 menit',
      color: 'pink',
    },
  ];

  const getCategoryColor = (color: string) => {
    const colors: Record<string, { bg: string; text: string; badge: string }> = {
      blue: { bg: 'from-blue-50 to-blue-100', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
      green: { bg: 'from-green-50 to-green-100', text: 'text-green-700', badge: 'bg-green-100 text-green-700' },
      teal: { bg: 'from-teal-50 to-teal-100', text: 'text-teal-700', badge: 'bg-teal-100 text-teal-700' },
      red: { bg: 'from-red-50 to-red-100', text: 'text-red-700', badge: 'bg-red-100 text-red-700' },
      orange: { bg: 'from-orange-50 to-orange-100', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-700' },
      purple: { bg: 'from-purple-50 to-purple-100', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-700' },
      violet: { bg: 'from-violet-50 to-violet-100', text: 'text-violet-700', badge: 'bg-violet-100 text-violet-700' },
      pink: { bg: 'from-pink-50 to-pink-100', text: 'text-pink-700', badge: 'bg-pink-100 text-pink-700' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artikel & Tips</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kumpulan artikel edukatif, tips praktis, dan panduan lengkap seputar manajemen
            diabetes pada remaja untuk orang tua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => {
            const colors = getCategoryColor(article.color);
            return (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${colors.bg}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <button className={`inline-flex items-center font-medium ${colors.text} group-hover:underline`}>
                    Baca selengkapnya
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ingin Artikel Topik Tertentu?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Kami terus menambahkan konten baru. Jika ada topik khusus yang ingin Anda pelajari,
            silakan hubungi tim kami melalui halaman kontak.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
