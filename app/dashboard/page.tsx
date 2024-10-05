import Link from "next/link";
import Button from "../components/common/Button";

export default function Page() {
    return (
        <main className="flex justify-center items-center min-h-screen w-full bg-gray-300">
            <Link href={'/admin'}>
                <Button className="bg-blue-700 text-white font-bold px-5 py-2 rounded-lg mt-4">Go to admin Panel</Button>
            </Link>
        </main>
    )
}