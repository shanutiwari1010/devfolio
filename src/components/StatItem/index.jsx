// eslint-disable-next-line react/prop-types
const StatItem = ({ icon, data, description }) => {
  return (
    <div className="flex items-center justify-center gap-6 h-14 font-inter ">
      <img src={icon} alt={data} />
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl leading-5">{data}</h2>
        <p className="whitespace-nowrap text-base leading-5">{description}</p>
      </div>
    </div>
  );
};

export default StatItem;
