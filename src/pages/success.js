import { CheckCircleIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router";
import Header from "../components/Header";

function sucess() {
    const router = useRouter();
    
    return (
        <div className='bg-green-100 h-screen'>
            <Header />

            <main className='max-w-screen.lg mx-auto'>
                <div className='flex flex-col p-10 bg-white'>
                    <div className='items-center flex space-x-2 mb-5'>
                        <CheckCircleIcon className='text-green-500 h-10' />
                        <h1 className='text-3xl'>Thank you! Order confirmed!</h1>
                    </div>
                    <p>
                        Thank for shopping with us. We'll send a confirmationonce your item  has shipped, if you would like to check the status of your order(s), please click link below:
                    </p>
                    <button onClick={() => router.push("/orders")} className='button mt-8'>Go to my orders</button>
                </div>
            </main>
        </div>
    )
}

export default sucess
