import { motion } from 'framer-motion';
import { useState } from 'react';
import MagneticButton from '../components/MagneticButton';
import SectionHeading from '../components/SectionHeading';
import TerminalField from '../components/TerminalField';
import { sendTelegramMessage } from '../lib/sendTelegramMessage';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const initialErrors = {
  name: '',
  email: '',
  message: '',
};

function validateField(name, value) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
  }

  if (name === 'email') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedValue)) {
      return 'Please enter a valid email address.';
    }
  }

  if (name === 'message' && trimmedValue.length < 10) {
    return 'Message should be at least 10 characters.';
  }

  return '';
}

function ContactSection() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState('ready');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStatus('ready');
    setErrorMessage('');
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({
      ...current,
      [name]: value.trim() ? validateField(name, value) : '',
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
    const nextErrors = {
      name: validateField('name', trimmedFormData.name),
      email: validateField('email', trimmedFormData.email),
      message: validateField('message', trimmedFormData.message),
    };

    setErrors(nextErrors);
    setErrorMessage('');

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus('error');
      setErrorMessage('Please complete the required fields correctly.');
      return;
    }

    setStatus('sending');

    try {
      await sendTelegramMessage(trimmedFormData);
      setStatus('sent');
      setFormData(initialState);
      setErrors(initialErrors);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  const statusText = {
    ready: 'Secure intake active',
    sending: 'Transmitting to Telegram',
    sent: 'Message delivered',
    error: 'Delivery failed',
  }[status];

  return (
    <section id="contact" className="relative">
      <div className="section-shell">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <SectionHeading
            eyebrow="Contact"
            title="Bring the brief. We'll route it straight to Telegram."
            description="A tighter intake flow for fast project requests. Once configured, each submission is sent directly to your Telegram bot chat."
          />

          <motion.form
            onSubmit={handleSubmit}
            className="terminal-panel relative overflow-hidden p-5 sm:p-6"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />

            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <p className="ml-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/42">
                  contact://telegram
                </p>
              </div>
              <div className="rounded-full border border-accent/15 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-accent/78">
                {statusText}
              </div>
            </div>

            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/82">Channel</p>
                <p className="mt-2 text-sm text-white/70">Telegram Bot</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/82">Format</p>
                <p className="mt-2 text-sm text-white/70">Name, email, brief</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/82">Response</p>
                <p className="mt-2 text-sm text-white/70">Instant delivery</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <TerminalField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={errors.name}
              />
              <TerminalField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={errors.email}
              />
              <TerminalField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                multiline
                rows={4}
                className="sm:col-span-2"
                required
                error={errors.message}
              />
            </div>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/42">
                  {statusText}
                </p>
                {status === 'error' && (
                  <p className="text-sm text-[#ff8f8f]">{errorMessage}</p>
                )}
                {status === 'sent' && (
                  <p className="text-sm text-accent/84">Telegram chat accepted the message.</p>
                )}
              </div>
              <MagneticButton
                type="submit"
                className={status === 'sending' ? 'pointer-events-none opacity-80' : ''}
              >
                {status === 'sending' ? 'Sending...' : 'Transmit brief'}
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
