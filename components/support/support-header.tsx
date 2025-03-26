"use client"

export default function SupportHeader() {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-teal-500 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="relative px-6 py-8 sm:px-12 lg:px-16">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Support Center
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-100">
          How can we help you today?
        </p>
      </div>
    </div>
  )
}
