import "../style/main.scss";
import TopList from "../components/TopList";
import Footer from "../components/footer";

function Takker() {
    return (
        <>
            <div className="page-wrapper">
                <header>
                    <TopList />
                </header>
                <main className="main-content">
                    <p>Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet
                        foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård
                        - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer,
                        virksomhedssponsorer og donationer fra fonde.</p>
                    <p>Liste over sponsorer</p>
                </main>

                <Footer />

            </div>
        </>
    );
}

export default Takker;
