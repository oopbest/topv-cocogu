import BannerSlider from "@/components/banner-slider";
import HomeBestSeller from "@/components/homepage/home-bestseller";
import HomeFollowUs from "@/components/homepage/home-followus";
import HomeStandard from "@/components/homepage/home-standard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="mx-auto container p-4">
        {/* <h1 className="text-3xl uppercase pt-6 text-theme-secondary pb-6">
          Switchflex Brands
        </h1> */}
        <BannerSlider />
        <HomeBestSeller />

        {/* Product Cocogu */}
        <div className="flex flex-col sm:flex-row items-center mt-10 bg-theme-color rounded-3xl">
          <div className="flex-1 flex-col p-10">
            <h3 className="text-2xl py-4">
              COCOGU Induction Cooker เตาแม่เหล็กไฟฟ้า 1500 วัตต์ รุ่น IC-3 -
              รับประกัน 3 ปี
            </h3>
            <p>
              เตาแม่เหล็กไฟฟ้า ปุ่มควบคุมด้วยระบบสัมผัส ในการทำอาหารต่างๆ
              อย่างง่ายดาย มีฟังก์ชั่นการทำอาหารอัตโนมัติ ตั้งเวลาการทำอาหารได้
              เพิ่มความปลอดภัยในการใช้งานด้วย ฟังก์ชัน Child Lock
              ป้องกันการกดแผงควบคุมการทำงานโดยไม่ตั้งใจ
              ความร้อนจากหัวเตาส่งผ่านไปยังก้นภาชนะโดยตรง
              ทำให้ความร้อนเข้าสู่อาหารได้อย่างทั่วถึง ทำอาหารได้อย่างรวดเร็ว
              ให้ความปลอดภัยในการใช้งาน และยังประหยัดพลังงานอีกด้วย หม้อและกระทะ
              ที่แนะนำ หม้อเหล็ก (สเตนเลสสตีล, เหล็กหล่อ, เหล็กหล่อ)
              ที่มีก้นแบนราบโดยมีเส้นผ่านศูนย์กลางของหม้อมากกว่า 10 ซม.
              แต่น้อยกว่า 20 ซม.
            </p>
            <button className="flex items-center px-6 py-3 mt-3 bg-white rounded relative group transition">
              <span className="mr-2 text-theme-color">ดูเพิ่มเติม</span>
              <span className="transform transition-transform duration-300 ease-in-out translate-x-0 group-hover:translate-x-1">
                <Image
                  src="/images/btn-arrow-color.svg"
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </div>
          <div className="flex-1 lg:flex-none">
            <Image
              width={750}
              height={281}
              src="/images/product-cocogu-1.jpg"
              alt="Namiko x Linsy Modern ตู้วางทีวี"
            />
          </div>
        </div>

        {/* Product Cocogu */}
        <div className="flex flex-col sm:flex-row items-center mt-10">
          <div className="flex-1 flex-col text-center p-10">
            <h3 className="text-2xl py-5 font-bold">
              พัดลมไอเย็น 62 ลิตร รุ่น AC-M1 - สีเทา
            </h3>
            <p>
              พัดลมไอเย็นช่วยในการระบายความร้อนและปล่อยอากาศเย็นได้ไกล
              (สามารถเพิ่มเกล็ดน้ำแข็งหรือก้อนน้ำแข็งได้)
              สามารถปรับลดอุณหภูมิรอบพื้นที่ใกล้เคียงให้ลดลงได้ประมาณ 2-5 องศา
              เสียงเงียบ ช่องระบายอากาศมีขนาดใหญ่
              ให้ความเย็นด้วยการให้น้ำไหลผ่านแผงรังผึ้ง ( Cooling Pad ) ทั้ง 3
              ด้าน แต่ไม่มีละอองน้ำออกมาจากเครื่อง ล้อเลื่อน 4 ล้อ ลื่นไหล
              แข็งแรง ช่วยเพิ่มความสะดวกในการเคลื่อนย้าย
            </p>
            <div className="inline-block">
              <button className="flex px-6 py-3 mt-3 bg-theme-color text-white rounded group transition">
                <span className="mr-2">ดูเพิ่มเติม</span>
                <span className="transform transition-transform duration-300 ease-in-out translate-x-0 group-hover:translate-x-1">
                  <Image
                    src="/images/btn-arrow-white.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                  />
                </span>
              </button>
            </div>
          </div>
          <div className="flex-1 lg:flex-none">
            <Image
              width={683}
              height={303}
              src="/images/product-cocogu-2.png"
              alt="SCE เตาแม่เหล็กไฟฟ้า รุ่น IH1 - รับประกัน 1 ปี"
              className="max-w-full"
            />
          </div>
        </div>
      </section>
      <HomeStandard />
      <HomeFollowUs />
    </>
  );
}
