"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Apple, CreditCard, Globe, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import emailjs from "emailjs-com";

const paymentMethods = [
  {
    name: "Apple Pay",
    icon: Apple,
    color: "from-green-500 to-teal-600",
  },
  {
    name: "Google Pay",
    icon: Globe,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "PayPal",
    icon: CreditCard,
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Stripe",
    icon: CreditCard,
    color: "from-indigo-500 to-violet-600",
  },
  // Add more payment methods here
];

export default function PaymentSpecialistPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_nk0x5wv", // Your EmailJS service ID
        "template_5aymgsp", // Your EmailJS template ID
        {
          // payment_method: selectedMethod,
          first_name: form.name,
          title: "For Payment Specialist",
          message: `I want to make payment using ${selectedMethod}. My Name is ${form.name}, My Email is ${form.email}, My WhatsApp Number is ${form.whatsapp}`,
          // email: form.email,
          // whatsapp: form.whatsapp,
          to_email: "yahabubakar2504@gmail.com", // Your email
        },
        "cSCC009c3HP3O5rHb" // Your EmailJS user/public key
      );
      setSubmitted(true);
    } catch (err) {
      alert("Failed to send message. Please try again.");
    }
    setSending(false);
    setTimeout(() => {
      setSelectedMethod(null);
      setSubmitted(false);
      setForm({ name: "", email: "", whatsapp: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50 flex flex-col">
      <Navigation />

      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold mb-4"
          >
            Payment Specialist
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-blue-100 mb-2"
          >
            Connect with our Payment Specialist for personalized assistance with various payment methods. Select a method below and provide your details - our specialist will contact you via WhatsApp.
          </motion.p>
        </div>
      </section>

      <section className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentMethods.map((method) => (
              <Dialog key={method.name} onOpenChange={(open) => !open && setSubmitted(false)}>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedMethod(method.name)}
                  >
                    <Card className="cursor-pointer shadow-lg border-0 overflow-hidden">
                      <div className={`relative h-32 bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                        <method.icon className="h-16 w-16 text-white" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-center text-xl text-gray-900">
                          {method.name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Provide Your Details for {method.name}</DialogTitle>
                  </DialogHeader>
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" value={form.name} onChange={handleChange} required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
                      </div>
                      <div>
                        <Label htmlFor="whatsapp">WhatsApp Number</Label>
                        <Input id="whatsapp" name="whatsapp" value={form.whatsapp} onChange={handleChange} required />
                      </div>
                      <p className="text-sm text-gray-600">Our payment specialist will reach out to you via the WhatsApp number provided.</p>
                      <Button type="submit" className="w-full" disabled={sending} >
                        {sending ? "Sending..." : "Submit"}
                      </Button>
                    </form>
                  ) : (
                    <p className="text-center text-green-600">Thank you! Our specialist will contact you soon.</p>
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}