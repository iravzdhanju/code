import React from "react";

const Auctions = () => {
  const initData = {
    pre_heading: "Auctions",
    heading: "Live Auctions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    btnText: "Load More",
  };
  const data = [
    {
      id: "1",
      img: "/img/cardWrapper.png",
      date: "2021-12-09",
      title: "Virtual Worlds",
      seller_thumb: "/img/avatar_1.jpg",
      seller: "@Richard",
      price: "1.5 BNB",
      count: "1 of 1",
    },
    {
      id: "2",
      img: "/img/cardWrapper.png",
      date: "2021-10-05",
      title: "Collectibles",

      seller_thumb: "/img/avatar_2.jpg",
      seller: "@JohnDeo",
      price: "2.7 BNB",
      count: "1 of 1",
    },
    {
      id: "3",
      img: "/img/cardWrapper.png",
      date: "2021-09-15",
      title: "Arts",
      seller_thumb: "/img/avatar_3.jpg",
      seller: "@MKHblots",
      price: "2.3 BNB",
      count: "1 of 1",
    },
    {
      id: "4",
      img: "/img/cardWrapper.png",
      date: "2021-12-29",
      title: "Robotic Arts",
      seller_thumb: "/img/avatar_4.jpg",
      seller: "@RioArham",
      price: "1.8 BNB",
      count: "1 of 1",
    },
    {
      id: "5",
      img: "/img/cardWrapper.png",
      date: "2022-01-24",
      title: "Magazine Fall",
      seller_thumb: "/img/avatar_5.jpg",
      seller: "@ArtNox",
      price: "1.7 BNB",
      count: "1 of 1",
    },
    {
      id: "6",
      img: "/img/cardWrapper.png",
      date: "2022-03-30",
      title: "Inspiration",
      seller_thumb: "/img/avatar_6.jpg",
      seller: "@ArtNox",
      price: "1.7 BNB",
      count: "1 of 1",
    },
    {
      id: "7",
      img: "/img/cardWrapper.png",
      date: "2022-01-24",
      title: "Design Illusions",
      seller_thumb: "/img/avatar_7.jpg",
      seller: "@ArtNox",
      price: "1.7 BNB",
      count: "1 of 1",
    },
    {
      id: "8",
      img: "/img/cardWrapper.png",
      date: "2022-03-30",
      title: "Design Illusions",
      seller_thumb: "/img/avatar_8.jpg",
      seller: "@ArtNox",
      price: "1.7 BNB",
      count: "1 of 1",
    },
    {
      id: "9",
      img: "/img/cardWrapper.png",
      date: "2022-03-30",
      title: "Design Illusions",
      seller_thumb: "/img/avatar_4.jpg",
      seller: "@ArtNox",
      price: "1.7 BNB",
      count: "1 of 1",
    },
    {
      id: "10",
      img: "/img/cardWrapper.png",
      date: "2022-03-30",
      title: "Infinity",
      seller_thumb: "/img/avatar_1.jpg",
      seller: "@ArtNox",
      price: "1.7 BNB",
      count: "1 of 1",
    },
    {
      id: "11",
      img: "/img/cardWrapper.png",
      date: "2022-01-24",
      title: "Sports",
      seller_thumb: "/img/avatar_2.jpg",
      seller: "@ArtNox",
      price: "1.7 BNB",
      count: "1 of 1",
    },
    {
      id: "12",
      img: "/img/cardWrapper.png",
      date: "2022-03-30",
      title: "Characteristics",
      seller_thumb: "/img/avatar_3.jpg",
      seller: "@ArtNox",
      price: "1.7 BNB",
      count: "1 of 1",
    },
  ];
  return (
    <section className="live-auctions-area load-more">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            {/* Intro */}
            <div className="intro text-center">
              <span>{initData.pre_heading}</span>
              <h3 className="mt-3 mb-0">{initData.heading}</h3>
              <p>{initData.content}</p>
            </div>
          </div>
        </div>
        <div className="row items">
          {data.map((item, idx) => {
            return (
              <div
                key={`auct_${idx}`}
                className="col-12 col-sm-6 col-lg-3 item"
              >
                <div className="card">
                  <div className="image-over">
                    <a href="/item-details">
                      <img className="card-img-top" src={item.img} alt="" />
                    </a>
                  </div>
                  {/* Card Caption */}
                  <div className="card-caption col-12 p-0">
                    {/* Card Body */}
                    <div className="card-body">
                      <div className="countdown-times mb-3">
                        <div
                          className="countdown d-flex justify-content-center"
                          data-date={item.date}
                        />
                      </div>
                      <a href="/item-details">
                        <h5 className="mb-0">{item.title}</h5>
                      </a>
                      <a
                        className="seller d-flex align-items-center my-3"
                        href="/author"
                      >
                        <img
                          className="avatar-sm rounded-circle"
                          src={item.seller_thumb}
                          alt=""
                        />
                        <span className="ml-2">{item.seller}</span>
                      </a>
                      <div className="card-bottom d-flex justify-content-between">
                        <span>{item.price}</span>
                        <span>{item.count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">
              {initData.btnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auctions;
