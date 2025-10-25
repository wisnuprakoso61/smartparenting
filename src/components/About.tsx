import React from 'react';
import { Target, Users, BookOpen, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Tentang Program</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Smart Parenting Diabetes adalah program edukasi kesehatan yang dikembangkan
            melalui riset akademik untuk mendukung orang tua dalam merawat remaja dengan
            Diabetes Melitus Tipe 2.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tujuan Program</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Meningkatkan pengetahuan orang tua tentang manajemen diabetes pada remaja</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Memotivasi orang tua untuk aktif dalam pengawasan dan perawatan</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Meningkatkan kepatuhan dalam menjalankan terapi dan gaya hidup sehat</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Menyediakan panduan praktis untuk implementasi di rumah</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latar Belakang</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Program ini dikembangkan berdasarkan kajian literatur, studi lapangan, dan
              diskusi dengan para ahli di bidang diabetes dan kesehatan anak.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Konten edukasi dirancang khusus untuk memenuhi kebutuhan orang tua dalam
              memahami dan menerapkan prinsip-prinsip manajemen diabetes yang efektif,
              dengan pendekatan yang mudah dipahami dan aplikatif.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Manfaat Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Untuk Orang Tua</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Pemahaman komprehensif tentang diabetes tipe 2 pada remaja</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Keterampilan praktis dalam monitoring dan perawatan</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Kepercayaan diri dalam mendampingi anak</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Untuk Remaja</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Dukungan orang tua yang lebih terstruktur</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Kontrol gula darah yang lebih baik</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Kualitas hidup yang meningkat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Catatan Penting:</strong> Semua materi edukasi dalam
            website ini merupakan hasil riset dan dimiliki oleh peneliti. Website ini dikembangkan
            sebagai bagian dari proyek penelitian akademik di Universitas Airlangga dengan tujuan
            menyediakan media edukasi yang mudah diakses oleh orang tua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
