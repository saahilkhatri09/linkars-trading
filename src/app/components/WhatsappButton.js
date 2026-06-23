"use client";

export default function WhatsAppButton() {
return ( <a
   href="https://wa.me/919850844558"
   target="_blank"
   rel="noopener noreferrer"
   className="
     fixed
     bottom-5
     right-5
     z-50
     flex
     flex-col
     items-center
     gap-1
   "
 > <span className="text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded-md shadow">
Reach Us </span>

  <div
    className="
      bg-green-500
      hover:bg-green-600
      text-white
      w-16
      h-16
      rounded-full
      flex
      items-center
      justify-center
      shadow-lg
      transition
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="currentColor"
    >
      <path d="M16.01 3C8.84 3 3 8.74 3 15.82c0 2.5.73 4.91 2.12 7L3 29l6.4-2.06a13.2 13.2 0 0 0 6.61 1.78h.01c7.17 0 13-5.74 13-12.82C29.02 8.74 23.18 3 16.01 3zm7.58 18.09c-.32.88-1.87 1.67-2.58 1.77-.67.1-1.52.15-2.45-.14-.56-.18-1.28-.42-2.21-.82-3.89-1.66-6.43-5.54-6.62-5.8-.18-.25-1.58-2.08-1.58-3.98s1-2.84 1.36-3.23c.35-.39.77-.49 1.03-.49.25 0 .52 0 .74.01.24.01.56-.09.87.67.32.78 1.08 2.68 1.17 2.88.1.2.16.43.03.68-.13.25-.2.41-.39.63-.2.22-.41.49-.58.66-.2.2-.41.42-.18.82.23.39 1.02 1.67 2.19 2.71 1.51 1.33 2.79 1.74 3.19 1.93.39.2.62.17.85-.1.23-.27.97-1.12 1.23-1.51.26-.39.52-.33.88-.2.36.13 2.29 1.07 2.68 1.26.39.2.65.29.74.46.1.17.1.98-.23 1.86z" />
    </svg>
  </div>
</a>

);
}

