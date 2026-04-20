import { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

interface WhatsAppPopupProps {
  businessPhone?: string;
  businessName?: string;
}

export default function WhatsAppPopup({
  businessPhone = '+917498093633',
  businessName = 'Mauli Furnishing'
}: WhatsAppPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'setup'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Open popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('whatsapp-popup-seen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('whatsapp-popup-seen', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Call Vercel Serverless API
      const response = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber.replace(/\D/g, ''),
          name: name || 'Customer',
          language: 'en'
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        // Close after showing success
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else if (data.setupRequired) {
        setStatus('setup');
        setErrorMessage('WhatsApp API not configured yet');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  const handleQuickWhatsApp = () => {
    const message = encodeURIComponent('Hi! I visited your website and would like to know more about your products.');
    window.open(`https://wa.me/${businessPhone.replace(/\D/g, '')}?text=${message}`, '_blank');
    handleClose();
  };

  // Don't render if closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-maroon-950/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={status !== 'loading' ? handleClose : undefined}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-300">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-maroon-900/30">
          {/* Header with gradient */}
          <div className="relative bg-gradient-to-br from-maroon-700 to-maroon-900 px-6 py-8 text-center">
            <button
              onClick={handleClose}
              disabled={status === 'loading'}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white disabled:opacity-50"
            >
              <X size={18} />
            </button>

            {/* WhatsApp Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 shadow-lg shadow-green-500/30">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>

            <h3 className="font-playfair text-2xl font-bold text-white">
              Get Exclusive Deals!
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Connect with us on WhatsApp for personalized offers
            </p>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* IDLE / LOADING / ERROR States */}
            {(status === 'idle' || status === 'loading' || status === 'error') && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-maroon-900">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      disabled={status === 'loading'}
                      className="w-full rounded-xl border border-maroon-100 bg-cream/50 px-4 py-3 pl-11 text-maroon-900 placeholder:text-maroon-400/60 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all disabled:opacity-60"
                    />
                    <MessageCircle className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-maroon-400" />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-maroon-900">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                      disabled={status === 'loading'}
                      className="w-full rounded-xl border border-maroon-100 bg-cream/50 px-4 py-3 pl-11 text-maroon-900 placeholder:text-maroon-400/60 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all disabled:opacity-60"
                    />
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-maroon-400" />
                  </div>
                  <p className="text-xs text-maroon-500/60">
                    You'll receive our catalog instantly on WhatsApp
                  </p>
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-600">
                    <AlertCircle size={16} />
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading' || phoneNumber.length < 10}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 font-semibold text-white shadow-lg shadow-green-500/30 transition-all hover:shadow-green-500/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    {status === 'loading' ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Sending WhatsApp Message...
                      </>
                    ) : (
                      <>
                        <MessageCircle size={18} />
                        Send WhatsApp Message
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>

                {/* Skip Option */}
                <button
                  type="button"
                  onClick={handleQuickWhatsApp}
                  disabled={status === 'loading'}
                  className="w-full rounded-xl border border-maroon-200 bg-transparent px-6 py-3 text-sm font-medium text-maroon-700 transition-colors hover:bg-maroon-50 disabled:opacity-50"
                >
                  Or chat with us on WhatsApp
                </button>
              </form>
            )}

            {/* SETUP REQUIRED State */}
            {status === 'setup' && (
              <div className="flex flex-col items-center py-4 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <AlertCircle className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-maroon-900">
                  Setup Required
                </h4>
                <p className="mt-2 text-sm text-maroon-600">
                  WhatsApp Business API not configured yet. See SETUP.md for instructions.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 rounded-xl bg-maroon-700 px-6 py-3 font-medium text-white transition-colors hover:bg-maroon-800"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* SUCCESS State */}
            {status === 'success' && (
              <div className="flex flex-col items-center py-4 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-maroon-900">
                  Message Sent!
                </h4>
                <p className="mt-2 text-sm text-maroon-600">
                  Check your WhatsApp! We've sent you our catalog and exclusive offers.
                </p>
              </div>
            )}

            {/* Trust Badge */}
            <div className="mt-6 flex items-center justify-center gap-4 border-t border-maroon-100 pt-4">
              <div className="flex items-center gap-1.5 text-xs text-maroon-500/70">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Instant Delivery</span>
              </div>
              <div className="h-3 w-px bg-maroon-200" />
              <div className="flex items-center gap-1.5 text-xs text-maroon-500/70">
                <svg className="h-4 w-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
                <span>100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
