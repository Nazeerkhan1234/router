import React from "react";
import Card from "../Card";

const HeroSection = () => {
  return (
    <main>
      <div className="section1 h-screen flex flex-col gap-4 text-white">
        <div className="box1 flex flex-col  justify-center items-center gap-6 pt-4 pb-4">
          <h1>Product and Services</h1>
          <marquee behavior="" direction="up" className="w-[550px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            ducimus. Sit, magni repellat quasi dolorum, consequuntur itaque
            distinctio quo quod autem nemo neque ipsa labore temporibus minus.
            Doloribus, assumenda aliquid!
          </marquee>
        </div>
        <div className="box2 flex justify-around">
          <div className="child1 pl-4 flex flex-col gap-4 justify-center items-center">
            <h1>GROW & SHINE</h1>
            <h2>Win with grow and shine</h2>
            <h3>learn coding for free</h3>
            <div>
              <i>
                purchase grow and shine <br />
                BUY 10 get 6 free is best
              </i>
            </div>
            <p className="w-96">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              facilis ad numquam excepturi nisi, aspernatur quod obcaecati
              dignissimos doloremque.
            </p>
            <div className="btn w-full hover:bg-orange-600 hover:scale-75">
              <button className="capitalize">register here </button>
            </div>
          </div>
          <div className="child2">
            <div className="img w-98">
              <img
                src="https://cdn.pixabay.com/photo/2023/09/17/22/25/witch-8259351_1280.jpg"
                alt=""
                className="h-80"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-2 flex flex-wrap justify-center gap-2 bg-slate-950">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default HeroSection;
