import React from 'react';
import { BookOpen, Calendar, FileText, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart Parenting Diabetes
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Platform edukasi kesehatan untuk orang tua remaja dengan Diabetes Melitus Tipe 2.
              Tingkatkan pengetahuan, motivasi, dan kepatuhan dalam manajemen diabetes di rumah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('education')}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Mulai Belajar
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 border-2 border-blue-600"
              >
                Tentang Program
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fitur Utama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Edukasi Lengkap</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Materi edukasi berbasis 5 Pilar Manajemen Diabetes yang mudah dipahami dan diterapkan
              </p>
              <button
                onClick={() => onNavigate('education')}
                className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
              >
                Pelajari lebih lanjut
                <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Fitur Reminder</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Pengingat otomatis untuk jadwal minum obat, cek gula darah, dan aktivitas fisik
              </p>
              <button
                onClick={() => onNavigate('reminder')}
                className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
              >
                Atur pengingat
                <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Catatan Harian</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Catat aktivitas harian, kadar gula darah, dan pola makan anak dengan mudah
              </p>
              <button
                onClick={() => onNavigate('daily-log')}
                className="text-teal-600 font-medium hover:text-teal-700 inline-flex items-center"
              >
                Mulai mencatat
                <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
