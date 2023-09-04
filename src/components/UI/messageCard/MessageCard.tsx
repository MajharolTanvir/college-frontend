import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const MessageCard = () => {
  return (
    <section className="container mx-auto flex justify-evenly mb-20">
      <div className="xl:flex mx-5 md:mx-0 gap-10">
        <div className="glass p-5 rounded-md mb-5">
          <div className="md:flex gap-5">
            <Image
              alt=""
              className="w-60 h-60"
              src="/principal.jpg"
              width={300}
              height={300}
            />
            <div>
              <h4 className="text-2xl font-bold mt-5">Title</h4>
              <p className="my-2 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                asperiores non molestiae maiores nesciunt, tenetur architecto,
                aperiam quasfacere voluptate quo culpa fuga modi error iusto.
                Distinctio recusandae dolor perspiciatis natus doloremque.
                inventore eius sequi dignissimos dicta quia consectetur!.
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
                className="w-60 h-60"
                alt=""
                src="/vice-principal.jpg"
                width={300}
                height={300}
              />
              <div>
                <h4 className="text-2xl font-bold mt-5">Title</h4>
                <p className="my-2 text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus asperiores non molestiae maiores nesciunt, tenetur
                  architecto, aperiam quasfacere voluptate quo culpa fuga modi
                  error iusto. Distinctio recusandae dolor perspiciatis natus
                  doloremque. inventore eius sequi dignissimos dicta quia
                  consectetur!.
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
