import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan atau saran? Tim peneliti kami siap membantu Anda.
            Kirimkan pesan dan kami akan merespons secepatnya.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Pesan Terkirim!</h3>
              <p className="text-gray-600">
                Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda kembali.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subjek <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Pilih subjek pesan</option>
                  <option value="question">Pertanyaan Umum</option>
                  <option value="feedback">Saran & Masukan</option>
                  <option value="technical">Masalah Teknis</option>
                  <option value="content">Request Konten</option>
                  <option value="research">Tentang Penelitian</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan
              </button>
            </form>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Tim Peneliti</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              Program Smart Parenting Diabetes dikembangkan oleh tim peneliti dari Universitas Airlangga.
            </p>
            <p className="text-gray-600 text-sm">
              Email: <a href="mailto:smartparenting@unair.ac.id" className="text-blue-600 hover:underline">smartparenting@unair.ac.id</a>
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Waktu Respons</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Kami berusaha merespons setiap pesan dalam waktu 1-2 hari kerja.
              Untuk pertanyaan medis mendesak, segera hubungi dokter atau fasilitas kesehatan terdekat.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Catatan Penting:</strong> Website ini adalah platform
            edukasi dan bukan pengganti konsultasi medis profesional. Untuk diagnosis dan pengobatan,
            selalu konsultasikan dengan dokter atau tenaga kesehatan yang berkualifikasi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
