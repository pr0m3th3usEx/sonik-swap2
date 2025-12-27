import Background from "src/components/background";
import { cn } from "src/lib/utils/style";

export default function Home() {
  return (
    <div className={cn("w-screen h-screen", "flex flex-col gap-12")}>
      <Background />
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        Home
      </main> */}
    </div>
  );
}
