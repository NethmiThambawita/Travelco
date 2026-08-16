import { useState } from "react";
import Reveal from "./Reveal";

const initialForm = {
  name: "",
  email: "",
  travelers: "2",
  interest: "Ancient Cities & Sigiriya",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Let us know a little about your trip.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-5 gap-12">
        <Reveal className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
            Plan your trip
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
            Tell us your dates, we'll build the route
          </h2>
          <p className="mt-4 text-ink/70">
            We reply within one business day with a draft itinerary and
            price — no obligation.
          </p>

          <dl className="mt-9 space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-ocean-700 mt-0.5" aria-hidden="true">✆</span>
              <div>
                <dt className="text-ink/50">Call or WhatsApp</dt>
                <dd className="font-semibold text-ink">+94 81 234 5678</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-ocean-700 mt-0.5" aria-hidden="true">✉</span>
              <div>
                <dt className="text-ink/50">Email</dt>
                <dd className="font-semibold text-ink">hello@serendibtrails.com</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-ocean-700 mt-0.5" aria-hidden="true">⚑</span>
              <div>
                <dt className="text-ink/50">Office</dt>
                <dd className="font-semibold text-ink">24 Temple View Lane, Kandy, Sri Lanka</dd>
              </div>
            </div>
          </dl>
        </Reveal>

        <Reveal
          as="form"
          delay={120}
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-3 bg-white rounded-3xl shadow-soft p-6 md:p-8"
        >
          {status === "sent" ? (
            <div className="py-10 text-center" role="status">
              <div className="mx-auto h-14 w-14 rounded-full bg-ocean-50 flex items-center justify-center text-ocean-700">
                <svg width="26" height="26" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">Enquiry sent</h3>
              <p className="mt-2 text-sm text-ink/65 max-w-sm mx-auto">
                Thank you — a trip designer will email you within one
                business day with a draft plan.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold text-ocean-700 hover:text-ocean-700"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="mt-1.5 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="mt-1.5 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="travelers" className="text-sm font-medium text-ink">
                  Travellers
                </label>
                <select
                  id="travelers"
                  value={form.travelers}
                  onChange={update("travelers")}
                  className="mt-1.5 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400"
                >
                  {["1", "2", "3", "4", "5+"].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="interest" className="text-sm font-medium text-ink">
                  Interested in
                </label>
                <select
                  id="interest"
                  value={form.interest}
                  onChange={update("interest")}
                  className="mt-1.5 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400"
                >
                  <option>Ancient Cities & Sigiriya</option>
                  <option>Yala Wildlife Safari</option>
                  <option>Hill Country by Rail</option>
                  <option>South Coast Beach Escape</option>
                  <option>Galle Fort Heritage Walk</option>
                  <option>Kandy & the Hill Capital</option>
                  <option>Custom itinerary</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Tell us about your trip
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Travel dates, must-see places, pace you prefer..."
                  className="mt-1.5 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-ocean-600 transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send enquiry"}
                </button>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
