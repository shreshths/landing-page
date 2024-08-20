import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "My Company - Leading App Development Company",
  description:
    "Explore My Company, a leading company in app development with over 100 projects 15 industries.",
  keywords: [
    "My Company",
    "App Development",
    "iOS Development",
    "Android Development",
    "Web Development",
    "UX/UI Design",
    "Testing",
    "Launch",
    "IT Consulting",
    "Software Development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
