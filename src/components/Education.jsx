import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        Education
      </h1>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{education.field}</h6>
            <p>{education.institution}</p>
            <p className="text-neutral-400">{education.graduate}</p>
            <p className="text-neutral-400">{education.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
