"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { isValidEmail, cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const { contact } = portfolioData;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorDetail, setErrorDetail] = useState("");

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) next.email = "Email is required";
    else if (!isValidEmail(email)) next.email = "Please enter a valid email";
    if (!message.trim()) next.message = "Message is required";
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setErrorDetail("");

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const detail = data?.detail;
        const message =
          typeof detail === "string"
            ? detail
            : Array.isArray(detail)
              ? detail.map((d: { msg?: string }) => d.msg).filter(Boolean).join(", ")
              : contact.errorMessage;
        throw new Error(message);
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorDetail(
        err instanceof Error ? err.message : contact.errorMessage
      );
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    cn(
      "w-full rounded-xl border bg-surface/60 px-4 py-3 text-sm text-foreground backdrop-blur-sm transition-colors placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/50",
      errors[field]
        ? "border-red-500/50 focus:border-red-500"
        : "border-border focus:border-accent/50"
    );

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-2xl">
        <ScrollReveal className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {contact.heading}
          </h2>
          <p className="text-lg text-muted">{contact.subheading}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-md sm:p-8"
          >
            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                className={inputClass("name")}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-500" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                className={inputClass("email")}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-500" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                }}
                rows={5}
                className={cn(inputClass("message"), "resize-none")}
                placeholder="Tell me about your project..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-500" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? (
                <>
                  <motion.span
                    className="inline-block h-4 w-4 rounded-full border-2 border-background/30 border-t-background"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400"
                  role="status"
                >
                  {contact.successMessage}
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                  role="alert"
                >
                  {errorDetail || contact.errorMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="mt-12 text-center text-xs text-muted">
            © {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
