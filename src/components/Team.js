import Image from "next/image";

const Team = () => {
  return (
    <section className="py-10 md:py-20 pl-12 md:pl-28 pr-4 md:pr-8 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Our team</h2>
          <p className="text-base font-medium leading-tight tracking-tighter">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">28</h2>
              <p className="font-medium text-sm text-slate-500">team members</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider">
                +100
              </h2>
              <p className="font-medium text-sm text-slate-500">projects</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-10 md:mt-0">
                7 years
              </h2>
              <p className="font-medium text-sm text-slate-500">in IT sphere</p>
            </div>
          </div>
          <p className="text-base font-medium leading-tight tracking-tighter mt-12">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It&apos;s
            expensive but worth it
          </p>
        </div>
        <div>
          <Image
            src="/images/Team.png"
            alt="Team"
            width={600}
            height={400}
            className="rounded-[52px] shadow-[0_25px_20px_-15px_rgba(0,0,0,0.5)] mx-auto mt-4 md:mt-12 lg:mt-0 lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
