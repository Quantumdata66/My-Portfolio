import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulazeez-portfolio.vercel.app"),
  title: "Abdulazeez Nurudeen Adedotun | Backend Engineer & AI Systems Builder",
  description: "Personal brand platform of Abdulazeez Nurudeen Adedotun — Backend Engineer, AI Engineer, and Mechatronics Engineer building scalable backend architectures and intelligent software systems.",
  keywords: [
    "Abdulazeez Nurudeen Adedotun",
    "Abdulazeez Nurudeen",
    "Backend Engineer Lagos",
    "AI Engineer Nigeria",
    "Mechatronics Engineer",
    "FastAPI Developer",
    "Supabase Expert",
    "Python AI Engineer",
    "Notely AI",
    "Quantum Jersey"
  ],
  authors: [{ name: "Abdulazeez Nurudeen Adedotun", url: "https://github.com/quantumdata66" }],
  openGraph: {
    title: "Abdulazeez Nurudeen Adedotun | Backend Engineer & AI Engineer",
    description: "I build intelligent software systems, AI-powered applications, scalable backend architectures, and engineering solutions.",
    url: "https://abdulazeez-portfolio.vercel.app",
    siteName: "Abdulazeez Nurudeen Adedotun Portfolio",
    images: [
      {
        url: "/images/portrait.jpg",
        width: 1200,
        height: 1200,
        alt: "Abdulazeez Nurudeen Adedotun"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulazeez Nurudeen Adedotun | Backend Engineer & AI Engineer",
    description: "Building intelligent software systems, scalable backends, and AI pipelines.",
    images: ["/images/portrait.jpg"],
    creator: "@quantumdata66"
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdulazeez Nurudeen Adedotun",
    jobTitle: "Backend Engineer | AI Engineer | Mechatronics Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "Nigeria"
    },
    email: "nurdul4002@gmail.com",
    url: "https://linkedin.com/in/nurudeen-abdulazeez",
    sameAs: [
      "https://github.com/quantumdata66",
      "https://linkedin.com/in/nurudeen-abdulazeez"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#090909] text-zinc-100 selection:bg-blue-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
