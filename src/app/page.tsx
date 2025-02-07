import Footer from '@/components/footer/footer';
import Header from '@/components/header/Header';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <div className='h-[1000px]'>
        <p>Body</p>
      </div>
      <Footer />
    </MainLayout>
  );
}
