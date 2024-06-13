import React from "react";
import { listEmp, listProduct } from "../../data/data";

export const Responsiveness: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 sm:bg-indigo-600 md:bg-red-400 lg:to-blue-950 xl:bg-yellow-600">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-xl md:text-3xl lg:text-4xl xl:text-4xl">Meet our leadership!</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-2">
          {
            listEmp.map((emp) => (
              <li key={emp.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    src={emp.img} alt=""
                    className="lg:h-20 lg:w-20 lg:rounded-lg sm:h-20 sm:20 sm:rounded-full"
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{emp.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{emp.role}</p>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export const Responsiveness01: React.FC = () => {
  return (
    <>
      <div className="bg-red-200 px-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Customer also purchased</h1>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              listProduct.map((products) => (
                <div key={products.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={products.imageSrc}
                      alt={products.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={products.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {products.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{products.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{products.price}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
