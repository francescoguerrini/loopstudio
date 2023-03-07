import Image from "next/image";

const Item = (props) => {
  return (
    <>
      <div className=" group item">
        <Image
          src={props.img}
          className="hidden w-full duration-200 md:block group-hover:scale-110"
        />
        <Image src={props.img_mob} className="w-full md:hidden" />
        <div className="gradient"></div>
        <h5>{props.text}</h5>
      </div>
    </>
  );
};

export default Item;
