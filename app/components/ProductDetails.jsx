import { FaStar, FaTruck, FaUndo, FaShieldAlt } from "react-icons/fa";
import Actions from "./Actions";
import ChooseImage from "./ChooseImage";

export default async function ProductDetailsPage({ postId }) {
  // fetch product data
  const response = await fetch(
    `https://dummyjson.com/products/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const product = await response.json();

  return (
    <div className="min-h-[calc(100vh-80px)] bg-white mt-20 py-8">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
          
          {/* Product Images - Clean */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className=" w-[300px] h-[300p] mx-auto relative overflow-hidden rounded-lg">
                <img id="image"
                  src={product.images[0]}
                  alt={product.title}
                  className=" w-full h-full "
                />
              </div>
            </div>

            <ChooseImage  product={product}/>
          </div>


          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-blue-500 text-sm font-medium">
                  {product.brand || 'Brand'}
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  In Stock {product.stock }
                </span>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i}
                      className={`text-sm ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">({product.rating})</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
              <span className="text-lg text-gray-500 line-through">
                ${product.price}
              </span>
              <span className="text-red-500 text-sm font-medium">
                Save {product.discountPercentage}%
              </span>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>



            {/* Actions */}
            <Actions product={product}/>


            {/* Services */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
              <div className="text-center p-3">
                <FaTruck className="text-blue-500 mx-auto mb-1" />
                <div className="text-xs text-gray-600">Free Shipping</div>
              </div>
              <div className="text-center p-3">
                <FaUndo className="text-blue-500 mx-auto mb-1" />
                <div className="text-xs text-gray-600">30-Day Return</div>
              </div>
              <div className="text-center p-3">
                <FaShieldAlt className="text-blue-500 mx-auto mb-1" />
                <div className="text-xs text-gray-600">2-Year Warranty</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}