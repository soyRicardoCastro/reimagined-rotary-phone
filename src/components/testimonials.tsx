import Image from "next/image"

export const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h3 className="text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
          Que dicen de nosotras
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-12 xl:grid-cols-3">
          <div className="rounded-lg border p-8 dark:border-gray-700">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className="-mx-2 mt-8 flex items-center">
              <Image
                className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300 dark:ring-gray-700"
                src="/images/avatar.webp"
                alt=""
                width={60}
                height={60}
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Robert
                </h1>
                <span className="text-sm text-gray-500">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-8 dark:border-gray-700">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className="-mx-2 mt-8 flex items-center">
              <Image
                className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300 dark:ring-gray-700"
                src="/images/avatar.webp"
                alt=""
                width={60}
                height={60}
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Jeny Doe
                </h1>
                <span className="text-sm text-gray-500">
                  CEO, Jeny Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-8 dark:border-gray-700">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className="-mx-2 mt-8 flex items-center">
              <Image
                className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300 dark:ring-gray-700"
                src="/images/avatar.webp"
                alt=""
                width={60}
                height={60}
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Ema Watson{" "}
                </h1>
                <span className="text-sm text-gray-500">
                  Marketing Manager at Stech
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
