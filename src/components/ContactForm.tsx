import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Clock, MapPin, Check, Sparkles, Send, Copy, RefreshCw } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { QuoteFormState } from '../types';

interface ContactFormProps {
  selectedServices: string[];
  onToggleService: (serviceName: string) => void;
}

export default function ContactForm({ selectedServices, onToggleService }: ContactFormProps) {
  const [formState, setFormState] = useState<QuoteFormState>({
    name: '',
    phone: '',
    postcode: '',
    services: [...selectedServices],
    description: '',
    preferredContact: 'phone',
  });

  // Sync selectedServices from global clicker
  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      services: [...selectedServices],
    }));
  }, [selectedServices]);

  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const handleServicesCheckboxChange = (serviceName: string) => {
    onToggleService(serviceName);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone || !formState.postcode) {
      return;
    }
    setSubmitted(true);
  };

  // Compile WhatsApp URL dynamically
  const getWhatsAppURL = () => {
    const serviceListText = formState.services.length > 0 ? formState.services.join(', ') : 'General Property Maintenance';
    const message = `Hi JS Property, I would like a free quotation.
• Name: ${formState.name}
• Phone: ${formState.phone}
• Postcode: ${formState.postcode}
• Selected Services: ${serviceListText}
• Details: ${formState.description || 'None'}`;
    
    return `https://wa.me/447405837953?text=${encodeURIComponent(message)}`;
  };

  const copyToClipboard = () => {
    const serviceListText = formState.services.length > 0 ? formState.services.join(', ') : 'General Property Maintenance';
    const copyString = `JS QUOTE REQUEST:\nName: ${formState.name}\nPhone: ${formState.phone}\nPostcode: ${formState.postcode}\nServices: ${serviceListText}\nDetails: ${formState.description}`;
    
    navigator.clipboard.writeText(copyString);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const handleReset = () => {
    setFormState({
      name: '',
      phone: '',
      postcode: '',
      services: [],
      description: '',
      preferredContact: 'phone',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="bg-navy-900 py-16 md:py-24 border-b border-navy-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          
          {/* Left Column: Context, Trust list, Direct Actions */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-emerald-500 font-bold uppercase tracking-wider text-xs sm:text-sm">
                Get Estimated Today
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Get a Professional Free Quote
              </h2>
              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
                Fill out our form with your rough requirements, and we will carry out a 100% free site survey at your property. No-obligation, clear pricing.
              </p>
            </div>

            {/* Core Trust checklist */}
            <div className="space-y-4 bg-navy-950 p-6 rounded-xl border border-navy-850">
              <h4 className="font-display font-bold text-white text-base">Our Estimate Assurances:</h4>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>We return back to you with a price in under 24 hours.</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Free site surveys for all homes in West Yorkshire (Wrose, Idle, Baildon, Shipley etc.).</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 border border-emerald-500/20 rounded-full p-0.5" />
                  <span>No hard sell. Friendly, professional recommendations.</span>
                </li>
              </ul>
            </div>

            {/* Direct Call / Messaging section */}
            <div className="space-y-4">
              <h4 className="font-display font-medium text-white text-sm uppercase tracking-wider text-center lg:text-left">
                Or Connect Instantly:
              </h4>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:07405837953"
                  className="flex-1 bg-navy-950 hover:bg-navy-850 text-white border border-navy-850 hover:border-emerald-500/50 py-4 px-6 rounded-xl text-center flex flex-col items-center justify-center gap-2 group transition-all cursor-pointer shadow-md"
                >
                  <Phone className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                  <span className="font-display font-extrabold text-sm uppercase text-gray-300">Call Now</span>
                  <span className="font-mono text-base font-black text-emerald-400">07405 837953</span>
                </a>

                <a
                  href="https://wa.me/447405837953"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-[#059669]/10 hover:bg-[#059669]/20 text-white border border-emerald-500/20 hover:border-emerald-500/60 py-4 px-6 rounded-xl text-center flex flex-col items-center justify-center gap-2 group transition-all cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-6 h-6 text-emerald-500 fill-emerald-500/10 group-hover:scale-110 transition-transform" />
                  <span className="font-display font-extrabold text-sm uppercase text-emerald-400">WhatsApp Us</span>
                  <span className="font-sans text-xs text-gray-300 font-medium">+44 7405 837953</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interaction Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-navy-950 rounded-2xl p-6 sm:p-8 lg:p-10 border border-navy-850 shadow-2xl relative">
              
              {submitted ? (
                /* Staggeringly Beautiful Form success overlay */
                <div className="text-center space-y-6 sm:space-y-8 py-8 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
                    <Sparkles className="w-8 h-8 animate-pulse" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                      Quote Prepared Successfully!
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-gray-400 max-w-md mx-auto">
                      Thank you for choosing JS Property Landscape, <strong className="text-white">{formState.name}</strong>. Here is the easiest way to launch your request for an instant response:
                    </p>
                  </div>

                  {/* Dispatch Summary details card */}
                  <div className="bg-navy-900 border border-navy-850 rounded-xl p-5 text-left font-sans text-xs sm:text-sm space-y-2.5 max-w-md mx-auto">
                    <p className="text-gray-400"><strong className="text-white">Customer:</strong> {formState.name}</p>
                    <p className="text-gray-400"><strong className="text-white">Address / Postcode:</strong> {formState.postcode}</p>
                    <p className="text-gray-400">
                      <strong className="text-white">Request details:</strong>{' '}
                      {formState.services.length > 0 ? formState.services.join(', ') : 'General Maintenance Survey'}
                    </p>
                    {formState.description && (
                      <p className="text-gray-400 italic">"{formState.description}"</p>
                    )}
                  </div>

                  {/* Immediate WhatsApp and Copy actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                    <a
                      href={getWhatsAppURL()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-navy-950 font-display font-black text-sm uppercase py-3.5 px-6 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-navy-950" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <button
                      onClick={copyToClipboard}
                      className="w-full sm:w-auto bg-navy-900 hover:bg-navy-850 border border-navy-800 text-gray-300 hover:text-white py-3.5 px-6 rounded-md flex items-center justify-center gap-2 text-sm font-semibold transition-all cursor-pointer"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copiedText ? 'Copied' : 'Copy Text'}</span>
                    </button>
                  </div>

                  <div className="pt-6 border-t border-navy-850 max-w-md mx-auto flex items-center justify-between text-xs font-sans text-gray-500">
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Request another service</span>
                    </button>
                    <span>Site estimate is 100% Free</span>
                  </div>

                </div>
              ) : (
                /* Standard form interaction */
                <form onSubmit={handleSubmitForm} className="space-y-6 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Customer Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400" htmlFor="name">
                        Your Name <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. David Thompson"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="w-full bg-navy-900 text-white placeholder-gray-600 rounded border border-navy-800 focus:border-emerald-500 px-4 py-3 outline-none transition-colors text-sm"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400" htmlFor="phone">
                        Contact Phone <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 07405 837953"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full bg-navy-900 text-white placeholder-gray-600 rounded border border-navy-800 focus:border-emerald-500 px-4 py-3 outline-none transition-colors text-sm font-mono"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Bradford Postcode */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400" htmlFor="postcode">
                        Postcode in Bradford area <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        id="postcode"
                        type="text"
                        name="postcode"
                        required
                        placeholder="e.g. BD10 8PR"
                        value={formState.postcode}
                        onChange={handleInputChange}
                        className="w-full bg-navy-900 text-white placeholder-gray-600 rounded border border-navy-800 focus:border-emerald-500 px-4 py-3 outline-none transition-colors text-sm uppercase font-mono"
                      />
                    </div>

                    {/* Preferred Contact Mode */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400" htmlFor="preferredContact">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formState.preferredContact}
                        onChange={handleInputChange}
                        className="w-full bg-navy-900 text-white rounded border border-navy-800 focus:border-emerald-500 px-4 py-3 outline-none transition-colors text-sm font-semibold"
                      >
                        <option value="phone">📞 Phone Call</option>
                        <option value="whatsapp">💬 WhatsApp Message</option>
                      </select>
                    </div>

                  </div>

                  {/* Multi-selection of Services list checkboxes */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Check services needed:
                    </span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[160px] overflow-y-auto p-3.5 border border-navy-850 bg-navy-900/60 rounded custom-scrollbar">
                      {SERVICES_DATA.map((service) => {
                        const isChecked = formState.services.includes(service.name);
                        return (
                          <label
                            key={service.id}
                            className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs font-medium cursor-pointer transition-colors ${
                              isChecked
                                ? 'bg-emerald-500/10 text-emerald-300'
                                : 'text-gray-400 hover:text-white hover:bg-navy-800'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleServicesCheckboxChange(service.name)}
                              className="accent-emerald-500 w-3.5 h-3.5 shrink-0"
                            />
                            <span>{service.name}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Brief Description */}
                  <div className="space-y-1.5 col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400" htmlFor="description">
                      Job Description / dimensions / details
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      placeholder="e.g. Patio flagging area is roughly 6x4m with slight lawn slope, need Indian Stone flags. Also need a stump removed."
                      value={formState.description}
                      onChange={handleInputChange}
                      className="w-full bg-navy-900 text-white placeholder-gray-600 rounded border border-navy-800 focus:border-emerald-500 px-4 py-3 outline-none transition-colors text-sm leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-navy-950 font-display font-black uppercase text-sm tracking-wider py-4 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer select-none transition-all"
                  >
                    <Send className="w-4 h-4 text-navy-950 shrink-0" />
                    <span>Compile My Free Quote</span>
                  </button>

                  <p className="text-[10px] text-gray-500 text-center leading-snug">
                    By compiling you consent to a friendly, zero-obligation callback about your garden design. <br />
                    No marketing list, no spam, only direct local support.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
