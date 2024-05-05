import FAQHead from "./components/FAQHead";
import FAQBody from "./components/FAQBody";

const App = () => {
    return (
        <main className="font-body">
            <section className="min-h-screen bg-small bg-pin-970 bg-no-repeat bg-contain bg-local flex items-center justify-center sm:bg-large">
                <div className="bg-whi-100 w-11/12 max-w-lg rounded-xl py-8 px-5 shadow-lg my-10 sm:py-10 sm:px-8">
                    {/* FAQ Head */}
                    <FAQHead />
                    {/* FAQ Body */}
                    <FAQBody />
                </div>
            </section>
        </main>
    );
}

export default App;