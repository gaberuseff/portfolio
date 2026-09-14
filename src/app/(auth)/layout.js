import BackBtn from "@/components/BackBtn";
import Image from "next/image";

export default function layout({children}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex">
          <BackBtn>Back</BackBtn>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            {/* {children} */}
            <p className="text-center text-lg font-semibold text-muted-foreground">
              The Client Dashboard Under Construction, I'll be back soon with
              the complete project! 🛠️
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/imgs/web-dev.jpg"
          alt="Image"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGPY2N74//f33/+vrz34z7Cw7j+DkZExg46ODsP79+8BABi1EClEspwUAAAAAElFTkSuQmCC"
          className="object-cover"
        />
      </div>
    </div>
  );
}
