import { Responsiveness } from "../../components/molecules/Responsiveness";

export default function TailwindCss() {
    return (
        <>
            <main className="flex min-h-screen items-center justify-center bg-zinc-100 p-8 dark:bg-zinc-950">
                <Responsiveness />
            </main>
        </>
    );
}