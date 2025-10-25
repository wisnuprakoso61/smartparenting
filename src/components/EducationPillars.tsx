import React, { useState } from 'react';
import { BookOpen, Apple, Activity, Droplet, Syringe, X } from 'lucide-react';

const EducationPillars: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      title: 'Pilar 1: Edukasi',
      icon: BookOpen,
      color: 'blue',
      description: 'Pemahaman dasar tentang diabetes dan pentingnya manajemen yang tepat',
      details: [
        'Memahami apa itu Diabetes Melitus Tipe 2 pada remaja',
        'Mengenali tanda dan gejala hipoglikemia dan hiperglikemia',
        'Pentingnya kontrol rutin dan pemeriksaan kesehatan',
        'Peran orang tua dalam mendukung anak dengan diabetes',
        'Komunikasi efektif dengan tenaga kesehatan',
        'Edukasi untuk anak tentang kondisi mereka',
      ],
    },
    {
      id: 2,
      title: 'Pilar 2: Nutrisi & Diet',
      icon: Apple,
      color: 'green',
      description: 'Panduan nutrisi dan pola makan sehat untuk remaja dengan diabetes',
      details: [
        'Prinsip dasar diet untuk diabetes pada remaja',
        'Perhitungan karbohidrat dan indeks glikemik',
        'Porsi makan yang tepat dan jadwal makan teratur',
        'Pemilihan camilan sehat untuk remaja',
        'Menu makanan seimbang untuk sehari-hari',
        'Tips praktis memasak makanan diabetes-friendly',
      ],
    },
    {
      id: 3,
      title: 'Pilar 3: Aktivitas Fisik',
      icon: Activity,
      color: 'teal',
      description: 'Pentingnya olahraga dan aktivitas fisik dalam kontrol gula darah',
      details: [
        'Manfaat aktivitas fisik untuk remaja dengan diabetes',
        'Jenis olahraga yang direkomendasikan',
        'Durasi dan frekuensi aktivitas fisik ideal',
        'Cara memotivasi remaja untuk aktif bergerak',
        'Pencegahan cedera saat berolahraga',
        'Monitoring gula darah sebelum dan sesudah olahraga',
      ],
    },
    {
      id: 4,
      title: 'Pilar 4: Monitoring Gula Darah',
      icon: Droplet,
      color: 'red',
      description: 'Panduan pemeriksaan dan pencatatan kadar gula darah',
      details: [
        'Cara menggunakan alat pengukur gula darah (glucometer)',
        'Waktu yang tepat untuk cek gula darah',
        'Target kadar gula darah normal untuk remaja',
        'Interpretasi hasil pemeriksaan gula darah',
        'Pencatatan dan dokumentasi hasil pemeriksaan',
        'Kapan harus menghubungi dokter',
      ],
    },
    {
      id: 5,
      title: 'Pilar 5: Terapi Insulin & Obat',
      icon: Syringe,
      color: 'purple',
      description: 'Panduan penggunaan insulin dan obat diabetes yang benar',
      details: [
        'Jenis-jenis insulin dan obat anti diabetes',
        'Cara menyimpan insulin dengan benar',
        'Teknik penyuntikan insulin yang tepat',
        'Jadwal dan dosis obat yang harus dipatuhi',
        'Mengatasi efek samping obat',
        'Pentingnya kepatuhan minum obat',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; button: string; badge: string }> = {
      blue: {
        bg: 'from-blue-50 to-blue-100',
        icon: 'bg-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        badge: 'bg-blue-100 text-blue-700',
      },
      green: {
        bg: 'from-green-50 to-green-100',
        icon: 'bg-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        badge: 'bg-green-100 text-green-700',
      },
      teal: {
        bg: 'from-teal-50 to-teal-100',
        icon: 'bg-teal-600',
        button: 'bg-teal-600 hover:bg-teal-700',
        badge: 'bg-teal-100 text-teal-700',
      },
      red: {
        bg: 'from-red-50 to-red-100',
        icon: 'bg-red-600',
        button: 'bg-red-600 hover:bg-red-700',
        badge: 'bg-red-100 text-red-700',
      },
      purple: {
        bg: 'from-violet-50 to-violet-100',
        icon: 'bg-violet-600',
        button: 'bg-violet-600 hover:bg-violet-700',
        badge: 'bg-violet-100 text-violet-700',
      },
    };
    return colors[color];
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">5 Pilar Manajemen Diabetes</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lima pilar fundamental dalam manajemen diabetes yang perlu dipahami dan diterapkan
            untuk mencapai kontrol gula darah yang optimal dan kualitas hidup yang baik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const colors = getColorClasses(pillar.color);
            return (
              <div
                key={pillar.id}
                className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-1`}
                onClick={() => setSelectedPillar(pillar.id)}
              >
                <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{pillar.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{pillar.description}</p>
                <button className={`${colors.button} text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200`}>
                  Pelajari Lebih Lanjut
                </button>
              </div>
            );
          })}
        </div>

        {selectedPillar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const pillar = pillars.find((p) => p.id === selectedPillar);
                if (!pillar) return null;
                const Icon = pillar.icon;
                const colors = getColorClasses(pillar.color);
                return (
                  <>
                    <div className={`bg-gradient-to-br ${colors.bg} p-8 relative`}>
                      <button
                        onClick={() => setSelectedPillar(null)}
                        className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                      >
                        <X className="w-6 h-6 text-gray-700" />
                      </button>
                      <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{pillar.title}</h2>
                      <p className="text-gray-700">{pillar.description}</p>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Materi Pembelajaran</h3>
                      <ul className="space-y-4">
                        {pillar.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className={`${colors.badge} px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0`}>
                              {index + 1}
                            </span>
                            <span className="text-gray-700 pt-1">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 bg-gray-50 rounded-xl p-6">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          <strong className="text-gray-900">Catatan:</strong> Materi ini merupakan panduan
                          umum. Selalu konsultasikan dengan dokter atau tenaga kesehatan untuk mendapatkan
                          saran yang sesuai dengan kondisi spesifik anak Anda.
                        </p>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationPillars;
