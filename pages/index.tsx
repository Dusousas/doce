import About from "@/components/About";
import Contact from "@/components/Contact";
import Galery from "@/components/Galery";
import Grid from "@/components/Grid";
import History from "@/components/History";
import Main from "@/components/Main";
import Instagram from "@/components/subc/Instagram";
import Whatsapp from "@/components/subc/Whatsapp";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Galery />
      <History />
      <Grid />
      <Contact />
      <Whatsapp />
      <Instagram />
    </>
  );
}
