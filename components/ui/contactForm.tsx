"use client";

import { sendContactForm } from "@/lib/api";
import { Button } from "@base-ui/react";
import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-orange-600 flex flex-col w-full max-w-xl mx-auto p-6 my-10 mx-auto gap-2 rounded-xl shadow-2xl"
    >
      <h2 className="text-2xl font-bold mb-4">
        Ingin lebih dekat dengan kami? Berikan kami saran...
      </h2>
      <input
        className="p-2 rounded-lg  bg-amber-600 shadow-lg font-medium border focus:outline-none focus:border-2 focus:border-red-950 border-transparent transition-colors duration-300 hover:border-red-950 hover:bg-amber-700"
        type="text"
        placeholder="john doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        className="p-2 rounded-lg bg-amber-600 shadow-lg border-2 border-transparent font-medium focus:outline-none focus:border-2 focus:border-red-950 transition-colors duration-300 hover:border-red-950 hover:bg-amber-700"
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        name="message"
        className="p-2 rounded-lg bg-amber-600 shadow-lg border-2 border-transparent font-medium focus:outline-none focus:border-2 focus:border-red-950 transition-colors duration-300 hover:border-red-950 hover:bg-amber-700"
        placeholder="apa yang ingin kamu sampaikan..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      {status === "loading" ? (
        <Button
          className="bg-red-950 text-white min-w-[140px] mx-auto rounded-lg p-2 font-semibold mt-6 transition-colors duration-300 hover:bg-red-800"
          type="submit"
          disabled
        >
          Mengirim...
        </Button>
      ) : (
        <Button
          className="bg-red-950 text-white min-w-[140px] mx-auto rounded-lg p-2 font-semibold mt-6 transition-colors duration-300 hover:bg-red-800"
          type="submit"
        >
          Kirim Pesan
        </Button>
      )}
      {status === "success" && (
        <p className="text-center font-semibold text-shadow-black">
          Pesan terkirim, terimakasih!
        </p>
      )}
      {status === "error" && (
        <p className="text-center font-semibold text-red-900">
          {errorMessage || "Pesan gagal terkirim, coba lagi ya..."}
        </p>
      )}
    </form>
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      await sendContactForm({ name, email, message });
      setErrorMessage("");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      }
    }
  }
}
