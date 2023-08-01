import { useRouter } from "next/router";

const step = [
  { step: 1, name: "Menu", url: "/" },
  { step: 2, name: "Summary", url: "/summary" },
  { step: 3, name: "Total and data", url: "/total" },
];

const Step = () => {
  const router = useRouter();
  const progressBarPercent = () => {
    switch (router.pathname) {
      case "/":
        return 2;
      case "/summary":
        return 50;
      case "/total":
        return 100;
    }
  };
  return (
    <>
      <div className="flex justify-between mb-5">
        {step.map((item) => (
          <button
            key={`step-${item.name}`}
            type="button"
            className="text-2xl font-bold"
            onClick={() => {
              router.push(item.url);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{
            width: `${progressBarPercent()}%`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Step;
