"use client";
import { pricingTableData } from "@/data";
import CheckIcon from "../icons/checkIcon";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion, Variants } from "framer-motion";

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      delay: 0.3,
      duration: 0.5,
    },
  },
};
export default function PricingCompareTable() {
  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center px-7 pb-16 pt-8 tablet:px-10">
      <h1 className="text-3xl font-bold uppercase">Compare</h1>
      <div className="w-full max-w-[730px] pt-16">
        <table
          className="w-full table-auto text-left text-xs uppercase"
          summary="The Features included in each price plan.">
          <thead className="p-2">
            <tr className="border-b-[1px] border-black">
              <th
                className="py-6 tablet:table-cell tablet:px-6"
                scope="col"
                role="rowHeader">
                The Features
              </th>
              <th
                className="hidden px-6 py-6 tablet:table-cell tablet:text-center"
                scope="col">
                Basic
              </th>
              <th
                className="hidden px-6 py-6 tablet:table-cell tablet:text-center"
                scope="col">
                Pro
              </th>
              <th
                className="hidden px-6 py-6 tablet:table-cell tablet:text-center"
                scope="col">
                Business
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingTableData.map((data, index) => {
              return <TableRow key={index} data={data} />;
            })}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}

type TableRowProps = {
  data: (typeof pricingTableData)[number];
};

function TableRow({ data }: TableRowProps) {
  const { basic, business, pro } = data.tiers;

  const featureMessage = `, included ${!basic && !pro ? "only in" : "in "} ${
    basic ? "basic," : ""
  } ${pro ? "pro," : ""} ${pro ? "and " : ""}${business ? "business" : ""}`;

  const basicMessage = basic ? "included" : "not included";
  const propMessage = pro ? "included" : "not included";
  const businessMessage = business ? "included" : "not included";

  return (
    <tr
      className="flex flex-wrap justify-between gap-y-4 border-b border-brand-grey py-6 pr-[41px] tablet:table-row tablet:pr-0"
      role="row">
      <th
        role="rowHeader"
        className="basis-full font-bold tablet:px-6 tablet:py-6"
        scope="row">
        {data.featureName}
        <VisuallyHidden> {featureMessage}</VisuallyHidden>
      </th>
      <td
        role="cell"
        className="pr-4 before:block before:pb-2 before:text-[10px] before:tracking-[1.67px] before:opacity-50 before:content-[attr(data-cell)] tablet:px-6 tablet:py-6 tablet:text-center tablet:before:hidden"
        data-cell="basic">
        {basic && <CheckIcon className="tablet:mx-auto" />}
        <VisuallyHidden>{basicMessage}</VisuallyHidden>
      </td>
      <td
        role="cell"
        className="pr-4 before:block before:pb-2 before:text-[10px] before:tracking-[1.67px] before:opacity-50 before:content-[attr(data-cell)] tablet:px-6 tablet:py-6 tablet:before:hidden"
        data-cell="pro">
        {pro && <CheckIcon className="tablet:mx-auto" />}
        <VisuallyHidden>{propMessage}</VisuallyHidden>
      </td>
      <td
        role="cell"
        className="before:block before:pb-2 before:text-[10px] before:tracking-[1.67px] before:opacity-50 before:content-[attr(data-cell)] tablet:px-6 tablet:py-6 tablet:before:hidden"
        data-cell="business">
        {business && <CheckIcon className="tablet:mx-auto" />}
        <VisuallyHidden>{businessMessage}</VisuallyHidden>
      </td>
    </tr>
  );
}
