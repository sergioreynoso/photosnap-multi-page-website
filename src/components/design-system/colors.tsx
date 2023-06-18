export default function Colors() {
  return (
    <section className="space-y-12">
      <h2 className="text-2xl font-bold uppercase">
        <span className="font-bold text-brand-black opacity-25">01</span> Colors
      </h2>
      <div className=" justify-between gap-8 space-y-8 tablet:flex tablet:flex-wrap">
        <div className="flex-[100%] space-y-6">
          <span className="block h-24 w-24 rounded-full bg-brand-accent"></span>
          <div>
            <h3 className="mb-4 text-xl font-bold">Main Accent</h3>
            <ul className="opacity-75">
              <li>HEX / RGB / HSL:</li>
              <li>{`#FFC593, 	rgb(255, 197, 147),	28°, 100%, 79%`}</li>
              <li>{`#BC7198, 	rgb(188, 113, 152),	329°, 36%, 59%`}</li>
              <li>{`#5A77FF, 	rgb(90, 119, 255)	229°, 100%, 67%`}</li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <span className="block h-24 w-24 rounded-full bg-brand-black dark:border"></span>
          <div>
            <h3 className="mb-4 text-xl font-bold">Pure Black</h3>
            <ul className="opacity-75">
              <li>HEX : #000000</li>
              <li>{`RGB : rgb(0, 0, 0)`}</li>
              <li>{`HSL : hsl(0°, 0%, 0%)`}</li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <span className="block h-24 w-24 rounded-full bg-brand-grey"></span>
          <div>
            <h3 className="mb-4 text-xl font-bold">Light Grey</h3>
            <ul className="opacity-75">
              <li>HEX : #DFDFDF</li>
              <li>{`RGB : rgb(223, 223, 223)`}</li>
              <li>{`HSL : hsl(0°, 0%, 87%)`}</li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <span className="block h-24 w-24 rounded-full border border-brand-grey bg-brand-white"></span>
          <div>
            <h3 className="mb-4 text-xl font-bold">White</h3>
            <ul className="opacity-75">
              <li>HEX : #FFFFFF</li>
              <li>{`RGB :rgb(255, 255, 255)`}</li>
              <li>{`HSL : hsl(0°, 0%, 100%)`}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
