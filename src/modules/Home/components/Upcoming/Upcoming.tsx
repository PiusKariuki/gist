import React, { useEffect, useRef } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useHorizontalScroll from "shared/hooks/useHorizontalScroll";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "shared/hooks/useFetch";
import UpcomingCards from "./UpcomingCards";

const Upcoming = () => {
  const { renderSpinner } = useSpinner();
  const { data, getObject, load } = useFetch();

  useEffect(() => {
    getObject("/rooms/events", "GET", {});
  }, []);

  const { scrollRight, scrollLeft } = useHorizontalScroll();

  const scrollRef = useRef<any>(null);

  return (
    <div className="flex flex-col py-[3rem] px-[2rem] h-full  relative">
      <p className="text-black-40 text-[1.2rem] md:text-[1.6rem] font-[700] mb-[2rem]">
        Upcoming Events
      </p>
      {data?.length > 0 ? (
        <>
          {renderSpinner(load)}
          <div
            ref={scrollRef}
            className="scroller flex flex-row gap-x-8 overflow-x-scroll w-screen"
          >
            {data.map((room: any, key: number) => (
              <UpcomingCards
                title={room?.title}
                userName={room?.ownerId?.userName}
                price={room?.productPrice}
                shopImage={room?.shopId?.image}
                userImage={room?.ownerId?._id + ".png"}
                productImage={
                  room?.productIds != undefined
                    ? room?.productIds![0].images[0]
                    : ""
                }
                roomId={room?._id}
                key={key}
                eventDate={room?.eventDate}
              />
            ))}
          </div>
          {/*......................................
                  *FLOATING BTNS FOR HORIZONTAL SCROLL
               ......................................*/}
          {data?.length && data.length > 3 ? (
            <>
              <div
                className=" bg-[rgba(0,0,0,.3)]  hover:bg-[rgba(0,0,0,.6)]   w-[3.125rem]
                        h-[3.125rem] rounded-full
                        z-10 hidden lg:flex lg:absolute  left-10 top-[50%] 
                        "
              >
                <FontAwesomeIcon
                  onClick={() => scrollLeft(scrollRef)}
                  icon={faArrowLeft}
                  className="flex text-[1.25rem] self-center mx-auto text-[#00bcd7]"
                />
              </div>

              <div
                className="bg-[rgba(0,0,0,.3)]  hover:bg-[rgba(0,0,0,.6)]  z-10 hidden
             lg:flex lg:absolute text-[2rem]
               w-[3.125rem] h-[3.125rem] rounded-full right-10 top-[50%]"
              >
                <FontAwesomeIcon
                  onClick={() => scrollRight(scrollRef)}
                  icon={faArrowRight}
                  className="flex text-[1.25rem] self-center mx-auto text-[#00bcd7]"
                />
              </div>
            </>
          ) : null}
        </>
      ) : (
        <p className="text-black-40 text-[1rem] md:text-[1.6rem] font-[500] mb-[2rem]">
          No events available.
        </p>
      )}
    </div>
  );
};

export default Upcoming;
