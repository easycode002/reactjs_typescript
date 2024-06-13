import { Modifiers } from "../../components/molecules/Modifiers";
import { Responsiveness, Responsiveness01 } from "../../components/molecules/Responsiveness";

export default function TailwindCss() {
    return (
        <div>
            <Responsiveness />
            <Responsiveness01/>
            <main className="flex min-h-screen items-center justify-center bg-zinc-100 p-8 dark:bg-zinc-950">
                <Modifiers />
            </main>
        </div>
    );
}