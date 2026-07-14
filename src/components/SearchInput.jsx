import { memo } from "react"

const SearchInput = ({value, onChange}) => {


  return(
    <div>
      <label htmlFor="">
        Search:
        <input type="text" placeholder="Search..." value={value} onChange={onChange}/>
      </label>
    </div>
  )
}

export default memo(SearchInput) 