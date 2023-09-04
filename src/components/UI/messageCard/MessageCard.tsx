import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const MessageCard = () => {
  return (
    <section className="container mx-auto flex justify-evenly mt-10">
      <div className="lg:flex mx-5 md:mx-0 gap-10">
        <div className="glass p-5 rounded-md mb-5">
          <div className="md:flex gap-5">
            <Image
              alt=""
              className="h-full"
              src="/principal.jpg"
              width={300}
              height={300}
            />
            <div>
              <h4 className="text-2xl font-bold mt-10">Title</h4>
              <p className="my-5 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                asperiores non molestiae maiores nesciunt, tenetur architecto,
                aperiam quas, facere voluptate quo culpa fuga modi error iusto.
                Distinctio, nesciunt minima recusandae dolor perspiciatis natus
                doloremque. Assumenda, inventore eius sequi dignissimos dicta
                quia consectetur! Quisquam excepturi ipsa consectetur alias
                facilis voluptatum doloribus.
              </p>
              <Link href="/" className="font-medium flex items-center">
                Read more <AiOutlineCaretRight />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="glass p-5 rounded-md mb-5">
            <div className="md:flex gap-5">
              <Image
                className="h-full"
                alt=""
                src="/vice-principal.jpg"
                width={300}
                height={300}
              />
              <div>
                <h4 className="text-2xl font-bold mt-10">Title</h4>
                <p className="my-5 text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus asperiores non molestiae maiores nesciunt, tenetur
                  architecto, aperiam quas, facere voluptate quo culpa fuga modi
                  error iusto. Distinctio, nesciunt minima recusandae dolor
                  perspiciatis natus doloremque. Assumenda, inventore eius sequi
                  dignissimos dicta quia consectetur! Quisquam excepturi ipsa
                  consectetur alias facilis voluptatum doloribus.
                </p>
                <Link href="/" className="font-medium flex items-center">
                  Read more <AiOutlineCaretRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageCard;
