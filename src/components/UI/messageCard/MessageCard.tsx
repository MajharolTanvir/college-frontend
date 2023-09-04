import React from "react";

const MessageCard = () => {
  return (
    <section className="container mx-auto flex justify-evenly">
      <div>
        <div className="card w-96 bg-base-100 shadow-xl flex">
          <div>
            <figure className="px-10 pt-10">
              <img src="/principal.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/vice-principal.jpg" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageCard;
