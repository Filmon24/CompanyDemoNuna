// src/components/sections/Products.jsx
import { products } from '../../data/products'

const Products = () => {
  return (
    <section id="products" className="section bg-[#270e42] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center animate-slide-up opacity-0">Our <span className="text-primary-lighter">Products</span></h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto animate-slide-up opacity-0" style={{animationDelay: '0.3s'}}>
          Ready-to-use solutions built with the same expertise we bring to custom projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="bg-[#3a195e] rounded-2xl p-6 md:p-8 text-center shadow-xl card-hover animate-scale-in opacity-0" style={{animationDelay: `${0.2 + index * 0.2}s`}}>
              <div className="text-5xl text-primary-lighter mb-6">
                <i className={product.icon}></i>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3">{product.name}</h3>
              <p className="mb-5 text-sm md:text-base">{product.description}</p>
              <div className="text-primary-lighter text-xl mb-6">
                <span className="font-bold">${product.price}</span>/month
              </div>
              <a href="#" className="bg-primary hover:bg-primary-light text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 inline-block">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products