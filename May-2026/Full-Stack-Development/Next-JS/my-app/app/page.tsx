import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="pt-10">
                <img width={400} height={400} src="/image.svg" alt="japan" />
                <div className="text-2xl flex items-center justify-center">
                    <h2>Welcome to the Osaka Continental</h2>
                </div>
                <p className="text-xl flex items-center justify-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, numquam?</p>
            </div>
        </>
    );
}
