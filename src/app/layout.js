import NextTopLoader from "nextjs-toploader";
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/css/animate.min.css'
import 'react-loading-skeleton/dist/skeleton.css'



export const metadata = {
  title: "EasyShop - Easy Life | Online Shopping Made Simple",
  description: "Discover a hassle-free shopping experience with EasyShop - Easy Life. Shop trending products, unbeatable prices, and fast delivery all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NextTopLoader/>
      </body>
    </html>
  );
}
