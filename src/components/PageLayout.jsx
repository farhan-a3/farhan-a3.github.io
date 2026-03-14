import Navbar from './Navbar';
import Footer from './Footer';

function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#010127] text-[#f6f3ed]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;
