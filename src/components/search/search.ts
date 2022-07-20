import Block from "../../utils/block";
import search from "./search.tml";
import './search.scss'

class Search extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(search, this.props);
  }
}

export default Search;
