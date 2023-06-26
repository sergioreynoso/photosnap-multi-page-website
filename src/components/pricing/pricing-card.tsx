import PrimaryButton from "../buttons/primary-button";

type Props = {
  dark?: boolean;
  title: string;
  body: string;
  price: string;
  paymentInterval: string;
};

export default function PricingCard({
  dark = false,
  title,
  body,
  price,
  paymentInterval,
}: Props) {
  const Accent = () =>
    dark && (
      <span className="absolute top-0 block h-[6px] w-full bg-brand-accent" />
    );

  const theme = dark
    ? "bg-brand-black text-brand-white desktop:h-[470px] desktop:justify-center desktop:gap-10 "
    : "bg-brand-grey/30 text-brand-black";

  return (
    <>
      <div
        className={`relative flex h-[407px] flex-col items-center justify-between ${theme} px-5 pb-10 pt-14 tablet:hidden`}>
        <Accent />
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-[18px] text-xl font-bold">{title}</h2>
          <p className="text-center opacity-60">{body}</p>
        </div>
        <p className="text-center">
          <span className="text-3xl font-bold">{price}</span>
          <br />
          <span className="opacity-60">{paymentInterval}</span>
        </p>
        <PrimaryButton href="" bgColor={dark ? "white" : "black"}>
          Pick A Plan
        </PrimaryButton>
      </div>
      {/* TABLET */}
      <div
        className={`relative h-[270px] grid-cols-2 gap-y-8 tablet:grid ${theme} hidden p-10 desktop:hidden`}>
        <Accent />
        <div className="flex flex-col items-start justify-center">
          <h2 className="mb-[18px] text-xl font-bold">{title}</h2>
          <p className="opacity-60">{body}</p>
        </div>
        <p className="text-right">
          <span className="text-3xl font-bold">{price}</span>
          <br />
          <span className="opacity-60">{paymentInterval}</span>
        </p>
        <PrimaryButton href="" bgColor={dark ? "white" : "black"}>
          Pick A Plan
        </PrimaryButton>
      </div>
      {/* DESKTOP */}
      <div
        className={`relative hidden h-[407px] flex-col items-center justify-between desktop:flex ${theme} w-[350px] px-10 pb-10 pt-14`}>
        <Accent />
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-[18px] text-xl font-bold">{title}</h2>
          <p className="text-center opacity-60">{body}</p>
        </div>
        <p className="text-center">
          <span className="text-3xl font-bold">{price}</span>
          <br />
          <span className="opacity-60">{paymentInterval}</span>
        </p>
        <PrimaryButton href="" bgColor={dark ? "white" : "black"}>
          Pick A Plan
        </PrimaryButton>
      </div>
    </>
  );
}