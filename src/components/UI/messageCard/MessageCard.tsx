import Image from "next/image";
import Link from "next/link";
import React from "react";

const MessageCard = () => {
  return (
    <section className="container mx-auto flex justify-evenly mt-10">
      <div className="lg:flex gap-5 md:mx-0">
        <div className="card md:card-side bg-base-100 shadow-xl mb-5 mx-5">
          <figure>
            <Image
              className="w-96 h-full"
              width={500}
              height={520}
              src="/principal.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body w-96">
            <h2 className="card-title">Title</h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              harum officiis. Minima architecto modi iste cumque, sed, explicabo
              dolorum fugit dicta illum nobis quisquam, quibusdam perferendis
              blanditiis neque et eaque non eius excepturi eos odio corrupti
              esse. Enim consequuntur dolore harum iure officia et, sunt,
              quibusdam praesentium numquam unde repudiandae!
            </p>
            <div className="card-actions justify-start">
              <Link href="">Read more</Link>
            </div>
          </div>
        </div>
        <div className="card md:card-side bg-base-100 shadow-xl mb-5 mx-5">
          <figure>
            <Image
              className="w-96 h-full"
              width={500}
              height={520}
              src="/vice-principal.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body w-96">
            <h2 className="card-title">Title</h2>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              ducimus corrupti nam itaque saepe officia magni quae ut,
              aspernatur quibusdam asperiores incidunt commodi laudantium,
              quidem delectus nisi at vel reprehenderit cum distinctio nemo
              repudiandae beatae? Eligendi et fugiat impedit fuga magnam
              delectus, ea autem, temporibus, nobis officiis aspernatur dicta
              omnis.
            </p>
            <div className="card-actions justify-start">
              <Link href="">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageCard;
