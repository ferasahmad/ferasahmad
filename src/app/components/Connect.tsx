"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { isValidEmail } from "@/utilities/helpers";

export default function Connect() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const windowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const centerWindow = () => {
    if (containerRef.current && windowRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const windowRect = windowRef.current.getBoundingClientRect();

      setPosition({
        x: (containerRect.width - windowRect.width) / 2,
        y: (containerRect.height - windowRect.height) / 2,
      });
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    centerWindow();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest(".title-bar")) return;

    const windowRect = windowRef.current?.getBoundingClientRect();
    if (!windowRect) return;

    setIsDragging(true);
    setDragOffset({
      x: e.clientX - windowRect.left,
      y: e.clientY - windowRect.top,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current || !windowRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const windowRect = windowRef.current.getBoundingClientRect();

    let newX = e.clientX - containerRect.left - dragOffset.x;
    let newY = e.clientY - containerRect.top - dragOffset.y;

    newX = Math.max(0, Math.min(newX, containerRect.width - windowRect.width));
    newY = Math.max(
      0,
      Math.min(newY, containerRect.height - windowRect.height)
    );

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    centerWindow();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (res.status === 429) {
        setErrorMessage("Too many requests, please try again later.");
        setStep(3);
      } else if (res.ok) {
        setStep(2);
      } else {
        setErrorMessage("An error occurred while sending the message.");
        setStep(3);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while sending the message.");
      setStep(3);
    } finally {
      setLoading(false);
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full bg-[#1B3B25] flex items-center justify-center overflow-hidden"
    >
      {!isVisible ? (
        <button onClick={() => setIsVisible(true)} className="button">
          Open Contact Form
        </button>
      ) : (
        <div
          ref={windowRef}
          onMouseDown={handleMouseDown}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            position: "absolute",
            left: 0,
            top: 0,
            width: "600px",
          }}
          className="window"
        >
          <div className="title-bar">
            <div className="title-bar-text">Let&apos;s Connect</div>
            <div className="title-bar-controls">
              <button aria-label="Close" onClick={handleClose}></button>
            </div>
          </div>

          <div className="window-body" style={{ padding: "20px" }}>
            {step === 1 && (
              <form onSubmit={handleSubmit}>
                <div className="field-row" style={{ marginBottom: "24px" }}>
                  <label htmlFor="email" style={{ minWidth: "80px" }}>
                    Email:
                  </label>
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", color: "black" }}
                  />
                </div>

                <div className="field-row" style={{ marginBottom: "24px" }}>
                  <label htmlFor="message" style={{ minWidth: "80px" }}>
                    Message:
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={8}
                    style={{ width: "100%", color: "black" }}
                  />
                </div>

                <div
                  className="field-row"
                  style={{ justifyContent: "flex-end", gap: "8px" }}
                >
                  <button
                    type="submit"
                    disabled={
                      !isValidEmail(email) || !message.trim() || loading
                    }
                    style={{ minWidth: "120px" }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <p style={{ fontSize: "14px" }}>
                  Message sent. Talk to you soon!
                </p>
              </div>
            )}

            {step === 3 && (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <Image
                  src="/images/fail.png"
                  height={80}
                  width={80}
                  alt=""
                  priority
                  className="brightness-0 mx-auto opacity-70"
                />
                <p style={{ color: "red", marginTop: "16px" }}>
                  {errorMessage}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
