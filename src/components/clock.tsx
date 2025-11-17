interface ClockProps {
  city: string;
  delay: number;
}

export function Clock({ city, delay }: ClockProps) {
  return (
    <li className="flex flex-col items-center max-w-[1.8125rem]">
      <span className="uppercase whitespace-nowrap font-[Helvetica] text-[0.5rem] block mb-0.5 leading-[120%]">
        {city}
      </span>
      <span
        className="w-[1.8125rem] h-[1.8125rem] relative rotate-180 rounded-full border border-dotted border-[#9c9a92] leading-[120%]"
        role="figure"
        aria-label={`clock showing estimated time in ${city}`}
      >
        {/* Second hand */}
        <span
          className="origin-[50%_0] absolute top-2/4 bg-[#af1f1b] w-[0.03125rem] h-3 left-[calc(50%-0.015625rem)] leading-[120%] after:content-[''] after:bg-[#af1f1b] after:w-[0.03125rem] after:h-px after:absolute after:left-0 after:-top-px"
          style={{
            animation: `rotation 60s linear infinite`,
            animationDelay: `-40s`,
          }}
        />
        {/* Minute hand */}
        <span
          className="origin-[50%_0] absolute top-2/4 bg-[#1f1d1a] w-px h-2.5 left-[calc(50%-0.03125rem)] leading-[120%] after:content-[''] after:bg-[#1f1d1a] after:w-px after:h-px after:absolute after:left-0 after:-top-px"
          style={{
            animation: `rotation 3600s linear infinite`,
            animationDelay: `-1260s`,
          }}
        />
        {/* Hour hand */}
        <span
          className="origin-[50%_0] absolute top-2/4 bg-[#1f1d1a] w-px h-1.5 left-[calc(50%-0.03125rem)] leading-[120%] after:content-[''] after:bg-[#1f1d1a] after:w-px after:h-px after:absolute after:left-0 after:-top-px"
          style={{
            animation: `rotation 43200s linear infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      </span>
    </li>
  );
}
