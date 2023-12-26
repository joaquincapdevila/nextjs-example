import { poppins } from './ui/fonts';
import  './ui/global.css'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      <footer className='flex justify-center items-center'>Hecho con ❤️ por versel</footer>
      </body>
    </html>
  );
}
