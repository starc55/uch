import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import MagneticButton from "../components/MagneticButton";
import SectionHeading from "../components/SectionHeading";
import TerminalField from "../components/TerminalField";
import { sendTelegramMessage } from "../lib/sendTelegramMessage";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const initialErrors = {
  name: "",
  email: "",
  message: "",
};

function validateField(name, value, t, fieldLabel) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return t("contact.validation.required", {
      field: fieldLabel,
    });
  }

  if (name === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedValue)) {
      return t("contact.validation.email");
    }
  }

  if (name === "message" && trimmedValue.length < 10) {
    return t("contact.validation.messageMin");
  }

  return "";
}

function ContactSection() {
  const { t } = useTranslation();
  const fieldLabels = {
    name: t("contact.labels.name"),
    email: t("contact.labels.email"),
    message: t("contact.labels.message"),
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState("ready");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStatus("ready");
    setErrorMessage("");
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({
      ...current,
      [name]: value.trim()
        ? validateField(name, value, t, fieldLabels[name])
        : "",
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value, t, fieldLabels[name]),
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
      name: validateField("name", trimmedFormData.name, t, fieldLabels.name),
      email: validateField(
        "email",
        trimmedFormData.email,
        t,
        fieldLabels.email
      ),
      message: validateField(
        "message",
        trimmedFormData.message,
        t,
        fieldLabels.message
      ),
    };

    setErrors(nextErrors);
    setErrorMessage("");

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus("error");
      setErrorMessage(t("contact.messages.invalid"));
      return;
    }

    setStatus("sending");

    try {
      await sendTelegramMessage(trimmedFormData);
      setStatus("sent");
      setFormData(initialState);
      setErrors(initialErrors);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error?.message || t("contact.messages.fallbackError"));
    }
  };

  const statusText = t(`contact.statuses.${status}`);

  return (
    <section id="contact" className="relative">
      <div className="section-shell">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <SectionHeading
            eyebrow={t("contact.eyebrow")}
            title={t("contact.title")}
            description={t("contact.description")}
          />

          <motion.form
            onSubmit={handleSubmit}
            className="terminal-panel relative overflow-hidden p-5 sm:p-6"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />

            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <p className="ml-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/42">
                  contact://make
                </p>
              </div>
              <div className="rounded-full border border-accent/15 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-accent/78">
                {statusText}
              </div>
            </div>

            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/82">
                  {t("contact.cards.channel")}
                </p>
                <p className="mt-2 text-sm text-white/70">
                  {t("contact.cards.channelValue")}
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/82">
                  {t("contact.cards.format")}
                </p>
                <p className="mt-2 text-sm text-white/70">
                  {t("contact.cards.formatValue")}
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/82">
                  {t("contact.cards.response")}
                </p>
                <p className="mt-2 text-sm text-white/70">
                  {t("contact.cards.responseValue")}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <TerminalField
                label={t("contact.labels.name")}
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={errors.name}
              />
              <TerminalField
                label={t("contact.labels.email")}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={errors.email}
              />
              <TerminalField
                label={t("contact.labels.message")}
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
                {status === "error" && (
                  <p className="text-sm text-[#ff8f8f]">{errorMessage}</p>
                )}
                {status === "sent" && (
                  <p className="text-sm text-accent/84">
                    {t("contact.messages.success")}
                  </p>
                )}
              </div>
              <MagneticButton
                type="submit"
                className={
                  status === "sending" ? "pointer-events-none opacity-80" : ""
                }
                loading={status === "sending"}
              >
                {status === "sending"
                  ? t("contact.messages.sending")
                  : t("contact.messages.submit")}
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
