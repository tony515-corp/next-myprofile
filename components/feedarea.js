import Image from "next/image";
import { testimonials } from "../data/testimonials";

export default function FeedArea() {
  return (
    <div className="feed-area  de-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="site-title mb-60 text-center">
              <h5 className="about-sub-title wh def">Client</h5>
              <h2 className="mb-0">What My Client Say?</h2>
            </div>
          </div>
        </div>
        <div className="feed-wpr feed-sldr owl-carousel owl-theme">
          {testimonials.map((item) => (
            <div className="feed-box" key={item.id}>
              <div className="feed-qoute">
                <i className="fas fa-quote-left" />
              </div>
              <p>{item.quote}</p>
              <div className="feed-bio">
                <Image
                  src={item.image}
                  layout="fixed"
                  width={80}
                  height={80}
                  alt={item.name}
                />
                <div className="feed-name">
                  <h5 className="mt-20">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.name} <i className="fa fa-link" aria-hidden="true" />
                    </a>
                  </h5>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
