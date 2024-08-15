
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
 
export function InputSubscribe() {
  const placeholders = [
    "Enter your email to stay updated with the latest news.",
    "Be the first to receive our exciting updates.",
    "Subscribe now for exclusive insights and offers.",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[15rem] w-full lg:max-w-[800px] m-auto flex flex-col justify-center  items-center px-4 border-b border-white">
      <h2 className="text-xl text-center sm:text-5xl dark:text-white text-white my-5 z-20">
        Ask Aceternity UI Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}