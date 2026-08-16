import { useState } from "react";

const today = () => new Date().toISOString().split("T")[0];

const ServiceRequestCard = ({ service }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [detail, setDetail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!date) return;
    setSent(true);
  };

  return (
    <div className="rounded-2xl bg-ink text-white p-6 flex flex-col">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-ocean-100">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            {service.icon}
          </svg>
        </div>
        <div>
          <h3 className="font-semibold">{service.title}</h3>
          <p className="mt-1 text-sm text-white/70">{service.desc}</p>
        </div>
      </div>

      <div className="mt-4">
        {sent ? (
          <p className="flex items-center gap-2 text-sm font-semibold text-ocean-100" role="status">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M4 10l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Request sent — we'll confirm by email shortly.
          </p>
        ) : open ? (
          <form onSubmit={submit} className="space-y-3">
            <div>
              <label htmlFor={`${service.title}-date`} className="text-xs text-white/60">
                {service.dateLabel}
              </label>
              <input
                id={`${service.title}-date`}
                type="date"
                min={today()}
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-ocean-400 [color-scheme:dark]"
              />
            </div>
            <div>
              <label htmlFor={`${service.title}-detail`} className="text-xs text-white/60">
                {service.fieldLabel}
              </label>
              <input
                id={`${service.title}-detail`}
                type="text"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                placeholder={service.fieldPlaceholder}
                className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 text-sm text-white placeholder-white/35 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-ocean-400"
              />
            </div>
            <div className="flex items-center gap-3 pt-1">
              <button
                type="submit"
                className="flex-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-ocean-100 transition-colors"
              >
                Send request
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-100 hover:text-white transition-colors"
          >
            Request this
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceRequestCard;
