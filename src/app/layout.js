import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import BootstrapClient from "./BootstrapClient";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Blogar App",
  description: "Blogar app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
