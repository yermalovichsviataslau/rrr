import { memo } from 'react'

function SearchInput({ value, setValue }) {
  return (
    <>
      <input
        type="text"
        placeholder="live search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  )
}

export default memo(SearchInput)
