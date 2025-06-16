"use client";
import { motion } from "framer-motion";
// import Navigation from "@/components/navigation";
// import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coins, CreditCard, Gift } from "lucide-react";
import IbanPaymentInfo from "../IBAN";
import GiftCardPayment from "../Giftcaerd";
import NowPaymentsButton from "../NowPayment";

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50 flex flex-col">
      {/* <Navigation /> */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold mb-4"
          >
            Make a Payment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-blue-100 mb-2"
          >
            Choose your preferred payment method below. All payments are secure
            and processed instantly.
          </motion.p>
        </div>
      </section>
      <section className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <Tabs defaultValue="crypto" className="w-full">
            <TabsList className="flex justify-center gap-4 mb-8 bg-white/80 shadow rounded-lg p-2">
              <TabsTrigger
                value="crypto"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-blue-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition"
              >
                <Coins className="h-5 w-5" /> Crypto
              </TabsTrigger>
              <TabsTrigger
                value="iban"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-blue-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition"
              >
                <CreditCard className="h-5 w-5" /> IBAN
              </TabsTrigger>
              <TabsTrigger
                value="giftcard"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-blue-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition"
              >
                <Gift className="h-5 w-5" /> Gift Card
              </TabsTrigger>
            </TabsList>

            <TabsContent value="crypto">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900 flex items-center gap-2">
                    <Coins className="h-6 w-6 text-yellow-500" />
                    Pay with Crypto
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Fast, secure, and borderless payments. Powered by
                    NOWPayments.
                  </p>
                </CardHeader>
                <CardContent>
                  <NowPaymentsButton price={100} currency="EUR" />
                  <p className="text-xs text-gray-400 mt-4">
                    You will be redirected to a secure crypto checkout.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="iban">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900 flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-green-600" />
                    Pay via IBAN (Bank Transfer)
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Transfer directly from your bank account. Please use your
                    booking reference if available.
                  </p>
                </CardHeader>
                <CardContent>
                  <IbanPaymentInfo />
                  <p className="text-xs text-gray-400 mt-4">
                    Bank transfers may take 1-2 business days to process.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="giftcard">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900 flex items-center gap-2">
                    <Gift className="h-6 w-6 text-purple-600" />
                    Pay with Gift Card
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Redeem your Swift Tours gift card for instant payment.
                  </p>
                </CardHeader>
                <CardContent>
                  <GiftCardPayment />
                  <p className="text-xs text-gray-400 mt-4">
                    Enter your gift card code to pay or check your balance.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
