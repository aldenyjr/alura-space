export default function Icone({ icone, style }) {
  return (
    <li className={style.menu__item}>
      <img src={icone.path} alt={icone.alt} />
      <a href="/alura-space/">{icone.link}</a>
    </li>
  );
}
