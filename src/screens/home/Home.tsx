import { HeroImage } from "@/components";

export const HomePage = () => {
    return <>
        <div className="relative">
            <section>
                <HeroImage
                    imageUrl="/w1.jpg"
                    title="EscapeVerse "
                />
            </section>
            <section className="my-20"></section>
        </div>
    </>
}

export default HomePage;