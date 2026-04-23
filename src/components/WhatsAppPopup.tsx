import { useState, useEffect } from 'react';
import { X, MessageCircle, ArrowRight } from 'lucide-react';

interface WhatsAppPopupProps {
  businessPhone?: string;
  businessName?: string;
}

export default function WhatsAppPopup({
  businessPhone = '+917498093633',
  businessName = 'Mauli Furnishing'
}: WhatsAppPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'connecting' | 'redirecting'>('idle');

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

  const handleChatNow = () => {
    setStatus('connecting');

    // Simulate connecting animation
    setTimeout(() => {
      setStatus('redirecting');
      const message = encodeURIComponent(
        `Hi ${businessName}! 👋\nI visited your website and I'm interested in your products.\nPlease share your catalog and offers! 😊`
      );
      const cleanPhone = businessPhone.replace(/\D/g, '');
      window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');

      // Auto close after redirect
      setTimeout(() => {
        handleClose();
      }, 1500);
    }, 1200);
  };

  const handleViewCatalog = () => {
    const cleanPhone = businessPhone.replace(/\D/g, '');
    window.open(`https://wa.me/c/${cleanPhone}`, '_blank');
    handleClose();
  };

  // Don't render if closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-maroon-950/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={status === 'idle' ? handleClose : undefined}
      />

      {/* Modal — compact */}
      <div className="relative w-full max-w-sm animate-in fade-in zoom-in-95 duration-300">
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-maroon-900/20">
          {/* Header — compact gradient */}
          <div className="relative bg-gradient-to-br from-maroon-700 to-maroon-900 px-5 py-5 text-center">
            <button
              onClick={handleClose}
              disabled={status !== 'idle'}
              className="absolute right-3 top-3 rounded-full bg-white/10 p-1.5 text-white/70 transition-colors hover:bg-white/20 hover:text-white disabled:opacity-50"
            >
              <X size={16} />
            </button>

            {/* WhatsApp Icon */}
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 shadow-lg shadow-green-500/30">
              <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>

            <h3 className="font-playfair text-xl font-bold text-white">
              Get Exclusive Deals!
            </h3>
            <p className="mt-1 text-xs text-white/60">
              Chat with us on WhatsApp for personalized offers
            </p>
          </div>

          {/* Body — compact */}
          <div className="p-4">
            {/* IDLE State */}
            {status === 'idle' && (
              <div className="space-y-3">
                {/* Chat Now Button */}
                <button
                  onClick={handleChatNow}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:shadow-green-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative flex items-center justify-center gap-2 text-sm">
                    <MessageCircle size={16} />
                    Chat with Us on WhatsApp
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </button>

                {/* View Catalog */}
                <button
                  onClick={handleViewCatalog}
                  className="w-full rounded-xl border border-maroon-100 bg-transparent px-5 py-2.5 text-xs font-medium text-maroon-600 transition-colors hover:bg-maroon-50"
                >
                  View Our Product Catalog
                </button>
              </div>
            )}

            {/* CONNECTING State */}
            {status === 'connecting' && (
              <div className="flex flex-col items-center py-3 text-center">
                <svg className="h-8 w-8 animate-spin text-green-500" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                <p className="mt-3 text-sm font-medium text-maroon-800">
                  Connecting to WhatsApp...
                </p>
              </div>
            )}

            {/* REDIRECTING State */}
            {status === 'redirecting' && (
              <div className="flex flex-col items-center py-3 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mt-2 text-sm font-medium text-green-700">
                  Opening WhatsApp...
                </p>
              </div>
            )}

            {/* Trust Badge — compact */}
            {status === 'idle' && (
              <div className="mt-4 flex items-center justify-center gap-3 border-t border-maroon-100 pt-3">
                <div className="flex items-center gap-1 text-[10px] text-maroon-400">
                  <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Instant Response</span>
                </div>
                <div className="h-2.5 w-px bg-maroon-200" />
                <div className="flex items-center gap-1 text-[10px] text-maroon-400">
                  <svg className="h-3 w-3 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  <span>100% Secure</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
