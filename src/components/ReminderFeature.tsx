import React, { useState, useEffect } from 'react';
import { Bell, Plus, Trash2, Clock, Pill, Droplet, Activity } from 'lucide-react';

interface Reminder {
  id: string;
  type: 'medication' | 'glucose' | 'exercise';
  title: string;
  time: string;
  enabled: boolean;
}

const ReminderFeature: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newReminder, setNewReminder] = useState({
    type: 'medication' as const,
    title: '',
    time: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('diabetes-reminders');
    if (saved) {
      setReminders(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('diabetes-reminders', JSON.stringify(reminders));
  }, [reminders]);

  const addReminder = () => {
    if (newReminder.title && newReminder.time) {
      const reminder: Reminder = {
        id: Date.now().toString(),
        type: newReminder.type,
        title: newReminder.title,
        time: newReminder.time,
        enabled: true,
      };
      setReminders([...reminders, reminder]);
      setNewReminder({ type: 'medication', title: '', time: '' });
      setShowAddForm(false);
    }
  };

  const deleteReminder = (id: string) => {
    setReminders(reminders.filter((r) => r.id !== id));
  };

  const toggleReminder = (id: string) => {
    setReminders(
      reminders.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r))
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'medication':
        return <Pill className="w-5 h-5" />;
      case 'glucose':
        return <Droplet className="w-5 h-5" />;
      case 'exercise':
        return <Activity className="w-5 h-5" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'medication':
        return 'blue';
      case 'glucose':
        return 'red';
      case 'exercise':
        return 'green';
      default:
        return 'gray';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'medication':
        return 'Obat/Insulin';
      case 'glucose':
        return 'Cek Gula Darah';
      case 'exercise':
        return 'Aktivitas Fisik';
      default:
        return type;
    }
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Bell className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fitur Reminder</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atur pengingat untuk jadwal minum obat, pemeriksaan gula darah, dan aktivitas fisik.
            Jangan lewatkan rutinitas penting dalam manajemen diabetes!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Daftar Pengingat</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Plus className="w-5 h-5 mr-2" />
              Tambah Pengingat
            </button>
          </div>

          {showAddForm && (
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Buat Pengingat Baru</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Pengingat
                  </label>
                  <select
                    value={newReminder.type}
                    onChange={(e) =>
                      setNewReminder({ ...newReminder, type: e.target.value as any })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="medication">Obat/Insulin</option>
                    <option value="glucose">Cek Gula Darah</option>
                    <option value="exercise">Aktivitas Fisik</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Judul Pengingat
                  </label>
                  <input
                    type="text"
                    value={newReminder.title}
                    onChange={(e) =>
                      setNewReminder({ ...newReminder, title: e.target.value })
                    }
                    placeholder="Contoh: Minum insulin pagi"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Waktu
                  </label>
                  <input
                    type="time"
                    value={newReminder.time}
                    onChange={(e) =>
                      setNewReminder({ ...newReminder, time: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={addReminder}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
            </div>
          )}

          {reminders.length === 0 ? (
            <div className="text-center py-12">
              <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Belum ada pengingat. Tambahkan pengingat pertama Anda!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {reminders.map((reminder) => {
                const color = getTypeColor(reminder.type);
                return (
                  <div
                    key={reminder.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 ${
                      reminder.enabled
                        ? 'bg-white border-gray-200'
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div
                        className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center text-${color}-600 flex-shrink-0`}
                      >
                        {getTypeIcon(reminder.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{reminder.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{reminder.time}</span>
                          <span className={`text-xs px-2 py-1 rounded-full bg-${color}-100 text-${color}-700`}>
                            {getTypeLabel(reminder.type)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleReminder(reminder.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                          reminder.enabled
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        {reminder.enabled ? 'Aktif' : 'Nonaktif'}
                      </button>
                      <button
                        onClick={() => deleteReminder(reminder.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Tips:</strong> Pastikan notifikasi browser diaktifkan
            agar Anda dapat menerima pengingat tepat waktu. Atur pengingat sesuai dengan jadwal
            yang telah ditentukan oleh dokter atau tenaga kesehatan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReminderFeature;
