"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { CATEGORIES } from "@/lib/data";

type FormState = {
  name: string;
  url: string;
  tagline: string;
  description: string;
  category: string;
  founderEmail: string;
  founderName: string;
  twitter: string;
};

const initialState: FormState = {
  name: "",
  url: "",
  tagline: "",
  description: "",
  category: "",
  founderEmail: "",
  founderName: "",
  twitter: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function SubmitFormClient() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[rgba(25,171,79,0.30)] bg-[rgba(25,171,79,0.06)] p-10 text-center">
        <div className="text-5xl mb-5">🎉</div>
        <h2
          className="text-[#f0f4f8] font-bold text-xl mb-3"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Submission received!
        </h2>
        <p className="text-[#7a8fa8] text-sm max-w-md mx-auto leading-relaxed">
          Thanks for submitting{" "}
          <strong className="text-[#f0f4f8]">{form.name || "your startup"}</strong>.
          Our team will review it within 2 business days and publish it to the
          feed once approved.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#0b1829] border border-[#1a2d4a] focus:border-[#19AB4F]/50 focus:outline-none rounded-xl px-4 py-3 text-[#f0f4f8] text-sm placeholder:text-[#7a8fa8]/50 transition-colors";

  const labelClass = "block text-[#f0f4f8] text-xs font-medium mb-1.5";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Row: startup name + URL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Startup name <span className="text-[#19AB4F]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. KrediQ"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="url" className={labelClass}>
            Website URL <span className="text-[#19AB4F]">*</span>
          </label>
          <input
            id="url"
            name="url"
            type="url"
            required
            value={form.url}
            onChange={handleChange}
            placeholder="https://yourstartup.in"
            className={inputClass}
          />
        </div>
      </div>

      {/* Tagline */}
      <div>
        <label htmlFor="tagline" className={labelClass}>
          Tagline <span className="text-[#19AB4F]">*</span>
        </label>
        <input
          id="tagline"
          name="tagline"
          type="text"
          required
          maxLength={80}
          value={form.tagline}
          onChange={handleChange}
          placeholder="One punchy line that captures what you do"
          className={inputClass}
        />
        <p className="text-[#7a8fa8] text-[10px] mt-1">
          {form.tagline.length}/80 characters
        </p>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className={labelClass}>
          Description <span className="text-[#19AB4F]">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          maxLength={400}
          value={form.description}
          onChange={handleChange}
          placeholder="What problem do you solve? Who is it for? What makes you different? (max 400 characters)"
          className={`${inputClass} resize-none`}
        />
        <p className="text-[#7a8fa8] text-[10px] mt-1">
          {form.description.length}/400 characters
        </p>
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className={labelClass}>
          Category <span className="text-[#19AB4F]">*</span>
        </label>
        <select
          id="category"
          name="category"
          required
          value={form.category}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>
            Select a category
          </option>
          {CATEGORIES.filter((c) => c !== "All").map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1a2d4a] pt-2">
        <p
          className="text-[#f0f4f8] text-xs font-semibold mb-4"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Founder details
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="founderName" className={labelClass}>
              Your name <span className="text-[#19AB4F]">*</span>
            </label>
            <input
              id="founderName"
              name="founderName"
              type="text"
              required
              value={form.founderName}
              onChange={handleChange}
              placeholder="Priya Sharma"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="founderEmail" className={labelClass}>
              Email <span className="text-[#19AB4F]">*</span>
            </label>
            <input
              id="founderEmail"
              name="founderEmail"
              type="email"
              required
              value={form.founderEmail}
              onChange={handleChange}
              placeholder="priya@yourstartup.in"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Twitter */}
      <div>
        <label htmlFor="twitter" className={labelClass}>
          Twitter / X handle{" "}
          <span className="text-[#7a8fa8] font-normal">(optional)</span>
        </label>
        <input
          id="twitter"
          name="twitter"
          type="text"
          value={form.twitter}
          onChange={handleChange}
          placeholder="@yourhandle"
          className={inputClass}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto sm:self-start bg-[#19AB4F] hover:bg-[#19AB4F]/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-[#19AB4F]/20 duration-200"
      >
        {status === "loading" ? "Submitting…" : "Submit startup"}
      </button>

      <p className="text-[#7a8fa8] text-[10px] leading-relaxed">
        By submitting, you confirm this is a real Indian startup and you have
        the right to list it. Listings are reviewed within 2 business days.
        Startkomp is free to list on — we never charge to appear organically.
      </p>
    </form>
  );
}
