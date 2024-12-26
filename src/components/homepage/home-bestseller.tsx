import Image from "next/image";

const HomeBestSeller = () => {
  return (
    <>
      {/* Best Seller */}
      <section className="best-seller">
        {/* <h1 className="text-theme-color text-3xl text-center py-5">
          Best Seller
        </h1> */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row text-xl">
          <div className="flex flex-col gap-4">
            <Image
              width={582}
              height={700}
              src="/images/cocogu-rec-1.jpg"
              alt=""
              className="rounded-2xl md:mt-48"
            />
            <h2>แก้วปั่นน้ำผลไม้แบบพกพาไร้สาย รุ่น C-WJ1 - Cream</h2>
            <p className="font-bold text-theme-color">&#x0E3F; 590.-</p>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              width={582}
              height={700}
              src="/images/cocogu-rec-2.jpg"
              alt=""
              className="rounded-2xl"
            />
            <h2>เครื่องดูดฝุ่นแรงดูด 16000pa รุ่น Dust WX - สีเขียว</h2>
            <p className="font-bold text-theme-color">&#x0E3F; 690.-</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBestSeller;
