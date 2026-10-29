import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 antialiased">
      <Header />
      <main className="mx-auto -mt-10 grid max-w-5xl gap-6 px-4 pb-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <Experience />
        </div>
        <div className="flex flex-col gap-6">
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
