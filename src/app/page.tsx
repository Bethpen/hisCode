const IndexPage = () => {
  return (
    <main className="flex flex-col h-[100%] justify-center items-center">

      <div className="mx-auto mt-10">
        <h2 className="fluorescent-text text-3xl md:text-6xl">
          HisCode Global
        </h2>
        <p className="fluorescent-text text-center mt-3 text-lg italic">creating the solutions you need</p>
      </div>

      <div className="my-glow -z-20"></div>

      <footer className="bg-blue-500 w-full py-4 mt-auto">
        <div className="container mx-auto text-white text-center">
          <p>&copy; 2023 HisCode Global. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;
