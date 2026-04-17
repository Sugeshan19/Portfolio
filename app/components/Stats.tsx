import CountUp from "./CountUp";

export default function Stats(): React.JSX.Element {
  return (
    <section className="px-6 pb-14">
      <div className="container mx-auto max-w-6xl">
        <div className="py-2">

          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:gap-12">
            <div>
              <p className="text-6xl font-bold text-white lg:text-7xl [font-family:Algerian,serif]">
                <CountUp to={33} duration={2.2} />+
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/65">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-6xl font-bold text-white lg:text-7xl [font-family:Algerian,serif]">
                <CountUp to={17} duration={2.2} delay={0.15} />+
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/65">
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}