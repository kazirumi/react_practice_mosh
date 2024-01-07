import { IoHeart } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { useState } from "react";
interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    onClick();
    setLiked(!liked);
  };

  return (
    <div>
      {liked && <IoHeart color="red" size={50} onClick={handleClick} />}
      {liked || <IoIosHeartEmpty size={50} onClick={handleClick} />}
    </div>
  );
};

export default Like;
