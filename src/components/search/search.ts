import Block from "../../utils/block";
import search from "./search.tml";
import './search.scss'

interface ISearch {
}

class Search extends Block {
  constructor(props?: ISearch) {
    super("div", props);
  }

  render() {
    return this.setTemplate(search, this.props);
  }
}

export default Search;
