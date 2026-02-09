import { Header, FooterSecondary } from "@/components/layout";
import CateringHero from "@/components/catering/CateringHero";
import CateringMenu from "@/components/catering/CateringMenu";
import CateringGallery from "@/components/catering/CateringGallery";
import WhyChoose from "@/components/catering/WhyChoose";
import Book from "@/components/catering/Book";

export default function CateringPage() {
    return (
        <div className="min-h-screen font-inter">
            <Header />

            <main className="pt-28">
                <CateringHero />
                <CateringMenu />
                <CateringGallery />
                <WhyChoose />
                <Book />
            </main>
            <FooterSecondary />
        </div>
    );
}
