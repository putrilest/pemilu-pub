import Button from './Button';
import './CandidatCard.css';


interface CandidateCardProps {
  candidate: {
    id: number;
    nama: string;
    foto: string;
    nomorUrut: number;
    angkatan: string;
  };
}

function CandidateCard({ candidate }: CandidateCardProps) {
  const showDetails = () => {
    alert(`Kandidat No. ${candidate.nomorUrut}, ${candidate.nama}, angkatan ${candidate.angkatan}`);
  };

  return (
    <div className="candidate-card">
      <h1>0{candidate.nomorUrut}</h1>
      <img src={candidate.foto} alt={candidate.nama} />
      <h2>{candidate.nama}</h2>
      <Button text="Selengkapnya" height={40} onClick={showDetails}/>
    </div>
  );
}

export default CandidateCard;

