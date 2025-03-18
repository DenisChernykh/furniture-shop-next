type AdvantagesListProps = {
  advantages: Advantege[];
};
type Advantege = {
  id: string;
  item: string;
  iconUrl: string;
};
function AdvantagesList({ advantages }: AdvantagesListProps) {
  return (
    <ul className="space-y-5">
      {advantages.map((advantage) => (
        <li className="flex items-center gap-4" key={advantage.id}>
          <span
            style={{
              backgroundImage: `url(${advantage.iconUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="h-16 w-16 rounded-full bg-white/10"
          ></span>
          <span className="font-brewery uppercase">{advantage.item}</span>
        </li>
      ))}
    </ul>
  );
}

export default AdvantagesList;
