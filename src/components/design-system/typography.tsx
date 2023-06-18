import * as Separator from "@radix-ui/react-separator";

export default function Typography() {
  return (
    <section className="space-y-12">
      <h2 className="text-2xl font-bold uppercase">
        <span className="font-bold opacity-25">02</span> Typography
      </h2>
      <h3 className="text-xl font-bold opacity-50">Font Family</h3>
      <div className="space-y-4 tablet:flex tablet:space-y-0">
        <h4 className="flex-1 text-2xl font-bold tracking-[-1.43px]">
          DM Sans
        </h4>
        <p className="flex-1 text-xl uppercase leading-8">
          <span className="font-bold">
            a b c d e f g h i j k l m n o p q r s t u v w x y z
          </span>{" "}
          a b c d e f g h i j k l m n o p q r s t u v w x y z !@#$%^&*()
        </p>
      </div>
      <Separator.Root className="my-[15px] bg-brand-grey data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
      <div className="space-y-16 tablet:flex tablet:space-y-0">
        <div className="flex-1 space-y-8">
          <h3 className="text-xl font-bold opacity-50">Font Family</h3>
          <div className="space-y-2">
            <p className="text-sm  opacity-50">
              H1/H2 (large); 40px; 48px line; 4.17 Character
            </p>
            <p className="text-2xl font-bold tablet:text-3xl">DM SANS BOLD</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm opacity-50">
              H2; 24px; 25px line; 0 Character
            </p>
            <p className="text-2xl font-bold">DM SANS BOLD</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm opacity-50">
              H3; 18px; 25px line; 0 Character
            </p>
            <p className="text-lg font-bold">DM SANS BOLD</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm opacity-50">
              H4; 12px; 16px line; 2 Character
            </p>
            <p className="text-xs font-bold ">DM SANS BOLD</p>
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <h3 className="text-xl font-bold  opacity-50">Body</h3>
          <div className="space-y-2">
            <p className="text-sm  opacity-50">
              Body; DM Sans Regular; 15px; 25px line; 0 Character
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
