const stats = [
  { value: "120+", label: "Clients Served" },
  { value: "25+", label: "African Nations" },
  { value: "500+", label: "Projects Delivered" },
  { value: "15", label: "Years of Excellence" },
];

const StatsBar = () => {
  return (
    <section className="relative py-16 bg-primary">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl lg:text-4xl font-bold text-accent mb-1">
                {stat.value}
              </p>
              <p className="text-primary-foreground/60 font-body text-sm tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
