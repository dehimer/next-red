import Layout from '../components/Layout';

import image from '../static/images/t-34.jpg';

export default function T34() {
  return (
    <Layout
      title="Т-34"
      image={image}
    >
      <div className="text">
        <div>Привет с Красной площади! Я сейчас – в Музее под открытым небом. Селфи – я и знаменитый танк Т-34, самый массовый танк времен войны, один из  символов Победы, ставший героем одноименного фильма! Оказалось, что на войне с нашим танком случались истории покруче, чем в кино.</div>
        <div>Знаменитый танковый рейд экипажа под командованием С. Горобца через захваченный врагом Калинин в октябре 41 го года, -  стал легендой. В одиночку, прорываясь к нашим, «тридцатьчетверка» ураганом пронеслась по вражеским позициям, уничтожив технику, живую силу противника и даже два самолета! Не дожидаясь наградных документов, командующий 30-й армии генерал Хоменко вручил  Горобцу свой Орден Красного Знамени.</div>
      </div>

      { /*language=CSS*/ }
      <style jsx>{`
        .text div {
            margin-bottom: 5px;
        }
      `}</style>
    </Layout>
  );
}
