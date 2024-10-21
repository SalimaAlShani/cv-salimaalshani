import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/RiwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import "./salima-style.css";

export default function CVOnline() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
    </section>
  );
} 