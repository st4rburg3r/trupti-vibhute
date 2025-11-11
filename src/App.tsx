import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import Home from "./pages/Home";
import Whoami from "./pages/Whoami";
import Blogs from "./pages/articles";
import Notes from "./pages/Notes";
import Interests from "./pages/Interests";
import Now from "./pages/Now";
import Slashes from "./pages/Slashes";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <ParticleBackground />
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whoami" element={<Whoami />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/now" element={<Now />} />
            <Route path="/slashes" element={<Slashes />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
