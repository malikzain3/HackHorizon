import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_41jgfzp";
const EMAILJS_TEMPLATE_ID = "template_ew8jdmr";
const EMAILJS_PUBLIC_KEY = "OhYq6IUmftkoQ5hPd";

export default function SponsorModal({ open, onClose }) {
  const [step, setStep] = useState("form");
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setStep("submitting");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          company_name: form.companyName,
          contact_name: form.contactName,
          email: form.email,
          phone: form.phone || "-",
          message: form.message || "-",
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStep("success");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStep("error");
    }
  };

  const close = () => {
    onClose();
    setStep("form");
    setForm({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto card-panel border-electric/30 p-6 md:p-8 overscroll-contain">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-steellight hover:text-electric"
        >
          ✕
        </button>

        {step === "success" ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-display font-bold text-xl text-silver mb-2">
              Thanks for reaching out!
            </h3>
            <p className="text-steellight text-sm">
              Our sponsorship team will contact you shortly.
            </p>
            <button
              onClick={close}
              className="mt-6 px-6 py-2.5 rounded-lg bg-electric text-void font-bold"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-display font-bold text-xl text-silver mb-1">
              Become a Sponsor
            </h3>
            <p className="text-steellight text-sm mb-6">
              Tell us a bit about your company and we'll follow up.
            </p>
            <form onSubmit={submit} className="space-y-4">
              <input
                required
                placeholder="Company name"
                value={form.companyName}
                onChange={(e) => update("companyName", e.target.value)}
                className="w-full bg-panel2 border border-steel/30 rounded-lg px-3 py-2.5 text-silver text-sm focus:border-electric outline-none"
              />
              <input
                required
                placeholder="Your name"
                value={form.contactName}
                onChange={(e) => update("contactName", e.target.value)}
                className="w-full bg-panel2 border border-steel/30 rounded-lg px-3 py-2.5 text-silver text-sm focus:border-electric outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full bg-panel2 border border-steel/30 rounded-lg px-3 py-2.5 text-silver text-sm focus:border-electric outline-none"
              />
              <input
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full bg-panel2 border border-steel/30 rounded-lg px-3 py-2.5 text-silver text-sm focus:border-electric outline-none"
              />
              <textarea
                placeholder="Message (optional)"
                rows={3}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full bg-panel2 border border-steel/30 rounded-lg px-3 py-2.5 text-silver text-sm focus:border-electric outline-none"
              />
              {step === "error" && (
                <p className="text-alert text-sm">
                  Something went wrong, please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={step === "submitting"}
                className="w-full py-3 rounded-lg bg-electric text-void font-display font-bold disabled:opacity-60"
              >
                {step === "submitting" ? "Sending…" : "Send"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
