import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    setSubmitted(true);
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="py-16 px-6 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
          <p className="text-gray-600">
            Have any questions? Send us a message and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-5 space-y-2">
            <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Have any questions? Send us a message and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-7 space-y-4">
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubmitted(false);
                }}
                placeholder="Email Address"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <textarea
                rows="4"
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setSubmitted(false);
                }}
                placeholder="Your Message"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                Message sent! Thank you for reaching out.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;