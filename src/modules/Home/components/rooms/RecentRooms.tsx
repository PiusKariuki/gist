import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  roomId: string;
  title: string;
  userName: string;
  price: number;
  shopImage: string;
  userImage: string;
  productImage:string
}

const RecentRooms: React.FC<Props> = ({
  roomId,
  title,
  userName,
  price,
  shopImage,
  userImage,
  productImage,
}) => {
  let navigate = useNavigate();

  return (
    <div
      className="flex flex-col px-[0.5rem] py-[0.3rem] bg-white card-border
         rounded-lg hover:shadow-2xl relative"
      onClick={() => navigate(`/rooms/${roomId}`)}
    >
      <div className="flex flex-row gap-x-[1rem]">
        <div
          className="flex gradient rounded-full h-8 w-8 border-[.1rem] border-gray-300
             self-center"
        >
          <img
            src={userImage}
            alt=""
            className="w-8 h-8 rounded-full self-center object-cover"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "/img/picture.png";
            }}
          />
        </div>

        <div className="flex flex-col w-[16rem]">
          <p className="text-black-40 font-[500] text-[1rem] mb-[1rem]">
            {title}
            <br />
            <span className="font-[300]">{userName}</span>
          </p>
        </div>
      </div>

      <div className="flex relative gradient border-[0.0625rem] rounded-md">
        {productImage?.length > 0 ? (
          <img
            src={productImage}
            alt=""
            className="flex h-[40vh] w-[25rem] md:w-[25rem]  3xl:w-[52rem] 3xl:h-[20vh]
                  object-cover z-10 rounded-lg"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "/img/picture.png";
            }}
          />
        ) : (
          <img
            src="/img/picture.png"
            alt=""
            className="flex h-[40vh] w-[25rem] md:w-[25rem]  3xl:w-[52rem] 3xl:h-[20vh]
                  object-cover z-10"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "/img/picture.png";
            }}
          />
        )}
      </div>
    </div>
  );
};

export default RecentRooms;
