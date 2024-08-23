import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const TabFilters = ({ titles, filters, setOwnData, ownData }: any) => {
  const [pos, setPos] = useState('');
  const [width, setWidth] = useState('');
  const handleJoin = (title: string) => {
    setOwnData(title);
  };

  // to make it dynamic (number of filters)
  const activePosition = (own: string) => {
    filters.forEach((element: string, i: number) => {
      if (element === own) {
        setPos(`${(i / filters.length) * 100}%`);
        setWidth(`${100 / filters.length}%`);
      }
    });
  };

  useEffect(() => {
    activePosition(ownData);
  }, [ownData]);

  return (
    <div className="w-full flex rounded-xl mb-6 md:mb-10 relative">
      <div className="absolute bottom-0 start-0 duration-300 w-full h-[6px] rounded-xl bg-grayColor/50 z-10">
        <Box
          className={`absolute duration-300 h-full rounded-xl bg-mainColor`}
          sx={{
            width: width,
            "html[dir='rtl'] &": {
              right: pos,
            },
            "html[dir='ltr'] &": {
              left: pos,
            },
          }}
        ></Box>
      </div>
      {titles?.map((ele: string, i: number) => (
        <div
          key={i}
          onClick={() => handleJoin(filters?.[i])}
          className={`flex-1 flex_center p-5 rounded-2xl cursor-pointer duration-300 text-center text-base-l font-bold ${ownData === filters?.[i] ? "" : "text-grayColor/50"
            }`}
        >
          {ele}
        </div>
      ))}
    </div>
  );
};

export default TabFilters;
