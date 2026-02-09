import { Header, FooterSecondary } from "@/components/layout";
import CateringMenu from "@/components/catering/CateringMenu";

export default function CateringMenuPage() {
    return (
        <div className="min-h-screen font-inter">
            <Header />

            <main className="pt-28">
                <CateringMenu />
            </main>

            <FooterSecondary />
        </div>
    );
}
