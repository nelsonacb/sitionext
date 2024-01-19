const Card = ({
  srcimagen,
  altimagen,
  titulo,
  texto,
  srcimagenfooter,
  altimagenfooter,
  autor,
  fecha
}) => {
  return (
    <article className="overflow-hidden rounded bg-white shadow flex flex-col">
      <div className="h-52">
        <img
          className="h-full w-full object-cover object-center"
          src={srcimagen}
          alt={altimagen}
        />
      </div>
      <div className="space-y-3 p-5 flex-1">
        <h3 className="text-xl text-slate-800 font-semibold leading-tight">
          {titulo}
        </h3>
        <p className="text-slate-500 hidden md:block">{texto}</p>
      </div>
      <div className="flex space-x-2 p-5">
        <img
          className="h-10 w-10 rounded-full"
          src={srcimagenfooter}
          alt={altimagenfooter}
        />
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold leading-4 text-slate-600">
            {autor}
          </span>
          <span className="text-sm text-slate-500">{fecha}</span>
        </div>
      </div>
    </article>
  );
};
export default Card;
