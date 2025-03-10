import Container from "../UI/Container";
import SectionTitle from "./SectionTitle";

function AboutSection() {
  return (
    <section className="mb-5 pt-10 md:mb-16 md:pt-28">
      <Container>
        <div className="block gap-5 md:grid md:grid-cols-2">
          <div>
            <SectionTitle title="Мы команда профессионалов в области дизайна и производства уникальной мебели" />
          </div>
          <div className="grid grid-cols-2">
            <div className="font-brewery text-[280px] leading-none">20</div>
            <div>
              <div className="mb-8">
                <SectionTitle title="Лет опыта" />
              </div>
              <div className="leading-7 text-white/50 uppercase">
                Спроектируем и изготовим мебель любого назначения и сложности
                точно в срок. Работаем на итальянском оборудовании с
                использованием премиум материалов и фурнитуры.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
