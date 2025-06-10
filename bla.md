service_nk0x5wv

temlate id: template_5aymgsp

user key: cSCC009c3HP3O5rHb

firstName: form.firstName,
lastName: form.lastName,
email: form.email,
phone: form.phone,
interest: form.interest,
startDate: form.startDate,
stopDate: form.stopDate,
budget: form.budget,
message: form.message,
newsletter: form.newsletter

{/_ <form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
First Name _
</label>
<Input placeholder="" required />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Last Name \*
</label>
<Input placeholder="" required />
</div>
</div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Travel Interest *
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select your interest</option>
                        <option value="europe">Europe Tours</option>
                        <option value="asia">Asia Tours</option>
                        <option value="boats">Chartered Boats</option>
                        <option value="transfers">Luxury Transfers</option>
                        <option value="custom">Custom Package</option>
                        <option value="group">Group Travel</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Travel Date
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Start Date
                          </label>
                          <Input type="date" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Stop Date
                          </label>
                          <Input type="date" required />
                        </div>
                      </div>
                    </div>

                     <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select budget range</option>
                        <option value="1000-2500">$100 - $250</option>
                        <option value="2500-5000">$250 - $400</option>
                        <option value="5000-10000">$400 - $500</option>
                        <option value="10000+">$500+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select budget range</option>
                        {budgetOptions.map((opt) => {
                          const minConverted = Math.round(
                            opt.min * conversionRate
                          );
                          const maxConverted = opt.max
                            ? Math.round(opt.max * conversionRate)
                            : null;
                          const label = maxConverted
                            ? `$${opt.min} - $${opt.max}  (${currencySymbol}${minConverted} - ${currencySymbol}${maxConverted}) `
                            : ` $${opt.min}+  (${currencySymbol}${minConverted}+) `;
                          return (
                            <option key={opt.value} value={opt.value}>
                              {label}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your dream vacation, special requirements, or any questions you have..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="rounded"
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-sm text-gray-600"
                      >
                        Subscribe to our newsletter for travel tips and
                        exclusive offers
                      </label>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        size="lg"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form> */}
