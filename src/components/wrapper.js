import Nav from "./nav";

function Wrapper({ children }) {
  return (
    <>
      <Nav />
      <div className="lg:pl-[72px] pb-[72px] pt-12 bg-primary">{children}</div>
    </>
  );
}

export default Wrapper;
