"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "Top 10 Hidden Gems in Europe for 2025",
    excerpt: "Discover lesser-known destinations that offer authentic experiences away from the crowds.",
    author: "Sarah Johnson",
    date: "2024-12-15",
    category: "Destinations",
    image: "/placeholder.svg?height=250&width=400",
    readTime: "5 min read",
  },
  {
    title: "Sustainable Travel: How to Explore Responsibly",
    excerpt: "Learn about eco-friendly travel practices and how to minimize your environmental impact.",
    author: "Michael Chen",
    date: "2024-12-10",
    category: "Travel Tips",
    image: "/placeholder.svg?height=250&width=400",
    readTime: "7 min read",
  },
  {
    title: "The Ultimate Guide to Asian Street Food",
    excerpt: "From Bangkok to Tokyo, explore the best street food scenes across Asia.",
    author: "Emma Rodriguez",
    date: "2024-12-05",
    category: "Food & Culture",
    image: "/placeholder.svg?height=250&width=400",
    readTime: "6 min read",
  },
  {
    title: "Luxury Travel Trends for 2025",
    excerpt: "Discover the latest trends in luxury travel and what to expect in the coming year.",
    author: "David Thompson",
    date: "2024-12-01",
    category: "Luxury Travel",
    image: "/placeholder.svg?height=250&width=400",
    readTime: "4 min read",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Travel Insights & Tips</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest travel trends, destination guides, and expert tips to make your journeys more
            memorable and meaningful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-blue-600 text-white">{post.category}</Badge>
                  <div className="absolute bottom-3 right-3 text-white text-sm">{post.readTime}</div>
                </div>

                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest travel tips, destination guides, and exclusive offers
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </motion.div>

        {/* View All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            View All Posts
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
