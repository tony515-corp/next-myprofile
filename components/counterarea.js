import Image from "next/image";

const counters = [
  { icon: "/img/tony/icon/c1.png", label: ["Year of", "Experience"], value: 6 },
  { icon: "/img/tony/icon/c2.png", label: ["Global Working", "Client"], value: 34 },
  { icon: "/img/tony/icon/c3.png", label: ["Awards", "Win"], value: 31 },
];

export default function CounterArea() {
  return (
    <div className="counter-area counter-bg-2 de-padding">
      <div className="container">
        <div className="counter-vidz">
          <div className="counter-wpr grid-3">
            {counters.map((item) => (
              <div className="fun-fact" key={item.value + item.label[0]}>
                <div className="fun-fact-icon">
                  <Image
                    src={item.icon}
                    width={36}
                    height={36}
                    layout="fixed"
                    alt=""
                  />
                </div>
                <div className="fun-desc">
                  <span className="medium">
                    {item.label[0]}
                    <br />
                    {item.label[1]}
                  </span>
                  <p className="timer" data-count="+" data-to={item.value} data-speed="6000">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
