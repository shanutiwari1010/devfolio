// eslint-disable-next-line react/prop-types
const CardComponent = ({ icon, title, description }) => {
  return (
    <div className="w-[542px] h-[276px] bg-customGray font-poppins flex flex-wrap flex-col gap-2 justify-center items-start pl-[31px] pr-[27px] rounded-[20px]">
      <img src={icon} alt="img" />
      <h1 className="font-poppins text-lg font-semibold leading-[50px] tracking-tight text-left">
        {title}
      </h1>
      <p className=" text-customePurple font-medium">{description}</p>
    </div>
  );
};

export default CardComponent;
