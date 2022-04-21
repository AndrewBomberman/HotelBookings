import Search from "../components/Search"


export default function Home() {
  return (
    <div className="Home">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <Search />
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}
