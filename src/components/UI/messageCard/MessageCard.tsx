import Image from "next/image";
import React from "react";

const MessageCard = () => {
  return (
    <section className="container mx-auto flex justify-evenly">
      <div>
        <div className="card w-full bg-base-100 shadow-xl grid grid-cols-2 gap-x-5">
          <div className="pl-10 pt-10">
            <Image
              src="/principal.jpg"
              alt="Shoes"
              className="rounded-xl"
              width={200}
              height={200}
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Message of the Principal</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-fit bg-base-100 shadow-xl grid grid-cols-2">
          <div className="pl-10 pt-10">
            <Image
              src="/vice-principal.jpg"
              alt="Shoes"
              className="rounded-xl"
              width={200}
              height={200}
            />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Message of the Vice-Principal</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageCard;
