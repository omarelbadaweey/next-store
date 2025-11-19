// app/checkout/page.jsx
import FormCheck from "../components/FormCheck";

export const metadata = {
  title: "Checkout | Payment & Shipping",
};

export default async function CheckoutPage() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center mt-20 px-6">
          

    <FormCheck/>
    </section>
  );
}
