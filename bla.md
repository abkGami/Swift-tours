now payments: XEEZD6J-YKZM4WC-KZ089YN-5HZ31YX

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBoats.map((boat, index) => (
                <motion.div
                  key={boat.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Link href={`/details/${boat.id}`} className="block h-full">
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                      <div className="relative overflow-hidden">
                        <Image
                          width={1200}
                          height={12}
                          src={boat.image || "/placeholder.svg"}
                          alt={boat.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        {/* <div className="absolute bottom-3 left-3 text-white">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm font-medium">
                              {boat.rating}
                            </span>
                          </div>
                        </div> */}
                      </div>

                      <CardHeader>
                        <CardTitle className="text-xl text-gray-900">
                          {boat.name}
                        </CardTitle>
                        <div className="flex items-center justify-between">
                          {/* <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          {boat.type}
                        </Badge> */}
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-1" />
                            <span className="text-sm">{boat.capacity}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        {/* Show search result details */}
                        <div className="mb-2">
                          <span className="font-semibold">Year:</span>{" "}
                          {boat.specifications.year || "N/A"}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Skipper:</span>{" "}
                          {withSkipper === "any"
                            ? "Optional"
                            : withSkipper === "yes"
                            ? "With Skipper"
                            : "Without Skipper"}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">People:</span>{" "}
                          {boat.capacity}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Cabins:</span>{" "}
                          {boat.features
                            ?.find((f) => f.toLowerCase().includes("cabin"))
                            ?.match(/\d+/)?.[0] || "N/A"}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Berths:</span>{" "}
                          {/* You can add berths info to your data if available */}
                          {"N/A"}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Metres:</span>{" "}
                          {boat.specifications.length}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Fuel Included:</span>{" "}
                          {boat.features?.some((f) =>
                            f.toLowerCase().includes("fuel")
                          )
                            ? "Yes"
                            : "No"}
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold">Price:</span>{" "}
                          {boat.price}
                        </div>
                        {/* <Button
                          // onClick={handleClick}
                          className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                        >
                          Book Now
                        </Button> */}
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>