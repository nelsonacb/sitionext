import Card from "@/components/Card";
import { cardsData } from "@/data/infoCards";

const HomePage = () => {
  return (
    <main className="p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-4 gap-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            srcimagen={card.srcimagen}
            altimagen={card.altimagen}
            titulo={card.titulo}
            texto={card.texto}
            srcimagenfooter={card.srcimagenfooter}
            altimagenfooter={card.altimagenfooter}
            autor={card.autor}
            fecha={card.fecha}
          />
        ))}
      </div>
    </main>
  );
};
export default HomePage;
