import Link from "next/link";
import PostDetails from "../components/ProductDetails";
import { Suspense } from "react";
import Loading from "../[postId]/loading";
export default async function postDetailsPage({ params }) {
    
    const { postId } = await params;

    return (
        <section className="mt-22">
            <Suspense fallback={<Loading/>}>

            <PostDetails postId={postId}/>
            </Suspense>

            {/* <Link href="/" className="block w-fit mx-auto mt-10 px-5 py-2 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition duration-300">
                Back to Home
            </Link> */}
        </section>
    )
}
