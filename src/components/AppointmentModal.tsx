import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { TREATMENTS, CLINIC_PHONE, CLINIC_NAME } from '../data';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTreatmentId?: string;
}

export default function AppointmentModal({ isOpen, onClose, selectedTreatmentId }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatmentId: selectedTreatmentId || TREATMENTS[0].id,
    date: '',
    time: '',
    notes: ''
  });

  const [step, setStep] = useState(1); // 1: Form, 2: Completed

  // Adjust treatment if selectedTreatmentId changes when modal opens
  React.useEffect(() => {
    if (selectedTreatmentId) {
      setFormData(prev => ({ ...prev, treatmentId: selectedTreatmentId }));
    }
  }, [selectedTreatmentId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectedTreatment = TREATMENTS.find(t => t.id === formData.treatmentId);

  const getWhatsAppLink = () => {
    const dateFormatted = formData.date ? new Date(formData.date).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '';

    const text = `Hello Max Dental & Cosmetic Clinic,\n\nI would like to book a dental appointment:\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email || 'Not provided'}\n🦷 *Treatment:* ${selectedTreatment?.title || 'General Consultation'}\n📅 *Preferred Date:* ${dateFormatted || formData.date}\n⏰ *Preferred Time:* ${formData.time}\n📝 *Notes:* ${formData.notes || 'None'}\n\nPlease confirm availability. Thank you!`;
    return `https://wa.me/91${CLINIC_PHONE}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert("Please fill in all required fields (Name, Phone, Date, and Time).");
      return;
    }
    // Simulate API call and then advance to success screen
    setStep(2);
  };

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", 
    "06:00 PM", "07:00 PM"
  ];

  // Get tomorrow's date string for min date in calendar
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-50 px-8 py-5">
              <div>
                <h3 className="text-xl font-bold font-display text-slate-900">
                  {step === 1 ? 'Book Your Appointment' : 'Confirm Your Details'}
                </h3>
                <p className="text-xs text-slate-500">
                  {step === 1 ? 'Fill in the form below to secure your consultation.' : 'Verify your details and click below to send via WhatsApp.'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="max-h-[75vh] overflow-y-auto p-8">
              {step === 1 ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1 Form */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                        <User className="h-4 w-4 text-blue-600" />
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jaya Upadhyay"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all text-sm"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                        <Phone className="h-4 w-4 text-blue-600" />
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all text-sm"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                        <Mail className="h-4 w-4 text-blue-600" />
                        Email Address <span className="text-xs text-slate-400">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. jaya@example.com"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all text-sm"
                      />
                    </div>

                    {/* Treatment Selection */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        Select Treatment / Service
                      </label>
                      <select
                        name="treatmentId"
                        value={formData.treatmentId}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all text-sm"
                      >
                        {TREATMENTS.map(t => (
                          <option key={t.id} value={t.id}>
                            {t.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        min={getMinDate()}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all text-sm"
                      />
                    </div>

                    {/* Preferred Time Slot */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-blue-600" />
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all text-sm"
                      >
                        <option value="">-- Select Time Slot --</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                      <FileText className="h-4 w-4 text-blue-600" />
                      Additional Information / Symptoms <span className="text-xs text-slate-400">(Optional)</span>
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Please share any current pain, dental history, or aesthetic desires."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all sm:w-auto"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 hover:bg-blue-700 hover:shadow-blue-700/20 active:scale-[0.98] transition-all sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Continue to Preview
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-2 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <MessageSquare className="h-7 w-7 animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Confirm Your Details</h4>
                  <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                    Review your consultation details below. Click the button to send them directly to our clinic WhatsApp desk to finalize your slot.
                  </p>

                  {/* Appointment Summary Card */}
                  <div className="mx-auto my-6 max-w-md rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-left text-sm text-slate-600 space-y-3.5">
                    <h5 className="font-bold text-slate-800 border-b border-slate-100 pb-2 flex justify-between items-center">
                      <span>Appointment Details</span>
                      <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-medium">Ready to Send</span>
                    </h5>
                    <div className="flex justify-between"><span className="text-slate-400">Patient:</span> <span className="font-semibold text-slate-800">{formData.name}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Phone:</span> <span className="font-semibold text-slate-800">{formData.phone}</span></div>
                    {formData.email && <div className="flex justify-between"><span className="text-slate-400">Email:</span> <span className="font-semibold text-slate-800">{formData.email}</span></div>}
                    <div className="flex justify-between"><span className="text-slate-400">Service:</span> <span className="font-semibold text-slate-800">{selectedTreatment?.title || 'General Consultation'}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Preferred Date:</span> <span className="font-semibold text-slate-800">{formData.date ? new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }) : formData.date}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Preferred Time:</span> <span className="font-semibold text-slate-800">{formData.time}</span></div>
                    {formData.notes && <div className="flex justify-between"><span className="text-slate-400">Notes:</span> <span className="font-semibold text-slate-800">{formData.notes}</span></div>}
                  </div>

                  {/* WhatsApp Dispatch Actions */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                      onClick={() => setStep(1)}
                      className="w-full rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all sm:w-auto cursor-pointer"
                    >
                      Back & Edit
                    </button>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/10 hover:bg-emerald-700 hover:shadow-emerald-700/20 active:scale-[0.98] transition-all sm:w-auto cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Send to WhatsApp to Book
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
