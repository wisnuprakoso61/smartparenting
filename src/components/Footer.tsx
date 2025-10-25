import React from 'react';
import { Heart, Mail, BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">Smart Parenting Diabetes</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Platform edukasi kesehatan untuk orang tua remaja dengan Diabetes Melitus Tipe 2.
              Dikembangkan sebagai bagian dari proyek penelitian akademik Universitas Airlangga.
            </p>
            <p className="text-sm text-gray-500">
              Semua materi edukasi dimiliki oleh peneliti dan dikembangkan melalui kajian literatur,
              studi lapangan, dan diskusi ahli.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Tentang Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('education')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Edukasi 5 Pilar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('articles')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Artikel & Tips
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Fitur</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('reminder')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Reminder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('daily-log')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Catatan Harian
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; 2025 Smart Parenting Diabetes. Developed under academic research project – Universitas Airlangga.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => onNavigate('about')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Tentang
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Kontak
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
