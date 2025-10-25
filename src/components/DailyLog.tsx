import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Trash2, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface LogEntry {
  id: string;
  date: string;
  time: string;
  glucoseLevel: string;
  meal: string;
  activity: string;
  notes: string;
}

const DailyLog: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newLog, setNewLog] = useState({
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    glucoseLevel: '',
    meal: '',
    activity: '',
    notes: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('diabetes-logs');
    if (saved) {
      setLogs(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('diabetes-logs', JSON.stringify(logs));
  }, [logs]);

  const addLog = () => {
    if (newLog.date && newLog.time) {
      const log: LogEntry = {
        id: Date.now().toString(),
        ...newLog,
      };
      setLogs([log, ...logs]);
      setNewLog({
        date: new Date().toISOString().split('T')[0],
        time: new Date().toTimeString().slice(0, 5),
        glucoseLevel: '',
        meal: '',
        activity: '',
        notes: '',
      });
      setShowAddForm(false);
    }
  };

  const deleteLog = (id: string) => {
    setLogs(logs.filter((l) => l.id !== id));
  };

  const getGlucoseStatus = (level: string) => {
    const value = parseInt(level);
    if (isNaN(value)) return null;
    if (value < 70) return { status: 'Rendah', color: 'text-blue-600', icon: TrendingDown };
    if (value > 180) return { status: 'Tinggi', color: 'text-red-600', icon: TrendingUp };
    return { status: 'Normal', color: 'text-green-600', icon: Minus };
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Catatan Harian</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Catat aktivitas harian, kadar gula darah, pola makan, dan catatan penting lainnya.
            Monitoring yang konsisten membantu kontrol diabetes yang lebih baik.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Riwayat Catatan</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
            >
              <Plus className="w-5 h-5 mr-2" />
              Tambah Catatan
            </button>
          </div>

          {showAddForm && (
            <div className="bg-teal-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Catatan Baru</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    value={newLog.date}
                    onChange={(e) => setNewLog({ ...newLog, date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Waktu
                  </label>
                  <input
                    type="time"
                    value={newLog.time}
                    onChange={(e) => setNewLog({ ...newLog, time: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kadar Gula Darah (mg/dL)
                  </label>
                  <input
                    type="number"
                    value={newLog.glucoseLevel}
                    onChange={(e) => setNewLog({ ...newLog, glucoseLevel: e.target.value })}
                    placeholder="Contoh: 120"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Makanan/Camilan
                  </label>
                  <input
                    type="text"
                    value={newLog.meal}
                    onChange={(e) => setNewLog({ ...newLog, meal: e.target.value })}
                    placeholder="Contoh: Nasi + sayur + ayam"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aktivitas Fisik
                </label>
                <input
                  type="text"
                  value={newLog.activity}
                  onChange={(e) => setNewLog({ ...newLog, activity: e.target.value })}
                  placeholder="Contoh: Jalan kaki 30 menit"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catatan Tambahan
                </label>
                <textarea
                  value={newLog.notes}
                  onChange={(e) => setNewLog({ ...newLog, notes: e.target.value })}
                  placeholder="Catatan lain yang perlu diingat..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={addLog}
                  className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
                >
                  Simpan
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Batal
                </button>
              </div>
            </div>
          )}

          {logs.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Belum ada catatan. Mulai catat aktivitas harian Anda!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {logs.map((log) => {
                const glucoseStatus = getGlucoseStatus(log.glucoseLevel);
                const StatusIcon = glucoseStatus?.icon;
                return (
                  <div
                    key={log.id}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-teal-300 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-lg font-semibold text-gray-900">
                            {new Date(log.date).toLocaleDateString('id-ID', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-600">{log.time}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteLog(log.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {log.glucoseLevel && (
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-1">Gula Darah</p>
                          <div className="flex items-center justify-between">
                            <p className="text-2xl font-bold text-gray-900">{log.glucoseLevel} <span className="text-sm font-normal text-gray-600">mg/dL</span></p>
                            {glucoseStatus && StatusIcon && (
                              <div className={`flex items-center ${glucoseStatus.color}`}>
                                <StatusIcon className="w-5 h-5 mr-1" />
                                <span className="text-sm font-medium">{glucoseStatus.status}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {log.meal && (
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-1">Makanan</p>
                          <p className="text-gray-900">{log.meal}</p>
                        </div>
                      )}
                      {log.activity && (
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-1">Aktivitas Fisik</p>
                          <p className="text-gray-900">{log.activity}</p>
                        </div>
                      )}
                    </div>

                    {log.notes && (
                      <div className="mt-4 bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">Catatan</p>
                        <p className="text-gray-900">{log.notes}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Target Gula Darah</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Sebelum makan: 80-130 mg/dL</li>
              <li>• 2 jam setelah makan: &lt;180 mg/dL</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Tips Pencatatan</h3>
            <p className="text-sm text-gray-700">
              Catat secara rutin untuk melihat pola dan tren. Bawalah catatan ini saat konsultasi dengan dokter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyLog;
