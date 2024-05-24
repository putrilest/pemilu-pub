import CandidateCard from './components/CandidateCard';
import Footer from './components/Footer';
import Header from './components/Header';

interface Candidate {
  id: number;
  nama: string;
  foto: string;
  nomorUrut: number;
  angkatan: string;
}

const candidates: Candidate[] = [
  {
    id: 1,
    nama: "Adit Sopo Jarwo",
    foto: "/kandidat1.jpg",
    nomorUrut: 1,
    angkatan: "2020"
  },
  {
    id: 2,
    nama: "Paijo Santoso",
    foto: "/kandidat2.jpeg",
    nomorUrut: 2,
    angkatan: "2020"
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className='tittle'>
        <h2>KANDIDAT KETUA / KEAMANAN PUB</h2>
        <h2>PERIODE 2022/2023</h2>
      </div>
      <div className="candidates">
        {candidates.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
