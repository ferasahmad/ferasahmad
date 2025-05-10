"use client";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import success from "@/lotties/success-animation.json";
import SectionContainer from "./SectionContainer";
import { isValidEmail } from "@/utilities/helpers";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState(false);

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
    <SectionContainer>
      <div className="flex flex-col justify-center items-center w-[878px] h-screen lg:h-fit lg:w-[50vw] sm:w-[95vw]">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col h-[450px] w-full gap-8 relative overflow-hidden z-10 lg:p-5"
        >
          {step === 1 && (
            <>
              <h1 className="text-4xl text-center font-bold m-0">
                Let&apos;s connect
              </h1>

              <div className="relative w-full">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                  className="w-full p-2.5 border-2 border-white rounded bg-transparent text-white text-xl outline-none"
                />
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                maxLength={200}
                className="w-full p-2.5 border-2 border-white rounded bg-transparent text-white text-xl outline-none min-h-[150px] max-h-[150px]"
              />

              <button
                type="submit"
                disabled={!isValidEmail(email) || !message.trim() || loading}
                className={`flex items-center justify-center self-end h-[45px] w-[120px] rounded bg-white text-black text-xl transition-colors duration-300
                  ${!loading && "hover:bg-black hover:text-white"}
                  disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loading ? (
                  <div className="w-5 h-5 border-4 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  "SEND"
                )}
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: success,
                }}
                height={200}
                width={200}
              />
              <p className="text-center lg:text-xl text-xl font-bold">
                Message sent. Talk to you soon!
              </p>
            </>
          )}

          {step === 3 && (
            <>
              <Image
                src="/images/fail.png"
                height={150}
                width={150}
                alt=""
                priority
                className="brightness-0 invert contrast-100"
              />
              <p className="uppercase text-center text-sm tracking-[3px] lg:text-xs lg:mt-2.5 lg:m-0">
                {errorMessage}
              </p>
            </>
          )}
        </form>
      </div>
    </SectionContainer>
  );
}
